// Module ID: 15815
// Function ID: 15816
// Name: turnOnConjureServerWidget
// Dependencies: [5543, 15816, 6006, 5542, 7398, 2121, 12764, 2]
// Exports: default

// Module 15815 (turnOnConjureServerWidget)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import toastUtils from "toastUtils" /* 6006 */;
import ApplicationUtils from "ApplicationUtils" /* 12764 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 15816 */;
import ActionSheetStore from "ActionSheetStore" /* 5543 */;
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
      const tmp7 = asyncRequire(7398, tmp2.paths);
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      openLazy(tmp7, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      const tmpResult = ApplicationUtils;
      tmpResult.openOAuth2Modal(conjureServerWidgetConsentRequest);
    }
  }
};
