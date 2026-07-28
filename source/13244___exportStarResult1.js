// Module ID: 13244
// Function ID: 101857
// Name: __exportStarResult1
// Dependencies: []

// Module 13244 (__exportStarResult1)
arg5.CanonicalizeTimeZoneName = function CanonicalizeTimeZoneName(str) {
  let uppercaseLinks;
  let zoneNames;
  ({ zoneNames, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const tmp2 = uppercaseLinks[formatted] || zoneNames.reduce((arg0, str) => {
    arg0[str.toUpperCase()] = str;
    return arg0;
  }, {})[formatted];
  if ("Etc/UTC" !== tmp2) {
    if ("Etc/GMT" !== tmp2) {
      return tmp2;
    }
  }
  return "UTC";
};
