// Module ID: 10404
// Function ID: 80145
// Name: WasThisHelpfulSection
// Dependencies: []
// Exports: default

// Module 10404 (WasThisHelpfulSection)
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[2]).SafetyWarningFeedbackTypes;
const tmp3 = arg1(dependencyMap[3]);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: closure_9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_10 } = tmp3);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: {} };
obj = { flexDirection: "row", marginTop: importDefault(dependencyMap[6]).space.PX_8, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.buttonsContainer = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.buttonsBackground = { width: importDefault(dependencyMap[6]).space.PX_32, height: importDefault(dependencyMap[6]).space.PX_32, borderRadius: importDefault(dependencyMap[6]).radii.round, alignItems: "center", justifyContent: "center" };
const obj1 = { width: importDefault(dependencyMap[6]).space.PX_32, height: importDefault(dependencyMap[6]).space.PX_32, borderRadius: importDefault(dependencyMap[6]).radii.round, alignItems: "center", justifyContent: "center" };
obj.buttonsBackgroundInactive = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.buttonsBackgroundActive = { borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: tmp3.FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
const obj3 = { borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: tmp3.FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
obj.buttonIconInactive = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj4 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.buttonIconActive = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.toastContainer = {};
let closure_13 = obj.createStyles(obj);
const obj5 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const warningId = channelId.warningId;
  const importDefault = warningId;
  const senderId = channelId.senderId;
  const dependencyMap = senderId;
  const tmp = callback2();
  const React = tmp;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channelSafetyWarning.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let feedback_type;
    if (null != stateFromStores) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = React.useMemo(() => {
    let feedback_type;
    if (null != stateFromStores) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  let closure_5 = React.useCallback((feedbackType, cta) => {
    let obj = channelId(senderId[8]);
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    obj = { key: feedbackType === constants.UPVOTE ? closure_10 : closure_8 };
    const intl = channelId(senderId[10]).intl;
    obj.content = intl.string(channelId(senderId[10]).t.gd/Yqs);
    obj.icon = warningId(senderId[11]);
    obj.IconComponent = channelId(senderId[12]).ShieldIcon;
    obj.iconColor = closure_9;
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
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.L84yVm);
  const items4 = [callback(arg1(dependencyMap[14]).Text, obj), ];
  const obj1 = { style: tmp.buttonsContainer };
  const obj2 = {
    style: items5,
    disabled: memo,
    onPress() {
      return callback(constants.UPVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_UPVOTE);
    }
  };
  const items5 = [tmp.buttonsBackground, memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive];
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[10]).t.2GrOCN);
  const obj3 = { size: arg1(dependencyMap[15]).Icon.Sizes.SMALL_20, source: importDefault(dependencyMap[16]) };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj3.color = color;
  obj2.children = callback(arg1(dependencyMap[15]).Icon, obj3);
  const items6 = [callback(stateFromStores, obj2), ];
  const obj4 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return callback(constants.DOWNVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_DOWNVOTE);
    }
  };
  const items7 = [tmp.buttonsBackground, memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive];
  const intl3 = arg1(dependencyMap[10]).intl;
  obj4.accessibilityLabel = intl3.string(arg1(dependencyMap[10]).t.COp9BO);
  const obj5 = { size: arg1(dependencyMap[15]).Icon.Sizes.SMALL_20, source: importDefault(dependencyMap[17]) };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj5.color = color2;
  obj4.children = callback(arg1(dependencyMap[15]).Icon, obj5);
  items6[1] = callback(stateFromStores, obj4);
  obj1.children = items6;
  items4[1] = closure_12(closure_5, obj1);
  obj.children = items4;
  return closure_12(closure_5, obj);
};
