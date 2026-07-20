// Module ID: 7339
// Function ID: 59209
// Name: isBrowser
// Dependencies: [5, 7102]

// Module 7339 (isBrowser)
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !arg1(arg6[0]).isNodeEnv();
    if (!tmp4) {
      const _process = arg1(arg6[1]).GLOBAL_OBJ.process;
      let tmp8 = !tmp7;
      if (!!_process) {
        tmp8 = "renderer" === _process.type;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
    const obj = arg1(arg6[0]);
  }
  return tmp;
};
