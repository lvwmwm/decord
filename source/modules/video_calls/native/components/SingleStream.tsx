// Module ID: 10913
// Function ID: 10914
// Name: SingleStream
// Dependencies: [19, 9744, 21, 10688, 10698, 4497, 2]
// Exports: default

// Module 10913 (SingleStream)
import "noop";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import { jsx } from "jsxProd";

let c3;
let c4;
const require = arg1;
({ toggleFocus: c3, resetFocus: c4 } = VoiceChatDrawerState);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = { gestureEnabled: true, resizeMode: null, onSingleTap: null, onDoubleTap: null, participant: null, style: null };
  obj[1] = channel(10698).ResizeMode.CONTAIN;
  obj[2] = function onSingleTap() {
    callback();
  };
  obj[3] = function onDoubleTap() {
    outer1_4();
    const participant = outer1_1(outer1_2[5]).selectParticipant(channel.id, null);
  };
  obj[4] = channel.participant;
  obj[5] = { flex: 1 };
  return jsx(importDefault(10688), { gestureEnabled: true, resizeMode: null, onSingleTap: null, onDoubleTap: null, participant: null, style: null });
};
