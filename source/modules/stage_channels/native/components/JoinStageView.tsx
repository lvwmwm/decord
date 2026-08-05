// Module ID: 10684
// Function ID: 10685
// Name: JoinStageView
// Dependencies: [19, 21, 5100, 5094, 10628, 1236, 7675, 10647, 2]
// Exports: default

// Module 10684 (JoinStageView)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require(5100) /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require(5094) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WZOeQv);
  const tmp2 = importDefault(10628);
  obj[1] = require(7675) /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(require(10647) /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
