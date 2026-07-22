// Module ID: 11486
// Function ID: 89418
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11486 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function clearGuildMemberTimeout(closure_2, closure_1) {
  const member = member.getMember(closure_2, closure_1);
  const user = user.getUser(closure_1);
  if (null != member) {
    if (null != user) {
      if (!obj6.isMemberCommunicationDisabled(member)) {
        let obj = {};
        const merged = Object.assign(member);
        obj["guildId"] = closure_2;
        let username = member.nick;
        if (null == username) {
          username = user.username;
        }
        obj["nick"] = username;
        const avatar = member.avatar;
        let tmp5;
        if (null != avatar) {
          tmp5 = avatar;
        }
        obj["avatar"] = tmp5;
        let tmp6;
        if (null != member.avatarDecoration) {
          obj = {};
          const merged1 = Object.assign(member.avatarDecoration);
          tmp6 = obj;
        }
        obj["avatarDecoration"] = tmp6;
        const premiumSince = member.premiumSince;
        let tmp9;
        if (null != premiumSince) {
          tmp9 = premiumSince;
        }
        obj["premiumSince"] = tmp9;
        const isPending = member.isPending;
        obj["isPending"] = null != isPending && isPending;
        obj = {};
        const merged2 = Object.assign(user);
        const email = user.email;
        let tmp14;
        if (null != email) {
          tmp14 = email;
        }
        obj["email"] = tmp14;
        const phone = user.phone;
        let tmp15;
        if (null != phone) {
          tmp15 = phone;
        }
        obj["phone"] = tmp15;
        obj["user"] = obj;
        obj["communicationDisabledUntil"] = null;
        const obj1 = { type: "GUILD_MEMBER_UPDATE" };
        const merged3 = Object.assign(obj);
        importDefault(dependencyMap[8]).dispatch(obj1);
        const obj4 = importDefault(dependencyMap[8]);
        const tmp10 = null != isPending && isPending;
      }
      const obj6 = closure_1(dependencyMap[7]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ getGuildIdFromCommunicationDisabledUserKey: closure_8, getUserIdFromCommunicationDisabledUserKey: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = null;
let tmp3 = (arg0) => {
  class CommunicationDisabledManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, CommunicationDisabledManager);
      items1 = [...items];
      obj = closure_6(CommunicationDisabledManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.clearGuildMemberTimeout = closure_14;
      return tmp2Result;
    }
  }
  const arg1 = CommunicationDisabledManager;
  callback2(CommunicationDisabledManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const interval = setInterval(() => {
        function _checkAllGuildMemberTimeouts() {
          const communicationDisabledUserMap = communicationDisabledUserMap.getCommunicationDisabledUserMap();
          const keys = Object.keys(communicationDisabledUserMap);
          const item = keys.forEach((arg0) => {
            const tmp = callback(arg0);
            const tmp2 = callback2(arg0);
            if (!obj.isCommunicationDisabled(communicationDisabledUserMap[arg0])) {
              callback3(tmp, tmp2);
            }
          });
        }();
      }, 10000);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      clearInterval(closure_12);
    }
  };
  items[1] = obj;
  return callback(CommunicationDisabledManager, items);
}(importDefault(dependencyMap[9]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default tmp3;
