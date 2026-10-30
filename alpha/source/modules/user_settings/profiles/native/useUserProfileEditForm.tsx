// Module ID: 16409
// Function ID: 16410
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 32, 19, 8723, 7765, 1384, 1072, 5034, 504, 7146, 16410, 11481, 5036, 7153, 16411, 6778, 7156, 16412, 6440, 1114, 8730, 572, 16413, 8744, 8760, 14943, 4834, 15697, 2]
// Exports: default

// Module 16409 (useUserProfileEditForm)
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let c3, c7, isSubmitting, pendingChanges2;

let closure_3 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let callback1;
  let errors;
  let isWaitingForHexagonCampaignEnrollment;
  let pendingChanges;
  let tryItOutChanges;
  const tmp = pendingChanges;
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]);
  let items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
    return isSubmitting;
  });
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  [isWaitingForHexagonCampaignEnrollment, closure_3] = react.useState(false);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  const effect = react.useEffect(() => pendingChanges(first[10]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = react.useCallback(_asyncToGenerator(async function(arg0, value) {
    let assetOrigin;
    let closure_0;
    let closure_4;
    let items;
    let obj11;
    let obj32;
    let obj36;
    let obj39;
    let obj41;
    if (pendingChanges2 === 2) {
      pendingChanges2 = 3;
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
      try {
        let _false;
        let _false2;
        let _false3;
        let primaryGuildChangesForUpdateRequest;
        let result12;
        let body;
        let bannerOriginalMd5;
        let closure_11;
        let closure_12;
        let firstFieldErrorMessage2;
        let closure_14;
        let closure_15;
        let id;
        let primaryGuildId;
        let closure_18;
        let firstFieldErrorMessage3;
        pendingChanges2 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            pendingChanges2 = 3;
            throw value;
          } else if (arg0 === 2) {
            pendingChanges2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_5 = tmp;
            pendingChanges = undefined;
            _false = undefined;
            _false2 = undefined;
            _false3 = undefined;
            primaryGuildChangesForUpdateRequest = undefined;
            result12 = undefined;
            value = undefined;
            c7 = undefined;
            pendingChanges2 = undefined;
            body = undefined;
            bannerOriginalMd5 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            firstFieldErrorMessage2 = undefined;
            closure_14 = undefined;
            closure_15 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_18 = undefined;
            firstFieldErrorMessage3 = undefined;
            const tmp260 = stateFromStores;
            if (!tmp260) {
              const tmp136 = first;
              if (!tmp136) {
                const obj26 = pendingChanges(_false2[11]);
                const pendingHexagonCampaignEnrollment = obj26.getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  _false3(true);
                  c7 = 1;
                  pendingChanges2 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
              }
            }
            pendingChanges2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else {
          if (1 === c7) {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              pendingChanges = value;
              closure_133_3(false);
              const tmp135 = pendingChanges;
              if (!tmp135) {
                pendingChanges2 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              pendingChanges2 = value;
              let ok;
              if (pendingChanges2 != null) {
                ok = pendingChanges2.ok;
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
                const tmp112 = result12;
                if (tmp112) {
                  const obj12 = { perks: items, content: pendingChanges(_false2[16]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: pendingChanges(_false2[15]).HexagonCampaignContentSurface.USER_PROFILE };
                  items = [HexagonCampaignPerk.DISPLAY_NAME_STYLE];
                  const trackHexagonCampaignPerkAction = pendingChanges(_false2[15]).trackHexagonCampaignPerkAction;
                  const tmp116 = pendingChanges(_false2[15]);
                  const result1 = trackHexagonCampaignPerkAction(obj12);
                }
                const obj23 = pendingChanges(_false2[10]);
                const result2 = obj23.resetPendingAccountChanges();
              } else {
                let username;
                if (pendingChanges2 != null) {
                  body = tmp84.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const obj20 = pendingChanges(_false2[17]);
                  const result3 = obj20.showInvalidUsernameToast();
                  c7 = true;
                } else {
                  let avatar;
                  if (pendingChanges2 != null) {
                    const body2 = pendingChanges2.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const showGenericProfileUpdateFailureToast2 = pendingChanges(_false2[18]).showGenericProfileUpdateFailureToast;
                    const self5 = this;
                    const self6 = this;
                    const tmp254 = pendingChanges(_false2[18]);
                    const aPIError = new pendingChanges(_false2[19]).APIError(pendingChanges2);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(_false2[20]).intl;
                      pendingChanges = intl.string(pendingChanges(_false2[20]).t["84MExs"]);
                    }
                    const result4 = showGenericProfileUpdateFailureToast2(pendingChanges);
                    c7 = true;
                  }
                }
              }
              let tmp128 = value;
              if (tmp128) {
                let ok1;
                if (pendingChanges2 != null) {
                  ok1 = pendingChanges2.ok;
                }
                _false = ok1;
                if (ok1 == null) {
                  _false = false;
                }
                tmp128 = _false;
              }
              value = tmp128;
              const _Object2 = Object;
              if (Object.keys(_false3).length > 0) {
                bannerOriginalMd5 = _false3.bannerOriginalMd5;
                closure_11 = primaryGuildChangesForUpdateRequest(_false3, c3);
                c7 = 3;
                pendingChanges2 = 1;
                const obj14 = { value: obj39.saveProfileChanges(closure_11, undefined, bannerOriginalMd5), done: false };
                obj39 = pendingChanges(_false2[21]);
                return obj14;
              } else {
                if (undefined === _false.pendingBadgeDisplayOrder) {
                  if (undefined === _false.pendingBadgeHiddenBadges) {
                    if (undefined !== _false.pendingLegacyUsernameDisabled) {
                      value = 1;
                      const LegacyUsernameDisabled = pendingChanges(_false2[27]).LegacyUsernameDisabled;
                      c7 = 8;
                      pendingChanges2 = 1;
                      const obj15 = { value: LegacyUsernameDisabled.updateSetting(_false.pendingLegacyUsernameDisabled), done: false };
                      return obj15;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp201 = 0 === Object.keys(_false2).length;
                if (tmp201) {
                  const _Object5 = Object;
                  tmp201 = 0 === Object.keys(_false3).length;
                }
                if (tmp201) {
                  const _Object6 = Object;
                  tmp201 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                }
                if (tmp201) {
                  tmp201 = undefined === _false.pendingLegacyUsernameDisabled;
                }
                closure_14 = tmp201;
                const tmp209 = closure_14;
                if (tmp209) {
                  const obj35 = _false(_false2[22]);
                  obj35.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                }
                const obj16 = { displayOrder: _false.pendingBadgeDisplayOrder, hiddenBadges: _false.pendingBadgeHiddenBadges };
                c7 = 4;
                pendingChanges2 = 1;
                const obj19 = { value: obj36.updateBadgeSettings(obj16), done: false };
                obj36 = pendingChanges(_false2[23]);
                return obj19;
              }
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              closure_12 = value;
              let ok2;
              if (closure_12 != null) {
                ok2 = closure_12.ok;
              }
              if (ok2) {
                const obj18 = pendingChanges(_false2[21]);
                const result5 = obj18.resetPendingProfileChanges();
              } else {
                const self3 = this;
                const self4 = this;
                const aPIError1 = new pendingChanges(_false2[19]).APIError(closure_12);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj17 = pendingChanges(_false2[18]);
                  const result6 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c7 = true;
                }
              }
              let tmp79 = value;
              if (tmp79) {
                let ok3;
                if (closure_12 != null) {
                  ok3 = closure_12.ok;
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
                pendingChanges2 = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges2 = 3;
                const obj22 = { value, done: true };
                return obj22;
              } else {
                closure_15 = value;
                const tmp246 = closure_15;
                if (tmp246) {
                  const currentUser = authStore.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  if (null != id) {
                    const obj13 = pendingChanges(_false2[24]);
                    const profile = obj13.fetchProfile(id);
                    c7 = 5;
                    pendingChanges2 = 1;
                    const obj24 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj24;
                  }
                } else {
                  const tmp37 = closure_14;
                  if (tmp37) {
                    let obj25;
                    const dispatch = _false(_false2[22]).dispatch;
                    const tmp41 = _false(_false2[22]);
                    if (closure_15) {
                      obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                    } else {
                      obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                    }
                    dispatch(obj25);
                  }
                  const tmp45 = value && closure_15;
                  value = tmp45;
                }
              }
            } else if (5 === c7) {
              if (arg0 === 1) {
                pendingChanges2 = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges2 = 3;
                const obj31 = { value, done: true };
                return obj31;
              }
            } else if (6 === c7) {
              if (arg0 === 1) {
                pendingChanges2 = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges2 = 3;
                const obj33 = { value, done: true };
                return obj33;
              } else {
                const obj7 = pendingChanges(_false2[26]);
                const result7 = obj7.resetPendingBadgeSettings();
              }
            } else if (7 === c7) {
              value = false;
            } else {
              if (8 === c7) {
                if (arg0 === 1) {
                  pendingChanges2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  value = 0;
                  pendingChanges2 = 3;
                  const obj34 = { value, done: true };
                  return obj34;
                } else {
                  const obj5 = pendingChanges(_false2[10]);
                  const result8 = obj5.resetPendingLegacyUsernameDisabled();
                  value = 0;
                }
              } else if (arg0 === 1) {
                pendingChanges2 = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges2 = 3;
                const obj37 = { value, done: true };
                return obj37;
              } else {
                closure_18 = value;
                let ok4;
                if (closure_18 != null) {
                  ok4 = closure_18.ok;
                }
                if (ok4) {
                  const obj3 = pendingChanges(_false2[10]);
                  const result9 = obj3.resetPendingPrimaryGuildChanges();
                } else {
                  const self = this;
                  const self2 = this;
                  const aPIError2 = new pendingChanges(_false2[19]).APIError(closure_18);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const obj2 = pendingChanges(_false2[18]);
                    const result10 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    c7 = true;
                  }
                }
                let tmp24 = value;
                if (tmp24) {
                  let ok5;
                  if (closure_18 != null) {
                    ok5 = closure_18.ok;
                  }
                  c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp24 = c3;
                }
                value = tmp24;
              }
              const tmp177 = value || c7;
              if (!tmp177) {
                const showGenericProfileUpdateFailureToast = pendingChanges(_false2[18]).showGenericProfileUpdateFailureToast;
                const tmp181 = pendingChanges(_false2[18]);
                const intl2 = pendingChanges(_false2[20]).intl;
                const result11 = showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(_false2[20]).t["84MExs"]));
              }
              pendingChanges2 = 3;
              const obj38 = { value, done: true };
              return obj38;
            }
            c7 = 6;
            pendingChanges2 = 1;
            const obj40 = { value: obj11.fetchBadgeDirectory(), done: false };
            obj11 = pendingChanges(_false2[25]);
            return obj40;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              pendingChanges2 = 1;
              const obj42 = { value: obj32.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              obj32 = pendingChanges(_false2[28]);
              return obj42;
            }
          }
        }
        _false = pendingChanges2.getPendingChanges();
        const obj27 = pendingChanges(_false2[12]);
        _false2 = obj27.getAccountUpdateForUpdateRequest(_false);
        const obj28 = pendingChanges(_false2[12]);
        _false3 = obj28.getProfileChangesForUpdateRequest(_false);
        const obj29 = pendingChanges(_false2[12]);
        primaryGuildChangesForUpdateRequest = obj29.getPrimaryGuildChangesForUpdateRequest(_false);
        const obj30 = pendingChanges(_false2[13]);
        result12 = obj30.hasHexagonCampaignDisplayNameFont(_false2.displayNameStyles);
        if (result12) {
          const hasHexagonCampaignDisplayNameFont = pendingChanges(_false2[13]).hasHexagonCampaignDisplayNameFont;
          const tmp159 = pendingChanges(_false2[13]);
          const currentUser1 = authStore.getCurrentUser();
          let displayNameStyles;
          if (currentUser1 != null) {
            displayNameStyles = currentUser1.displayNameStyles;
          }
          result12 = !hasHexagonCampaignDisplayNameFont(displayNameStyles);
        }
        value = true;
        c7 = false;
        const _Object = Object;
        if (Object.keys(_false2).length > 0) {
          c7 = 2;
          pendingChanges2 = 1;
          const obj43 = { value: obj41.saveProfileAndAccountChanges(_false2), done: false };
          obj41 = pendingChanges(_false2[10]);
          return obj43;
        }
      } catch (tmp237) {
        if (0 === value) {
          pendingChanges2 = 3;
          throw tmp237;
        } else {
          c7 = 7;
        }
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = { hasAvatarDecorationEdits: undefined !== pendingAvatarDecoration, errors, isSubmitting: stateFromStores, isWaitingForHexagonCampaignEnrollment, handleSubmit: callback, handleSubmitAvatarDecoration: callback1, resetPending: tmp(tmp2[10]).resetAllPending };
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
        return { value: "HermesInternal", done: null };
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
              const obj3 = tmp4(isWaitingForHexagonCampaignEnrollment[10]);
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
            const obj = tmp4(isWaitingForHexagonCampaignEnrollment[10]);
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
  }), items3);
  if (!stateFromStores) {
    stateFromStores = isWaitingForHexagonCampaignEnrollment;
  }
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
};
