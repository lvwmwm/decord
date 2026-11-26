// Module ID: 18324
// Function ID: 18325
// Name: conjureSettingsSaved
// Dependencies: [6925, 6967, 1112, 4190, 14757, 2]
// Exports: settleProjectSettingsSave

// Module 18324 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14757 */;
import ConjureChatStore from "ConjureChatStore" /* 6925 */;
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
  sendUserMessage(arg0, intl.string(_modDef4190["08bsJL"]));
}
