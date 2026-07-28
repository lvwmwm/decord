// Module ID: 10714
// Function ID: 83251
// Name: JoinStageView
// Dependencies: [31, 33, 4998, 4992, 10659, 1212, 6696, 10677, 2]
// Exports: default

// Module 10714 (JoinStageView)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(4998) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(4992) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === outer1_0(outer1_2[3]).StageChannelParticipantTypes.VOICE);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10659);
  obj.body = require(6696) /* fillChunk */.getParticipantNamesText(channel, found);
  obj.children = jsx(require(10677) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 />;
};
