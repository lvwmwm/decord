// Module ID: 17465
// Function ID: 17466
// Name: ChangeLogSetting
// Dependencies: [1072, 11505, 1114, 5730, 17466, 2]

// Module 17465 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import ChangeLogModal from "ChangeLogModal" /* 17466 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
