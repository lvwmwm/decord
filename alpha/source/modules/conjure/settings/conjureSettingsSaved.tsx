// Module ID: 14454
// Function ID: 14455
// Name: conjureSettingsSaved
// Dependencies: [7331, 7375, 1113, 4133, 14451, 2]
// Exports: settleProjectSettingsSave

// Module 14454 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7375 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14451 */;
import ConjureChatStore from "ConjureChatStore" /* 7331 */;
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
  sendUserMessage(arg0, intl.string(_modDef4133["08bsJL"]));
}
