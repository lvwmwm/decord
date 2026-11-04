// Module ID: 12967
// Function ID: 12968
// Name: ConjureScopeSwitchCard
// Dependencies: [19, 21, 12968, 12969, 2]
// Exports: default

// Module 12967 (ConjureScopeSwitchCard)
import Fragment from "Fragment" /* 21 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12968 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12969 */;
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
