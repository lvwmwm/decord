// Module ID: 15068
// Function ID: 15069
// Name: ChangeLogSetting
// Dependencies: [1074, 10993, 1115, 4783, 15069, 2]

// Module 15068 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4783 */;
import ChangeLogModal from "ChangeLogModal" /* 15069 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: {
    route: Constants.UserSettingsSections.CHANGE_LOG,
    getComponent() {
      return ChangeLogModal.ChangeLogScreen;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
