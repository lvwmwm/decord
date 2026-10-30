// Module ID: 12016
// Function ID: 12017
// Name: ModeratorStartStageHeader
// Dependencies: [19, 17, 21, 5009, 5581, 11977, 11973, 2]

// Module 12016 (ModeratorStartStageHeader)
import react_native from "react-native" /* 17 */;
import NavigatorConstants from "NavigatorConstants" /* 5581 */;
import StageActionHeader from "StageActionHeader" /* 11973 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 11977 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function ModeratorStartStageHeader(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_6();
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: tmp.header, pointerEvents: "box-none", children: items };
  items = [React3(StageActionHeader.HideStageChannelCallIcon, { channel }), React3(StageActionHeader.StageChannelCallHeader, { channel }), , ];
  const tmp5 = hasOwnProperty;
  const tmp6 = View;
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = tmp7(tmp8(11973).MusicMuteButton, obj2);
  }
  items[2] = speaker;
  const obj3 = { channelId: channel.id };
  items[3] = React3(StageActionHeader.StageInviteButton, obj3);
  return tmp5(tmp6, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
