// Module ID: 12087
// Function ID: 12088
// Name: JoinStageView
// Dependencies: [19, 21, 6823, 6817, 12026, 1113, 8019, 12045, 2]
// Exports: default

// Module 12087 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6817 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6823 */;
import StageChannelUtils from "StageChannelUtils" /* 8019 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 12026 */;
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
