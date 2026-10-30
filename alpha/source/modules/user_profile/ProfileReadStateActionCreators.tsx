// Module ID: 14959
// Function ID: 14960
// Name: ProfileReadStateActionCreators
// Dependencies: [5, 1384, 7777, 3, 14938, 1283, 14960, 572, 7776, 2]
// Exports: ackProfileWishlist

// Module 14959 (ProfileReadStateActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import ProfileReadStateConstants from "ProfileReadStateConstants" /* 7777 */;
import ProfileReadStateEndpoints2 from "ProfileReadStateEndpoints" /* 14960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let ackedAt, closure_2, closure_3;

let obj = function _ackProfileWishlist() {
  obj = _asyncToGenerator(async (ownerId) => {
    let closure_4;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let ProfileReadStateEndpoints;
      let currentUser;
      let items;
      let obj4;
      let tmp3;
      function canTrackProfile(arg0) {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        let tmp3 = arg0 !== id;
        if (tmp3) {
          obj = ownerId(closure_1_2[4]);
          tmp3 = null != obj.getProfileReadStateConfigPeek();
        }
        return tmp3;
      }
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              ackedAt = undefined;
              const tmp36 = ownerId;
              if (canTrackProfile(ownerId)) {
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: ProfileReadStateEndpoints.PROFILE_READ_STATE(tmp36), body: obj4, rejectWithError: true };
                const put = HTTP.put;
                ProfileReadStateEndpoints = ProfileReadStateEndpoints2.ProfileReadStateEndpoints;
                obj4 = { sections: items };
                items = [constants.WISHLIST];
                c6 = 2;
                c7 = 1;
                const obj5 = { value: put(request), done: false };
                return obj5;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = currentUser;
            closure_131_6.warn("Failed to ack profile wishlist", closure_2);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            ackedAt = value;
            const obj6 = { type: "PROFILE_READ_STATE_ACK", ownerId, ackedAt };
            const dispatch = closure_131_1(closure_131_2[7]).dispatch;
            closure_131_1(closure_131_2[7]);
            const obj8 = closure_131_0(closure_131_2[8]);
            const result = obj8.parseProfileReadState(ackedAt.body);
            ackedAt = result;
            if (result == null) {
              ackedAt = {};
            }
            dispatch(obj6);
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp19) {
          currentUser = tmp19;
          if (0 === c5) {
            c7 = 3;
            throw tmp19;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const ProfileReadStateSection = ProfileReadStateConstants.ProfileReadStateSection;
let closure_6 = new LoggerDefault("ProfileReadStateActionCreators");
const tmp2 = new LoggerDefault("ProfileReadStateActionCreators");
let result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateActionCreators.tsx");

export function ackProfileWishlist() {
  return obj(...arguments);
}
