// Module ID: 8357
// Function ID: 8358
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4796, 8131, 5032, 8358, 1980, 8358, 5274, 1115, 2]
// Exports: default

// Module 8357 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8131 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 8358 */;
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
    obj2.pushLazy(asyncRequireImpl(8358, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1115).intl;
  obj.text = intl.string(applicationId(1115).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5274).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
