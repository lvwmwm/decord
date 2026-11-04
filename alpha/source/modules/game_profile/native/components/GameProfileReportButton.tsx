// Module ID: 9759
// Function ID: 9760
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5382, 9486, 6879, 9760, 2123, 9760, 5768, 1113, 2]
// Exports: default

// Module 9759 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9486 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9760 */;
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
    const tmp4 = asyncRequire(9760, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5768).Button;
  const intl = applicationId(1113).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1113).t.qP2cXd)} onPress={callback} />;
};
