// Module ID: 16934
// Function ID: 16935
// Name: ChangeLogSetting
// Dependencies: [1087, 11240, 1128, 5718, 16935, 2]

// Module 16934 (ChangeLogSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5718 */;
import ChangeLogModal from "ChangeLogModal" /* 16935 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
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
