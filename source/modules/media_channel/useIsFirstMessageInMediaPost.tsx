// Module ID: 7624
// Function ID: 61089
// Name: isFirstMessageInMediaPost
// Dependencies: []
// Exports: useIsFirstMessageInMediaPost

// Module 7624 (isFirstMessageInMediaPost)
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
  const obj = importDefault(dependencyMap[2]);
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return arg1(dependencyMap[1]).useStateFromStores([], () => callback(arg0), items);
};
export { isFirstMessageInMediaPost };
export { isFirstMessageIdInMediaPost };
