// Module ID: 12968
// Function ID: 12969
// Name: ConjureScopeSwitchCard
// Dependencies: [19, 21, 12969, 12970, 2]
// Exports: default

// Module 12968 (ConjureScopeSwitchCard)
import Fragment from "Fragment" /* 21 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12969 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12970 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx");

export default function ConjureScopeSwitchCard(onInputFocusChange) {
  onInputFocusChange = onInputFocusChange.onInputFocusChange;
  const merged = Object.assign(onInputFocusChange, Object.assign({ onInputFocusChange: 0 }));
  const obj = useConjureScopeCards;
  const conjureScopeSwitchCard = obj.useConjureScopeSwitchCard(merged);
  return jsx(ConjureScopeCardViewDefault, { projectId: merged.projectId, card: conjureScopeSwitchCard, onInputFocusChange });
};
