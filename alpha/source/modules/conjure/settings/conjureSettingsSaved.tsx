// Module ID: 18525
// Function ID: 18526
// Name: conjureSettingsSaved
// Dependencies: [7659, 7693, 1112, 4245, 14751, 2]
// Exports: settleProjectSettingsSave

// Module 18525 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14751 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;
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
  sendUserMessage(arg0, intl.string(_modDef4245["08bsJL"]));
}
