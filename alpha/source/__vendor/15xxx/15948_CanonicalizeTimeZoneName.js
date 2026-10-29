// Module ID: 15948
// Function ID: 15949
// Name: CanonicalizeTimeZoneName
// Dependencies: []
// Exports: CanonicalizeTimeZoneName

// Module 15948 (CanonicalizeTimeZoneName)

export function CanonicalizeTimeZoneName(str, arg1) {
  let uppercaseLinks;
  let zoneNames;
  ({ zoneNames, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const tmp2 = uppercaseLinks[formatted] || zoneNames.reduce((acc, item) => {
    acc[item.toUpperCase()] = item;
    return acc;
  }, {})[formatted];
  if ("Etc/UTC" !== tmp2) {
    if ("Etc/GMT" !== tmp2) {
      return tmp2;
    }
  }
  return "UTC";
}
