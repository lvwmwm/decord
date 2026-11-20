// Module ID: 10809
// Function ID: 10810
// Name: JoinStageView
// Dependencies: [19, 21, 6424, 6418, 10726, 1112, 6386, 10759, 2]
// Exports: default

// Module 10809 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import StageChannelUtils from "StageChannelUtils" /* 6386 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6418 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6424 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10726 */;
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
