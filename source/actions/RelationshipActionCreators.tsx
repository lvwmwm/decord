// Module ID: 8916
// Function ID: 70343
// Name: showAlert
// Dependencies: []

// Module 8916 (showAlert)
function showAlert(merged, arg1, arg2) {
  arg1(dependencyMap[4]).closeContextMenu();
  const obj = arg1(dependencyMap[4]);
  importDefault(dependencyMap[5]).show(merged);
}
function handleRelationshipAddError(arg0, arg1, substr) {
  let body;
  let status;
  ({ status, body } = arg0);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (arg1 === obj.SHOW_ALWAYS) {
      let obj = {};
      const intl7 = arg1(dependencyMap[7]).intl;
      obj.title = intl7.string(arg1(dependencyMap[7]).t.3D5eox);
      const intl8 = arg1(dependencyMap[7]).intl;
      obj.body = intl8.string(arg1(dependencyMap[7]).t.TuJriJ);
      const intl9 = arg1(dependencyMap[7]).intl;
      obj.confirmText = intl9.string(arg1(dependencyMap[7]).t.DppXIx);
      showAlert(obj);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj = {};
        const intl4 = arg1(dependencyMap[7]).intl;
        obj.title = intl4.string(arg1(dependencyMap[7]).t.Gqf33E);
        const intl5 = arg1(dependencyMap[7]).intl;
        obj.body = intl5.string(arg1(dependencyMap[7]).t.GHOBdx);
        const intl6 = arg1(dependencyMap[7]).intl;
        obj.confirmText = intl6.string(arg1(dependencyMap[7]).t.HbTSE6);
        obj.onConfirm = function onConfirm() {
          const result = callback(closure_3[8]).openClaimAccountModal();
        };
        showAlert(obj);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      arg1(dependencyMap[4]).closeContextMenu();
      importDefault(dependencyMap[6])();
      const obj3 = arg1(dependencyMap[4]);
    } else {
      if (!obj5.isLimitedAccessErrorCode(status, num)) {
        if (num !== constants.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (arg1 === obj.SHOW_ALWAYS) {
            if (null != substr) {
              obj = arg1(dependencyMap[10]);
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = obj.humanizeAbortCode(num, substr);
            } else {
              const intl = arg1(dependencyMap[7]).intl;
              humanizeAbortCodeResult = intl.string(arg1(dependencyMap[7]).t.paDJBM);
            }
            const obj1 = {};
            const intl2 = arg1(dependencyMap[7]).intl;
            obj1.title = intl2.string(arg1(dependencyMap[7]).t.6moJ8s);
            obj1.body = humanizeAbortCodeResult;
            const intl3 = arg1(dependencyMap[7]).intl;
            obj1.confirmText = intl3.string(arg1(dependencyMap[7]).t.BddRzS);
            showAlert(obj1);
          }
        }
      }
      const obj5 = arg1(dependencyMap[9]);
    }
  }
  throw arg0;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ Endpoints: closure_6, AbortCodes: closure_7, RelationshipTypes: closure_8 } = arg1(dependencyMap[2]));
