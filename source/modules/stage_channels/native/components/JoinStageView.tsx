// Module ID: 10860
// Function ID: 10861
// Name: JoinStageView
// Dependencies: [19, 21, 5086, 5080, 10805, 1236, 7691, 10823, 2]
// Exports: default

// Module 10860 (JoinStageView)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(5086) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(5080) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10805);
  obj[1] = require(7691) /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(require(10823) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
