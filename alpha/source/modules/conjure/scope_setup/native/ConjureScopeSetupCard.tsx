// Module ID: 13013
// Function ID: 13014
// Name: ConjureScopeSetupCard
// Dependencies: [19, 21, 12969, 12970, 2]
// Exports: default

// Module 13013 (ConjureScopeSetupCard)
import Fragment from "Fragment" /* 21 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12969 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12970 */;
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
