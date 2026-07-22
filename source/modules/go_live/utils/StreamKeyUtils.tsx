// Module ID: 4190
// Function ID: 36042
// Name: isStreamKey
// Dependencies: []
// Exports: decodeStreamKey, encodeStreamKey, isStreamKey

// Module 4190 (isStreamKey)
let closure_0 = importDefault(dependencyMap[0]);
const StreamTypes = arg1(dependencyMap[1]).StreamTypes;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/go_live/utils/StreamKeyUtils.tsx");

export const isStreamKey = function isStreamKey(closure_29) {
  let tmp = null != closure_29;
  if (tmp) {
    let startsWithResult = closure_29.startsWith(StreamTypes.GUILD);
    if (!startsWithResult) {
      startsWithResult = closure_29.startsWith(StreamTypes.CALL);
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
