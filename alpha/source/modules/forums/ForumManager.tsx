// Module ID: 18640
// Function ID: 18641
// Name: ForumManager
// Dependencies: [4821, 4828, 7193, 7378, 2]

// Module 18640 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 4828 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7378 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7193 */;
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
