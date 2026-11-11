// Module ID: 14163
// Function ID: 14164
// Name: CheckpointScreen
// Dependencies: [19, 17, 6314, 21, 575, 5243, 1493, 1627, 2]
// Exports: default, useCheckpointScreenContentHeight, useCheckpointScreenFrame

// Module 14163 (CheckpointScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ScrollView: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTENT_MAX_HEIGHT: hasOwnProperty, CHECKPOINT_CONTENT_MAX_WIDTH: metroRequire, CHECKPOINT_NAV_HEIGHT: metroImportDefault } = CheckpointConstants);
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
let closure_11 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 }, centered: { justifyContent: "center" } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(centered) {
  let closure_1;
  let items1;
  let obj2;
  let tmp6;
  let flag = centered.centered;
  const children = centered.children;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_11();
  const tmp2 = flag(1627)();
  dependencyMap = tmp2;
  size = flag(1493)({ ignoreKeyboard: true });
  const width = size.width;
  const height = size.height;
  const items = [tmp2, flag, width, height];
  let obj = { style: tmp.container, children: tmp4(tmp6, obj2) };
  obj2 = { style: tmp.scroll, contentContainerStyle: items1, showsVerticalScrollIndicator: false, children };
  items1 = [tmp.scrollContent, , ];
  const memo = width.useMemo(() => {
    let bottom;
    let num5;
    let num6;
    let top;
    let num = 0;
    if (!flag) {
      const _Math = Math;
      num = Math.max(0, (width - closure_1.left - closure_1.right - 2 * PX_24 - metroRequire) / 2);
    }
    let num3 = 0;
    if (!flag) {
      const _Math2 = Math;
      num3 = Math.max(0, (height - closure_1.top - metroImportDefault - closure_1.bottom - PX_24 - hasOwnProperty) / 2);
    }
    const obj = { paddingLeft: closure_1.left + PX_24 + num, paddingRight: closure_1.right + PX_24 + num, paddingBottom: bottom + num5 + num3, paddingTop: top + num6 + num3 };
    num5 = 0;
    bottom = closure_1.bottom;
    const tmp13 = closure_1;
    if (!flag) {
      num5 = PX_24;
    }
    num6 = 0;
    top = tmp13.top;
    if (!flag) {
      num6 = metroImportDefault;
    }
    return obj;
  }, items);
  const tmp5 = closure_4;
  tmp6 = height;
  if (flag) {
    flag = tmp.centered;
  }
  items1[1] = flag;
  items1[2] = memo;
  return jsx(tmp5, obj);
};
export function useCheckpointScreenContentHeight() {
  let diff;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const rect = useSafeAreaInsetsDefault();
  if (flag) {
    diff = height - rect.top - rect.bottom;
  } else {
    const _Math = Math;
    diff = Math.min(height - rect.top - metroImportDefault - rect.bottom - PX_24, hasOwnProperty);
  }
  return diff;
}
export function useCheckpointScreenFrame() {
  let height;
  let width;
  ({ height, width } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  useWindowDimensionsDefault({ ignoreKeyboard: true });
  const rect = useSafeAreaInsetsDefault();
  size = { width: Math.min(width, metroRequire + 2 * PX_24), height: Math.min(height, height - (height - rect.top - metroImportDefault - rect.bottom - PX_24) + hasOwnProperty) };
  return size;
}
