// Module ID: 10739
// Function ID: 83457
// Name: SingleVideoCall
// Dependencies: []
// Exports: default

// Module 10739 (SingleVideoCall)
let closure_3 = importAll(dependencyMap[0]);
({ resetFocus: closure_4, toggleFocus: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/video_calls/native/components/SingleVideoCall.tsx");

export default function SingleVideoCall(channel) {
  const arg1 = channel.channel;
  const rect = importDefault(dependencyMap[3])();
  const bottom = rect.bottom;
  const importDefault = bottom;
  const right = rect.right;
  const dependencyMap = right;
  const React = importDefault(dependencyMap[4])().analyticsLocations;
  const items = [right, bottom];
  const memo = React.useMemo(() => ({ marginRight: right, marginBottom: bottom }), items);
  const obj = {
    gestureEnabled: true,
    participant: channel.participant,
    avatarSize: arg1(dependencyMap[6]).AvatarSizes.PROFILE,
    resizeMode: arg1(dependencyMap[7]).ResizeMode.AUTO,
    statusStyle: memo,
    onSingleTap: closure_5,
    onDoubleTap() {
      callback();
      const participant = bottom(right[8]).selectParticipant(channel.id, null);
    },
    onLongPress(user) {
      bottom(right[9])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  return jsx(importDefault(dependencyMap[5]), obj);
};
