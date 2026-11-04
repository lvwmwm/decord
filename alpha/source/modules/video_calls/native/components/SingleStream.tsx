// Module ID: 12207
// Function ID: 12208
// Name: SingleStream
// Dependencies: [19, 11181, 21, 11954, 11962, 5893, 2]
// Exports: default

// Module 12207 (SingleStream)
import Fragment from "Fragment" /* 21 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5893 */;
import StreamTileDefault from "StreamTile" /* 11954 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 11181 */;
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
  return <tmp gestureEnabled resizeMode={channel(11962).ResizeMode.CONTAIN} onSingleTap={function onSingleTap() {
    closure_1_3();
  }} onDoubleTap={function onDoubleTap() {
    React3();
    const obj = ChannelRTCActionCreatorsDefault;
    const participant = obj.selectParticipant(channel.id, null);
  }} participant={participant} style={{ flex: 1 }} />;
};
