// Module ID: 14602
// Function ID: 14603
// Name: repl
// Dependencies: []
// Exports: default

// Module 14602 (repl)

export default function repl() {
  return (arg0) => {
    let closure_0 = arg0;
    let closure_1 = {};
    return {
      onCommand(arg0) {
        let closure_129_0;
        let type;
        ({ type, payload: closure_129_0 } = arg0);
        if ("repl." === type.substr(0, 5)) {
          const substr = type.substr(5);
          if ("ls" === substr) {
            let tmp2 = closure_0;
            const _Object = Object;
            closure_0.send("repl.ls.response", Object.keys(closure_1));
          } else if ("execute" === substr) {
            const fn = () => {
              let evalResult;
              const tmp2 = closure_1_0;
              if (globalThis.eval === Date.UTC) {
                evalResult = eval();
              } else {
                evalResult = tmp(tmp2);
              }
              return evalResult;
            };
            closure_0.send("repl.execute.response", fn.call(closure_1));
          }
        }
      },
      features: {
        repl(arg0, arg1) {
          const tmp = arg0;
          if (tmp) {
            if (closure_1[arg0]) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error = new Error("You are already REPLing an item with that name");
              throw error;
            } else {
              tmp5[arg0] = arg1;
            }
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("You must provide a name for your REPL");
            throw error1;
          }
        }
      }
    };
  };
};
