// Module ID: 17286
// Function ID: 17287
// Name: handleChannelPreload
// Dependencies: [1386, 1393, 7058, 7242, 2]

// Module 17286 (handleChannelPreload)
import initializeDefault from "initialize" /* 7058 */;
import loadForumPostData from "loadForumPostData" /* 7242 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import { isStaticChannelRoute } from "set" /* 1393 */;

require = arg1;
initializeDefault;
class ForumManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { CHANNEL_PRELOAD: applyArgumentsResult.handleChannelPreload };
    return applyArgumentsResult;
  }
}
ForumManager.prototype["handleChannelPreload"] = function handleChannelPreload(channelId) {
  channelId = channelId.channelId;
  if (!isStaticChannelRoute(channelId)) {
    channel = channel.getChannel(channelId);
    if (tmp3) {
      loadForumPostData.preloadForumThreads(channel);
      const obj2 = loadForumPostData;
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const result = require("set").fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;
