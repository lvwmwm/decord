// Module ID: 10206
// Function ID: 10207
// Name: JoinStageView
// Dependencies: [19, 21, 6735, 6729, 10122, 1112, 7708, 10153, 2]
// Exports: default

// Module 10206 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6729 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6735 */;
import StageChannelUtils from "StageChannelUtils" /* 7708 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10122 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  const obj = StageChannelParticipantStoreHooks;
  const stageParticipants = obj.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  StageViewWithPromptsDefault;
  const intl = intl2.intl;
  const obj3 = StageChannelUtils;
  return <tmp2 title={intl.string(intl2.t.WZOeQv)} body={obj3.getParticipantNamesText(channel, found)}>{null}</tmp2>;
};
