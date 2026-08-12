// Module ID: 10980
// Function ID: 10981
// Name: StageChannelCallBackground
// Dependencies: [19, 21, 10822, 4344, 1628, 10981, 10982, 4083, 7789, 10983, 2]
// Exports: default

// Module 10980 (StageChannelCallBackground)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
const require = arg1;
function StageChannelCallBackground(arg0) {
  let channelId;
  let children;
  ({ children, channelId } = arg0);
  let obj = require(10981) /* useStageActionBarAnimation */;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, require(10822) /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT + importDefault(1628)().top);
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(importDefault(4083).View, { style: items, children });
  return callback(importDefault(10982), obj);
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("FocusedControlsHeader").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(importDefault(7789), { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(importDefault(10983), { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};
