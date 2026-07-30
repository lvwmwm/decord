// Module ID: 10829
// Function ID: 10830
// Name: StageChannelCallBackground
// Dependencies: [19, 21, 10681, 4189, 1581, 10830, 10831, 4050, 6676, 10832, 2]
// Exports: default

// Module 10829 (StageChannelCallBackground)
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
  let obj = require(10830) /* useStageActionBarAnimation */;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, require(10681) /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT + importDefault(1581)().top);
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(importDefault(4050).View, { style: items, children });
  return callback(importDefault(10831), obj);
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("FocusedControlsHeader").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(importDefault(6676), { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(importDefault(10832), { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};
