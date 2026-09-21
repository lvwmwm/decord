// Module ID: 782
// Function ID: 783
// Name: moduleMetadataIntegration
// Dependencies: [756, 733, 783]

// Module 782 (moduleMetadataIntegration)
import _mod783 from "module_783" /* 783 */;
import setupIntegration from "setupIntegration" /* 756 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    options = on;
    on.on("beforeEnvelope", (arg0) => {
      options(closure_1_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp3;
          if (Array.isArray(arg0)) {
            tmp3 = arg0[1];
          }
          if (tmp3) {
            const result = options(dependencyMap[2]).stripMetadataFromStackFrames(tmp3);
            arg0[1] = tmp3;
            const obj = options(dependencyMap[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = _mod783.addMetadataToStackFrames(options.getOptions().stackParser, type);
      }
    });
  }
}));
