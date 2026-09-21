// Module ID: 14498
// Function ID: 14499
// Name: IsValidTimeZoneName
// Dependencies: []
// Exports: IsValidTimeZoneName

// Module 14498 (IsValidTimeZoneName)

export const IsValidTimeZoneName = function IsValidTimeZoneName(str, arg1) {
  ({ zoneNamesFromData, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const set = new Set();
  const set1 = new Set();
  const mapped = zoneNamesFromData.map((item) => item.toUpperCase());
  const item = mapped.forEach((item) => set.add(item));
  const keys = Object.keys(uppercaseLinks);
  const item1 = keys.forEach((item) => {
    set1.add(item.toUpperCase());
    set.add(uppercaseLinks[item].toUpperCase());
  });
  return set.has(formatted) || set1.has(formatted);
};
