// Module ID: 7321
// Function ID: 59040
// Name: thirdPartyErrorFilterIntegration
// Dependencies: []

// Module 7321 (thirdPartyErrorFilterIntegration)
const _module = require(dependencyMap[0]);
let closure_2 = "_sentryBundlerPluginAppKey:";

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
      const tmp = function getBundleKeysForAllFramesWithFilenames(tags) {
        const framesFromEvent = callback(closure_1[3]).getFramesFromEvent(tags);
        if (framesFromEvent) {
          const found = framesFromEvent.filter((filename) => filename.filename);
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
        const obj = callback(closure_1[3]);
      }(tags);
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
