// Module ID: 9073
// Function ID: 9074
// Name: StageChannelAgeVerificationNoticeForEvent
// Dependencies: [19, 17, 1072, 21, 5014, 575, 6726, 1113, 5624, 5705, 2061, 7955, 6729, 5735, 8026, 8025, 6758, 2]
// Exports: default

// Module 9073 (StageChannelAgeVerificationNoticeForEvent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5624 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6758 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  let closure_1;
  let formatResult;
  let items;
  let tmp6Result;
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  let tmp = closure_8();
  importDefault = tmp;
  let obj = onConfirmPress(6726);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1113).intl;
  const format = intl.format;
  const t = onConfirmPress(1113).t;
  if (isVerifiedTeen) {
    let obj2 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(dependencyMap[9]);
              const obj = closure_1(dependencyMap[10]);
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
              const obj = closure_1(dependencyMap[11]);
              const obj2 = { entryPoint: onConfirmPress(dependencyMap[12]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
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
      WarningIcon = tmp2(5735).CircleInformationIcon;
    } else {
      WarningIcon = tmp2(8026).WarningIcon;
    }
    const obj5 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    items = [closure_5(WarningIcon, obj5), ];
    obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: formatResult };
    items[1] = closure_5(onConfirmPress(5624).Text, obj6);
    tmp6Result = tmp8(tmp9, obj4);
  } else {
    let str = "warning";
    const InlineNotice = tmp2(8025).InlineNotice;
    const tmp6 = closure_5;
    if (isVerifiedTeen) {
      str = "info";
    }
    const obj7 = { type: str, message: formatResult, role: "status" };
    tmp6Result = tmp6(InlineNotice, obj7);
  }
  return tmp6Result;
}
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
let obj6 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNoticeForEvent.tsx");

export default function StageChannelAgeVerificationNoticeForEvent(divider) {
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
    const obj3 = { style: items3, children: hasOwnProperty(StageChannelAgeVerificationNoticeWrapper, obj4) };
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
};
export const DividerPosition = obj6;
