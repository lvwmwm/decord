// Module ID: 778
// Function ID: 779
// Name: moduleMetadataIntegration
// Dependencies: [752, 729, 779]

// Module 778 (moduleMetadataIntegration)
import _mod779 from "module_779" /* 779 */;
import module_752 from "module_752" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const moduleMetadataIntegration = module_752.defineIntegration(() => {
  let obj = {
    name: "ModuleMetadata",
    setup(on) {
      const options = on;
      on.on("beforeEnvelope", (arg0) => {
        let obj = options(closure_1_1[1]);
        obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
          if ("event" === arg1) {
            const _Array = Array;
            let tmp3;
            if (Array.isArray(arg0)) {
              tmp3 = arg0[1];
            }
            if (tmp3) {
              const obj = options(closure_1_1[2]);
              const result = obj.stripMetadataFromStackFrames(tmp3);
              arg0[1] = tmp3;
            }
          }
        });
      });
      on.on("applyFrameMetadata", (type) => {
        if (!type.type) {
          const stackParser = options.getOptions().stackParser;
          const obj = _mod779;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
