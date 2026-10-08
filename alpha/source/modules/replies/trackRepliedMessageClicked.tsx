// Module ID: 11367
// Function ID: 11368
// Name: trackRepliedMessageClicked
// Dependencies: [7301, 1085, 8926, 5105, 2]
// Exports: default

// Module 11367 (trackRepliedMessageClicked)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7301 */;
import maybeCreateMessageRecordFromSnapshotDefault from "maybeCreateMessageRecordFromSnapshot" /* 8926 */;
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
  const tmp2 = ReferencedMessageState;
  if (state.state === ReferencedMessageState.LOADED) {
    const tmp10 = maybeCreateMessageRecordFromSnapshotDefault(state.message);
    const content = tmp10.content;
    let num;
    const tmp5 = tmp10.attachments.length > 0 || tmp10.embeds.length > 0 || tmp10.stickerItems.length > 0 || tmp10.stickers.length > 0;
    if (content != null) {
      num = content.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp3 = num;
    tmp4 = tmp5;
  }
  const guild_id = channel_id.guild_id;
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const REPLIED_MESSAGE_CLICKED = AnalyticEvents.REPLIED_MESSAGE_CLICKED;
  AppAnalyticsUtils;
  const obj = { guild_id, channel_id: channel_id.id, reply_message_id: messageReference.id, replied_message_id: message_id, replied_message_is_loaded: state.state === tmp2.LOADED, replied_message_has_media: tmp4, replied_message_length: tmp3 };
  trackWithMetadata(REPLIED_MESSAGE_CLICKED, obj);
};
