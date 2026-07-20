// Module ID: 188
// Function ID: 2648
// Name: ExceptionsManager
// Dependencies: []

// Module 188 (ExceptionsManager)
const enforcing = importAll(dependencyMap[0]).getEnforcing("ExceptionsManager");
const obj = {
  reportFatalException(message, stack, id) {
    closure_0.reportFatalException(message, stack, id);
  },
  reportSoftException(message, stack, id) {
    closure_0.reportSoftException(message, stack, id);
  },
  dismissRedbox() {
    if (closure_0.dismissRedbox) {
      closure_0.dismissRedbox();
    }
  },
  reportException(isFatal) {
    if (closure_0.reportException) {
      closure_0.reportException(isFatal);
    } else if (isFatal.isFatal) {
      obj.reportFatalException(isFatal.message, isFatal.stack, isFatal.id);
    } else {
      obj.reportSoftException(isFatal.message, isFatal.stack, isFatal.id);
    }
  }
};

export default obj;
