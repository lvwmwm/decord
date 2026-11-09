// Module ID: 19873
// Function ID: 19874
// Name: ForumManager
// Dependencies: [4989, 4996, 7350, 7539, 2]

// Module 19873 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 4996 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7539 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;
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
