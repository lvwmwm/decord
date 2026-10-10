// Module ID: 11143
// Function ID: 11144
// Name: SingleVideoCall
// Dependencies: [19, 10353, 21, 558, 576, 1631, 6851, 5106, 8303, 10905, 1200, 10894, 2]

// Module 11143 (SingleVideoCall)
import Fragment from "Fragment" /* 21 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10353 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SingleVideoCall(arg0) {
  let analyticsLocations;
  let bottom;
  let channel;
  let participant;
  let right;
  let tmp6;
  let obj = channel(576);
  const cResult = obj.c(13);
  ({ participant, channel } = arg0);
  ({ bottom, right } = analyticsLocations(1631)());
  analyticsLocations(1631)();
  const tmp4 = analyticsLocations;
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  if (cResult[0] !== channel.id) {
    function handleDoubleTap() {
      React3();
      const obj = ChannelRTCActionCreatorsDefault;
      const participant = obj.selectParticipant(channel.id, null);
    }
    cResult[0] = channel.id;
    cResult[1] = handleDoubleTap;
    tmp6 = handleDoubleTap;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    let tmp7;
    if (cResult[3] === channel.id) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === bottom) {
      let tmp8;
      if (cResult[6] === right) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === participant) {
            let tmp9;
            if (cResult[11] === tmp8) {
              tmp9 = cResult[12];
            }
            return tmp9;
          }
        }
      }
      tmp4(10905);
      const tmp13 = <tmp4Result gestureEnabled participant={participant} avatarSize={channel(1200).AvatarSizes.PROFILE} resizeMode={channel(10894).ResizeMode.AUTO} statusStyle={tmp8} onSingleTap={onSingleTap} onDoubleTap={tmp6} onLongPress={tmp7} />;
      cResult[8] = tmp6;
      cResult[9] = tmp7;
      cResult[10] = participant;
      cResult[11] = tmp8;
      cResult[12] = tmp13;
      tmp9 = tmp13;
    }
    const obj3 = { marginRight: right, marginBottom: bottom };
    cResult[5] = bottom;
    cResult[6] = right;
    cResult[7] = obj3;
    tmp8 = obj3;
  }
  function onLongPress(user) {
    const obj = { userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }
  cResult[2] = analyticsLocations;
  cResult[3] = channel.id;
  cResult[4] = onLongPress;
  tmp7 = onLongPress;
}) : (function SingleVideoCall(channel) {
  channel = channel.channel;
  let bottom;
  let right;
  let participant = channel.participant;
  const rect = bottom(right[5])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[6])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  bottom(right[9]);
  return <tmp2 gestureEnabled participant={participant} avatarSize={channel(right[10]).AvatarSizes.PROFILE} resizeMode={channel(right[11]).ResizeMode.AUTO} statusStyle={memo} onSingleTap={onSingleTap} onDoubleTap={function handleDoubleTap() {
    React3();
    const obj = ChannelRTCActionCreatorsDefault;
    const participant = obj.selectParticipant(channel.id, null);
  }} onLongPress={function onLongPress(user) {
    const obj = { userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }} />;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default tmp3;
