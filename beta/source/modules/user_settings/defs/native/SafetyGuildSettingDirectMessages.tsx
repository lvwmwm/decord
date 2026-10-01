// Module ID: 15494
// Function ID: 15495
// Name: SafetyGuildSettingDirectMessages
// Dependencies: [2067, 15486, 7417, 11007, 14353, 15489, 2021, 5203, 1115, 5300, 6416, 15495, 11006, 2]

// Module 15494 (SafetyGuildSettingDirectMessages)
import intl5 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import AlertDefault from "Alert" /* 5300 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11007 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14353 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 15489 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 15495 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 15486 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_6 = SettingRendererConstants.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
let obj = {
  useTitle() {
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
  },
  useDescription() {
    let stringResult;
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const obj = useAllowFriendsFromMutualGuildsOnly;
    const allowFriendsFromMutualGuildsOnly = obj.useAllowFriendsFromMutualGuildsOnly();
    if (selectedGuildId === closure_6) {
      let string2Result;
      const intl2 = tmp(1115).intl;
      const string2 = intl2.string;
      const t2 = tmp(1115).t;
      if (allowFriendsFromMutualGuildsOnly) {
        string2Result = string2(t2.XXGmuB);
      } else {
        string2Result = string2(t2.wbYDfT);
      }
      stringResult = string2Result;
    } else {
      const intl = tmp(1115).intl;
      const string = intl.string;
      const t = tmp(1115).t;
      if (allowFriendsFromMutualGuildsOnly) {
        stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
    }
    return stringResult;
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
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
  },
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
      let RestrictedGuildIds = tmp2(2021).RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    }
  },
  useIsDisabled() {
    const obj = useParentalControlSettings;
    const isParentallyControlled = obj.useIsParentallyControlled() && tmp2 === closure_6;
    return isParentallyControlled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default toggle;
