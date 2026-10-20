import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomerExperience from "./components/CustomerExperience";
import BusinessPartners from "./components/BusinessPartners";

export const metadata = {
  title: "IPDC Finance - Chase Your Dream With Us",
  description: "IPDC Finance Limited - Personal Loan, Car Loans, Home Loan, Deposit Schemes",
};

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CustomerExperience />
      <BusinessPartners />
    </div>
  );
}