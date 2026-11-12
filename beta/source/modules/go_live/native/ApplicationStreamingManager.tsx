// Module ID: 20512
// Function ID: 20513
// Name: ApplicationStreamingManager
// Dependencies: [19, 6107, 6025, 5929, 21, 3, 20513, 6123, 20514, 2118, 12124, 6079, 2]

// Module 20512 (ApplicationStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 5929 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 6025 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 12124 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 6107 */;
import ApplicationStreamingManager2 from "go_live/ApplicationStreamingManager" /* 20513 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const jsx = Fragment.jsx;
let obj = new LoggerDefault("ApplicationStreamingManager");
obj.enableNativeLogger(true);
class ApplicationStreamingManager extends ApplicationStreamingManager2 {
  platformShowStreamFull() {
    let paths;
    obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = require("asyncRequire")(paths[8], paths.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            obj = {};
            const merged = Object.assign(arg0);
            return closure_2_6(closure_0, obj);
          };
        });
      },
      isDismissable: false
    };
    obj.openLazy(obj2);
  }
  platformHandleStreamStart(sourceId) {
    let fps;
    let obj3;
    let obj4;
    let preset;
    let resolution;
    let soundshareEnabled;
    sourceId = sourceId.sourceId;
    if (null != sourceId) {
      let state;
      obj = MobileGoLiveUpsellExperimentDefault;
      const tmp4 = importDefault;
      if (obj.getConfig({ location: "platformHandleStreamStart" }).showMobileGoLiveUpsell) {
        state = ApplicationStreamingSettingsStore.getState();
      } else {
        state = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution: 720, fps: 30, soundshareEnabled: true };
      }
      ({ preset, resolution, fps, soundshareEnabled } = state);
      const obj2 = { desktopSettings: obj3, qualityOptions: obj4, context: MediaEngineContextTypes.STREAM };
      obj3 = { sourceId, sound: soundshareEnabled };
      obj4 = { preset, resolution, frameRate: fps };
      const tmp4Result = tmp4(6079);
      tmp4Result.setGoLiveSource(obj2);
    } else {
      const _HermesInternal = HermesInternal;
      obj.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
    }
  }
  platformHandleVoiceStateUpdate() {

  }
}
const prototype = ApplicationStreamingManager.prototype;
const applicationStreamingManager = new ApplicationStreamingManager();
const result = size.fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;
