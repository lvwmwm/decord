// Module ID: 12884
// Function ID: 12885
// Name: JoinStageView
// Dependencies: [19, 21, 6886, 6880, 12820, 1113, 6848, 12844, 2]
// Exports: default

// Module 12884 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelUtils from "StageChannelUtils" /* 6848 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6880 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6886 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 12820 */;
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
