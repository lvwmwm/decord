// Module ID: 19250
// Function ID: 19251
// Name: useHideSelfVideo
// Dependencies: [502, 2131, 1071, 5539, 504, 5690, 2]
// Exports: default

// Module 19250 (useHideSelfVideo)
import Constants2 from "Constants" /* 1071 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5690 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import Constants from "Constants" /* 5539 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const VideoToggleState = Constants2.VideoToggleState;
({ MediaEngineContextTypes: metroRequire, Features: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let id;
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let obj = DEFAULT(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const items1 = [MediaEngineStore];
  const obj2 = DEFAULT(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.supports(constants.DISABLE_VIDEO));
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const obj3 = DEFAULT(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = arg0 === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    function handleToggleSelfVideoHidden(arg0) {
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
      const obj = AudioActionCreatorsDefault;
      obj.setDisableLocalVideo(stateFromStores, tmp2, DEFAULT);
    }
  ];
  return items4;
};
