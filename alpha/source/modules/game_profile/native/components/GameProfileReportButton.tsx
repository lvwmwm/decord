// Module ID: 9502
// Function ID: 9503
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5211, 9245, 6673, 9503, 1999, 9503, 5245, 1125, 2]
// Exports: default

// Module 9502 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9245 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9503 */;
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
    const tmp4 = asyncRequire(9503, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5245).Button;
  const intl = applicationId(1125).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1125).t.qP2cXd)} onPress={callback} />;
};
