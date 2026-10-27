// Module ID: 12459
// Function ID: 12460
// Dependencies: [12437, 12425, 12460]

// Module 12459
import _mod12460 from "module_12460" /* 12460 */;
import module_12437 from "module_12437" /* 12437 */;


export const moduleMetadataIntegration = module_12437.defineIntegration(() => {
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
          const obj = _mod12460;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
