// Module ID: 14922
// Function ID: 14923
// Name: useGuildProfileEditForm
// Dependencies: [109, 5, 19, 8284, 7320, 2087, 5963, 1390, 1085, 558, 576, 504, 11457, 2060, 10642, 14923, 10638, 6677, 14835, 8291, 5635, 1126, 2]

// Module 14922 (useGuildProfileEditForm)
import Constants from "Constants" /* 1085 */;
import UserProfileSettingsStore2 from "UserProfileSettingsStore" /* 8284 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import GuildStore from "GuildStore" /* 2087 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import UserStore_mod from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0;

let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = UserProfileSettingsStore2.IGNORE_GUILD_IDS;
let UserStore = UserStore_mod;
let FormStates = Constants.FormStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildProfileEditForm() {
  let currentUser;
  let pendingAvatarDecoration;
  let pendingNameplate;
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
  let obj = stateFromStores(pendingNickname[10]);
  const cResult = obj.c(37);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class G {
      constructor() {
        return UserStore.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = G;
    tmp5 = G;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [pendingAvatarDecoration, ];
    class G {
      constructor() {
        return UserStore.getCurrentUser();
      }
    }
    items1[1] = pendingNameplate;
    class F {
      constructor() {
        const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
        const obj = { errors: pendingAvatarDecoration.getErrors(selectedGuildId), selectedGuild: pendingNameplate.getGuild(selectedGuildId), formState: pendingAvatarDecoration.getFormState() };
        const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    tmp9 = F;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult5 = tmp(tmp2[11]);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp8, tmp9);
  let pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  let pendingBanner = stateFromStoresObject.pendingBanner;
  let pendingBio = stateFromStoresObject.pendingBio;
  let pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  const selectedGuild = stateFromStoresObject.selectedGuild;
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  pendingNameplate = stateFromStoresObject.pendingNameplate;
  const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const formState = stateFromStoresObject.formState;
  let id;
  const useGuildAutomodProfileQuarantineErrors = tmp(tmp2[12]).useGuildAutomodProfileQuarantineErrors;
  tmp(tmp2[12]);
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = useGuildAutomodProfileQuarantineErrors(id);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [pendingAvatarDecoration, ];
    class G {
      constructor() {
        return UserStore.getCurrentUser();
      }
    }
    items2[1] = pendingProfileFrame;
    class A {
      constructor() {
        const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[4] = items2;
    cResult[5] = A;
    tmp16 = A;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult7 = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp15, tmp16);
  if (cResult[6] === guildAutomodProfileQuarantineErrors) {
    let tmp25;
    let tmp24;
    let tmp30;
    const _Symbol = Symbol;
    class G {
      constructor() {
        return UserStore.getCurrentUser();
      }
    }
    UserStore = tmp23;
    class A {
      constructor() {
        const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
        return isSubmitting;
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function x() {
        return function cleanup() {
          currentUser.cancel();
          const obj = stateFromStores(pendingNickname[14]);
          obj.resetAllPending();
        };
      };
      const items3 = [tmp23];
      class G {
        constructor() {
          return UserStore.getCurrentUser();
        }
      }
      cResult[10] = fn;
      class A {
        constructor() {
          const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
          return isSubmitting;
        }
      }
      cResult[11] = items3;
      tmp25 = items3;
      tmp24 = fn;
    } else {
      tmp24 = cResult[10];
      tmp25 = cResult[11];
    }
    const effect = selectedGuild.useEffect(tmp24, tmp25);
    const tmp29 = pendingAvatar(tmp2[15])();
    FormStates = tmp29;
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [pendingNameplate, ];
      class G {
        constructor() {
          return UserStore.getCurrentUser();
        }
      }
      items4[1] = pendingDisplayNameStyles;
      class A {
        constructor() {
          const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
          return isSubmitting;
        }
      }
      cResult[12] = items4;
      tmp30 = items4;
    } else {
      tmp30 = cResult[12];
    }
    if (cResult[13] !== tmp29) {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(constants);
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
          return UserStore.getCurrentUser();
        }
      }
      cResult[14] = V;
      class A {
        constructor() {
          const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
          return isSubmitting;
        }
      }
    } else {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(constants);
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
    const tmpResult8 = tmp(tmp2[11]);
    const stateFromStores2 = tmpResult8.useStateFromStores(tmp30, tmp32);
    if (!stateFromStores1) {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(constants);
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
    let closure_15 = tmp34;
    if (cResult[15] === tmp34) {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(constants);
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
      let c3;
      let closure_2;
      let guildMemberChangesForUpdateRequest;
      let tmp2;
      pendingBanner = tmp;
      const tmp101 = closure_1_15;
      if (!tmp101) {
        if (null != c0) {
          const obj4 = { pendingAvatar, pendingNickname: tmp2, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
          const obj12 = _false(pendingNickname[16]);
          guildMemberChangesForUpdateRequest = obj12.getGuildMemberChangesForUpdateRequest(obj4);
          const obj5 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
          let id;
          const getProfileChangesForUpdateRequest = _false(pendingNickname[16]).getProfileChangesForUpdateRequest;
          const tmp112 = _false(pendingNickname[16]);
          if (user != null) {
            id = user.id;
          }
          pendingAvatar = getProfileChangesForUpdateRequest(obj5, id);
          tmp2 = true;
          c3 = false;
          const _Object = Object;
          if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
            let id1;
            const saveGuildIdentityChanges = _false(pendingNickname[14]).saveGuildIdentityChanges;
            const tmp84 = _false(pendingNickname[14]);
            if (user != null) {
              id1 = user.id;
            }
            pendingBio = 1;
            pendingPronouns = 1;
            const obj6 = { value: saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest), done: false };
            return obj6;
          }
        }
      }
      yield "IconComponent";
      if (1 === tmp5) {
        if (arg0 === 1) {
          pendingPronouns = 3;
          throw value;
        } else if (arg0 === 2) {
          pendingPronouns = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let body;
          pendingBio = value;
          if (pendingBio.ok) {
            body = pendingBio.body;
            if (undefined !== pendingAvatar) {
              const obj8 = { isGuildProfile: true, avatarHash: body.avatar, avatarId: guildMemberChangesForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
              assetOrigin = undefined;
              const trackUserAvatarUpdated = _false(pendingNickname[17]).trackUserAvatarUpdated;
              const tmp33 = _false(pendingNickname[17]);
              if (pendingAvatar != null) {
                assetOrigin = pendingAvatar.assetOrigin;
              }
              const result = trackUserAvatarUpdated(obj8);
            }
          } else {
            let avatar;
            if (pendingBio != null) {
              body = pendingBio.body;
              if (body != null) {
                avatar = body.avatar;
              }
            }
            if (null != avatar) {
              const obj11 = _false(pendingNickname[18]);
              const result1 = obj11.showGenericGuildProfileUpdateFailureToast(pendingBio.body.avatar);
              c3 = true;
            }
          }
          let tmp40 = tmp2;
          if (tmp40) {
            let ok;
            if (pendingBio != null) {
              ok = pendingBio.ok;
            }
            c0 = ok;
            if (ok == null) {
              c0 = false;
            }
            tmp40 = c0;
          }
          tmp2 = tmp40;
        }
      } else if (arg0 === 1) {
        pendingPronouns = 3;
        throw value;
      } else if (arg0 === 2) {
        pendingPronouns = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        pendingAvatarDecoration = value;
        let ok1;
        if (pendingAvatarDecoration != null) {
          ok1 = pendingAvatarDecoration.ok;
        }
        if (!ok1) {
          const self = this;
          const self2 = this;
          const aPIError = new _false(pendingNickname[20]).APIError(pendingAvatarDecoration);
          const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
          if (null != firstFieldErrorMessage) {
            const obj2 = _false(pendingNickname[18]);
            const result2 = obj2.showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage);
            c3 = true;
          }
        }
        let tmp21 = tmp2;
        if (tmp21) {
          let ok2;
          if (pendingAvatarDecoration != null) {
            ok2 = pendingAvatarDecoration.ok;
          }
          pendingAvatar = ok2;
          if (ok2 == null) {
            pendingAvatar = false;
          }
          tmp21 = pendingAvatar;
        }
        tmp2 = tmp21;
      }
      const tmp52 = tmp2 || c3;
      if (!tmp52) {
        const showGenericGuildProfileUpdateFailureToast = _false(pendingNickname[18]).showGenericGuildProfileUpdateFailureToast;
        const tmp56 = _false(pendingNickname[18]);
        const intl = _false(pendingNickname[21]).intl;
        const result3 = showGenericGuildProfileUpdateFailureToast(intl.string(_false(pendingNickname[21]).t.s35OuK));
      }
      const tmp63 = tmp2;
      if (tmp63) {
        currentUser.delay();
      }
      return tmp2;
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
      class V {
        constructor() {
          const guild = GuildStore.getGuild(constants);
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
  let memo;
  let pendingAvatarDecoration;
  let pendingNameplate;
  let pendingNickname;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = pendingNickname;
  let obj = stateFromStores(pendingNickname[11]);
  const items = [memo];
  stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  let obj2 = stateFromStores(pendingNickname[11]);
  const items1 = [pendingAvatarDecoration, pendingNameplate];
  const tmp4 = pendingAvatarDecoration;
  const tmp5 = pendingNameplate;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
    const obj = { errors: pendingAvatarDecoration.getErrors(selectedGuildId), selectedGuild: pendingNameplate.getGuild(selectedGuildId), formState: pendingAvatarDecoration.getFormState() };
    const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  let pendingBio = stateFromStoresObject.pendingBio;
  const pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  let selectedGuild = stateFromStoresObject.selectedGuild;
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  pendingNameplate = stateFromStoresObject.pendingNameplate;
  const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const formState = stateFromStoresObject.formState;
  let id;
  const useGuildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[12]).useGuildAutomodProfileQuarantineErrors;
  const tmp7 = stateFromStores(pendingNickname[12]);
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = useGuildAutomodProfileQuarantineErrors(id);
  const items2 = [tmp4, pendingProfileFrame];
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    const isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING || pendingProfileFrame.isSubmitting;
    return isSubmitting;
  });
  const obj3 = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  memo = selectedGuild.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[13]).DelayedCall(200, stateFromStores(pendingNickname[14]).resetAllPending);
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = selectedGuild.useEffect(() => (function cleanup() {
    memo.cancel();
    const obj = stateFromStores(pendingNickname[14]);
    obj.resetAllPending();
  }), items3);
  FormStates = pendingAvatar(tmp2[15])();
  const items4 = [tmp5, pendingDisplayNameStyles];
  let tmp17 = stateFromStores1;
  const tmpResult2 = tmp(tmp2[11]);
  const stateFromStores2 = tmpResult2.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(constants);
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
  let closure_15 = tmp17;
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
    let _false;
    let assetOrigin;
    let c3;
    let guildMemberChangesForUpdateRequest;
    let v3;
    value = tmp2;
    const tmp101 = closure_15;
    if (!tmp101) {
      if (null != stateFromStores) {
        const obj4 = { pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
        const obj12 = _false(value[16]);
        guildMemberChangesForUpdateRequest = obj12.getGuildMemberChangesForUpdateRequest(obj4);
        const obj5 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
        let id;
        const getProfileChangesForUpdateRequest = _false(value[16]).getProfileChangesForUpdateRequest;
        const tmp112 = _false(value[16]);
        if (selectedGuild != null) {
          id = selectedGuild.id;
        }
        const _false2 = getProfileChangesForUpdateRequest(obj5, id);
        value = true;
        c3 = false;
        const _Object = Object;
        if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
          let id1;
          const saveGuildIdentityChanges = _false(value[14]).saveGuildIdentityChanges;
          const tmp84 = _false(value[14]);
          if (selectedGuild != null) {
            id1 = selectedGuild.id;
          }
          let c4 = 1;
          let c5 = 1;
          const obj6 = { value: saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest), done: false };
          return obj6;
        }
      }
    }
    yield "IconComponent";
    if (1 === tmp5) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let body;
        pendingBio = value;
        if (pendingBio.ok) {
          body = pendingBio.body;
          if (undefined !== closure_131_1) {
            const obj8 = { isGuildProfile: true, avatarHash: body.avatar, avatarId: guildMemberChangesForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
            assetOrigin = undefined;
            const trackUserAvatarUpdated = _false(value[17]).trackUserAvatarUpdated;
            const tmp33 = _false(value[17]);
            if (closure_131_1 != null) {
              assetOrigin = closure_131_1.assetOrigin;
            }
            const result = trackUserAvatarUpdated(obj8);
          }
        } else {
          let avatar;
          if (pendingBio != null) {
            body = pendingBio.body;
            if (body != null) {
              avatar = body.avatar;
            }
          }
          if (null != avatar) {
            const obj11 = _false(value[18]);
            const result1 = obj11.showGenericGuildProfileUpdateFailureToast(pendingBio.body.avatar);
            c3 = true;
          }
        }
        let tmp40 = value;
        if (tmp40) {
          let ok;
          if (pendingBio != null) {
            ok = pendingBio.ok;
          }
          _false = ok;
          if (ok == null) {
            _false = false;
          }
          tmp40 = _false;
        }
        value = tmp40;
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } else {
      pendingAvatarDecoration = value;
      let ok1;
      if (pendingAvatarDecoration != null) {
        ok1 = pendingAvatarDecoration.ok;
      }
      if (!ok1) {
        const self = this;
        const self2 = this;
        const aPIError = new _false(value[20]).APIError(pendingAvatarDecoration);
        const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
        if (null != firstFieldErrorMessage) {
          const obj2 = _false(value[18]);
          const result2 = obj2.showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage);
          c3 = true;
        }
      }
      let tmp21 = value;
      if (tmp21) {
        let ok2;
        if (pendingAvatarDecoration != null) {
          ok2 = pendingAvatarDecoration.ok;
        }
        let c1 = ok2;
        if (ok2 == null) {
          c1 = false;
        }
        tmp21 = c1;
      }
      value = tmp21;
    }
    const tmp52 = value || c3;
    if (!tmp52) {
      const showGenericGuildProfileUpdateFailureToast = _false(value[18]).showGenericGuildProfileUpdateFailureToast;
      const tmp56 = _false(value[18]);
      const intl = _false(value[21]).intl;
      const result3 = showGenericGuildProfileUpdateFailureToast(intl.string(_false(value[21]).t.s35OuK));
    }
    const tmp63 = value;
    if (tmp63) {
      closure_131_13.delay();
    }
    return value;
  });
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  let obj4 = { handleSubmit: useCallback(tmp19, items5), isDisabled: tmp17, isSubmitting: stateFromStores1, resetPending: tmp(tmp2[14]).resetAllPending, guild: selectedGuild, errors: obj3 };
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
