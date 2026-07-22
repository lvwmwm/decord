// Module ID: 6990
// Function ID: 55905
// Name: userRecordToServer
// Dependencies: []
// Exports: createBotMessage, default

// Module 6990 (userRecordToServer)
function userRecordToServer(author) {
  return { id: author.id, username: author.username, avatar: author.avatar, discriminator: author.discriminator, bot: author.bot, global_name: author.globalName, primary_guild: author.primaryGuild };
}
let closure_3 = importDefault(dependencyMap[0]);
const ReferencedMessageState = arg1(dependencyMap[0]).ReferencedMessageState;
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ MessageStates: closure_7, MessageTypes: closure_8, LOCAL_BOT_ID: closure_9, NON_USER_BOT_DISCRIMINATOR: closure_10, MessageFlags: closure_11 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/messages/createMessage.tsx");

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
  ({ flags, poll, sharedCustomTheme, changelogId, giftingPrompt, boostingPrompt, mediaMention } = tts);
  if (DEFAULT === constants2.REPLY) {
    importDefault(dependencyMap[4])(null != messageReference, "Replies must have a message reference");
    if (null == allowedMentions) {
      const messageByReference = messageByReference.getMessageByReference(messageReference);
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
  importDefault(dependencyMap[4])(null != tmp9, "createMessage: author cannot be undefined");
  const obj = {};
  if (null == nonce) {
    nonce = arg1(dependencyMap[5]).createNonce();
    const obj2 = arg1(dependencyMap[5]);
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
    messageId = arg1(dependencyMap[5]).createNonce();
    const obj2 = arg1(dependencyMap[5]);
  }
  obj.id = messageId;
  obj.type = constants2.DEFAULT;
  obj.flags = constants3.EPHEMERAL;
  obj.content = content;
  obj.channel_id = channelId;
  obj = { =: 49449728, 9: 53017344, 7: 53017344, -: 49446656, 8: 49446656, id: closure_9, discriminator: closure_10 };
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
