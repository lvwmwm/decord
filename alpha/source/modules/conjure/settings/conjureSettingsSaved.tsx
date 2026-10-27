// Module ID: 12171
// Function ID: 12172
// Name: conjureSettingsSaved
// Dependencies: [10699, 10698, 1128, 3830, 10809, 2]
// Exports: settleProjectSettingsSave

// Module 12171 (conjureSettingsSaved)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10809 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
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
