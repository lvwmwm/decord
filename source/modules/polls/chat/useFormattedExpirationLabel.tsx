// Module ID: 7896
// Function ID: 62873
// Name: formatExpirationLabel
// Dependencies: []
// Exports: default

// Module 7896 (formatExpirationLabel)
function formatExpirationLabel(expiry) {
  const tmp = importDefault(dependencyMap[0])();
  if (expiry > tmp) {
    const diffResult = expiry.diff(tmp, "days");
    if (diffResult > 1) {
      const intl3 = require(dependencyMap[1]).intl;
      let obj = { days: diffResult };
      return intl3.formatToPlainString(require(dependencyMap[1]).t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp, "hours");
      if (diffResult1 > 1) {
        const intl2 = require(dependencyMap[1]).intl;
        obj = { hours: diffResult1 };
        return intl2.formatToPlainString(require(dependencyMap[1]).t.BWqf0c, obj);
      } else {
        const intl = require(dependencyMap[1]).intl;
        obj = { minutes: expiry.diff(tmp, "minutes") };
        return intl.formatToPlainString(require(dependencyMap[1]).t.3SLXAz, obj);
      }
    }
  }
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
};
export { formatExpirationLabel };
