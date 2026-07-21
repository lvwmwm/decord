// Module ID: 13240
// Function ID: 100461
// Name: getDevMenu
// Dependencies: []
// Exports: default

// Module 13240 (getDevMenu)
let closure_0 = require(dependencyMap[0]);
function getDevMenu() {
  function notAvailable(debugRemotely) {
    console.warn("DevMenu." + debugRemotely + "() not available in this environment");
  }
  return {
    reload() {
      notAvailable("reload");
    },
    show() {
      notAvailable("show");
    },
    getConstants() {
      return {};
    },
    debugRemotely() {
      notAvailable("debugRemotely");
    },
    setHotLoadingEnabled() {
      notAvailable("setHotLoadingEnabled");
    },
    setProfilingEnabled() {
      notAvailable("setProfilingEnabled");
    }
  };
}

export default function devTools() {
  return () => ({
    onCommand(type) {
      if ("devtools.open" === type.type) {
        if ("devtools.open" === type.type) {
          callback().show();
          const obj = callback();
        }
        if ("devtools.reload" === type.type) {
          callback().reload();
          const obj2 = callback();
        }
      }
    }
  });
};
