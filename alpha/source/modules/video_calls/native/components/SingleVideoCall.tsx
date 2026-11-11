// Module ID: 12979
// Function ID: 12980
// Name: SingleVideoCall
// Dependencies: [19, 10940, 21, 1627, 7852, 12718, 1187, 12705, 6003, 8410, 2]
// Exports: default

// Module 12979 (SingleVideoCall)
import Fragment from "Fragment" /* 21 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8410 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10940 */;
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
