// Module ID: 16837
// Function ID: 16838
// Name: ChangeLogSetting
// Dependencies: [1071, 11817, 1112, 5498, 16838, 2]

// Module 16837 (ChangeLogSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5498 */;
import ChangeLogModal from "ChangeLogModal" /* 16838 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
