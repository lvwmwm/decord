// Module ID: 1147
// Function ID: 13076
// Name: primitiveTagIntegration
// Dependencies: [1148, 977]

// Module 1147 (primitiveTagIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.INTEGRATION_NAME = "PrimitiveTagIntegration";
arg5.primitiveTagIntegration = function primitiveTagIntegration() {
  return {
    name: "PrimitiveTagIntegration",
    setup(on) {
      on.on("beforeSendEvent", (tags) => {
        let closure_0 = tags;
        if (tags.tags) {
          const _Object = Object;
          const keys = Object.keys(tags.tags);
          const item = keys.forEach((arg0) => {
            tags.tags[arg0] = outer3_0(outer3_1[0]).PrimitiveToString(tags.tags[arg0]);
          });
        }
      });
    },
    afterAllSetup() {
      if (outer1_0(outer1_1[1]).NATIVE.enableNative) {
        const NATIVE = outer1_0(outer1_1[1]).NATIVE;
        const result = NATIVE._setPrimitiveProcessor((arg0) => outer2_0(outer2_1[0]).PrimitiveToString(arg0));
      }
    }
  };
};
