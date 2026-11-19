// Module ID: 14469
// Function ID: 14470
// Name: turnOnConjureServerWidget
// Dependencies: [5007, 14470, 5475, 5006, 6881, 2121, 10633, 2]
// Exports: default

// Module 14469 (turnOnConjureServerWidget)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import toastUtils from "toastUtils" /* 5475 */;
import ApplicationUtils from "ApplicationUtils" /* 10633 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 14470 */;
import ActionSheetStore from "ActionSheetStore" /* 5007 */;
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
      const tmp7 = asyncRequire(6881, tmp2.paths);
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      openLazy(tmp7, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      const tmpResult = ApplicationUtils;
      tmpResult.openOAuth2Modal(conjureServerWidgetConsentRequest);
    }
  }
};
