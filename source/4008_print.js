// Module ID: 4008
// Function ID: 33269
// Name: print
// Dependencies: []

// Module 4008 (print)
let closure_0 = false;
const BooleanResult = Boolean(false);
function print() {

}
if (BooleanResult) {
  print = function print(arg0) {
    let component;
    let method;
    let params;
    ({ component, method, params } = arg0);
    let closure_0 = params;
    if (closure_0) {
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
  if (BooleanResult) {
    let closure_0 = true;
  } else {
    const _console = console;
    console.warn("[Portal] could not enable logging on production!");
  }
};
