// Module ID: 9190
// Function ID: 9191
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: [1995, 586, 1233, 2]
// Exports: default

// Module 9190 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 586 */;
import closure_2 from "_getSystemLocale" /* 1995 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(arg0) {
  initialize;
  [][0] = closure_2;
  let formatToPlainStringResult = arg0;
  if (":pizza:" === arg0) {
    formatToPlainStringResult = arg0;
    if (tmp4) {
      const intl = tmp(1233).intl;
      const obj = { emojiName: null };
      obj[0] = arg0;
      formatToPlainStringResult = intl.formatToPlainString(tmp(1233).t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};
