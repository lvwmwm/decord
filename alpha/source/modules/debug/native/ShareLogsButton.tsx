// Module ID: 15093
// Function ID: 15094
// Name: ShareLogsButton
// Dependencies: [19, 21, 5428, 1115, 7801, 7, 12452, 2]

// Module 15093 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import util from "util" /* 1115 */;
import Pressables from "Pressables" /* 5428 */;
import showShareActionSheet from "showShareActionSheet" /* 7801 */;
import ShareIcon from "ShareIcon" /* 12452 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["Aw+09z"]);
  obj.onPress = function onPress() {
    const obj2 = { message: null };
    const obj = showShareActionSheet;
    obj2.message = LogAggregator.stringify();
    return obj.showShareActionSheet(obj2, "Debug Logs");
  };
  obj.children = jsx(ShareIcon.ShareIcon, {});
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
