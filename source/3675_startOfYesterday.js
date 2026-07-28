// Module ID: 3675
// Function ID: 28033
// Name: startOfYesterday
// Dependencies: []
// Exports: default

// Module 3675 (startOfYesterday)

export default function startOfYesterday() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date.getDate() - 1);
  date2.setHours(0, 0, 0, 0);
  return date2;
};
export default exports.default;
