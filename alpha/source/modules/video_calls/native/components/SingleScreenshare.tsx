// Module ID: 10286
// Function ID: 10287
// Name: SingleScreenshare
// Dependencies: [19, 9646, 21, 4757, 576, 5204, 10287, 4958, 2]
// Exports: default

// Module 10286 (SingleScreenshare)
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4958 */;
import noop from "module_19" /* 19 */;

const ChannelCallStore = fn(9646);
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj2 = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(5204)(() => {
    closure_1_2();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React2();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    containerStyle: null
  };
  const tmp = closure_5();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj.containerStyle = stageStreamContainer;
  return tmp3(channel(10287), obj);
};
