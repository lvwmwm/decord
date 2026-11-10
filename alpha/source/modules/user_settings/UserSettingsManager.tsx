// Module ID: 20069
// Function ID: 20070
// Name: UserSettingsManager
// Dependencies: [7353, 4967, 2]

// Module 20069 (UserSettingsManager)
import UserSettings from "UserSettings" /* 4967 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
import size from "module_2" /* 2 */;

let c2 = false;
class UserSettingsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        applyArgumentsResult.setVerifyTimezone();
      },
      OVERLAY_INITIALIZE: applyArgumentsResult.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.ensureTimezoneUpdated
    };
    return applyArgumentsResult;
  }
  setVerifyTimezone() {
    c2 = true;
  }
  ensureTimezoneUpdated() {
    const tmp = c2;
    if (tmp) {
      c2 = false;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date();
      const timezoneOffset = date.getTimezoneOffset();
      let TimezoneOffset = timezoneOffset(4967).TimezoneOffset;
      if (TimezoneOffset.getSetting() !== timezoneOffset) {
        const _setImmediate = setImmediate;
        setImmediate(() => {
          const TimezoneOffset = UserSettings.TimezoneOffset;
          return TimezoneOffset.updateSetting(timezoneOffset);
        });
      }
    }
  }
}
const prototype = UserSettingsManager.prototype;
const userSettingsManager = new UserSettingsManager();
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsManager.tsx");

export default userSettingsManager;
export { UserSettingsManager };
