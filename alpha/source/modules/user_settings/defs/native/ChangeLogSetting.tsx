// Module ID: 17817
// Function ID: 17818
// Name: ChangeLogSetting
// Dependencies: [1072, 11737, 1113, 5872, 17818, 2]

// Module 17817 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5872 */;
import ChangeLogModal from "ChangeLogModal" /* 17818 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
