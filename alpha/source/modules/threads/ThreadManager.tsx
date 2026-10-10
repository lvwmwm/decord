// Module ID: 18201
// Function ID: 18202
// Name: ThreadManager
// Dependencies: [502, 2065, 6807, 504, 584, 9328, 2]

// Module 18201 (ThreadManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9328 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
import size from "module_2" /* 2 */;

class ThreadManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete, MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate, GUILD_DELETE: applyArgumentsResult.handleGuildDelete };
    return applyArgumentsResult;
  }
  handleChannelDelete(channel) {
    channel = channel.channel;
    let allThreadsForParent;
    if (null != channel.guild_id) {
      let tmp = ChannelStore;
      allThreadsForParent = ChannelStore.getAllThreadsForParent(channel.id);
      if (allThreadsForParent.length > 0) {
        let tmp2 = allThreadsForParent;
        const Emitter = allThreadsForParent(504).Emitter;
        Emitter.batched(() => {
          for (const item10005 of allThreadsForParent) {
            let obj = DispatcherDefault;
            let obj2 = { type: "THREAD_DELETE", channel: item10005 };
            let dispatchResult = obj.dispatch(obj2);
            continue;
          }
        });
      }
    }
  }
  handleMessageCreate(message) {
    message = message.message;
    const channel = ChannelStore.getChannel(message.channelId);
    const author = message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    if (id === AuthenticationStore.getId()) {
      let isActiveThreadResult;
      if (channel != null) {
        isActiveThreadResult = channel.isActiveThread();
      }
      if (isActiveThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let num;
        const _Date = Date;
        if (threadMetadata != null) {
          num = threadMetadata.archiveTimestamp;
        }
        if (num == null) {
          num = 0;
        }
        const self = this;
        const self2 = this;
        const _Date1 = new _Date(num);
        const _Date2 = Date;
        const time = _Date1.getTime();
        if (Date.now() - time < 5000) {
          const obj3 = ForumActionCreatorsDefault;
          obj3.resort(channel.parent_id);
        }
      }
    }
  }
  handleGuildDelete(guild) {
    guild = guild.guild;
    let allThreadsForGuild;
    if (!guild.unavailable) {
      let tmp = ChannelStore;
      allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guild.id);
      if (0 !== allThreadsForGuild.length) {
        let tmp2 = allThreadsForGuild;
        const Emitter = allThreadsForGuild(504).Emitter;
        Emitter.batched(() => {
          for (const item10005 of allThreadsForGuild) {
            let obj = DispatcherDefault;
            let obj2 = { type: "THREAD_DELETE", channel: item10005 };
            let dispatchResult = obj.dispatch(obj2);
            continue;
          }
        });
      }
    }
  }
}
const prototype = ThreadManager.prototype;
const threadManager = new ThreadManager();
const result = size.fileFinishedImporting("modules/threads/ThreadManager.tsx");

export default threadManager;
