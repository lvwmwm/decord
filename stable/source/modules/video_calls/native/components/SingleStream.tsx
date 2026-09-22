// Module ID: 10154
// Function ID: 10155
// Name: SingleStream
// Dependencies: [19, 9597, 21, 9724, 9734, 4837, 2]
// Exports: default

// Module 10154 (SingleStream)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4837 */;
import StreamTileDefault from "StreamTile" /* 9724 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(9597);
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(9734).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(StreamTileDefault, {
    gestureEnabled: true,
    resizeMode: channel(9734).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};
