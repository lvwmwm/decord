// Module ID: 13012
// Function ID: 99014
// Name: CanonicalizeTimeZoneName
// Dependencies: []

// Module 13012 (CanonicalizeTimeZoneName)
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
