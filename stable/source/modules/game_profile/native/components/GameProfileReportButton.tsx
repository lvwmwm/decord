// Module ID: 8362
// Function ID: 8363
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4801, 8125, 5040, 8363, 1987, 8363, 5282, 1127, 2]
// Exports: default

// Module 8362 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8125 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 8363 */;
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
    const tmp4 = asyncRequire(8363, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5282).Button;
  const intl = applicationId(1127).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1127).t.qP2cXd)} onPress={callback} />;
};
