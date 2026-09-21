// Module ID: 15832
// Function ID: 15833
// Name: ShareLogsButton
// Dependencies: [19, 21, 558, 568, 5341, 1119, 8637, 7, 13206, 2]

// Module 15832 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Pressables from "Pressables" /* 5341 */;
import showShareActionSheet from "showShareActionSheet" /* 8637 */;
import ShareIcon from "ShareIcon" /* 13206 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp(1119).intl;
    obj2.accessibilityLabel = intl.string(tmp(1119).t["Aw+09z"]);
    obj2.onPress = function onPress() {
      const obj2 = { message: null };
      const obj = showShareActionSheet;
      obj2.message = LogAggregator.stringify();
      return obj.showShareActionSheet(obj2, "Debug Logs");
    };
    obj2.children = jsx(tmp(13206).ShareIcon, {});
    const tmp6 = jsx(tmp(5341).PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
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
}));
