// Module ID: 8964
// Function ID: 8965
// Name: StageChannelAgeVerificationNoticeForEvent
// Dependencies: [19, 17, 1087, 21, 4966, 587, 558, 576, 6633, 1128, 5216, 5638, 2067, 7859, 6636, 5668, 7933, 7929, 6666, 2]

// Module 8964 (StageChannelAgeVerificationNoticeForEvent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import Text_Text from "Text/Text" /* 5216 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6666 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithDivider: obj3, divider: obj4, noticeContainer: obj5, icon: { flexShrink: 0 }, linkText: { textDecorationLine: "underline" }, contentText: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  let closure_1;
  let formatResult;
  let items;
  let tmp = onConfirmPress;
  let obj = onConfirmPress(576);
  const cResult = obj.c(17);
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  const tmp4 = closure_8();
  importDefault = tmp4;
  let obj2 = onConfirmPress(6633);
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  if (cResult[0] === isVerifiedTeen) {
    if (cResult[1] === onConfirmPress) {
      let tmp6;
      if (cResult[2] === tmp4) {
        tmp6 = cResult[3];
      }
      if (noBackground) {
        let WarningIcon;
        if (cResult[4] === isVerifiedTeen) {
          let tmp11;
          if (cResult[5] === tmp4.icon) {
            tmp11 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            let tmp15;
            if (cResult[8] === tmp4.contentText) {
              tmp15 = cResult[9];
            }
            if (cResult[10] === tmp4.noticeContainer) {
              if (cResult[11] === tmp11) {
                let tmp18;
                if (cResult[12] === tmp15) {
                  tmp18 = cResult[13];
                }
                return tmp18;
              }
            }
            const obj3 = { style: tmp4.noticeContainer, children: items };
            items = [tmp11, tmp15];
            const tmp21 = closure_6(View, obj3);
            cResult[10] = tmp4.noticeContainer;
            cResult[11] = tmp11;
            cResult[12] = tmp15;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.contentText, children: tmp6 };
          const tmp17 = closure_5(tmp(5216).Text, obj4);
          cResult[7] = tmp6;
          cResult[8] = tmp4.contentText;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        }
        const tmp12 = closure_5;
        if (isVerifiedTeen) {
          WarningIcon = tmp(5668).CircleInformationIcon;
        } else {
          WarningIcon = tmp(7933).WarningIcon;
        }
        const obj5 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp4.icon };
        const tmp12Result = tmp12(WarningIcon, obj5);
        cResult[4] = isVerifiedTeen;
        cResult[5] = tmp4.icon;
        cResult[6] = tmp12Result;
        tmp11 = tmp12Result;
      } else {
        let str = "warning";
        if (isVerifiedTeen) {
          str = "info";
        }
        if (cResult[14] === tmp6) {
          let tmp8;
          if (cResult[15] === str) {
            tmp8 = cResult[16];
          }
          return tmp8;
        }
        obj6 = { type: str, message: tmp6, role: "status" };
        const tmp10 = closure_5(tmp(7929).InlineNotice, obj6);
        cResult[14] = tmp6;
        cResult[15] = str;
        cResult[16] = tmp10;
        tmp8 = tmp10;
      }
    }
  }
  const intl = tmp(1128).intl;
  const format = intl.format;
  const t = tmp(1128).t;
  if (isVerifiedTeen) {
    const obj7 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(dependencyMap[11]);
              const obj = closure_1(dependencyMap[12]);
              tmp(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.iWGjcg, obj7);
  } else {
    const obj8 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(dependencyMap[13]);
              const obj2 = { entryPoint: onConfirmPress(dependencyMap[14]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj2);
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.edpbxy, obj8);
  }
  cResult[0] = isVerifiedTeen;
  cResult[1] = onConfirmPress;
  cResult[2] = tmp4;
  cResult[3] = formatResult;
  tmp6 = formatResult;
}) : (function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  let closure_1;
  let formatResult;
  let items;
  let tmp6Result;
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  let tmp = closure_8();
  importDefault = tmp;
  let obj = onConfirmPress(6633);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1128).intl;
  const format = intl.format;
  const t = onConfirmPress(1128).t;
  if (isVerifiedTeen) {
    let obj2 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(dependencyMap[11]);
              const obj = closure_1(dependencyMap[12]);
              tmp(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.iWGjcg, obj2);
  } else {
    const obj3 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(dependencyMap[13]);
              const obj2 = { entryPoint: onConfirmPress(dependencyMap[14]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj2);
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.edpbxy, obj3);
  }
  if (noBackground) {
    let WarningIcon;
    const obj4 = { style: tmp.noticeContainer, children: items };
    const tmp8 = closure_6;
    const tmp9 = View;
    if (isVerifiedTeen) {
      WarningIcon = tmp2(5668).CircleInformationIcon;
    } else {
      WarningIcon = tmp2(7933).WarningIcon;
    }
    const obj5 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    items = [closure_5(WarningIcon, obj5), ];
    obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: formatResult };
    items[1] = closure_5(onConfirmPress(5216).Text, obj6);
    tmp6Result = tmp8(tmp9, obj4);
  } else {
    let str = "warning";
    const InlineNotice = tmp2(7929).InlineNotice;
    const tmp6 = closure_5;
    if (isVerifiedTeen) {
      str = "info";
    }
    const obj7 = { type: str, message: formatResult, role: "status" };
    tmp6Result = tmp6(InlineNotice, obj7);
  }
  return tmp6Result;
});
let obj6 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageChannelAgeVerificationNoticeForEvent(arg0) {
  let divider;
  let items2;
  let noBackground;
  let onConfirmPress;
  let style;
  const obj = react2;
  const cResult = obj.c(21);
  ({ noBackground, onConfirmPress, style, divider } = arg0);
  const tmp2 = closure_8();
  const obj2 = useStageSpeakingForCurrentUser;
  if (obj2.useShouldShowAgeVerificationForEvent()) {
    let arr;
    if (cResult[0] !== divider) {
      const _Array = Array;
      let tmp5 = divider;
      if (!Array.isArray(divider)) {
        let items1;
        if (null != divider) {
          const items = [divider];
          items1 = items;
        } else {
          items1 = [];
        }
        tmp5 = items1;
      }
      cResult[0] = divider;
      cResult[1] = tmp5;
      arr = tmp5;
    } else {
      arr = cResult[1];
    }
    if (cResult[2] === arr) {
      let tmp7;
      if (cResult[3] === tmp2.divider) {
        tmp7 = cResult[4];
      }
      const tmp12 = arr.length > 0 ? tmp2.containerWithDivider : tmp2.container;
      if (cResult[5] === style) {
        let tmp13;
        if (cResult[6] === tmp12) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === noBackground) {
          let tmp14;
          if (cResult[9] === onConfirmPress) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            let tmp18;
            if (cResult[12] === tmp14) {
              tmp18 = cResult[13];
            }
            if (cResult[14] === arr) {
              let tmp22;
              if (cResult[15] === tmp2.divider) {
                tmp22 = cResult[16];
              }
              if (cResult[17] === tmp7) {
                if (cResult[18] === tmp18) {
                  let tmp27;
                  if (cResult[19] === tmp22) {
                    tmp27 = cResult[20];
                  }
                  return tmp27;
                }
              }
              const obj3 = { children: items2 };
              items2 = [tmp7, tmp18, tmp22];
              const tmp30 = metroRequire(metroImportDefault, obj3);
              cResult[17] = tmp7;
              cResult[18] = tmp18;
              cResult[19] = tmp22;
              cResult[20] = tmp30;
              tmp27 = tmp30;
            }
            let hasItem = arr.includes(obj6.BOTTOM);
            if (hasItem) {
              const obj4 = { style: tmp2.divider };
              hasItem = hasOwnProperty(View, obj4);
            }
            cResult[14] = arr;
            cResult[15] = tmp2.divider;
            cResult[16] = hasItem;
            tmp22 = hasItem;
          }
          const obj5 = { style: tmp13, children: tmp14 };
          const tmp21 = hasOwnProperty(View, obj5);
          cResult[11] = tmp13;
          cResult[12] = tmp14;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
        obj6 = { noBackground, onConfirmPress };
        const tmp17 = hasOwnProperty(closure_9, obj6);
        cResult[8] = noBackground;
        cResult[9] = onConfirmPress;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const items3 = [tmp12, style];
      cResult[5] = style;
      cResult[6] = tmp12;
      cResult[7] = items3;
      tmp13 = items3;
    }
    let hasItem1 = arr.includes(obj6.TOP);
    if (hasItem1) {
      const obj7 = { style: tmp2.divider };
      hasItem1 = hasOwnProperty(View, obj7);
    }
    cResult[2] = arr;
    cResult[3] = tmp2.divider;
    cResult[4] = hasItem1;
    tmp7 = hasItem1;
  } else {
    return null;
  }
}) : (function StageChannelAgeVerificationNoticeForEvent(divider) {
  let items3;
  let noBackground;
  let obj4;
  let onConfirmPress;
  let style;
  divider = divider.divider;
  ({ noBackground, onConfirmPress, style } = divider);
  const tmp = closure_8();
  const obj = useStageSpeakingForCurrentUser;
  if (obj.useShouldShowAgeVerificationForEvent()) {
    const _Array = Array;
    let arr = divider;
    if (!Array.isArray(divider)) {
      let items1;
      if (null != divider) {
        const items = [divider];
        items1 = items;
      } else {
        items1 = [];
      }
      arr = items1;
    }
    const hasItem = arr.includes(obj6.TOP);
    let tmp10 = hasItem;
    const tmp5 = metroRequire;
    const tmp6 = metroImportDefault;
    const tmp7 = obj6;
    if (tmp10) {
      const obj2 = { style: tmp.divider };
      tmp10 = hasOwnProperty(View, obj2);
    }
    const items2 = [tmp10, , ];
    const obj3 = { style: items3, children: hasOwnProperty(closure_9, obj4) };
    items3 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
    obj4 = { noBackground, onConfirmPress };
    items2[1] = hasOwnProperty(View, obj3);
    let hasItem1 = arr.includes(tmp7.BOTTOM);
    if (hasItem1) {
      const obj5 = { style: tmp.divider };
      hasItem1 = tmp13(tmp14, obj5);
    }
    obj6 = { children: items2 };
    items2[2] = hasItem1;
    return tmp5(tmp6, obj6);
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx");

export default tmp5;
export const DividerPosition = obj6;
