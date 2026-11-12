// Module ID: 15738
// Function ID: 15739
// Name: ProfileReadStateActionCreators
// Dependencies: [5, 9396, 1385, 7288, 3, 15719, 7299, 1282, 15739, 7300, 572, 2]
// Exports: ackProfileWishlist

// Module 15738 (ProfileReadStateActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7299 */;
import ProfileReadStateSection from "ProfileReadStateSection" /* 7300 */;
import ProfileReadStateEndpoints2 from "ProfileReadStateEndpoints" /* 15739 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import WishlistStore from "WishlistStore" /* 9396 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7288 */;
import size from "module_2" /* 2 */;

let ackedAt, c5, closure_3, closure_4, closure_5;

function canAckProfileWishlist(id, wishlistId) {
  if (null != wishlistId) {
    if (null != WishlistStore.getWishlist(wishlistId)) {
      if (!WishlistStore.isFetching(wishlistId)) {
        if (null == WishlistStore.getError(wishlistId)) {
          const wishlistSettings = UserProfileStore.getWishlistSettings(id, wishlistId);
          let updated_at;
          obj = UserProfileStore;
          if (wishlistSettings != null) {
            updated_at = wishlistSettings.updated_at;
          }
          let shouldAckWishlistResult = null == updated_at || obj3.getUpdatedAt(wishlistId) === updated_at;
          if (shouldAckWishlistResult) {
            const obj2 = ProfileReadStateUtils;
            shouldAckWishlistResult = obj2.shouldAckWishlist(wishlistSettings, obj.getProfileReadState(id));
          }
          return shouldAckWishlistResult;
        }
      }
    }
  }
  return false;
}
let obj = function _ackProfileWishlist() {
  let firstWishlistId;
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp3;
    function canTrackProfile(arg0) {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let tmp3 = arg0 !== id;
      if (tmp3) {
        obj = closure_1_0(closure_1_2[5]);
        tmp3 = null != obj.getProfileReadStateConfigPeek();
      }
      return tmp3;
    }
    function sendWishlistAck() {
      return closure_1_11(...arguments);
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let combined;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            combined = undefined;
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            if (null != id) {
              if (canTrackProfile(closure_0)) {
                const _HermesInternal = HermesInternal;
                combined = "" + id + ":" + tmp39;
                value = map.get(combined);
                if (null != value) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (canAckProfileWishlist(closure_0, firstWishlistId.getFirstWishlistId(closure_0))) {
                  const tmp28 = sendWishlistAck(closure_0, id);
                  const result = map.set(combined, tmp28);
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: tmp28, done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          closure_130_8.delete(combined);
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_8.delete(combined);
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          closure_130_8.delete(combined);
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp31) {
        closure_3 = tmp31;
        if (0 === c4) {
          c6 = 3;
          throw tmp31;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendWishlistAck() {
  obj = _asyncToGenerator(async (ownerId, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let ProfileReadStateEndpoints;
      let items;
      let obj4;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              ackedAt = undefined;
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: ProfileReadStateEndpoints.PROFILE_READ_STATE(ownerId), body: obj4, rejectWithError: true };
              const put = HTTP.put;
              ProfileReadStateEndpoints = ProfileReadStateEndpoints2.ProfileReadStateEndpoints;
              obj4 = { sections: items };
              items = [ProfileReadStateSection.ProfileReadStateSection.WISHLIST];
              c7 = 2;
              c8 = 1;
              const obj5 = { value: put(request), done: false };
              return obj5;
            }
          } else {
            if (1 === c7) {
              c6 = 0;
              closure_3 = closure_5;
              closure_132_7.warn("Failed to ack profile wishlist", closure_3);
            } else if (2 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                ackedAt = value;
                const currentUser = closure_132_5.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (id !== closure_1) {
                  c6 = 0;
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const obj7 = { type: "PROFILE_READ_STATE_ACK", ownerId, ackedAt };
                  const dispatch = closure_132_1(closure_132_2[10]).dispatch;
                  closure_132_1(closure_132_2[10]);
                  const obj8 = closure_132_0(closure_132_2[6]);
                  const result = obj8.parseProfileReadState(ackedAt.body);
                  ackedAt = result;
                  if (result == null) {
                    ackedAt = {};
                  }
                  c7 = 3;
                  c8 = 1;
                  const obj9 = { value: dispatch(obj7), done: false };
                  return obj9;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 0;
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          closure_5 = tmp16;
          if (0 === c6) {
            c8 = 3;
            throw tmp16;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_7 = new LoggerDefault("ProfileReadStateActionCreators");
const tmp2 = new LoggerDefault("ProfileReadStateActionCreators");
const map = new Map();
let result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateActionCreators.tsx");

export { canAckProfileWishlist };
export function ackProfileWishlist() {
  return obj(...arguments);
}
