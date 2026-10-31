// Module ID: 16555
// Function ID: 16556
// Name: useGuildProfileEditForm
// Dependencies: [109, 5, 19, 8731, 7772, 4926, 4885, 6772, 1383, 1072, 5039, 504, 13286, 4858, 11519, 16556, 11515, 5041, 7159, 16453, 6784, 16454, 6446, 1113, 8738, 2]
// Exports: default

// Module 16555 (useGuildProfileEditForm)
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import UserProfileSettingsStore2 from "UserProfileSettingsStore" /* 8731 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let c5, c6;

let closure_3 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = UserProfileSettingsStore2.IGNORE_GUILD_IDS;
let FormStates = Constants.FormStates;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let memo;
  let pendingNameplate;
  let pendingNickname;
  let selectedGuild;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = pendingNickname;
  let obj = stateFromStores(pendingNickname[11]);
  let items = [memo];
  stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  let obj2 = stateFromStores(pendingNickname[11]);
  const items1 = [selectedGuild, pendingNameplate];
  const tmp4 = selectedGuild;
  const tmp5 = pendingNameplate;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = { errors: selectedGuild.getErrors(selectedGuildId), selectedGuild: pendingNameplate.getGuild(selectedGuildId), formState: selectedGuild.getFormState() };
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  const pendingBio = stateFromStoresObject.pendingBio;
  let pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  selectedGuild = stateFromStoresObject.selectedGuild;
  const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  let pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
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
  const items2 = [tmp4, pendingProfileEffect];
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    const isSubmitting = selectedGuild.getFormState() === constants.SUBMITTING || pendingProfileEffect.isSubmitting;
    return isSubmitting;
  });
  let obj3 = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  memo = pendingThemeColors.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[13]).DelayedCall(200, stateFromStores(pendingNickname[14]).resetAllPending);
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => (function cleanup() {
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
  const tmp13 = pendingThemeColors;
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
  const tmp19 = pendingPronouns(function*(arg0, value) {
    let assetOrigin;
    let closure_0;
    let closure_4;
    let items;
    let member;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let guildMemberChangesForUpdateRequest;
        let _false2;
        let c4;
        let body;
        let firstFieldErrorMessage2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
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
                const obj14 = stateFromStores(_false2[16]);
                guildMemberChangesForUpdateRequest = obj14.getGuildMemberChangesForUpdateRequest(obj4);
                const obj5 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
                let id;
                const getProfileChangesForUpdateRequest = stateFromStores(_false2[16]).getProfileChangesForUpdateRequest;
                const tmp146 = stateFromStores(_false2[16]);
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
                  const obj7 = stateFromStores(_false2[17]);
                  result = obj7.hasHexagonCampaignDisplayNameFont(guildMemberChangesForUpdateRequest.displayNameStyles);
                }
                if (result) {
                  const hasHexagonCampaignDisplayNameFont = stateFromStores(_false2[17]).hasHexagonCampaignDisplayNameFont;
                  const tmp73 = stateFromStores(_false2[17]);
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
                  const saveGuildIdentityChanges = stateFromStores(_false2[14]).saveGuildIdentityChanges;
                  const tmp114 = stateFromStores(_false2[14]);
                  if (selectedGuild != null) {
                    id2 = selectedGuild.id;
                  }
                  c5 = 1;
                  c6 = 1;
                  const obj6 = { value: saveGuildIdentityChanges(id2, guildMemberChangesForUpdateRequest), done: false };
                  return obj6;
                } else {
                  const _Object2 = Object;
                  if (Object.keys(_false).length > 0) {
                    bannerOriginalMd5 = _false.bannerOriginalMd5;
                    let id3;
                    closure_8 = tmp(_false, value);
                    const saveProfileChanges = stateFromStores(_false2[24]).saveProfileChanges;
                    const tmp107 = stateFromStores(_false2[24]);
                    const tmp108 = closure_8;
                    if (closure_132_7 != null) {
                      id3 = closure_132_7.id;
                    }
                    c5 = 2;
                    c6 = 1;
                    const obj8 = { value: saveProfileChanges(tmp108, id3, bannerOriginalMd5), done: false };
                    return obj8;
                  }
                }
              }
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const trackUserAvatarUpdated = stateFromStores(_false2[18]).trackUserAvatarUpdated;
                const tmp41 = stateFromStores(_false2[18]);
                if (closure_132_1 != null) {
                  assetOrigin = closure_132_1.assetOrigin;
                }
                const result1 = trackUserAvatarUpdated(obj10);
              }
              const tmp48 = _false2;
              if (tmp48) {
                const obj11 = { perks: items, content: stateFromStores(_false2[20]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: stateFromStores(_false2[19]).HexagonCampaignContentSurface.GUILD_PROFILE };
                items = [constants.DISPLAY_NAME_STYLE];
                const trackHexagonCampaignPerkAction = stateFromStores(_false2[19]).trackHexagonCampaignPerkAction;
                const tmp52 = stateFromStores(_false2[19]);
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
                const showGenericGuildProfileUpdateFailureToast2 = stateFromStores(_false2[21]).showGenericGuildProfileUpdateFailureToast;
                const self3 = this;
                const self4 = this;
                const tmp129 = stateFromStores(_false2[21]);
                const aPIError = new stateFromStores(_false2[22]).APIError(pendingPronouns);
                const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                stateFromStores = firstFieldErrorMessage;
                if (firstFieldErrorMessage == null) {
                  const intl = stateFromStores(_false2[23]).intl;
                  stateFromStores = intl.string(stateFromStores(_false2[23]).t.s35OuK);
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
            const aPIError1 = new stateFromStores(_false2[22]).APIError(pendingProfileEffect);
            firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
            if (null != firstFieldErrorMessage2) {
              const obj2 = stateFromStores(_false2[21]);
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
          const showGenericGuildProfileUpdateFailureToast = stateFromStores(_false2[21]).showGenericGuildProfileUpdateFailureToast;
          const tmp86 = stateFromStores(_false2[21]);
          const intl2 = stateFromStores(_false2[23]).intl;
          const result5 = showGenericGuildProfileUpdateFailureToast(intl2.string(stateFromStores(_false2[23]).t.s35OuK));
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
  let obj4 = { handleSubmit: useCallback(tmp19, items5), isDisabled: tmp17, isSubmitting: stateFromStores1, resetPending: tmp(tmp2[14]).resetAllPending, guild: selectedGuild, errors: obj3 };
  items5[13] = id1;
  items5[14] = memo;
  const merged2 = Object.assign(stateFromStoresObject);
  if (selectedGuild == null) {
    selectedGuild = stateFromStores2;
  }
  return obj4;
};
export const RESET_DELAY_MS = 200;
