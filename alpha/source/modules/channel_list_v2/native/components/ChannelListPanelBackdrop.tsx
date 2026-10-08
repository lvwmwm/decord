// Module ID: 16326
// Function ID: 16327
// Name: ChannelListPanelBackdrop
// Dependencies: [19, 17, 1085, 21, 5090, 587, 558, 576, 16248, 1630, 15170, 16327, 2]

// Module 16326 (ChannelListPanelBackdrop)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import QuestHooks from "QuestHooks" /* 15170 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16248 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListPanelBackdrop(arg0) {
  let children;
  let contentInset;
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(22);
  ({ style, contentInset, children } = arg0);
  const tmp4 = closure_8();
  const obj2 = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const top = useSafeAreaInsetsDefault().top;
  let num;
  const obj3 = QuestHooks;
  const mobileQuestDockHeight = obj3.useMobileQuestDockHeight();
  const tmp = require;
  const tmp6 = importDefault;
  if (contentInset != null) {
    num = contentInset.top;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (contentInset != null) {
    num2 = contentInset.bottom;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const sum = num2 + mobileQuestDockHeight;
  let num3;
  if (contentInset != null) {
    num3 = contentInset.left;
  }
  if (num3 == null) {
    num3 = 0;
  }
  let num4;
  if (contentInset != null) {
    num4 = contentInset.right;
  }
  if (num4 == null) {
    num4 = 0;
  }
  if (cResult[0] === num) {
    if (cResult[1] === sum) {
      if (cResult[2] === num3) {
        let tmp9;
        if (cResult[3] === num4) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp4.container) {
            let tmp10;
            let ScreenAlignedThemedGradientSliding;
            if (cResult[7] === tmp9) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === isHomeDrawerEnabled) {
              let tmp11;
              let tmp16;
              if (cResult[10] === top) {
                tmp11 = cResult[11];
              }
              if (cResult[12] !== tmp4.panelTint) {
                const obj4 = { pointerEvents: "none", style: tmp4.panelTint };
                const tmp19 = metroRequire(React3, obj4);
                cResult[12] = tmp4.panelTint;
                cResult[13] = tmp19;
                tmp16 = tmp19;
              } else {
                tmp16 = cResult[13];
              }
              if (cResult[14] === children) {
                let tmp20;
                if (cResult[15] === tmp4.listWrapper) {
                  tmp20 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === tmp16) {
                      let tmp24;
                      if (cResult[20] === tmp20) {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  }
                }
                const obj5 = { style: tmp10, children: items };
                items = [tmp11, tmp16, tmp20];
                const tmp27 = metroImportDefault(React3, obj5);
                cResult[17] = tmp10;
                cResult[18] = tmp11;
                cResult[19] = tmp16;
                cResult[20] = tmp20;
                cResult[21] = tmp27;
                tmp24 = tmp27;
              }
              const obj6 = { style: tmp4.listWrapper, children };
              const tmp23 = metroRequire(React3, obj6);
              cResult[14] = children;
              cResult[15] = tmp4.listWrapper;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
            const tmp12 = metroRequire;
            if (isHomeDrawerEnabled) {
              ScreenAlignedThemedGradientSliding = tmp(tmp13).ScreenAlignedThemedGradientSliding;
            } else {
              ScreenAlignedThemedGradientSliding = tmp6(tmp13);
            }
            const obj7 = { offsetX: DM_WIDTH, offsetY: top };
            const tmp12Result = tmp12(ScreenAlignedThemedGradientSliding, obj7);
            cResult[9] = isHomeDrawerEnabled;
            cResult[10] = top;
            cResult[11] = tmp12Result;
            tmp11 = tmp12Result;
          }
        }
        const items1 = [tmp4.container, tmp9, style];
        cResult[5] = style;
        cResult[6] = tmp4.container;
        cResult[7] = tmp9;
        cResult[8] = items1;
        tmp10 = items1;
      }
    }
  }
  const obj8 = { marginTop: num, paddingBottom: sum, marginLeft: num3, marginRight: num4 };
  cResult[0] = num;
  cResult[1] = sum;
  cResult[2] = num3;
  cResult[3] = num4;
  cResult[4] = obj8;
  tmp9 = obj8;
}) : (function ChannelListPanelBackdrop(style) {
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
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default tmp6;
