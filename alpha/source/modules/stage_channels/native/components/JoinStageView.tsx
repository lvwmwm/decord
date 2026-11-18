// Module ID: 10889
// Function ID: 10890
// Name: JoinStageView
// Dependencies: [19, 21, 6451, 6445, 10806, 1113, 6413, 10839, 2]
// Exports: default

// Module 10889 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelUtils from "StageChannelUtils" /* 6413 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6445 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6451 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10806 */;
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
