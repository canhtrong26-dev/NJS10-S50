import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

export const metadata = {
  title: "IPDC Finance - Chase Your Dream With Us",
  description: "IPDC Finance Limited - Personal Loan, Car Loans, Home Loan, Deposit Schemes",
};

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}