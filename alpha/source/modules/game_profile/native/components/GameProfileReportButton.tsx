// Module ID: 14246
// Function ID: 14247
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5257, 8754, 6130, 14247, 2120, 14247, 5641, 1112, 2]
// Exports: default

// Module 14246 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8754 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 14247 */;
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
    const tmp4 = asyncRequire(14247, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5641).Button;
  const intl = applicationId(1112).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1112).t.qP2cXd)} onPress={callback} />;
};
