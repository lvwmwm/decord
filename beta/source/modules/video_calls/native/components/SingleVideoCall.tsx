// Module ID: 10280
// Function ID: 10281
// Name: SingleVideoCall
// Dependencies: [19, 9636, 21, 558, 568, 1616, 7409, 4959, 8453, 9706, 1181, 9691, 2]

// Module 10280 (SingleVideoCall)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(9636);
({ resetFocus: closure_4, toggleFocus: hasOwnProperty } = ChannelCallStore);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channel(568).c(13);
  ({ participant, channel } = arg0);
  const obj = channel(568);
  const tmp4 = analyticsLocations;
  ({ bottom, right } = analyticsLocations(1616)());
  analyticsLocations = analyticsLocations(7409)().analyticsLocations;
  if (cResult[0] !== channel.id) {
    const fn = function n() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === channel.id) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === bottom) {
      if (cResult[6] === right) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === participant) {
            if (cResult[11] === tmp8) {
              let tmp9 = cResult[12];
            }
            return tmp9;
          }
        }
      }
      const obj2 = { gestureEnabled: true, participant, avatarSize: tmp(1181).AvatarSizes.PROFILE, resizeMode: tmp(9691).ResizeMode.AUTO, statusStyle: tmp8, onSingleTap, onDoubleTap: tmp6, onLongPress: tmp7 };
      const tmp13 = jsx(tmp4(9706), { gestureEnabled: true, participant, avatarSize: tmp(1181).AvatarSizes.PROFILE, resizeMode: tmp(9691).ResizeMode.AUTO, statusStyle: tmp8, onSingleTap, onDoubleTap: tmp6, onLongPress: tmp7 });
      cResult[8] = tmp6;
      cResult[9] = tmp7;
      cResult[10] = participant;
      cResult[11] = tmp8;
      cResult[12] = tmp13;
      tmp9 = tmp13;
      const tmp4Result = tmp4(9706);
    }
    const obj3 = { marginRight: right, marginBottom: bottom };
    cResult[5] = bottom;
    cResult[6] = right;
    cResult[7] = obj3;
    tmp8 = obj3;
  }
  const fn2 = function b(user) {
    showUserProfileActionSheetDefault({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  };
  cResult[2] = analyticsLocations;
  cResult[3] = channel.id;
  cResult[4] = fn2;
  tmp7 = fn2;
}) : ((channel) => {
  channel = channel.channel;
  let bottom;
  let right;
  const rect = bottom(right[5])();
  bottom = rect.bottom;
  right = rect.right;
  const analyticsLocations = bottom(right[6])().analyticsLocations;
  const items = [right, bottom];
  const memo = analyticsLocations.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[10]).AvatarSizes.PROFILE,
    resizeMode: channel(right[11]).ResizeMode.AUTO,
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
  return jsx(bottom(right[9]), {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: channel(right[10]).AvatarSizes.PROFILE,
    resizeMode: channel(right[11]).ResizeMode.AUTO,
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
});
