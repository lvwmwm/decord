// Module ID: 10676
// Function ID: 83130
// Name: JoinStageView
// Dependencies: [31, 33, 4964, 4958, 10621, 1212, 6660, 10639, 2]
// Exports: default

// Module 10676 (JoinStageView)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(4964) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(4958) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === outer1_0(outer1_2[3]).StageChannelParticipantTypes.VOICE);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10621);
  obj.body = require(6660) /* fillChunk */.getParticipantNamesText(channel, found);
  obj.children = jsx(require(10639) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 />;
};
