// Module ID: 10918
// Function ID: 84833
// Name: trackRepliedMessageClicked
// Dependencies: [6829, 653, 8696, 4324, 2]
// Exports: default

// Module 10918 (trackRepliedMessageClicked)
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("maybeCreateMessageRecordFromSnapshot").fileFinishedImporting("modules/replies/trackRepliedMessageClicked.tsx");

export default function trackRepliedMessageClicked(messageReference, state, guild_id) {
  messageReference = messageReference.messageReference;
  let message_id;
  if (null != messageReference) {
    message_id = messageReference.message_id;
  }
  let tmp2 = null;
  let tmp3 = null;
  if (state.state === ReferencedMessageState.LOADED) {
    const tmp10 = importDefault(8696)(state.message);
    const content = tmp10.content;
    let length;
    if (null != content) {
      length = content.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    tmp3 = num;
    tmp2 = tmp10.attachments.length > 0 || tmp10.embeds.length > 0 || tmp10.stickerItems.length > 0 || tmp10.stickers.length > 0;
    const tmp4 = tmp10.attachments.length > 0 || tmp10.embeds.length > 0 || tmp10.stickerItems.length > 0 || tmp10.stickers.length > 0;
  }
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = {};
  guild_id = guild_id.guild_id;
  let tmp6;
  if (null != guild_id) {
    tmp6 = guild_id;
  }
  obj.guild_id = tmp6;
  obj.channel_id = guild_id.id;
  obj.reply_message_id = messageReference.id;
  obj.replied_message_id = message_id;
  obj.replied_message_is_loaded = state.state === ReferencedMessageState.LOADED;
  obj.replied_message_has_media = tmp2;
  obj.replied_message_length = tmp3;
  obj.trackWithMetadata(AnalyticEvents.REPLIED_MESSAGE_CLICKED, obj);
};
