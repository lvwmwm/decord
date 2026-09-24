// Module ID: 15923
// Function ID: 15924
// Name: ShareLogsButton
// Dependencies: [19, 21, 5427, 1115, 8711, 7, 13302, 2]

// Module 15923 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import util from "util" /* 1115 */;
import Pressables from "Pressables" /* 5427 */;
import showShareActionSheet from "showShareActionSheet" /* 8711 */;
import ShareIcon from "ShareIcon" /* 13302 */;
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
