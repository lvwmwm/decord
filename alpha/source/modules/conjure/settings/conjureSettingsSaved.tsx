// Module ID: 18350
// Function ID: 18351
// Name: conjureSettingsSaved
// Dependencies: [7533, 7563, 1112, 4192, 14576, 2]
// Exports: settleProjectSettingsSave

// Module 18350 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14576 */;
import ConjureChatStore from "ConjureChatStore" /* 7533 */;
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
  sendUserMessage(arg0, intl.string(_modDef4192["08bsJL"]));
}
