// Module ID: 17172
// Function ID: 17173
// Name: ChangeLogSetting
// Dependencies: [1084, 11248, 1125, 5722, 17173, 2]

// Module 17172 (ChangeLogSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import ChangeLogModal from "ChangeLogModal" /* 17173 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
