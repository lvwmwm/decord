// Module ID: 20080
// Function ID: 20081
// Name: showCommandPermissionLockoutAlert
// Dependencies: [1071, 6047, 1112, 20079, 5722, 2188, 2]
// Exports: default

// Module 20080 (showCommandPermissionLockoutAlert)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import LinkingDefault from "Linking" /* 5722 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6047 */;
import CommandPermissionLockout from "CommandPermissionLockout" /* 20079 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/showCommandPermissionLockoutAlert.tsx");

export default function showCommandPermissionLockoutAlert(arg0, name) {
  let intl;
  let intl2;
  let obj2;
  const tmp = actions_AlertActionCreatorsDefault;
  let obj = {
    title: intl.string(intl3.t.vElC9b),
    body: obj2.getCommandPermissionLockoutMessage(arg0, name),
    cancelText: intl2.string(intl3.t.psXQHP),
    onCancel() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = HelpdeskUtilsDefault;
      openURL(obj.getArticleURL(constants.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
    }
  };
  const show = tmp.show;
  intl = intl3.intl;
  obj2 = CommandPermissionLockout;
  intl2 = intl3.intl;
  show(obj);
};
