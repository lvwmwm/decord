// Module ID: 12465
// Function ID: 12466
// Name: ConjureScopeSwitchCard
// Dependencies: [109, 19, 21, 558, 576, 12466, 12467, 2]

// Module 12465 (ConjureScopeSwitchCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12467 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useConjureScopeCards = tmp(12466);
let closure_3 = ["onInputFocusChange"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeSwitchCard(onInputFocusChange) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== onInputFocusChange) {
    onInputFocusChange = onInputFocusChange.onInputFocusChange;
    const tmp8 = _objectWithoutProperties(onInputFocusChange, closure_3);
    cResult[0] = onInputFocusChange;
    cResult[1] = onInputFocusChange;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = onInputFocusChange;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useConjureScopeCards;
  const conjureScopeSwitchCard = tmpResult.useConjureScopeSwitchCard(tmp5);
  if (cResult[3] === conjureScopeSwitchCard) {
    if (cResult[4] === tmp4) {
      let tmp10;
      if (cResult[5] === tmp5.projectId) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(ConjureScopeCardViewDefault, { projectId: tmp5.projectId, card: conjureScopeSwitchCard, onInputFocusChange: tmp4 });
  cResult[3] = conjureScopeSwitchCard;
  cResult[4] = tmp4;
  cResult[5] = tmp5.projectId;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function ConjureScopeSwitchCard(onInputFocusChange) {
  onInputFocusChange = onInputFocusChange.onInputFocusChange;
  const merged = Object.assign(onInputFocusChange, Object.assign({ onInputFocusChange: 0 }));
  const obj = useConjureScopeCards;
  const conjureScopeSwitchCard = obj.useConjureScopeSwitchCard(merged);
  return jsx(ConjureScopeCardViewDefault, { projectId: merged.projectId, card: conjureScopeSwitchCard, onInputFocusChange });
});
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx");

export default tmp3;
