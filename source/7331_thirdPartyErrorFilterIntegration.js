// Module ID: 7331
// Function ID: 59108
// Name: thirdPartyErrorFilterIntegration
// Dependencies: [7292, 7280, 7315, 7239]

// Module 7331 (thirdPartyErrorFilterIntegration)
import setupIntegration from "setupIntegration";

let c2 = "_sentryBundlerPluginAppKey:";

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
      const tmp = (function getBundleKeysForAllFramesWithFilenames(tags) {
        const framesFromEvent = callback(outer2_1[3]).getFramesFromEvent(tags);
        if (framesFromEvent) {
          let found = framesFromEvent.filter((filename) => filename.filename);
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
        const obj = callback(outer2_1[3]);
      })(tags);
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
