// Module ID: 16600
// Function ID: 16601
// Name: ChangeLogSetting
// Dependencies: [1087, 11065, 1128, 5145, 16601, 2]

// Module 16600 (ChangeLogSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5145 */;
import ChangeLogModal from "ChangeLogModal" /* 16601 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
