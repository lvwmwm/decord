// Module ID: 12537
// Function ID: 12538
// Name: JoinStageView
// Dependencies: [19, 21, 6708, 6703, 12491, 1236, 8063, 12505, 2]
// Exports: default

// Module 12537 (JoinStageView)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(6708) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(6703) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(12491);
  obj[1] = require(8063) /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(require(12505) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
