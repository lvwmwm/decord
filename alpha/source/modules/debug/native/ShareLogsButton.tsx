// Module ID: 15783
// Function ID: 15784
// Name: ShareLogsButton
// Dependencies: [19, 21, 558, 576, 6191, 1126, 8465, 7, 13000, 2]

// Module 15783 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8465 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const intl2 = tmp(1126);
const Pressables = tmp(6191);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ShareLogsButton() {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const PressableOpacity = Pressables.PressableOpacity;
    const intl = intl2.intl;
    const tmp6 = <PressableOpacity accessibilityLabel={intl.string(intl2.t["Aw+09z"])} onPress={function onPress() {
      let obj2;
      const obj = { message: obj2.stringify() };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      obj2 = LogAggregator;
      return showShareActionSheet(obj, "Debug Logs");
    }}>{null}</PressableOpacity>;
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ShareLogsButton() {
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  return <PressableOpacity accessibilityLabel={intl.string(intl2.t["Aw+09z"])} onPress={function onPress() {
    let obj2;
    const obj = { message: obj2.stringify() };
    const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
    showShareActionSheet2;
    obj2 = LogAggregator;
    return showShareActionSheet(obj, "Debug Logs");
  }}>{null}</PressableOpacity>;
}));
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
