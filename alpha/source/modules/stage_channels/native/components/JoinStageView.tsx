// Module ID: 11607
// Function ID: 11608
// Name: JoinStageView
// Dependencies: [19, 21, 6947, 6941, 11524, 1113, 6909, 11557, 2]
// Exports: default

// Module 11607 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import StageChannelUtils from "StageChannelUtils" /* 6909 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6941 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6947 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 11524 */;
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
