// Module ID: 16900
// Function ID: 16901
// Name: ChangeLogSetting
// Dependencies: [1087, 11206, 1128, 5686, 16901, 2]

// Module 16900 (ChangeLogSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5686 */;
import ChangeLogModal from "ChangeLogModal" /* 16901 */;
import SettingBuilders from "SettingBuilders" /* 11206 */;
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
