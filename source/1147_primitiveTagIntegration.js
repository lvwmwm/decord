// Module ID: 1147
// Function ID: 13074
// Name: primitiveTagIntegration
// Dependencies: []

// Module 1147 (primitiveTagIntegration)
arg5.INTEGRATION_NAME = "PrimitiveTagIntegration";
arg5.primitiveTagIntegration = function primitiveTagIntegration() {
  return {
    name: "PrimitiveTagIntegration",
    setup(on) {
      on.on("beforeSendEvent", (tags) => {
        if (tags.tags) {
          const _Object = Object;
          const keys = Object.keys(tags.tags);
          const item = keys.forEach((arg0) => {
            arg0.tags[arg0] = arg0(closure_1[0]).PrimitiveToString(arg0.tags[arg0]);
          });
        }
      });
    },
    afterAllSetup() {
      if (callback(closure_1[1]).NATIVE.enableNative) {
        const NATIVE = callback(closure_1[1]).NATIVE;
        const result = NATIVE._setPrimitiveProcessor((arg0) => callback(closure_1[0]).PrimitiveToString(arg0));
      }
    }
  };
};
