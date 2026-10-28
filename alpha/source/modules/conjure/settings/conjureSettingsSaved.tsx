// Module ID: 12229
// Function ID: 12230
// Name: conjureSettingsSaved
// Dependencies: [10734, 10733, 1125, 3863, 10846, 2]
// Exports: settleProjectSettingsSave

// Module 12229 (conjureSettingsSaved)
import intl2 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10733 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10846 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;
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
  sendUserMessage(arg0, intl.string(_modDef3863["08bsJL"]));
};
