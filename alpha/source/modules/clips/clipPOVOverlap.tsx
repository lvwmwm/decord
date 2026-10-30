// Module ID: 15835
// Function ID: 15836
// Name: clipPOVOverlap
// Dependencies: [8206, 1072, 1397, 15836, 2]
// Exports: getClipAttachmentPOVWindow, getClipPOVOverlapMilliseconds, getClipPOVWindow

// Module 15835 (clipPOVOverlap)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1397 */;
import ClipsConstants from "ClipsConstants" /* 8206 */;
import getPOVExportTargetDefault from "getPOVExportTarget" /* 15836 */;
import size from "module_2" /* 2 */;

const ClipType = ClipsConstants.ClipType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const result = size.fileFinishedImporting("modules/clips/clipPOVOverlap.tsx");

export function getClipPOVWindow(type) {
  if (type.type === ClipType.CLIP) {
    if (null != type.applicationId) {
      if (null != type.syncTimestamp) {
        return { applicationId: type.applicationId, startTimestamp: type.syncTimestamp - type.length, endTimestamp: type.syncTimestamp };
      }
    }
  }
}
export function getClipAttachmentPOVWindow(nextResult) {
  let num = nextResult.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  const application = nextResult.application;
  let id;
  const hasFlagResult = hasFlag(num, MessageAttachmentFlags.IS_CLIP);
  if (application != null) {
    id = application.id;
  }
  const tmp5 = getPOVExportTargetDefault(nextResult);
  if (null != id) {
    if (null != tmp5) {
      if (hasFlagResult) {
        return { applicationId: id, startTimestamp: tmp5.syncTimestamp - 1000 * tmp5.duration, endTimestamp: tmp5.syncTimestamp };
      }
    }
  }
}
export function getClipPOVOverlapMilliseconds(applicationId, nextResult1) {
  if (applicationId.applicationId === nextResult1.applicationId) {
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(applicationId.endTimestamp, nextResult1.endTimestamp);
    const diff = bound - Math.max(applicationId.startTimestamp, nextResult1.startTimestamp);
    let tmp4;
    if (diff > 5000) {
      tmp4 = diff;
    }
    return tmp4;
  }
}
