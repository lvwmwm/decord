// Module ID: 12228
// Function ID: 12229
// Name: StageChannelCallView
// Dependencies: [19, 21, 12062, 5143, 1627, 12229, 12230, 1652, 11408, 12231, 2]
// Exports: default

// Module 12228 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import StatusBarDefault from "StatusBar" /* 11408 */;
import FocusedControls from "FocusedControls" /* 12062 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 12229 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 12230 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 12231 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
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
  const obj2 = { children: _false(_modDef1652.View, obj3) };
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
