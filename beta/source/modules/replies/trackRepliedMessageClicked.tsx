// Module ID: 11809
// Function ID: 11810
// Name: trackRepliedMessageClicked
// Dependencies: [7872, 1078, 9063, 4970, 2]
// Exports: default

// Module 11809 (trackRepliedMessageClicked)
import Constants from "Constants" /* 1078 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4970 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7872 */;
import maybeCreateMessageRecordFromSnapshotDefault from "maybeCreateMessageRecordFromSnapshot" /* 9063 */;
import size from "module_2" /* 2 */;

const ReferencedMessageState = ReferencedMessageStore.ReferencedMessageState;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/replies/trackRepliedMessageClicked.tsx");

export default function trackRepliedMessageClicked(messageReference, state, channel_id) {
  messageReference = messageReference.messageReference;
  let message_id;
  if (messageReference != null) {
    message_id = messageReference.message_id;
  }
  let tmp3 = null;
  let tmp4 = null;
  if (state.state === ReferencedMessageState.LOADED) {
    const tmp9 = maybeCreateMessageRecordFromSnapshotDefault(state.message);
    const content = tmp9.content;
    let num;
    if (content != null) {
      num = content.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp3 = num;
    tmp4 = tmp9.attachments.length > 0 || tmp9.embeds.length > 0 || tmp9.stickerItems.length > 0 || tmp9.stickers.length > 0;
    const tmp5 = tmp9.attachments.length > 0 || tmp9.embeds.length > 0 || tmp9.stickerItems.length > 0 || tmp9.stickers.length > 0;
  }
  const guild_id = channel_id.guild_id;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.REPLIED_MESSAGE_CLICKED, { guild_id, channel_id: channel_id.id, reply_message_id: messageReference.id, replied_message_id: message_id, replied_message_is_loaded: state.state === ReferencedMessageState.LOADED, replied_message_has_media: tmp4, replied_message_length: tmp3 });
};
