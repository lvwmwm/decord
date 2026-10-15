// Module ID: 12353
// Function ID: 12354
// Dependencies: [12331, 12319, 12354]

// Module 12353
import _mod12354 from "module_12354" /* 12354 */;
import module_12331 from "module_12331" /* 12331 */;


export const moduleMetadataIntegration = module_12331.defineIntegration(() => {
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
          const obj = _mod12354;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
