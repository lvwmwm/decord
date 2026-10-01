// Module ID: 4349
// Function ID: 4350
// Name: startOfYesterday
// Dependencies: []
// Exports: default

// Module 4349 (startOfYesterday)

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
