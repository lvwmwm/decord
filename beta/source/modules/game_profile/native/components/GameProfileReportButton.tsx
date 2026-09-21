// Module ID: 9177
// Function ID: 9178
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4725, 8944, 4961, 9178, 1984, 9178, 5188, 1119, 2]
// Exports: default

// Module 9177 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8944 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { applicationId };
    obj2.pushLazy(asyncRequireImpl(9178, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1119).intl;
  obj.text = intl.string(applicationId(1119).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5188).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
