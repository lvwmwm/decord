// Module ID: 10880
// Function ID: 10881
// Name: SingleStream
// Dependencies: [19, 9789, 21, 10655, 10665, 4538, 2]
// Exports: default

// Module 10880 (SingleStream)
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
  obj[1] = channel(10665).ResizeMode.CONTAIN;
  obj[2] = function onSingleTap() {
    callback();
  };
  obj[3] = function onDoubleTap() {
    outer1_4();
    const participant = outer1_1(outer1_2[5]).selectParticipant(channel.id, null);
  };
  obj[4] = channel.participant;
  obj[5] = { flex: 1 };
  return jsx(importDefault(10655), { gestureEnabled: true, resizeMode: null, onSingleTap: null, onDoubleTap: null, participant: null, style: null });
};
