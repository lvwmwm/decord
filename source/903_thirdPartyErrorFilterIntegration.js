// Module ID: 903
// Function ID: 9930
// Name: thirdPartyErrorFilterIntegration
// Dependencies: [863, 840, 890, 810]

// Module 903 (thirdPartyErrorFilterIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "_sentryBundlerPluginAppKey:";
let c3 = "Attempt to invoke user-land function";
let c4 = "fn.apply(this, wrappedArguments)";

export const thirdPartyErrorFilterIntegration = setupIntegration.defineIntegration((arg0) => {
  let closure_0 = arg0;
  return {
    name: "ThirdPartyErrorsFilter",
    setup(on) {
      let closure_0 = on;
      on.on("beforeEnvelope", (arg0) => {
        options(outer2_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
          if ("event" === arg1) {
            const _Array = Array;
            let tmp2;
            if (Array.isArray(arg0)) {
              tmp2 = arg0[1];
            }
            if (tmp2) {
              const result = callback(outer3_1[2]).stripMetadataFromStackFrames(tmp2);
              arg0[1] = tmp2;
              const obj = callback(outer3_1[2]);
            }
          }
        });
      });
      on.on("applyFrameMetadata", (type) => {
        if (!type.type) {
          const result = options(outer2_1[2]).addMetadataToStackFrames(options.getOptions().stackParser, type);
          const obj = options(outer2_1[2]);
        }
      });
    },
    processEvent(tags) {
      const tmp = (function getBundleKeysForAllFramesWithFilenames(tags, ignoreSentryInternalFrames) {
        const callback = ignoreSentryInternalFrames;
        const framesFromEvent = callback(outer2_1[3]).getFramesFromEvent(tags);
        if (framesFromEvent) {
          let found = framesFromEvent.filter((filename) => {
            let tmp2 = !tmp;
            if (!!filename.filename) {
              let tmp4 = null != filename.lineno || null != filename.colno || null != filename.instruction_addr;
              if (tmp4) {
                let tmp6 = !closure_0;
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
                            if (context_line.includes(outer3_4)) {
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
                                      let tmp9 = outer3_3;
                                      flag = true;
                                      if (obj.includes(outer3_3)) {
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
              const found = keys.filter((str) => str.startsWith(outer4_2));
              let mapped = found.map((arr) => arr.slice(outer4_2.length));
            } else {
              mapped = [];
            }
            return mapped;
          });
        }
        let obj = callback(outer2_1[3]);
      })(tags, closure_0.ignoreSentryInternalFrames);
      if (tmp) {
        if ("drop-error-if-contains-third-party-frames" === closure_0.behaviour) {
          let str2 = "some";
        } else {
          str2 = "every";
        }
        if (tmp[str2]((arr) => !arr.some((arg0) => {
          const filterKeys = outer2_0.filterKeys;
          return filterKeys.includes(arg0);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== closure_0.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== closure_0.behaviour) {
              let _Object = Object;
              let obj = { third_party_code: true };
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
