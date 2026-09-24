// Module ID: 17785
// Function ID: 17786
// Name: ForumManager
// Dependencies: [2045, 2052, 7397, 7580, 2]

// Module 17785 (ForumManager)
import ForumPostDataLoader from "ForumPostDataLoader" /* 7580 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
const isStaticChannelRoute = fn(2052).isStaticChannelRoute;
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
    const channel = ChannelStore.getChannel(channelId);
    if (tmp3) {
      ForumPostDataLoader.preloadForumThreads(channel);
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;
