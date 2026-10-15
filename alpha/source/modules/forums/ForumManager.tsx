// Module ID: 18388
// Function ID: 18389
// Name: ForumManager
// Dependencies: [2065, 2072, 7028, 7224, 2]

// Module 18388 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 2072 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7224 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
