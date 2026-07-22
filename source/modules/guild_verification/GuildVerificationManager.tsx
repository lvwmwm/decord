// Module ID: 15943
// Function ID: 122273
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15943 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleInviteData(invite) {
  const guild = invite.invite.guild;
  const flags = invite.invite.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  if (null != guild) {
    if (null != guild) {
      const features = guild.features;
      if (null != features) {
        if (features.includes(GuildFeatures.HUB)) {
          importDefault(dependencyMap[6]).onOpenHubInvite(invite.invite);
          const obj5 = importDefault(dependencyMap[6]);
        }
      }
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = arg1(dependencyMap[7]).hasFlag(num, arg1(dependencyMap[8]).GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = arg1(dependencyMap[7]).hasFlag(num, arg1(dependencyMap[8]).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const obj2 = arg1(dependencyMap[7]);
    }
    new_member = !hasFlagResult;
    const obj = arg1(dependencyMap[7]);
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = arg1(dependencyMap[9]).inviteGuildHasPendingMemberDisabledVerification(guild);
    const obj3 = arg1(dependencyMap[9]);
  }
  if (new_member) {
    const result = arg1(dependencyMap[9]).openVerificationModalOrTransitionToApplication(guild.id);
    const obj4 = arg1(dependencyMap[9]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
let tmp2 = (arg0) => {
  class GuildVerificationManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildVerificationManager);
      items1 = [...items];
      obj = closure_6(GuildVerificationManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { INVITE_ACCEPT_SUCCESS: closure_10 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = GuildVerificationManager;
  callback2(GuildVerificationManager, arg0);
  return callback(GuildVerificationManager);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default tmp2;
