// Module ID: 11459
// Function ID: 11460
// Name: AppealIngestionThanks
// Dependencies: [19, 17, 21, 5091, 558, 576, 1200, 6810, 11432, 2]

// Module 11459 (AppealIngestionThanks)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1200 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11432 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppealIngestionThanks() {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(native.LegacyText, { children: "TODO - Thanks" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const tmp10 = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp4.container, children: first });
    cResult[1] = tmp4.container;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const AppealIngestionModalScreen = tmp(11432).AppealIngestionModalScreen;
  const tmp12 = <AppealIngestionModalScreen>{null}</AppealIngestionModalScreen>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function AppealIngestionThanks() {
  const tmp = closure_4();
  const AppealIngestionModalScreen = AppealIngestionModal.AppealIngestionModalScreen;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  return <AppealIngestionModalScreen>{null}</AppealIngestionModalScreen>;
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default tmp3;
