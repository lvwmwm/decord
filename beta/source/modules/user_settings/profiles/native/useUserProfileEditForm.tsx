// Module ID: 14161
// Function ID: 14162
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 19, 7605, 7035, 1372, 1074, 504, 573, 6405, 10551, 6409, 6412, 14162, 7612, 4735, 14163, 7626, 7642, 12658, 2021, 13459, 1115, 2]
// Exports: default

// Module 14161 (useUserProfileEditForm)
import Constants from "Constants" /* 1074 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let c2, c3, c6, c7, closure_12, isSubmitting;

let closure_3 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
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
  const effect = react.useEffect(() => () => {
    const obj = stateFromStores(closure_1_2[8]);
    return obj.wait(pendingChanges(closure_1_2[9]).resetAllPending);
  }, []);
  const items2 = [stateFromStores, pendingChanges];
  const callback = react.useCallback(_asyncToGenerator(async function(arg0, value) {
    let _false;
    let assetOrigin;
    let closure_4;
    let obj11;
    let obj28;
    let obj32;
    let obj35;
    let obj37;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let accountUpdateForUpdateRequest;
        let _false2;
        let _false3;
        let c4;
        let closure_5;
        let body;
        let currentUser;
        let firstFieldErrorMessage;
        let closure_11;
        let id;
        let primaryGuildId;
        let closure_15;
        let firstFieldErrorMessage2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            accountUpdateForUpdateRequest = undefined;
            _false2 = undefined;
            _false3 = undefined;
            value = undefined;
            c4 = undefined;
            closure_5 = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            currentUser = undefined;
            firstFieldErrorMessage = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_15 = undefined;
            firstFieldErrorMessage2 = undefined;
            const tmp206 = stateFromStores;
            if (tmp206) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj24 = _false(_false3[10]);
              accountUpdateForUpdateRequest = obj24.getAccountUpdateForUpdateRequest(pendingChanges);
              const obj25 = _false(_false3[10]);
              _false2 = obj25.getProfileChangesForUpdateRequest(pendingChanges);
              const obj26 = _false(_false3[10]);
              _false3 = obj26.getPrimaryGuildChangesForUpdateRequest(pendingChanges);
              value = true;
              c4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c6 = 1;
                c7 = 1;
                const obj6 = { value: obj37.saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                obj37 = _false(_false3[9]);
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(_false2).length > 0) {
                  bannerOriginalMd5 = _false2.bannerOriginalMd5;
                  closure_8 = tmp(_false2, value);
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: obj35.saveProfileChanges(closure_8, undefined, bannerOriginalMd5), done: false };
                  obj35 = _false(_false3[14]);
                  return obj8;
                } else {
                  if (undefined === closure_132_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_132_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_132_0.pendingLegacyUsernameDisabled) {
                        c5 = 1;
                        const LegacyUsernameDisabled = _false(_false3[20]).LegacyUsernameDisabled;
                        c6 = 7;
                        c7 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_132_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp158 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                  if (tmp158) {
                    const _Object5 = Object;
                    tmp158 = 0 === Object.keys(_false2).length;
                  }
                  if (tmp158) {
                    const _Object6 = Object;
                    tmp158 = 0 === Object.keys(_false3).length;
                  }
                  if (tmp158) {
                    tmp158 = undefined === closure_132_0.pendingLegacyUsernameDisabled;
                  }
                  closure_11 = tmp158;
                  const tmp166 = closure_11;
                  if (tmp166) {
                    const obj31 = _false2(_false3[8]);
                    obj31.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  }
                  const obj10 = { displayOrder: closure_132_0.pendingBadgeDisplayOrder, hiddenBadges: closure_132_0.pendingBadgeHiddenBadges };
                  c6 = 3;
                  c7 = 1;
                  const obj12 = { value: obj32.updateBadgeSettings(obj10), done: false };
                  obj32 = _false(_false3[16]);
                  return obj12;
                }
              }
            }
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_5 = value;
            let ok;
            if (closure_5 != null) {
              ok = closure_5.ok;
            }
            if (ok) {
              body = closure_5.body;
              if (undefined !== closure_132_0.pendingAvatar) {
                const obj15 = { avatarHash: body.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                const pendingAvatar = closure_132_0.pendingAvatar;
                assetOrigin = undefined;
                const trackUserAvatarUpdated = _false(_false3[11]).trackUserAvatarUpdated;
                const tmp99 = _false(_false3[11]);
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                const result = trackUserAvatarUpdated(obj15);
              }
              const obj22 = _false(_false3[9]);
              const result1 = obj22.resetPendingAccountChanges();
            } else {
              let username;
              if (closure_5 != null) {
                body = closure_5.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const obj20 = _false(_false3[12]);
                const result2 = obj20.showInvalidUsernameToast();
                c4 = true;
              } else {
                let avatar;
                if (closure_5 != null) {
                  const body2 = closure_5.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const obj41 = _false(_false3[13]);
                  const result3 = obj41.showGenericProfileUpdateFailureToast(closure_5.body.avatar);
                  c4 = true;
                }
              }
            }
            let tmp110 = value;
            if (tmp110) {
              let ok1;
              if (closure_5 != null) {
                ok1 = closure_5.ok;
              }
              _false = ok1;
              if (ok1 == null) {
                _false = false;
              }
              tmp110 = _false;
            }
            value = tmp110;
          }
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            currentUser = value;
            let ok2;
            if (currentUser != null) {
              ok2 = currentUser.ok;
            }
            if (ok2) {
              const obj18 = _false(_false3[14]);
              const result4 = obj18.resetPendingProfileChanges();
            } else {
              const self3 = this;
              const self4 = this;
              const aPIError = new _false(_false3[15]).APIError(currentUser);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage) {
                const obj17 = _false(_false3[13]);
                const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                c4 = true;
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
          if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_12 = value;
              const tmp197 = closure_12;
              if (tmp197) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (null != id) {
                  const obj13 = _false(_false3[17]);
                  const profile = obj13.fetchProfile(id);
                  c6 = 4;
                  c7 = 1;
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
                  const dispatch = _false2(_false3[8]).dispatch;
                  const tmp41 = _false2(_false3[8]);
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
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          } else if (5 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              const obj7 = _false(_false3[19]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
          } else if (6 === c6) {
            c5 = 0;
            value = false;
          } else {
            if (7 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                const obj5 = _false(_false3[9]);
                const result7 = obj5.resetPendingLegacyUsernameDisabled();
                c5 = 0;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_15 = value;
              let ok4;
              if (closure_15 != null) {
                ok4 = closure_15.ok;
              }
              if (ok4) {
                const obj3 = _false(_false3[9]);
                const result8 = obj3.resetPendingPrimaryGuildChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError1 = new _false(_false3[15]).APIError(closure_15);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj2 = _false(_false3[13]);
                  const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c4 = true;
                }
              }
              let tmp24 = value;
              if (tmp24) {
                let ok5;
                if (closure_15 != null) {
                  ok5 = closure_15.ok;
                }
                _false3 = ok5;
                if (ok5 == null) {
                  _false3 = false;
                }
                tmp24 = _false3;
              }
              value = tmp24;
            }
            const tmp135 = value || c4;
            if (!tmp135) {
              const showGenericProfileUpdateFailureToast = _false(_false3[13]).showGenericProfileUpdateFailureToast;
              const tmp139 = _false(_false3[13]);
              const intl = _false(_false3[22]).intl;
              const result10 = showGenericProfileUpdateFailureToast(intl.string(_false(_false3[22]).t["84MExs"]));
            }
            c7 = 3;
            const obj34 = { value, done: true };
            return obj34;
          }
          c6 = 5;
          c7 = 1;
          const obj36 = { value: obj11.fetchBadgeDirectory(), done: false };
          obj11 = _false(_false3[18]);
          return obj36;
        }
        const _Object3 = Object;
        if (Object.keys(_false3).length > 0) {
          primaryGuildId = _false3.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c6 = 8;
            c7 = 1;
            const obj38 = { value: obj28.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            obj28 = _false(_false3[21]);
            return obj38;
          }
        }
      } catch (tmp188) {
        if (0 === c5) {
          c7 = 3;
          throw tmp188;
        } else {
          c6 = 6;
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
          return { value: "HermesInternal", done: null };
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
                const obj3 = tmp4(c2[9]);
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
              const obj = tmp4(c2[9]);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    }), items3),
    resetPending: pendingChanges(6405).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
};
