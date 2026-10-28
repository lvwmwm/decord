// Module ID: 17699
// Function ID: 17700
// Name: MainTabs
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 5182, 9744, 1630, 5189, 5288, 10660, 17700, 5070, 2]

// Module 17699 (MainTabs)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5182 */;
import useChatLayoutDefault from "useChatLayout" /* 5189 */;
import useToken from "useToken" /* 5288 */;
import useActiveTheme from "useActiveTheme" /* 9744 */;
import ThemedGradientDefault from "ThemedGradient" /* 10660 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 17700 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp;
const native = tmp(5070);
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, marginTop, top) => {
  let num;
  let obj3;
  let obj5;
  let obj6;
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameContainer: obj3, frameContent: { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" }, framePanels: { marginTop: -marginTop }, frameBorderClip: obj5, frameBorder: obj6 };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight });
  obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: num };
  num = 0;
  if (marginTop <= 0) {
    num = tmp(587).space.PX_16;
  }
  obj5 = { top, left: undefined, width: nativeDefault.radii.md, overflow: "hidden" };
  ({ marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" });
  const merged = Object.assign(_false.absoluteFillObject);
  obj6 = { top: -top, borderTopRightRadius: nativeDefault.radii.md, borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderRightWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderColor: nativeDefault.colors.APP_FRAME_BORDER };
  const merged1 = Object.assign(_false.absoluteFillObject);
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabs() {
  let items;
  let items1;
  let left;
  let obj10;
  let right;
  let top;
  const obj = react2;
  const cResult = obj.c(35);
  const tmp5 = useColorThemeBackgroundDefault();
  const obj2 = useActiveTheme;
  const isCustomThemeActive = obj2.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj3 = useToken;
  const tmp8 = closure_7(left, right, top, obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  if (cResult[0] === tmp8.container) {
    let tmp11;
    if (cResult[1] === (isChatLockedOpen && tmp8.frameContainer)) {
      tmp11 = cResult[2];
    }
    if (cResult[3] === isChatLockedOpen) {
      let tmp12;
      if (cResult[4] === (left > 0 || right > 0)) {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp8.content) {
        let tmp16;
        let tmp17;
        if (cResult[7] === (isChatLockedOpen && tmp8.frameContent)) {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== isCustomThemeActive) {
          const obj4 = { absolute: true, mix: isCustomThemeActive };
          const tmp19 = hasOwnProperty(ThemedGradientDefault, obj4);
          cResult[9] = isCustomThemeActive;
          cResult[10] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp8.content) {
          let tmp21;
          let tmp23;
          if (cResult[12] === (isChatLockedOpen && tmp8.framePanels)) {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== !isChatLockedOpen) {
            const obj5 = { showHeaderGradient: !isChatLockedOpen };
            const tmp25 = hasOwnProperty(MainTabsNavigatorPanelDefault, obj5);
            cResult[14] = !isChatLockedOpen;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] === tmp21) {
            let tmp26;
            if (cResult[17] === tmp23) {
              tmp26 = cResult[18];
            }
            if (cResult[19] === isChatLockedOpen) {
              if (cResult[20] === tmp8.frameBorder) {
                let tmp30;
                if (cResult[21] === tmp8.frameBorderClip) {
                  tmp30 = cResult[22];
                }
                if (cResult[23] === tmp26) {
                  if (cResult[24] === tmp30) {
                    if (cResult[25] === tmp16) {
                      let tmp34;
                      if (cResult[26] === tmp17) {
                        tmp34 = cResult[27];
                      }
                      if (cResult[28] === tmp5) {
                        if (cResult[29] === tmp34) {
                          let tmp38;
                          if (cResult[30] === tmp12) {
                            tmp38 = cResult[31];
                          }
                          if (cResult[32] === tmp11) {
                            let tmp41;
                            if (cResult[33] === tmp38) {
                              tmp41 = cResult[34];
                            }
                            return tmp41;
                          }
                          const obj6 = { style: tmp11, children: tmp38 };
                          const tmp44 = hasOwnProperty(React3, obj6);
                          cResult[32] = tmp11;
                          cResult[33] = tmp38;
                          cResult[34] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                      const obj7 = { gradient: tmp5, children: items };
                      items = [tmp12, tmp34];
                      const tmp40 = metroRequire(native.ThemeContextProvider, obj7);
                      cResult[28] = tmp5;
                      cResult[29] = tmp34;
                      cResult[30] = tmp12;
                      cResult[31] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
                const obj8 = { style: tmp16, children: items1 };
                items1 = [tmp17, tmp26, tmp30];
                const tmp37 = metroRequire(React3, obj8);
                cResult[23] = tmp26;
                cResult[24] = tmp30;
                cResult[25] = tmp16;
                cResult[26] = tmp17;
                cResult[27] = tmp37;
                tmp34 = tmp37;
              }
            }
            let tmp31 = null;
            if (isChatLockedOpen) {
              const obj9 = { style: tmp8.frameBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj10) };
              obj10 = { style: tmp8.frameBorder };
              tmp31 = hasOwnProperty(React3, obj9);
            }
            cResult[19] = isChatLockedOpen;
            cResult[20] = tmp8.frameBorder;
            cResult[21] = tmp8.frameBorderClip;
            cResult[22] = tmp31;
            tmp30 = tmp31;
          }
          const obj11 = { style: tmp21, children: tmp23 };
          const tmp29 = hasOwnProperty(React3, obj11);
          cResult[16] = tmp21;
          cResult[17] = tmp23;
          cResult[18] = tmp29;
          tmp26 = tmp29;
        }
        const items2 = [tmp8.content, isChatLockedOpen && tmp8.framePanels];
        cResult[11] = tmp8.content;
        cResult[12] = isChatLockedOpen && tmp8.framePanels;
        cResult[13] = items2;
        tmp21 = items2;
      }
      const items3 = [tmp8.content, isChatLockedOpen && tmp8.frameContent];
      cResult[6] = tmp8.content;
      cResult[7] = isChatLockedOpen && tmp8.frameContent;
      cResult[8] = items3;
      tmp16 = items3;
    }
    let tmp13 = null;
    if (left > 0 || right > 0) {
      tmp13 = null;
      if (!isChatLockedOpen) {
        tmp13 = hasOwnProperty(tmp4(10660), { absolute: true, mix: true });
      }
    }
    cResult[3] = isChatLockedOpen;
    cResult[4] = left > 0 || right > 0;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  }
  const items4 = [tmp8.container, isChatLockedOpen && tmp8.frameContainer];
  cResult[0] = tmp8.container;
  cResult[1] = isChatLockedOpen && tmp8.frameContainer;
  cResult[2] = items4;
  tmp11 = items4;
}) : (function MainTabs() {
  let ThemeContextProvider;
  let items1;
  let items3;
  let left;
  let obj4;
  let obj7;
  let obj9;
  let right;
  let tmp8Result;
  let top;
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = useToken;
  const tmp7 = closure_7(left, right, top, obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  const items = [tmp7.container, ];
  const tmp10 = isChatLockedOpen && tmp7.frameContainer;
  items[1] = tmp10;
  const obj3 = { style: items, children: metroRequire(ThemeContextProvider, obj4) };
  obj4 = { gradient: tmp3, children: items1 };
  ThemeContextProvider = native.ThemeContextProvider;
  if (left > 0) {
    tmp8Result = null;
    if (!isChatLockedOpen) {
      tmp8Result = tmp8(tmp(10660), { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  items1 = [tmp8Result, ];
  const items2 = [tmp7.content, ];
  const obj5 = { style: items2, children: items3 };
  const tmp13 = isChatLockedOpen && tmp7.frameContent;
  items2[1] = tmp13;
  items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const items4 = [tmp7.content, ];
  const tmp14 = isChatLockedOpen && tmp7.framePanels;
  items4[1] = tmp14;
  const obj6 = { style: items4, children: hasOwnProperty(MainTabsNavigatorPanelDefault, obj7) };
  obj7 = { showHeaderGradient: !isChatLockedOpen };
  items3[1] = hasOwnProperty(React3, obj6);
  let tmp8Result2 = null;
  if (isChatLockedOpen) {
    const obj8 = { style: tmp7.frameBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj9) };
    obj9 = { style: tmp7.frameBorder };
    tmp8Result2 = tmp8(tmp9, obj8);
  }
  items3[2] = tmp8Result2;
  items1[1] = metroRequire(React3, obj5);
  return hasOwnProperty(React3, obj3);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
