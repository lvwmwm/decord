// Module ID: 12276
// Function ID: 12277
// Name: conjureSettingsSaved
// Dependencies: [10981, 10980, 1113, 3995, 11097, 2]
// Exports: settleProjectSettingsSave

// Module 12276 (conjureSettingsSaved)
import intl2 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10980 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11097 */;
import ConjureChatStore from "ConjureChatStore" /* 10981 */;
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
  sendUserMessage(arg0, intl.string(_modDef3995["08bsJL"]));
}
