// Module ID: 10681
// Function ID: 10682
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [2111, 504, 1115, 2]
// Exports: default

// Module 10681 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 504 */;
import LocaleStore from "LocaleStore" /* 2111 */;

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
