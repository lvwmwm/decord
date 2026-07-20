// Module ID: 1075
// Function ID: 12346
// Name: browserProfilingIntegration
// Dependencies: []

// Module 1075 (browserProfilingIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[3]);

export const browserProfilingIntegration = _module.defineIntegration(function _browserProfilingIntegration() {
  return {
    name: "BrowserProfiling",
    setup(getOptions) {
      const options = getOptions.getOptions();
      const uIProfiler = new uIProfiler(closure_1[0]).UIProfiler();
      const obj2 = uIProfiler(closure_1[1]);
      if (!tmp2) {
        options.profileLifecycle = "manual";
      }
      const tmp2 = uIProfiler(closure_1[1]).hasLegacyProfiling(options) || options.profileLifecycle;
      if (obj3.hasLegacyProfiling(options)) {
        if (!options.profilesSampleRate) {
          if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
            const debug = uIProfiler(closure_1[3]).debug;
            debug.log("[Profiling] Profiling disabled, no profiling options found.");
          }
        }
      }
      const obj3 = uIProfiler(closure_1[1]);
      const activeSpan = uIProfiler(closure_1[3]).getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = uIProfiler(closure_1[3]).getRootSpan(activeSpan);
        const obj5 = uIProfiler(closure_1[3]);
      }
      const obj4 = uIProfiler(closure_1[3]);
      let DEBUG_BUILD = uIProfiler(closure_1[1]).hasLegacyProfiling(options) && undefined !== options.profileSessionSampleRate;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = uIProfiler(closure_1[2]).DEBUG_BUILD;
      }
      if (DEBUG_BUILD) {
        const debug2 = uIProfiler(closure_1[3]).debug;
        debug2.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.");
      }
      const obj6 = uIProfiler(closure_1[1]);
      if (obj7.hasLegacyProfiling(options)) {
        let result = rootSpan;
        if (rootSpan) {
          result = uIProfiler(closure_1[1]).isAutomatedPageLoadSpan(rootSpan);
          const obj8 = uIProfiler(closure_1[1]);
        }
        if (result) {
          result = uIProfiler(closure_1[1]).shouldProfileSpanLegacy(rootSpan);
          const obj9 = uIProfiler(closure_1[1]);
        }
        if (result) {
          uIProfiler(closure_1[5]).startProfileForSpan(rootSpan);
          const obj10 = uIProfiler(closure_1[5]);
        }
        getOptions.on("spanStart", (rootSpan) => {
          let result = rootSpan === uIProfiler(closure_1[3]).getRootSpan(rootSpan);
          if (result) {
            result = uIProfiler(closure_1[1]).shouldProfileSpanLegacy(rootSpan);
            const obj2 = uIProfiler(closure_1[1]);
          }
          if (result) {
            uIProfiler(closure_1[5]).startProfileForSpan(rootSpan);
            const obj3 = uIProfiler(closure_1[5]);
          }
        });
        getOptions.on("beforeEnvelope", (arg0) => {
          if (obj.getActiveProfilesCount()) {
            const result = uIProfiler(closure_1[1]).findProfiledTransactionsFromEnvelope(arg0);
            if (result.length) {
              const items = [];
              const iter = result[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp61 = nextResult;
                let contexts;
                if (null != nextResult) {
                  let tmp8 = nextResult;
                  contexts = tmp61.contexts;
                }
                let tmp10 = contexts;
                let profile_id;
                if (null != contexts) {
                  let tmp12 = contexts;
                  let profile = tmp10.profile;
                  if (null != profile) {
                    let tmp14 = profile;
                    profile_id = tmp13.profile_id;
                  }
                }
                let tmp15 = profile_id;
                let tmp16 = contexts;
                if (null != tmp10) {
                  let tmp17 = contexts;
                  let profile2 = tmp10.profile;
                  if (null != profile2) {
                    let tmp19 = profile2;
                    let start_timestamp = tmp18.start_timestamp;
                  }
                }
                let tmp21 = profile_id;
                if ("string" === typeof tmp15) {
                  let tmp27 = profile_id;
                  if (tmp15) {
                    let tmp33 = contexts;
                    let tmp34 = null != tmp10;
                    let profile3 = tmp34;
                    if (tmp34) {
                      let tmp35 = contexts;
                      profile3 = tmp10.profile;
                    }
                    if (profile3) {
                      let tmp36 = contexts;
                      delete r22.profile;
                    }
                    let tmp37 = uIProfiler;
                    let tmp38 = closure_1;
                    let obj3 = uIProfiler(closure_1[1]);
                    let tmp39 = profile_id;
                    let result1 = obj3.takeProfileFromGlobalCache(tmp15);
                    let tmp42 = uIProfiler;
                    let tmp43 = closure_1;
                    if (result1) {
                      let tmp42Result = tmp42(tmp43[1]);
                      let tmp48 = profile_id;
                      let tmp49 = start_timestamp;
                      let tmp50 = result1;
                      let tmp51 = nextResult;
                      let tmp52 = tmp42Result;
                      let profilingEvent = tmp42Result.createProfilingEvent(tmp15, tmp20, tmp41, tmp61);
                      if (profilingEvent) {
                        let tmp55 = items;
                        let tmp56 = profilingEvent;
                        let arr = items.push(tmp54);
                      }
                    } else if (tmp42(tmp43[2]).DEBUG_BUILD) {
                      let tmp44 = uIProfiler;
                      let tmp45 = closure_1;
                      let debug3 = uIProfiler(closure_1[3]).debug;
                      let tmp46 = profile_id;
                      let _HermesInternal = HermesInternal;
                      let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp15);
                    }
                  } else {
                    let tmp28 = uIProfiler;
                    let tmp29 = closure_1;
                    if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
                      let tmp30 = uIProfiler;
                      let tmp31 = closure_1;
                      let debug2 = uIProfiler(closure_1[3]).debug;
                      let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                    }
                  }
                } else {
                  let tmp22 = uIProfiler;
                  let tmp23 = closure_1;
                  if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
                    let tmp24 = uIProfiler;
                    let tmp25 = closure_1;
                    let debug = uIProfiler(closure_1[3]).debug;
                    let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
                  }
                }
                // continue
              }
              const result2 = uIProfiler(closure_1[1]).addProfilesToEnvelope(arg0, items);
              const obj5 = uIProfiler(closure_1[1]);
            }
            const obj2 = uIProfiler(closure_1[1]);
          }
        });
      } else {
        const profileLifecycle = options.profileLifecycle;
        getOptions.on("startUIProfiler", () => uIProfiler.start());
        getOptions.on("stopUIProfiler", () => uIProfiler.stop());
        if ("manual" === profileLifecycle) {
          uIProfiler.initialize(getOptions);
        } else if ("trace" === profileLifecycle) {
          if (obj11.hasSpansEnabled(options)) {
            uIProfiler.initialize(getOptions);
            if (rootSpan) {
              uIProfiler.notifyRootSpanActive(rootSpan);
            }
            const WINDOW = uIProfiler(closure_1[4]).WINDOW;
            const timerId = WINDOW.setTimeout(() => {
              const activeSpan = uIProfiler(closure_1[3]).getActiveSpan();
              let rootSpan = activeSpan;
              if (activeSpan) {
                rootSpan = uIProfiler(closure_1[3]).getRootSpan(activeSpan);
                const obj2 = uIProfiler(closure_1[3]);
              }
              if (rootSpan) {
                uIProfiler.notifyRootSpanActive(rootSpan);
              }
            }, 0);
          } else if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
            const debug3 = uIProfiler(closure_1[3]).debug;
            debug3.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
          }
          const obj11 = uIProfiler(closure_1[3]);
        }
      }
    },
    processEvent(contexts) {
      return callback(closure_1[1]).attachProfiledThreadToEvent(contexts);
    }
  };
});
