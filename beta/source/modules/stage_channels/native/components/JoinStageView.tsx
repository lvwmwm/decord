// Module ID: 9397
// Function ID: 9398
// Name: JoinStageView
// Dependencies: [19, 21, 5743, 5737, 8956, 1115, 7848, 9353, 2]
// Exports: default

// Module 9397 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5743 */;
import StageChannelUtils from "StageChannelUtils" /* 7848 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 8956 */;
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
