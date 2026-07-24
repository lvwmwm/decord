// Module ID: 10798
// Function ID: 83873
// Name: StageChannelCallBackground
// Dependencies: [31, 33, 10658, 4130, 1557, 10799, 10800, 3991, 7530, 10801, 2]
// Exports: default

// Module 10798 (StageChannelCallBackground)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function StageChannelCallBackground(arg0) {
  let channelId;
  let children;
  ({ children, channelId } = arg0);
  let obj = require(10799) /* useStageActionBarAnimation */;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, require(10658) /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT + importDefault(1557)().top);
  obj = {};
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj.children = callback(importDefault(3991).View, { style: items, children });
  return callback(importDefault(10800), obj);
}
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("FocusedControlsHeader").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = {};
  const items = [callback(importDefault(7530), { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(importDefault(10801), { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
