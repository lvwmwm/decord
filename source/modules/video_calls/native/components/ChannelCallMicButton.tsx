// Module ID: 10796
// Function ID: 10797
// Name: ChannelCallMicButton
// Dependencies: [19, 4203, 21, 10777, 589, 10797, 10798, 10528, 1236, 10801, 10802, 712, 2]
// Exports: ChannelCallMicButton

// Module 10796 (ChannelCallMicButton)
import noop from "noop";
import set from "set";
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
  let obj = mute(589);
  const items = [set];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp3 = importDefault(10777)(channel);
  const muteHandler = mute(10797).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = React.useMemo(() => outer1_6(mute(outer1_3[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1236).intl;
  obj[1] = intl.string(mute(1236).t.B3zz0G);
  obj[2] = muteHandler.onPress;
  obj[3] = importDefault(mute ? 10801 : 10802);
  if (!flag) {
    flag = mute;
  }
  obj[4] = flag;
  obj[5] = isSmallSize;
  obj[6] = memo;
  let RED_400;
  if (mute) {
    RED_400 = tmp(712).unsafe_rawColors.RED_400;
  }
  obj[7] = RED_400;
  return jsx(importAll(10528).ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
};
