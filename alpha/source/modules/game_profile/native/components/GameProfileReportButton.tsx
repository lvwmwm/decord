// Module ID: 9114
// Function ID: 9115
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5056, 8878, 5934, 9115, 2000, 9115, 5379, 1126, 2]
// Exports: default

// Module 9114 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9115 */;
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
    const tmp4 = asyncRequire(9115, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5379).Button;
  const intl = applicationId(1126).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1126).t.qP2cXd)} onPress={callback} />;
};
