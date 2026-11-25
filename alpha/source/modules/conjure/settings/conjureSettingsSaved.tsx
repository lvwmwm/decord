// Module ID: 18462
// Function ID: 18463
// Name: conjureSettingsSaved
// Dependencies: [7628, 7662, 1112, 4244, 14698, 2]
// Exports: settleProjectSettingsSave

// Module 18462 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7662 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14698 */;
import ConjureChatStore from "ConjureChatStore" /* 7628 */;
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
  sendUserMessage(arg0, intl.string(_modDef4244["08bsJL"]));
}
