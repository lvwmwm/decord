// Module ID: 4461
// Function ID: 4462
// Name: endOfTomorrow
// Dependencies: []
// Exports: default

// Module 4461 (endOfTomorrow)

export default function endOfTomorrow() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date1 = date.getDate();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date1 + 1);
  date2.setHours(23, 59, 59, 999);
  return date2;
};
