// Module ID: 10347
// Function ID: 10348
// Name: JoinStageView
// Dependencies: [19, 21, 6861, 6855, 10263, 1112, 7841, 10294, 2]
// Exports: default

// Module 10347 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6855 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6861 */;
import StageChannelUtils from "StageChannelUtils" /* 7841 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10263 */;
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
