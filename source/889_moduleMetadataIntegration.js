// Module ID: 889
// Function ID: 9817
// Name: moduleMetadataIntegration
// Dependencies: [863, 840, 890]

// Module 889 (moduleMetadataIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    let closure_0 = on;
    on.on("beforeEnvelope", (arg0) => {
      outer2_0(outer2_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp2;
          if (Array.isArray(arg0)) {
            tmp2 = arg0[1];
          }
          if (tmp2) {
            const result = outer3_0(outer3_1[2]).stripMetadataFromStackFrames(tmp2);
            arg0[1] = tmp2;
            const obj = outer3_0(outer3_1[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = outer2_0(outer2_1[2]).addMetadataToStackFrames(options.getOptions().stackParser, type);
        const obj = outer2_0(outer2_1[2]);
      }
    });
  }
}));
