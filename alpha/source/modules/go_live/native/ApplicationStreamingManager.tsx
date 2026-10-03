// Module ID: 18026
// Function ID: 18027
// Name: ApplicationStreamingManager
// Dependencies: [19, 4936, 4937, 4915, 21, 3, 18027, 5708, 18028, 1987, 9637, 9306, 2]

// Module 18026 (ApplicationStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 4915 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4937 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 9637 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4936 */;
import ApplicationStreamingManager2 from "go_live/ApplicationStreamingManager" /* 18027 */;
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
      const tmp4Result = tmp4(9306);
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
