// Module ID: 12481
// Function ID: 12482
// Name: conjureSettingsSaved
// Dependencies: [10851, 10850, 1113, 3868, 10964, 2]
// Exports: settleProjectSettingsSave

// Module 12481 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10850 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10964 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export function settleProjectSettingsSave(arg0, notifyAgent) {
  if (!notifyAgent.notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (tmp) {
        const obj = conjureSettingsConnection;
        const projectRebuild = obj.requestProjectRebuild(arg0);
      }
    }
  }
  const intl = intl2.intl;
  sendUserMessage(arg0, intl.string(_modDef3868["08bsJL"]));
}
