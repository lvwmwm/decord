// Module ID: 8655
// Function ID: 68512
// Name: maybeCreateMessageRecordFromSnapshot
// Dependencies: [5679, 2]
// Exports: default

// Module 8655 (maybeCreateMessageRecordFromSnapshot)
const result = require("set").fileFinishedImporting("modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx");

export default function maybeCreateMessageRecordFromSnapshot(merge) {
  let tmp = arg1;
  if (null == arg1) {
    let first;
    if (importDefault(5679)(merge)) {
      first = merge.messageSnapshots[0];
    }
    tmp = first;
  }
  let mergeResult = merge;
  if (null != tmp) {
    const obj = { content: tmp.message.content, attachments: tmp.message.attachments, embeds: tmp.message.embeds, flags: tmp.message.flags, components: tmp.message.components, editedTimestamp: null, timestamp: tmp.message.timestamp, codedLinks: tmp.message.codedLinks, reactions: [], messageSnapshots: [], stickers: tmp.message.stickers, stickerItems: tmp.message.stickerItems, customRenderedContent: null };
    mergeResult = merge.merge(obj);
  }
  return mergeResult;
};
