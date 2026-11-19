// Module ID: 10987
// Function ID: 10988
// Name: SingleVideoCall
// Dependencies: [19, 10574, 21, 1630, 7401, 10678, 1187, 10665, 5528, 7948, 2]
// Exports: default

// Module 10987 (SingleVideoCall)
import Fragment from "Fragment" /* 21 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7948 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10574 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  let participant = channel.participant;
  const rect = bottom(right[3])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[4])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  bottom(right[5]);
  return <tmp2 gestureEnabled participant={participant} avatarSize={channel(right[6]).AvatarSizes.PROFILE} resizeMode={channel(right[7]).ResizeMode.AUTO} statusStyle={memo} onSingleTap={onSingleTap} onDoubleTap={function handleDoubleTap() {
    React3();
    const obj = ChannelRTCActionCreatorsDefault;
    const participant = obj.selectParticipant(channel.id, null);
  }} onLongPress={function onLongPress(user) {
    const obj = { userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }} />;
};
