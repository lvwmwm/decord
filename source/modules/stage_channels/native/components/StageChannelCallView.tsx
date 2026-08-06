// Module ID: 10843
// Function ID: 10844
// Name: StageChannelCallBackground
// Dependencies: [19, 21, 10685, 4285, 1609, 10844, 10845, 4145, 7669, 10846, 2]
// Exports: default

// Module 10843 (StageChannelCallBackground)
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
  let obj = require(10844) /* useStageActionBarAnimation */;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, require(10685) /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT + importDefault(1609)().top);
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(importDefault(4145).View, { style: items, children });
  return callback(importDefault(10845), obj);
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("FocusedControlsHeader").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(importDefault(7669), { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(importDefault(10846), { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};
