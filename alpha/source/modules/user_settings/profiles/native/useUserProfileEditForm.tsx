// Module ID: 15827
// Function ID: 15828
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 32, 19, 8647, 7701, 1392, 1087, 558, 576, 504, 7076, 15828, 11181, 7083, 7086, 15829, 6372, 1128, 8654, 584, 15830, 8668, 8684, 14379, 4797, 15135, 2]

// Module 15827 (useUserProfileEditForm)
import Constants from "Constants" /* 1087 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8647 */;
import UserProfileStore from "UserProfileStore" /* 7701 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c7, c8, isSubmitting;

let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileEditForm() {
  let errors;
  let isWaitingForHexagonCampaignEnrollment;
  let pendingChanges;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tryItOutChanges;
  let tmp = pendingChanges;
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]);
  const cResult = obj.c(21);
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
  const tmpResult = tmp(isWaitingForHexagonCampaignEnrollment[10]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, ];
    items1[1] = UserProfileSettingsStore;
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp9 = S;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(isWaitingForHexagonCampaignEnrollment[10]);
  const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  let obj4 = react;
  [isWaitingForHexagonCampaignEnrollment, closure_3] = react.useState(false);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return pendingChanges(first[11]).resetAllPending;
      }
    }
    const items2 = [];
    cResult[4] = I;
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    tmp16 = items2;
    tmp15 = I;
  } else {
    class I {
      constructor() {
        return pendingChanges(first[11]).resetAllPending;
      }
    }
    tmp16 = cResult[5];
  }
  const effect = obj4.useEffect(tmp15, tmp16);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        return pendingChanges(first[11]).resetAllPending;
      }
    }
    if (cResult[9] === stateFromStores) {
      class I {
        constructor() {
          return pendingChanges(first[11]).resetAllPending;
        }
      }
      const tmp22 = undefined !== pendingAvatarDecoration;
      if (cResult[12] === errors) {
        class I {
          constructor() {
            return pendingChanges(first[11]).resetAllPending;
          }
        }
      }
      let obj2 = { hasAvatarDecorationEdits: null, errors, isSubmitting: tmp21, isWaitingForHexagonCampaignEnrollment, handleSubmit: tmp18, handleSubmitAvatarDecoration: tmp19, resetPending: tmp(tmp2[11]).resetAllPending };
      class S {
        constructor() {
          isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
          return isSubmitting;
        }
      }
      let tmp24 = obj2;
      const merged = Object.assign(pendingChanges);
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp18;
      cResult[14] = tmp19;
      cResult[15] = tmp22;
      cResult[16] = isWaitingForHexagonCampaignEnrollment;
      cResult[17] = pendingChanges;
      cResult[18] = stateFromStores || isWaitingForHexagonCampaignEnrollment;
      cResult[19] = tryItOutChanges;
      cResult[20] = obj2;
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
                obj3 = tmp(isWaitingForHexagonCampaignEnrollment[11]);
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
              const obj = tmp(isWaitingForHexagonCampaignEnrollment[11]);
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
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = pendingChanges.pendingAvatarDecoration;
    cResult[11] = t7;
    tmp19 = t7;
  }
  closure_0 = _asyncToGenerator(async function(arg0, value) {
    let assetOrigin;
    let obj11;
    let obj30;
    let obj34;
    let obj37;
    let obj39;
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
        let _false;
        let _false2;
        let _false3;
        let closure_7;
        let body;
        let bannerOriginalMd5;
        let closure_10;
        let firstFieldErrorMessage2;
        let closure_13;
        let closure_14;
        let id;
        let primaryGuildId;
        let closure_17;
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
            let closure_5 = tmp;
            closure_0 = undefined;
            _false = undefined;
            _false2 = undefined;
            _false3 = undefined;
            value = undefined;
            c6 = undefined;
            closure_7 = undefined;
            body = undefined;
            bannerOriginalMd5 = undefined;
            closure_10 = undefined;
            currentUser = undefined;
            firstFieldErrorMessage2 = undefined;
            closure_13 = undefined;
            closure_14 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_17 = undefined;
            firstFieldErrorMessage3 = undefined;
            const tmp236 = c1;
            if (!tmp236) {
              const tmp124 = c2;
              if (!tmp124) {
                const obj25 = closure_0(isWaitingForHexagonCampaignEnrollment[12]);
                const pendingHexagonCampaignEnrollment = obj25.getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  _false3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_0 = value;
              _false3(false);
              const tmp123 = closure_0;
              if (!tmp123) {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_7 = value;
              let ok;
              if (closure_7 != null) {
                ok = closure_7.ok;
              }
              if (ok) {
                body = tmp84.body;
                if (undefined !== _false.pendingAvatar) {
                  const obj10 = { avatarHash: body.avatar, avatarId: _false2.avatarId, avatarAssetOrigin: assetOrigin };
                  const pendingAvatar = _false.pendingAvatar;
                  assetOrigin = undefined;
                  const trackUserAvatarUpdated = closure_0(isWaitingForHexagonCampaignEnrollment[14]).trackUserAvatarUpdated;
                  const tmp105 = closure_0(isWaitingForHexagonCampaignEnrollment[14]);
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  const result = trackUserAvatarUpdated(obj10);
                }
                const obj22 = closure_0(isWaitingForHexagonCampaignEnrollment[11]);
                const result1 = obj22.resetPendingAccountChanges();
              } else {
                let username;
                if (closure_7 != null) {
                  body = tmp84.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const obj20 = closure_0(isWaitingForHexagonCampaignEnrollment[15]);
                  const result2 = obj20.showInvalidUsernameToast();
                  c6 = true;
                } else {
                  let avatar;
                  if (closure_7 != null) {
                    const body2 = closure_7.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const showGenericProfileUpdateFailureToast2 = closure_0(isWaitingForHexagonCampaignEnrollment[16]).showGenericProfileUpdateFailureToast;
                    const self5 = this;
                    const self6 = this;
                    const tmp230 = closure_0(isWaitingForHexagonCampaignEnrollment[16]);
                    const aPIError = new closure_0(isWaitingForHexagonCampaignEnrollment[17]).APIError(closure_7);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    closure_0 = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = closure_0(isWaitingForHexagonCampaignEnrollment[18]).intl;
                      closure_0 = intl.string(closure_0(isWaitingForHexagonCampaignEnrollment[18]).t["84MExs"]);
                    }
                    const result3 = showGenericProfileUpdateFailureToast2(closure_0);
                    c6 = true;
                  }
                }
              }
              let tmp116 = value;
              if (tmp116) {
                let ok1;
                if (closure_7 != null) {
                  ok1 = closure_7.ok;
                }
                c1 = ok1;
                if (ok1 == null) {
                  c1 = false;
                }
                tmp116 = c1;
              }
              value = tmp116;
              const _Object2 = Object;
              if (Object.keys(_false3).length > 0) {
                bannerOriginalMd5 = _false3.bannerOriginalMd5;
                closure_10 = _objectWithoutProperties(_false3, closure_2_3);
                c7 = 3;
                c8 = 1;
                const obj12 = { value: obj37.saveProfileChanges(closure_10, undefined, bannerOriginalMd5), done: false };
                obj37 = closure_0(isWaitingForHexagonCampaignEnrollment[19]);
                return obj12;
              } else {
                if (undefined === _false.pendingBadgeDisplayOrder) {
                  if (undefined === _false.pendingBadgeHiddenBadges) {
                    if (undefined !== _false.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = closure_0(isWaitingForHexagonCampaignEnrollment[25]).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj14 = { value: LegacyUsernameDisabled.updateSetting(_false.pendingLegacyUsernameDisabled), done: false };
                      return obj14;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp177 = 0 === Object.keys(_false2).length;
                if (tmp177) {
                  const _Object5 = Object;
                  tmp177 = 0 === Object.keys(_false3).length;
                }
                if (tmp177) {
                  const _Object6 = Object;
                  tmp177 = 0 === Object.keys(primaryGuildId).length;
                }
                if (tmp177) {
                  tmp177 = undefined === _false.pendingLegacyUsernameDisabled;
                }
                closure_13 = tmp177;
                const tmp185 = closure_13;
                if (tmp185) {
                  const obj33 = stateFromStores(isWaitingForHexagonCampaignEnrollment[20]);
                  obj33.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                }
                const obj15 = { displayOrder: _false.pendingBadgeDisplayOrder, hiddenBadges: _false.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj16 = { value: obj34.updateBadgeSettings(obj15), done: false };
                obj34 = closure_0(isWaitingForHexagonCampaignEnrollment[21]);
                return obj16;
              }
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              currentUser = value;
              let ok2;
              if (currentUser != null) {
                ok2 = currentUser.ok;
              }
              if (ok2) {
                const obj18 = closure_0(isWaitingForHexagonCampaignEnrollment[19]);
                const result4 = obj18.resetPendingProfileChanges();
              } else {
                const self3 = this;
                const self4 = this;
                const aPIError1 = new closure_0(isWaitingForHexagonCampaignEnrollment[17]).APIError(currentUser);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj17 = closure_0(isWaitingForHexagonCampaignEnrollment[16]);
                  const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c6 = true;
                }
              }
              let tmp79 = value;
              if (tmp79) {
                let ok3;
                if (currentUser != null) {
                  ok3 = currentUser.ok;
                }
                c2 = ok3;
                if (ok3 == null) {
                  c2 = false;
                }
                tmp79 = c2;
              }
              value = tmp79;
            }
          } else {
            if (4 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj21 = { value, done: true };
                return obj21;
              } else {
                closure_14 = value;
                const tmp222 = closure_14;
                if (tmp222) {
                  currentUser = currentUser.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  if (null != id) {
                    const obj13 = closure_0(isWaitingForHexagonCampaignEnrollment[22]);
                    const profile = obj13.fetchProfile(id);
                    c7 = 5;
                    c8 = 1;
                    const obj23 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj23;
                  }
                } else {
                  const tmp37 = closure_13;
                  if (tmp37) {
                    let obj24;
                    const dispatch = stateFromStores(isWaitingForHexagonCampaignEnrollment[20]).dispatch;
                    const tmp41 = stateFromStores(isWaitingForHexagonCampaignEnrollment[20]);
                    if (closure_14) {
                      obj24 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                    } else {
                      obj24 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                    }
                    dispatch(obj24);
                  }
                  const tmp45 = value && closure_14;
                  value = tmp45;
                }
              }
            } else if (5 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj29 = { value, done: true };
                return obj29;
              }
            } else if (6 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj31 = { value, done: true };
                return obj31;
              } else {
                const obj7 = closure_0(isWaitingForHexagonCampaignEnrollment[24]);
                const result6 = obj7.resetPendingBadgeSettings();
              }
            } else if (7 === c7) {
              c6 = 0;
              value = false;
            } else {
              if (8 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj32 = { value, done: true };
                  return obj32;
                } else {
                  const obj5 = closure_0(isWaitingForHexagonCampaignEnrollment[11]);
                  const result7 = obj5.resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj35 = { value, done: true };
                return obj35;
              } else {
                closure_17 = value;
                let ok4;
                if (closure_17 != null) {
                  ok4 = closure_17.ok;
                }
                if (ok4) {
                  const obj3 = closure_0(isWaitingForHexagonCampaignEnrollment[11]);
                  const result8 = obj3.resetPendingPrimaryGuildChanges();
                } else {
                  const self = this;
                  const self2 = this;
                  const aPIError2 = new closure_0(isWaitingForHexagonCampaignEnrollment[17]).APIError(closure_17);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const obj2 = closure_0(isWaitingForHexagonCampaignEnrollment[16]);
                    const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    c6 = true;
                  }
                }
                let tmp24 = value;
                if (tmp24) {
                  let ok5;
                  if (closure_17 != null) {
                    ok5 = closure_17.ok;
                  }
                  _false3 = ok5;
                  if (ok5 == null) {
                    _false3 = false;
                  }
                  tmp24 = _false3;
                }
                value = tmp24;
              }
              const tmp153 = value || c6;
              if (!tmp153) {
                const showGenericProfileUpdateFailureToast = closure_0(isWaitingForHexagonCampaignEnrollment[16]).showGenericProfileUpdateFailureToast;
                const tmp157 = closure_0(isWaitingForHexagonCampaignEnrollment[16]);
                const intl2 = closure_0(isWaitingForHexagonCampaignEnrollment[18]).intl;
                const result10 = showGenericProfileUpdateFailureToast(intl2.string(closure_0(isWaitingForHexagonCampaignEnrollment[18]).t["84MExs"]));
              }
              c8 = 3;
              const obj36 = { value, done: true };
              return obj36;
            }
            c7 = 6;
            c8 = 1;
            const obj38 = { value: obj11.fetchBadgeDirectory(), done: false };
            obj11 = closure_0(isWaitingForHexagonCampaignEnrollment[23]);
            return obj38;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildId).length > 0) {
            primaryGuildId = primaryGuildId.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj40 = { value: obj30.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              obj30 = closure_0(isWaitingForHexagonCampaignEnrollment[26]);
              return obj40;
            }
          }
        }
        _false = pendingChanges.getPendingChanges();
        const obj26 = closure_0(isWaitingForHexagonCampaignEnrollment[13]);
        _false2 = obj26.getAccountUpdateForUpdateRequest(_false);
        const obj27 = closure_0(isWaitingForHexagonCampaignEnrollment[13]);
        _false3 = obj27.getProfileChangesForUpdateRequest(_false);
        const obj28 = closure_0(isWaitingForHexagonCampaignEnrollment[13]);
        primaryGuildId = obj28.getPrimaryGuildChangesForUpdateRequest(_false);
        value = true;
        c6 = false;
        const _Object = Object;
        if (Object.keys(_false2).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj41 = { value: obj39.saveProfileAndAccountChanges(_false2), done: false };
          obj39 = closure_0(isWaitingForHexagonCampaignEnrollment[11]);
          return obj41;
        }
      } catch (tmp213) {
        if (0 === c6) {
          c8 = 3;
          throw tmp213;
        } else {
          c7 = 7;
        }
      }
    }
  });
  function t6() {
    return closure_0(...arguments);
  }
  cResult[6] = stateFromStores;
  cResult[7] = isWaitingForHexagonCampaignEnrollment;
  cResult[8] = t6;
}) : (function useUserProfileEditForm() {
  let callback1;
  let errors;
  let isWaitingForHexagonCampaignEnrollment;
  let pendingChanges;
  let tryItOutChanges;
  const tmp = pendingChanges;
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
    return isSubmitting;
  });
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  [isWaitingForHexagonCampaignEnrollment, closure_3] = react.useState(false);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  const effect = react.useEffect(() => pendingChanges(first[11]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = react.useCallback(_asyncToGenerator(async function(arg0, value) {
    let assetOrigin;
    let closure_0;
    let obj11;
    let obj30;
    let obj34;
    let obj37;
    let obj39;
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
        let _false;
        let _false2;
        let _false3;
        let closure_7;
        let body;
        let bannerOriginalMd5;
        let closure_10;
        let currentUser;
        let firstFieldErrorMessage2;
        let closure_13;
        let closure_14;
        let id;
        let primaryGuildId;
        let closure_17;
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
            pendingChanges = undefined;
            _false = undefined;
            _false2 = undefined;
            _false3 = undefined;
            value = undefined;
            c6 = undefined;
            closure_7 = undefined;
            body = undefined;
            bannerOriginalMd5 = undefined;
            closure_10 = undefined;
            currentUser = undefined;
            firstFieldErrorMessage2 = undefined;
            closure_13 = undefined;
            closure_14 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_17 = undefined;
            firstFieldErrorMessage3 = undefined;
            const tmp236 = stateFromStores;
            if (!tmp236) {
              const tmp124 = first;
              if (!tmp124) {
                const obj25 = pendingChanges(_false2[12]);
                const pendingHexagonCampaignEnrollment = obj25.getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  _false3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              pendingChanges = value;
              closure_133_3(false);
              const tmp123 = pendingChanges;
              if (!tmp123) {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_7 = value;
              let ok;
              if (closure_7 != null) {
                ok = closure_7.ok;
              }
              if (ok) {
                body = tmp84.body;
                if (undefined !== _false.pendingAvatar) {
                  const obj10 = { avatarHash: body.avatar, avatarId: _false2.avatarId, avatarAssetOrigin: assetOrigin };
                  const pendingAvatar = _false.pendingAvatar;
                  assetOrigin = undefined;
                  const trackUserAvatarUpdated = pendingChanges(_false2[14]).trackUserAvatarUpdated;
                  const tmp105 = pendingChanges(_false2[14]);
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  const result = trackUserAvatarUpdated(obj10);
                }
                const obj22 = pendingChanges(_false2[11]);
                const result1 = obj22.resetPendingAccountChanges();
              } else {
                let username;
                if (closure_7 != null) {
                  body = tmp84.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const obj20 = pendingChanges(_false2[15]);
                  const result2 = obj20.showInvalidUsernameToast();
                  c6 = true;
                } else {
                  let avatar;
                  if (closure_7 != null) {
                    const body2 = closure_7.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const showGenericProfileUpdateFailureToast2 = pendingChanges(_false2[16]).showGenericProfileUpdateFailureToast;
                    const self5 = this;
                    const self6 = this;
                    const tmp230 = pendingChanges(_false2[16]);
                    const aPIError = new pendingChanges(_false2[17]).APIError(closure_7);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(_false2[18]).intl;
                      pendingChanges = intl.string(pendingChanges(_false2[18]).t["84MExs"]);
                    }
                    const result3 = showGenericProfileUpdateFailureToast2(pendingChanges);
                    c6 = true;
                  }
                }
              }
              let tmp116 = value;
              if (tmp116) {
                let ok1;
                if (closure_7 != null) {
                  ok1 = closure_7.ok;
                }
                _false = ok1;
                if (ok1 == null) {
                  _false = false;
                }
                tmp116 = _false;
              }
              value = tmp116;
              const _Object2 = Object;
              if (Object.keys(_false3).length > 0) {
                bannerOriginalMd5 = _false3.bannerOriginalMd5;
                closure_10 = value(_false3, primaryGuildId);
                c7 = 3;
                c8 = 1;
                const obj12 = { value: obj37.saveProfileChanges(closure_10, undefined, bannerOriginalMd5), done: false };
                obj37 = pendingChanges(_false2[19]);
                return obj12;
              } else {
                if (undefined === _false.pendingBadgeDisplayOrder) {
                  if (undefined === _false.pendingBadgeHiddenBadges) {
                    if (undefined !== _false.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = pendingChanges(_false2[25]).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj14 = { value: LegacyUsernameDisabled.updateSetting(_false.pendingLegacyUsernameDisabled), done: false };
                      return obj14;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp177 = 0 === Object.keys(_false2).length;
                if (tmp177) {
                  const _Object5 = Object;
                  tmp177 = 0 === Object.keys(_false3).length;
                }
                if (tmp177) {
                  const _Object6 = Object;
                  tmp177 = 0 === Object.keys(primaryGuildId).length;
                }
                if (tmp177) {
                  tmp177 = undefined === _false.pendingLegacyUsernameDisabled;
                }
                closure_13 = tmp177;
                const tmp185 = closure_13;
                if (tmp185) {
                  const obj33 = _false(_false2[20]);
                  obj33.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                }
                const obj15 = { displayOrder: _false.pendingBadgeDisplayOrder, hiddenBadges: _false.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj16 = { value: obj34.updateBadgeSettings(obj15), done: false };
                obj34 = pendingChanges(_false2[21]);
                return obj16;
              }
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              currentUser = value;
              let ok2;
              if (currentUser != null) {
                ok2 = currentUser.ok;
              }
              if (ok2) {
                const obj18 = pendingChanges(_false2[19]);
                const result4 = obj18.resetPendingProfileChanges();
              } else {
                const self3 = this;
                const self4 = this;
                const aPIError1 = new pendingChanges(_false2[17]).APIError(currentUser);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj17 = pendingChanges(_false2[16]);
                  const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c6 = true;
                }
              }
              let tmp79 = value;
              if (tmp79) {
                let ok3;
                if (currentUser != null) {
                  ok3 = currentUser.ok;
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
            if (4 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj21 = { value, done: true };
                return obj21;
              } else {
                closure_14 = value;
                const tmp222 = closure_14;
                if (tmp222) {
                  currentUser = currentUser.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  if (null != id) {
                    const obj13 = pendingChanges(_false2[22]);
                    const profile = obj13.fetchProfile(id);
                    c7 = 5;
                    c8 = 1;
                    const obj23 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj23;
                  }
                } else {
                  const tmp37 = closure_13;
                  if (tmp37) {
                    let obj24;
                    const dispatch = _false(_false2[20]).dispatch;
                    const tmp41 = _false(_false2[20]);
                    if (closure_14) {
                      obj24 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                    } else {
                      obj24 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                    }
                    dispatch(obj24);
                  }
                  const tmp45 = value && closure_14;
                  value = tmp45;
                }
              }
            } else if (5 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj29 = { value, done: true };
                return obj29;
              }
            } else if (6 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj31 = { value, done: true };
                return obj31;
              } else {
                const obj7 = pendingChanges(_false2[24]);
                const result6 = obj7.resetPendingBadgeSettings();
              }
            } else if (7 === c7) {
              c6 = 0;
              value = false;
            } else {
              if (8 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj32 = { value, done: true };
                  return obj32;
                } else {
                  const obj5 = pendingChanges(_false2[11]);
                  const result7 = obj5.resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj35 = { value, done: true };
                return obj35;
              } else {
                closure_17 = value;
                let ok4;
                if (closure_17 != null) {
                  ok4 = closure_17.ok;
                }
                if (ok4) {
                  const obj3 = pendingChanges(_false2[11]);
                  const result8 = obj3.resetPendingPrimaryGuildChanges();
                } else {
                  const self = this;
                  const self2 = this;
                  const aPIError2 = new pendingChanges(_false2[17]).APIError(closure_17);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const obj2 = pendingChanges(_false2[16]);
                    const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    c6 = true;
                  }
                }
                let tmp24 = value;
                if (tmp24) {
                  let ok5;
                  if (closure_17 != null) {
                    ok5 = closure_17.ok;
                  }
                  let c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp24 = c3;
                }
                value = tmp24;
              }
              const tmp153 = value || c6;
              if (!tmp153) {
                const showGenericProfileUpdateFailureToast = pendingChanges(_false2[16]).showGenericProfileUpdateFailureToast;
                const tmp157 = pendingChanges(_false2[16]);
                const intl2 = pendingChanges(_false2[18]).intl;
                const result10 = showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(_false2[18]).t["84MExs"]));
              }
              c8 = 3;
              const obj36 = { value, done: true };
              return obj36;
            }
            c7 = 6;
            c8 = 1;
            const obj38 = { value: obj11.fetchBadgeDirectory(), done: false };
            obj11 = pendingChanges(_false2[23]);
            return obj38;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildId).length > 0) {
            primaryGuildId = primaryGuildId.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj40 = { value: obj30.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              obj30 = pendingChanges(_false2[26]);
              return obj40;
            }
          }
        }
        _false = pendingChanges.getPendingChanges();
        const obj26 = pendingChanges(_false2[13]);
        _false2 = obj26.getAccountUpdateForUpdateRequest(_false);
        const obj27 = pendingChanges(_false2[13]);
        _false3 = obj27.getProfileChangesForUpdateRequest(_false);
        const obj28 = pendingChanges(_false2[13]);
        primaryGuildId = obj28.getPrimaryGuildChangesForUpdateRequest(_false);
        value = true;
        c6 = false;
        const _Object = Object;
        if (Object.keys(_false2).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj41 = { value: obj39.saveProfileAndAccountChanges(_false2), done: false };
          obj39 = pendingChanges(_false2[11]);
          return obj41;
        }
      } catch (tmp213) {
        if (0 === c6) {
          c8 = 3;
          throw tmp213;
        } else {
          c7 = 7;
        }
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = { hasAvatarDecorationEdits: undefined !== pendingAvatarDecoration, errors, isSubmitting: stateFromStores, isWaitingForHexagonCampaignEnrollment, handleSubmit: callback, handleSubmitAvatarDecoration: callback1, resetPending: tmp(tmp2[11]).resetAllPending };
  callback1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
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
        if (0 === isWaitingForHexagonCampaignEnrollment) {
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
              const obj3 = tmp4(isWaitingForHexagonCampaignEnrollment[11]);
              isWaitingForHexagonCampaignEnrollment = 1;
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
            const obj = tmp4(isWaitingForHexagonCampaignEnrollment[11]);
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
  }), items3);
  if (!stateFromStores) {
    stateFromStores = isWaitingForHexagonCampaignEnrollment;
  }
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default tmp2;
