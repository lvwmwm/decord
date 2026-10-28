// Module ID: 19111
// Function ID: 19112
// Name: ForumManager
// Dependencies: [4856, 4863, 7250, 7438, 2]

// Module 19111 (ForumManager)
import ChannelConstants from "ChannelConstants" /* 4863 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7438 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
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
