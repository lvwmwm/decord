// Module ID: 11764
// Function ID: 91344
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11764 (_isNativeReflectConstruct)
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
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
let tmp2 = (arg0) => {
  class HubJoinManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, HubJoinManager);
      items1 = [...items];
      obj = closure_6(HubJoinManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      HubJoinManager = tmp2Result;
      tmp2Result.handleGuildCreate = (guild) => {
        guild = guild.getGuild(guild.guild.id);
        let hasItem = null != guild;
        if (hasItem) {
          const features = guild.features;
          hasItem = null != features;
          const obj = features;
        }
        if (hasItem) {
          hasItem = obj.has(constants.HUB);
        }
        if (hasItem) {
          if (null != tmp2Result.onClose) {
            tmp2Result.onClose();
          }
          tmp2Result(closure_2[7]).transitionToGuild(guild.id);
          const obj2 = tmp2Result(closure_2[7]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = HubJoinManager;
  callback2(HubJoinManager, arg0);
  let obj = {
    key: "_initialize",
    value(onClose) {
      this.onClose = onClose;
      const subscription = callback(closure_2[8]).subscribe("GUILD_CREATE", this.handleGuildCreate);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[8]).unsubscribe("GUILD_CREATE", this.handleGuildCreate);
    }
  };
  items[1] = obj;
  return callback(HubJoinManager, items);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default tmp2;
