// Module ID: 4884
// Function ID: 4885
// Name: HookErrorStore
// Dependencies: [1074, 504, 573, 2]

// Module 4884 (HookErrorStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_1;

const MediaEngineHookTypes = Constants.MediaEngineHookTypes;
const Store = get_initializedDefault.Store;
class HookErrorStore extends Store {
  getHookError(SOUND) {
    return closure_1[SOUND];
  }
}
const prototype = HookErrorStore.prototype;
HookErrorStore.displayName = "HookErrorStore";
const obj = {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    closure_1 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete closure_1[MediaEngineHookTypes.SOUND];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_1[MediaEngineHookTypes.SOUND] = { errorMessage: errorMessage.errorMessage, errorCode: errorMessage.errorCode };
  }
};
const hookErrorStore = new HookErrorStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/HookErrorStore.tsx");

export default hookErrorStore;
