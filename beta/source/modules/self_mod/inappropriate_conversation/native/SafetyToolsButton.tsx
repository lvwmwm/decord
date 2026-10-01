// Module ID: 12856
// Function ID: 12857
// Name: SafetyToolsButton
// Dependencies: [32, 19, 17, 21, 4836, 576, 10938, 10940, 1115, 10912, 5298, 10913, 10935, 10590, 12830, 8704, 2]
// Exports: SafetyToolsButton

// Module 12856 (SafetyToolsButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10913 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 10935 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { safetyToolsButton: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = function SafetyToolsButton(channelId) {
  let intl;
  let obj5;
  let tmp19;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  closure_7 = undefined;
  let tmp = closure_7();
  let obj = channelId(warningId[6]);
  const safetyToolsButtonTooltipForChannel = obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let obj2 = channelId(warningId[7]);
  const shouldShowInitialSafetyToolsButtonTooltip = obj2.useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  const tmp4 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  const callback = safetyToolsButtonTooltipForChannel.useCallback(() => {
    let stringResult;
    const tmp = shouldShowInitialSafetyToolsButtonTooltip;
    if (tmp) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t["16QyDv"]);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.kCN9i0);
      }
    }
    return stringResult;
  }, items);
  let tmp7 = warningType(safetyToolsButtonTooltipForChannel.useState(callback()), 2);
  const first1 = tmp7[0];
  let closure_10 = tmp7[1];
  const items1 = [first, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const memo = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let tmp = first;
    if (tmp) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  const callback1 = safetyToolsButtonTooltipForChannel.useCallback((viewName) => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
    obj.trackNamedViewEvent(obj2);
  }, items2);
  const effect = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_7(true);
    }, 5);
  }, []);
  recipientId(warningId[10])(() => {
    callback1(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const tmp = memo && !shouldShowInitialSafetyToolsButtonTooltip;
    if (tmp) {
      callback1(SafetyWarningUtils.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
    }
    const tmp7 = callback();
    if (null != tmp7) {
      closure_10(tmp7);
    }
  }, items3);
  const items4 = [channelId, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const callback2 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    const tmp = shouldShowInitialSafetyToolsButtonTooltip;
    if (tmp) {
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.acknowledgeChannelSafetyWarningTooltip(channelId);
    }
    if (null != safetyToolsButtonTooltipForChannel) {
      const items = [tmp6.id];
      const obj2 = ChannelSafetyWarningsActionCreators;
      const result1 = obj2.dismissChannelSafetyWarnings(channelId, items);
    }
  }, items4);
  const items5 = [recipientId, callback2, channelId, warningId, warningType, safetyToolsButtonTooltipForChannel];
  const callback3 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (null != recipientId) {
      callback2();
      const obj = SafetyToolsActionCreators;
      const result = obj.openSafetyToolsActionSheet(channelId, tmp, warningId, warningType);
      const obj2 = { channelId, senderId: recipientId, warningId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
      SafetyWarningUtils;
      trackCtaEvent(obj2);
    }
  }, items5);
  const ref = safetyToolsButtonTooltipForChannel.useRef(null);
  const items6 = [callback2, memo, first1];
  const memo1 = safetyToolsButtonTooltipForChannel.useMemo(() => {
    let str = first1;
    if (first1 == null) {
      str = "";
    }
    return {
      position: "bottom",
      label: str,
      visible: memo,
      onPress() {
        return callback2();
      }
    };
  }, items6);
  const obj3 = channelId(warningId[13]);
  const tooltip = obj3.useTooltip(ref, memo1);
  const obj4 = { ref, children: first(tmp19, obj5) };
  obj5 = { noMargin: true, color: recipientId(warningId[5]).unsafe_rawColors.WHITE, source: recipientId(warningId[15]), onPress: callback3, accessibilityLabel: intl.string(channelId(warningId[8]).t.rpc2qv), style: tmp.safetyToolsButton };
  tmp19 = recipientId(warningId[14]);
  intl = channelId(warningId[8]).intl;
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj4);
};
