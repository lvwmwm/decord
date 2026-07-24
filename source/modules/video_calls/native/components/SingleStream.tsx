// Module ID: 10784
// Function ID: 83741
// Name: SingleStream
// Dependencies: [31, 10240, 33, 10593, 10603, 4323, 2]
// Exports: default

// Module 10784 (SingleStream)
import "result";
import resetFocusTimer from "resetFocusTimer";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ toggleFocus: closure_3, resetFocus: closure_4 } = resetFocusTimer);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(10603).ResizeMode.CONTAIN,
    onSingleTap() {
      outer1_3();
    },
    onDoubleTap() {
      outer1_4();
      const participant = outer1_1(outer1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(importDefault(10593), {
    gestureEnabled: true,
    resizeMode: channel(10603).ResizeMode.CONTAIN,
    onSingleTap() {
      outer1_3();
    },
    onDoubleTap() {
      outer1_4();
      const participant = outer1_1(outer1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};
