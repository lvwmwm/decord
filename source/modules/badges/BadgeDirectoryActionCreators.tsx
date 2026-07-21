// Module ID: 8264
// Function ID: 65200
// Name: urlUserId
// Dependencies: []
// Exports: fetchBadge, fetchBadgeDirectory, markBadgeDirectoryBadgeIndicatorSeen

// Module 8264 (urlUserId)
function urlUserId(arg0) {
  let tmp = arg0;
  const currentUser = currentUser.getCurrentUser();
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
  const fn = function*(arg0) {
    let tmp = arg0;
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    if (null == tmp) {
      const currentUser = authStore.getCurrentUser();
      let id;
      if (null != currentUser) {
        id = currentUser.id;
      }
      tmp = id;
    }
    if (null != tmp) {
      const currentUser1 = authStore.getCurrentUser();
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
      let obj1 = callback2(closure_2[3]);
      obj = { type: "BADGE_DIRECTORY_FETCH_START", userId: tmp6 };
      obj1.dispatch(obj);
      const HTTP = callback(closure_2[4]).HTTP;
      obj = { url: closure_5.USER_BADGES(callback3(tmp6)), rejectWithError: true };
      const body = yield HTTP.get(obj).body;
      const items = [combined, "result:success", , ];
      let str8 = "non_empty";
      if (0 === body.badges.length) {
        str8 = "empty";
      }
      items[2] = `catalog_state:${str8}`;
      items[3] = text;
      obj1 = { name: callback(closure_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items };
      const _Date2 = Date;
      callback2(closure_2[5]).distribution(obj1, Date.now() - timestamp);
      const obj5 = callback2(closure_2[5]);
      const obj2 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: tmp6, badges: body.badges };
      callback2(closure_2[3]).dispatch(obj2);
      const obj7 = callback2(closure_2[3]);
    }
  };
  fn.next();
  return fn;
}
async function _fetchBadge(arg0, arg1, arg2) {
  let tmp = arg1;
  if (null == tmp) {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null != tmp) {
    const HTTP = callback(closure_2[4]).HTTP;
    let obj = { url: closure_5.USER_BADGE(callback3(tmp5), arg0), rejectWithError: true };
    obj = callback2(closure_2[3]);
    obj = { type: "BADGE_FETCH_SUCCESS", userId: tmp, badge: yield HTTP.get(obj).body };
    obj.dispatch(obj);
    const tmp14 = yield HTTP.get(obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ Endpoints: closure_5, ME: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export const fetchBadgeDirectory = function fetchBadgeDirectory(id) {
  return _fetchBadgeDirectory(...arguments);
};
export const fetchBadge = function fetchBadge(GIFTING) {
  return _fetchBadge(...arguments);
};
export const markBadgeDirectoryBadgeIndicatorSeen = function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId };
  obj.dispatch(obj);
};
