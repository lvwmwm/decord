// Module ID: 194
// Function ID: 195
// Dependencies: [30]

// Module 194
import get from "module_30" /* 30 */;

const enforcing = get.getEnforcing("ExceptionsManager");
let obj = {
  reportFatalException(message, stack, id) {
    closure_0.reportFatalException(message, stack, id);
  },
  reportSoftException(message, stack, id) {
    closure_0.reportSoftException(message, stack, id);
  },
  dismissRedbox() {
    obj = closure_0;
    if (closure_0.dismissRedbox) {
      obj.dismissRedbox();
    }
  },
  reportException(isFatal) {
    if (closure_0.reportException) {
      closure_0.reportException(isFatal);
    } else if (isFatal.isFatal) {
      closure_0.reportFatalException(isFatal.message, isFatal.stack, isFatal.id);
    } else {
      closure_0.reportSoftException(isFatal.message, isFatal.stack, isFatal.id);
    }
  }
};

export default obj;
