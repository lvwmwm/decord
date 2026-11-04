// Module ID: 13012
// Function ID: 13013
// Name: ConjureScopeSetupCard
// Dependencies: [19, 21, 12968, 12969, 2]
// Exports: default

// Module 13012 (ConjureScopeSetupCard)
import Fragment from "Fragment" /* 21 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12968 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12969 */;
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
