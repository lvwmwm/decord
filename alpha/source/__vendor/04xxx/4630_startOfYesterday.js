// Module ID: 4630
// Function ID: 4631
// Name: startOfYesterday
// Dependencies: []
// Exports: default

// Module 4630 (startOfYesterday)

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
