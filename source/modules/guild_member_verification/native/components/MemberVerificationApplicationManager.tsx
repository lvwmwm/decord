// Module ID: 15932
// Function ID: 122194
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15932 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class MemberVerificationApplicationManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, MemberVerificationApplicationManager);
      items1 = [...items];
      obj = closure_6(MemberVerificationApplicationManager);
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
      MemberVerificationApplicationManager = tmp2Result;
      tmp2Result.isShowingAlert = false;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.showApplicationApprovedAlert();
            },
        GUILD_JOIN_REQUEST_UPDATE() {
              return tmp2Result.showApplicationApprovedAlert();
            },
        CHANNEL_SELECT() {
              return tmp2Result.showApplicationApprovedAlert();
            }
      };
      tmp2Result.showApplicationApprovedAlert = () => {
        const guildId = guildId.getGuildId();
        if (null == guildId) {
          if (tmp2Result.isShowingAlert) {
            request(closure_2[7]).close();
            tmp2Result.isShowingAlert = false;
            const obj3 = request(closure_2[7]);
          }
        } else {
          const request = request.getRequest(guildId);
          let applicationStatus;
          if (null != request) {
            applicationStatus = request.applicationStatus;
          }
          if (applicationStatus === tmp2Result(closure_2[8]).GuildJoinRequestApplicationStatuses.APPROVED) {
            if (tmp2Result.isShowingAlert) {
              let lastSeen;
              if (null != request) {
                lastSeen = request.lastSeen;
              }
              if (null !== lastSeen) {
                request(closure_2[7]).close();
                tmp2Result.isShowingAlert = false;
                const obj2 = request(closure_2[7]);
              }
            }
            let tmp7 = tmp2Result.isShowingAlert || null == request;
            if (!tmp7) {
              let lastSeen1;
              if (null != request) {
                lastSeen1 = request.lastSeen;
              }
              tmp7 = null !== lastSeen1;
            }
            if (!tmp7) {
              const result = tmp2Result(closure_2[9]).openMemberVerificationSuccessAlert(guildId, () => {
                const result = request(closure_2[10]).ackUserGuildJoinRequest(guildId, request.joinRequestId);
              });
              tmp2Result.isShowingAlert = true;
              const obj = tmp2Result(closure_2[9]);
            }
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = MemberVerificationApplicationManager;
  callback2(MemberVerificationApplicationManager, arg0);
  return callback(MemberVerificationApplicationManager);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx");

export default tmp2;
