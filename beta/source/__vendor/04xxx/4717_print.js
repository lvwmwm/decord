// Module ID: 4717
// Function ID: 4718
// Name: print
// Dependencies: []
// Exports: enableLogging, print

// Module 4717 (print)
let c0 = false;
const BooleanResult = Boolean(false);
const map = BooleanResult;
function print() {

}
if (BooleanResult) {
  print = function print(params) {
    params = params.params;
    const tmp3 = c0;
    if (tmp3) {
      let joined;
      if (typeof params === "object") {
        const _Object = Object;
        const keys = Object.keys(params);
        const mapped = keys.map((item) => "" + item + ":" + params[item]);
        joined = mapped.join(" ");
      } else {
        let str = params;
        if (params == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        joined = "" + str;
      }
      const _console = console;
      const items = [tmp, tmp2];
      const _Boolean = Boolean;
      const found = items.filter(Boolean);
      const _HermesInternal2 = HermesInternal;
      log("[Portal::" + found.join("::") + "]", joined);
    }
  };
}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = () => {
  const tmp = map;
  if (tmp) {
    c0 = true;
  } else {
    const _console = console;
    console.warn("[Portal] could not enable logging on production!");
  }
};
