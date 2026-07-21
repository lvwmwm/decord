// Module ID: 8813
// Function ID: 69512
// Name: fetchUserAffinitiesV2
// Dependencies: []
// Exports: fetchUserAffinitiesV2

// Module 8813 (fetchUserAffinitiesV2)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ Endpoints: closure_5, Consents: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_affinities/UserAffinitiesActionCreators.tsx");

export const fetchUserAffinitiesV2 = function fetchUserAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (closure_4.shouldFetch()) {
    if (closure_3.hasConsented(constants.PERSONALIZATION)) {
      let obj = importDefault(dependencyMap[3]);
      obj = { type: "LOAD_USER_AFFINITIES_V2" };
      obj.dispatch(obj);
      const HTTP = arg1(dependencyMap[4]).HTTP;
      obj = { url: USER_AFFINITIES_V2.USER_AFFINITIES_V2 };
      let num3 = 0;
      if (flag) {
        num3 = 3;
      }
      obj.retries = num3;
      obj.oldFormErrors = true;
      obj.rejectWithError = false;
      const value = HTTP.get(obj);
      let nextPromise = value.then((body) => {
        let obj = callback(closure_2[3]);
        obj = {
          type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
          affineUsers: user_affinities.map((otherUserId) => {
            const obj = { otherUserId: otherUserId.other_user_id, userSegment: otherUserId.user_segment, otherUserSegment: otherUserId.other_user_segment, isFriend: otherUserId.is_friend };
            const dm_probability = otherUserId.dm_probability;
            let num = 0;
            if (null != dm_probability) {
              num = dm_probability;
            }
            obj.dmProbability = num;
            const dm_rank = otherUserId.dm_rank;
            let num2 = 0;
            if (null != dm_rank) {
              num2 = dm_rank;
            }
            obj.dmRank = num2;
            const vc_probability = otherUserId.vc_probability;
            let num3 = 0;
            if (null != vc_probability) {
              num3 = vc_probability;
            }
            obj.vcProbability = num3;
            const vc_rank = otherUserId.vc_rank;
            let num4 = 0;
            if (null != vc_rank) {
              num4 = vc_rank;
            }
            obj.vcRank = num4;
            const server_message_probability = otherUserId.server_message_probability;
            let num5 = 0;
            if (null != server_message_probability) {
              num5 = server_message_probability;
            }
            obj.serverMessageProbability = num5;
            const server_message_rank = otherUserId.server_message_rank;
            let num6 = 0;
            if (null != server_message_rank) {
              num6 = server_message_rank;
            }
            obj.serverMessageRank = num6;
            const communication_probability = otherUserId.communication_probability;
            let num7 = 0;
            if (null != communication_probability) {
              num7 = communication_probability;
            }
            obj.communicationProbability = num7;
            const communication_rank = otherUserId.communication_rank;
            let num8 = 0;
            if (null != communication_rank) {
              num8 = communication_rank;
            }
            obj.communicationRank = num8;
            return obj;
          })
        };
        const user_affinities = body.body.user_affinities;
        obj.dispatch(obj);
      }, () => {
        callback(closure_2[3]).dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};
