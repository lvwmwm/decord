// Module ID: 10801
// Function ID: 83779
// Dependencies: [31, 27, 33, 4131, 5084, 10762, 10758, 2]

// Module 10801
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
obj.header = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((channel) => {
  channel = channel.channel;
  const tmp2 = importDefault(10762)(channel.id);
  let speaker;
  if (null != tmp2) {
    speaker = tmp2.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none" };
  const items = [callback(require(10758) /* closeStageModal */.HideStageChannelCallIcon, { channel }), callback(require(10758) /* closeStageModal */.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = callback(require(10758) /* closeStageModal */.MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(require(10758) /* closeStageModal */.StageInviteButton, obj);
  obj.children = items;
  return closure_5(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
