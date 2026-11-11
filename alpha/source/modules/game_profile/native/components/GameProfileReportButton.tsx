// Module ID: 10427
// Function ID: 10428
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5489, 10219, 6785, 10428, 2118, 10428, 5873, 1113, 2]
// Exports: default

// Module 10427 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10219 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 10428 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const obj2 = { applicationId };
    ModalActionCreatorsDefault;
    const tmp4 = asyncRequire(10428, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5873).Button;
  const intl = applicationId(1113).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1113).t.qP2cXd)} onPress={callback} />;
};
