// Module ID: 14204
// Function ID: 14205
// Name: useGuildProfileEditForm
// Dependencies: [109, 5, 19, 7605, 7035, 2067, 5750, 1372, 1074, 504, 11350, 2040, 573, 9229, 14205, 10551, 6409, 14162, 7612, 4735, 1115, 2]
// Exports: default

// Module 14204 (useGuildProfileEditForm)
import Constants from "Constants" /* 1074 */;
import UserProfileSettingsStore2 from "UserProfileSettingsStore" /* 7605 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let closure_3 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = UserProfileSettingsStore2.IGNORE_GUILD_IDS;
const FormStates = Constants.FormStates;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let pendingDisplayNameStyles;
  let pendingNickname;
  let pendingProfileFrame;
  let selectedGuild;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = pendingNickname;
  let obj = stateFromStores(pendingNickname[9]);
  const items = [pendingDisplayNameStyles];
  stateFromStores = obj.useStateFromStores(items, () => pendingDisplayNameStyles.getCurrentUser());
  let obj2 = stateFromStores(pendingNickname[9]);
  const items1 = [selectedGuild, pendingProfileFrame];
  const tmp4 = selectedGuild;
  const tmp5 = pendingProfileFrame;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = { errors: selectedGuild.getErrors(selectedGuildId), selectedGuild: pendingProfileFrame.getGuild(selectedGuildId), formState: selectedGuild.getFormState() };
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  let pendingBio = stateFromStoresObject.pendingBio;
  const pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  selectedGuild = stateFromStoresObject.selectedGuild;
  let pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const formState = stateFromStoresObject.formState;
  let id;
  const useGuildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[10]).useGuildAutomodProfileQuarantineErrors;
  const tmp7 = stateFromStores(pendingNickname[10]);
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = useGuildAutomodProfileQuarantineErrors(id);
  const items2 = [tmp4, pendingProfileEffect];
  const tmpResult = tmp(tmp2[9]);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    const isSubmitting = selectedGuild.getFormState() === memo.SUBMITTING || pendingProfileEffect.isSubmitting;
    return isSubmitting;
  });
  const obj3 = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  const memo = pendingThemeColors.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[11]).DelayedCall(200, () => {
      const obj = pendingAvatar(pendingNickname[12]);
      obj.wait(stateFromStores(pendingNickname[13]).resetAllPending);
    });
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => () => {
    memo.cancel();
    const obj = pendingAvatar(pendingNickname[12]);
    obj.wait(stateFromStores(pendingNickname[13]).resetAllPending);
  }, items3);
  let closure_14 = pendingAvatar(tmp2[14])();
  const items4 = [tmp5, pendingNameplate];
  let tmp17 = stateFromStores1;
  const tmpResult2 = tmp(tmp2[9]);
  const stateFromStores2 = tmpResult2.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(closure_14);
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
  const tmp13 = pendingThemeColors;
  if (!stateFromStores1) {
    tmp17 = formState === memo.CLOSED;
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
  const tmp19 = pendingPronouns(function*(arg0, value) {
    let _false;
    let assetOrigin;
    let c3;
    let guildMemberChangesForUpdateRequest;
    let v2;
    value = tmp2;
    const tmp101 = closure_15;
    if (!tmp101) {
      if (null != stateFromStores) {
        const obj4 = { pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
        const obj12 = _false(value[15]);
        guildMemberChangesForUpdateRequest = obj12.getGuildMemberChangesForUpdateRequest(obj4);
        const obj5 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
        let id;
        const getProfileChangesForUpdateRequest = _false(value[15]).getProfileChangesForUpdateRequest;
        const tmp112 = _false(value[15]);
        if (selectedGuild != null) {
          id = selectedGuild.id;
        }
        const _false2 = getProfileChangesForUpdateRequest(obj5, id);
        value = true;
        c3 = false;
        const _Object = Object;
        if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
          let id1;
          const saveGuildIdentityChanges = _false(value[13]).saveGuildIdentityChanges;
          const tmp84 = _false(value[13]);
          if (selectedGuild != null) {
            id1 = selectedGuild.id;
          }
          pendingBio = 1;
          let c5 = 1;
          const obj6 = { value: saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest), done: false };
          return obj6;
        }
      }
    }
    yield "HermesInternal";
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
            const trackUserAvatarUpdated = _false(value[16]).trackUserAvatarUpdated;
            const tmp33 = _false(value[16]);
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
            const obj11 = _false(value[17]);
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
        const aPIError = new _false(value[19]).APIError(pendingAvatarDecoration);
        const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
        if (null != firstFieldErrorMessage) {
          const obj2 = _false(value[17]);
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
      const showGenericGuildProfileUpdateFailureToast = _false(value[17]).showGenericGuildProfileUpdateFailureToast;
      const tmp56 = _false(value[17]);
      const intl = _false(value[20]).intl;
      const result3 = showGenericGuildProfileUpdateFailureToast(intl.string(_false(value[20]).t.s35OuK));
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
  let obj4 = { handleSubmit: useCallback(tmp19, items5), isDisabled: tmp17, isSubmitting: stateFromStores1, resetPending: tmp(tmp2[13]).resetAllPending, guild: selectedGuild, errors: obj3 };
  items5[13] = id1;
  items5[14] = memo;
  const merged2 = Object.assign(stateFromStoresObject);
  if (selectedGuild == null) {
    selectedGuild = stateFromStores2;
  }
  return obj4;
};
export const RESET_DELAY_MS = 200;
