// Module ID: 16193
// Function ID: 16194
// Name: SafetyGuildSettingMessageRequests
// Dependencies: [2067, 16183, 8238, 11595, 558, 568, 2023, 5110, 1119, 5207, 16194, 8687, 8689, 7241, 16186, 15091, 16195, 11594, 2]

// Module 16193 (SafetyGuildSettingMessageRequests)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import common_AlertDefault from "common/Alert" /* 5207 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7241 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8687 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8689 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15091 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 16186 */;
import useShouldDisableMessageRequestSettings from "useShouldDisableMessageRequestSettings" /* 16195 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
function showMessageRequestRestrictionModal(arg0) {
  _require = arg0;
  const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null, isDismissable: false };
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.yAfu1p);
  const intl2 = require("util").intl;
  obj2.body = intl2.string(require("util").t.Ry2z74);
  const intl3 = require("util").intl;
  obj2.confirmText = intl3.string(require("util").t.p89ACt);
  const intl4 = require("util").intl;
  obj2.cancelText = intl4.string(require("util").t.gm1Vej);
  obj2.confirmColor = common_AlertDefault.Colors.RED;
  obj2.onConfirm = function onConfirm() {
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(closure_0);
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    if (closure_0) {
      let guildIds = GuildStore.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj2.onCancel = function onCancel() {
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(closure_0);
  };
  AlertActionCreatorsDefault.show(obj2);
}
const UserSettingsSafetySelectedGuildStore = fn(16183);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11595).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    if (cResult[1] === setting) {
      let tmp5 = cResult[2];
    }
    const isParentallyControlled = tmp(15091).useIsParentallyControlled();
    const tmpResult = tmp(15091);
    let shouldDisableMessageRequestSettings = tmp(16195).useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings) {
      let tmp10 = selectedGuildId !== closure_6;
      if (!tmp10) {
        tmp10 = !isParentallyControlled;
      }
      let tmp11 = !tmp10;
      if (tmp10) {
        if (selectedGuildId === tmp9) {
          tmp5 = defaultGuildsRestricted;
        }
        tmp11 = tmp5;
      }
      shouldDisableMessageRequestSettings = tmp11;
      tmp9 = closure_6;
    }
    return shouldDisableMessageRequestSettings;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp5 = hasItem;
}) : (() => {
  const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  let hasItem = setting.includes(selectedGuildId);
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  let shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
  if (!shouldDisableMessageRequestSettings) {
    let tmp6 = selectedGuildId !== closure_6;
    if (!tmp6) {
      tmp6 = !isParentallyControlled;
    }
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId === tmp5) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    shouldDisableMessageRequestSettings = tmp7;
    tmp5 = closure_6;
  }
  return shouldDisableMessageRequestSettings;
});
let closure_8 = tmp4;
const SettingBuilders = fn(11594);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp2 = closure_8();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  let tmp3 = !MessageRequestRestrictedDefault.useSetting();
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    if (cResult[1] === setting) {
      let tmp4 = cResult[2];
    }
    let tmp6 = !tmp2;
    if (!tmp2) {
      if (selectedGuildId !== closure_6) {
        tmp3 = !tmp4;
      }
      tmp6 = tmp3;
    }
    return tmp6;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp4 = hasItem;
}) : (() => {
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp = closure_8();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  let tmp3 = !setting.includes(selectedGuildId);
  let tmp4 = !tmp;
  if (!tmp) {
    if (selectedGuildId === closure_6) {
      tmp3 = tmp2;
    }
    tmp4 = tmp3;
  }
  return tmp4;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.o5fjz6);
  },
  parent: fn(8238).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(3);
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const tmp2 = closure_8();
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    let tmp3 = !MessageRequestRestrictedDefault.useSetting();
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting = MessageRequestRestrictedGuildIds.useSetting();
    if (cResult[0] === selectedGuildId) {
      if (cResult[1] === setting) {
        let tmp4 = cResult[2];
      }
      let tmp6 = !tmp2;
      if (!tmp2) {
        if (selectedGuildId !== closure_6) {
          tmp3 = !tmp4;
        }
        tmp6 = tmp3;
      }
      return tmp6;
    }
    const hasItem = setting.includes(selectedGuildId);
    cResult[0] = selectedGuildId;
    cResult[1] = setting;
    cResult[2] = hasItem;
    tmp4 = hasItem;
  }) : (() => {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const tmp = closure_8();
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting = MessageRequestRestrictedGuildIds.useSetting();
    let tmp3 = !setting.includes(selectedGuildId);
    let tmp4 = !tmp;
    if (!tmp) {
      if (selectedGuildId === closure_6) {
        tmp3 = tmp2;
      }
      tmp4 = tmp3;
    }
    return tmp4;
  }),
  useIsDisabled: tmp4,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    if (!arg0) {
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      }
    }
    const tmp5 = React4();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = UserSettingsUtils.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default toggle;
export { showMessageRequestRestrictionModal };
