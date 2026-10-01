// Module ID: 9462
// Function ID: 9463
// Name: ChannelCallMicButton
// Dependencies: [19, 4853, 21, 6763, 504, 9463, 9464, 8855, 1115, 9467, 9468, 576, 2]
// Exports: ChannelCallMicButton

// Module 9462 (ChannelCallMicButton)
import Fragment from "Fragment" /* 21 */;
import useMuteStatesDefault from "useMuteStates" /* 6763 */;
import CallBarActionAll from "CallBarAction" /* 8855 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 9464 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let RED_400;
  let awaitingRemoteSessionInfo;
  let channel;
  let intl;
  let isSmallSize;
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  const tmp3 = useMuteStatesDefault(channel);
  const items = [GameConsoleStore];
  const obj = mute(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = mute(9463);
  const muteHandler = obj2.createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const onPress = muteHandler.onPress;
  const memo = react.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  const obj3 = { appearsDisabled: stateFromStores, accessibilityLabel: intl.string(mute(1115).t.B3zz0G), onPress, source: importDefault(mute ? 9467 : 9468), isActive: flag, isSmallSize, lottieComponent: memo, tintColor: RED_400 };
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  intl = mute(1115).intl;
  const tmp7 = jsx;
  if (!flag) {
    flag = mute;
  }
  RED_400 = undefined;
  if (mute) {
    RED_400 = tmp(576).unsafe_rawColors.RED_400;
  }
  return tmp7(ToggledActionButton, obj3);
};
