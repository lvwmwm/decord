// Module ID: 17171
// Function ID: 17172
// Name: ChangeLogSetting
// Dependencies: [1071, 11970, 1112, 5747, 17172, 2]

// Module 17171 (ChangeLogSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5747 */;
import ChangeLogModal from "ChangeLogModal" /* 17172 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
