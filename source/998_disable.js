// Module ID: 998
// Function ID: 10714
// Name: disable
// Dependencies: [995]

// Module 998 (disable)
const require = arg1;
let dependencyMap = arg6;
function disable() {
  let c3 = false;
  require(995) /* noop */._37 = null;
  require(995) /* noop */._87 = null;
}
function matchWhitelist(arg0, arr) {
  let closure_0 = arg0;
  return arr.some((arg0) => closure_0 instanceof arg0);
}
const items = [ReferenceError, TypeError, RangeError];
let c3 = false;
arg5.disable = disable;
arg5.enable = function enable(arg0) {
  let obj = arg0;
  obj = arg0;
  function onUnhandled(arg0) {
    let allRejections = obj.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      if (!whitelist) {
        whitelist = c2;
      }
      allRejections = outer1_5(dependencyMap[arg0].error, whitelist);
      const tmp = outer1_5;
    }
    if (allRejections) {
      let closure_2 = tmp6 + 1;
      dependencyMap[arg0].displayId = +closure_2;
      dependencyMap[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(dependencyMap[arg0].displayId, dependencyMap[arg0].error);
      } else {
        (function logError(displayId, error) {
          console.warn(`Possible Unhandled Promise Rejection (id: ${displayId}):`);
          let tmp2 = error;
          if (error) {
            tmp2 = error.stack || error;
            const tmp3 = error.stack || error;
          }
          const parts = `${tmp2}`.split("\n");
          const item = parts.forEach((arg0) => {
            console.warn(`  ${arg0}`);
          });
        })(dependencyMap[arg0].displayId, dependencyMap[arg0].error);
      }
    }
  }
  if (!arg0) {
    obj = {};
  }
  if (closure_3) {
    onUnhandled();
  }
  closure_3 = true;
  const dependencyMap = 0;
  let c2 = 0;
  closure_3 = {};
  obj(995)._37 = (_65) => {
    let _51 = _65;
    let tmp3 = 2 === _65._65;
    if (tmp3) {
      tmp3 = dependencyMap[_51._51];
    }
    if (tmp3) {
      if (dependencyMap[_51._51].logged) {
        const _512 = _51._51;
        if (dependencyMap[_512].logged) {
          if (obj.onHandled) {
            obj.onHandled(dependencyMap[_512].displayId, dependencyMap[_512].error);
          } else if (!dependencyMap[_512].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${closure_3[_512].displayId}):`);
            const _console2 = console;
            console.warn(`  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${closure_3[_512].displayId}.`);
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(dependencyMap[_51._51].timeout);
      }
      _51 = _51._51;
      delete tmp2[tmp];
    }
  };
  obj(995)._87 = (_40, error) => {
    if (0 === _40._40) {
      let closure_1 = tmp2 + 1;
      _40._51 = +closure_1;
      const obj = { displayId: null, error };
      let num = 2000;
      if (outer1_5(error, c2)) {
        num = 100;
      }
      obj.timeout = setTimeout(onUnhandled.bind(null, _40._51), num);
      obj.logged = false;
      closure_3[_40._51] = obj;
      const bindResult = onUnhandled.bind(null, _40._51);
      const tmp3 = closure_3;
    }
  };
};
