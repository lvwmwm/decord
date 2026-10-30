// Module ID: 16928
// Function ID: 16929
// Name: BountiesBannerBackground
// Dependencies: [19, 17, 5010, 21, 504, 8864, 5582, 2]

// Module 16928 (BountiesBannerBackground)
import get_initialized from "get initialized" /* 504 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import common_Video from "common/Video" /* 8864 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const locations = [0, 0.6];
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const memoResult = react.memo(function BountiesBannerBackground(arg0) {
  let children;
  let items1;
  let style;
  let uri;
  let useReducedMotion;
  ({ children, style, uri } = arg0);
  const items = [AccessibilityStore];
  const obj2 = { style, children: items1 };
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  items1 = [, , ];
  const obj3 = { source: { uri }, style: _false.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  items1[0] = metroRequire(common_Video.VideoComponent, obj3);
  const obj4 = { colors, locations, style: _false.absoluteFillObject };
  items1[1] = metroRequire(LinearGradientDefault, obj4);
  items1[2] = children;
  return metroImportDefault(React3, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;
