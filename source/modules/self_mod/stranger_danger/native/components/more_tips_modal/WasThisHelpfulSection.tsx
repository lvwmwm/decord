// Module ID: 10444
// Function ID: 80411
// Name: WasThisHelpfulSection
// Dependencies: [31, 27, 9139, 10166, 33, 4130, 689, 624, 10164, 3831, 1212, 8216, 8217, 10163, 4126, 1273, 10445, 10446, 2]
// Exports: default

// Module 10444 (WasThisHelpfulSection)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningFeedbackTypes as closure_7 } from "_isNativeReflectConstruct";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: closure_9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_10 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column", alignItems: "center" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonsBackground = { width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
let obj1 = { width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.buttonsBackgroundInactive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.buttonsBackgroundActive = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: LOCATION_CONTEXT_MOBILE.FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
let obj3 = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: LOCATION_CONTEXT_MOBILE.FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
_createForOfIteratorHelperLoose.buttonIconInactive = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.buttonIconActive = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.toastContainer = { paddingHorizontal: 8, paddingVertical: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  let obj = channelId(senderId[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let feedback_type;
    if (null != stateFromStores) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === outer1_7.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = React.useMemo(() => {
    let feedback_type;
    if (null != stateFromStores) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === outer1_7.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  let closure_5 = React.useCallback((feedbackType, cta) => {
    let obj = channelId(senderId[8]);
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    obj = { key: feedbackType === outer1_7.UPVOTE ? outer1_10 : outer1_8 };
    const intl = channelId(senderId[10]).intl;
    obj.content = intl.string(channelId(senderId[10]).t["gd/Yqs"]);
    obj.icon = warningId(senderId[11]);
    obj.IconComponent = channelId(senderId[12]).ShieldIcon;
    obj.iconColor = outer1_9;
    obj.containerStyle = tmp.toastContainer;
    obj.recolorLegacyIcon = true;
    warningId(senderId[9]).open(obj);
    const obj2 = warningId(senderId[9]);
    obj = { channelId, warningId, senderId };
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    obj.warningType = type;
    obj.cta = cta;
    channelId(senderId[13]).trackCtaEvent(obj);
  }, items3);
  obj = { style: tmp.container };
  obj = { variant: "text-sm/normal", color: "mobile-text-heading-primary" };
  let intl = channelId(senderId[10]).intl;
  obj.children = intl.string(channelId(senderId[10]).t.L84yVm);
  const items4 = [callback(channelId(senderId[14]).Text, obj), ];
  const obj1 = { style: tmp.buttonsContainer };
  let obj2 = {
    style: items5,
    disabled: memo,
    onPress() {
      return callback(outer1_7.UPVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_UPVOTE);
    }
  };
  items5 = [tmp.buttonsBackground, memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive];
  const intl2 = channelId(senderId[10]).intl;
  obj2.accessibilityLabel = intl2.string(channelId(senderId[10]).t["2GrOCN"]);
  const obj3 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[16]) };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj3.color = color;
  obj2.children = callback(channelId(senderId[15]).Icon, obj3);
  const items6 = [callback(stateFromStores, obj2), ];
  const obj4 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return callback(outer1_7.DOWNVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_DOWNVOTE);
    }
  };
  items7 = [tmp.buttonsBackground, memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive];
  const intl3 = channelId(senderId[10]).intl;
  obj4.accessibilityLabel = intl3.string(channelId(senderId[10]).t.COp9BO);
  const obj5 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[17]) };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj5.color = color2;
  obj4.children = callback(channelId(senderId[15]).Icon, obj5);
  items6[1] = callback(stateFromStores, obj4);
  obj1.children = items6;
  items4[1] = closure_12(closure_5, obj1);
  obj.children = items4;
  return closure_12(closure_5, obj);
};
