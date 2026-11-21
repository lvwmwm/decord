// Module ID: 16960
// Function ID: 16961
// Name: ChangeLogSetting
// Dependencies: [1071, 11937, 1112, 5617, 16961, 2]

// Module 16960 (ChangeLogSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5617 */;
import ChangeLogModal from "ChangeLogModal" /* 16961 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
