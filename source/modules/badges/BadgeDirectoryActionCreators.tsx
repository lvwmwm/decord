// Module ID: 8315
// Function ID: 65477
// Name: urlUserId
// Dependencies: [5, 1849, 653, 686, 507, 6836, 6841, 1184, 2]
// Exports: fetchBadge, fetchBadgeDirectory, markBadgeDirectoryBadgeIndicatorSeen

// Module 8315 (urlUserId)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function urlUserId(arg0) {
  let tmp = arg0;
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (tmp === id) {
    tmp = closure_6;
  }
  return tmp;
}
async function _fetchBadgeDirectory(arg0, arg1) {
  let iter = (function*(arg0) {
    let tmp = arg0;
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    if (null == tmp) {
      const currentUser = outer2_4.getCurrentUser();
      let id;
      if (null != currentUser) {
        id = currentUser.id;
      }
      tmp = id;
    }
    if (null != tmp) {
      const currentUser1 = outer2_4.getCurrentUser();
      let id1;
      if (null != currentUser1) {
        id1 = currentUser1.id;
      }
      let str2 = "other";
      if (null != id1) {
        str2 = "other";
        if (tmp6 === id1) {
          str2 = "self";
        }
      }
      const _HermesInternal = HermesInternal;
      const combined = "viewed_user:" + str2;
      let str4 = "initial";
      if (true === obj.isRetry) {
        str4 = "retry";
      }
      const text = `attempt:${str4}`;
      const _Date = Date;
      const timestamp = Date.now();
      let obj1 = outer2_1(outer2_2[3]);
      obj = { type: "BADGE_DIRECTORY_FETCH_START", userId: tmp6 };
      obj1.dispatch(obj);
      const HTTP = outer2_0(outer2_2[4]).HTTP;
      obj = { url: outer2_5.USER_BADGES(outer2_7(tmp6)), rejectWithError: true };
      const body = yield HTTP.get(obj).body;
      const items = [combined, "result:success", , ];
      let str8 = "non_empty";
      if (0 === body.badges.length) {
        str8 = "empty";
      }
      items[2] = `catalog_state:${str8}`;
      items[3] = text;
      obj1 = { name: outer2_0(outer2_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items };
      const _Date2 = Date;
      outer2_1(outer2_2[5]).distribution(obj1, Date.now() - timestamp);
      const obj5 = outer2_1(outer2_2[5]);
      const obj2 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: tmp6, badges: body.badges };
      outer2_1(outer2_2[3]).dispatch(obj2);
      const obj7 = outer2_1(outer2_2[3]);
    }
  })();
  iter.next();
  return iter;
}
async function _fetchBadge(arg0, arg1, arg2) {
  let tmp = arg1;
  if (null == tmp) {
    const currentUser = outer2_4.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null != tmp) {
    const HTTP = outer2_0(outer2_2[4]).HTTP;
    let obj = { url: outer2_5.USER_BADGE(outer2_7(tmp5), arg0), rejectWithError: true };
    obj = outer2_1(outer2_2[3]);
    obj = { type: "BADGE_FETCH_SUCCESS", userId: tmp, badge: yield HTTP.get(obj).body };
    obj.dispatch(obj);
    const tmp14 = yield HTTP.get(obj);
  }
}
({ Endpoints: closure_5, ME: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export const fetchBadgeDirectory = function fetchBadgeDirectory(id) {
  return _fetchBadgeDirectory(...arguments);
};
export const fetchBadge = function fetchBadge(GIFTING) {
  return _fetchBadge(...arguments);
};
export const markBadgeDirectoryBadgeIndicatorSeen = function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  let obj = importDefault(686);
  obj = { type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId };
  obj.dispatch(obj);
};
