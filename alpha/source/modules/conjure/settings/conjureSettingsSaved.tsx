// Module ID: 12191
// Function ID: 12192
// Name: conjureSettingsSaved
// Dependencies: [10702, 10701, 1125, 3831, 10812, 2]
// Exports: settleProjectSettingsSave

// Module 12191 (conjureSettingsSaved)
import intl2 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10701 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10812 */;
import ConjureChatStore from "ConjureChatStore" /* 10702 */;
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
  sendUserMessage(arg0, intl.string(_modDef3831["08bsJL"]));
};
