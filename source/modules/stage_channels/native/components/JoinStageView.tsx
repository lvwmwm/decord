// Module ID: 10823
// Function ID: 10824
// Name: JoinStageView
// Dependencies: [19, 21, 5148, 5142, 10767, 1236, 7782, 10786, 2]
// Exports: default

// Module 10823 (JoinStageView)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(5148) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(5142) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10767);
  obj[1] = require(7782) /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(require(10786) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
