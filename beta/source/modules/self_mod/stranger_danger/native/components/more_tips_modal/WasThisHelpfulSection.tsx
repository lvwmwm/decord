// Module ID: 10921
// Function ID: 10922
// Name: WasThisHelpfulSection
// Dependencies: [19, 17, 10376, 10905, 21, 4836, 576, 563, 10913, 4528, 1115, 8704, 8705, 10912, 4832, 1177, 10922, 10923, 2]
// Exports: default

// Module 10921 (WasThisHelpfulSection)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 8704 */;
import ShieldIcon from "ShieldIcon" /* 8705 */;
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10376 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10913 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 10905 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

let FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR;
let c10;
let c9;
let closure_12;
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
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_7 = ChannelSafetyWarningsStore2.SafetyWarningFeedbackTypes;
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: metroImportAll, TOAST_SHIELD_ICON_COLOR: c9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", alignItems: "center" }, buttonsContainer: obj2, buttonsBackground: size, buttonsBackgroundInactive: obj3, buttonsBackgroundActive: obj4, buttonIconInactive: obj5, buttonIconActive: obj6, toastContainer: { paddingHorizontal: 8, paddingVertical: 12 } };
obj2 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_13 = createStyles(obj);
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
  let toastContainer;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_13();
  react = tmp;
  let obj = channelId(senderId[7]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = react.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  let closure_5 = react.useCallback((feedbackType, cta) => {
    let intl;
    let type;
    const obj = ChannelSafetyWarningsActionCreators;
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    const obj2 = { key: feedbackType === constants.UPVOTE ? authStore : metroImportAll, content: intl.string(intl4.t["gd/Yqs"]), icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor, containerStyle: toastContainer.toastContainer, recolorLegacyIcon: true };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = tmp(1115).intl;
    open(obj2);
    const obj3 = { channelId, warningId, senderId, warningType: type, cta };
    type = undefined;
    const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
    SafetyWarningUtils;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    trackCtaEvent(obj3);
  }, items3);
  const tmp7 = closure_12;
  let obj2 = { style: tmp.container, children: items4 };
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(channelId(senderId[10]).t.L84yVm) };
  const Text = channelId(senderId[14]).Text;
  intl = channelId(senderId[10]).intl;
  items4 = [closure_11(Text, obj3), ];
  const items5 = [tmp.buttonsBackground, ];
  const obj4 = { style: tmp.buttonsContainer, children: items6 };
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj5 = {
    style: items5,
    disabled: memo,
    onPress() {
      return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: intl2.string(channelId(senderId[10]).t["2GrOCN"]),
    children: closure_11(Icon, obj6)
  };
  intl2 = tmp2(tmp3[10]).intl;
  obj6 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[16]), color };
  Icon = tmp2(tmp3[15]).Icon;
  const tmp11 = warningId;
  if (memo) {
    color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  items6 = [closure_11(stateFromStores, obj5), ];
  const items7 = [tmp.buttonsBackground, ];
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj7 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return closure_5(constants.DOWNVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: intl3.string(channelId(senderId[10]).t.COp9BO),
    children: closure_11(Icon2, obj8)
  };
  intl3 = tmp2(tmp3[10]).intl;
  obj8 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: tmp11(senderId[17]), color: color2 };
  Icon2 = tmp2(tmp3[15]).Icon;
  if (memo1) {
    color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  items6[1] = closure_11(stateFromStores, obj7);
  items4[1] = tmp7(closure_5, obj4);
  return tmp7(closure_5, obj2);
};
