// Module ID: 15919
// Function ID: 122004
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15919 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
const GuildMemberFlags = arg1(dependencyMap[15]).GuildMemberFlags;
let tmp2 = (arg0) => {
  class GuildOnboardingHomeManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_6(this, GuildOnboardingHomeManager);
      items1 = [...items];
      obj = closure_8(GuildOnboardingHomeManager);
      tmp2 = closure_7;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildOnboardingHomeManager = tmp2Result;
      set = new Set();
      tmp2Result.onboardingCompleteGuilds = set;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        GUILD_MEMBER_UPDATE(arg0) {
              return tmp2Result.handleGuildMemberUpdate(arg0);
            },
        GUILD_DELETE(arg0) {
              return tmp2Result.handleGuildDelete(arg0);
            },
        CHANNEL_SELECT(arg0) {
              return tmp2Result.handleChannelSelect(arg0);
            },
        MESSAGE_CREATE(arg0) {
              return tmp2Result.handleMessageSend(arg0);
            },
        THREAD_CREATE(arg0) {
              return tmp2Result.handleThreadCreate(arg0);
            }
      };
      tmp2Result.handlePostConnectionOpen = () => {
        const guilds = guilds.getGuilds();
        for (const key10008 in guilds) {
          let tmp9 = key10008;
          let tmp10 = closure_13;
          let selfMember = closure_13.getSelfMember(key10008);
          let tmp12 = closure_0;
          let tmp13 = closure_2;
          let obj = closure_0(closure_2[16]);
          let flags;
          if (null != selfMember) {
            flags = selfMember.flags;
          }
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          let tmp3 = closure_18;
          if (!obj.hasFlag(num, closure_18.COMPLETED_HOME_ACTIONS)) {
            continue;
          } else {
            let tmp4 = closure_0;
            let onboardingCompleteGuilds = closure_0.onboardingCompleteGuilds;
            let addResult = onboardingCompleteGuilds.add(key10008);
            // continue
          }
          continue;
        }
        const guildId = guildId.getGuildId();
        if (null != guildId) {
          const result = tmp2Result._getOrLoadOnboardingMemberActions(guildId);
        }
      };
      tmp2Result.handleGuildMemberUpdate = (user) => {
        let flags;
        let guildId;
        ({ flags, guildId } = user);
        if (user.user.id === store.getId()) {
          const onboardingCompleteGuilds2 = tmp2Result.onboardingCompleteGuilds;
          if (!onboardingCompleteGuilds2.has(guildId)) {
            let obj = tmp2Result(paths[16]);
            let num3 = 0;
            if (null != flags) {
              num3 = flags;
            }
            if (obj.hasFlag(num3, constants.COMPLETED_HOME_ACTIONS)) {
              const onboardingCompleteGuilds = tmp2Result.onboardingCompleteGuilds;
              onboardingCompleteGuilds.add(guildId);
              const newMemberActions = newMemberActions.getNewMemberActions(guildId);
              let length;
              if (null != newMemberActions) {
                length = newMemberActions.length;
              }
              let num4 = 0;
              if (null != length) {
                num4 = length;
              }
              if (0 !== num4) {
                const obj2 = callback(paths[17]);
                const tmp13 = tmp2Result(paths[19])(paths[18], paths.paths);
                obj = { initialPercent: (num4 - 1) / num4, numActions: num4 };
                obj = { animation: tmp2Result(paths[21]).ModalAnimation.FADE };
                obj2.pushLazy(tmp13, obj, tmp2Result(paths[20]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY, obj);
              }
            }
          }
        }
      };
      tmp2Result.handleGuildDelete = (guild) => {
        const onboardingCompleteGuilds = tmp2Result.onboardingCompleteGuilds;
        onboardingCompleteGuilds.delete(guild.guild.id);
      };
      tmp2Result.handleChannelSelect = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleMessageSend = (message) => {
        let channelId;
        let guildId;
        ({ guildId, channelId } = message);
        if (null != guildId) {
          if (null != channelId) {
            const author = message.message.author;
            let id;
            if (null != author) {
              id = author.id;
            }
            if (id === store.getId()) {
              const channel = store2.getChannel(channelId);
              let tmp4 = null != channel && channel.isForumPost();
              if (tmp4) {
                let parent_id;
                if (null != channel) {
                  parent_id = channel.parent_id;
                }
                tmp4 = null != parent_id;
              }
              if (tmp4) {
                tmp2Result._completeChatAction(guildId, channel.parent_id);
              }
              tmp2Result._completeChatAction(guildId, channelId);
            }
          }
        }
      };
      tmp2Result.handleThreadCreate = (arg0) => {
        let channel;
        let isNewlyCreated;
        ({ channel, isNewlyCreated } = arg0);
        if (isNewlyCreated) {
          isNewlyCreated = null != channel.parent_id;
        }
        if (isNewlyCreated) {
          channel = store2.getChannel(channel.parent_id);
          isNewlyCreated = null != channel;
          const obj = channel;
        }
        if (isNewlyCreated) {
          isNewlyCreated = obj.isForumLikeChannel();
        }
        if (isNewlyCreated) {
          isNewlyCreated = channel.ownerId === store.getId();
        }
        if (isNewlyCreated) {
          tmp2Result._completeChatAction(channel.guild_id, channel.parent_id);
        }
      };
      tmp2Result._completeChatAction = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result._getOrLoadOnboardingMemberActions = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result._getOrLoadOnboardingHomeSettings = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result._getOrLoadMemberActions = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = GuildOnboardingHomeManager;
  callback2(GuildOnboardingHomeManager, arg0);
  return callback(GuildOnboardingHomeManager);
}(importDefault(dependencyMap[25]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx");

export default tmp2;
