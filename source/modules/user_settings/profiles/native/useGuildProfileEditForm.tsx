// Module ID: 13664
// Function ID: 104904
// Name: useGuildProfileEditForm
// Dependencies: [29, 5, 31, 7930, 6855, 1838, 4970, 1849, 653, 566, 11043, 4015, 686, 9817, 13665, 9812, 9267, 13628, 7936, 4029, 2]
// Exports: default

// Module 13664 (useGuildProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { IGNORE_GUILD_IDS } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { FormStates } from "ME";

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
const result = require("result").fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let obj = stateFromStores(pendingNickname[9]);
  const items = [pendingDisplayNameStyles];
  stateFromStores = obj.useStateFromStores(items, () => pendingDisplayNameStyles.getCurrentUser());
  const items1 = [selectedGuild, pendingProfileFrame];
  const stateFromStoresObject = stateFromStores(pendingNickname[9]).useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = {};
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    obj["errors"] = selectedGuild.getErrors(selectedGuildId);
    obj["selectedGuild"] = pendingProfileFrame.getGuild(selectedGuildId);
    obj["formState"] = selectedGuild.getFormState();
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  const pendingBio = stateFromStoresObject.pendingBio;
  const pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  selectedGuild = stateFromStoresObject.selectedGuild;
  const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  const obj2 = stateFromStores(pendingNickname[9]);
  let id;
  if (null != selectedGuild) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[10]).useGuildAutomodProfileQuarantineErrors(id);
  const obj3 = stateFromStores(pendingNickname[10]);
  const items2 = [selectedGuild, pendingProfileEffect];
  const stateFromStores1 = stateFromStores(pendingNickname[9]).useStateFromStores(items2, () => {
    let isSubmitting = selectedGuild.getFormState() === memo.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = pendingProfileEffect.isSubmitting;
    }
    return isSubmitting;
  });
  obj = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  const memo = pendingThemeColors.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[11]).DelayedCall(200, () => {
      pendingAvatar(pendingNickname[12]).wait(stateFromStores(pendingNickname[13]).resetAllPending);
    });
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => () => {
    outer1_13.cancel();
    pendingAvatar(pendingNickname[12]).wait(stateFromStores(pendingNickname[13]).resetAllPending);
  }, items3);
  let closure_14 = pendingAvatar(pendingNickname[14])();
  const obj4 = stateFromStores(pendingNickname[9]);
  const items4 = [pendingProfileFrame, pendingNameplate];
  let stateFromStores2 = stateFromStores(pendingNickname[9]).useStateFromStores(items4, () => {
    const guild = pendingProfileFrame.getGuild(closure_14);
    let id;
    if (null != guild) {
      id = guild.id;
    }
    if (null != id) {
      if (!pendingAvatarDecoration.has(guild.id)) {
        return guild;
      }
    }
    return pendingProfileFrame.getGuild(pendingNameplate.getFlattenedGuildIds()[0]);
  });
  let tmp12 = stateFromStores1;
  if (!stateFromStores1) {
    tmp12 = stateFromStoresObject.formState === memo.CLOSED;
  }
  let closure_15 = tmp12;
  obj = {};
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [tmp12, stateFromStores, pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles, pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, , ];
  let id1;
  const obj6 = stateFromStores(pendingNickname[9]);
  if (null != selectedGuild) {
    id1 = selectedGuild.id;
  }
  items5[13] = id1;
  items5[14] = memo;
  obj.handleSubmit = pendingThemeColors.useCallback(pendingPronouns(tmp), items5);
  obj.isDisabled = tmp12;
  obj.isSubmitting = stateFromStores1;
  obj.resetPending = stateFromStores(pendingNickname[13]).resetAllPending;
  const merged2 = Object.assign(stateFromStoresObject);
  if (null != selectedGuild) {
    stateFromStores2 = selectedGuild;
  }
  obj["guild"] = stateFromStores2;
  obj["errors"] = obj;
  return obj;
};
export const RESET_DELAY_MS = 200;
