// Module ID: 18177
// Function ID: 18178
// Name: ChangeLogSetting
// Dependencies: [1072, 12408, 1113, 6027, 18178, 2]

// Module 18177 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import CircleInformationIcon from "CircleInformationIcon" /* 6027 */;
import ChangeLogModal from "ChangeLogModal" /* 18178 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
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
