// Module ID: 11051
// Function ID: 11052
// Name: SingleScreenshare
// Dependencies: [19, 10641, 21, 4913, 575, 5474, 11052, 5649, 2]
// Exports: default

// Module 11051 (SingleScreenshare)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5649 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10641 */;
import createStyles from "createStyles" /* 4913 */;
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
  channel(5474)(() => {
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
  const tmp4 = channel(11052);
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  return tmp3(tmp4, obj);
};
