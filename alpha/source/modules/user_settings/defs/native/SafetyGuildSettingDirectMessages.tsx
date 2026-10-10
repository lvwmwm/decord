// Module ID: 16265
// Function ID: 16266
// Name: SafetyGuildSettingDirectMessages
// Dependencies: [2087, 16257, 7992, 10664, 558, 15073, 576, 16260, 2041, 5299, 1126, 5398, 6683, 16266, 10663, 2]

// Module 16265 (SafetyGuildSettingDirectMessages)
import react from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import AlertDefault from "Alert" /* 5398 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingRendererConstants from "SettingRendererConstants" /* 10664 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 16260 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 16266 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 16257 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_6 = SettingRendererConstants.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisabled() {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled() && tmp2 === closure_6;
  return isParentallyControlled;
}) : (function useIsDisabled() {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled() && tmp2 === closure_6;
  return isParentallyControlled;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  const obj = react;
  const cResult = obj.c(3);
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const obj2 = DefultGuildsRestrictedSetting;
  let tmp2 = !obj2.useDefaultGuildsRestricted();
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    let tmp3;
    if (cResult[1] === setting) {
      tmp3 = cResult[2];
    }
    if (selectedGuildId !== closure_6) {
      tmp2 = !tmp3;
    }
    return tmp2;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp3 = hasItem;
}) : (function useValue() {
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const obj = DefultGuildsRestrictedSetting;
  const tmp = !obj.useDefaultGuildsRestricted();
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  let tmp2 = !setting.includes(selectedGuildId);
  if (selectedGuildId === closure_6) {
    tmp2 = tmp;
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDescription() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const obj2 = useAllowFriendsFromMutualGuildsOnly;
  const allowFriendsFromMutualGuildsOnly = obj2.useAllowFriendsFromMutualGuildsOnly();
  if (selectedGuildId === closure_6) {
    let tmp7;
    if (cResult[0] !== allowFriendsFromMutualGuildsOnly) {
      let string2Result;
      const intl2 = tmp(1126).intl;
      const string2 = intl2.string;
      const t2 = tmp(1126).t;
      if (allowFriendsFromMutualGuildsOnly) {
        string2Result = string2(t2.XXGmuB);
      } else {
        string2Result = string2(t2.wbYDfT);
      }
      cResult[0] = allowFriendsFromMutualGuildsOnly;
      cResult[1] = string2Result;
      tmp7 = string2Result;
    } else {
      tmp7 = cResult[1];
    }
    tmp5 = tmp7;
  } else if (cResult[2] !== allowFriendsFromMutualGuildsOnly) {
    let stringResult;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (allowFriendsFromMutualGuildsOnly) {
      stringResult = string(t.F9WY3f);
    } else {
      stringResult = string(t.G7c3Xo);
    }
    cResult[2] = allowFriendsFromMutualGuildsOnly;
    cResult[3] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : (function useDescription() {
  let stringResult;
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const obj = useAllowFriendsFromMutualGuildsOnly;
  const allowFriendsFromMutualGuildsOnly = obj.useAllowFriendsFromMutualGuildsOnly();
  if (selectedGuildId === closure_6) {
    let string2Result;
    const intl2 = tmp(1126).intl;
    const string2 = intl2.string;
    const t2 = tmp(1126).t;
    if (allowFriendsFromMutualGuildsOnly) {
      string2Result = string2(t2.XXGmuB);
    } else {
      string2Result = string2(t2.wbYDfT);
    }
    stringResult = string2Result;
  } else {
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (allowFriendsFromMutualGuildsOnly) {
      stringResult = string(t.F9WY3f);
    } else {
      stringResult = string(t.G7c3Xo);
    }
  }
  return stringResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTitle() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useAllowFriendsFromMutualGuildsOnly;
  const allowFriendsFromMutualGuildsOnly = obj2.useAllowFriendsFromMutualGuildsOnly();
  if (cResult[0] !== allowFriendsFromMutualGuildsOnly) {
    let stringResult;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (allowFriendsFromMutualGuildsOnly) {
      stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    cResult[0] = allowFriendsFromMutualGuildsOnly;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useTitle() {
  let stringResult;
  const obj = useAllowFriendsFromMutualGuildsOnly;
  const allowFriendsFromMutualGuildsOnly = obj.useAllowFriendsFromMutualGuildsOnly();
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  if (allowFriendsFromMutualGuildsOnly) {
    stringResult = string(t.PMsfcH);
  } else {
    stringResult = string(t.RAQUSN);
  }
  return stringResult;
});
let obj = {
  useTitle: tmp6,
  useDescription: tmp5,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp4,
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    let closure_0;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const tmp = closure_4();
    if (tmp === closure_6) {
      _require = !arg0;
      const obj2 = {
        title: intl.string(require("intl").t.Hq4ApA),
        body: intl2.string(require("intl").t.qTCYun),
        confirmText: intl3.string(require("intl").t.p89ACt),
        cancelText: intl4.string(require("intl").t.gm1Vej),
        confirmColor: AlertDefault.Colors.RED,
        onConfirm() {
            let guildIds;
            const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
            DefaultGuildsRestrictedV2.updateSetting(closure_0);
            const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
            const updateSetting = RestrictedGuildIds.updateSetting;
            if (closure_0) {
              guildIds = GuildStore.getGuildIds();
            } else {
              guildIds = [];
            }
            updateSetting(guildIds);
          },
        onCancel() {
            const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
            DefaultGuildsRestrictedV2.updateSetting(closure_0);
          },
        isDismissable: false
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      intl3 = require("intl").intl;
      intl4 = require("intl").intl;
      show(obj2);
    } else {
      const obj = require("UserSettingsUtils");
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      const tmp2 = _require;
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = tmp2(2041).RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    }
  },
  useIsDisabled: tmp3
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default toggle;
