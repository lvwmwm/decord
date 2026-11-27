// Module ID: 20036
// Function ID: 20037
// Name: SoundboardAudioNative
// Dependencies: [32, 5, 19, 17, 1379, 5000, 2]
// Exports: loadSoundboardAudioPreview, trimSoundboardAudio, useIsSoundboardSoundCreationSupported

// Module 20036 (SoundboardAudioNative)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, c2;

function getSoundManager() {
  return NativeModules.DCDSoundManager;
}
function hasSoundboardAudioMethods(loadSoundboardAudioPreview) {
  let prop;
  if (loadSoundboardAudioPreview != null) {
    prop = loadSoundboardAudioPreview.loadSoundboardAudioPreview;
  }
  return null != prop && null != loadSoundboardAudioPreview.trimSoundboardAudio;
}
let obj = function _checkOpusEncoderAvailable() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj3 = closure_0;
            if (null == closure_0.isOpusEncoderAvailable) {
              c1 = 3;
              return { value: false, done: true };
            } else {
              c3 = 1;
              c2 = 2;
              c1 = 1;
              const obj5 = { value: obj3.isOpusEncoderAvailable(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp3) {
          c3 = 0;
          c1 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp4) {
        if (0 === c3) {
          c1 = 3;
          throw tmp4;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function isSoundboardSoundCreationSupported() {
  return obj(...arguments);
}
obj = function _isSoundboardSoundCreationSupported() {
  let closure_9;
  obj = _asyncToGenerator(async (arg0, value) => {
    function checkOpusEncoderAvailable() {
      return closure_1_8(...arguments);
    }
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp4;
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp17 = getSoundManager();
            const tmp6 = null == tmp17 || !hasSoundboardAudioMethods(tmp17);
            let tmp7 = !tmp6;
            if (tmp7) {
              const obj2 = PlatformUtils;
              let isIOSResult = obj2.isIOS();
              const tmp8 = require;
              const tmp9 = dependencyMap;
              if (!isIOSResult) {
                const tmp8Result = tmp8(tmp9[5]);
                tmp4 = tmp8Result.getSystemVersionMajor() >= 29;
                if (tmp4) {
                  if (value == null) {
                    value = checkOpusEncoderAvailable(tmp17);
                  }
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value, done: false };
                  return obj5;
                }
              }
              tmp7 = isIOSResult;
            }
            c0 = 3;
            const obj6 = { value: tmp7, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        isIOSResult = tmp4;
      } catch (tmp12) {
        c0 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
let c9 = null;
const result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardAudioNative.tsx");

export const MAX_SOUNDBOARD_SOURCE_DURATION_MS = 60000;
export const WAVEFORM_BAR_COUNT = 64;
export { isSoundboardSoundCreationSupported };
export function useIsSoundboardSoundCreationSupported() {
  let tmp2;
  let tmp = _slicedToArray(react.useState(() => {
    obj = PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      DCDSoundManager = DCDSoundManager.DCDSoundManager;
      let prop;
      if (DCDSoundManager != null) {
        prop = DCDSoundManager.loadSoundboardAudioPreview;
      }
      isIOSResult = null != prop && null != DCDSoundManager.trimSoundboardAudio;
    }
    return isIOSResult;
  }), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    function check() {
      return obj(...arguments);
    }
    obj = function _check() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let tmp;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: closure_2_10(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp = value;
              const tmp7 = closure_129_0;
              if (tmp7) {
                tmp(tmp);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = true;
    let tmp = check();
    return () => {
      c0 = false;
    };
  }, []);
  return tmp2;
}
export function loadSoundboardAudioPreview(c4, WAVEFORM_BAR_COUNT) {
  let rejectResult;
  const DCDSoundManager = NativeModules.DCDSoundManager;
  let prop;
  if (DCDSoundManager != null) {
    prop = DCDSoundManager.loadSoundboardAudioPreview;
  }
  if (null == prop) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("DCDSoundManager.loadSoundboardAudioPreview is unavailable");
    rejectResult = reject(error);
  } else {
    rejectResult = prop(c4, WAVEFORM_BAR_COUNT);
  }
  return rejectResult;
}
export function trimSoundboardAudio(uri, startMs) {
  let rejectResult;
  const DCDSoundManager = NativeModules.DCDSoundManager;
  let trimSoundboardAudio;
  if (DCDSoundManager != null) {
    trimSoundboardAudio = DCDSoundManager.trimSoundboardAudio;
  }
  if (null == trimSoundboardAudio) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("DCDSoundManager.trimSoundboardAudio is unavailable");
    rejectResult = reject(error);
  } else {
    rejectResult = trimSoundboardAudio(uri, startMs.startMs, startMs.endMs);
  }
  return rejectResult;
}
