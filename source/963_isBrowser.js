// Module ID: 963
// Function ID: 10425
// Name: isBrowser
// Dependencies: [981, 793]

// Module 963 (isBrowser)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !arg1(arg6[0]).isNodeEnv();
    if (!tmp4) {
      const _process = arg1(arg6[1]).GLOBAL_OBJ.process;
      let type;
      if (null != _process) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    const obj = arg1(arg6[0]);
  }
  return tmp;
};
