// Module ID: 13458
// Function ID: 103551
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 1347, 4342, 1348, 4349, 3758, 6651, 653, 10226, 13459, 482, 3, 621, 682, 3982, 686, 477, 620, 6691, 10229, 4530, 2]

// Module 13458 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import withEqualityFn from "withEqualityFn";
import sum from "sum";
import closure_6 from "keys";
import batchUpdates from "batchUpdates";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "withEqualityFn";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import { ActivityPanelModes } from "ActivityPanelModes";
import MediaPlaybackPanelModes from "MediaPlaybackPanelModes";
import { Permissions } from "sum";
import importDefaultResult from "_getPrototypeOf";
import keys from "keys";
import tmp7 from "LifecycleManager";

let closure_18;
let closure_19;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isPlaybackComplete(duration) {
  if (duration.duration > 0) {
    return duration.duration - duration.time <= closure_18;
  }
}
({ NativeEventEmitter: closure_8, NativeModules: closure_9 } = get_ActivityIndicator);
({ PLAYBACK_COMPLETION_DETECTION_TOLERANCE: closure_18, PLAYBACK_PROGRESS_UPDATE_INTERVAL: closure_19 } = MediaPlaybackPanelModes);
importDefaultResult = new importDefaultResult("MediaPlayerManager");
keys = keys.create((arg0) => {
  let closure_0 = arg0;
  const obj = {
    activeMediaPlayerSource: undefined,
    mediaSourceMessage: undefined,
    canAccessMedia: true,
    isPlaying: false,
    wasPipClosedByUser: false,
    progress: undefined,
    rate: 0,
    showPip: false,
    closePip() {
      callback(outer1_2[18]).batchUpdates(() => outer1_0({ showPip: false }));
    },
    displayedMediaItemIdsPerChannel: {},
    currentlyDisplayedChannelId: undefined
  };
  return obj;
});
tmp7 = new tmp7();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/media/native/MediaPlayerManager.tsx");

export default tmp7;
export const useMediaPlayerManagerStore = keys;
export { isPlaybackComplete };
