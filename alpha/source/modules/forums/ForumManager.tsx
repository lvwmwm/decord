// Module ID: 19512
// Function ID: 19513
// Name: ForumManager
// Dependencies: [4762, 4769, 7484, 11673, 2]

// Module 19512 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 4769 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 11673 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
