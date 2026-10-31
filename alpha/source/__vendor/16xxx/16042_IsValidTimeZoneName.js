// Module ID: 16042
// Function ID: 16043
// Name: IsValidTimeZoneName
// Dependencies: []
// Exports: IsValidTimeZoneName

// Module 16042 (IsValidTimeZoneName)
let set;


export function IsValidTimeZoneName(str, arg1) {
  let uppercaseLinks;
  let zoneNamesFromData;
  ({ zoneNamesFromData, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  set = new Set();
  const set1 = new Set();
  const mapped = zoneNamesFromData.map((item) => item.toUpperCase());
  const item = mapped.forEach((item) => set.add(item));
  const keys = Object.keys(uppercaseLinks);
  const item1 = keys.forEach((item) => {
    set1.add(item.toUpperCase());
    const str = uppercaseLinks[item];
    set.add(str.toUpperCase());
  });
  const tmp4 = set.has(formatted) || set1.has(formatted);
  return tmp4;
}
