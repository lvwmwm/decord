// Module ID: 12582
// Function ID: 96781
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12582 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function requiresChannelOnboard() {
  const Storage = arg1(dependencyMap[11]).Storage;
  let isNewUserResult = !Storage.get(closure_14);
  if (isNewUserResult) {
    isNewUserResult = arg1(dependencyMap[12]).isNewUser(currentUser.getCurrentUser());
    const obj = arg1(dependencyMap[12]);
  }
  return isNewUserResult;
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
const GuildFeatures = arg1(dependencyMap[9]).GuildFeatures;
const GuildMemberFlags = arg1(dependencyMap[10]).GuildMemberFlags;
let closure_14 = "2020_02_nuf_channels";
let tmp2 = (arg0) => {
  class NUFChannelsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, NUFChannelsManager);
      items1 = [...items];
      obj = closure_6(NUFChannelsManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      NUFChannelsManager = tmp2Result;
      tmp2Result.actions = {
        LOGOUT() {
              return tmp2Result.clear();
            }
      };
      tmp2Result.handleNavigationStateChanged = () => {
        if ("guilds" === obj.getCurrentNavigationRouteName()) {
          const guildId = guildId.getGuildId();
          const guild = guild.getGuild(guildId);
          let tmp3 = null != guildId;
          if (tmp3) {
            let hasItem = null != guild;
            if (hasItem) {
              const features = guild.features;
              hasItem = features.has(constants.HUB);
            }
            tmp3 = !hasItem;
          }
          let selfMember = null;
          if (null != guild) {
            selfMember = selfMember.getSelfMember(guild.id);
          }
          let hasItem1 = null != guild;
          if (hasItem1) {
            const features2 = guild.features;
            hasItem1 = features2.has(constants.GUILD_ONBOARDING);
          }
          if (hasItem1) {
            let flags;
            if (null != selfMember) {
              flags = selfMember.flags;
            }
            let num2 = 0;
            if (null != flags) {
              num2 = flags;
            }
            hasItem1 = tmp2Result(paths[14]).hasFlag(num2, constants2.STARTED_ONBOARDING);
            const obj2 = tmp2Result(paths[14]);
          }
          if (hasItem1) {
            let flags1;
            if (null != selfMember) {
              flags1 = selfMember.flags;
            }
            let num4 = 0;
            if (null != flags1) {
              num4 = flags1;
            }
            hasItem1 = !tmp2Result(paths[14]).hasFlag(num4, constants2.COMPLETED_ONBOARDING);
            const obj3 = tmp2Result(paths[14]);
          }
          if (tmp3) {
            tmp3 = !hasItem1;
          }
          if (tmp3) {
            if (callback2()) {
              callback(paths[15]).openLazy(tmp2Result(paths[17])(paths[16], paths.paths), "NUFChannelsActionSheet");
              const Storage = tmp2Result(paths[11]).Storage;
              const result = Storage.set(closure_14, true);
              const obj4 = callback(paths[15]);
            }
            tmp2Result.terminate();
          }
        }
      };
      tmp2Result.requiresVoiceChannelsOnboard = () => {
        const Storage = tmp2Result(closure_2[11]).Storage;
        let isNewUserResult = !Storage.get("2020_02_nuf_voice_channels");
        if (isNewUserResult) {
          isNewUserResult = tmp2Result(closure_2[12]).isNewUser(currentUser.getCurrentUser());
          const obj = tmp2Result(closure_2[12]);
        }
        return isNewUserResult;
      };
      tmp2Result.handleVoiceChannelsOnboard = () => {
        const Storage = tmp2Result(closure_2[11]).Storage;
        const result = Storage.set("2020_02_nuf_voice_channels", true);
      };
      tmp2Result.clear = () => {
        const Storage = tmp2Result(closure_2[11]).Storage;
        Storage.remove(closure_14);
        const Storage2 = tmp2Result(closure_2[11]).Storage;
        Storage2.remove("2020_02_nuf_voice_channels");
      };
      return tmp2Result;
    }
  }
  const arg1 = NUFChannelsManager;
  callback2(NUFChannelsManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      if (callback4()) {
        const rootNavigationRef = NUFChannelsManager(closure_2[18]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          const self = this;
          rootNavigationRef.addListener("state", this.handleNavigationStateChanged);
        }
        const obj = NUFChannelsManager(closure_2[18]);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      const rootNavigationRef = NUFChannelsManager(closure_2[18]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        const self = this;
        rootNavigationRef.removeListener("state", this.handleNavigationStateChanged);
      }
    }
  };
  items[1] = obj;
  return callback(NUFChannelsManager, items);
}(importDefault(dependencyMap[19]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default tmp2;
