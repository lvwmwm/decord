// Module ID: 15218
// Function ID: 15219
// Name: turnOnConjureServerWidget
// Dependencies: [5407, 15219, 5870, 5406, 11062, 2118, 11067, 2]
// Exports: default

// Module 15218 (turnOnConjureServerWidget)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import toastUtils from "toastUtils" /* 5870 */;
import ApplicationUtils from "ApplicationUtils" /* 11067 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 15219 */;
import ActionSheetStore from "ActionSheetStore" /* 5407 */;
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
      const tmp7 = asyncRequire(11062, tmp2.paths);
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      openLazy(tmp7, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      const tmpResult = ApplicationUtils;
      tmpResult.openOAuth2Modal(conjureServerWidgetConsentRequest);
    }
  }
};
