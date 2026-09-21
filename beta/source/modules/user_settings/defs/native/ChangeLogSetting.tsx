// Module ID: 15818
// Function ID: 15819
// Name: ChangeLogSetting
// Dependencies: [1074, 11725, 1115, 4710, 15819, 2]

// Module 15818 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4710 */;
import ChangeLogModal from "ChangeLogModal" /* 15819 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
