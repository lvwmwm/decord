// Module ID: 19629
// Function ID: 19630
// Name: UserSettingsManager
// Dependencies: [7287, 4839, 2]

// Module 19629 (UserSettingsManager)
import UserSettings from "UserSettings" /* 4839 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
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
      let TimezoneOffset = timezoneOffset(4839).TimezoneOffset;
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
