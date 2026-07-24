// Module ID: 6994
// Function ID: 55948
// Name: userRecordToServer
// Dependencies: [6829, 1857, 1849, 653, 44, 6995, 2]
// Exports: createBotMessage, default

// Module 6994 (userRecordToServer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function userRecordToServer(author) {
  return { id: author.id, username: author.username, avatar: author.avatar, discriminator: author.discriminator, bot: author.bot, global_name: author.globalName, primary_guild: author.primaryGuild };
}
({ MessageStates: closure_7, MessageTypes: closure_8, LOCAL_BOT_ID: closure_9, NON_USER_BOT_DISCRIMINATOR: closure_10, MessageFlags: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/createMessage.tsx");

export default function createMessage(tts) {
  let allowedMentions;
  let author;
  let boostingPrompt;
  let changelogId;
  let channelId;
  let content;
  let flags;
  let giftingPrompt;
  let mediaMention;
  let mentionGames;
  let messageReference;
  let nonce;
  let poll;
  let sharedCustomTheme;
  let state;
  let flag = tts.tts;
  ({ channelId, content } = tts);
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT = tts.type;
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  ({ messageReference, allowedMentions, author, nonce, state } = tts);
  const items = [];
  ({ flags, poll, sharedCustomTheme, changelogId, giftingPrompt, boostingPrompt, mediaMention, mentionGames } = tts);
  if (DEFAULT === constants2.REPLY) {
    importDefault(44)(null != messageReference, "Replies must have a message reference");
    if (null == allowedMentions) {
      messageByReference = messageByReference.getMessageByReference(messageReference);
      state = undefined;
      if (null != messageByReference) {
        state = messageByReference.state;
      }
      if (state === ReferencedMessageState.LOADED) {
        items.push(userRecordToServer(messageByReference.message.author));
      }
    }
  }
  if (null == author) {
    author = currentUser.getCurrentUser();
  }
  let tmp9 = author;
  if (author instanceof closure_5) {
    tmp9 = userRecordToServer(author);
  }
  importDefault(44)(null != tmp9, "createMessage: author cannot be undefined");
  const obj = {};
  if (null == nonce) {
    nonce = require(6995) /* snowflakeSequence */.createNonce();
    const obj2 = require(6995) /* snowflakeSequence */;
  }
  obj.id = nonce;
  obj.type = DEFAULT;
  obj.content = content;
  obj.channel_id = channelId;
  obj.author = tmp9;
  obj.attachments = [];
  obj.embeds = [];
  obj.pinned = false;
  obj.mentions = items;
  obj.mention_channels = [];
  obj.mention_roles = [];
  obj.mention_everyone = false;
  obj.mention_games = mentionGames;
  obj.timestamp = new Date().toISOString();
  if (null == state) {
    state = constants.SENDING;
  }
  obj.state = state;
  obj.tts = flag;
  obj.message_reference = messageReference;
  obj.message_snapshots = [];
  obj.flags = flags;
  obj.nonce = nonce;
  obj.poll = poll;
  obj.shared_client_theme = sharedCustomTheme;
  obj.changelog_id = changelogId;
  obj.gifting_prompt = giftingPrompt;
  obj.boosting_prompt = boostingPrompt;
  obj.media_mention = mediaMention;
  return obj;
};
export { userRecordToServer };
export const createBotMessage = function createBotMessage(arg0) {
  let channelId;
  let content;
  let embeds;
  let loggingName;
  let messageId;
  ({ messageId, embeds } = arg0);
  let obj = {};
  ({ channelId, content, loggingName } = arg0);
  if (null == messageId) {
    messageId = require(6995) /* snowflakeSequence */.createNonce();
    const obj2 = require(6995) /* snowflakeSequence */;
  }
  obj.id = messageId;
  obj.type = constants2.DEFAULT;
  obj.flags = constants3.EPHEMERAL;
  obj.content = content;
  obj.channel_id = channelId;
  obj = { id: closure_9, username: "Clyde", discriminator: closure_10, avatar: "clyde", bot: true };
  obj.author = obj;
  obj.attachments = [];
  if (null == embeds) {
    embeds = [];
  }
  obj.embeds = embeds;
  obj.pinned = false;
  obj.mentions = [];
  obj.mention_channels = [];
  obj.mention_roles = [];
  obj.mention_everyone = false;
  obj.timestamp = new Date().toISOString();
  obj.state = constants.SENT;
  obj.tts = false;
  obj.loggingName = loggingName;
  return obj;
};
