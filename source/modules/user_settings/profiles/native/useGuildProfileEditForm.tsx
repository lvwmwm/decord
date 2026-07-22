// Module ID: 13499
// Function ID: 102424
// Name: useGuildProfileEditForm
// Dependencies: []
// Exports: default

// Module 13499 (useGuildProfileEditForm)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const IGNORE_GUILD_IDS = arg1(dependencyMap[3]).IGNORE_GUILD_IDS;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const FormStates = arg1(dependencyMap[8]).FormStates;
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let obj = arg1(dependencyMap[9]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => pendingDisplayNameStyles.getCurrentUser());
  const arg1 = stateFromStores;
  const items1 = [closure_7, closure_10];
  const stateFromStoresObject = arg1(dependencyMap[9]).useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = {};
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    obj["errors"] = selectedGuild.getErrors(selectedGuildId);
    obj["selectedGuild"] = pendingProfileFrame.getGuild(selectedGuildId);
    obj["formState"] = selectedGuild.getFormState();
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  const importDefault = pendingAvatar;
  const pendingNickname = stateFromStoresObject.pendingNickname;
  const dependencyMap = pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  let closure_3 = pendingBanner;
  const pendingBio = stateFromStoresObject.pendingBio;
  let closure_4 = pendingBio;
  const pendingPronouns = stateFromStoresObject.pendingPronouns;
  const callback = pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  const React = pendingThemeColors;
  const selectedGuild = stateFromStoresObject.selectedGuild;
  closure_7 = selectedGuild;
  const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const IGNORE_GUILD_IDS = pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  let closure_9 = pendingProfileEffect;
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  closure_10 = pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  let closure_11 = pendingNameplate;
  const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  closure_12 = pendingDisplayNameStyles;
  const obj2 = arg1(dependencyMap[9]);
  let id;
  if (null != selectedGuild) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = arg1(dependencyMap[10]).useGuildAutomodProfileQuarantineErrors(id);
  const obj3 = arg1(dependencyMap[10]);
  const items2 = [closure_7, closure_9];
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items2, () => {
    let isSubmitting = selectedGuild.getFormState() === memo.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = pendingProfileEffect.isSubmitting;
    }
    return isSubmitting;
  });
  obj = {};
  const merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  const memo = React.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[11]).DelayedCall(200, () => {
      callback2(closure_2[12]).wait(callback(closure_2[13]).resetAllPending);
    });
    return delayedCall;
  }, []);
  const FormStates = memo;
  const items3 = [memo];
  const effect = React.useEffect(() => () => {
    closure_13.cancel();
    callback2(closure_2[12]).wait(callback(closure_2[13]).resetAllPending);
  }, items3);
  let closure_14 = importDefault(dependencyMap[14])();
  const obj4 = arg1(dependencyMap[9]);
  const items4 = [closure_10, closure_11];
  let stateFromStores2 = arg1(dependencyMap[9]).useStateFromStores(items4, () => {
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
    tmp12 = stateFromStoresObject.formState === FormStates.CLOSED;
  }
  obj = {};
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [tmp12, stateFromStores, pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles, pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, , ];
  let id1;
  const obj6 = arg1(dependencyMap[9]);
  if (null != selectedGuild) {
    id1 = selectedGuild.id;
  }
  items5[13] = id1;
  items5[14] = memo;
  obj.handleSubmit = React.useCallback(callback(tmp), items5);
  obj.isDisabled = tmp12;
  obj.isSubmitting = stateFromStores1;
  obj.resetPending = arg1(dependencyMap[13]).resetAllPending;
  const merged2 = Object.assign(stateFromStoresObject);
  if (null != selectedGuild) {
    stateFromStores2 = selectedGuild;
  }
  obj["guild"] = stateFromStores2;
  obj["errors"] = obj;
  return obj;
};
export const RESET_DELAY_MS = 200;
