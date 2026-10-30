// Module ID: 11873
// Function ID: 11874
// Name: JoinStageView
// Dependencies: [19, 21, 6759, 6753, 11815, 1114, 7938, 11835, 2]
// Exports: default

// Module 11873 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6753 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6759 */;
import StageChannelUtils from "StageChannelUtils" /* 7938 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 11815 */;
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
