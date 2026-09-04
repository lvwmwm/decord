// Module ID: 15482
// Function ID: 15483
// Dependencies: [15481, 4460, 11400, 1233, 15483, 4166, 2]

// Module 15482
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4460 */;
import getClientInfo from "getClientInfo" /* 15481 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15483 */;
import createToggle from "createToggle" /* 11400 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager.getDeviceInfo());
    const obj2 = DCDDeviceManager;
    const obj3 = getClientInfo;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager.getSystemVersion()) + ")";
  },
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager.getDeviceInfo());
    const obj2 = DCDDeviceManager;
    const obj3 = getClientInfo;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager.getSystemVersion()) + ")";
  },
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
