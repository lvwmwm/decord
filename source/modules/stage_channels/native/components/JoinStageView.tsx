// Module ID: 9869
// Function ID: 9870
// Name: JoinStageView
// Dependencies: [19, 21, 5391, 5385, 9604, 1233, 8330, 9827, 2]
// Exports: default

// Module 9869 (JoinStageView)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import sortKey from "sortKey" /* 5385 */;
import useStageParticipants from "useStageParticipants" /* 5391 */;
import fillChunk from "fillChunk" /* 8330 */;
import stylesDefault from "styles" /* 9604 */;
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet" /* 9827 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = useStageParticipants;
  const stageParticipants = obj.useStageParticipants(channel.id, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WZOeQv);
  const tmp2 = stylesDefault;
  obj[1] = fillChunk.getParticipantNamesText(channel, found);
  obj[2] = jsx(AgeVerificationSpeakerActionSheet.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
