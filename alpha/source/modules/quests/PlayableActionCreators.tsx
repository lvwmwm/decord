// Module ID: 20434
// Function ID: 20435
// Name: PlayableActionCreators
// Dependencies: [5, 1072, 7740, 7964, 7941, 1282, 572, 6605, 2]
// Exports: claimPlayableReward

// Module 20434 (PlayableActionCreators)
import Constants from "Constants" /* 1072 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7740 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_6, decision_metadata_sealed, traffic_metadata_sealed;

let obj = function _claimPlayableReward() {
  obj = _asyncToGenerator(async (playableId, arg1) => {
    let closure_4;
    let closure_5;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj6;
      let obj7;
      let uuid;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let adMetadataSealed;
          let adTrafficMetadataSealed;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              decision_metadata_sealed = undefined;
              traffic_metadata_sealed = undefined;
              adMetadataSealed = undefined;
              adTrafficMetadataSealed = undefined;
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: obj7.getSession(), done: false };
              obj7 = SessionHeartbeatScheduler;
              return obj4;
            }
          } else if (1 === c8) {
            c7 = 0;
            const self = this;
            const self2 = this;
            const tmp25 = new closure_133_1(closure_133_2[7])(closure_6);
            throw tmp25;
          } else if (2 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              const obj11 = closure_133_0(closure_133_2[3]);
              traffic_metadata_sealed = obj11.getOrRefreshAdSession();
              const obj12 = closure_133_0(closure_133_2[4]);
              adMetadataSealed = obj12.getAdMetadataSealed(closure_1, playableId);
              const obj13 = closure_133_0(closure_133_2[4]);
              adTrafficMetadataSealed = obj13.getAdTrafficMetadataSealed(closure_1, undefined, playableId);
              const HTTP = closure_133_0(closure_133_2[5]).HTTP;
              const request = { url: closure_133_4.QUESTS_CREATIVES_CLAIM_REWARD(playableId), body: obj6, rejectWithError: false };
              const post = HTTP.post;
              decision_metadata_sealed = adMetadataSealed;
              if (adMetadataSealed == null) {
                decision_metadata_sealed = null;
              }
              obj6 = { decision_metadata_sealed, traffic_metadata_sealed, client_ad_session_id: traffic_metadata_sealed.uuid, client_heartbeat_session_id: uuid };
              traffic_metadata_sealed = adTrafficMetadataSealed;
              if (adTrafficMetadataSealed == null) {
                traffic_metadata_sealed = null;
              }
              uuid = undefined;
              if (decision_metadata_sealed != null) {
                uuid = decision_metadata_sealed.uuid;
              }
              c8 = 3;
              c9 = 1;
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            const obj10 = { type: "PLAYABLE_REWARD_CLAIM_SUCCESS", playableId };
            obj = closure_133_1(closure_133_2[6]);
            obj.dispatch(obj10);
            c7 = 0;
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp31) {
          closure_6 = tmp31;
          if (0 === c7) {
            c9 = 3;
            throw tmp31;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/quests/PlayableActionCreators.tsx");

export function claimPlayableReward() {
  return obj(...arguments);
}
