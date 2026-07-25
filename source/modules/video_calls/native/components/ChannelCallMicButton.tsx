// Module ID: 10733
// Function ID: 83408
// Name: ChannelCallMicButton
// Dependencies: [31, 4145, 33, 10714, 566, 10734, 10735, 10465, 1212, 10738, 10739, 689, 2]
// Exports: ChannelCallMicButton

// Module 10733 (ChannelCallMicButton)
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
  const tmp2 = importDefault(10714)(channel);
  const muteHandler = mute(10734).createMuteHandler(tmp2, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = React.useMemo(() => outer1_6(mute(outer1_3[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores };
  const intl = mute(1212).intl;
  obj.accessibilityLabel = intl.string(mute(1212).t.B3zz0G);
  obj.onPress = muteHandler.onPress;
  if (mute) {
    let tmp8 = 10738;
  } else {
    tmp8 = 10739;
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
  return jsx(importAll(10465).ToggledActionButton, { appearsDisabled: stateFromStores });
};
