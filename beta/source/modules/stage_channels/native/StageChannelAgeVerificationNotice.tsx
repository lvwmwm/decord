// Module ID: 7858
// Function ID: 7859
// Name: StageChannelAgeVerificationNotice
// Dependencies: [19, 17, 1074, 21, 4836, 576, 5048, 1115, 4832, 4519, 2111, 7859, 7861, 4787, 8048, 1177, 5734, 2]
// Exports: default

// Module 7858 (StageChannelAgeVerificationNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5734 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
  let formatResult;
  onConfirmPress = onConfirmPress.onConfirmPress;
  let closure_1 = closure_8();
  let obj = onConfirmPress(5048);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1115).intl;
  const format = intl.format;
  const t = onConfirmPress(1115).t;
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
  return formatResult;
}
function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  let items;
  let obj5;
  let obj7;
  let tmp5Result;
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  const tmp = closure_8();
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (noBackground) {
    let WarningIcon;
    const obj2 = { style: tmp.noticeContainer, children: items };
    const tmp8 = metroRequire;
    const tmp9 = View;
    if (isVerifiedTeen) {
      WarningIcon = tmp2(4787).CircleInformationIcon;
    } else {
      WarningIcon = tmp2(8048).WarningIcon;
    }
    const obj3 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    items = [hasOwnProperty(WarningIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj5) };
    obj5 = { onConfirmPress };
    const Text = tmp2(4832).Text;
    items[1] = hasOwnProperty(Text, obj4);
    tmp5Result = tmp8(tmp9, obj2);
  } else {
    const HelpMessage = tmp2(1177).HelpMessage;
    const HelpMessageTypes = tmp2(1177).HelpMessageTypes;
    obj6 = { messageType: isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING, children: hasOwnProperty(StageChannelAgeVerificationNoticeContent, obj7) };
    obj7 = { onConfirmPress };
    tmp5Result = tmp5(HelpMessage, obj6);
  }
  return tmp5Result;
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
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default function StageChannelAgeVerificationNotice(arg0) {
  let channelId;
  let divider;
  let items3;
  let noBackground;
  let obj3;
  let onConfirmPress;
  let style;
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = closure_8();
  const useShouldAgeVerifyToSpeakForCurrentUser = useStageSpeakingForCurrentUser.useShouldAgeVerifyToSpeakForCurrentUser;
  useStageSpeakingForCurrentUser;
  if (useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
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
    let tmp9 = hasItem;
    const tmp4 = metroRequire;
    const tmp5 = metroImportDefault;
    const tmp6 = obj6;
    if (tmp9) {
      const obj = { style: tmp.divider };
      tmp9 = hasOwnProperty(View, obj);
    }
    const items2 = [tmp9, , ];
    const obj2 = { style: items3, children: hasOwnProperty(StageChannelAgeVerificationNoticeWrapper, obj3) };
    items3 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
    obj3 = { noBackground, onConfirmPress };
    items2[1] = hasOwnProperty(View, obj2);
    let hasItem1 = arr.includes(tmp6.BOTTOM);
    if (hasItem1) {
      const obj4 = { style: tmp.divider };
      hasItem1 = tmp12(tmp13, obj4);
    }
    const obj5 = { children: items2 };
    items2[2] = hasItem1;
    return tmp4(tmp5, obj5);
  } else {
    return null;
  }
};
export const DividerPosition = obj6;
