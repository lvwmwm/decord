// Module ID: 20502
// Function ID: 20503
// Name: ApplicationStreamingManager
// Dependencies: [19, 6077, 5995, 5899, 21, 3, 20503, 6093, 20504, 2118, 12101, 6049, 2]

// Module 20502 (ApplicationStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 5899 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5995 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6093 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 12101 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 6077 */;
import ApplicationStreamingManager2 from "go_live/ApplicationStreamingManager" /* 20503 */;
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
      const tmp4Result = tmp4(6049);
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
