// Module ID: 4629
// Function ID: 4630
// Name: startOfTomorrow
// Dependencies: []
// Exports: default

// Module 4629 (startOfTomorrow)

export default function startOfTomorrow() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date1 = date.getDate();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date1 + 1);
  date2.setHours(0, 0, 0, 0);
  return date2;
};
