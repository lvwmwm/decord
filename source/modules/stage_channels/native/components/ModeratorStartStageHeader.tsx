// Module ID: 10860
// Function ID: 10861
// Dependencies: [19, 17, 21, 4189, 5140, 10821, 10817, 2]

// Module 10860
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { header: null };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo((channel) => {
  channel = channel.channel;
  const tmp3 = importDefault(10821)(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none", children: null };
  const items = [callback(require(10817) /* HideStageChannelCallIcon */.HideStageChannelCallIcon, { channel }), callback(require(10817) /* HideStageChannelCallIcon */.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    obj = { channelId: null };
    obj[0] = channel.id;
    speaker = tmp7(tmp8(10817).MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(require(10817) /* HideStageChannelCallIcon */.StageInviteButton, obj);
  obj[2] = items;
  return closure_5(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
