// Module ID: 15506
// Function ID: 15507
// Dependencies: [15507]

// Module 15506
import module_15507_mod from "module_15507" /* 15507 */;

const call = prototype.call;
let module_15507 = module_15507_mod;
if (module_15507) {
  const bind = prototype.bind;
  module_15507 = bind.bind(call, call);
}
if (!module_15507) {
  module_15507 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15507;
