// Module ID: 11048
// Function ID: 11049
// Name: SingleStream
// Dependencies: [19, 10636, 21, 10719, 10727, 5649, 2]
// Exports: default

// Module 11048 (SingleStream)
import Fragment from "Fragment" /* 21 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5649 */;
import StreamTileDefault from "StreamTile" /* 10719 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 10636 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  let participant = channel.participant;
  StreamTileDefault;
  return <tmp gestureEnabled resizeMode={channel(10727).ResizeMode.CONTAIN} onSingleTap={function onSingleTap() {
    closure_1_3();
  }} onDoubleTap={function onDoubleTap() {
    React3();
    const obj = ChannelRTCActionCreatorsDefault;
    const participant = obj.selectParticipant(channel.id, null);
  }} participant={participant} style={{ flex: 1 }} />;
};
