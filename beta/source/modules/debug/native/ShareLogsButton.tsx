// Module ID: 16997
// Function ID: 16998
// Name: ShareLogsButton
// Dependencies: [19, 21, 7030, 1112, 9718, 7, 10142, 2]

// Module 16997 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import Pressables from "Pressables" /* 7030 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9718 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ShareLogsButton() {
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
});
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
