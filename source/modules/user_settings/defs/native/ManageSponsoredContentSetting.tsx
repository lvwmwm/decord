// Module ID: 15003
// Function ID: 15004
// Name: route
// Dependencies: [8198, 676, 10669, 1236, 2041, 15004, 2]

// Module 15003 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2041).yyhs9L);
  },
  parent: require("MobileUserSettings").MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.MANAGE_SPONSORED_CONTENT,
  getComponent() {
    return require(15004) /* AdTopicRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
