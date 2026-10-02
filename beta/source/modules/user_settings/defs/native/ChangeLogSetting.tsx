// Module ID: 15082
// Function ID: 15083
// Name: ChangeLogSetting
// Dependencies: [1086, 10874, 1127, 4788, 15083, 2]

// Module 15082 (ChangeLogSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4788 */;
import ChangeLogModal from "ChangeLogModal" /* 15083 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
