// Module ID: 11793
// Function ID: 11794
// Name: conjureSettingsSaved
// Dependencies: [10698, 10697, 1128, 3830, 10807, 2]
// Exports: settleProjectSettingsSave

// Module 11793 (conjureSettingsSaved)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10697 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10807 */;
import ConjureChatStore from "ConjureChatStore" /* 10698 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export const settleProjectSettingsSave = function settleProjectSettingsSave(arg0, notifyAgent) {
  if (!notifyAgent.notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (tmp) {
        const obj = conjureSettingsConnection;
        const projectRebuild = obj.requestProjectRebuild(arg0);
      }
    }
  }
  const intl = intl2.intl;
  sendUserMessage(arg0, intl.string(_modDef3830["08bsJL"]));
};
