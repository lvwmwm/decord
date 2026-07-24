// Module ID: 10711
// Function ID: 83438
// Name: JoinStageView
// Dependencies: [31, 33, 4963, 4957, 10656, 1212, 7564, 10674, 2]
// Exports: default

// Module 10711 (JoinStageView)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(4963) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === outer1_0(outer1_2[3]).StageChannelParticipantTypes.VOICE);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10656);
  obj.body = require(7564) /* fillChunk */.getParticipantNamesText(channel, found);
  obj.children = jsx(require(10674) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 />;
};
