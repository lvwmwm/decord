// Module ID: 15684
// Function ID: 15685
// Name: ChannelListPanelBackdrop
// Dependencies: [19, 17, 1074, 21, 4836, 576, 15655, 1613, 14620, 15685, 2]
// Exports: default

// Module 15684 (ChannelListPanelBackdrop)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import QuestHooks from "QuestHooks" /* 14620 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15655 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
const DM_WIDTH = Constants.DM_WIDTH;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: obj2, listWrapper: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(style) {
  let ScreenAlignedThemedGradientSliding;
  let items1;
  style = style.style;
  const contentInset = style.contentInset;
  const children = style.children;
  const tmp = closure_8();
  let closure_2 = tmp;
  let obj = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  const top = useSafeAreaInsetsDefault().top;
  const obj2 = QuestHooks;
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  const obj3 = {
    style: react.useMemo(() => {
      let num2;
      let num3;
      let num4;
      const items = [container.container, , ];
      const rect = contentInset;
      let num;
      if (contentInset != null) {
        num = rect.top;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { marginTop: num, paddingBottom: num2 + mobileQuestDockHeight, marginLeft: num3, marginRight: num4 };
      num2 = undefined;
      if (rect != null) {
        num2 = rect.bottom;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num3 = undefined;
      if (rect != null) {
        num3 = rect.left;
      }
      if (num3 == null) {
        num3 = 0;
      }
      num4 = undefined;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      items[1] = obj;
      items[2] = style;
      return items;
    }, items),
    children: items1
  };
  const tmp2 = require;
  const tmp4 = importDefault;
  const tmp6 = metroImportDefault;
  if (isHomeDrawerEnabled) {
    ScreenAlignedThemedGradientSliding = tmp2(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = tmp4(tmp9);
  }
  items1 = [, , ];
  const obj4 = { offsetX: DM_WIDTH, offsetY: top };
  items1[0] = metroRequire(ScreenAlignedThemedGradientSliding, obj4);
  const obj5 = { pointerEvents: "none", style: tmp.panelTint };
  items1[1] = metroRequire(React3, obj5);
  const obj6 = { style: tmp.listWrapper, children };
  items1[2] = metroRequire(React3, obj6);
  return tmp6(React3, obj3);
};
