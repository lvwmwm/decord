// Module ID: 12091
// Function ID: 12092
// Name: AppLauncherCommandOptionActionSheet
// Dependencies: [109, 19, 17, 1501, 21, 5004, 587, 558, 576, 7329, 5246, 7284, 5301, 2]

// Module 12091 (AppLauncherCommandOptionActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1501 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let obj2;
let closure_3 = ["option", "children", "contentContainerStyles", "scrollable", "startExpanded"];
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
let obj = { actionSheetBackground: obj2, contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandOptionActionSheet(arg0) {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
  let startExpanded;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] !== arg0) {
    ({ option, children, contentContainerStyles, scrollable, startExpanded } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    _require = tmp12;
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = contentContainerStyles;
    cResult[3] = option;
    cResult[4] = tmp12;
    cResult[5] = scrollable;
    cResult[6] = startExpanded;
    tmp9 = startExpanded;
    tmp8 = scrollable;
    tmp6 = option;
    tmp5 = contentContainerStyles;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    _require = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmp15 = closure_7();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { alignSelf: "flex-start" };
    cResult[7] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== tmp7) {
    const tmp20 = <View style={tmp16}>{null}</View>;
    cResult[8] = tmp7;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp6.displayDescription) {
    if (cResult[11] === tmp6.displayName) {
      let tmp21;
      if (cResult[12] === tmp17) {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        let tmp23;
        if (cResult[15] === tmp15.contentContainer) {
          tmp23 = cResult[16];
        }
        if (cResult[17] === tmp4) {
          let tmp24;
          if (cResult[18] === tmp23) {
            tmp24 = cResult[19];
          }
          if (cResult[20] === tmp6.name) {
            if (cResult[21] === tmp7) {
              if (cResult[22] === (undefined === tmp8 || tmp8)) {
                if (cResult[23] === (undefined === tmp9 || tmp9)) {
                  if (cResult[24] === tmp15.actionSheetBackground) {
                    if (cResult[25] === tmp21) {
                      let tmp28;
                      if (cResult[26] === tmp24) {
                        tmp28 = cResult[27];
                      }
                      return tmp28;
                    }
                  }
                }
              }
            }
          }
          BottomSheet = tmp(5301).BottomSheet;
          const merged = Object.assign(tmp7);
          const tmp33 = <BottomSheet key={tmp6.name} backgroundStyles={tmp15.actionSheetBackground} scrollable={undefined === tmp8 || tmp8} startExpanded={undefined === tmp9 || tmp9} header={tmp21}>{tmp24}</BottomSheet>;
          cResult[20] = tmp6.name;
          cResult[21] = tmp7;
          cResult[22] = undefined === tmp8 || tmp8;
          cResult[23] = undefined === tmp9 || tmp9;
          cResult[24] = tmp15.actionSheetBackground;
          cResult[25] = tmp21;
          cResult[26] = tmp24;
          cResult[27] = tmp33;
          tmp28 = tmp33;
        }
        const tmp27 = <View style={tmp23}>{tmp4}</View>;
        cResult[17] = tmp4;
        cResult[18] = tmp23;
        cResult[19] = tmp27;
        tmp24 = tmp27;
      }
      const items = [tmp15.contentContainer, tmp5];
      cResult[14] = tmp5;
      cResult[15] = tmp15.contentContainer;
      cResult[16] = items;
      tmp23 = items;
    }
  }
  const tmp22 = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { leading: tmp17, title: tmp6.displayName, subtitle: tmp6.displayDescription });
  cResult[10] = tmp6.displayDescription;
  cResult[11] = tmp6.displayName;
  cResult[12] = tmp17;
  cResult[13] = tmp22;
  tmp21 = tmp22;
}) : (function AppLauncherCommandOptionActionSheet(startExpanded) {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
  ({ option, scrollable } = startExpanded);
  ({ children, contentContainerStyles } = startExpanded);
  if (scrollable === undefined) {
    scrollable = true;
  }
  let flag = startExpanded.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(startExpanded, Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }));
  const tmp2 = closure_7();
  BottomSheet = merged(5301).BottomSheet;
  const merged1 = Object.assign(merged);
  const BottomSheetTitleHeader = merged(7284).BottomSheetTitleHeader;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  const items = [tmp2.contentContainer, contentContainerStyles];
  return <BottomSheet key={option.name} backgroundStyles={tmp2.actionSheetBackground} scrollable={scrollable} startExpanded={flag} header={<BottomSheetTitleHeader leading={null} title={null} subtitle={null} />}><View style={items}>{children}</View></BottomSheet>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = tmp3;
