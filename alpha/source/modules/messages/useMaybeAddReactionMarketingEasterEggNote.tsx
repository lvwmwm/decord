// Module ID: 9759
// Function ID: 9760
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [9760, 2]
// Exports: default

// Module 9759 (useMaybeAddReactionMarketingEasterEggNote)
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 9760 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
