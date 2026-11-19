// Module ID: 9804
// Function ID: 9805
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5006, 9654, 6308, 9805, 2121, 9805, 5390, 1113, 2]
// Exports: default

// Module 9804 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9654 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9805 */;
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
    const tmp4 = asyncRequire(9805, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5390).Button;
  const intl = applicationId(1113).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1113).t.qP2cXd)} onPress={callback} />;
};
