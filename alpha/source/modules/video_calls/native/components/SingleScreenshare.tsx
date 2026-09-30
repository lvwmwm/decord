// Module ID: 9684
// Function ID: 9685
// Name: SingleScreenshare
// Dependencies: [19, 9028, 21, 4866, 576, 5494, 9685, 5067, 2]
// Exports: default

// Module 9684 (SingleScreenshare)
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5067 */;
import noop from "module_19" /* 19 */;

const ChannelCallStore = fn(9028);
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = fn(21).jsx;
const createStyles = fn(4866);
const obj2 = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(5494)(() => {
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
  return tmp3(channel(9685), obj);
};
