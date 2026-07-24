// Module ID: 10761
// Function ID: 83666
// Name: ChannelCallMicButton
// Dependencies: [31, 4144, 33, 5740, 566, 10762, 10763, 10578, 1212, 10766, 10767, 689, 2]
// Exports: ChannelCallMicButton

// Module 10761 (ChannelCallMicButton)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let channel;
  let isSmallSize;
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  let obj = mute(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => null != outer1_5.getAwaitingRemoteSessionInfo());
  const tmp = importDefault;
  const tmp2 = importDefault(5740)(channel);
  const muteHandler = mute(10762).createMuteHandler(tmp2, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = React.useMemo(() => outer1_6(mute(outer1_3[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores };
  const intl = mute(1212).intl;
  obj.accessibilityLabel = intl.string(mute(1212).t.B3zz0G);
  obj.onPress = muteHandler.onPress;
  if (mute) {
    let tmp8 = 10766;
  } else {
    tmp8 = 10767;
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
    RED_400 = importDefault(689).unsafe_rawColors.RED_400;
  }
  obj.tintColor = RED_400;
  return jsx(importAll(10578).ToggledActionButton, { appearsDisabled: stateFromStores });
};
