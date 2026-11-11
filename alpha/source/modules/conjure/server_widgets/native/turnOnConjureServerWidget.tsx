// Module ID: 15701
// Function ID: 15702
// Name: turnOnConjureServerWidget
// Dependencies: [5490, 15702, 5953, 5489, 7334, 2118, 12674, 2]
// Exports: default

// Module 15701 (turnOnConjureServerWidget)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import toastUtils from "toastUtils" /* 5953 */;
import ApplicationUtils from "ApplicationUtils" /* 12674 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 15702 */;
import ActionSheetStore from "ActionSheetStore" /* 5490 */;
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
      const tmp7 = asyncRequire(7334, tmp2.paths);
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      openLazy(tmp7, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      const tmpResult = ApplicationUtils;
      tmpResult.openOAuth2Modal(conjureServerWidgetConsentRequest);
    }
  }
};
