// Module ID: 17013
// Function ID: 17014
// Name: ChangeLogSetting
// Dependencies: [1072, 11875, 1113, 5496, 17014, 2]

// Module 17013 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5496 */;
import ChangeLogModal from "ChangeLogModal" /* 17014 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
