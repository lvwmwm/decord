// Module ID: 116
// Function ID: 1621
// Name: codegenNativeCommands
// Dependencies: [117]

// Module 116 (codegenNativeCommands)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function codegenNativeCommands(supportedCommands) {
  let obj = {};
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((arg0) => {
    let closure_0 = arg0;
    closure_0[arg0] = (nodeFromPublicInstance) => {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      obj = obj(outer2_1[0]);
      obj.dispatchCommand(nodeFromPublicInstance, closure_0, array);
    };
  });
  return obj;
};
