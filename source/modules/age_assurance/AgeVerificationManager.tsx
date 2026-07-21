// Module ID: 15858
// Function ID: 121349
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15858 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleMessageCreate(channelId) {
  const message = message.getMessage(channelId.channelId, channelId.message.id);
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
const transformUser = arg1(dependencyMap[8]).transformUser;
({ ChannelTypes: closure_13, MAX_MESSAGES_PER_CHANNEL: closure_14 } = arg1(dependencyMap[9]));
const SafetyToastType = arg1(dependencyMap[10]).SafetyToastType;
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("AgeVerificationManager");
let tmp5 = (arg0) => {
  class AgeVerificationManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AgeVerificationManager);
      items1 = [...items];
      obj = closure_6(AgeVerificationManager);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AgeVerificationManager = tmp2Result;
      tmp2Result._previousAgeVerificationStatus = null;
      tmp2Result.handlePostConnectionOpen = () => {
        const currentUser = currentUser.getCurrentUser();
        let prop;
        if (null != currentUser) {
          prop = currentUser.ageVerificationStatus;
        }
        let tmp4 = null;
        if (null != prop) {
          tmp4 = prop;
        }
        tmp2Result._previousAgeVerificationStatus = tmp4;
      };
      tmp2Result.handleCurrentUserUpdate = (user) => {
        let tmp2Result;
        let callback;
        const ageVerificationStatus = callback2(user.user).ageVerificationStatus;
        let tmp = null;
        if (null != ageVerificationStatus) {
          tmp = ageVerificationStatus;
        }
        let tmp3 = tmp2Result._previousAgeVerificationStatus !== tmp;
        if (tmp3) {
          tmp3 = tmp2 === tmp2Result(closure_2[14]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
        }
        let isFeatureAgeGatedResult = tmp3;
        if (tmp3) {
          let obj = tmp2Result(closure_2[15]);
          isFeatureAgeGatedResult = obj.isFeatureAgeGated(tmp2Result(closure_2[16]).AgeGatedFeature.AGE_GATED_SPACES);
        }
        if (isFeatureAgeGatedResult) {
          const channelId = channelId.getChannelId();
          tmp2Result = channelId;
          callback = false;
          const item = callback(closure_2[17]).forEach((channelId) => {
            channelId = channelId.channelId;
            const channel = channel.getChannel(channelId);
            if (tmp2) {
              callback(closure_2[17]).clear(channelId);
              if (channelId === channelId) {
                const callback = true;
              }
              const obj = callback(closure_2[17]);
            }
          });
          let tmp17 = callback;
          if (callback) {
            tmp17 = null != tmp12;
          }
          if (tmp17) {
            obj = { channelId: tmp12, limit: closure_14 };
            const messages = callback(closure_2[12]).fetchMessages(obj);
            const channel = channel.getChannel(tmp12);
            let type;
            if (null != channel) {
              type = channel.type;
            }
            let tmp28 = type !== constants.GUILD_FORUM;
            if (tmp28) {
              let type1;
              if (null != channel) {
                type1 = channel.type;
              }
              tmp28 = type1 !== constants.GUILD_MEDIA;
            }
            if (!tmp28) {
              tmp2Result(closure_2[13]).preloadForumThreads(channel);
              const obj4 = tmp2Result(closure_2[13]);
            }
            const obj2 = callback(closure_2[12]);
          }
          const arr = callback(closure_2[17]);
        }
        tmp2Result._previousAgeVerificationStatus = tmp;
      };
      obj = { POST_CONNECTION_OPEN: tmp2Result.handlePostConnectionOpen, CURRENT_USER_UPDATE: tmp2Result.handleCurrentUserUpdate, MESSAGE_CREATE: closure_17 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = AgeVerificationManager;
  callback2(AgeVerificationManager, arg0);
  return callback(AgeVerificationManager);
}(importDefault(dependencyMap[18]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default tmp5;
