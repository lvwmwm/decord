// Module ID: 14437
// Function ID: 14438
// Name: turnOnConjureServerWidget
// Dependencies: [5009, 14438, 5477, 5008, 6880, 2119, 10575, 2]
// Exports: default

// Module 14437 (turnOnConjureServerWidget)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import toastUtils from "toastUtils" /* 5477 */;
import ApplicationUtils from "ApplicationUtils" /* 10575 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 14438 */;
import ActionSheetStore from "ActionSheetStore" /* 5009 */;
import size from "module_2" /* 2 */;

const ConjureServerWidgetConsentSheet = "ConjureServerWidgetConsentSheet";
const result = size.fileFinishedImporting("modules/conjure/server_widgets/native/turnOnConjureServerWidget.tsx");

export default function turnOnConjureServerWidget(clientId, onTurnedOn) {
  const obj = conjureServerWidgetConsent;
  const obj2 = { onTurnedOn, showToast: toastUtils.showToast };
  const conjureServerWidgetConsentRequest = obj.getConjureServerWidgetConsentRequest(clientId, obj2);
  const tmp2 = dependencyMap;
  if (null != conjureServerWidgetConsentRequest) {
    if (ActionSheetStore.isOpen()) {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj3 = { sheetKey: ConjureServerWidgetConsentSheet, disableHapticOnOpen: true };
      const tmp7 = asyncRequire(6880, tmp2.paths);
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      openLazy(tmp7, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      const tmpResult = ApplicationUtils;
      tmpResult.openOAuth2Modal(conjureServerWidgetConsentRequest);
    }
  }
};
