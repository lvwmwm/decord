// Module ID: 1048
// Function ID: 1049
// Dependencies: [1049, 878]
// Exports: primitiveTagIntegration

// Module 1048
import _mod878 from "module_878" /* 878 */;

let tags;

const PrimitiveTagIntegration = "PrimitiveTagIntegration";

export const INTEGRATION_NAME = "PrimitiveTagIntegration";
export const primitiveTagIntegration = () => {
  let obj = {
    name: PrimitiveTagIntegration,
    setup(on) {
      on.on("beforeSendEvent", (tags) => {
        if (tags.tags) {
          const _Object = Object;
          const keys = Object.keys(tags.tags);
          const item = keys.forEach((item) => {
            tags = tags.tags;
            const obj = closure_2_0(closure_2_1[0]);
            tags[item] = obj.PrimitiveToString(tags.tags[item]);
          });
        }
      });
    },
    afterAllSetup() {
      const tmp = require;
      const tmp2 = dependencyMap;
      if (_mod878.NATIVE.enableNative) {
        const NATIVE = tmp(tmp2[1]).NATIVE;
        const result = NATIVE._setPrimitiveProcessor((arg0) => {
          const obj = closure_1_0(closure_1_1[0]);
          return obj.PrimitiveToString(arg0);
        });
      }
    }
  };
  return obj;
};
