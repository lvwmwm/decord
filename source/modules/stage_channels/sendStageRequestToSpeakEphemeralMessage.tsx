// Module ID: 16175
// Function ID: 125463
// Name: createRequestToSpeakMessage
// Dependencies: [653, 686, 21, 2]
// Exports: sendStageRequestToSpeakEphemeralMessage

// Module 16175 (createRequestToSpeakMessage)
import ME from "ME";

let closure_2;
let closure_3;
let closure_4;
function createRequestToSpeakMessage(requestToSpeakTimestamp) {
  let channelId;
  let requesterUser;
  requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
  const obj = {};
  ({ channelId, requesterUser } = requestToSpeakTimestamp);
  obj.id = importDefault(21).fromTimestamp(Date.parse(requestToSpeakTimestamp));
  obj.type = constants3.STAGE_RAISE_HAND;
  obj.flags = constants.EPHEMERAL;
  obj.content = "";
  obj.channel_id = channelId;
  obj.author = requesterUser;
  obj.attachments = [];
  obj.embeds = [];
  obj.pinned = false;
  obj.mentions = [];
  obj.mention_channels = [];
  obj.mention_roles = [];
  obj.mention_everyone = false;
  obj.timestamp = requestToSpeakTimestamp;
  obj.state = constants2.SENT;
  obj.tts = false;
  return obj;
}
({ MessageFlags: closure_2, MessageStates: closure_3, MessageTypes: closure_4 } = ME);
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj = importDefault(686);
  obj = { type: "MESSAGE_CREATE", channelId, message: null, optimistic: false, sendMessageOptions: null, isPushNotification: false };
  obj = { channelId, requesterUser: user, requestToSpeakTimestamp };
  obj.message = createRequestToSpeakMessage(obj);
  obj.sendMessageOptions = {};
  obj.dispatch(obj);
};
