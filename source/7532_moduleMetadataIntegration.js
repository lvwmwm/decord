// Module ID: 7532
// Function ID: 7533
// Name: moduleMetadataIntegration
// Dependencies: [7510, 7498, 7533]

// Module 7532 (moduleMetadataIntegration)
import setupIntegration from "setupIntegration";


export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    let closure_0 = on;
    on.on("beforeEnvelope", (arg0) => {
      options(table[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp3;
          if (Array.isArray(arg0)) {
            tmp3 = arg0[1];
          }
          if (tmp3) {
            const result = callback(table[2]).stripMetadataFromStackFrames(tmp3);
            arg0[1] = tmp3;
            const obj = callback(table[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = options(outer1_1[2]).addMetadataToStackFrames(options.getOptions().stackParser, type);
        const obj = options(outer1_1[2]);
      }
    });
  }
}));
