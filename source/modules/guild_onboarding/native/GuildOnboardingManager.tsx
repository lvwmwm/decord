// Module ID: 15910
// Function ID: 121981
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15910 (_isNativeReflectConstruct)
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
const GuildFeatures = arg1(dependencyMap[8]).GuildFeatures;
const GuildMemberFlags = arg1(dependencyMap[9]).GuildMemberFlags;
let closure_13 = null;
let closure_14 = null;
let tmp2 = (arg0) => {
  class GuildOnboardingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildOnboardingManager);
      items1 = [...items];
      obj = closure_6(GuildOnboardingManager);
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
      GuildOnboardingManager = tmp2Result;
      tmp2Result.actions = {
        CHANNEL_SELECT(arg0) {
              return tmp2Result.handleChannelSelect(arg0);
            },
        GUILD_DELETE(arg0) {
              return tmp2Result.handleGuildDelete(arg0);
            },
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            }
      };
      tmp2Result.handleConnectionOpen = () => {
        if (null != tmp3) {
          let guildId = tmp3;
        } else {
          guildId = guildId.getGuildId();
        }
        let tmp3 = null;
        if (null != guildId) {
          tmp3 = guildId;
        }
        if (null != tmp3) {
          const result = tmp2Result._openOnboardingIfIncomplete(tmp3);
        }
      };
      tmp2Result.handleChannelSelect = (arg0) => {
        let channelId;
        let guildId;
        ({ guildId, channelId } = arg0);
        let tmp = tmp5 === guildId;
        if (tmp) {
          tmp = tmp4 === channelId;
        }
        if (!tmp) {
          let tmp4 = null;
          if (null != channelId) {
            tmp4 = channelId;
          }
          let tmp5 = null;
          if (null != guildId) {
            tmp5 = guildId;
          }
          if (null != tmp5) {
            const result = tmp2Result._openOnboardingIfIncomplete(tmp5);
          }
        }
      };
      tmp2Result.handleGuildDelete = (guild) => {
        const result = tmp2Result(closure_2[10]).discardOnboardingPromise(guild.guild.id);
      };
      tmp2Result._openOnboardingIfIncomplete = (guildId) => {
        const guild = guild.getGuild(guildId);
        if (null != guild) {
          const features = guild.features;
          if (features.has(constants.GUILD_ONBOARDING)) {
            const selfMember = selfMember.getSelfMember(guildId);
            let hasFlagResult = null != selfMember;
            if (hasFlagResult) {
              let obj = tmp2Result(closure_2[11]);
              const flags = selfMember.flags;
              let num2 = 0;
              if (null != flags) {
                num2 = flags;
              }
              hasFlagResult = !obj.hasFlag(num2, constants2.COMPLETED_ONBOARDING);
            }
            if (hasFlagResult) {
              const flags2 = selfMember.flags;
              let num4 = 0;
              if (null != flags2) {
                num4 = flags2;
              }
              hasFlagResult = tmp2Result(closure_2[11]).hasFlag(num4, constants2.STARTED_ONBOARDING);
              const obj2 = tmp2Result(closure_2[11]);
            }
            if (hasFlagResult) {
              obj = { guildId };
              callback(closure_2[10])(obj);
            }
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildOnboardingManager;
  callback2(GuildOnboardingManager, arg0);
  return callback(GuildOnboardingManager);
}(importDefault(dependencyMap[12]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingManager.tsx");

export default tmp2;