const ClearFriendRequestFilters = arg1(dependencyMap[3]).ClearFriendRequestFilters;
let obj = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
obj = {
  sendRequest(discordTag) {
    let captchaPayload;
    let context;
    let errorUxConfig;
    let note;
    let tmp3;
    let tmp4;
    const arg1 = str;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    const importDefault = errorUxConfig;
    [tmp3, tmp4] = callback(discordTag.discordTag.split("#"), 2);
    const HTTP = arg1(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIPS() };
    obj = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    obj.body = obj;
    obj.context = context;
    obj.oldFormErrors = true;
    const tmp2 = callback(discordTag.discordTag.split("#"), 2);
    obj.rejectWithError = arg1(dependencyMap[11]).rejectWithMigratedError();
    const obj3 = arg1(dependencyMap[11]);
    return HTTP.post(obj).catch((arg0) => {
      callback(arg0, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    let captchaPayload;
    let confirmStrangerRequest;
    let context;
    let fromFriendSuggestion;
    let type;
    let userId;
    let SHOW_ALWAYS = arg2;
    ({ userId, captchaPayload } = arg0);
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      SHOW_ALWAYS = obj.SHOW_ALWAYS;
    }
    const importDefault = SHOW_ALWAYS;
    let user2;
    user2 = user.getUser(userId);
    const HTTP = arg1(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIP(userId) };
    obj = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj.body = obj;
    obj.context = context;
    obj.oldFormErrors = true;
    obj.rejectWithError = arg1(dependencyMap[11]).rejectWithMigratedError();
    const obj3 = arg1(dependencyMap[11]);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      if (null != arg1) {
        arg1();
      }
    }).catch((arg0) => {
      callback(arg0, SHOW_ALWAYS, SHOW_ALWAYS(closure_3[12]).getUserTag(closure_2));
      return Promise.reject(arg0);
    });
  },
  acceptFriendRequest(arg0) {
    return obj.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.3goNa5));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    const obj = { userId, context, type: constants2.BLOCKED };
    return obj.addRelationship(obj, () => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.9t1au7));
    });
  },
  removeRelationship(userId, context) {
    context = arg2;
    const HTTP = context(dependencyMap[11]).HTTP;
    const obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: context(dependencyMap[11]).rejectWithMigratedError() };
    const obj2 = context(dependencyMap[11]);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (null != arg2) {
        arg2();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = arg2(closure_3[13]).AccessibilityAnnouncer;
      const intl = arg2(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(arg2(closure_3[7]).t.n6Jo3E));
    });
  },
  updateRelationship(userId, nickname) {
    const HTTP = nickname(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIP(userId), body: obj };
    obj = { nickname, rejectWithError: nickname(dependencyMap[11]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  fetchRelationships() {
    const HTTP = arg1(dependencyMap[11]).HTTP;
    const obj = { y: null, isArray: null, accessible: null, url: closure_6.USER_RELATIONSHIPS() };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = callback(closure_3[14]);
      obj = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
      return obj.dispatch(obj);
    }, () => callback(closure_3[14]).dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    importDefault(dependencyMap[15])(arg0);
  },
  clearPendingRelationships() {
    const HTTP = arg1(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj };
    obj = { relationship_type: constants2.PENDING_INCOMING, rejectWithError: arg1(dependencyMap[11]).rejectWithMigratedError() };
    const obj3 = arg1(dependencyMap[11]);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      callback2(closure_3[14]).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = arg1(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj, body: { filters: items } };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    const items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj.rejectWithError = arg1(dependencyMap[11]).rejectWithMigratedError();
    const obj3 = arg1(dependencyMap[11]);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      callback2(closure_3[14]).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = callback(closure_3[13]).AccessibilityAnnouncer;
      const intl = callback(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_3[7]).t.n6Jo3E));
    });
  },
  ignoreUser(closure_3, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    IGNORE_CONFIRMATION_ACTION_SHEET = closure_3;
    const importDefault = channelId;
    const HTTP = IGNORE_CONFIRMATION_ACTION_SHEET(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.IGNORE_USER(closure_3), context: obj };
    obj = { location: IGNORE_CONFIRMATION_ACTION_SHEET, rejectWithError: IGNORE_CONFIRMATION_ACTION_SHEET(dependencyMap[11]).rejectWithMigratedError() };
    const obj3 = IGNORE_CONFIRMATION_ACTION_SHEET(dependencyMap[11]);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      let obj = arg2(closure_3[16]);
      const result = obj.showIgnoreSuccessToast(arg0, arg2);
      const AccessibilityAnnouncer = arg0(closure_3[13]).AccessibilityAnnouncer;
      const intl = arg0(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(arg0(closure_3[7]).t.Us93Ca));
      obj = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: arg0, timestamp: Date.now() };
      arg2(closure_3[14]).dispatch(obj);
    }).catch(() => {
      arg2(closure_3[16]).showFailedToast();
      const AccessibilityAnnouncer = arg0(closure_3[13]).AccessibilityAnnouncer;
      const intl = arg0(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(arg0(closure_3[7]).t.n6Jo3E));
    });
  },
  unignoreUser(closure_3, UserProfileRemediatedNotice, id) {
    UserProfileRemediatedNotice = closure_3;
    const importDefault = id;
    const HTTP = UserProfileRemediatedNotice(dependencyMap[11]).HTTP;
    let obj = { url: closure_6.IGNORE_USER(closure_3), context: obj };
    obj = { location: UserProfileRemediatedNotice, rejectWithError: UserProfileRemediatedNotice(dependencyMap[11]).rejectWithMigratedError() };
    const obj3 = UserProfileRemediatedNotice(dependencyMap[11]);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      const result = arg2(closure_3[16]).showUnignoreSuccessToast(arg0, arg2);
      const AccessibilityAnnouncer = arg0(closure_3[13]).AccessibilityAnnouncer;
      const intl = arg0(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(arg0(closure_3[7]).t.QlH5w6));
    }).catch(() => {
      arg2(closure_3[16]).showFailedToast();
      const AccessibilityAnnouncer = arg0(closure_3[13]).AccessibilityAnnouncer;
      const intl = arg0(closure_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(arg0(closure_3[7]).t.n6Jo3E));
    });
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj;
export const RelationshipErrorUXConfig = obj;
