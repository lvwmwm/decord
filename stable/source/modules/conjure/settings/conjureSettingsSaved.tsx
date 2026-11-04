// Module ID: 11855
// Function ID: 11856
// Name: conjureSettingsSaved
// Dependencies: [10731, 10730, 1128, 3862, 10841, 2]
// Exports: settleProjectSettingsSave

// Module 11855 (conjureSettingsSaved)
import intl2 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10730 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10841 */;
import ConjureChatStore from "ConjureChatStore" /* 10731 */;
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
  sendUserMessage(arg0, intl.string(_modDef3862["08bsJL"]));
};
