// Module ID: 9534
// Function ID: 9535
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5246, 9278, 6707, 9535, 1999, 9535, 5280, 1125, 2]
// Exports: default

// Module 9534 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9278 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9535 */;
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
    const tmp4 = asyncRequire(9535, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5280).Button;
  const intl = applicationId(1125).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1125).t.qP2cXd)} onPress={callback} />;
};
