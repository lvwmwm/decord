// Module ID: 9345
// Function ID: 9346
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5118, 9103, 6152, 9346, 2002, 9346, 5441, 1128, 2]
// Exports: default

// Module 9345 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9103 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9346 */;
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
    const tmp4 = asyncRequire(9346, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5441).Button;
  const intl = applicationId(1128).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1128).t.qP2cXd)} onPress={callback} />;
};
