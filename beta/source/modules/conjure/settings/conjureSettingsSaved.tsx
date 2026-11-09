// Module ID: 12308
// Function ID: 12309
// Name: conjureSettingsSaved
// Dependencies: [10970, 10969, 1113, 4026, 11092, 2]
// Exports: settleProjectSettingsSave

// Module 12308 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10969 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11092 */;
import ConjureChatStore from "ConjureChatStore" /* 10970 */;
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
  sendUserMessage(arg0, intl.string(_modDef4026["08bsJL"]));
}
