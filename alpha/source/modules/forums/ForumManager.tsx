// Module ID: 18112
// Function ID: 18113
// Name: ForumManager
// Dependencies: [2065, 2072, 6808, 7004, 2]

// Module 18112 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 2072 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7004 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;
import size from "module_2" /* 2 */;

const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
class ForumManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { CHANNEL_PRELOAD: applyArgumentsResult.handleChannelPreload };
    return applyArgumentsResult;
  }
  handleChannelPreload(channelId) {
    channelId = channelId.channelId;
    if (!isStaticChannelRoute(channelId)) {
      const channel = ChannelStore.getChannel(channelId);
      const tmp3 = null != channel && channel.isForumLikeChannel();
      if (tmp3) {
        const obj2 = ForumPostDataLoader;
        obj2.preloadForumThreads(channel);
      }
    }
  }
}
const prototype = ForumManager.prototype;
const forumManager = new ForumManager();
const result = size.fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;
