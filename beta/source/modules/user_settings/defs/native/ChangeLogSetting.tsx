// Module ID: 15807
// Function ID: 15808
// Name: ChangeLogSetting
// Dependencies: [1078, 11594, 1119, 4712, 15808, 2]

// Module 15807 (ChangeLogSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4712 */;
import ChangeLogModal from "ChangeLogModal" /* 15808 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
