// Module ID: 11741
// Function ID: 11742
// Name: StageChannelCallView
// Dependencies: [19, 21, 11527, 5310, 1630, 11742, 11743, 1655, 11279, 11744, 2]
// Exports: default

// Module 11741 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef1655 from "module_1655" /* 1655 */;
import StatusBarDefault from "StatusBar" /* 11279 */;
import FocusedControls from "FocusedControls" /* 11527 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 11742 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 11743 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 11744 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function StageChannelCallBackground(arg0) {
  let channelId;
  let children;
  let items;
  let obj3;
  ({ children, channelId } = arg0);
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const obj = StageChannelAnimationUtils;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + top);
  const obj2 = { children: _false(_modDef1655.View, obj3) };
  obj3 = { style: items, children };
  items = [tmp.container, stageActionBarAnimation];
  const tmp3 = StageChannelBackgroundDefault;
  return _false(tmp3, obj2);
}
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  let items;
  channel = channel.channel;
  const obj = { children: items };
  items = [_false(StatusBarDefault, { animated: true, barStyle: "light-content" }), ];
  const obj2 = { channelId: channel.id, children: _false(StageChannelCallListDefault, { channel }) };
  items[1] = _false(StageChannelCallBackground, obj2);
  return hasOwnProperty(React3, obj);
};
