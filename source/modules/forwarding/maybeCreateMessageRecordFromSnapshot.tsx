// Module ID: 8647
// Function ID: 68449
// Name: maybeCreateMessageRecordFromSnapshot
// Dependencies: []
// Exports: default

// Module 8647 (maybeCreateMessageRecordFromSnapshot)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx");

export default function maybeCreateMessageRecordFromSnapshot(merge) {
  let tmp = arg1;
  if (null == arg1) {
    let first;
    if (importDefault(dependencyMap[0])(merge)) {
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
