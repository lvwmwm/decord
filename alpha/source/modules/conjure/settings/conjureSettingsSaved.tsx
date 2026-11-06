// Module ID: 12310
// Function ID: 12311
// Name: conjureSettingsSaved
// Dependencies: [10987, 10986, 1113, 4024, 11106, 2]
// Exports: settleProjectSettingsSave

// Module 12310 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10986 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11106 */;
import ConjureChatStore from "ConjureChatStore" /* 10987 */;
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
  sendUserMessage(arg0, intl.string(_modDef4024["08bsJL"]));
}
