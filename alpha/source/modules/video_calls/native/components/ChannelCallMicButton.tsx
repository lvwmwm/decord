// Module ID: 12135
// Function ID: 12136
// Name: ChannelCallMicButton
// Dependencies: [19, 5894, 21, 7598, 504, 12136, 12137, 11878, 1113, 12140, 12141, 575, 2]
// Exports: ChannelCallMicButton

// Module 12135 (ChannelCallMicButton)
import Fragment from "Fragment" /* 21 */;
import useMuteStatesDefault from "useMuteStates" /* 7598 */;
import CallBarActionAll from "CallBarAction" /* 11878 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 12137 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5894 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export function ChannelCallMicButton(disableTint) {
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
  const obj2 = mute(12136);
  const muteHandler = obj2.createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const onPress = muteHandler.onPress;
  const memo = react.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  const obj3 = { appearsDisabled: stateFromStores, accessibilityLabel: intl.string(mute(1113).t.B3zz0G), onPress, source: importDefault(mute ? 12140 : 12141), isActive: flag, isSmallSize, lottieComponent: memo, tintColor: RED_400 };
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  intl = mute(1113).intl;
  const tmp7 = jsx;
  if (!flag) {
    flag = mute;
  }
  RED_400 = undefined;
  if (mute) {
    RED_400 = tmp(575).unsafe_rawColors.RED_400;
  }
  return tmp7(ToggledActionButton, obj3);
}
