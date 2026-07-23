// Module ID: 9390
// Function ID: 73199
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [1921, 566, 1212, 2]
// Exports: default

// Module 9390 (useMaybeAddPollsMarketingEasterEggNote)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
  let formatToPlainStringResult = emojiName;
  if (":pizza:" === emojiName) {
    formatToPlainStringResult = emojiName;
    if (tmp2) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};
