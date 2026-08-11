// Module ID: 13485
// Function ID: 13486
// Name: __exportStarResult1
// Dependencies: []

// Module 13485 (__exportStarResult1)
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
