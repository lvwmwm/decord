// Module ID: 12283
// Function ID: 12284
// Name: conjureSettingsSaved
// Dependencies: [10808, 10807, 1125, 3864, 10922, 2]
// Exports: settleProjectSettingsSave

// Module 12283 (conjureSettingsSaved)
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10807 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10922 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
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
  sendUserMessage(arg0, intl.string(_modDef3864["08bsJL"]));
}
