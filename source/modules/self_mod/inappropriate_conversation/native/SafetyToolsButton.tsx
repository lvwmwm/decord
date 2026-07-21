// Module ID: 10118
// Function ID: 78312
// Name: SafetyToolsButton
// Dependencies: []
// Exports: SafetyToolsButton

// Module 10118 (SafetyToolsButton)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.safetyToolsButton = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx");

export const SafetyToolsButton = function SafetyToolsButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const recipientId = channelId.recipientId;
  const importDefault = recipientId;
  const warningId = channelId.warningId;
  const dependencyMap = warningId;
  const warningType = channelId.warningType;
  let callback = warningType;
  let obj = arg1(dependencyMap[6]);
  const safetyToolsButtonTooltipForChannel = obj.useSafetyToolsButtonTooltipForChannel(channelId);
  const React = safetyToolsButtonTooltipForChannel;
  const tmp = callback2();
  const shouldShowInitialSafetyToolsButtonTooltip = arg1(dependencyMap[7]).useShouldShowInitialSafetyToolsButtonTooltip(channelId);
  const View = shouldShowInitialSafetyToolsButtonTooltip;
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const jsx = first;
  let callback2 = tmp4[1];
  const items = [shouldShowInitialSafetyToolsButtonTooltip, safetyToolsButtonTooltipForChannel];
  callback = React.useCallback(() => {
    if (shouldShowInitialSafetyToolsButtonTooltip) {
      const intl2 = channelId(warningId[8]).intl;
      let stringResult = intl2.string(channelId(warningId[8]).t.16QyDv);
    } else {
      stringResult = null;
      if (null != safetyToolsButtonTooltipForChannel) {
        const intl = channelId(warningId[8]).intl;
        stringResult = intl.string(channelId(warningId[8]).t.kCN9i0);
      }
    }
    return stringResult;
  }, items);
  const tmp7 = callback(React.useState(callback()), 2);
  const first1 = tmp7[0];
  let closure_10 = tmp7[1];
  const items1 = [first, safetyToolsButtonTooltipForChannel, shouldShowInitialSafetyToolsButtonTooltip];
  const memo = React.useMemo(() => {
    let tmp = first;
    if (first) {
      tmp = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
      const tmp4 = null != safetyToolsButtonTooltipForChannel || shouldShowInitialSafetyToolsButtonTooltip;
    }
    return tmp;
  }, items1);
  const items2 = [channelId, warningId, warningType, recipientId, safetyToolsButtonTooltipForChannel];
  const callback1 = React.useCallback((viewName) => {
    let obj = channelId(warningId[9]);
    obj = { channelId, warningId, warningType, senderId: recipientId, viewName, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
    obj.trackNamedViewEvent(obj);
  }, items2);
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 5);
  }, []);
  importDefault(dependencyMap[10])(() => {
    callback1(channelId(warningId[9]).ViewNameTypes.SAFETY_TOOLS_BUTTON);
  });
  const items3 = [callback, memo, shouldShowInitialSafetyToolsButtonTooltip, callback1];
  const effect1 = React.useEffect(() => {
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
  callback2 = React.useCallback(() => {
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
  const callback3 = React.useCallback(() => {
    if (null != recipientId) {
      callback2();
      let obj = channelId(warningId[12]);
      const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
      obj = { channelId, senderId: recipientId, warningId, warningType, cta: channelId(warningId[9]).CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK, isNudgeWarning: null != safetyToolsButtonTooltipForChannel };
      channelId(warningId[9]).trackCtaEvent(obj);
      const obj2 = channelId(warningId[9]);
    }
  }, items5);
  const ref = React.useRef(null);
  const items6 = [callback2, memo, first1];
  const memo1 = React.useMemo(() => {
    const obj = { position: "bottom" };
    let str = "";
    if (null != first1) {
      str = first1;
    }
    obj.label = str;
    obj.visible = memo;
    obj.onPress = function onPress() {
      return callback();
    };
    return obj;
  }, items6);
  const obj2 = arg1(dependencyMap[7]);
  const tooltip = arg1(dependencyMap[13]).useTooltip(ref, memo1);
  obj = { ref };
  obj = { noMargin: true };
  const obj3 = arg1(dependencyMap[13]);
  obj.color = importDefault(dependencyMap[5]).unsafe_rawColors.WHITE;
  obj.source = importDefault(dependencyMap[15]);
  obj.onPress = callback3;
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.rpc2qv);
  obj.style = tmp.safetyToolsButton;
  obj.children = jsx(importDefault(dependencyMap[14]), obj);
  return <View {...obj} />;
};
