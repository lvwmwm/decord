// Module ID: 13940
// Function ID: 13941
// Name: route
// Dependencies: [1903, 8022, 676, 589, 10380, 1236, 13825, 2]

// Module 13940 (route)
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9AjdkD"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [mergeGuildAvatar];
    return require(589) /* initialize */.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(13825) /* ProfileCustomizationSubsection */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default createToggle;
