// Module ID: 1075
// Function ID: 12352
// Name: browserProfilingIntegration
// Dependencies: [1076, 1077, 1048, 794, 1004, 1078]

// Module 1075 (browserProfilingIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(function _browserProfilingIntegration() {
  return {
    name: "BrowserProfiling",
    setup(getOptions) {
      const options = getOptions.getOptions();
      const uIProfiler = new outer1_0(outer1_1[0]).UIProfiler();
      let obj2 = outer1_0(outer1_1[1]);
      if (!tmp2) {
        options.profileLifecycle = "manual";
      }
      tmp2 = outer1_0(outer1_1[1]).hasLegacyProfiling(options) || options.profileLifecycle;
      if (obj3.hasLegacyProfiling(options)) {
        if (!options.profilesSampleRate) {
          if (outer1_0(outer1_1[2]).DEBUG_BUILD) {
            let debug = outer1_0(outer1_1[3]).debug;
            debug.log("[Profiling] Profiling disabled, no profiling options found.");
          }
        }
      }
      obj3 = outer1_0(outer1_1[1]);
      let activeSpan = outer1_0(outer1_1[3]).getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = outer1_0(outer1_1[3]).getRootSpan(activeSpan);
        let obj5 = outer1_0(outer1_1[3]);
      }
      const obj4 = outer1_0(outer1_1[3]);
      let DEBUG_BUILD = outer1_0(outer1_1[1]).hasLegacyProfiling(options) && undefined !== options.profileSessionSampleRate;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = outer1_0(outer1_1[2]).DEBUG_BUILD;
      }
      if (DEBUG_BUILD) {
        let debug2 = outer1_0(outer1_1[3]).debug;
        debug2.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.");
      }
      const obj6 = outer1_0(outer1_1[1]);
      if (obj7.hasLegacyProfiling(options)) {
        let result = rootSpan;
        if (rootSpan) {
          result = outer1_0(outer1_1[1]).isAutomatedPageLoadSpan(rootSpan);
          const obj8 = outer1_0(outer1_1[1]);
        }
        if (result) {
          result = outer1_0(outer1_1[1]).shouldProfileSpanLegacy(rootSpan);
          const obj9 = outer1_0(outer1_1[1]);
        }
        if (result) {
          outer1_0(outer1_1[5]).startProfileForSpan(rootSpan);
          const obj10 = outer1_0(outer1_1[5]);
        }
        getOptions.on("spanStart", (rootSpan) => {
          let result = rootSpan === outer2_0(outer2_1[3]).getRootSpan(rootSpan);
          if (result) {
            result = outer2_0(outer2_1[1]).shouldProfileSpanLegacy(rootSpan);
            const obj2 = outer2_0(outer2_1[1]);
          }
          if (result) {
            outer2_0(outer2_1[5]).startProfileForSpan(rootSpan);
            const obj3 = outer2_0(outer2_1[5]);
          }
        });
        getOptions.on("beforeEnvelope", (arg0) => {
          if (obj.getActiveProfilesCount()) {
            const result = outer2_0(outer2_1[1]).findProfiledTransactionsFromEnvelope(arg0);
            if (result.length) {
              const items = [];
              const iter = result[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp62 = nextResult;
                let contexts;
                if (null != nextResult) {
                  let tmp9 = nextResult;
                  contexts = tmp62.contexts;
                }
                let tmp11 = contexts;
                let profile_id;
                if (null != contexts) {
                  let tmp13 = contexts;
                  let profile = tmp11.profile;
                  if (null != profile) {
                    let tmp15 = profile;
                    profile_id = tmp14.profile_id;
                  }
                }
                let tmp16 = profile_id;
                let tmp17 = contexts;
                if (null != tmp11) {
                  let tmp18 = contexts;
                  let profile2 = tmp11.profile;
                  if (null != profile2) {
                    let tmp20 = profile2;
                    let start_timestamp = tmp19.start_timestamp;
                  }
                }
                let tmp22 = profile_id;
                if ("string" === typeof tmp16) {
                  let tmp28 = profile_id;
                  if (tmp16) {
                    let tmp34 = contexts;
                    let tmp35 = null != tmp11;
                    let profile3 = tmp35;
                    if (tmp35) {
                      let tmp36 = contexts;
                      profile3 = tmp11.profile;
                    }
                    if (profile3) {
                      let tmp37 = contexts;
                      delete tmp.profile;
                    }
                    let tmp38 = outer2_0;
                    let tmp39 = outer2_1;
                    let obj3 = outer2_0(outer2_1[1]);
                    let tmp40 = profile_id;
                    let result1 = obj3.takeProfileFromGlobalCache(tmp16);
                    let tmp43 = outer2_0;
                    let tmp44 = outer2_1;
                    if (result1) {
                      let tmp43Result = tmp43(tmp44[1]);
                      let tmp49 = profile_id;
                      let tmp50 = start_timestamp;
                      let tmp51 = result1;
                      let tmp52 = nextResult;
                      let tmp53 = tmp43Result;
                      let profilingEvent = tmp43Result.createProfilingEvent(tmp16, tmp21, tmp42, tmp62);
                      if (profilingEvent) {
                        let tmp56 = items;
                        let tmp57 = profilingEvent;
                        let arr = items.push(tmp55);
                      }
                    } else if (tmp43(tmp44[2]).DEBUG_BUILD) {
                      let tmp45 = outer2_0;
                      let tmp46 = outer2_1;
                      let debug3 = outer2_0(outer2_1[3]).debug;
                      let tmp47 = profile_id;
                      let _HermesInternal = HermesInternal;
                      let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp16);
                    }
                  } else {
                    let tmp29 = outer2_0;
                    let tmp30 = outer2_1;
                    if (outer2_0(outer2_1[2]).DEBUG_BUILD) {
                      let tmp31 = outer2_0;
                      let tmp32 = outer2_1;
                      let debug2 = outer2_0(outer2_1[3]).debug;
                      let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                    }
                  }
                } else {
                  let tmp23 = outer2_0;
                  let tmp24 = outer2_1;
                  if (outer2_0(outer2_1[2]).DEBUG_BUILD) {
                    let tmp25 = outer2_0;
                    let tmp26 = outer2_1;
                    let debug = outer2_0(outer2_1[3]).debug;
                    let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
                  }
                }
                continue;
              }
              const result2 = outer2_0(outer2_1[1]).addProfilesToEnvelope(arg0, items);
              const obj5 = outer2_0(outer2_1[1]);
            }
            const obj2 = outer2_0(outer2_1[1]);
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
            const WINDOW = outer1_0(outer1_1[4]).WINDOW;
            const timerId = WINDOW.setTimeout(() => {
              const activeSpan = outer2_0(outer2_1[3]).getActiveSpan();
              let rootSpan = activeSpan;
              if (activeSpan) {
                rootSpan = outer2_0(outer2_1[3]).getRootSpan(activeSpan);
                const obj2 = outer2_0(outer2_1[3]);
              }
              if (rootSpan) {
                uIProfiler.notifyRootSpanActive(rootSpan);
              }
            }, 0);
          } else if (outer1_0(outer1_1[2]).DEBUG_BUILD) {
            let debug3 = outer1_0(outer1_1[3]).debug;
            debug3.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
          }
          obj11 = outer1_0(outer1_1[3]);
        }
      }
    },
    processEvent(contexts) {
      return outer1_0(outer1_1[1]).attachProfiledThreadToEvent(contexts);
    }
  };
});
