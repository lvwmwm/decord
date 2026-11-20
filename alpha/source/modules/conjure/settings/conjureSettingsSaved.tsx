// Module ID: 18182
// Function ID: 18183
// Name: conjureSettingsSaved
// Dependencies: [6806, 6848, 1112, 4091, 14623, 2]
// Exports: settleProjectSettingsSave

// Module 18182 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6848 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14623 */;
import ConjureChatStore from "ConjureChatStore" /* 6806 */;
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
  sendUserMessage(arg0, intl.string(_modDef4091["08bsJL"]));
}
