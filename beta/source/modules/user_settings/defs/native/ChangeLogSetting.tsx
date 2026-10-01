// Module ID: 15094
// Function ID: 15095
// Name: ChangeLogSetting
// Dependencies: [1074, 11006, 1115, 4787, 15095, 2]

// Module 15094 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4787 */;
import ChangeLogModal from "ChangeLogModal" /* 15095 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: {
    route: UserSettingsSections.CHANGE_LOG,
    getComponent() {
      return ChangeLogModal.ChangeLogScreen;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
