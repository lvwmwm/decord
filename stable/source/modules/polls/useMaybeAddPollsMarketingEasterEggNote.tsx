// Module ID: 10464
// Function ID: 10465
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [2025, 504, 1114, 2]
// Exports: default

// Module 10464 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 504 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  initialize;
  [][0] = LocaleStore;
  let formatToPlainStringResult = emojiName;
  if (":pizza:" === emojiName) {
    formatToPlainStringResult = emojiName;
    if (tmp4) {
      const intl = tmp(1114).intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};
