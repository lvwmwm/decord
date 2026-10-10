// Module ID: 10407
// Function ID: 10408
// Name: WasThisHelpfulSection
// Dependencies: [19, 17, 10284, 10381, 21, 5092, 587, 558, 576, 573, 10395, 4809, 1126, 10408, 10394, 5088, 1200, 10410, 10411, 2]

// Module 10407 (WasThisHelpfulSection)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10284 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10395 */;
import ShieldIcon from "ShieldIcon" /* 10408 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 10381 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const constants = ChannelSafetyWarningsStore2.SafetyWarningFeedbackTypes;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function WasThisHelpfulSection(channelId) {
  let first;
  let intl;
  let senderId;
  const tmp = channelId;
  let obj = channelId(senderId[8]);
  const cResult = obj.c(43);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = ChannelSafetyWarningsStore;
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let feedback_type;
    if (cResult[2] === warningId) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(tmp2[9]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    const UPVOTE = constants.UPVOTE;
    if (stateFromStores != null) {
      const feedback_type2 = stateFromStores.feedback_type;
    }
    if (cResult[4] === channelId) {
      let type;
      const tmp11 = cResult[5];
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      if (tmp11 === type) {
        if (cResult[6] === senderId) {
          let tmp13;
          if (cResult[7] === warningId) {
            tmp13 = cResult[8];
          }
          let closure_4 = tmp13;
          const _Symbol = Symbol;
          const container = tmp4.container;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(tmp(tmp2[12]).t.L84yVm) };
            const Text = tmp(tmp2[15]).Text;
            intl = tmp(tmp2[12]).intl;
            cResult[9] = closure_10(Text, obj2);
            const tmp17 = closure_10(Text, obj2);
          }
          const tmp19 = feedback_type === UPVOTE ? tmp4.buttonsBackgroundActive : tmp4.buttonsBackgroundInactive;
          if (cResult[10] === tmp4.buttonsBackground) {
            let tmp20;
            if (cResult[11] === tmp19) {
              tmp20 = cResult[12];
            }
            if (cResult[13] !== tmp13) {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
              cResult[13] = tmp13;
              cResult[14] = V;
            } else {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
              const stringResult = obj4.string(tmp(senderId[12]).t["2GrOCN"]);
              cResult[15] = stringResult;
            } else {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            }
            if (feedback_type === UPVOTE) {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            } else {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            }
            if (cResult[16] !== tmp24) {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
              let obj3 = { size: tmp(tmp2[16]).Icon.Sizes.SMALL_20, source: warningId(tmp2[17]), color: tmp24 };
              const Icon = tmp(tmp2[16]).Icon;
              cResult[16] = tmp24;
              cResult[17] = closure_10(Icon, obj3);
              const tmp27 = closure_10(Icon, obj3);
            } else {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            }
            if (cResult[18] === feedback_type === UPVOTE) {
              class V {
                constructor() {
                  return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                }
              }
            }
            class B {
              constructor(feedbackType, cta) {
                let intl;
                let type;
                const obj = ChannelSafetyWarningsActionCreators;
                const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
                const tmp6 = feedbackType === constants.UPVOTE ? React4 : metroImportAll;
                const obj2 = { text: intl.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = tmp(1126).intl;
                open(tmp6, obj2);
                const obj3 = { channelId, warningId, senderId, warningType: type, cta };
                type = undefined;
                const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
                SafetyWarningUtils;
                if (stateFromStores != null) {
                  type = stateFromStores.type;
                }
                trackCtaEvent(obj3);
              }
            }
            cResult[18] = feedback_type === UPVOTE;
            cResult[19] = tmp25;
            cResult[20] = tmp20;
            cResult[21] = tmp21;
            cResult[22] = tmp31;
          }
          const items1 = [tmp4.buttonsBackground, tmp19];
          cResult[10] = tmp4.buttonsBackground;
          cResult[11] = tmp19;
          class B {
            constructor(feedbackType, cta) {
              let intl;
              let type;
              const obj = ChannelSafetyWarningsActionCreators;
              const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
              const tmp6 = feedbackType === constants.UPVOTE ? React4 : metroImportAll;
              const obj2 = { text: intl.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = tmp(1126).intl;
              open(tmp6, obj2);
              const obj3 = { channelId, warningId, senderId, warningType: type, cta };
              type = undefined;
              const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
              SafetyWarningUtils;
              if (stateFromStores != null) {
                type = stateFromStores.type;
              }
              trackCtaEvent(obj3);
            }
          }
          cResult[12] = items1;
          tmp20 = items1;
        }
      }
    }
    cResult[4] = channelId;
    if (stateFromStores != null) {
      class V {
        constructor() {
          return closure_4(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
        }
      }
    }
    class B {
      constructor(feedbackType, cta) {
        let intl;
        let type;
        const obj = ChannelSafetyWarningsActionCreators;
        const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
        const tmp6 = feedbackType === constants.UPVOTE ? React4 : metroImportAll;
        const obj2 = { text: intl.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp(1126).intl;
        open(tmp6, obj2);
        const obj3 = { channelId, warningId, senderId, warningType: type, cta };
        type = undefined;
        const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
        SafetyWarningUtils;
        if (stateFromStores != null) {
          type = stateFromStores.type;
        }
        trackCtaEvent(obj3);
      }
    }
    cResult[5] = undefined;
    cResult[6] = senderId;
    cResult[7] = warningId;
    cResult[8] = B;
    tmp13 = B;
  }
  const fn = function u() {
    return ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId);
  };
  cResult[1] = channelId;
  cResult[2] = warningId;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function WasThisHelpfulSection(channelId) {
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
  let obj = channelId(senderId[9]);
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
    intl = tmp(1126).intl;
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
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(channelId(senderId[12]).t.L84yVm) };
  const Text = channelId(senderId[15]).Text;
  intl = channelId(senderId[12]).intl;
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
    accessibilityLabel: intl2.string(channelId(senderId[12]).t["2GrOCN"]),
    children: closure_10(Icon, obj6)
  };
  intl2 = tmp2(tmp3[12]).intl;
  obj6 = { size: channelId(senderId[16]).Icon.Sizes.SMALL_20, source: warningId(senderId[17]), color };
  Icon = tmp2(tmp3[16]).Icon;
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
    accessibilityLabel: intl3.string(channelId(senderId[12]).t.COp9BO),
    children: closure_10(Icon2, obj8)
  };
  intl3 = tmp2(tmp3[12]).intl;
  obj8 = { size: channelId(senderId[16]).Icon.Sizes.SMALL_20, source: tmp11(senderId[18]), color: color2 };
  Icon2 = tmp2(tmp3[16]).Icon;
  if (memo1) {
    color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  items6[1] = closure_10(closure_4, obj7);
  items4[1] = tmp7(closure_5, obj4);
  return tmp7(closure_5, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default tmp6;
