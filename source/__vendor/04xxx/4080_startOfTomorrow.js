// Module ID: 4080
// Function ID: 4081
// Name: startOfTomorrow
// Dependencies: []
// Exports: default

// Module 4080 (startOfTomorrow)

export default function startOfTomorrow() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date.getDate() + 1);
  date2.setHours(0, 0, 0, 0);
  return date2;
};
export default exports.default;
