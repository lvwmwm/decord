// Module ID: 15629
// Function ID: 15630
// Name: ChangeLogSetting
// Dependencies: [1074, 11605, 1114, 4591, 15630, 2]

// Module 15629 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4591 */;
import ChangeLogModal from "ChangeLogModal" /* 15630 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
