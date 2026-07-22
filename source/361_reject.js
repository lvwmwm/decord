// Module ID: 361
// Function ID: 5354
// Name: reject
// Dependencies: []

// Module 361 (reject)
function reject(arg0) {
  const arg1 = arg0;
  const timerId = setTimeout(() => {
    throw arg0;
  }, 0);
}
arg5.default = {
  Events: { go: 42977857, next: -531558144 },
  runAfterInteractions(arg0) {
    const arg1 = arg0;
    const promise = new Promise((arg0) => {
      const immediate = setImmediate((self) => {
        if ("object" === typeof self) {
          if (null !== self) {
            if ("function" === typeof self.gen) {
              self.gen().then(self, callback);
              const genResult = self.gen();
            } else if ("function" === typeof self.run) {
              self.run();
              self();
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + self.name + "\" missing gen or run.");
              callback(typeError);
            }
          }
        }
        if ("function" === typeof self) {
          self();
          self();
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof self);
          callback(typeError1);
        }
      });
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        clearImmediate(closure_1);
      }
    };
  },
  createInteractionHandle() {
    return -1;
  },
  clearInteractionHandle(arg0) {
    arg1(arg6[0])(arg0, "InteractionManager: Must provide a handle to clear.");
  },
  addListener() {
    return {
      remove() {

      }
    };
  },
  setDeadline(arg0) {

  }
};
