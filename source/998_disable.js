// Module ID: 998
// Function ID: 10709
// Name: disable
// Dependencies: []

// Module 998 (disable)
function disable() {
  let closure_3 = false;
  arg1(arg6[0])._37 = null;
  arg1(arg6[0])._87 = null;
}
function matchWhitelist(arg0, arr) {
  arr = arg0;
  return arr.some((arg0) => arg0 instanceof arg0);
}
const items = [ReferenceError, TypeError, RangeError];
let closure_3 = false;
arg5.disable = disable;
arg5.enable = function enable(arg0) {
  let obj = arg0;
  let arg1 = arg0;
  function onUnhandled(arg0) {
    let allRejections = obj.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      if (!whitelist) {
        whitelist = closure_2;
      }
      allRejections = closure_5(closure_3[arg0].error, whitelist);
      const tmp = closure_5;
    }
    if (allRejections) {
      closure_2 = tmp6 + 1;
      closure_3[arg0].displayId = +closure_2;
      closure_3[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(closure_3[arg0].displayId, closure_3[arg0].error);
      } else {
        function logError(displayId, error) {
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
        }(closure_3[arg0].displayId, closure_3[arg0].error);
      }
    }
  }
  if (!arg0) {
    obj = {};
  }
  arg1 = obj;
  if (closure_3) {
    onUnhandled();
  }
  closure_3 = true;
  let closure_1 = 0;
  let closure_2 = 0;
  closure_3 = {};
  arg1(closure_1[0])._37 = (_65) => {
    let _51 = _65;
    let tmp = 2 === _65._65;
    if (tmp) {
      tmp = closure_3[_51._51];
    }
    if (tmp) {
      if (closure_3[_51._51].logged) {
        const _512 = _51._51;
        if (closure_3[_512].logged) {
          if (obj.onHandled) {
            obj.onHandled(closure_3[_512].displayId, closure_3[_512].error);
          } else if (!closure_3[_512].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${closure_3[_512].displayId}):`);
            const _console2 = console;
            console.warn(`  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${closure_3[_512].displayId}.`);
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3[_51._51].timeout);
      }
      _51 = _51._51;
      delete r1[r0];
    }
  };
  arg1(closure_1[0])._87 = (_40, error) => {
    if (0 === _40._40) {
      let closure_1 = tmp2 + 1;
      _40._51 = +closure_1;
      const obj = { displayId: null, error };
      let num = 2000;
      if (callback(error, closure_2)) {
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
