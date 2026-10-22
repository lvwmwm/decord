// Module ID: 11774
// Function ID: 11775
// Name: conjureSettingsSaved
// Dependencies: [10676, 10675, 1128, 3830, 10785, 2]
// Exports: settleProjectSettingsSave

// Module 11774 (conjureSettingsSaved)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10675 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10785 */;
import ConjureChatStore from "ConjureChatStore" /* 10676 */;
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
