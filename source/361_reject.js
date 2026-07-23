// Module ID: 361
// Function ID: 5354
// Name: reject
// Dependencies: [44]

// Module 361 (reject)
const require = arg1;
const dependencyMap = arg6;
function reject(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}
arg5.default = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const immediate = setImmediate(() => {
        if ("object" === typeof lib) {
          if (null !== lib) {
            if ("function" === typeof lib.gen) {
              lib.gen().then(lib, outer2_2);
              const genResult = lib.gen();
            } else if ("function" === typeof lib.run) {
              lib.run();
              lib();
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + lib.name + "\" missing gen or run.");
              outer2_2(typeError);
            }
          }
        }
        if ("function" === typeof lib) {
          lib();
          lib();
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof lib);
          outer2_2(typeError1);
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
    require(44) /* invariant */(arg0, "InteractionManager: Must provide a handle to clear.");
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
