// Module ID: 13115
// Function ID: 13116
// Name: conjureSettingsSaved
// Dependencies: [7257, 7301, 1113, 4079, 13112, 2]
// Exports: settleProjectSettingsSave

// Module 13115 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7301 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13112 */;
import ConjureChatStore from "ConjureChatStore" /* 7257 */;
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
  sendUserMessage(arg0, intl.string(_modDef4079["08bsJL"]));
}
