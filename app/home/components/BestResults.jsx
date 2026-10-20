'use client';

import React from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./home.module.scss";

const fetchStats = async () => {
  const res = await fetch("/api/stats");
  if (!res.ok) {
    throw new Error("Lỗi khi lấy dữ liệu");
  }
  return res.json();
};

export default function BestResults() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  });

  if (isLoading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Có lỗi: {error.message}</div>;

  return (
    <section className={styles.bestResults} aria-label="Best Results">
      <h2 className={styles.bestResultsTitle}>Our best results for the year</h2>
      <p className={styles.bestResultsDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
        mattis vel feugiat erat tortor eleifend.
      </p>
      <div className={styles.statsGrid}>
        {data.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statValue}>
              <span style={{ color: stat.color }}>{stat.value}</span>
              {stat.unit && <span className={styles.statUnit}> {stat.unit}</span>}
            </div>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}