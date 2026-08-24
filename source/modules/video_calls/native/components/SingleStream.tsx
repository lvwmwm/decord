// Module ID: 12639
// Function ID: 12640
// Name: SingleStream
// Dependencies: [19, 8706, 21, 12490, 12497, 8703, 2]
// Exports: default

// Module 12639 (SingleStream)
import noopAll from "noop" /* 19 */;
import StreamTextOverlayDefault from "StreamTextOverlay" /* 12490 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 8706 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ toggleFocus: c3, resetFocus: c4 } = VoiceChatDrawerState);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(12497).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = closure_1_1(closure_1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(StreamTextOverlayDefault, {
    gestureEnabled: true,
    resizeMode: channel(12497).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = closure_1_1(closure_1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};
