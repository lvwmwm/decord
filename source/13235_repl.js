// Module ID: 13235
// Function ID: 100428
// Name: repl
// Dependencies: []

// Module 13235 (repl)
arg5.default = function repl() {
  return (arg0) => {
    let closure_1 = {};
    let obj = {
      onCommand(arg0) {
        let type;
        ({ type, payload: closure_0 } = arg0);
        if ("repl." === type.substr(0, 5)) {
          const substr = type.substr(5);
          if ("ls" === substr) {
            const _Object = Object;
            arg0.send("repl.ls.response", Object.keys(closure_1));
          } else if ("execute" === substr) {
            const fn = () => {
              // DirectEval (0x5e)
              return closure_0;
            };
            arg0.send("repl.execute.response", fn.call(closure_1));
          }
        }
      },
      features: obj
    };
    obj = {
      repl(arg0, arg1) {
        if (arg0) {
          if (closure_1[arg0]) {
            const _Error2 = Error;
            const error = new Error("You are already REPLing an item with that name");
            throw error;
          } else {
            closure_1[arg0] = arg1;
          }
        } else {
          const _Error = Error;
          const error1 = new Error("You must provide a name for your REPL");
          throw error1;
        }
      }
    };
    return obj;
  };
};
