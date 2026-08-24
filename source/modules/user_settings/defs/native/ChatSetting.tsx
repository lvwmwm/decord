// Module ID: 14828
// Function ID: 14829
// Name: route
// Dependencies: [676, 10708, 1236, 14829, 14831, 2]

// Module 14828 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ImageTextIcon from "ImageTextIcon" /* 14829 */;
import createToggle from "createToggle" /* 10708 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.TEXT,
  getComponent() {
    return require(14831) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
