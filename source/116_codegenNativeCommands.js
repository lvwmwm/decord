// Module ID: 116
// Function ID: 1621
// Name: codegenNativeCommands
// Dependencies: []

// Module 116 (codegenNativeCommands)
arg5.default = function codegenNativeCommands(supportedCommands) {
  const obj = {};
  const arg1 = obj;
  supportedCommands = supportedCommands.supportedCommands;
  const item = supportedCommands.forEach((arg0) => {
    arg0[arg0] = (nodeFromPublicInstance) => {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      nodeFromPublicInstance(closure_1[0]).dispatchCommand(nodeFromPublicInstance, nodeFromPublicInstance, array);
    };
  });
  return obj;
};
