// Module ID: 977
// Function ID: 10506
// Name: getRNSentryModule
// Dependencies: [57, 27, 978, 973, 980, 794, 989, 983, 990]
// Exports: getDataFromUri, getRNSentryModule

// Module 977 (getRNSentryModule)
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import encodeUTF8 from "encodeUTF8";

let Platform;
let closure_3;
let self = this;
const require = arg1;
function getRNSentryModule() {
  if (obj.isTurboModuleEnabled()) {
    const TurboModuleRegistry = require(973) /* reactNativeVersion */.ReactNativeLibraries.TurboModuleRegistry;
    let value;
    if (null !== TurboModuleRegistry) {
      if (undefined !== TurboModuleRegistry) {
        value = TurboModuleRegistry.get("RNSentry");
      }
    }
    let RNSentry = value;
  } else {
    RNSentry = RNSentry.RNSentry;
  }
  return RNSentry;
}
({ NativeModules: closure_3, Platform } = get_ActivityIndicator);
let fn = this;
if (this) {
  fn = self.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
let fn2 = self;
if (self) {
  fn2 = self.__rest;
}
if (!fn2) {
  fn2 = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let tmp3 = key10007;
      let _Object3 = Object;
      let callResult = hasOwnProperty.call(arg0, key10007);
      if (callResult) {
        callResult = arg1.indexOf(key10007) < 0;
      }
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object4 = Object;
      if ("function" === typeof Object.getOwnPropertySymbols) {
        const _Object = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object2 = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  };
}
let closure_6 = getRNSentryModule();
let closure_7 = encodeUTF8.encodeUTF8("\n");
encodeUTF8 = {
  fetchModules() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp3 = yield outer2_6.fetchModules();
          let parsed = null;
          if (tmp3) {
            const _JSON = JSON;
            parsed = JSON.parse(tmp3);
          }
          return parsed;
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  sendEnvelope(arg0) {
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function*() {
      let tmp63;
      let tmp64;
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp7 = outer2_2(outer1_0, 2);
          const _JSON = JSON;
          const json = JSON.stringify(tmp7[0]);
          let obj = callback(outer2_1[4]);
          const encodeUTF8Result = obj.encodeUTF8(json);
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(encodeUTF8Result.length + outer2_7.length);
          let arr2 = uint8Array;
          const result = uint8Array.set(encodeUTF8Result);
          const result1 = uint8Array.set(outer2_7, encodeUTF8Result.length);
          let flag = false;
          const tmp21 = tmp7[1][Symbol.iterator]();
          while (tmp21 !== undefined) {
            let tmp61 = outer2_2;
            let tmp62 = outer2_2(self._processItem(tmp22), 2);
            [tmp63, tmp64] = tmp62;
            let tmp65 = tmp64;
            if ("string" === typeof tmp64) {
              let str7 = "text/plain";
              let tmp33 = callback;
              let tmp34 = outer2_1;
              let obj5 = callback(outer2_1[4]);
              let tmp35 = tmp64;
              let encodeUTF8Result1 = obj5.encodeUTF8(tmp65);
            } else {
              let tmp66 = tmp64;
              let _Uint8Array3 = Uint8Array;
              let tmp67 = tmp63;
              let tmp68 = typeof tmp63.content_type;
              if (tmp65 instanceof Uint8Array) {
                let str8 = "application/octet-stream";
                if ("string" === tmp68) {
                  let tmp32 = tmp63;
                  str8 = tmp63.content_type;
                }
                str7 = str8;
                encodeUTF8Result1 = tmp64;
              } else {
                let str6 = "application/json";
                if ("string" === tmp68) {
                  let tmp24 = tmp63;
                  str6 = tmp63.content_type;
                }
                str7 = str6;
                let tmp25 = callback;
                let tmp26 = outer2_1;
                let obj3 = callback(outer2_1[4]);
                let _JSON2 = JSON;
                let tmp27 = tmp64;
                encodeUTF8Result1 = obj3.encodeUTF8(JSON.stringify(tmp65));
                let tmp28 = flag;
                if (!flag) {
                  let tmp29 = callback;
                  let tmp30 = outer2_1;
                  let obj4 = callback(outer2_1[6]);
                  let tmp31 = tmp64;
                  flag = obj4.isHardCrash(tmp65);
                }
              }
            }
            let tmp36 = tmp63;
            let tmp37 = str7;
            tmp63.content_type = str7;
            let tmp38 = encodeUTF8Result1;
            tmp63.length = encodeUTF8Result1.length;
            let _JSON3 = JSON;
            let tmp40 = callback;
            let tmp41 = outer2_1;
            let json1 = JSON.stringify(tmp63);
            let obj6 = callback(outer2_1[4]);
            let encodeUTF8Result2 = obj6.encodeUTF8(json1);
            let _Uint8Array2 = Uint8Array;
            let tmp42 = arr2;
            let tmp43 = outer2_7;
            let tmp44 = outer2_7;
            let tmp45 = new.target;
            let tmp46 = new.target;
            let uint8Array1 = new Uint8Array(arr2.length + encodeUTF8Result2.length + outer2_7.length + encodeUTF8Result1.length + outer2_7.length);
            let tmp47 = uint8Array1;
            let result2 = uint8Array1.set(arr2);
            let result3 = uint8Array1.set(encodeUTF8Result2, arr2.length);
            let tmp50 = outer2_7;
            let result4 = uint8Array1.set(outer2_7, arr2.length + encodeUTF8Result2.length);
            let tmp52 = outer2_7;
            let result5 = uint8Array1.set(encodeUTF8Result1, arr2.length + encodeUTF8Result2.length + outer2_7.length);
            let tmp54 = outer2_7;
            let tmp55 = outer2_7;
            let result6 = uint8Array1.set(outer2_7, arr2.length + encodeUTF8Result2.length + outer2_7.length + encodeUTF8Result1.length);
            arr2 = uint8Array1;
            continue;
          }
          obj = { hardCrashed: flag };
          yield outer2_6.captureEnvelope(callback(outer2_1[7]).base64StringFromByteArray(arr2), obj);
          const obj8 = callback(outer2_1[7]);
        } else {
          throw self._NativeClientError;
        }
      } else {
        const debug = callback(outer2_1[5]).debug;
        debug.warn("Event was skipped as native SDK is not enabled.");
      }
    });
  },
  initNativeSdk(arg0) {
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function*() {
      let androidProfilingOptions;
      let beforeBreadcrumb;
      let beforeSend;
      let beforeSendMetric;
      let beforeSendTransaction;
      let ignoreErrors3;
      let integrations;
      let logsOrigin;
      const self = this;
      const merged = Object.assign({ enableNative: true, autoInitializeNativeSdk: true }, outer1_0);
      if (undefined !== outer1_0.enableLogs) {
        let obj = {};
        let enableLogs = outer1_0.enableLogs;
        if (enableLogs) {
          enableLogs = "js" !== outer1_0.logsOrigin;
        }
        obj.enableLogs = enableLogs;
      } else {
        obj = {};
      }
      const merged1 = Object.assign(merged, obj);
      if (merged1.enableNative) {
        if (merged1.autoInitializeNativeSdk) {
          if (merged1.dsn) {
            if (self._isModuleLoaded(outer2_6)) {
              const ignoreErrors = merged1.ignoreErrors;
              const outer1_1 = ignoreErrors;
              let found;
              if (null !== ignoreErrors) {
                if (undefined !== outer1_1) {
                  found = outer1_1.filter((arg0) => "string" === typeof arg0);
                }
              }
              const ignoreErrors2 = merged1.ignoreErrors;
              const outer1_2 = ignoreErrors2;
              let mapped;
              if (null !== ignoreErrors2) {
                if (undefined !== outer1_2) {
                  const found1 = outer1_2.filter((arg0) => arg0 instanceof RegExp);
                  mapped = found1.map((source) => source.source);
                }
              }
              let tmp22 = found;
              if (found) {
                tmp22 = found.length > 0;
              }
              if (tmp22) {
                merged1.ignoreErrorsStr = found;
              }
              let tmp23 = mapped;
              if (mapped) {
                tmp23 = mapped.length > 0;
              }
              if (tmp23) {
                merged1.ignoreErrorsRegex = mapped;
              }
              ({ beforeSend, beforeBreadcrumb, beforeSendTransaction, beforeSendMetric, integrations, ignoreErrors: ignoreErrors3, logsOrigin, androidProfilingOptions } = merged1);
              const tmp25 = outer2_5(merged1, ["beforeSend", "beforeBreadcrumb", "beforeSendTransaction", "beforeSendMetric", "integrations", "ignoreErrors", "logsOrigin", "androidProfilingOptions"]);
              if (androidProfilingOptions) {
                const _Object = Object;
                const _Object2 = Object;
                obj = { androidProfilingOptions };
                tmp25._experiments = Object.assign(Object.assign({}, tmp25._experiments), obj);
              }
              const tmp27 = yield outer2_6.initNativeSdk(tmp25);
              self.nativeIsReady = tmp27;
              self.enableNative = true;
              return tmp27;
            } else {
              throw self._NativeClientError;
            }
          } else {
            const debug3 = callback(outer2_1[5]).debug;
            debug3.warn("Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.");
            self.enableNative = false;
            return false;
          }
        } else {
          if (merged1.enableNativeNagger) {
            const debug2 = callback(outer2_1[5]).debug;
            debug2.warn("Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false");
          }
          self.enableNative = true;
          return false;
        }
      } else {
        if (merged1.enableNativeNagger) {
          const debug = callback(outer2_1[5]).debug;
          debug.warn("Note: Native Sentry SDK is disabled.");
        }
        self.enableNative = false;
        return false;
      }
    });
  },
  fetchNativeLogAttributes() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.fetchNativeLogAttributes();
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  fetchNativeRelease() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.fetchNativeRelease();
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  fetchNativeSdkInfo() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.fetchNativeSdkInfo();
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  fetchNativeDeviceContexts() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.fetchNativeDeviceContexts();
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  fetchNativeAppStart() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          let nativeAppStart = outer2_6.fetchNativeAppStart();
        } else {
          const debug2 = outer2_0(outer2_1[5]).debug;
          debug2.error(self._NativeClientError);
          nativeAppStart = null;
        }
      } else {
        const debug = outer2_0(outer2_1[5]).debug;
        debug.warn(self._DisabledNativeError);
        return null;
      }
    });
  },
  fetchNativeFrames() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.fetchNativeFrames();
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  nativeCrash() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        authStore.crash();
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setUser(arg0) {
    let email;
    let geo;
    let id;
    let ip_address;
    let username;
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        let _serializeObjectResult = null;
        let _serializeObjectResult1 = null;
        if (arg0) {
          ({ id, ip_address, email, username, geo } = arg0);
          const obj = { id, ip_address, email, username, geo };
          _serializeObjectResult = self._serializeObject(obj);
          _serializeObjectResult1 = self._serializeObject(fn2(arg0, ["id", "ip_address", "email", "username", "geo"]));
          const tmp5 = fn2(arg0, ["id", "ip_address", "email", "username", "geo"]);
        }
        authStore.setUser(_serializeObjectResult, _serializeObjectResult1);
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setTag(arg0, arg1) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        let json = arg1;
        if ("string" !== typeof arg1) {
          const _JSON = JSON;
          json = JSON.stringify(arg1);
        }
        authStore.setTag(arg0, json);
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setExtra(arg0, arg1) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        if ("string" === typeof arg1) {
          return authStore.setExtra(arg0, arg1);
        } else if (undefined === arg1) {
          return authStore.setExtra(arg0, "undefined");
        } else {
          const _JSON = JSON;
          const json = JSON.stringify(require(794) /* registerSpanErrorInstrumentation */.normalize(arg1));
          while (true) {
            let tmp3 = json;
            if ("string" === typeof json) {
              let tmp7 = authStore;
              let tmp8 = arg0;
              let setExtraResult = authStore.setExtra(arg0, json);
            } else {
              let tmp4 = authStore;
              let tmp5 = arg0;
              let str2 = "**non-stringifiable**";
              setExtraResult = authStore.setExtra(arg0, "**non-stringifiable**");
            }
            return setExtraResult;
          }
          const obj = require(794) /* registerSpanErrorInstrumentation */;
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  addBreadcrumb(level) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        const _Object = Object;
        const obj = {};
        let _processLevelResult;
        const merged = Object.assign({}, level);
        if (level.level) {
          _processLevelResult = self._processLevel(level.level);
        }
        obj.level = _processLevelResult;
        authStore.addBreadcrumb(Object.assign(merged, obj));
      } else {
        throw self._NativeClientError;
      }
    }
  },
  clearBreadcrumbs() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        authStore.clearBreadcrumbs();
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setContext(arg0, data) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        if (null === data) {
          return authStore.setContext(arg0, null);
        } else {
          const result = require(990) /* convertToNormalizedObject */.convertToNormalizedObject(data);
          while (true) {
            let tmp4 = result;
            let tmp5 = authStore;
            let setContext = authStore.setContext;
            let tmp6 = arg0;
            if (result) {
              let setContextResult = setContext(arg0, result);
            } else {
              let obj = {};
              let str = "**non-serializable**";
              obj.error = "**non-serializable**";
              let setContextResult1 = setContext(arg0, obj);
            }
          }
          const obj2 = require(990) /* convertToNormalizedObject */;
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  closeNativeSdk() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.closeNativeSdk().then(() => {
            self.enableNative = false;
          });
        }
      }
    });
  },
  disableNativeFramesTracking() {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(authStore);
    }
    if (enableNative) {
      const result = authStore.disableNativeFramesTracking();
    }
  },
  enableNativeFramesTracking() {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(authStore);
    }
    if (enableNative) {
      const result = authStore.enableNativeFramesTracking();
    }
  },
  isNativeAvailable() {
    return this._isModuleLoaded(closure_6);
  },
  captureScreenshot() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp11 = yield outer2_6.captureScreenshot();
          while (true) {
            let tmp12 = tmp11;
            let mapped = null;
            if (!arr) {
              break;
            } else {
              let tmp14 = tmp11;
              mapped = arr.map((data) => {
                const obj = {};
                const merged = Object.assign({}, data);
                const uint8Array = new Uint8Array(data.data);
                obj.data = uint8Array;
                return Object.assign(merged, obj);
              });
              break;
            }
            return mapped;
          }
        } else {
          const debug2 = outer2_0(outer2_1[5]).debug;
          debug2.error(self._NativeClientError);
          return null;
        }
      } else {
        const debug = outer2_0(outer2_1[5]).debug;
        debug.warn(self._DisabledNativeError);
        return null;
      }
    });
  },
  fetchViewHierarchy() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp3 = yield outer2_6.fetchViewHierarchy();
          let uint8Array = null;
          if (tmp3) {
            const _Uint8Array = Uint8Array;
            uint8Array = new Uint8Array(tmp3);
          }
          return uint8Array;
        } else {
          throw self._NativeClientError;
        }
      } else {
        throw self._DisabledNativeError;
      }
    });
  },
  startProfiling(arg0) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        const startProfilingResult = authStore.startProfiling(arg0);
        const started = startProfilingResult.started;
        const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
        if (started) {
          debug.log("[NATIVE] Start Profiling");
        } else {
          debug.error("[NATIVE] Start Profiling Failed", startProfilingResult.error);
        }
        return started;
      } else {
        throw self._NativeClientError;
      }
    } else {
      throw self._DisabledNativeError;
    }
  },
  stopProfiling() {
    let androidProfile;
    let error;
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        const stopProfilingResult = authStore.stopProfiling();
        const profile = stopProfilingResult.profile;
        ({ androidProfile, error } = stopProfilingResult);
        if (profile) {
          if (!error) {
            if (!androidProfile) {
              const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
              debug.warn("[NATIVE] Stop Profiling Failed: No Android Profile");
            }
            const obj = {};
            const _JSON = JSON;
            obj.hermesProfile = JSON.parse(profile);
            obj.nativeProfile = tmp5;
            obj.androidProfile = androidProfile;
            return obj;
          }
        }
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug2.error("[NATIVE] Stop Profiling Failed", error);
        return null;
      } else {
        throw self._NativeClientError;
      }
    } else {
      throw self._DisabledNativeError;
    }
  },
  fetchNativePackageName() {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(authStore);
    }
    if (enableNative) {
      enableNative = authStore.fetchNativePackageName();
    }
    if (!enableNative) {
      enableNative = null;
    }
    return enableNative;
  },
  fetchNativeStackFramesBy(stackReturnAddresses) {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(authStore);
    }
    if (enableNative) {
      enableNative = authStore.fetchNativeStackFramesBy(stackReturnAddresses);
    }
    if (!enableNative) {
      enableNative = null;
    }
    return enableNative;
  },
  initNativeReactNavigationNewFrameTracking() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (obj) {
        return obj.resume();
      } else if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          return outer2_6.initNativeReactNavigationNewFrameTracking();
        }
      }
    });
  },
  captureReplay(outer1_0) {
    let closure_0 = outer1_0;
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp15 = yield outer2_6.captureReplay(outer1_0);
          let tmp16 = tmp15;
          if (!tmp15) {
            tmp16 = null;
          }
          let resolved = tmp16;
        } else {
          const debug2 = callback(outer2_1[5]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is not available.");
          resolved = Promise.resolve(null);
        }
      } else {
        const debug = callback(outer2_1[5]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is disabled.");
        return Promise.resolve(null);
      }
    });
  },
  getCurrentReplayId() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        let tmp11 = authStore.getCurrentReplayId() || null;
        const tmp13 = authStore.getCurrentReplayId() || null;
      } else {
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is not available.");
        tmp11 = null;
      }
    } else {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is disabled.");
      return null;
    }
  },
  crashedLastRun() {
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp5 = yield outer2_6.crashedLastRun();
          let tmp6 = null;
          if ("boolean" === typeof tmp5) {
            tmp6 = tmp5;
          }
          return tmp6;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  },
  getNewScreenTimeToDisplay() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        let newScreenTimeToDisplay = authStore.getNewScreenTimeToDisplay();
      }
      return newScreenTimeToDisplay;
    }
    newScreenTimeToDisplay = Promise.resolve(null);
  },
  getDataFromUri(arg0) {
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const tmp4 = yield outer2_6.getDataFromUri(outer1_0);
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(tmp4);
          return uint8Array;
        }
      }
      return null;
    });
  },
  popTimeToDisplayFor(arg0) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        return authStore.popTimeToDisplayFor(arg0);
      }
    }
    return Promise.resolve(null);
  },
  setActiveSpanId(spanId) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(authStore)) {
        authStore.setActiveSpanId(spanId);
      }
    }
  },
  encodeToBase64(data) {
    let closure_0 = data;
    return fn(this, undefined, undefined, function*() {
      const self = this;
      if (self.enableNative) {
        if (self._isModuleLoaded(outer2_6)) {
          const _Array = Array;
          const tmp5 = yield outer2_6.encodeToBase64(Array.from(outer1_0));
          let tmp6 = tmp5;
          if (!tmp5) {
            tmp6 = null;
          }
          return tmp6;
        }
      }
      return Promise.resolve(null);
    });
  },
  primitiveProcessor(arg0) {
    return arg0;
  },
  _processItem(arg0) {
    const self = this;
    const tmp = callback(arg0, 2);
    const first = tmp[0];
    if ("event" != first.type) {
      if ("transaction" != first.type) {
        return arg0;
      }
    }
    const _processLevelsResult = self._processLevels(tmp[1]);
    let tmp4 = "android" === encodeUTF8.platform;
    if (tmp4) {
      tmp4 = "message" in _processLevelsResult;
    }
    if (tmp4) {
      const obj = { message: _processLevelsResult.message };
      _processLevelsResult.message = obj;
    }
    const items = [first, _processLevelsResult];
    return items;
  },
  _serializeObject(arg0) {
    let closure_0 = arg0;
    const obj = {};
    const keys = Object.keys(arg0);
    const item = keys.forEach((arg0) => {
      let json = tmp;
      if ("string" !== typeof table[arg0]) {
        const _JSON = JSON;
        json = JSON.stringify(tmp);
      }
      obj[arg0] = json;
    });
    return obj;
  },
  _processLevels(level) {
    let self = this;
    self = this;
    let obj = {};
    let _processLevelResult;
    let merged = Object.assign({}, level);
    if (level.level) {
      _processLevelResult = self._processLevel(level.level);
    }
    obj.level = _processLevelResult;
    const breadcrumbs = level.breadcrumbs;
    let mapped;
    if (null !== breadcrumbs) {
      if (undefined !== breadcrumbs) {
        mapped = breadcrumbs.map((level) => {
          const obj = {};
          let _processLevelResult;
          const merged = Object.assign({}, level);
          if (level.level) {
            _processLevelResult = self._processLevel(level.level);
          }
          obj.level = _processLevelResult;
          return Object.assign(merged, obj);
        });
      }
    }
    obj.breadcrumbs = mapped;
    return Object.assign(merged, obj);
  },
  _processLevel(level) {
    let str = "debug";
    if ("log" != level) {
      str = level;
    }
    return str;
  },
  _isModuleLoaded(closure_6) {
    return closure_6;
  },
  _setPrimitiveProcessor(primitiveProcessor) {
    this.primitiveProcessor = primitiveProcessor;
  }
};
const sentryError = new require("registerSpanErrorInstrumentation").SentryError("Native is disabled");
encodeUTF8._DisabledNativeError = sentryError;
const sentryError1 = new require("registerSpanErrorInstrumentation").SentryError("Native Client is not available, can't start on native.");
encodeUTF8._NativeClientError = sentryError1;
encodeUTF8.enableNative = true;
encodeUTF8.nativeIsReady = false;
encodeUTF8.platform = "android";

export { getRNSentryModule };
export const NATIVE = encodeUTF8;
export const getDataFromUri = function getDataFromUri(arg0) {
  let closure_0 = arg0;
  return fn(this, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      return outer2_8.getDataFromUri(outer1_0);
    }
  });
};
