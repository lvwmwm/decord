// Module ID: 11254
// Function ID: 11255
// Name: WasThisHelpfulSection
// Dependencies: [19, 17, 10784, 11230, 21, 5009, 575, 563, 11244, 5707, 1114, 11255, 11243, 5619, 1188, 11257, 11258, 2]
// Exports: default

// Module 11254 (WasThisHelpfulSection)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10784 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11243 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11244 */;
import ShieldIcon from "ShieldIcon" /* 11255 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 11230 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

let FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let unpackModuleId;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_7 = ChannelSafetyWarningsStore2.SafetyWarningFeedbackTypes;
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: metroImportAll, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c9, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", alignItems: "center" }, buttonsContainer: obj2, buttonsBackground: size, buttonsBackgroundInactive: obj3, buttonsBackgroundActive: obj4, buttonIconInactive: obj5, buttonIconActive: obj6 };
obj2 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  let Icon;
  let Icon2;
  let color;
  let color2;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items6;
  let obj6;
  let obj8;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_12();
  let obj = channelId(senderId[7]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = stateFromStores.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, senderId, stateFromStores];
  let closure_4 = stateFromStores.useCallback((feedbackType, cta) => {
    let intl;
    let type;
    const obj = ChannelSafetyWarningsActionCreators;
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    const tmp6 = feedbackType === constants.UPVOTE ? React4 : metroImportAll;
    const obj2 = { text: intl.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = tmp(1114).intl;
    open(tmp6, obj2);
    const obj3 = { channelId, warningId, senderId, warningType: type, cta };
    type = undefined;
    const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
    SafetyWarningUtils;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    trackCtaEvent(obj3);
  }, items3);
  const tmp7 = closure_11;
  let obj2 = { style: tmp.container, children: items4 };
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(channelId(senderId[10]).t.L84yVm) };
  const Text = channelId(senderId[13]).Text;
  intl = channelId(senderId[10]).intl;
  items4 = [closure_10(Text, obj3), ];
  const items5 = [tmp.buttonsBackground, ];
  const obj4 = { style: tmp.buttonsContainer, children: items6 };
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj5 = {
    style: items5,
    disabled: memo,
    onPress() {
      return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: intl2.string(channelId(senderId[10]).t["2GrOCN"]),
    children: closure_10(Icon, obj6)
  };
  intl2 = tmp2(tmp3[10]).intl;
  obj6 = { size: channelId(senderId[14]).Icon.Sizes.SMALL_20, source: warningId(senderId[15]), color };
  Icon = tmp2(tmp3[14]).Icon;
  const tmp11 = warningId;
  if (memo) {
    color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  items6 = [closure_10(closure_4, obj5), ];
  const items7 = [tmp.buttonsBackground, ];
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj7 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return closure_4(constants.DOWNVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: intl3.string(channelId(senderId[10]).t.COp9BO),
    children: closure_10(Icon2, obj8)
  };
  intl3 = tmp2(tmp3[10]).intl;
  obj8 = { size: channelId(senderId[14]).Icon.Sizes.SMALL_20, source: tmp11(senderId[16]), color: color2 };
  Icon2 = tmp2(tmp3[14]).Icon;
  if (memo1) {
    color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  items6[1] = closure_10(closure_4, obj7);
  items4[1] = tmp7(closure_5, obj4);
  return tmp7(closure_5, obj2);
};
