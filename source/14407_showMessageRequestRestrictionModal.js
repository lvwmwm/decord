// Module ID: 14407
// Function ID: 108693
// Name: showMessageRequestRestrictionModal
// Dependencies: []

// Module 14407 (showMessageRequestRestrictionModal)
function showMessageRequestRestrictionModal(arg0) {
  const arg1 = arg0;
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.yAfu1p);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.body = intl2.string(arg1(dependencyMap[6]).t.Ry2z74);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.confirmText = intl3.string(arg1(dependencyMap[6]).t.p89ACt);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.cancelText = intl4.string(arg1(dependencyMap[6]).t.gm1Vej);
  obj.confirmColor = importDefault(dependencyMap[7]).Colors.RED;
  obj.onConfirm = function onConfirm() {
    const MessageRequestRestrictedDefault = arg0(closure_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(arg0);
    const MessageRequestRestrictedGuildIds = arg0(closure_2[4]).MessageRequestRestrictedGuildIds;
    if (arg0) {
      let guildIds = guildIds.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj.onCancel = function onCancel() {
    const MessageRequestRestrictedDefault = arg0(closure_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(arg0);
  };
  obj.show(obj);
}
function useIsDisabled() {
  const defaultGuildsRestricted = arg1(dependencyMap[12]).useDefaultGuildsRestricted();
  const selectedGuildId = callback2().selectedGuildId;
  const RestrictedGuildIds = arg1(dependencyMap[4]).RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  let hasItem = setting.includes(selectedGuildId);
  const obj = arg1(dependencyMap[12]);
  const tmp3 = selectedGuildId !== closure_6 || !arg1(dependencyMap[13]).useIsParentallyControlled();
  let tmp4 = !tmp3;
  if (tmp3) {
    if (selectedGuildId === closure_6) {
      hasItem = defaultGuildsRestricted;
    }
    tmp4 = hasItem;
  }
  return tmp4;
}
let closure_3 = importDefault(dependencyMap[0]);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[3]).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
let obj = arg1(dependencyMap[14]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.3o2ojh);
  },
  useDescription() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.o5fjz6);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const MessageRequestRestrictedDefault = arg1(dependencyMap[4]).MessageRequestRestrictedDefault;
    const tmp = useIsDisabled();
    const MessageRequestRestrictedGuildIds = arg1(dependencyMap[4]).MessageRequestRestrictedGuildIds;
    const setting = MessageRequestRestrictedGuildIds.useSetting();
    let tmp3 = !setting.includes(selectedGuildId);
    let tmp4 = !tmp;
    if (tmp4) {
      if (selectedGuildId === closure_6) {
        tmp3 = tmp2;
      }
      tmp4 = tmp3;
    }
    return tmp4;
  },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    if (!arg0) {
      let obj = arg1(dependencyMap[8]);
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: arg1(dependencyMap[10]).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const result = importDefault(dependencyMap[9]).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(dependencyMap[9]);
      }
    }
    const tmp7 = callback();
    if (tmp7 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = arg1(dependencyMap[11]).getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp7);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp7);
      }
      const MessageRequestRestrictedGuildIds = arg1(dependencyMap[4]).MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = arg1(dependencyMap[11]);
    }
  }
};
const toggle = obj.createToggle(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default toggle;
export { showMessageRequestRestrictionModal };
