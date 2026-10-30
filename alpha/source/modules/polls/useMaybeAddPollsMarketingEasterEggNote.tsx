// Module ID: 10035
// Function ID: 10036
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [2063, 504, 1114, 2]
// Exports: default

// Module 10035 (useMaybeAddPollsMarketingEasterEggNote)
import get_initialized from "get initialized" /* 504 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  get_initialized;
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
