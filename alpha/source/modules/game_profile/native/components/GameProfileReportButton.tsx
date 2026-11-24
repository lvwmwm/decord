// Module ID: 14071
// Function ID: 14072
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5131, 8613, 6004, 14072, 2119, 14072, 5515, 1112, 2]
// Exports: default

// Module 14071 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8613 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 14072 */;
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
    const tmp4 = asyncRequire(14072, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5515).Button;
  const intl = applicationId(1112).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1112).t.qP2cXd)} onPress={callback} />;
};
