// Module ID: 7990
// Function ID: 63244
// Name: formatExpirationLabel
// Dependencies: [3712, 1212, 2]
// Exports: default

// Module 7990 (formatExpirationLabel)
function formatExpirationLabel(expiry) {
  const tmp = importDefault(3712)();
  if (expiry > tmp) {
    const diffResult = expiry.diff(tmp, "days");
    if (diffResult > 1) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { days: diffResult };
      return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp, "hours");
      if (diffResult1 > 1) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { hours: diffResult1 };
        return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.BWqf0c, obj);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { minutes: expiry.diff(tmp, "minutes") };
        return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["3SLXAz"], obj);
      }
    }
  }
}
const result = require("set").fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
};
export { formatExpirationLabel };
