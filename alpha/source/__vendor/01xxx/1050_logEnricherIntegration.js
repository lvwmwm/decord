// Module ID: 1050
// Function ID: 1051
// Name: logEnricherIntegration
// Dependencies: [693, 878]
// Exports: logEnricherIntegration

// Module 1050 (logEnricherIntegration)
let attributes, c4, c5, closure_2;

const fn = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
    closure_0 = fn;
    closure_1 = arg1;
    function fulfilled(result) {
      try {
        step(iter.next(result));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    function rejected(arg0) {
      try {
        step(iter.throw(arg0));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    let iter = rejected;
    function step(done) {
      if (done.done) {
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
let c3;

export const logEnricherIntegration = () => {
  let obj = {
    name: "LogEnricher",
    setup(on) {
      let closure_0 = on;
      on.on("afterInit", () => {
        const promise = fn(undefined, undefined, undefined, function*(arg0, value) {
          let family;
          let model;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_1;
              let closure_0;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp;
                  closure_0 = undefined;
                  c3 = 1;
                  const NATIVE = closure_0(closure_1[1]).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: NATIVE.fetchNativeLogAttributes(), done: false };
                  return obj4;
                }
              } else if (1 === c4) {
                c3 = 0;
                closure_1 = closure_2;
                const _HermesInternal = HermesInternal;
                c5 = 3;
                const obj5 = { value: Promise.reject("[LOGS]: Failed to prepare attributes from Native Layer: " + closure_1), done: true };
                return obj5;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                let contexts;
                const _Object = Object;
                const _Object2 = Object;
                const assign2 = Object.assign;
                const _Object3 = Object;
                const assign3 = Object.assign;
                if (null != closure_0) {
                  contexts = closure_0.contexts;
                }
                let device1;
                if (null !== contexts) {
                  if (undefined !== contexts) {
                    device1 = contexts.device;
                  }
                }
                if (device1) {
                  const device = closure_0.contexts.device;
                  let brand;
                  if (null !== device) {
                    if (undefined !== device) {
                      brand = device.brand;
                    }
                  }
                  const obj = { brand, model, family };
                  const device2 = closure_0.contexts.device;
                  model = undefined;
                  if (null !== device2) {
                    if (undefined !== device2) {
                      model = device2.model;
                    }
                  }
                  const device3 = closure_0.contexts.device;
                  family = undefined;
                  if (null !== device3) {
                    if (undefined !== device3) {
                      family = device3.family;
                    }
                  }
                  device1 = obj;
                }
                let contexts1;
                const assign3Result = assign3({}, device1);
                if (null != closure_0) {
                  contexts1 = closure_0.contexts;
                }
                let os;
                if (null !== contexts1) {
                  if (undefined !== contexts1) {
                    os = contexts1.os;
                  }
                }
                if (os) {
                  const obj7 = { os: closure_0.contexts.os.name, version: closure_0.contexts.os.version };
                  os = obj7;
                }
                let contexts2;
                const assign2Result = assign2(assign3Result, os);
                if (null != closure_0) {
                  contexts2 = closure_0.contexts;
                }
                let release;
                if (null !== contexts2) {
                  if (undefined !== contexts2) {
                    release = contexts2.release;
                  }
                }
                if (release) {
                  const obj8 = { release: closure_0.contexts.release };
                  release = obj8;
                }
                assign(assign2Result, release);
                c3 = 0;
                c5 = 3;
                const obj9 = { value: Promise.resolve(), done: true };
                return obj9;
              }
            } catch (tmp59) {
              closure_2 = tmp59;
              if (0 === c3) {
                c5 = 3;
                throw tmp59;
              } else {
                c4 = 1;
              }
            }
          }
        });
        promise.then(() => {
          on.on("beforeCaptureLog", (attributes) => {
            const f87061 = (item) => {
              let tmp2 = typeof tmp !== "string";
              if (typeof attributes3[item] !== "string") {
                tmp2 = typeof tmp !== "number";
              }
              if (tmp2) {
                tmp2 = typeof tmp !== "boolean";
              }
              if (!tmp2) {
                obj2[item] = attributes3[item];
              }
            };
            const obj = closure_1_0;
            if (undefined !== closure_2_3) {
              attributes = attributes.attributes ?? {};
              const obj2 = {};
              const tmp = on;
              let tmp2 = closure_2_1;
              const obj4 = on(closure_2_1[0]);
              const globalScope = obj4.getGlobalScope();
              let attributes1;
              if (globalScope) {
                if (typeof globalScope.getScopeData === "function") {
                  let getScopeData;
                  if (null != globalScope) {
                    getScopeData = globalScope.getScopeData;
                  }
                  attributes1 = undefined;
                  if (null !== getScopeData) {
                    if (undefined !== getScopeData) {
                      attributes1 = getScopeData.call(globalScope).attributes;
                    }
                  }
                  if (!attributes1) {
                    attributes1 = {};
                  }
                  const _Object = Object;
                  const keys = Object.keys(attributes1);
                  const item = keys.forEach(f87061);
                }
              }
              const tmpResult = tmp(tmp2[0]);
              const isolationScope = tmpResult.getIsolationScope();
              let attributes2;
              if (isolationScope) {
                if (typeof isolationScope.getScopeData === "function") {
                  let getScopeData1;
                  if (null != isolationScope) {
                    getScopeData1 = isolationScope.getScopeData;
                  }
                  attributes2 = undefined;
                  if (null !== getScopeData1) {
                    if (undefined !== getScopeData1) {
                      attributes2 = getScopeData1.call(isolationScope).attributes;
                    }
                  }
                  if (!attributes2) {
                    attributes2 = {};
                  }
                  const _Object2 = Object;
                  const keys1 = Object.keys(attributes2);
                  const item1 = keys1.forEach(f87061);
                }
              }
              const tmpResult2 = tmp(tmp2[0]);
              const currentScope = tmpResult2.getCurrentScope();
              let attributes3;
              if (currentScope) {
                if (typeof currentScope.getScopeData === "function") {
                  let getScopeData2;
                  if (null != currentScope) {
                    getScopeData2 = currentScope.getScopeData;
                  }
                  attributes3 = undefined;
                  if (null !== getScopeData2) {
                    if (undefined !== getScopeData2) {
                      attributes3 = getScopeData2.call(currentScope).attributes;
                    }
                  }
                  if (!attributes3) {
                    attributes3 = {};
                  }
                  const _Object3 = Object;
                  const keys2 = Object.keys(attributes3);
                  const item2 = keys2.forEach(f87061);
                }
              }
              const _Object4 = Object;
              const keys3 = Object.keys(obj2);
              const item3 = keys3.forEach((item) => {
                let tmp3 = null == tmp2;
                if (!tmp3) {
                  tmp3 = attributes[item] && true;
                }
                if (!tmp3) {
                  attributes[item] = obj2[item];
                }
              });
              const brand = closure_2_3.brand;
              let tmp18 = null == brand;
              if (!tmp18) {
                tmp18 = attributes["device.brand"] && false;
              }
              if (!tmp18) {
                attributes["device.brand"] = brand;
              }
              const model = closure_2_3.model;
              let tmp21 = null == model;
              if (!tmp21) {
                tmp21 = attributes["device.model"] && false;
              }
              if (!tmp21) {
                attributes["device.model"] = model;
              }
              const family = closure_2_3.family;
              let tmp24 = null == family;
              if (!tmp24) {
                tmp24 = attributes["device.family"] && false;
              }
              if (!tmp24) {
                attributes["device.family"] = family;
              }
              const os = closure_2_3.os;
              let tmp27 = null == os;
              if (!tmp27) {
                tmp27 = attributes["os.name"] && false;
              }
              if (!tmp27) {
                attributes["os.name"] = os;
              }
              const version = closure_2_3.version;
              let tmp30 = null == version;
              if (!tmp30) {
                tmp30 = attributes["os.version"] && false;
              }
              if (!tmp30) {
                attributes["os.version"] = version;
              }
              const release = closure_2_3.release;
              let tmp33 = null == release;
              if (!tmp33) {
                tmp33 = attributes["sentry.release"] && false;
              }
              if (!tmp33) {
                attributes["sentry.release"] = release;
              }
              const integrationByName = obj.getIntegrationByName("MobileReplay");
              let replayId;
              if (null != integrationByName) {
                replayId = integrationByName.getReplayId();
              }
              let tmp36 = null == replayId;
              if (!tmp36) {
                tmp36 = attributes["sentry.replay_id"] && false;
              }
              if (!tmp36) {
                attributes["sentry.replay_id"] = replayId;
              }
              attributes.attributes = attributes;
            }
          });
        }, (arg0) => {
          const debug = on(closure_1_1[0]).debug;
          debug.log(arg0);
        });
      });
    }
  };
  return obj;
};
