// Module ID: 10757
// Function ID: 83488
// Name: SingleStream
// Dependencies: [31, 10174, 33, 10482, 10492, 4324, 2]
// Exports: default

// Module 10757 (SingleStream)
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
    resizeMode: channel(10492).ResizeMode.CONTAIN,
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
  return jsx(importDefault(10482), {
    gestureEnabled: true,
    resizeMode: channel(10492).ResizeMode.CONTAIN,
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
