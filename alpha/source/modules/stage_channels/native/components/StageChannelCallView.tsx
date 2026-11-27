// Module ID: 10557
// Function ID: 10558
// Name: StageChannelCallView
// Dependencies: [19, 21, 10266, 5043, 1629, 10558, 10559, 1654, 10019, 10560, 2]
// Exports: default

// Module 10557 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _modDef1654 from "module_1654" /* 1654 */;
import StatusBarDefault from "StatusBar" /* 10019 */;
import FocusedControls from "FocusedControls" /* 10266 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 10558 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 10559 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 10560 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
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
  const obj2 = { children: _false(_modDef1654.View, obj3) };
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
