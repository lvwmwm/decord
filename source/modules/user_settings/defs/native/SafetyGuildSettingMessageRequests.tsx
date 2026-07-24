// Module ID: 14589
// Function ID: 111267
// Name: showMessageRequestRestrictionModal
// Dependencies: [1838, 14580, 7751, 10128, 3803, 4470, 1212, 4561, 14590, 7581, 7583, 5793, 14587, 13778, 10127, 2]

// Module 14589 (showMessageRequestRestrictionModal)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let closure_4;
let closure_5;
const require = arg1;
function showMessageRequestRestrictionModal(arg0) {
  const _require = arg0;
  let obj = importDefault(4470);
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.yAfu1p);
  const intl2 = _require(1212).intl;
  obj.body = intl2.string(_require(1212).t.Ry2z74);
  const intl3 = _require(1212).intl;
  obj.confirmText = intl3.string(_require(1212).t.p89ACt);
  const intl4 = _require(1212).intl;
  obj.cancelText = intl4.string(_require(1212).t.gm1Vej);
  obj.confirmColor = importDefault(4561).Colors.RED;
  obj.onConfirm = function onConfirm() {
    const MessageRequestRestrictedDefault = callback(outer1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
    const MessageRequestRestrictedGuildIds = callback(outer1_2[4]).MessageRequestRestrictedGuildIds;
    if (callback) {
      let guildIds = outer1_3.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj.onCancel = function onCancel() {
    const MessageRequestRestrictedDefault = callback(outer1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
  };
  obj.show(obj);
}
function useIsDisabled() {
  const defaultGuildsRestricted = require(14587) /* useDefaultGuildsRestricted */.useDefaultGuildsRestricted();
  const selectedGuildId = callback2().selectedGuildId;
  const RestrictedGuildIds = require(3803) /* explicitContentFromProto */.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  let hasItem = setting.includes(selectedGuildId);
  const obj = require(14587) /* useDefaultGuildsRestricted */;
  const tmp3 = selectedGuildId !== closure_6 || !require(13778) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  let tmp4 = !tmp3;
  if (tmp3) {
    if (selectedGuildId === closure_6) {
      hasItem = defaultGuildsRestricted;
    }
    tmp4 = hasItem;
  }
  return tmp4;
}
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: closure_5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.o5fjz6);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const MessageRequestRestrictedDefault = require(3803) /* explicitContentFromProto */.MessageRequestRestrictedDefault;
    const tmp = useIsDisabled();
    const MessageRequestRestrictedGuildIds = require(3803) /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
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
      let obj = require(14590) /* shouldAgeVerifyForDMDefaultOff */;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const result = importDefault(7581).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(7581);
      }
    }
    const tmp7 = callback();
    if (tmp7 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = require(5793) /* getSanitizedRestrictedGuilds */.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp7);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp7);
      }
      const MessageRequestRestrictedGuildIds = require(3803) /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = require(5793) /* getSanitizedRestrictedGuilds */;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default createToggle;
export { showMessageRequestRestrictionModal };
