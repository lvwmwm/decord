// Module ID: 17824
// Function ID: 17825
// Name: ForumManager
// Dependencies: [2063, 2070, 6797, 6990, 2]

// Module 17824 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 2070 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 6990 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
