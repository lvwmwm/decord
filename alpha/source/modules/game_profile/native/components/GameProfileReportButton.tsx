// Module ID: 9589
// Function ID: 9590
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5253, 9320, 6738, 9590, 1995, 9590, 5629, 1114, 2]
// Exports: default

// Module 9589 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9590 */;
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
    const tmp4 = asyncRequire(9590, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5629).Button;
  const intl = applicationId(1114).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1114).t.qP2cXd)} onPress={callback} />;
};
