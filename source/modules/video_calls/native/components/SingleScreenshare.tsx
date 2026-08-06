// Module ID: 10827
// Function ID: 10828
// Name: SingleScreenshare
// Dependencies: [19, 9657, 21, 4285, 712, 4711, 10828, 4478, 2]
// Exports: default

// Module 10827 (SingleScreenshare)
import "noop";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
({ resetFocus: obj1, toggleFocus: c3 } = VoiceChatDrawerState);
createCacheKey = { stageStreamContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BLACK };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(4711)(() => {
    callback();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      outer1_2();
      const participant = channel(outer1_1[7]).selectParticipant(channel.id, null);
    },
    containerStyle: null
  };
  const tmp = createCacheKey();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj[3] = stageStreamContainer;
  return tmp3(channel(10828), obj);
};
