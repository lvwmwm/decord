// Module ID: 4194
// Function ID: 36074
// Name: isStreamKey
// Dependencies: [57, 4195, 2]
// Exports: decodeStreamKey, encodeStreamKey, isStreamKey

// Module 4194 (isStreamKey)
import _slicedToArray from "_slicedToArray";
import { StreamTypes } from "StreamIssueReportReasons";

const result = require("set").fileFinishedImporting("modules/go_live/utils/StreamKeyUtils.tsx");

export const isStreamKey = function isStreamKey(c29) {
  let tmp = null != c29;
  if (tmp) {
    let startsWithResult = c29.startsWith(StreamTypes.GUILD);
    if (!startsWithResult) {
      startsWithResult = c29.startsWith(StreamTypes.CALL);
    }
    tmp = startsWithResult;
  }
  return tmp;
};
export const decodeStreamKey = function decodeStreamKey(streamKey) {
  const parts = streamKey.split(":");
  const first = parts[0];
  if (StreamTypes.GUILD === first) {
    const tmp12 = callback(parts, 4);
    let obj = { streamType: tmp12[0], guildId: tmp12[1], channelId: tmp12[2], ownerId: tmp12[3] };
    return obj;
  } else if (StreamTypes.CALL === first) {
    const tmp10 = callback(parts, 3);
    obj = { streamType: tmp10[0], channelId: tmp10[1], ownerId: tmp10[2] };
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown stream type " + first);
    throw error;
  }
};
export const encodeStreamKey = function encodeStreamKey(currentUserActiveStream) {
  let channelId;
  let ownerId;
  let streamType;
  ({ streamType, channelId, ownerId } = currentUserActiveStream);
  if (StreamTypes.GUILD === streamType) {
    const items = [streamType, tmp, channelId, ownerId];
    return items.join(":");
  } else if (StreamTypes.CALL === streamType) {
    const items1 = [streamType, channelId, ownerId];
    return items1.join(":");
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown stream type " + streamType);
    throw error;
  }
};
