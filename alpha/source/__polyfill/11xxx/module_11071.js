// Module ID: 11071
// Function ID: 11072
// Dependencies: [11049, 11037, 11072]

// Module 11071
import _mod11072 from "module_11072" /* 11072 */;
import module_11049 from "module_11049" /* 11049 */;


export const moduleMetadataIntegration = module_11049.defineIntegration(() => {
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
          const obj = _mod11072;
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    }
  };
  return obj;
});
