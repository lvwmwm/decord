// Module ID: 10322
// Function ID: 10323
// Name: SingleVideoCall
// Dependencies: [19, 9672, 21, 1612, 7439, 9743, 1177, 9723, 4989, 8480, 2]
// Exports: default

// Module 10322 (SingleVideoCall)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4989 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8480 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(9672);
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  const rect = bottom(right[3])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[4])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[6]).AvatarSizes.PROFILE,
    resizeMode: channel(right[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap,
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  return jsx(bottom(right[5]), {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[6]).AvatarSizes.PROFILE,
    resizeMode: channel(right[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap,
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  });
};
