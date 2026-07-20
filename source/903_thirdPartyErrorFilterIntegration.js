// Module ID: 903
// Function ID: 9924
// Name: thirdPartyErrorFilterIntegration
// Dependencies: []

// Module 903 (thirdPartyErrorFilterIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);
let closure_2 = "_sentryBundlerPluginAppKey:";
let closure_3 = "Attempt to invoke user-land function";
let closure_4 = "fn.apply(this, wrappedArguments)";

export const thirdPartyErrorFilterIntegration = _module.defineIntegration((arg0) => {
  const require = arg0;
  return {
    name: "ThirdPartyErrorsFilter",
    setup(on) {
      on.on("beforeEnvelope", (arg0) => {
        arg0(closure_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
          if ("event" === arg1) {
            const _Array = Array;
            let tmp2;
            if (Array.isArray(arg0)) {
              tmp2 = arg0[1];
            }
            if (tmp2) {
              const result = callback(closure_1[2]).stripMetadataFromStackFrames(tmp2);
              arg0[1] = tmp2;
              const obj = callback(closure_1[2]);
            }
          }
        });
      });
      on.on("applyFrameMetadata", (type) => {
        if (!type.type) {
          const result = type(closure_1[2]).addMetadataToStackFrames(type.getOptions().stackParser, type);
          const obj = type(closure_1[2]);
        }
      });
    },
    processEvent(tags) {
      const tmp = function getBundleKeysForAllFramesWithFilenames(tags, ignoreSentryInternalFrames) {
        const framesFromEvent = ignoreSentryInternalFrames(closure_1[3]).getFramesFromEvent(tags);
        if (framesFromEvent) {
          const found = framesFromEvent.filter((filename) => {
            let tmp2 = !tmp;
            if (!!filename.filename) {
              let tmp4 = null != filename.lineno || null != filename.colno || null != filename.instruction_addr;
              if (tmp4) {
                let tmp6 = !arg1;
                if (!tmp6) {
                  let flag = false;
                  if (0 === arg1) {
                    flag = false;
                    if (filename.context_line) {
                      flag = false;
                      if (filename.filename) {
                        filename = filename.filename;
                        flag = false;
                        if (filename.includes("sentry")) {
                          const filename2 = filename.filename;
                          flag = false;
                          if (filename2.includes("helpers")) {
                            const context_line = filename.context_line;
                            flag = false;
                            if (context_line.includes(closure_4)) {
                              flag = false;
                              if (filename.pre_context) {
                                let num2 = 0;
                                flag = false;
                                if (0 < filename.pre_context.length) {
                                  while (true) {
                                    let obj = filename.pre_context[num2];
                                    if (null == obj) {
                                      num2 = num2 + 1;
                                      flag = false;
                                      if (num2 >= length) {
                                        break;
                                      }
                                    } else {
                                      let tmp9 = closure_3;
                                      flag = true;
                                      if (obj.includes(closure_3)) {
                                        break;
                                      }
                                    }
                                    break;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  tmp6 = !flag;
                }
                tmp4 = tmp6;
              }
              tmp2 = tmp4;
            }
            return tmp2;
          });
          return found.map((module_metadata) => {
            if (module_metadata.module_metadata) {
              const _Object = Object;
              const keys = Object.keys(module_metadata.module_metadata);
              const found = keys.filter((str) => str.startsWith(closure_2));
              let mapped = found.map((arr) => arr.slice(length.length));
            } else {
              mapped = [];
            }
            return mapped;
          });
        }
        const obj = ignoreSentryInternalFrames(closure_1[3]);
      }(tags, tags.ignoreSentryInternalFrames);
      if (tmp) {
        if ("drop-error-if-contains-third-party-frames" === tags.behaviour) {
          let str2 = "some";
        } else {
          str2 = "every";
        }
        if (tmp[str2]((arr) => !arr.some((arg0) => {
          const filterKeys = filterKeys.filterKeys;
          return filterKeys.includes(arg0);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== tags.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== tags.behaviour) {
              const _Object = Object;
              const obj = { third_party_code: true };
              tags.tags = Object.assign({}, tags.tags, obj);
            }
          }
          return null;
        }
      }
      return tags;
    }
  };
});
