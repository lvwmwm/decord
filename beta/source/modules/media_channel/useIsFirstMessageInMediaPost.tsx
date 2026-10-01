// Module ID: 7385
// Function ID: 7386
// Name: useIsFirstMessageInMediaPost
// Dependencies: [2045, 563, 11, 2]
// Exports: isFirstMessageIdInMediaPost, isFirstMessageInMediaPost, useIsFirstMessageInMediaPost

// Module 7385 (useIsFirstMessageInMediaPost)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [arg0];
  return obj.useStateFromStores([], () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const channel_id = tmp.channel_id;
      const id = tmp.id;
      let flag = false;
      const obj = SnowflakeUtilsDefault;
      if (id === obj.castChannelIdAsMessageId(channel_id)) {
        const channel = ChannelStore.getChannel(channel_id);
        flag = false;
        const obj2 = ChannelStore;
        if (null != channel) {
          flag = false;
          if (channel.isForumPost()) {
            const channel1 = obj2.getChannel(channel.parent_id);
            let isMediaChannelResult;
            if (channel1 != null) {
              isMediaChannelResult = channel1.isMediaChannel();
            }
            flag = true === isMediaChannelResult;
          }
        }
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items);
};
export const isFirstMessageInMediaPost = function isFirstMessageInMediaPost(channel_id) {
  let tmp = null != channel_id;
  if (tmp) {
    channel_id = channel_id.channel_id;
    const id = channel_id.id;
    let flag = false;
    const obj = SnowflakeUtilsDefault;
    if (id === obj.castChannelIdAsMessageId(channel_id)) {
      const channel = ChannelStore.getChannel(channel_id);
      flag = false;
      const obj2 = ChannelStore;
      if (null != channel) {
        flag = false;
        if (channel.isForumPost()) {
          const channel1 = obj2.getChannel(channel.parent_id);
          let isMediaChannelResult;
          if (channel1 != null) {
            isMediaChannelResult = channel1.isMediaChannel();
          }
          flag = true === isMediaChannelResult;
        }
      }
    }
    tmp = flag;
  }
  return tmp;
};
export const isFirstMessageIdInMediaPost = function isFirstMessageIdInMediaPost(id, channel_id) {
  const obj = SnowflakeUtilsDefault;
  if (id !== obj.castChannelIdAsMessageId(channel_id)) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(channel_id);
    const obj2 = ChannelStore;
    if (null != channel) {
      if (channel.isForumPost()) {
        const channel1 = obj2.getChannel(channel.parent_id);
        let isMediaChannelResult;
        if (channel1 != null) {
          isMediaChannelResult = channel1.isMediaChannel();
        }
        return true === isMediaChannelResult;
      }
    }
    return false;
  }
};
