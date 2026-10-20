import { NextResponse } from "next/server";

const stats = [
  { value: "57.6", unit: "bn", label: "LOAN PORTFOLIO", color: "#ed017f" },
  { value: "0.95", unit: "%", label: "CLASSIFIED LOAN PORTFOLIO", color: "#010101" },
  { value: "388.5", unit: "%", label: "CLASSIFIED LOAN COVERAGE", color: "#010101" },
  { value: "50.4", unit: "bn", label: "DEPOSIT", color: "#010101" },
  { value: "6.1", unit: "bn", label: "SHAREHOLDERS EQUITY", color: "#010101" },
  { value: "18.51", unit: "%", label: "CAPITAL ADEQUACY RATIO", color: "#010101" },
  { value: "8.5", unit: "bn", label: "MARKET CAPITALIZATION", color: "#010101" },
  { value: "AAA", unit: "", label: "CREDIT RATING", color: "#010101" },
];

export async function GET() {
  return NextResponse.json(stats);
}