// Module ID: 9382
// Function ID: 73145
// Name: useMaybeAddPollsMarketingEasterEggNote
// Dependencies: []
// Exports: default

// Module 9382 (useMaybeAddPollsMarketingEasterEggNote)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  arg1(dependencyMap[1]);
  [][0] = closure_2;
  let formatToPlainStringResult = emojiName;
  if (":pizza:" === emojiName) {
    formatToPlainStringResult = emojiName;
    if (tmp2) {
      const intl = arg1(dependencyMap[2]).intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[2]).t.1knDPI, obj);
    }
  }
  return formatToPlainStringResult;
};
