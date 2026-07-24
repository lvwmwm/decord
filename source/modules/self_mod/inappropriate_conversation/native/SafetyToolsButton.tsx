// Module ID: 10159
// Function ID: 78570
// Name: SafetyToolsButton
// Dependencies: [57, 31, 27, 33, 4130, 689, 10160, 10161, 1212, 10163, 4559, 10164, 10165, 8609, 10132, 8216, 2]
// Exports: SafetyToolsButton

// Module 10159 (SafetyToolsButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.safetyToolsButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = function SafetyToolsButton(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let obj = channelId(warningId[6]);
  const safetyToolsButtonTooltipForChannel = obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let tmp = _createForOfIteratorHelperLoose();
  const shouldShowInitialSafetyToolsButtonTooltip = channelId(warningId[7]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  let tmp4 = warningType(safetyToolsButtonTooltipForChannel.useState(false), 2);
  const first = tmp4[0];
  _createForOfIteratorHelperLoose = tmp4[1];
  let items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  const callback = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const intl2 = channelId(warningId[8]).intl;
      let stringResult = intl2.string(channelId(warningId[8]).t["16QyDv"]);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = channelId(warningId[8]).intl;
        stringResult = intl.string(channelId(warningId[8]).t.kCN9i0);
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
    if (first) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
      const tmp4 = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  const callback1 = safetyToolsButtonTooltipForChannel.useCallback((viewName) => {
    let obj = channelId(warningId[9]);
    obj = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
    obj.trackNamedViewEvent(obj);
  }, items2);
  const effect = safetyToolsButtonTooltipForChannel.useEffect(() => {
    const timerId = setTimeout(() => {
      outer1_7(true);
    }, 5);
  }, []);
  recipientId(warningId[10])(() => {
    callback1(channelId(warningId[9]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = safetyToolsButtonTooltipForChannel.useEffect(() => {
    let tmp = memo;
    if (memo) {
      tmp = !shouldShowInitialSafetyToolsButtonTooltip;
    }
    if (tmp) {
      callback1(channelId(warningId[9]).ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP);
    }
    const tmp7 = callback();
    if (null != tmp7) {
      callback(tmp7);
    }
  }, items3);
  const items4 = [channelId, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const callback2 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const result = channelId(warningId[11]).acknowledgeChannelSafetyWarningTooltip(channelId);
      const obj = channelId(warningId[11]);
    }
    if (null != safetyToolsButtonTooltipForChannel) {
      const items = [safetyToolsButtonTooltipForChannel.id];
      const result1 = channelId(warningId[11]).dismissChannelSafetyWarnings(channelId, items);
      const obj2 = channelId(warningId[11]);
    }
  }, items4);
  const items5 = [recipientId, callback2, channelId, warningId, warningType, safetyToolsButtonTooltipForChannel];
  const callback3 = safetyToolsButtonTooltipForChannel.useCallback(() => {
    if (null != recipientId) {
      callback2();
      let obj = channelId(warningId[12]);
      const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
      obj = { channelId, senderId: recipientId, warningId, warningType, cta: channelId(warningId[9]).CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      channelId(warningId[9]).trackCtaEvent(obj);
      const obj2 = channelId(warningId[9]);
    }
  }, items5);
  const ref = safetyToolsButtonTooltipForChannel.useRef(null);
  const items6 = [callback2, memo, first1];
  const memo1 = safetyToolsButtonTooltipForChannel.useMemo(() => {
    const obj = { position: "bottom" };
    let str = "";
    if (null != first1) {
      str = first1;
    }
    obj.label = str;
    obj.visible = memo;
    obj.onPress = function onPress() {
      return outer1_13();
    };
    return obj;
  }, items6);
  let obj2 = channelId(warningId[7]);
  const tooltip = channelId(warningId[13]).useTooltip(ref, memo1);
  obj = { ref };
  obj = { noMargin: true };
  const obj3 = channelId(warningId[13]);
  obj.color = recipientId(warningId[5]).unsafe_rawColors.WHITE;
  obj.source = recipientId(warningId[15]);
  obj.onPress = callback3;
  let intl = channelId(warningId[8]).intl;
  obj.accessibilityLabel = intl.string(channelId(warningId[8]).t.rpc2qv);
  obj.style = tmp.safetyToolsButton;
  obj.children = first(recipientId(warningId[14]), obj);
  return first(shouldShowInitialSafetyToolsButtonTooltip, obj);
};
