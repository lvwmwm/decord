// Module ID: 1149
// Function ID: 13083
// Name: setLogAttribute
// Dependencies: []

// Module 1149 (setLogAttribute)
function setLogAttribute(arg0, arg1, arg2) {
  const tmp = arguments.length > 3 && undefined !== arguments[3];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[3];
  }
  let tmp3 = !arg2;
  if (!tmp3) {
    tmp3 = arg0[arg1] && !tmp2;
    const tmp4 = arg0[arg1] && !tmp2;
  }
  if (!tmp3) {
    arg0[arg1] = arg2;
  }
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const arg6 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
let closure_3;
arg5.logEnricherIntegration = function logEnricherIntegration() {
  return {
    name: "LogEnricher",
    setup(on) {
      on.on("afterInit", () => {
        function cacheLogContext() {
          return callback(this, undefined, undefined, function*() {
            const NATIVE = contexts(device[1]).NATIVE;
            const tmp = yield NATIVE.fetchNativeLogAttributes();
            let contexts;
            if (null != tmp) {
              contexts = tmp2.contexts;
            }
            let device;
            if (null !== contexts) {
              if (undefined !== contexts) {
                device = contexts.device;
              }
            }
            let tmp8 = device;
            if (device) {
              let obj = {};
              device = tmp2.contexts.device;
              let brand;
              if (null !== device) {
                if (undefined !== device) {
                  brand = device.brand;
                }
              }
              obj.brand = brand;
              const device2 = tmp2.contexts.device;
              let model;
              if (null !== device2) {
                if (undefined !== device2) {
                  model = device2.model;
                }
              }
              obj.model = model;
              const device3 = tmp2.contexts.device;
              let family = device3;
              family = undefined;
              if (null !== device3) {
                if (undefined !== family) {
                  family = family.family;
                }
              }
              obj.family = family;
              tmp8 = obj;
            }
            let contexts1;
            const merged = Object.assign({}, tmp8);
            if (null != tmp) {
              contexts1 = tmp2.contexts;
            }
            let os;
            if (null !== contexts1) {
              if (undefined !== contexts1) {
                os = contexts1.os;
              }
            }
            let tmp27 = os;
            if (os) {
              obj = { os: tmp2.contexts.os.name, version: tmp2.contexts.os.version };
              tmp27 = obj;
            }
            let contexts2;
            const merged1 = Object.assign(merged, tmp27);
            if (null != tmp) {
              contexts2 = tmp2.contexts;
            }
            let release;
            if (null !== contexts2) {
              if (undefined !== contexts2) {
                release = contexts2.release;
              }
            }
            let tmp35 = release;
            if (release) {
              obj = { release: tmp.contexts.release };
              tmp35 = obj;
            }
            family = Object.assign(merged1, tmp35);
            return Promise.resolve();
          });
        }().then(() => {
          lib.on("beforeCaptureLog", (attributes) => {
            if (undefined !== closure_3) {
              attributes = attributes.attributes;
              if (null === attributes) {
                attributes = {};
              }
              callback(attributes, "device.brand", closure_3.brand);
              callback(attributes, "device.model", closure_3.model);
              callback(attributes, "device.family", closure_3.family);
              callback(attributes, "os.name", closure_3.os);
              callback(attributes, "os.version", closure_3.version);
              callback(attributes, "sentry.release", closure_3.release);
              const integrationByName = closure_0.getIntegrationByName("MobileReplay");
              let replayId;
              if (null != integrationByName) {
                replayId = integrationByName.getReplayId();
              }
              callback(attributes, "sentry.replay_id", replayId);
              attributes.attributes = attributes;
              const tmp = callback;
            }
          });
        }, (arg0) => {
          const debug = lib(closure_1[0]).debug;
          debug.log(arg0);
        });
      });
    }
  };
};
