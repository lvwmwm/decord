// Module ID: 7304
// Function ID: 58929
// Name: moduleMetadataIntegration
// Dependencies: []

// Module 7304 (moduleMetadataIntegration)
const _module = require(dependencyMap[0]);

export const moduleMetadataIntegration = _module.defineIntegration(() => ({
  name: "ModuleMetadata",
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
  }
}));
