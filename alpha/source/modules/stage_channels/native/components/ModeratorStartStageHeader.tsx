// Module ID: 11054
// Function ID: 11055
// Name: ModeratorStartStageHeader
// Dependencies: [19, 21, 11017, 11010, 2]

// Module 11054 (ModeratorStartStageHeader)
import StageActionHeader from "StageActionHeader" /* 11010 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 11017 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const memoResult = react.memo(function ModeratorStartStageHeader(channel) {
  let items;
  channel = channel.channel;
  const tmp2 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp2 != null) {
    speaker = tmp2.speaker;
  }
  const obj = { channel, isStarting: true, children: items };
  const StageChannelCallHeader = StageActionHeader.StageChannelCallHeader;
  const tmp4 = React3;
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = _false(tmp5(11010).MusicMuteButton, obj2);
  }
  items = [speaker, ];
  const obj3 = { channelId: channel.id };
  items[1] = _false(StageActionHeader.StageInviteButton, obj3);
  return tmp4(StageChannelCallHeader, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
