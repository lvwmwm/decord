// Module ID: 12316
// Function ID: 12317
// Name: conjureSettingsSaved
// Dependencies: [10979, 10978, 1113, 4028, 11101, 2]
// Exports: settleProjectSettingsSave

// Module 12316 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10978 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11101 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;
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
  sendUserMessage(arg0, intl.string(_modDef4028["08bsJL"]));
}
