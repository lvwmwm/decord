// Module ID: 9796
// Function ID: 9797
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [2112, 504, 1115, 2]
// Exports: default

// Module 9796 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 504 */;
import LocaleStore from "LocaleStore" /* 2112 */;

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
      const intl = tmp(1115).intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};
