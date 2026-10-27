// Module ID: 17464
// Function ID: 17465
// Name: MainTabs
// Dependencies: [19, 17, 21, 4972, 587, 558, 576, 5147, 9712, 1630, 5253, 4929, 10628, 17465, 5038, 2]

// Module 17464 (MainTabs)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import DeviceUtils from "DeviceUtils" /* 4929 */;
import native from "native" /* 5038 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5147 */;
import useToken from "useToken" /* 5253 */;
import useActiveTheme from "useActiveTheme" /* 9712 */;
import ThemedGradientDefault from "ThemedGradient" /* 10628 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 17465 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, top) => {
  let obj5;
  let obj6;
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, duoContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: nativeDefault.space.PX_32 }, duoContent: { borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" }, duoBorderClip: obj5, duoBorder: obj6 };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: nativeDefault.space.PX_32 });
  obj5 = { top, left: undefined, width: nativeDefault.radii.md, overflow: "hidden" };
  ({ borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" });
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
  let tmp10;
  const obj = react2;
  const cResult = obj.c(31);
  const tmp5 = useColorThemeBackgroundDefault();
  const obj2 = useActiveTheme;
  const isCustomThemeActive = obj2.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const obj3 = useToken;
  const tmp8 = closure_7(left, right, obj3.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (cResult[0] !== (left > 0 || right > 0)) {
    const tmpResult = DeviceUtils;
    const tmp11 = tmpResult.isDuo() && (left > 0 || right > 0);
    cResult[0] = left > 0 || right > 0;
    cResult[1] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp8.container) {
    let tmp13;
    if (cResult[3] === (tmp10 && tmp8.duoContainer)) {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp10) {
      let tmp14;
      if (cResult[6] === (left > 0 || right > 0)) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp8.content) {
        let tmp18;
        let tmp19;
        let tmp23;
        if (cResult[9] === (tmp10 && tmp8.duoContent)) {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== isCustomThemeActive) {
          const obj4 = { absolute: true, mix: isCustomThemeActive };
          const tmp21 = hasOwnProperty(ThemedGradientDefault, obj4);
          cResult[11] = isCustomThemeActive;
          cResult[12] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] !== !tmp10) {
          const obj5 = { showHeaderGradient: !tmp10 };
          const tmp25 = hasOwnProperty(MainTabsNavigatorPanelDefault, obj5);
          cResult[13] = !tmp10;
          cResult[14] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp8.duoBorder) {
            let tmp26;
            if (cResult[17] === tmp8.duoBorderClip) {
              tmp26 = cResult[18];
            }
            if (cResult[19] === tmp18) {
              if (cResult[20] === tmp19) {
                if (cResult[21] === tmp23) {
                  let tmp30;
                  if (cResult[22] === tmp26) {
                    tmp30 = cResult[23];
                  }
                  if (cResult[24] === tmp5) {
                    if (cResult[25] === tmp30) {
                      let tmp34;
                      if (cResult[26] === tmp14) {
                        tmp34 = cResult[27];
                      }
                      if (cResult[28] === tmp34) {
                        let tmp37;
                        if (cResult[29] === tmp13) {
                          tmp37 = cResult[30];
                        }
                        return tmp37;
                      }
                      const obj6 = { style: tmp13, children: tmp34 };
                      const tmp40 = hasOwnProperty(React3, obj6);
                      cResult[28] = tmp34;
                      cResult[29] = tmp13;
                      cResult[30] = tmp40;
                      tmp37 = tmp40;
                    }
                  }
                  const obj7 = { gradient: tmp5, children: items };
                  items = [tmp14, tmp30];
                  const tmp36 = metroRequire(native.ThemeContextProvider, obj7);
                  cResult[24] = tmp5;
                  cResult[25] = tmp30;
                  cResult[26] = tmp14;
                  cResult[27] = tmp36;
                  tmp34 = tmp36;
                }
              }
            }
            const obj8 = { style: tmp18, children: items1 };
            items1 = [tmp19, tmp23, tmp26];
            const tmp33 = metroRequire(React3, obj8);
            cResult[19] = tmp18;
            cResult[20] = tmp19;
            cResult[21] = tmp23;
            cResult[22] = tmp26;
            cResult[23] = tmp33;
            tmp30 = tmp33;
          }
        }
        let tmp27 = null;
        if (tmp10) {
          const obj9 = { style: tmp8.duoBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj10) };
          obj10 = { style: tmp8.duoBorder };
          tmp27 = hasOwnProperty(React3, obj9);
        }
        cResult[15] = tmp10;
        cResult[16] = tmp8.duoBorder;
        cResult[17] = tmp8.duoBorderClip;
        cResult[18] = tmp27;
        tmp26 = tmp27;
      }
      const items2 = [tmp8.content, tmp10 && tmp8.duoContent];
      cResult[8] = tmp8.content;
      cResult[9] = tmp10 && tmp8.duoContent;
      cResult[10] = items2;
      tmp18 = items2;
    }
    let tmp15 = null;
    if (left > 0 || right > 0) {
      tmp15 = null;
      if (!tmp10) {
        tmp15 = hasOwnProperty(tmp4(10628), { absolute: true, mix: true });
      }
    }
    cResult[5] = tmp10;
    cResult[6] = left > 0 || right > 0;
    cResult[7] = tmp15;
    tmp14 = tmp15;
  }
  const items3 = [tmp8.container, tmp10 && tmp8.duoContainer];
  cResult[2] = tmp8.container;
  cResult[3] = tmp10 && tmp8.duoContainer;
  cResult[4] = items3;
  tmp13 = items3;
}) : (function MainTabs() {
  let ThemeContextProvider;
  let items1;
  let items3;
  let left;
  let obj4;
  let obj8;
  let right;
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const obj2 = useToken;
  const tmp7 = closure_7(left, right, obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  const tmp4Result = DeviceUtils;
  const tmp9 = tmp4Result.isDuo() && (left > 0 || right > 0);
  const items = [tmp7.container, ];
  const tmp12 = tmp9 && tmp7.duoContainer;
  items[1] = tmp12;
  const obj3 = { style: items, children: metroRequire(ThemeContextProvider, obj4) };
  let tmp10Result = null;
  obj4 = { gradient: tmp3, children: items1 };
  ThemeContextProvider = tmp4(5038).ThemeContextProvider;
  if (left > 0 || right > 0) {
    tmp10Result = null;
    if (!tmp9) {
      tmp10Result = tmp10(tmp(10628), { absolute: true, mix: true });
    }
  }
  items1 = [tmp10Result, ];
  const items2 = [tmp7.content, ];
  const obj5 = { style: items2, children: items3 };
  const tmp15 = tmp9 && tmp7.duoContent;
  items2[1] = tmp15;
  items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const obj6 = { showHeaderGradient: !tmp9 };
  items3[1] = hasOwnProperty(MainTabsNavigatorPanelDefault, obj6);
  let tmp10Result2 = null;
  if (tmp9) {
    const obj7 = { style: tmp7.duoBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj8) };
    obj8 = { style: tmp7.duoBorder };
    tmp10Result2 = tmp10(tmp11, obj7);
  }
  items3[2] = tmp10Result2;
  items1[1] = metroRequire(React3, obj5);
  return hasOwnProperty(React3, obj3);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
