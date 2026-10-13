// Module ID: 12084
// Function ID: 12085
// Dependencies: [12062, 12050, 12085]

// Module 12084
import _mod12085 from "module_12085" /* 12085 */;
import module_12062 from "module_12062" /* 12062 */;


export const moduleMetadataIntegration = module_12062.defineIntegration(() => {
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
          const obj = _mod12085;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
