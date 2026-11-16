// Module ID: 12110
// Function ID: 12111
// Name: JoinStageView
// Dependencies: [19, 21, 6853, 6847, 12049, 1113, 8048, 12068, 2]
// Exports: default

// Module 12110 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6847 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6853 */;
import StageChannelUtils from "StageChannelUtils" /* 8048 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 12049 */;
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
