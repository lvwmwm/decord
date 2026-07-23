// Module ID: 7631
// Function ID: 61148
// Name: isFirstMessageInMediaPost
// Dependencies: [1348, 624, 21, 2]
// Exports: useIsFirstMessageInMediaPost

// Module 7631 (isFirstMessageInMediaPost)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function isFirstMessageInMediaPost(id) {
  let tmp = null != id;
  if (tmp) {
    tmp = isFirstMessageIdInMediaPost(id.id, id.channel_id);
  }
  return tmp;
}
function isFirstMessageIdInMediaPost(id, channel_id) {
  if (id !== obj.castChannelIdAsMessageId(channel_id)) {
    return false;
  } else {
    const channel = store.getChannel(channel_id);
    if (null != channel) {
      if (channel.isForumPost()) {
        const channel1 = store.getChannel(channel.parent_id);
        let isMediaChannelResult;
        if (null != channel1) {
          isMediaChannelResult = channel1.isMediaChannel();
        }
        return true === isMediaChannelResult;
      }
    }
    return false;
  }
  obj = importDefault(21);
}
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  const _require = arg0;
  const items = [arg0];
  return _require(624).useStateFromStores([], () => outer1_4(closure_0), items);
};
export { isFirstMessageInMediaPost };
export { isFirstMessageIdInMediaPost };
