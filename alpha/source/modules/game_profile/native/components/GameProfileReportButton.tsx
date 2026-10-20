// Module ID: 9432
// Function ID: 9433
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5171, 9178, 6623, 9433, 2002, 9433, 5205, 1128, 2]
// Exports: default

// Module 9432 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9178 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9433 */;
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
    const tmp4 = asyncRequire(9433, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5205).Button;
  const intl = applicationId(1128).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1128).t.qP2cXd)} onPress={callback} />;
};
