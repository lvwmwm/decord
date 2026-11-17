// Module ID: 5020
// Function ID: 5021
// Name: startOfYesterday
// Dependencies: []
// Exports: default

// Module 5020 (startOfYesterday)

export default function startOfYesterday() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date1 = date.getDate();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date1 - 1);
  date2.setHours(0, 0, 0, 0);
  return date2;
};
