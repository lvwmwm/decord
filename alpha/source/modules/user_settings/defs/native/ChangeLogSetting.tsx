// Module ID: 16522
// Function ID: 16523
// Name: ChangeLogSetting
// Dependencies: [1087, 11006, 1128, 5108, 16523, 2]

// Module 16522 (ChangeLogSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5108 */;
import ChangeLogModal from "ChangeLogModal" /* 16523 */;
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
