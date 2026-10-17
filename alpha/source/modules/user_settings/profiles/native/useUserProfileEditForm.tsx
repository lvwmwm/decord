// Module ID: 15621
// Function ID: 15622
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 19, 8558, 7586, 1392, 1087, 558, 576, 504, 6948, 10949, 6955, 6958, 15622, 5891, 1128, 8565, 584, 15623, 8579, 8595, 14168, 2044, 14925, 2]

// Module 15621 (useUserProfileEditForm)
import Constants from "Constants" /* 1087 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8558 */;
import UserProfileStore from "UserProfileStore" /* 7586 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c7, c8, isSubmitting;

let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileEditForm() {
  let errors;
  let pendingChanges;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tryItOutChanges;
  let tmp = pendingChanges;
  let obj = pendingChanges(576);
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function y() {
      const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, ];
    items1[1] = UserProfileSettingsStore;
    class P {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    tmp9 = P;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return pendingChanges(dependencyMap[10]).resetAllPending;
      }
    }
    const items2 = [];
    cResult[4] = I;
    class P {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    tmp14 = items2;
    tmp13 = I;
  } else {
    class I {
      constructor() {
        return pendingChanges(dependencyMap[10]).resetAllPending;
      }
    }
    tmp14 = cResult[5];
  }
  const effect = react.useEffect(tmp13, tmp14);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        return pendingChanges(dependencyMap[10]).resetAllPending;
      }
    }
    if (cResult[9] === stateFromStores) {
      class I {
        constructor() {
          return pendingChanges(dependencyMap[10]).resetAllPending;
        }
      }
      let tmp19 = undefined !== pendingAvatarDecoration;
      if (cResult[12] === errors) {
        class I {
          constructor() {
            return pendingChanges(dependencyMap[10]).resetAllPending;
          }
        }
      }
      let obj2 = { hasAvatarDecorationEdits: tmp19, errors: null, isSubmitting: stateFromStores, handleSubmit: tmp16, handleSubmitAvatarDecoration: tmp17, resetPending: tmp(6948).resetAllPending };
      class P {
        constructor() {
          isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
          return isSubmitting;
        }
      }
      const merged = Object.assign(pendingChanges);
      let tmp24 = obj2;
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp16;
      cResult[14] = tmp17;
      cResult[15] = tmp19;
      cResult[16] = stateFromStores;
      cResult[17] = pendingChanges;
      cResult[18] = tryItOutChanges;
      cResult[19] = obj2;
    }
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              const tmp19 = closure_1;
              if (!tmp19) {
                const obj5 = { avatarDecoration: tmp.pendingAvatarDecoration };
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
                obj3 = tmp(dependencyMap[10]);
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            let ok;
            if (tmp != null) {
              ok = tmp.ok;
            }
            if (ok) {
              const obj = tmp(dependencyMap[10]);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    function t7() {
      return closure_0(...arguments);
    }
    class P {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = pendingChanges.pendingAvatarDecoration;
    cResult[11] = t7;
  }
  closure_0 = _asyncToGenerator(async function(arg0, value) {
    let assetOrigin;
    let closure_5;
    let obj11;
    let obj28;
    let obj32;
    let obj35;
    let obj37;
    let tmp196;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let accountUpdateForUpdateRequest;
        let _false2;
        let c4;
        let tmp;
        let body;
        let closure_9;
        let firstFieldErrorMessage2;
        let closure_11;
        let closure_12;
        let id;
        let primaryGuildId;
        let closure_15;
        let firstFieldErrorMessage3;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp196;
            accountUpdateForUpdateRequest = undefined;
            let _false;
            _false2 = undefined;
            value = undefined;
            c4 = undefined;
            tmp = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            closure_9 = undefined;
            firstFieldErrorMessage2 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_15 = undefined;
            firstFieldErrorMessage3 = undefined;
            const tmp218 = c1;
            if (tmp218) {
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj24 = closure_0(dependencyMap[11]);
              accountUpdateForUpdateRequest = obj24.getAccountUpdateForUpdateRequest(closure_0);
              const obj25 = closure_0(dependencyMap[11]);
              _false = obj25.getProfileChangesForUpdateRequest(closure_0);
              const obj26 = closure_0(dependencyMap[11]);
              _false2 = obj26.getPrimaryGuildChangesForUpdateRequest(closure_0);
              value = true;
              c4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c7 = 1;
                c8 = 1;
                const obj6 = { value: obj37.saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                obj37 = closure_0(dependencyMap[10]);
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(_false).length > 0) {
                  bannerOriginalMd5 = _false.bannerOriginalMd5;
                  closure_8 = _objectWithoutProperties(_false, closure_2_3);
                  c7 = 2;
                  c8 = 1;
                  const obj8 = { value: obj35.saveProfileChanges(closure_8, undefined, bannerOriginalMd5), done: false };
                  obj35 = closure_0(dependencyMap[17]);
                  return obj8;
                } else {
                  if (undefined === closure_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_0.pendingLegacyUsernameDisabled) {
                        c6 = 1;
                        const LegacyUsernameDisabled = closure_0(dependencyMap[23]).LegacyUsernameDisabled;
                        c7 = 7;
                        c8 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp165 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                  if (tmp165) {
                    const _Object5 = Object;
                    tmp165 = 0 === Object.keys(_false).length;
                  }
                  if (tmp165) {
                    const _Object6 = Object;
                    tmp165 = 0 === Object.keys(_false2).length;
                  }
                  if (tmp165) {
                    tmp165 = undefined === closure_0.pendingLegacyUsernameDisabled;
                  }
                  closure_11 = tmp165;
                  const tmp173 = closure_11;
                  if (tmp173) {
                    const obj31 = stateFromStores(dependencyMap[18]);
                    obj31.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  }
                  const obj10 = { displayOrder: closure_0.pendingBadgeDisplayOrder, hiddenBadges: closure_0.pendingBadgeHiddenBadges };
                  c7 = 3;
                  c8 = 1;
                  const obj12 = { value: obj32.updateBadgeSettings(obj10), done: false };
                  obj32 = closure_0(dependencyMap[19]);
                  return obj12;
                }
              }
            }
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            tmp = value;
            let ok;
            if (tmp != null) {
              ok = tmp.ok;
            }
            if (ok) {
              body = tmp.body;
              if (undefined !== closure_0.pendingAvatar) {
                const obj15 = { avatarHash: body.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                const pendingAvatar = closure_0.pendingAvatar;
                assetOrigin = undefined;
                const trackUserAvatarUpdated = closure_0(dependencyMap[12]).trackUserAvatarUpdated;
                const tmp106 = closure_0(dependencyMap[12]);
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                const result = trackUserAvatarUpdated(obj15);
              }
              const obj22 = closure_0(dependencyMap[10]);
              const result1 = obj22.resetPendingAccountChanges();
            } else {
              let username;
              if (tmp != null) {
                body = tmp.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const obj20 = closure_0(dependencyMap[13]);
                const result2 = obj20.showInvalidUsernameToast();
                c4 = true;
              } else {
                let avatar;
                if (tmp != null) {
                  const body2 = tmp.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const showGenericProfileUpdateFailureToast2 = closure_0(dependencyMap[14]).showGenericProfileUpdateFailureToast;
                  const self5 = this;
                  const self6 = this;
                  const tmp212 = closure_0(dependencyMap[14]);
                  const aPIError = new closure_0(dependencyMap[15]).APIError(tmp);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  closure_0 = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = closure_0(dependencyMap[16]).intl;
                    closure_0 = intl.string(closure_0(dependencyMap[16]).t["84MExs"]);
                  }
                  const result3 = showGenericProfileUpdateFailureToast2(closure_0);
                  c4 = true;
                }
              }
            }
            let tmp117 = value;
            if (tmp117) {
              let ok1;
              if (tmp != null) {
                ok1 = tmp.ok;
              }
              c1 = ok1;
              if (ok1 == null) {
                c1 = false;
              }
              tmp117 = c1;
            }
            value = tmp117;
          }
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            closure_9 = value;
            let ok2;
            if (closure_9 != null) {
              ok2 = closure_9.ok;
            }
            if (ok2) {
              const obj18 = closure_0(dependencyMap[17]);
              const result4 = obj18.resetPendingProfileChanges();
            } else {
              const self3 = this;
              const self4 = this;
              const aPIError1 = new closure_0(dependencyMap[15]).APIError(closure_9);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const obj17 = closure_0(dependencyMap[14]);
                const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                c4 = true;
              }
            }
            let tmp79 = value;
            if (tmp79) {
              let ok3;
              if (closure_9 != null) {
                ok3 = closure_9.ok;
              }
              let c2 = ok3;
              if (ok3 == null) {
                c2 = false;
              }
              tmp79 = c2;
            }
            value = tmp79;
          }
        } else {
          if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_12 = value;
              const tmp204 = closure_12;
              if (tmp204) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (null != id) {
                  const obj13 = closure_0(dependencyMap[20]);
                  const profile = obj13.fetchProfile(id);
                  c7 = 4;
                  c8 = 1;
                  const obj21 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj21;
                }
              } else {
                const tmp37 = closure_11;
                if (tmp37) {
                  let obj23;
                  const dispatch = stateFromStores(dependencyMap[18]).dispatch;
                  const tmp41 = stateFromStores(dependencyMap[18]);
                  if (closure_12) {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  dispatch(obj23);
                }
                const tmp45 = value && closure_12;
                value = tmp45;
              }
            }
          } else if (4 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          } else if (5 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              const obj7 = closure_0(dependencyMap[22]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
          } else if (6 === c7) {
            c6 = 0;
            value = false;
          } else {
            if (7 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                const obj5 = closure_0(dependencyMap[10]);
                const result7 = obj5.resetPendingLegacyUsernameDisabled();
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_15 = value;
              let ok4;
              if (closure_15 != null) {
                ok4 = closure_15.ok;
              }
              if (ok4) {
                const obj3 = closure_0(dependencyMap[10]);
                const result8 = obj3.resetPendingPrimaryGuildChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError2 = new closure_0(dependencyMap[15]).APIError(closure_15);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const obj2 = closure_0(dependencyMap[14]);
                  const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  c4 = true;
                }
              }
              let tmp24 = value;
              if (tmp24) {
                let ok5;
                if (closure_15 != null) {
                  ok5 = closure_15.ok;
                }
                let c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp24 = c3;
              }
              value = tmp24;
            }
            const tmp142 = value || c4;
            if (!tmp142) {
              const showGenericProfileUpdateFailureToast = closure_0(dependencyMap[14]).showGenericProfileUpdateFailureToast;
              const tmp146 = closure_0(dependencyMap[14]);
              const intl2 = closure_0(dependencyMap[16]).intl;
              const result10 = showGenericProfileUpdateFailureToast(intl2.string(closure_0(dependencyMap[16]).t["84MExs"]));
            }
            c8 = 3;
            const obj34 = { value, done: true };
            return obj34;
          }
          c7 = 5;
          c8 = 1;
          const obj36 = { value: obj11.fetchBadgeDirectory(), done: false };
          obj11 = closure_0(dependencyMap[21]);
          return obj36;
        }
        const _Object3 = Object;
        if (Object.keys(_false2).length > 0) {
          primaryGuildId = _false2.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c7 = 8;
            c8 = 1;
            const obj38 = { value: obj28.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            obj28 = closure_0(dependencyMap[24]);
            return obj38;
          }
        }
      } catch (tmp195) {
        tmp196 = c6;
        if (0 === c6) {
          c8 = 3;
          throw tmp195;
        } else {
          c7 = 6;
        }
      }
    }
  });
  function t6() {
    return closure_0(...arguments);
  }
  cResult[6] = stateFromStores;
  cResult[7] = pendingChanges;
  cResult[8] = t6;
}) : (function useUserProfileEditForm() {
  let errors;
  let pendingChanges;
  let tryItOutChanges;
  let obj = pendingChanges(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(504);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
    return isSubmitting;
  });
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  const effect = react.useEffect(() => pendingChanges(dependencyMap[10]).resetAllPending, []);
  const items2 = [stateFromStores, pendingChanges];
  const callback = react.useCallback(_asyncToGenerator(async function(arg0, value) {
    let assetOrigin;
    let closure_0;
    let closure_5;
    let currentUser;
    let obj11;
    let obj28;
    let obj32;
    let obj35;
    let obj37;
    let tmp196;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let accountUpdateForUpdateRequest;
        let _false;
        let _false2;
        let c4;
        let tmp;
        let body;
        let firstFieldErrorMessage2;
        let closure_11;
        let closure_12;
        let id;
        let primaryGuildId;
        let closure_15;
        let firstFieldErrorMessage3;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp196;
            accountUpdateForUpdateRequest = undefined;
            _false = undefined;
            _false2 = undefined;
            value = undefined;
            c4 = undefined;
            tmp = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            isSubmitting = undefined;
            firstFieldErrorMessage2 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_15 = undefined;
            firstFieldErrorMessage3 = undefined;
            const tmp218 = stateFromStores;
            if (tmp218) {
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj24 = pendingChanges(_false2[11]);
              accountUpdateForUpdateRequest = obj24.getAccountUpdateForUpdateRequest(pendingChanges);
              const obj25 = pendingChanges(_false2[11]);
              _false = obj25.getProfileChangesForUpdateRequest(pendingChanges);
              const obj26 = pendingChanges(_false2[11]);
              _false2 = obj26.getPrimaryGuildChangesForUpdateRequest(pendingChanges);
              value = true;
              c4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c7 = 1;
                c8 = 1;
                const obj6 = { value: obj37.saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                obj37 = pendingChanges(_false2[10]);
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(_false).length > 0) {
                  bannerOriginalMd5 = _false.bannerOriginalMd5;
                  closure_8 = tmp(_false, closure_4);
                  c7 = 2;
                  c8 = 1;
                  const obj8 = { value: obj35.saveProfileChanges(closure_8, undefined, bannerOriginalMd5), done: false };
                  obj35 = pendingChanges(_false2[17]);
                  return obj8;
                } else {
                  if (undefined === closure_133_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_133_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_133_0.pendingLegacyUsernameDisabled) {
                        c6 = 1;
                        const LegacyUsernameDisabled = pendingChanges(_false2[23]).LegacyUsernameDisabled;
                        c7 = 7;
                        c8 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_133_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp165 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                  if (tmp165) {
                    const _Object5 = Object;
                    tmp165 = 0 === Object.keys(_false).length;
                  }
                  if (tmp165) {
                    const _Object6 = Object;
                    tmp165 = 0 === Object.keys(_false2).length;
                  }
                  if (tmp165) {
                    tmp165 = undefined === closure_133_0.pendingLegacyUsernameDisabled;
                  }
                  closure_11 = tmp165;
                  const tmp173 = closure_11;
                  if (tmp173) {
                    const obj31 = _false(_false2[18]);
                    obj31.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  }
                  const obj10 = { displayOrder: closure_133_0.pendingBadgeDisplayOrder, hiddenBadges: closure_133_0.pendingBadgeHiddenBadges };
                  c7 = 3;
                  c8 = 1;
                  const obj12 = { value: obj32.updateBadgeSettings(obj10), done: false };
                  obj32 = pendingChanges(_false2[19]);
                  return obj12;
                }
              }
            }
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            tmp = value;
            let ok;
            if (tmp != null) {
              ok = tmp.ok;
            }
            if (ok) {
              body = tmp.body;
              if (undefined !== closure_133_0.pendingAvatar) {
                const obj15 = { avatarHash: body.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                const pendingAvatar = closure_133_0.pendingAvatar;
                assetOrigin = undefined;
                const trackUserAvatarUpdated = pendingChanges(_false2[12]).trackUserAvatarUpdated;
                const tmp106 = pendingChanges(_false2[12]);
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                const result = trackUserAvatarUpdated(obj15);
              }
              const obj22 = pendingChanges(_false2[10]);
              const result1 = obj22.resetPendingAccountChanges();
            } else {
              let username;
              if (tmp != null) {
                body = tmp.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const obj20 = pendingChanges(_false2[13]);
                const result2 = obj20.showInvalidUsernameToast();
                c4 = true;
              } else {
                let avatar;
                if (tmp != null) {
                  const body2 = tmp.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const showGenericProfileUpdateFailureToast2 = pendingChanges(_false2[14]).showGenericProfileUpdateFailureToast;
                  const self5 = this;
                  const self6 = this;
                  const tmp212 = pendingChanges(_false2[14]);
                  const aPIError = new pendingChanges(_false2[15]).APIError(tmp);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  pendingChanges = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = pendingChanges(_false2[16]).intl;
                    pendingChanges = intl.string(pendingChanges(_false2[16]).t["84MExs"]);
                  }
                  const result3 = showGenericProfileUpdateFailureToast2(pendingChanges);
                  c4 = true;
                }
              }
            }
            let tmp117 = value;
            if (tmp117) {
              let ok1;
              if (tmp != null) {
                ok1 = tmp.ok;
              }
              _false = ok1;
              if (ok1 == null) {
                _false = false;
              }
              tmp117 = _false;
            }
            value = tmp117;
          }
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            isSubmitting = value;
            let ok2;
            if (isSubmitting != null) {
              ok2 = isSubmitting.ok;
            }
            if (ok2) {
              const obj18 = pendingChanges(_false2[17]);
              const result4 = obj18.resetPendingProfileChanges();
            } else {
              const self3 = this;
              const self4 = this;
              const aPIError1 = new pendingChanges(_false2[15]).APIError(isSubmitting);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const obj17 = pendingChanges(_false2[14]);
                const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                c4 = true;
              }
            }
            let tmp79 = value;
            if (tmp79) {
              let ok3;
              if (isSubmitting != null) {
                ok3 = isSubmitting.ok;
              }
              _false2 = ok3;
              if (ok3 == null) {
                _false2 = false;
              }
              tmp79 = _false2;
            }
            value = tmp79;
          }
        } else {
          if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_12 = value;
              const tmp204 = closure_12;
              if (tmp204) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (null != id) {
                  const obj13 = pendingChanges(_false2[20]);
                  const profile = obj13.fetchProfile(id);
                  c7 = 4;
                  c8 = 1;
                  const obj21 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj21;
                }
              } else {
                const tmp37 = closure_11;
                if (tmp37) {
                  let obj23;
                  const dispatch = _false(_false2[18]).dispatch;
                  const tmp41 = _false(_false2[18]);
                  if (closure_12) {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  dispatch(obj23);
                }
                const tmp45 = value && closure_12;
                value = tmp45;
              }
            }
          } else if (4 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          } else if (5 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              const obj7 = pendingChanges(_false2[22]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
          } else if (6 === c7) {
            c6 = 0;
            value = false;
          } else {
            if (7 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                const obj5 = pendingChanges(_false2[10]);
                const result7 = obj5.resetPendingLegacyUsernameDisabled();
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_15 = value;
              let ok4;
              if (closure_15 != null) {
                ok4 = closure_15.ok;
              }
              if (ok4) {
                const obj3 = pendingChanges(_false2[10]);
                const result8 = obj3.resetPendingPrimaryGuildChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError2 = new pendingChanges(_false2[15]).APIError(closure_15);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const obj2 = pendingChanges(_false2[14]);
                  const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  c4 = true;
                }
              }
              let tmp24 = value;
              if (tmp24) {
                let ok5;
                if (closure_15 != null) {
                  ok5 = closure_15.ok;
                }
                let c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp24 = c3;
              }
              value = tmp24;
            }
            const tmp142 = value || c4;
            if (!tmp142) {
              const showGenericProfileUpdateFailureToast = pendingChanges(_false2[14]).showGenericProfileUpdateFailureToast;
              const tmp146 = pendingChanges(_false2[14]);
              const intl2 = pendingChanges(_false2[16]).intl;
              const result10 = showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(_false2[16]).t["84MExs"]));
            }
            c8 = 3;
            const obj34 = { value, done: true };
            return obj34;
          }
          c7 = 5;
          c8 = 1;
          const obj36 = { value: obj11.fetchBadgeDirectory(), done: false };
          obj11 = pendingChanges(_false2[21]);
          return obj36;
        }
        const _Object3 = Object;
        if (Object.keys(_false2).length > 0) {
          primaryGuildId = _false2.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c7 = 8;
            c8 = 1;
            const obj38 = { value: obj28.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            obj28 = pendingChanges(_false2[24]);
            return obj38;
          }
        }
      } catch (tmp195) {
        tmp196 = c6;
        if (0 === c6) {
          c8 = 3;
          throw tmp195;
        } else {
          c7 = 6;
        }
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = {
    hasAvatarDecorationEdits: undefined !== pendingAvatarDecoration,
    errors,
    isSubmitting: stateFromStores,
    handleSubmit: callback,
    handleSubmitAvatarDecoration: react.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp4;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              tmp4 = undefined;
              const tmp19 = stateFromStores;
              if (!tmp19) {
                const obj5 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
                const obj3 = tmp4(c2[10]);
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp4 = value;
            let ok;
            if (tmp4 != null) {
              ok = tmp4.ok;
            }
            if (ok) {
              const obj = tmp4(c2[10]);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    }), items3),
    resetPending: pendingChanges(6948).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default tmp2;
