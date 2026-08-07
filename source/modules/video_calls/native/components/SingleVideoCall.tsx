// Module ID: 10842
// Function ID: 10843
// Name: SingleVideoCall
// Dependencies: [19, 9673, 21, 1609, 5668, 10643, 1297, 10626, 4495, 8723, 2]
// Exports: default

// Module 10842 (SingleVideoCall)
import noop from "noop";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
({ resetFocus: c4, toggleFocus: c5 } = VoiceChatDrawerState);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  let analyticsLocations;
  const rect = bottom(right[3])();
  bottom = rect.bottom;
  right = rect.right;
  analyticsLocations = bottom(right[4])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = { gestureEnabled: true, participant: channel.participant, avatarSize: null, resizeMode: null, statusStyle: null, onSingleTap: null, onDoubleTap: null, onLongPress: null };
  obj[2] = channel(right[6]).AvatarSizes.PROFILE;
  obj[3] = channel(right[7]).ResizeMode.AUTO;
  obj[4] = memo;
  obj[5] = closure_5;
  obj[6] = function onDoubleTap() {
    outer1_4();
    const participant = bottom(right[8]).selectParticipant(channel.id, null);
  };
  obj[7] = function onLongPress(user) {
    bottom(right[9])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  };
  return jsx(bottom(right[5]), { gestureEnabled: true, participant: channel.participant, avatarSize: null, resizeMode: null, statusStyle: null, onSingleTap: null, onDoubleTap: null, onLongPress: null });
};
