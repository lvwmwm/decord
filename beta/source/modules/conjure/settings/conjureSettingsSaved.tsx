// Module ID: 13223
// Function ID: 13224
// Name: conjureSettingsSaved
// Dependencies: [7321, 7365, 1113, 4131, 13220, 2]
// Exports: settleProjectSettingsSave

// Module 13223 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13220 */;
import ConjureChatStore from "ConjureChatStore" /* 7321 */;
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
  sendUserMessage(arg0, intl.string(_modDef4131["08bsJL"]));
}
