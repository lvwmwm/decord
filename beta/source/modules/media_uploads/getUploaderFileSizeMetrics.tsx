// Module ID: 8613
// Function ID: 8614
// Name: getUploaderFileSizeMetrics
// Dependencies: [2]
// Exports: getUploaderChannelId, getUploaderFileSizeMetrics

// Module 8613 (getUploaderFileSizeMetrics)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/getUploaderFileSizeMetrics.tsx");

export const getUploaderChannelId = function getUploaderChannelId(file) {
  const items = file.items;
  let channelId;
  if (items != null) {
    const first = items[0];
    if (first != null) {
      channelId = first.channelId;
    }
  }
  if (channelId == null) {
    channelId = null;
  }
  return channelId;
};
export const getUploaderFileSizeMetrics = function getUploaderFileSizeMetrics(totalPreCompressionSize) {
  const f87082 = (acc, item) => acc + item;
  let items = totalPreCompressionSize.items;
  if (items == null) {
    items = [];
  }
  const mapped = items.map((preCompressionSize) => preCompressionSize.preCompressionSize);
  const mapped1 = items.map((postCompressionSize) => {
    let preCompressionSize = postCompressionSize.postCompressionSize;
    if (preCompressionSize == null) {
      preCompressionSize = postCompressionSize.preCompressionSize;
    }
    return preCompressionSize;
  });
  const obj = { preCompressionFileSizes: mapped, postCompressionFileSizes: mapped1, preCompressionAggregateSize: totalPreCompressionSize, postCompressionAggregateSize: null, numAttachments: null };
  if (totalPreCompressionSize.totalPreCompressionSize > 0) {
    totalPreCompressionSize = totalPreCompressionSize.totalPreCompressionSize;
  } else {
    totalPreCompressionSize = mapped.reduce(f87082, 0);
  }
  if (null != totalPreCompressionSize.totalPostCompressionSize) {
    let totalPostCompressionSize;
    if (totalPreCompressionSize.totalPostCompressionSize > 0) {
      totalPostCompressionSize = totalPreCompressionSize.totalPostCompressionSize;
    }
    obj.postCompressionAggregateSize = totalPostCompressionSize;
    obj.numAttachments = totalPreCompressionSize.attachmentsCount > 0 ? totalPreCompressionSize.attachmentsCount : items.length;
    return obj;
  }
  totalPostCompressionSize = mapped1.reduce(f87082, 0);
};
