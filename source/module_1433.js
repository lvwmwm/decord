// Module ID: 1433
// Function ID: 16740
// Dependencies: []

// Module 1433
arg5.default = {
  reachabilityHeaders: {},
  reachabilityTest(status) {
    return Promise.resolve(204 === status.status);
  },
  reachabilityShouldRun() {
    return true;
  }
};
