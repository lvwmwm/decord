// Module ID: 15817
// Function ID: 15818
// Name: ChangeLogSetting
// Dependencies: [1078, 11630, 1119, 4744, 15818, 2]

// Module 15817 (ChangeLogSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4744 */;
import ChangeLogModal from "ChangeLogModal" /* 15818 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
