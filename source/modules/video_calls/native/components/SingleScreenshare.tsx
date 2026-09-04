// Module ID: 9952
// Function ID: 9953
// Name: SingleScreenshare
// Dependencies: [19, 9396, 21, 4481, 709, 4953, 9953, 4729, 2]
// Exports: default

// Module 9952 (SingleScreenshare)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 9396 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

noopAll;
({ resetFocus: obj1, toggleFocus: c3 } = VoiceChatDrawerState);
createCacheKey = { stageStreamContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(4953)(() => {
    callback();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      closure_1_2();
      const participant = channel(closure_1_1[7]).selectParticipant(channel.id, null);
    },
    containerStyle: null
  };
  const tmp = callback();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj[3] = stageStreamContainer;
  return tmp3(channel(9953), obj);
};
