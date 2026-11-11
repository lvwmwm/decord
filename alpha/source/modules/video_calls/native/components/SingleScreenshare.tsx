// Module ID: 12976
// Function ID: 12977
// Name: SingleScreenshare
// Dependencies: [19, 10940, 21, 5243, 575, 5836, 12977, 6003, 2]
// Exports: default

// Module 12976 (SingleScreenshare)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10940 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = Fragment.jsx;
let obj = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
({ backgroundColor: nativeDefault.colors.BLACK });
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  let stageStreamContainer;
  channel = channel.channel;
  let participant = channel.participant;
  const tmp = closure_5();
  channel(5836)(() => {
    closure_1_2();
  });
  let obj = {
    participant,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React2();
      const obj = ChannelRTCActionCreatorsDefault;
      const participant = obj.selectParticipant(channel.id, null);
    },
    containerStyle: stageStreamContainer
  };
  stageStreamContainer = undefined;
  const tmp3 = jsx;
  const tmp4 = channel(12977);
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  return tmp3(tmp4, obj);
};
