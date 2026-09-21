// Module ID: 10280
// Function ID: 10281
// Name: SingleScreenshare
// Dependencies: [19, 9640, 21, 4756, 576, 5203, 10281, 4957, 2]
// Exports: default

// Module 10280 (SingleScreenshare)
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import noop from "module_19" /* 19 */;

const ChannelCallStore = fn(9640);
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj2 = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(5203)(() => {
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
  return tmp3(channel(10281), obj);
};
