// Module ID: 9209
// Function ID: 9210
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4757, 8976, 4993, 9210, 1984, 9210, 5220, 1119, 2]
// Exports: default

// Module 9209 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8976 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9210 */;
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
    obj2.pushLazy(asyncRequireImpl(9210, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1119).intl;
  obj.text = intl.string(applicationId(1119).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5220).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
