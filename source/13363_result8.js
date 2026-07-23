// Module ID: 13363
// Function ID: 102672
// Name: result8
// Dependencies: [27]
// Exports: default

// Module 13363 (result8)
import get_ActivityIndicator from "get ActivityIndicator";

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
          outer2_1().show();
          const obj = outer2_1();
        }
        if ("devtools.reload" === type.type) {
          outer2_1().reload();
          const obj2 = outer2_1();
        }
      }
    }
  });
};
