// Module ID: 19791
// Function ID: 19792
// Name: ForumManager
// Dependencies: [5019, 5026, 7373, 7562, 2]

// Module 19791 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 5026 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7562 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7373 */;
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
