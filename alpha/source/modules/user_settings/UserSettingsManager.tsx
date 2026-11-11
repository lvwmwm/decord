// Module ID: 20264
// Function ID: 20265
// Name: UserSettingsManager
// Dependencies: [7816, 5068, 2]

// Module 20264 (UserSettingsManager)
import UserSettings from "UserSettings" /* 5068 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
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
      let TimezoneOffset = timezoneOffset(5068).TimezoneOffset;
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
