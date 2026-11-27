// Module ID: 18532
// Function ID: 18533
// Name: conjureSettingsSaved
// Dependencies: [7659, 7693, 1112, 4245, 14758, 2]
// Exports: settleProjectSettingsSave

// Module 18532 (conjureSettingsSaved)
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14758 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export function settleProjectSettingsSave(arg0, incomplete) {
  let notifyAgent;
  let rebuildRequired;
  let flag = incomplete.incomplete;
  ({ rebuildRequired, notifyAgent } = incomplete);
  if (flag === undefined) {
    flag = false;
  }
  if (!notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (rebuildRequired) {
        const obj = conjureSettingsConnection;
        const projectRebuild = obj.requestProjectRebuild(arg0);
      }
    }
  }
  if (!flag) {
    const intl = intl2.intl;
    sendUserMessage(arg0, intl.string(_modDef4245["08bsJL"]));
  }
}
