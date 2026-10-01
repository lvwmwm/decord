// Module ID: 8365
// Function ID: 8366
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4800, 8139, 5039, 8366, 1981, 8366, 5281, 1115, 2]
// Exports: default

// Module 8365 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 8366 */;
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
    const tmp4 = asyncRequire(8366, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5281).Button;
  const intl = applicationId(1115).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1115).t.qP2cXd)} onPress={callback} />;
};
