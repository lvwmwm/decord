// Module ID: 10800
// Function ID: 83845
// Dependencies: [31, 27, 33, 4130, 5084, 10761, 10757, 2]

// Module 10800
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
  const tmp2 = importDefault(10761)(channel.id);
  let speaker;
  if (null != tmp2) {
    speaker = tmp2.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none" };
  const items = [callback(require(10757) /* closeStageModal */.HideStageChannelCallIcon, { channel }), callback(require(10757) /* closeStageModal */.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = callback(require(10757) /* closeStageModal */.MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(require(10757) /* closeStageModal */.StageInviteButton, obj);
  obj.children = items;
  return closure_5(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
