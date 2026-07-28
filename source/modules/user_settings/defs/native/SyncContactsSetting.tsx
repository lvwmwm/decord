// Module ID: 13853
// Function ID: 106048
// Name: toggle
// Dependencies: [4847, 1850, 7733, 653, 11746, 13854, 10099, 1212, 2]

// Module 13853 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { PlatformTypes } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.uSvEy7);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = require(11746) /* isContactSyncAvailable */.useContactSyncAccount();
    const obj = require(11746) /* isContactSyncAvailable */;
    return require(11746) /* isContactSyncAvailable */.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    require(13854) /* syncContacts */.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;
