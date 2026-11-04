// Module ID: 16697
// Function ID: 16698
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 32, 19, 8872, 7912, 12564, 1385, 1072, 5166, 504, 7289, 16698, 11704, 5168, 7296, 16699, 6919, 7299, 16700, 6581, 1113, 8879, 572, 16701, 8893, 8909, 15201, 4966, 12566, 15972, 2]
// Exports: default

// Module 16697 (useUserProfileEditForm)
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5166 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import WidgetStore from "WidgetStore" /* 12564 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let c3, c7, constants, isSubmitting, pendingChanges2;

let closure_3 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let callback1;
  let isSubmitting2;
  let isWaitingForHexagonCampaignEnrollment;
  let pendingChanges;
  let tryItOutChanges;
  const tmp = pendingChanges;
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  let items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const items1 = [UserProfileStore, UserProfileSettingsStore, WidgetStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting || isSubmitting2.isSubmitting;
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
    let closure_4;
    let items;
    let obj29;
    let obj33;
    let obj36;
    let obj38;
    let obj49;
    let obj8;
    if (pendingChanges2 === 2) {
      pendingChanges2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        let _false;
        let _false2;
        let c5;
        let body;
        let firstFieldErrorMessage2;
        let closure_14;
        let closure_15;
        let id;
        let closure_19;
        let firstFieldErrorMessage3;
        pendingChanges2 = 2;
        switch (c7) {
          case 0:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_5 = tmp;
              pendingChanges = undefined;
              _false = undefined;
              _false2 = undefined;
              let _false3;
              let tmp4;
              c5 = undefined;
              value = undefined;
              c7 = undefined;
              pendingChanges2 = undefined;
              body = undefined;
              let bannerOriginalMd5;
              let closure_11;
              constants = undefined;
              firstFieldErrorMessage2 = undefined;
              closure_14 = undefined;
              closure_15 = undefined;
              id = undefined;
              let saveablePendingWidgets;
              let primaryGuildId;
              closure_19 = undefined;
              firstFieldErrorMessage3 = undefined;
              const tmp265 = stateFromStores;
              if (!tmp265) {
                const tmp115 = first;
                if (!tmp115) {
                  const obj23 = pendingChanges(_false2[12]);
                  const pendingHexagonCampaignEnrollment = obj23.getPendingHexagonCampaignEnrollment();
                  if (null != pendingHexagonCampaignEnrollment) {
                    _false3(true);
                    c7 = 1;
                    pendingChanges2 = 1;
                    const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                    return obj6;
                  } else {
                    _false = pendingChanges2.getPendingChanges();
                    const obj24 = pendingChanges(_false2[13]);
                    _false2 = obj24.getAccountUpdateForUpdateRequest(_false);
                    const obj25 = pendingChanges(_false2[13]);
                    _false3 = obj25.getProfileChangesForUpdateRequest(_false);
                    const obj26 = pendingChanges(_false2[13]);
                    tmp4 = obj26.getPrimaryGuildChangesForUpdateRequest(_false);
                    const obj27 = pendingChanges(_false2[14]);
                    let result = obj27.hasHexagonCampaignDisplayNameFont(_false2.displayNameStyles);
                    if (result) {
                      const hasHexagonCampaignDisplayNameFont = pendingChanges(_false2[14]).hasHexagonCampaignDisplayNameFont;
                      const tmp138 = pendingChanges(_false2[14]);
                      const currentUser = authStore.getCurrentUser();
                      let displayNameStyles;
                      if (currentUser != null) {
                        displayNameStyles = currentUser.displayNameStyles;
                      }
                      result = !hasHexagonCampaignDisplayNameFont(displayNameStyles);
                    }
                    c5 = result;
                    value = true;
                    c7 = false;
                    const _Object = Object;
                    if (Object.keys(_false2).length > 0) {
                      c7 = 2;
                      pendingChanges2 = 1;
                      const obj7 = { value: obj38.saveProfileAndAccountChanges(_false2), done: false };
                      obj38 = pendingChanges(_false2[11]);
                      return obj7;
                    } else {
                      const _Object2 = Object;
                      if (Object.keys(_false3).length > 0) {
                        bannerOriginalMd5 = _false3.bannerOriginalMd5;
                        closure_11 = tmp4(_false3, c3);
                        c7 = 3;
                        pendingChanges2 = 1;
                        const obj9 = { value: obj36.saveProfileChanges(closure_11, undefined, bannerOriginalMd5), done: false };
                        obj36 = pendingChanges(_false2[22]);
                        return obj9;
                      } else {
                        if (undefined === _false.pendingBadgeDisplayOrder) {
                          if (undefined === _false.pendingBadgeHiddenBadges) {
                            if (undefined !== _false.pendingLegacyUsernameDisabled) {
                              c6 = 1;
                              const LegacyUsernameDisabled = pendingChanges(_false2[28]).LegacyUsernameDisabled;
                              c7 = 8;
                              pendingChanges2 = 1;
                              const obj11 = { value: LegacyUsernameDisabled.updateSetting(_false.pendingLegacyUsernameDisabled), done: false };
                              return obj11;
                            } else {
                              if (isSubmitting2.hasUnsavedChanges()) {
                                saveablePendingWidgets = isSubmitting2.getSaveablePendingWidgets();
                                if (null != saveablePendingWidgets) {
                                  if (isSubmitting2.canSaveChanges()) {
                                    c6 = 2;
                                    c7 = 10;
                                    pendingChanges2 = 1;
                                    const obj12 = { value: obj29.savePendingWidgets(saveablePendingWidgets), done: false };
                                    obj29 = _false(_false2[29]);
                                    return obj12;
                                  }
                                }
                                value = false;
                              }
                              const _Object3 = Object;
                              if (Object.keys(tmp4).length > 0) {
                                primaryGuildId = tmp4.primaryGuildId;
                                if (undefined !== primaryGuildId) {
                                  c7 = 11;
                                  pendingChanges2 = 1;
                                  const obj13 = { value: obj49.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
                                  obj49 = pendingChanges(_false2[30]);
                                  return obj13;
                                }
                              }
                              const tmp232 = value || c7;
                              if (!tmp232) {
                                const showGenericProfileUpdateFailureToast = pendingChanges(_false2[19]).showGenericProfileUpdateFailureToast;
                                const tmp236 = pendingChanges(_false2[19]);
                                const intl2 = pendingChanges(_false2[21]).intl;
                                const result1 = showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(_false2[21]).t["84MExs"]));
                              }
                              pendingChanges2 = 3;
                              const obj16 = { value, done: true };
                              return obj16;
                            }
                          }
                        }
                        const _Object4 = Object;
                        let tmp173 = 0 === Object.keys(_false2).length;
                        if (tmp173) {
                          const _Object5 = Object;
                          tmp173 = 0 === Object.keys(_false3).length;
                        }
                        if (tmp173) {
                          const _Object6 = Object;
                          tmp173 = 0 === Object.keys(tmp4).length;
                        }
                        if (tmp173) {
                          tmp173 = undefined === _false.pendingLegacyUsernameDisabled;
                        }
                        closure_14 = tmp173;
                        const tmp181 = closure_14;
                        if (tmp181) {
                          const obj32 = _false(_false2[23]);
                          obj32.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                        }
                        const obj18 = { displayOrder: _false.pendingBadgeDisplayOrder, hiddenBadges: _false.pendingBadgeHiddenBadges };
                        c7 = 4;
                        pendingChanges2 = 1;
                        const obj19 = { value: obj33.updateBadgeSettings(obj18), done: false };
                        obj33 = pendingChanges(_false2[24]);
                        return obj19;
                      }
                    }
                  }
                }
              }
              pendingChanges2 = 3;
              return { value: "HermesInternal", done: null };
            }
            break;
          }
          case 1:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              pendingChanges = value;
              closure_133_3(false);
              const tmp114 = pendingChanges;
              if (!tmp114) {
                pendingChanges2 = 3;
                return { value: false, done: true };
              }
            }
            break;
          }
          case 2:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj22 = { value, done: true };
              return obj22;
            } else {
              pendingChanges2 = value;
              let ok;
              if (pendingChanges2 != null) {
                ok = pendingChanges2.ok;
              }
              if (ok) {
                body = tmp63.body;
                if (undefined !== _false.pendingAvatar) {
                  const obj28 = { avatarHash: body.avatar, avatarId: _false2.avatarId, avatarAssetOrigin: assetOrigin };
                  const pendingAvatar = _false.pendingAvatar;
                  assetOrigin = undefined;
                  const trackUserAvatarUpdated = pendingChanges(_false2[15]).trackUserAvatarUpdated;
                  const tmp84 = pendingChanges(_false2[15]);
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  const result2 = trackUserAvatarUpdated(obj28);
                }
                const tmp91 = c5;
                if (tmp91) {
                  const obj30 = { perks: items, content: pendingChanges(_false2[17]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: pendingChanges(_false2[16]).HexagonCampaignContentSurface.USER_PROFILE };
                  items = [constants.DISPLAY_NAME_STYLE];
                  const trackHexagonCampaignPerkAction = pendingChanges(_false2[16]).trackHexagonCampaignPerkAction;
                  const tmp95 = pendingChanges(_false2[16]);
                  const result3 = trackHexagonCampaignPerkAction(obj30);
                }
                const obj20 = pendingChanges(_false2[11]);
                const result4 = obj20.resetPendingAccountChanges();
              } else {
                let username;
                if (pendingChanges2 != null) {
                  body = tmp63.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const obj17 = pendingChanges(_false2[18]);
                  const result5 = obj17.showInvalidUsernameToast();
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
                    const showGenericProfileUpdateFailureToast2 = pendingChanges(_false2[19]).showGenericProfileUpdateFailureToast;
                    const self5 = this;
                    const self6 = this;
                    const tmp259 = pendingChanges(_false2[19]);
                    const aPIError = new pendingChanges(_false2[20]).APIError(pendingChanges2);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(_false2[21]).intl;
                      pendingChanges = intl.string(pendingChanges(_false2[21]).t["84MExs"]);
                    }
                    const result6 = showGenericProfileUpdateFailureToast2(pendingChanges);
                    c7 = true;
                  }
                }
              }
              let tmp107 = value;
              if (tmp107) {
                let ok1;
                if (pendingChanges2 != null) {
                  ok1 = pendingChanges2.ok;
                }
                _false = ok1;
                if (ok1 == null) {
                  _false = false;
                }
                tmp107 = _false;
              }
              value = tmp107;
            }
            break;
          }
          case 3:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj31 = { value, done: true };
              return obj31;
            } else {
              constants = value;
              let ok2;
              if (constants != null) {
                ok2 = constants.ok;
              }
              if (ok2) {
                const obj15 = pendingChanges(_false2[22]);
                const result7 = obj15.resetPendingProfileChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError1 = new pendingChanges(_false2[20]).APIError(constants);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj14 = pendingChanges(_false2[19]);
                  const result8 = obj14.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c7 = true;
                }
              }
              let tmp58 = value;
              if (tmp58) {
                let ok3;
                if (constants != null) {
                  ok3 = constants.ok;
                }
                _false2 = ok3;
                if (ok3 == null) {
                  _false2 = false;
                }
                tmp58 = _false2;
              }
              value = tmp58;
            }
            break;
          }
          case 4:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj34 = { value, done: true };
              return obj34;
            } else {
              closure_15 = value;
              const tmp251 = closure_15;
              if (tmp251) {
                const currentUser1 = authStore.getCurrentUser();
                id = undefined;
                if (currentUser1 != null) {
                  id = currentUser1.id;
                }
                if (null != id) {
                  const obj10 = pendingChanges(_false2[25]);
                  const profile = obj10.fetchProfile(id);
                  c7 = 5;
                  pendingChanges2 = 1;
                  const obj35 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj35;
                } else {
                  c7 = 6;
                  pendingChanges2 = 1;
                  const obj37 = { value: obj8.fetchBadgeDirectory(), done: false };
                  obj8 = pendingChanges(_false2[26]);
                  return obj37;
                }
              } else {
                const tmp16 = closure_14;
                if (tmp16) {
                  let obj39;
                  const dispatch = _false(_false2[23]).dispatch;
                  const tmp20 = _false(_false2[23]);
                  if (closure_15) {
                    obj39 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj39 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  dispatch(obj39);
                }
                const tmp24 = value && closure_15;
                value = tmp24;
              }
            }
            break;
          }
          case 5:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj40 = { value, done: true };
              return obj40;
            }
            break;
          }
          case 6:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj41 = { value, done: true };
              return obj41;
            } else {
              const obj4 = pendingChanges(_false2[27]);
              const result9 = obj4.resetPendingBadgeSettings();
            }
            break;
          }
          case 7:
          {
            c6 = 0;
            value = false;
            break;
          }
          case 8:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              pendingChanges2 = 3;
              const obj42 = { value, done: true };
              return obj42;
            } else {
              const obj2 = pendingChanges(_false2[11]);
              const result10 = obj2.resetPendingLegacyUsernameDisabled();
              c6 = 0;
            }
            break;
          }
          case 9:
          {
            c6 = 0;
            value = false;
            break;
          }
          case 10:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              pendingChanges2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            break;
          }
          default:
          {
            if (arg0 === 1) {
              pendingChanges2 = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges2 = 3;
              const obj45 = { value, done: true };
              return obj45;
            } else {
              closure_19 = value;
              let ok4;
              if (closure_19 != null) {
                ok4 = closure_19.ok;
              }
              if (ok4) {
                const obj44 = pendingChanges(_false2[11]);
                const result11 = obj44.resetPendingPrimaryGuildChanges();
              } else {
                const self3 = this;
                const self4 = this;
                const aPIError2 = new pendingChanges(_false2[20]).APIError(closure_19);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const obj43 = pendingChanges(_false2[19]);
                  const result12 = obj43.showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  c7 = true;
                }
              }
              let tmp228 = value;
              if (tmp228) {
                let ok5;
                if (closure_19 != null) {
                  ok5 = closure_19.ok;
                }
                c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp228 = c3;
              }
              value = tmp228;
            }
            break;
          }
        }
      } catch (tmp243) {
        if (0 === c6) {
          pendingChanges2 = 3;
          throw tmp243;
        } else if (1 === tmp244) {
          c7 = 7;
        } else {
          c7 = 9;
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
