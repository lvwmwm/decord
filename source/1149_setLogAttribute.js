// Module ID: 1149
// Function ID: 13084
// Name: setLogAttribute
// Dependencies: [794, 977]

// Module 1149 (setLogAttribute)
const require = arg1;
const dependencyMap = arg6;
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
let c3;
arg5.logEnricherIntegration = function logEnricherIntegration() {
  return {
    name: "LogEnricher",
    setup(on) {
      let closure_0 = on;
      on.on("afterInit", () => {
        (function cacheLogContext() {
          return outer3_2(this, undefined, undefined, function*() {
            const NATIVE = outer5_0(outer5_1[1]).NATIVE;
            const tmp = yield NATIVE.fetchNativeLogAttributes();
            let contexts;
            if (null != tmp) {
              contexts = tmp2.contexts;
            }
            const outer1_0 = contexts;
            let device;
            if (null !== contexts) {
              if (undefined !== outer1_0) {
                device = outer1_0.device;
              }
            }
            let tmp8 = device;
            if (device) {
              let obj = {};
              device = tmp2.contexts.device;
              const outer1_1 = device;
              let brand;
              if (null !== device) {
                if (undefined !== outer1_1) {
                  brand = outer1_1.brand;
                }
              }
              obj.brand = brand;
              const device2 = tmp2.contexts.device;
              const outer1_2 = device2;
              let model;
              if (null !== device2) {
                if (undefined !== outer1_2) {
                  model = outer1_2.model;
                }
              }
              obj.model = model;
              const device3 = tmp2.contexts.device;
              const outer1_3 = device3;
              let family;
              if (null !== device3) {
                if (undefined !== outer1_3) {
                  family = outer1_3.family;
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
            const outer1_4 = contexts1;
            let os;
            if (null !== contexts1) {
              if (undefined !== outer1_4) {
                os = outer1_4.os;
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
            const outer1_5 = contexts2;
            let release;
            if (null !== contexts2) {
              if (undefined !== outer1_5) {
                release = outer1_5.release;
              }
            }
            let tmp35 = release;
            if (release) {
              obj = { release: tmp.contexts.release };
              tmp35 = obj;
            }
            const outer5_3 = Object.assign(merged1, tmp35);
            return Promise.resolve();
          });
        })().then(() => {
          outer1_0.on("beforeCaptureLog", (attributes) => {
            if (undefined !== outer4_3) {
              attributes = attributes.attributes;
              if (null === attributes) {
                attributes = {};
              }
              outer4_4(attributes, "device.brand", outer4_3.brand);
              outer4_4(attributes, "device.model", outer4_3.model);
              outer4_4(attributes, "device.family", outer4_3.family);
              outer4_4(attributes, "os.name", outer4_3.os);
              outer4_4(attributes, "os.version", outer4_3.version);
              outer4_4(attributes, "sentry.release", outer4_3.release);
              const integrationByName = outer2_0.getIntegrationByName("MobileReplay");
              let replayId;
              if (null != integrationByName) {
                replayId = integrationByName.getReplayId();
              }
              outer4_4(attributes, "sentry.replay_id", replayId);
              attributes.attributes = attributes;
              const tmp = outer4_4;
            }
          });
        }, (arg0) => {
          const debug = outer3_0(outer3_1[0]).debug;
          debug.log(arg0);
        });
      });
    }
  };
};
