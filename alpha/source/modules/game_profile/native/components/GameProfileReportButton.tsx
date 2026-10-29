// Module ID: 9566
// Function ID: 9567
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5247, 9282, 6731, 9567, 2000, 9567, 5281, 1125, 2]
// Exports: default

// Module 9566 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9282 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9567 */;
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
    const tmp4 = asyncRequire(9567, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5281).Button;
  const intl = applicationId(1125).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1125).t.qP2cXd)} onPress={callback} />;
};
