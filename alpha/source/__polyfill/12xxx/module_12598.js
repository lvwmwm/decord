// Module ID: 12598
// Function ID: 12599
// Dependencies: [12576, 12564, 12599]

// Module 12598
import _mod12599 from "module_12599" /* 12599 */;
import module_12576 from "module_12576" /* 12576 */;


export const moduleMetadataIntegration = module_12576.defineIntegration(() => {
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
          const obj = _mod12599;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
