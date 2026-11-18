// Module ID: 18348
// Function ID: 18349
// Name: conjureSettingsSaved
// Dependencies: [6836, 6878, 1113, 4121, 14678, 2]
// Exports: settleProjectSettingsSave

// Module 18348 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6878 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14678 */;
import ConjureChatStore from "ConjureChatStore" /* 6836 */;
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
  sendUserMessage(arg0, intl.string(_modDef4121["08bsJL"]));
}
