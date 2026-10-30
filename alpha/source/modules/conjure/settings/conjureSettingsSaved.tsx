// Module ID: 12446
// Function ID: 12447
// Name: conjureSettingsSaved
// Dependencies: [10831, 10830, 1114, 3865, 10945, 2]
// Exports: settleProjectSettingsSave

// Module 12446 (conjureSettingsSaved)
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10945 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
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
  sendUserMessage(arg0, intl.string(_modDef3865["08bsJL"]));
}
