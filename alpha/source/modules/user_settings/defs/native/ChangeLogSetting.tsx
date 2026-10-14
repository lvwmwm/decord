// Module ID: 16193
// Function ID: 16194
// Name: ChangeLogSetting
// Dependencies: [1085, 10767, 1126, 5050, 16194, 2]

// Module 16193 (ChangeLogSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5050 */;
import ChangeLogModal from "ChangeLogModal" /* 16194 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
