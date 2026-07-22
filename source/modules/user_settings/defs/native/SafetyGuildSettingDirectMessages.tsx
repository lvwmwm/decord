// Module ID: 14422
// Function ID: 108777
// Name: toggle
// Dependencies: []

// Module 14422 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[3]).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
let obj = arg1(dependencyMap[12]);
obj = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = arg1(dependencyMap[11]).useAllowFriendsFromMutualGuildsOnly();
    const intl = arg1(dependencyMap[8]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[8]).t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = arg1(dependencyMap[11]).useAllowFriendsFromMutualGuildsOnly();
    if (callback2().selectedGuildId === closure_6) {
      const intl2 = arg1(dependencyMap[8]).intl;
      const string2 = intl2.string;
      let XXGmuB = arg1(dependencyMap[8]).t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = arg1(dependencyMap[8]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[8]).t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
      return stringResult;
    }
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const obj = arg1(dependencyMap[5]);
    const RestrictedGuildIds = arg1(dependencyMap[6]).RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let tmp2 = !setting.includes(selectedGuildId);
    if (selectedGuildId === closure_6) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = callback();
    if (tmp === closure_6) {
      function showGuildRestrictionModal(arg0) {
        let obj = callback(closure_2[7]);
        obj = {};
        const intl = arg0(closure_2[8]).intl;
        obj.title = intl.string(arg0(closure_2[8]).t.Hq4ApA);
        const intl2 = arg0(closure_2[8]).intl;
        obj.body = intl2.string(arg0(closure_2[8]).t.qTCYun);
        const intl3 = arg0(closure_2[8]).intl;
        obj.confirmText = intl3.string(arg0(closure_2[8]).t.p89ACt);
        const intl4 = arg0(closure_2[8]).intl;
        obj.cancelText = intl4.string(arg0(closure_2[8]).t.gm1Vej);
        obj.confirmColor = callback(closure_2[9]).Colors.RED;
        obj.onConfirm = function onConfirm() {
          const DefaultGuildsRestrictedV2 = arg0(closure_2[6]).DefaultGuildsRestrictedV2;
          DefaultGuildsRestrictedV2.updateSetting(arg0);
          const RestrictedGuildIds = arg0(closure_2[6]).RestrictedGuildIds;
          if (arg0) {
            let guildIds = guildIds.getGuildIds();
          } else {
            guildIds = [];
          }
          RestrictedGuildIds.updateSetting(guildIds);
        };
        obj.onCancel = function onCancel() {
          const DefaultGuildsRestrictedV2 = arg0(closure_2[6]).DefaultGuildsRestrictedV2;
          DefaultGuildsRestrictedV2.updateSetting(arg0);
        };
        obj.show(obj);
      }(!arg0);
    } else {
      const sanitizedRestrictedGuilds = arg1(dependencyMap[10]).getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      const RestrictedGuildIds = arg1(dependencyMap[6]).RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const obj = arg1(dependencyMap[10]);
    }
  },
  useIsDisabled() {
    let isParentallyControlled = arg1(dependencyMap[4]).useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
};
const toggle = obj.createToggle(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default toggle;
