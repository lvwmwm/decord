// Module ID: 4010
// Function ID: 33281
// Name: print
// Dependencies: []

// Module 4010 (print)
let c0 = false;
const BooleanResult = Boolean(false);
function print() {

}
if (BooleanResult) {
  print = function print(arg0) {
    let component;
    let method;
    let params;
    ({ component, method, params } = arg0);
    if (params) {
      if ("object" === typeof params) {
        const _Object = Object;
        const keys = Object.keys(params);
        const mapped = keys.map((arg0) => "" + arg0 + ":" + params[arg0]);
        let joined = mapped.join(" ");
      } else {
        let str3 = "";
        if (null != params) {
          str3 = params;
        }
        const _HermesInternal = HermesInternal;
        joined = "" + str3;
      }
      const _console = console;
      const items = [component, method];
      const _Boolean = Boolean;
      const found = items.filter(Boolean);
      params = found.join("::");
      const _HermesInternal2 = HermesInternal;
      component = HermesInternal.concat;
      method = "[Portal::";
      console.log(component(params, "]"), joined);
    }
  };
}
const frozen = Object.freeze(print);
arg5.print = print;
arg5.enableLogging = function enableLogging() {
  if (closure_1) {
    let c0 = true;
  } else {
    const _console = console;
    console.warn("[Portal] could not enable logging on production!");
  }
};
