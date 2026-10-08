// Module ID: 9079
// Function ID: 9080
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5054, 8850, 5940, 9080, 1999, 9080, 5375, 1126, 2]
// Exports: default

// Module 9079 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9080 */;
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
    const tmp4 = asyncRequire(9080, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5375).Button;
  const intl = applicationId(1126).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1126).t.qP2cXd)} onPress={callback} />;
};
