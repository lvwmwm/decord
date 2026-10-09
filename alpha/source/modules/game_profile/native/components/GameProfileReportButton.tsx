// Module ID: 9094
// Function ID: 9095
// Name: GameProfileReportButton
// Dependencies: [19, 21, 5055, 8859, 5941, 9095, 2000, 9095, 5376, 1126, 2]
// Exports: default

// Module 9094 (GameProfileReportButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9095 */;
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
    const tmp4 = asyncRequire(9095, dependencyMap.paths);
    pushLazy(tmp4, obj2, GameDetectionReportModal.MODAL_KEY);
  }, items);
  const Button = applicationId(5376).Button;
  const intl = applicationId(1126).intl;
  return <Button variant="secondary" size="md" text={intl.string(applicationId(1126).t.qP2cXd)} onPress={callback} />;
};
