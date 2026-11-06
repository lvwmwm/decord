// Module ID: 10194
// Function ID: 10195
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [2186, 504, 1113, 2]
// Exports: default

// Module 10194 (useMaybeAddPollsMarketingEasterEggNote)
import get_initialized from "get initialized" /* 504 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  get_initialized;
  [][0] = LocaleStore;
  let formatToPlainStringResult = emojiName;
  if (":pizza:" === emojiName) {
    formatToPlainStringResult = emojiName;
    if (tmp4) {
      const intl = tmp(1113).intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};
