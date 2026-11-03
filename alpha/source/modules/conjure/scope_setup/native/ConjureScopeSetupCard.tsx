// Module ID: 12930
// Function ID: 12931
// Name: ConjureScopeSetupCard
// Dependencies: [19, 21, 12887, 12888, 2]
// Exports: default

// Module 12930 (ConjureScopeSetupCard)
import Fragment from "Fragment" /* 21 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12887 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12888 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx");

export default function ConjureScopeSetupCard(projectId) {
  projectId = projectId.projectId;
  const obj = useConjureScopeCards;
  const conjureScopeSetupCard = obj.useConjureScopeSetupCard(projectId);
  let tmp3 = null;
  if (null != conjureScopeSetupCard) {
    tmp3 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
  }
  return tmp3;
};
