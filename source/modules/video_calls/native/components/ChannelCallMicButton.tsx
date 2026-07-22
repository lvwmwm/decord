// Module ID: 10722
// Function ID: 83425
// Name: ChannelCallMicButton
// Dependencies: []
// Exports: ChannelCallMicButton

// Module 10722 (ChannelCallMicButton)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let channel;
  let isSmallSize;
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let arg1;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp = importDefault;
  const tmp2 = importDefault(dependencyMap[3])(channel);
  const muteHandler = arg1(dependencyMap[5]).createMuteHandler(tmp2, stateFromStores);
  const mute = muteHandler.mute;
  arg1 = mute;
  const items1 = [mute];
  const memo = React.useMemo(() => callback(mute(closure_3[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.B3zz0G);
  obj.onPress = muteHandler.onPress;
  if (mute) {
    let tmp8 = tmp7[9];
  } else {
    tmp8 = tmp7[10];
  }
  obj.source = tmp(tmp8);
  if (!flag) {
    flag = mute;
  }
  obj.isActive = flag;
  obj.isSmallSize = isSmallSize;
  obj.lottieComponent = memo;
  let RED_400;
  if (mute) {
    RED_400 = importDefault(dependencyMap[11]).unsafe_rawColors.RED_400;
  }
  obj.tintColor = RED_400;
  return jsx(importAll(dependencyMap[7]).ToggledActionButton, obj);
};
