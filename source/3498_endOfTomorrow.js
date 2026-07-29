// Module ID: 3498
// Function ID: 3499
// Name: endOfTomorrow
// Dependencies: []
// Exports: default

// Module 3498 (endOfTomorrow)

export default function endOfTomorrow() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date.getDate() + 1);
  date2.setHours(23, 59, 59, 999);
  return date2;
};
export default exports.default;
