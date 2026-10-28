// Module ID: 15993
// Function ID: 15994
// Name: useGuildProfileEditForm
// Dependencies: [109, 5, 19, 8681, 7735, 4915, 4877, 6733, 1392, 1087, 5028, 558, 576, 504, 12853, 4850, 11221, 15994, 11217, 5030, 7117, 15891, 6745, 15892, 6406, 1128, 8688, 2]

// Module 15993 (useGuildProfileEditForm)
import Constants from "Constants" /* 1087 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import UserProfileSettingsStore2 from "UserProfileSettingsStore" /* 8681 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7735 */;
import GuildMemberStore from "GuildMemberStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4877 */;
import SortedGuildStore_mod from "SortedGuildStore" /* 6733 */;
import UserStore_mod from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c6;

let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = UserProfileSettingsStore2.IGNORE_GUILD_IDS;
let SortedGuildStore = SortedGuildStore_mod;
let UserStore = UserStore_mod;
let FormStates = Constants.FormStates;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildProfileEditForm() {
  let closure_13;
  let currentUser;
  let pendingAvatarDecoration;
  let pendingDisplayNameStyles;
  let pendingNickname;
  let stateFromStores;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = stateFromStores;
  let tmp2 = pendingNickname;
  let obj = stateFromStores(pendingNickname[12]);
  const cResult = obj.c(37);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = G;
    tmp5 = G;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[13]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [pendingAvatarDecoration, ];
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    items1[1] = pendingDisplayNameStyles;
    const fn = function b() {
      const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
      const obj = { errors: pendingAvatarDecoration.getErrors(selectedGuildId), selectedGuild: pendingDisplayNameStyles.getGuild(selectedGuildId), formState: pendingAvatarDecoration.getFormState() };
      const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
      return obj;
    };
    cResult[2] = items1;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult5 = tmp(tmp2[13]);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp8, tmp9);
  let pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  let pendingBio = stateFromStoresObject.pendingBio;
  let pendingPronouns = stateFromStoresObject.pendingPronouns;
  let pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  const selectedGuild = stateFromStoresObject.selectedGuild;
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  let pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const formState = stateFromStoresObject.formState;
  let id;
  const useGuildAutomodProfileQuarantineErrors = tmp(tmp2[14]).useGuildAutomodProfileQuarantineErrors;
  tmp(tmp2[14]);
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = useGuildAutomodProfileQuarantineErrors(id);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [pendingAvatarDecoration, ];
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    items2[1] = pendingProfileFrame;
    const fn2 = function _() {
      const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
      return isSubmitting;
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    tmp16 = fn2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult7 = tmp(tmp2[13]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp15, tmp16);
  if (cResult[6] === guildAutomodProfileQuarantineErrors) {
    let tmp25;
    let tmp24;
    let tmp30;
    let tmp32;
    const _Symbol = Symbol;
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    SortedGuildStore = tmp23;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function z() {
        return function cleanup() {
          closure_1_13.cancel();
          const obj = stateFromStores(pendingNickname[16]);
          obj.resetAllPending();
        };
      };
      const items3 = [tmp23];
      class G {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[10] = fn3;
      cResult[11] = items3;
      tmp25 = items3;
      tmp24 = fn3;
    } else {
      tmp24 = cResult[10];
      tmp25 = cResult[11];
    }
    const effect = selectedGuild.useEffect(tmp24, tmp25);
    const tmp29 = pendingAvatar(tmp2[17])();
    UserStore = tmp29;
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [pendingDisplayNameStyles, ];
      class G {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      items4[1] = SortedGuildStore;
      cResult[12] = items4;
      tmp30 = items4;
    } else {
      tmp30 = cResult[12];
    }
    if (cResult[13] !== tmp29) {
      class X {
        constructor() {
          const guild = GuildStore.getGuild(currentUser);
          let id;
          const obj = GuildStore;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            if (!IGNORE_GUILD_IDS.has(guild.id)) {
              return guild;
            }
          }
          return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
        }
      }
      cResult[13] = tmp29;
      class G {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[14] = X;
      tmp32 = X;
    } else {
      class X {
        constructor() {
          const guild = GuildStore.getGuild(currentUser);
          let id;
          const obj = GuildStore;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            if (!IGNORE_GUILD_IDS.has(guild.id)) {
              return guild;
            }
          }
          return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
        }
      }
    }
    let tmp34 = stateFromStores1;
    const tmpResult8 = tmp(tmp2[13]);
    const stateFromStores2 = tmpResult8.useStateFromStores(tmp30, tmp32);
    if (!stateFromStores1) {
      class X {
        constructor() {
          const guild = GuildStore.getGuild(currentUser);
          let id;
          const obj = GuildStore;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            if (!IGNORE_GUILD_IDS.has(guild.id)) {
              return guild;
            }
          }
          return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
        }
      }
      tmp34 = formState === FormStates.CLOSED;
    }
    FormStates = tmp34;
    if (cResult[15] === tmp34) {
      class X {
        constructor() {
          const guild = GuildStore.getGuild(currentUser);
          let id;
          const obj = GuildStore;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            if (!IGNORE_GUILD_IDS.has(guild.id)) {
              return guild;
            }
          }
          return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
        }
      }
    }
    let closure_0 = pendingThemeColors(function*(arg0, value) {
      let assetOrigin;
      let items;
      if (pendingThemeColors === 2) {
        pendingThemeColors = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let guildMemberChangesForUpdateRequest;
          let tmp2;
          let c4;
          let body;
          let firstFieldErrorMessage2;
          pendingThemeColors = 2;
          if (0 === pendingPronouns) {
            if (arg0 === 1) {
              pendingThemeColors = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingThemeColors = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              pendingBio = tmp;
              guildMemberChangesForUpdateRequest = undefined;
              pendingAvatar = undefined;
              pendingNickname = undefined;
              tmp2 = undefined;
              c4 = undefined;
              pendingPronouns = undefined;
              body = undefined;
              let bannerOriginalMd5;
              let closure_8;
              pendingProfileEffect = undefined;
              firstFieldErrorMessage2 = undefined;
              const tmp135 = closure_1_15;
              if (!tmp135) {
                if (null != closure_0) {
                  const obj4 = { pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
                  const obj14 = closure_0(pendingNickname[18]);
                  guildMemberChangesForUpdateRequest = obj14.getGuildMemberChangesForUpdateRequest(obj4);
                  const obj5 = { pendingBanner: tmp2, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
                  let id;
                  const getProfileChangesForUpdateRequest = closure_0(pendingNickname[18]).getProfileChangesForUpdateRequest;
                  const tmp146 = closure_0(pendingNickname[18]);
                  if (user != null) {
                    id = user.id;
                  }
                  pendingAvatar = getProfileChangesForUpdateRequest(obj5, id);
                  let id1;
                  if (user != null) {
                    id1 = user.id;
                  }
                  let result = null != id1;
                  if (result) {
                    const obj7 = closure_0(pendingNickname[19]);
                    result = obj7.hasHexagonCampaignDisplayNameFont(guildMemberChangesForUpdateRequest.displayNameStyles);
                  }
                  if (result) {
                    const hasHexagonCampaignDisplayNameFont = closure_0(pendingNickname[19]).hasHexagonCampaignDisplayNameFont;
                    const tmp73 = closure_0(pendingNickname[19]);
                    member = member.getMember(id1, tmp64.id);
                    let displayNameStyles;
                    if (member != null) {
                      displayNameStyles = member.displayNameStyles;
                    }
                    result = !hasHexagonCampaignDisplayNameFont(displayNameStyles);
                  }
                  pendingNickname = result;
                  tmp2 = true;
                  c4 = false;
                  const _Object = Object;
                  if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
                    let id2;
                    const saveGuildIdentityChanges = closure_0(pendingNickname[16]).saveGuildIdentityChanges;
                    const tmp114 = closure_0(pendingNickname[16]);
                    if (user != null) {
                      id2 = user.id;
                    }
                    pendingPronouns = 1;
                    pendingThemeColors = 1;
                    const obj6 = { value: saveGuildIdentityChanges(id2, guildMemberChangesForUpdateRequest), done: false };
                    return obj6;
                  } else {
                    const _Object2 = Object;
                    if (Object.keys(pendingAvatar).length > 0) {
                      bannerOriginalMd5 = pendingAvatar.bannerOriginalMd5;
                      let id3;
                      closure_8 = pendingPronouns(pendingAvatar, pendingBanner);
                      const saveProfileChanges = closure_0(pendingNickname[26]).saveProfileChanges;
                      const tmp107 = closure_0(pendingNickname[26]);
                      const tmp108 = closure_8;
                      if (user != null) {
                        id3 = user.id;
                      }
                      pendingPronouns = 2;
                      pendingThemeColors = 1;
                      const obj8 = { value: saveProfileChanges(tmp108, id3, bannerOriginalMd5), done: false };
                      return obj8;
                    }
                  }
                }
              }
              pendingThemeColors = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              pendingThemeColors = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingThemeColors = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              pendingPronouns = value;
              if (pendingPronouns.ok) {
                body = pendingPronouns.body;
                if (undefined !== pendingAvatar) {
                  const obj10 = { isGuildProfile: true, avatarHash: body.avatar, avatarId: guildMemberChangesForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                  assetOrigin = undefined;
                  const trackUserAvatarUpdated = closure_0(pendingNickname[20]).trackUserAvatarUpdated;
                  const tmp41 = closure_0(pendingNickname[20]);
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  const result1 = trackUserAvatarUpdated(obj10);
                }
                const tmp48 = pendingNickname;
                if (tmp48) {
                  const obj11 = { perks: items, content: closure_0(pendingNickname[22]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: closure_0(pendingNickname[21]).HexagonCampaignContentSurface.GUILD_PROFILE };
                  items = [constants.DISPLAY_NAME_STYLE];
                  const trackHexagonCampaignPerkAction = closure_0(pendingNickname[21]).trackHexagonCampaignPerkAction;
                  const tmp52 = closure_0(pendingNickname[21]);
                  const result2 = trackHexagonCampaignPerkAction(obj11);
                }
              } else {
                let avatar;
                if (pendingPronouns != null) {
                  body = pendingPronouns.body;
                  if (body != null) {
                    avatar = body.avatar;
                  }
                }
                if (null != avatar) {
                  const showGenericGuildProfileUpdateFailureToast2 = closure_0(pendingNickname[23]).showGenericGuildProfileUpdateFailureToast;
                  const self3 = this;
                  const self4 = this;
                  const tmp129 = closure_0(pendingNickname[23]);
                  const aPIError = new closure_0(pendingNickname[24]).APIError(pendingPronouns);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  closure_0 = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = closure_0(pendingNickname[25]).intl;
                    closure_0 = intl.string(closure_0(pendingNickname[25]).t.s35OuK);
                  }
                  const result3 = showGenericGuildProfileUpdateFailureToast2(closure_0);
                  c4 = true;
                }
              }
              let tmp60 = tmp2;
              if (tmp60) {
                let ok;
                if (pendingPronouns != null) {
                  ok = pendingPronouns.ok;
                }
                pendingAvatar = ok;
                if (ok == null) {
                  pendingAvatar = false;
                }
                tmp60 = pendingAvatar;
              }
              tmp2 = tmp60;
            }
          } else if (arg0 === 1) {
            pendingThemeColors = 3;
            throw value;
          } else if (arg0 === 2) {
            pendingThemeColors = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            pendingProfileEffect = value;
            let ok1;
            if (pendingProfileEffect != null) {
              ok1 = pendingProfileEffect.ok;
            }
            if (!ok1) {
              const self = this;
              const self2 = this;
              const aPIError1 = new closure_0(pendingNickname[24]).APIError(pendingProfileEffect);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const obj2 = closure_0(pendingNickname[23]);
                const result4 = obj2.showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage2);
                c4 = true;
              }
            }
            let tmp21 = tmp2;
            if (tmp21) {
              let ok2;
              if (pendingProfileEffect != null) {
                ok2 = pendingProfileEffect.ok;
              }
              pendingNickname = ok2;
              if (ok2 == null) {
                pendingNickname = false;
              }
              tmp21 = pendingNickname;
            }
            tmp2 = tmp21;
          }
          const tmp82 = tmp2 || c4;
          if (!tmp82) {
            const showGenericGuildProfileUpdateFailureToast = closure_0(pendingNickname[23]).showGenericGuildProfileUpdateFailureToast;
            const tmp86 = closure_0(pendingNickname[23]);
            const intl2 = closure_0(pendingNickname[25]).intl;
            const result5 = showGenericGuildProfileUpdateFailureToast(intl2.string(closure_0(pendingNickname[25]).t.s35OuK));
          }
          const tmp93 = tmp2;
          if (tmp93) {
            closure_1_13.delay();
          }
          pendingThemeColors = 3;
          const obj13 = { value: tmp2, done: true };
          return obj13;
        } catch (tmp116) {
          pendingThemeColors = 3;
          throw tmp116;
        }
      }
    });
    cResult[15] = tmp34;
    cResult[16] = pendingAvatar;
    cResult[17] = pendingAvatarDecoration;
    cResult[18] = pendingBanner;
    cResult[19] = pendingBio;
    cResult[20] = pendingDisplayNameStyles;
    cResult[21] = pendingNameplate;
    cResult[22] = pendingNickname;
    cResult[23] = pendingProfileEffect;
    cResult[24] = pendingProfileFrame;
    cResult[25] = pendingPronouns;
    cResult[26] = pendingThemeColors;
    if (selectedGuild != null) {
      class X {
        constructor() {
          const guild = GuildStore.getGuild(currentUser);
          let id;
          const obj = GuildStore;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            if (!IGNORE_GUILD_IDS.has(guild.id)) {
              return guild;
            }
          }
          return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
        }
      }
    }
    function t12() {
      return closure_0(...arguments);
    }
    cResult[27] = undefined;
    cResult[28] = stateFromStores;
    cResult[29] = t12;
  }
  let obj2 = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  cResult[6] = guildAutomodProfileQuarantineErrors;
  cResult[7] = stateFromStoresObject.errors;
  cResult[8] = obj2;
}) : (function useGuildProfileEditForm() {
  let currentUser;
  let pendingAvatarDecoration;
  let pendingDisplayNameStyles;
  let pendingNickname;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = pendingNickname;
  let obj = stateFromStores(pendingNickname[13]);
  let items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(pendingNickname[13]);
  const items1 = [pendingAvatarDecoration, pendingDisplayNameStyles];
  const tmp4 = pendingAvatarDecoration;
  const tmp5 = pendingDisplayNameStyles;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
    const obj = { errors: pendingAvatarDecoration.getErrors(selectedGuildId), selectedGuild: pendingDisplayNameStyles.getGuild(selectedGuildId), formState: pendingAvatarDecoration.getFormState() };
    const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  const pendingBio = stateFromStoresObject.pendingBio;
  let pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  let selectedGuild = stateFromStoresObject.selectedGuild;
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  let pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const formState = stateFromStoresObject.formState;
  let id;
  const useGuildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[14]).useGuildAutomodProfileQuarantineErrors;
  const tmp7 = stateFromStores(pendingNickname[14]);
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = useGuildAutomodProfileQuarantineErrors(id);
  const items2 = [tmp4, pendingProfileFrame];
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
    return isSubmitting;
  });
  let obj3 = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  const memo = selectedGuild.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[15]).DelayedCall(200, stateFromStores(pendingNickname[16]).resetAllPending);
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = selectedGuild.useEffect(() => (function cleanup() {
    memo.cancel();
    const obj = stateFromStores(pendingNickname[16]);
    obj.resetAllPending();
  }), items3);
  currentUser = pendingAvatar(tmp2[17])();
  const items4 = [tmp5, memo];
  let tmp17 = stateFromStores1;
  const tmpResult2 = tmp(tmp2[13]);
  const stateFromStores2 = tmpResult2.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(currentUser);
    let id;
    const obj = GuildStore;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      if (!IGNORE_GUILD_IDS.has(guild.id)) {
        return guild;
      }
    }
    return obj.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
  });
  const tmp13 = selectedGuild;
  if (!stateFromStores1) {
    tmp17 = formState === FormStates.CLOSED;
  }
  FormStates = tmp17;
  const items5 = [, , , , , , , , , , , , , , ];
  const useCallback = tmp13.useCallback;
  items5[0] = tmp17;
  items5[1] = stateFromStores;
  items5[2] = pendingAvatar;
  items5[3] = pendingNickname;
  items5[4] = pendingAvatarDecoration;
  items5[5] = pendingNameplate;
  items5[6] = pendingDisplayNameStyles;
  items5[7] = pendingBanner;
  items5[8] = pendingBio;
  items5[9] = pendingPronouns;
  items5[10] = pendingThemeColors;
  items5[11] = pendingProfileEffect;
  items5[12] = pendingProfileFrame;
  let id1;
  const tmp19 = pendingThemeColors(function*(arg0, value) {
    let assetOrigin;
    let closure_0;
    let items;
    let member;
    let v2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let guildMemberChangesForUpdateRequest;
        let _false2;
        let c4;
        let body;
        let firstFieldErrorMessage2;
        c6 = 2;
        if (0 === pendingPronouns) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            guildMemberChangesForUpdateRequest = undefined;
            let _false;
            _false2 = undefined;
            value = undefined;
            c4 = undefined;
            pendingPronouns = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            pendingProfileEffect = undefined;
            firstFieldErrorMessage2 = undefined;
            const tmp135 = closure_15;
            if (!tmp135) {
              if (null != stateFromStores) {
                const obj4 = { pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
                const obj14 = stateFromStores(_false2[18]);
                guildMemberChangesForUpdateRequest = obj14.getGuildMemberChangesForUpdateRequest(obj4);
                const obj5 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
                let id;
                const getProfileChangesForUpdateRequest = stateFromStores(_false2[18]).getProfileChangesForUpdateRequest;
                const tmp146 = stateFromStores(_false2[18]);
                if (selectedGuild != null) {
                  id = selectedGuild.id;
                }
                _false = getProfileChangesForUpdateRequest(obj5, id);
                let id1;
                if (selectedGuild != null) {
                  id1 = selectedGuild.id;
                }
                let result = null != id1;
                if (result) {
                  const obj7 = stateFromStores(_false2[19]);
                  result = obj7.hasHexagonCampaignDisplayNameFont(guildMemberChangesForUpdateRequest.displayNameStyles);
                }
                if (result) {
                  const hasHexagonCampaignDisplayNameFont = stateFromStores(_false2[19]).hasHexagonCampaignDisplayNameFont;
                  const tmp73 = stateFromStores(_false2[19]);
                  member = member.getMember(id1, tmp64.id);
                  let displayNameStyles;
                  if (member != null) {
                    displayNameStyles = member.displayNameStyles;
                  }
                  result = !hasHexagonCampaignDisplayNameFont(displayNameStyles);
                }
                _false2 = result;
                value = true;
                c4 = false;
                const _Object = Object;
                if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
                  let id2;
                  const saveGuildIdentityChanges = stateFromStores(_false2[16]).saveGuildIdentityChanges;
                  const tmp114 = stateFromStores(_false2[16]);
                  if (selectedGuild != null) {
                    id2 = selectedGuild.id;
                  }
                  pendingPronouns = 1;
                  c6 = 1;
                  const obj6 = { value: saveGuildIdentityChanges(id2, guildMemberChangesForUpdateRequest), done: false };
                  return obj6;
                } else {
                  const _Object2 = Object;
                  if (Object.keys(_false).length > 0) {
                    bannerOriginalMd5 = _false.bannerOriginalMd5;
                    let id3;
                    closure_8 = pendingPronouns(_false, closure_4);
                    const saveProfileChanges = stateFromStores(_false2[26]).saveProfileChanges;
                    const tmp107 = stateFromStores(_false2[26]);
                    const tmp108 = closure_8;
                    if (closure_132_7 != null) {
                      id3 = closure_132_7.id;
                    }
                    pendingPronouns = 2;
                    c6 = 1;
                    const obj8 = { value: saveProfileChanges(tmp108, id3, bannerOriginalMd5), done: false };
                    return obj8;
                  }
                }
              }
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            pendingPronouns = value;
            if (pendingPronouns.ok) {
              body = pendingPronouns.body;
              if (undefined !== closure_132_1) {
                const obj10 = { isGuildProfile: true, avatarHash: body.avatar, avatarId: guildMemberChangesForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                assetOrigin = undefined;
                const trackUserAvatarUpdated = stateFromStores(_false2[20]).trackUserAvatarUpdated;
                const tmp41 = stateFromStores(_false2[20]);
                if (closure_132_1 != null) {
                  assetOrigin = closure_132_1.assetOrigin;
                }
                const result1 = trackUserAvatarUpdated(obj10);
              }
              const tmp48 = _false2;
              if (tmp48) {
                const obj11 = { perks: items, content: stateFromStores(_false2[22]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: stateFromStores(_false2[21]).HexagonCampaignContentSurface.GUILD_PROFILE };
                items = [constants.DISPLAY_NAME_STYLE];
                const trackHexagonCampaignPerkAction = stateFromStores(_false2[21]).trackHexagonCampaignPerkAction;
                const tmp52 = stateFromStores(_false2[21]);
                const result2 = trackHexagonCampaignPerkAction(obj11);
              }
            } else {
              let avatar;
              if (pendingPronouns != null) {
                body = pendingPronouns.body;
                if (body != null) {
                  avatar = body.avatar;
                }
              }
              if (null != avatar) {
                const showGenericGuildProfileUpdateFailureToast2 = stateFromStores(_false2[23]).showGenericGuildProfileUpdateFailureToast;
                const self3 = this;
                const self4 = this;
                const tmp129 = stateFromStores(_false2[23]);
                const aPIError = new stateFromStores(_false2[24]).APIError(pendingPronouns);
                const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                stateFromStores = firstFieldErrorMessage;
                if (firstFieldErrorMessage == null) {
                  const intl = stateFromStores(_false2[25]).intl;
                  stateFromStores = intl.string(stateFromStores(_false2[25]).t.s35OuK);
                }
                const result3 = showGenericGuildProfileUpdateFailureToast2(stateFromStores);
                c4 = true;
              }
            }
            let tmp60 = value;
            if (tmp60) {
              let ok;
              if (pendingPronouns != null) {
                ok = pendingPronouns.ok;
              }
              let c1 = ok;
              if (ok == null) {
                c1 = false;
              }
              tmp60 = c1;
            }
            value = tmp60;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          pendingProfileEffect = value;
          let ok1;
          if (pendingProfileEffect != null) {
            ok1 = pendingProfileEffect.ok;
          }
          if (!ok1) {
            const self = this;
            const self2 = this;
            const aPIError1 = new stateFromStores(_false2[24]).APIError(pendingProfileEffect);
            firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
            if (null != firstFieldErrorMessage2) {
              const obj2 = stateFromStores(_false2[23]);
              const result4 = obj2.showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage2);
              c4 = true;
            }
          }
          let tmp21 = value;
          if (tmp21) {
            let ok2;
            if (pendingProfileEffect != null) {
              ok2 = pendingProfileEffect.ok;
            }
            _false2 = ok2;
            if (ok2 == null) {
              _false2 = false;
            }
            tmp21 = _false2;
          }
          value = tmp21;
        }
        const tmp82 = value || c4;
        if (!tmp82) {
          const showGenericGuildProfileUpdateFailureToast = stateFromStores(_false2[23]).showGenericGuildProfileUpdateFailureToast;
          const tmp86 = stateFromStores(_false2[23]);
          const intl2 = stateFromStores(_false2[25]).intl;
          const result5 = showGenericGuildProfileUpdateFailureToast(intl2.string(stateFromStores(_false2[25]).t.s35OuK));
        }
        const tmp93 = value;
        if (tmp93) {
          closure_132_13.delay();
        }
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } catch (tmp116) {
        c6 = 3;
        throw tmp116;
      }
    }
  });
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  let obj4 = { handleSubmit: useCallback(tmp19, items5), isDisabled: tmp17, isSubmitting: stateFromStores1, resetPending: tmp(tmp2[16]).resetAllPending, guild: selectedGuild, errors: obj3 };
  items5[13] = id1;
  items5[14] = memo;
  const merged2 = Object.assign(stateFromStoresObject);
  if (selectedGuild == null) {
    selectedGuild = stateFromStores2;
  }
  return obj4;
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default tmp2;
export const RESET_DELAY_MS = 200;
