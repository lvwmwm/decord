// Module ID: 16050
// Function ID: 123248
// Name: createRequestToSpeakMessage
// Dependencies: []
// Exports: sendStageRequestToSpeakEphemeralMessage

// Module 16050 (createRequestToSpeakMessage)
function createRequestToSpeakMessage(requestToSpeakTimestamp) {
  let channelId;
  let requesterUser;
  requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
  const obj = {};
  ({ channelId, requesterUser } = requestToSpeakTimestamp);
  obj.id = importDefault(dependencyMap[2]).fromTimestamp(Date.parse(requestToSpeakTimestamp));
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
const _module = require(dependencyMap[0]);
({ MessageFlags: closure_2, MessageStates: closure_3, MessageTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj = importDefault(dependencyMap[1]);
  obj = { channelId, message: createRequestToSpeakMessage(obj), sendMessageOptions: {} };
  obj = { channelId, requesterUser: user, requestToSpeakTimestamp };
  obj.dispatch(obj);
};
