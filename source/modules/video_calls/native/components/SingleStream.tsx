// Module ID: 10738
// Function ID: 83453
// Name: SingleStream
// Dependencies: []
// Exports: default

// Module 10738 (SingleStream)
importAll(dependencyMap[0]);
({ toggleFocus: closure_3, resetFocus: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  const arg1 = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: arg1(dependencyMap[4]).ResizeMode.CONTAIN,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      callback3();
      const participant = callback(closure_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(importDefault(dependencyMap[3]), obj);
};
