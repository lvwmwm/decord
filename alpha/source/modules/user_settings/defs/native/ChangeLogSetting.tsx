// Module ID: 15383
// Function ID: 15384
// Name: ChangeLogSetting
// Dependencies: [1085, 11142, 1126, 4818, 15384, 2]

// Module 15383 (ChangeLogSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4818 */;
import ChangeLogModal from "ChangeLogModal" /* 15384 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
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
