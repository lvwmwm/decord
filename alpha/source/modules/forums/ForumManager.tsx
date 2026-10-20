// Module ID: 18563
// Function ID: 18564
// Name: ForumManager
// Dependencies: [4800, 4807, 7165, 7350, 2]

// Module 18563 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 4807 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7350 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;
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
