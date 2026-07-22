// Module ID: 16430
// Function ID: 126864
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16430 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
importAll(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const ApplicationStreamPresets = arg1(dependencyMap[7]).ApplicationStreamPresets;
const MediaEngineContextTypes = arg1(dependencyMap[8]).MediaEngineContextTypes;
const jsx = arg1(dependencyMap[9]).jsx;
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("ApplicationStreamingManager");
importDefaultResult.enableNativeLogger(true);
let tmp5 = (arg0) => {
  class ApplicationStreamingManager {
    constructor() {
      self = this;
      tmp = closure_3(this, ApplicationStreamingManager);
      obj = closure_6(ApplicationStreamingManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ApplicationStreamingManager;
  callback2(ApplicationStreamingManager, arg0);
  let obj = {
    key: "platformShowStreamFull",
    value() {
      let obj = callback(closure_2[11]);
      obj = {
        importer() {
          return callback(paths[13])(paths[12], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return callback(closure_0, {});
            };
          });
        }
      };
      obj.openLazy(obj);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "platformHandleStreamStart",
    value(sourceId) {
      let fps;
      let preset;
      let resolution;
      let soundshareEnabled;
      sourceId = sourceId.sourceId;
      if (null != sourceId) {
        let tmp6;
        let obj = callback(closure_2[14]);
        obj = { location: "platformHandleStreamStart" };
        if (obj.getConfig(obj).showMobileGoLiveUpsell) {
          let state = state.getState();
        } else {
          state = { preset: constants.PRESET_CUSTOM };
        }
        ({ preset, resolution, fps, soundshareEnabled } = state);
        tmp6 = callback(closure_2[15]);
        obj = {};
        const obj1 = { sourceId, sound: soundshareEnabled };
        obj.desktopSettings = obj1;
        const obj2 = { preset, resolution, frameRate: fps };
        obj.qualityOptions = obj2;
        obj.context = constants2.STREAM;
        tmp6.setGoLiveSource(obj);
      } else {
        const _HermesInternal = HermesInternal;
        closure_12.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "platformHandleVoiceStateUpdate",
    value() {

    }
  };
  items[2] = obj;
  return callback(ApplicationStreamingManager, items);
}(importDefault(dependencyMap[16]));
tmp5 = new tmp5();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default tmp5;
