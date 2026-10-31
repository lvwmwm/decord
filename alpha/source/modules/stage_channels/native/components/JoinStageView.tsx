// Module ID: 11911
// Function ID: 11912
// Name: JoinStageView
// Dependencies: [19, 21, 6765, 6759, 11853, 1113, 7946, 11873, 2]
// Exports: default

// Module 11911 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6759 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6765 */;
import StageChannelUtils from "StageChannelUtils" /* 7946 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 11853 */;
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
