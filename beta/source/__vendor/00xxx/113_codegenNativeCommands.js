// Module ID: 113
// Function ID: 114
// Name: codegenNativeCommands
// Dependencies: [114]
// Exports: default

// Module 113 (codegenNativeCommands)

export default function codegenNativeCommands(supportedCommands) {
  let obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((item) => {
    let closure_0 = item;
    obj[item] = (arg0) => {
      const substr = [...arguments].slice();
      obj = closure_2_0(closure_2_1[0]);
      obj.dispatchCommand(arg0, closure_0, substr);
    };
  });
  return obj;
};
