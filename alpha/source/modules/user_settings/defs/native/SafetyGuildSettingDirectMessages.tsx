// Module ID: 17420
// Function ID: 17421
// Name: SafetyGuildSettingDirectMessages
// Dependencies: [4663, 17412, 8593, 11876, 16031, 17415, 4617, 5739, 1113, 5811, 7296, 17421, 11875, 2]

// Module 17420 (SafetyGuildSettingDirectMessages)
import intl5 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5739 */;
import AlertDefault from "Alert" /* 5811 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11876 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 17415 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 17421 */;
import GuildStore from "GuildStore" /* 4663 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17412 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
      const intl2 = tmp(1113).intl;
      const string2 = intl2.string;
      const t2 = tmp(1113).t;
      if (allowFriendsFromMutualGuildsOnly) {
        string2Result = string2(t2.XXGmuB);
      } else {
        string2Result = string2(t2.wbYDfT);
      }
      stringResult = string2Result;
    } else {
      const intl = tmp(1113).intl;
      const string = intl.string;
      const t = tmp(1113).t;
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
      let RestrictedGuildIds = tmp2(4617).RestrictedGuildIds;
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
