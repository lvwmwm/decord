// Module ID: 12531
// Function ID: 12532
// Name: ConjureChatHeader
// Dependencies: [19, 17, 9792, 21, 5009, 575, 1626, 9800, 9793, 2]
// Exports: default

// Module 12531 (ConjureChatHeader)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import react_native from "react-native" /* 9792 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9800 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let tmp3;
const PressableNavigatorBackIcon = tmp3(9793);
({ StyleSheet: c3, View: closure_4 } = react_native2);
const MIN_HEADER_HEIGHT = react_native.MIN_HEADER_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let obj5;
  const obj = { header: { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: { flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 }, actions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_16 }, border: obj5 };
  ({ flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 });
  obj5 = { top: undefined, height: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_16 });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatHeader.tsx");

export default function ConjureChatHeader(actions) {
  let items;
  let items1;
  let onBack;
  let showBorder;
  let title;
  actions = actions.actions;
  ({ title, onBack, showBorder } = actions);
  const tmp2 = closure_8(useSafeAreaInsetsDefault().top);
  const obj2 = { style: items, children: items1 };
  items = [tmp2.header, ];
  const obj = ClientThemesOverrides;
  items[1] = obj.useGradientTop();
  let tmp6 = null;
  const tmp4 = metroImportDefault;
  if (showBorder) {
    const obj3 = { style: tmp2.border };
    tmp6 = metroRequire(tmp5, obj3);
  }
  items1 = [tmp6, metroRequire(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack }), , ];
  const obj4 = { style: tmp2.title, children: title };
  items1[2] = metroRequire(React3, obj4);
  let tmp8Result = null;
  const tmp8 = metroRequire;
  if (null != actions) {
    const obj5 = { style: tmp2.actions, children: actions };
    tmp8Result = tmp8(tmp5, obj5);
  }
  items1[3] = tmp8Result;
  return tmp4(React3, obj2);
};
