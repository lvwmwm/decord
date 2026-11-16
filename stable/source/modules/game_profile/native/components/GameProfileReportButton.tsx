// Module ID: 9730
// Function ID: 9731
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5406, 9454, 6831, 9731, 2118, 9731, 5790, 1113, 2]
// Exports: default

// Module 9730 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9454 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9731 */;
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
    const tmp4 = asyncRequire(9731, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5790).Button;
  const intl = applicationId(1113).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1113).t.qP2cXd)} onPress={callback} />;
};
