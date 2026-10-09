// Module ID: 17567
// Function ID: 17568
// Name: RobloxConnectionCoachmark
// Dependencies: [32, 19, 17, 5758, 1390, 13930, 1085, 2061, 21, 5091, 587, 558, 576, 4788, 1631, 5055, 9177, 7087, 6835, 6887, 5374, 1126, 5087, 12822, 5376, 6836, 4786, 5760, 1415, 1200, 7559, 504, 13931, 6868, 4899, 2049, 2]

// Module 17567 (RobloxConnectionCoachmark)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import themes from "themes" /* 4786 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import PlatformsDefault from "Platforms" /* 5760 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6868 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5758 */;
import UserStore from "UserStore" /* 1390 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 13930 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let BottomSheet, dependencyMap;

let c10;
let c9;
let closure_14;
let map1;
let obj2;
let size;
let size1;
let tmp;
let unpackModuleId;
const authorizeConnectionDefault = tmp(9177);
const View = react_native.View;
({ AnalyticsLocations: c9, PlatformTypes: c10, UserSettingsSections: unpackModuleId } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { robloxIconContainer: size, content: obj2, text: { textAlign: "center" }, avatarContainer: { position: "relative" }, avatarInnerBorder: size1 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
size1 = { zIndex: 1, position: "absolute", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.round, borderWidth: 1, width: "100%", height: "100%" };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RobloxConnectionActionSheet(markAsDismissed) {
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp20;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = markAsDismissed;
  const tmp2 = dependencyMap;
  let obj = markAsDismissed(576);
  const cResult = obj.c(46);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_15();
  let obj2 = markAsDismissed(4788);
  const theme = obj2.useThemeContext().theme;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== markAsDismissed) {
    function handleConnect() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp4(ContentDismissActionType.PRIMARY);
      }
      const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
      authorizeConnectionDefault(obj2);
      const obj3 = openUserSettings;
      const obj4 = { screen: unpackModuleId.CONNECTIONS };
      obj3.openUserSettings(obj4);
    }
    cResult[0] = markAsDismissed;
    cResult[1] = handleConnect;
    tmp6 = handleConnect;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== markAsDismissed) {
    function handleCancel() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp2(ContentDismissActionType.DISMISS);
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = handleCancel;
    tmp7 = handleCancel;
  } else {
    tmp7 = cResult[3];
  }
  const content = tmp4.content;
  if (cResult[4] !== tmp7) {
    let obj3 = { title: null, leading: closure_13(tmp(6887).ActionSheetCloseButton, obj4) };
    const BottomSheetTitleHeader = tmp(6835).BottomSheetTitleHeader;
    obj4 = { onPress: tmp7 };
    const tmp10 = closure_13(BottomSheetTitleHeader, obj3);
    cResult[4] = tmp7;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[5];
  }
  if (cResult[6] !== markAsDismissed) {
    const fn = function _() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    };
    cResult[6] = markAsDismissed;
    cResult[7] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[7];
  }
  if (cResult[8] !== bottom) {
    const obj5 = { paddingBottom: bottom };
    cResult[8] = bottom;
    cResult[9] = obj5;
    tmp12 = obj5;
  } else {
    tmp12 = cResult[9];
  }
  if (cResult[10] !== theme) {
    const obj6 = { theme };
    const tmp17 = closure_13(closure_16, obj6);
    const obj7 = { theme };
    const tmp19 = closure_13(closure_17, obj7);
    cResult[10] = theme;
    cResult[11] = tmp17;
    cResult[12] = tmp19;
    tmp14 = tmp19;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[11];
    tmp14 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = closure_13(closure_18, {});
    cResult[13] = tmp23;
    tmp20 = tmp23;
  } else {
    tmp20 = cResult[13];
  }
  if (cResult[14] === tmp13) {
    let tmp24;
    let tmp26;
    let tmp28;
    let tmp31;
    let tmp33;
    if (cResult[15] === tmp14) {
      tmp24 = cResult[16];
    }
    const _Symbol = Symbol;
    const text = tmp4.text;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.t3asUZ);
      cResult[17] = stringResult;
      tmp26 = stringResult;
    } else {
      tmp26 = cResult[17];
    }
    if (cResult[18] !== tmp4.text) {
      const obj8 = { variant: "heading-xl/bold", style: text, children: tmp26 };
      const tmp30 = closure_13(tmp(5087).Text, obj8);
      cResult[18] = tmp4.text;
      cResult[19] = tmp30;
      tmp28 = tmp30;
    } else {
      tmp28 = cResult[19];
    }
    const _Symbol2 = Symbol;
    const text2 = tmp4.text;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.no96NU);
      cResult[20] = stringResult1;
      tmp31 = stringResult1;
    } else {
      tmp31 = cResult[20];
    }
    if (cResult[21] !== tmp4.text) {
      const obj9 = { variant: "text-md/medium", style: text2, children: tmp31 };
      const tmp35 = closure_13(tmp(5087).Text, obj9);
      cResult[21] = tmp4.text;
      cResult[22] = tmp35;
      tmp33 = tmp35;
    } else {
      tmp33 = cResult[22];
    }
    if (cResult[23] === tmp28) {
      let tmp36;
      let tmp40;
      let tmp39;
      let tmp44;
      let tmp47;
      let tmp49;
      if (cResult[24] === tmp33) {
        tmp36 = cResult[25];
      }
      const _Symbol3 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.ItuabN);
        const obj10 = { size: "sm", color: nativeDefault.colors.WHITE };
        const WindowLaunchIcon = tmp(12822).WindowLaunchIcon;
        const tmp43 = closure_13(WindowLaunchIcon, obj10);
        cResult[26] = stringResult2;
        cResult[27] = tmp43;
        tmp40 = tmp43;
        tmp39 = stringResult2;
      } else {
        tmp39 = cResult[26];
        tmp40 = cResult[27];
      }
      if (cResult[28] !== tmp6) {
        const obj11 = { text: tmp39, icon: tmp40, iconPosition: "end", size: "lg", onPress: tmp6 };
        const tmp46 = closure_13(tmp(5376).Button, obj11);
        cResult[28] = tmp6;
        cResult[29] = tmp46;
        tmp44 = tmp46;
      } else {
        tmp44 = cResult[29];
      }
      const _Symbol4 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(tmp(1126).t.DiGJy3);
        cResult[30] = stringResult3;
        tmp47 = stringResult3;
      } else {
        tmp47 = cResult[30];
      }
      if (cResult[31] !== tmp7) {
        const obj12 = { text: tmp47, variant: "secondary", size: "lg", onPress: tmp7 };
        const tmp51 = closure_13(tmp(5376).Button, obj12);
        cResult[31] = tmp7;
        cResult[32] = tmp51;
        tmp49 = tmp51;
      } else {
        tmp49 = cResult[32];
      }
      if (cResult[33] === tmp44) {
        let tmp52;
        if (cResult[34] === tmp49) {
          tmp52 = cResult[35];
        }
        if (cResult[36] === tmp24) {
          if (cResult[37] === tmp36) {
            if (cResult[38] === tmp52) {
              let tmp55;
              if (cResult[39] === tmp12) {
                tmp55 = cResult[40];
              }
              if (cResult[41] === tmp4.content) {
                if (cResult[42] === tmp55) {
                  if (cResult[43] === tmp8) {
                    let tmp58;
                    if (cResult[44] === tmp11) {
                      tmp58 = cResult[45];
                    }
                    return tmp58;
                  }
                }
              }
              const obj13 = { startExpanded: true, contentStyles: content, header: tmp8, onDismiss: tmp11, children: tmp55 };
              const tmp60 = closure_13(tmp(6836).BottomSheet, obj13);
              cResult[41] = tmp4.content;
              cResult[42] = tmp55;
              cResult[43] = tmp8;
              cResult[44] = tmp11;
              cResult[45] = tmp60;
              tmp58 = tmp60;
            }
          }
        }
        const obj14 = { spacing: 24, style: tmp12, children: items };
        items = [tmp24, tmp36, tmp52];
        const tmp57 = closure_14(tmp(5374).Stack, obj14);
        cResult[36] = tmp24;
        cResult[37] = tmp36;
        cResult[38] = tmp52;
        cResult[39] = tmp12;
        cResult[40] = tmp57;
        tmp55 = tmp57;
      }
      const obj15 = { children: items1 };
      items1 = [tmp44, tmp49];
      const tmp54 = closure_14(tmp(5374).Stack, obj15);
      cResult[33] = tmp44;
      cResult[34] = tmp49;
      cResult[35] = tmp54;
      tmp52 = tmp54;
    }
    const obj16 = { justify: "center", children: items2 };
    items2 = [tmp28, tmp33];
    const tmp38 = closure_14(tmp(5374).Stack, obj16);
    cResult[23] = tmp28;
    cResult[24] = tmp33;
    cResult[25] = tmp38;
    tmp36 = tmp38;
  }
  const obj17 = { justify: "center", align: "center", direction: "horizontal", children: items3 };
  items3 = [tmp13, tmp14, tmp20];
  const tmp25 = closure_14(tmp(5374).Stack, obj17);
  cResult[14] = tmp13;
  cResult[15] = tmp14;
  cResult[16] = tmp25;
  tmp24 = tmp25;
}) : (function RobloxConnectionActionSheet(markAsDismissed) {
  let BottomSheetTitleHeader;
  let Stack;
  let WindowLaunchIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj3;
  let obj4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }
  let tmp = closure_15();
  let obj = markAsDismissed(4788);
  const theme = obj.useThemeContext().theme;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj2 = {
    startExpanded: true,
    contentStyles: tmp.content,
    header: closure_13(BottomSheetTitleHeader, obj3),
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    children: closure_14(Stack, obj4)
  };
  BottomSheet = markAsDismissed(6836).BottomSheet;
  obj3 = { title: null, leading: closure_13(markAsDismissed(6887).ActionSheetCloseButton, { onPress: handleCancel }) };
  BottomSheetTitleHeader = markAsDismissed(6835).BottomSheetTitleHeader;
  obj4 = { spacing: 24, style: { paddingBottom: bottom }, children: items1 };
  Stack = markAsDismissed(5374).Stack;
  const obj5 = { justify: "center", align: "center", direction: "horizontal", children: items };
  const Stack2 = markAsDismissed(5374).Stack;
  items = [closure_13(closure_16, { theme }), closure_13(closure_17, { theme }), closure_13(closure_18, {})];
  items1 = [closure_14(Stack2, obj5), , ];
  const obj6 = { justify: "center", children: items2 };
  const Stack3 = markAsDismissed(5374).Stack;
  const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: intl.string(markAsDismissed(1126).t.t3asUZ) };
  const Text = markAsDismissed(5087).Text;
  intl = markAsDismissed(1126).intl;
  items2 = [closure_13(Text, obj7), ];
  const obj8 = { variant: "text-md/medium", style: tmp.text, children: intl2.string(markAsDismissed(1126).t.no96NU) };
  const Text2 = markAsDismissed(5087).Text;
  intl2 = markAsDismissed(1126).intl;
  items2[1] = closure_13(Text2, obj8);
  items1[1] = closure_14(Stack3, obj6);
  const obj9 = { children: items3 };
  const Stack4 = markAsDismissed(5374).Stack;
  const obj10 = {
    text: intl3.string(markAsDismissed(1126).t.ItuabN),
    icon: closure_13(WindowLaunchIcon, obj11),
    iconPosition: "end",
    size: "lg",
    onPress: function handleConnect() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp4(ContentDismissActionType.PRIMARY);
      }
      const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
      authorizeConnectionDefault(obj2);
      const obj3 = openUserSettings;
      const obj4 = { screen: unpackModuleId.CONNECTIONS };
      obj3.openUserSettings(obj4);
    }
  };
  const Button = markAsDismissed(5376).Button;
  intl3 = markAsDismissed(1126).intl;
  obj11 = { size: "sm", color: nativeDefault.colors.WHITE };
  WindowLaunchIcon = markAsDismissed(12822).WindowLaunchIcon;
  items3 = [closure_13(Button, obj10), ];
  const obj12 = { text: intl4.string(markAsDismissed(1126).t.DiGJy3), variant: "secondary", size: "lg", onPress: handleCancel };
  const Button2 = markAsDismissed(5376).Button;
  intl4 = markAsDismissed(1126).intl;
  items3[1] = closure_13(Button2, obj12);
  items1[2] = closure_14(Stack4, obj9);
  return closure_13(BottomSheet, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function RobloxIcon(theme) {
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  theme = theme.theme;
  const tmp4 = closure_15();
  if (cResult[0] !== theme) {
    const tmpResult = themes;
    const isThemeDarkResult = tmpResult.isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    tmp5 = isThemeDarkResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    let str = "white";
    const obj3 = PlatformsDefault;
    const value = obj3.get(constants2.ROBLOX);
    if (tmp5) {
      str = "black";
    }
    const icon = value.icon;
    const tmpResult2 = AvatarUtils;
    const source = tmpResult2.makeSource(tmp5 ? icon.darkPNG : icon.lightPNG);
    cResult[2] = tmp5;
    cResult[3] = str;
    cResult[4] = source;
    tmp8 = source;
    tmp7 = str;
  } else {
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  if (cResult[5] !== tmp7) {
    const obj2 = { backgroundColor: tmp7 };
    cResult[5] = tmp7;
    cResult[6] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp4.robloxIconContainer) {
    let tmp14;
    let tmp15;
    if (cResult[8] === tmp13) {
      tmp14 = cResult[9];
    }
    if (cResult[10] !== tmp8) {
      const obj4 = { size: native.IconSizes.LARGE, source: tmp8, disableColor: true };
      const Icon = tmp(1200).Icon;
      const tmp17 = map1(Icon, obj4);
      cResult[10] = tmp8;
      cResult[11] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[11];
    }
    if (cResult[12] === tmp14) {
      let tmp18;
      if (cResult[13] === tmp15) {
        tmp18 = cResult[14];
      }
      return tmp18;
    }
    const obj5 = { style: tmp14, children: tmp15 };
    const tmp21 = map1(View, obj5);
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tmp21;
    tmp18 = tmp21;
  }
  const items = [tmp4.robloxIconContainer, tmp13];
  cResult[7] = tmp4.robloxIconContainer;
  cResult[8] = tmp13;
  cResult[9] = items;
  tmp14 = items;
}) : (function RobloxIcon(theme) {
  let Icon;
  let items;
  let obj4;
  theme = theme.theme;
  const tmp = closure_15();
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme);
  let str = "white";
  const obj2 = PlatformsDefault;
  const value = obj2.get(constants2.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const icon = value.icon;
  const obj3 = { style: items, children: map1(Icon, obj4) };
  items = [tmp.robloxIconContainer, { backgroundColor: str }];
  const tmp2Result = AvatarUtils;
  const source = tmp2Result.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj4 = { size: native.IconSizes.LARGE, source, disableColor: true };
  Icon = tmp2(1200).Icon;
  return map1(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnionIcon(theme) {
  let LinearGradient;
  let first;
  let items;
  let items1;
  let obj4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  theme = theme.theme;
  let str = "black";
  const obj2 = themes;
  if (obj2.isThemeDark(theme)) {
    str = "white";
  }
  const id = react.useId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = map1(inlineStyles.Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== str) {
    const obj3 = { children: authStore3(LinearGradient, obj4) };
    const Defs = tmp(7559).Defs;
    obj4 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: items };
    LinearGradient = tmp(7559).LinearGradient;
    const obj5 = { stopColor: str, stopOpacity: 0.3 };
    items = [map1(inlineStyles.Stop, obj5), ];
    const obj6 = { offset: 1, stopColor: str, stopOpacity: 0.7 };
    items[1] = map1(inlineStyles.Stop, obj6);
    const tmp11 = map1(Defs, obj3);
    cResult[1] = str;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === id) {
    let tmp12;
    if (cResult[4] === tmp8) {
      tmp12 = cResult[5];
    }
    return tmp12;
  }
  size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: items1 };
  items1 = [first, tmp8];
  const tmp13 = authStore3(inlineStylesDefault, size);
  cResult[3] = id;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function UnionIcon(theme) {
  let LinearGradient;
  let items;
  let items1;
  let obj3;
  theme = theme.theme;
  let str = "black";
  const obj = themes;
  if (obj.isThemeDark(theme)) {
    str = "white";
  }
  const id = react.useId();
  size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: items };
  items = [, ];
  const tmp4 = inlineStylesDefault;
  items[0] = map1(inlineStyles.Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
  const obj2 = { children: authStore3(LinearGradient, obj3) };
  const Defs = tmp(7559).Defs;
  obj3 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: items1 };
  LinearGradient = tmp(7559).LinearGradient;
  items1 = [map1(inlineStyles.Stop, { stopColor: str, stopOpacity: 0.3 }), map1(inlineStyles.Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 })];
  items[1] = map1(Defs, obj2);
  return authStore3(tmp4, size);
});
let closure_17 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserIcon() {
  let currentUser;
  let items1;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== tmp4.avatarInnerBorder) {
    const obj2 = { style: tmp4.avatarInnerBorder };
    const tmp12 = map1(View, obj2);
    cResult[2] = tmp4.avatarInnerBorder;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const obj3 = { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "r" };
    const Avatar = tmp(1200).Avatar;
    const tmp15 = map1(Avatar, obj3);
    cResult[4] = stateFromStores;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.avatarContainer) {
    if (cResult[7] === tmp9) {
      let tmp16;
      if (cResult[8] === tmp13) {
        tmp16 = cResult[9];
      }
      return tmp16;
    }
  }
  const obj4 = { style: tmp4.avatarContainer, children: items1 };
  items1 = [tmp9, tmp13];
  const tmp17 = authStore3(View, obj4);
  cResult[6] = tmp4.avatarContainer;
  cResult[7] = tmp9;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function UserIcon() {
  let currentUser;
  let items1;
  const tmp = closure_15();
  const items = [UserStore];
  const obj2 = { style: tmp.avatarContainer, children: items1 };
  const obj = get_initialized;
  const obj3 = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  items1 = [map1(View, obj3), ];
  const obj4 = { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "r" };
  const Avatar = native.Avatar;
  items1[1] = map1(Avatar, obj4);
  return authStore3(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowRobloxConnectionCoachmark() {
  let appInstalled;
  let closure_2;
  let fetchingAccounts;
  let hasRoloxAccount;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalAppDetectionStore];
    const fn = function s() {
      return appInstalled.isAppInstalled(stateFromStores(closure_2[32]).DetectableAppNames.ROBLOX);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = hasRoloxAccount(react.useState(false), 2);
  const first = tmp8[0];
  dependencyMap = tmp8[1];
  const obj3 = react;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConnectedAccountsStore];
    class S {
      constructor() {
        obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
        accounts = closure_1_6.getAccounts();
        obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp11 = S;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp10, tmp11);
  ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
  if (cResult[4] === first) {
    let tmp14;
    let tmp15;
    if (cResult[5] === stateFromStores) {
      tmp14 = cResult[6];
      tmp15 = cResult[7];
    }
    const effect = obj3.useEffect(tmp14, tmp15);
    if (cResult[8] !== hasRoloxAccount) {
      const fn2 = function v() {
        const tmp = hasRoloxAccount;
        if (tmp) {
          const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj2);
        }
      };
      const items2 = [hasRoloxAccount];
      class S {
        constructor() {
          obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
          accounts = closure_1_6.getAccounts();
          obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
          return obj;
        }
      }
      cResult[8] = hasRoloxAccount;
      cResult[9] = fn2;
      cResult[10] = items2;
    }
    class S {
      constructor() {
        obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
        accounts = closure_1_6.getAccounts();
        obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
        return obj;
      }
    }
    return !fetchingAccounts && stateFromStores && !hasRoloxAccount;
  }
  class A {
    constructor() {
      const tmp = stateFromStores && !first;
      if (tmp) {
        closure_2(true);
        const obj = ConnectedAccountsActionCreatorsDefault;
        const response = obj.fetch();
      }
    }
  }
  const items3 = [first, stateFromStores];
  cResult[4] = first;
  cResult[5] = stateFromStores;
  cResult[6] = A;
  cResult[7] = items3;
  tmp15 = items3;
  tmp14 = A;
}) : (function useShouldShowRobloxConnectionCoachmark() {
  let appInstalled;
  let closure_2;
  let fetchingAccounts;
  let hasRoloxAccount;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [LocalAppDetectionStore];
  stateFromStores = obj.useStateFromStores(items, () => appInstalled.isAppInstalled(stateFromStores(closure_2[32]).DetectableAppNames.ROBLOX));
  const tmp2 = hasRoloxAccount(react.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj2 = stateFromStores(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let accounts;
    const obj = { fetchingAccounts: ConnectedAccountsStore.isFetching(), hasRoloxAccount: null != accounts.find((type) => type.type === constants.ROBLOX) };
    accounts = ConnectedAccountsStore.getAccounts();
    return obj;
  });
  ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
  const items2 = [first, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !first;
    if (tmp) {
      closure_2(true);
      const obj = ConnectedAccountsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = react.useEffect(() => {
    const tmp = hasRoloxAccount;
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj2);
    }
  }, items3);
  return !fetchingAccounts && stateFromStores && !hasRoloxAccount;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default tmp5;
export const UnionIcon = tmp6;
export const useShouldShowRobloxConnectionCoachmark = tmp7;
