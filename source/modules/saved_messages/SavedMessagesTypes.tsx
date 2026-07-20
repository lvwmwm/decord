// Module ID: 9520
// Function ID: 74187
// Name: savedMessageDataToClient
// Dependencies: []
// Exports: savedMessageCreateObjectToClient, savedMessageDeleteObjectToClient

// Module 9520 (savedMessageDataToClient)
function savedMessageDataToClient(save_data) {
  const obj = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: new Date(save_data.saved_at) };
  ({ author_summary: obj.authorSummary, channel_summary: obj.channelSummary, message_summary: obj.messageSummary } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj.guildId = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj.authorId = author_id;
  obj.notes = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj.dueAt = date1;
  return obj;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/saved_messages/SavedMessagesTypes.tsx");

export const SavedMessageSortTypes = { ALL: "ALL", REMINDER: "REMINDER", BOOKMARK: "BOOKMARK" };
export { savedMessageDataToClient };
export const savedMessageCreateObjectToClient = function savedMessageCreateObjectToClient(body) {
  const obj = {};
  let messageRecord = null;
  if (null != body.message) {
    messageRecord = require(dependencyMap[0]).createMessageRecord(body.message);
    const obj2 = require(dependencyMap[0]);
  }
  obj.message = messageRecord;
  obj.saveData = savedMessageDataToClient(body.save_data);
  return obj;
};
export const savedMessageDeleteObjectToClient = function savedMessageDeleteObjectToClient(channelId) {
  return { channelId: channelId.channel_id, messageId: channelId.message_id };
};
