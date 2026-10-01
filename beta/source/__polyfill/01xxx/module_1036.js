// Module ID: 1036
// Function ID: 1037
// Dependencies: [1037, 866]
// Exports: primitiveTagIntegration

// Module 1036
import _mod866 from "module_866" /* 866 */;

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
      if (_mod866.NATIVE.enableNative) {
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
