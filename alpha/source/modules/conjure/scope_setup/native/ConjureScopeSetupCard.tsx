// Module ID: 12508
// Function ID: 12509
// Name: ConjureScopeSetupCard
// Dependencies: [19, 21, 558, 576, 12466, 12467, 2]

// Module 12508 (ConjureScopeSetupCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12466 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12467 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeSetupCard(projectId) {
  const obj = react2;
  const cResult = obj.c(3);
  projectId = projectId.projectId;
  const obj2 = useConjureScopeCards;
  const conjureScopeSetupCard = obj2.useConjureScopeSetupCard(projectId);
  if (cResult[0] === conjureScopeSetupCard) {
    let tmp4;
    if (cResult[1] === projectId) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  let tmp5 = null;
  if (null != conjureScopeSetupCard) {
    tmp5 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
  }
  cResult[0] = conjureScopeSetupCard;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function ConjureScopeSetupCard(projectId) {
  projectId = projectId.projectId;
  const obj = useConjureScopeCards;
  const conjureScopeSetupCard = obj.useConjureScopeSetupCard(projectId);
  let tmp3 = null;
  if (null != conjureScopeSetupCard) {
    tmp3 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx");

export default tmp3;
