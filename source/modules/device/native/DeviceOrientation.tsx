// Module ID: 8347
// Function ID: 65806
// Name: handleOrientationChange
// Dependencies: [31, 27, 621, 477, 682, 4110, 8348, 2]
// Exports: getOrientation, getOrientationLock, handleOrientationChange, restoreDefaultOrientation, toggleOrientation, useOrientation, useOrientationListener

// Module 8347 (handleOrientationChange)
import result from "result";
import { AppState } from "get ActivityIndicator";
import keys from "keys";
import importDefaultResult from "getKey";
import importDefaultResult1 from "getKey";
import importDefaultResult2 from "getKey";

const require = arg1;
function handleOrientationChange(initialOrientation) {
  const obj = require(477) /* set */;
  if (obj.isIOS()) {
    handleDeviceOrientationChange(initialOrientation);
  }
  if (closure_7 !== initialOrientation) {
    closure_7 = initialOrientation;
    const orientationLock = obj.getState().orientationLock;
    let hasItem = null != orientationLock;
    if (hasItem) {
      hasItem = closure_5.includes(orientationLock);
    }
    if ("LANDSCAPE" === closure_7) {
      if (!hasItem) {
        require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ orientation: outer1_4.LANDSCAPE }));
        const obj2 = require(682) /* batchUpdates */;
      }
    }
    let tmp10 = "PORTRAIT" === closure_7;
    if (!tmp10) {
      let isIpadOSResult = require(4110) /* getSystemVersion */.isIpadOS();
      if (isIpadOSResult) {
        isIpadOSResult = "PORTRAITUPSIDEDOWN" === closure_7;
      }
      tmp10 = isIpadOSResult;
      const obj3 = require(4110) /* getSystemVersion */;
    }
    if (tmp10) {
      tmp10 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp10) {
      require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ orientation: outer1_4.PORTRAIT }));
      const obj4 = require(682) /* batchUpdates */;
    }
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj.getState().orientationLock;
  if (c8) {
    if ("LANDSCAPE" === LANDSCAPE) {
      if ("LANDSCAPE" === orientationLock) {
        consumeUnlockAfterRotationToLockRequest();
      }
    } else if ("PORTRAIT" === LANDSCAPE) {
      if ("PORTRAIT" === orientationLock) {
        consumeUnlockAfterRotationToLockRequest();
      }
    }
  }
}
function consumeUnlockAfterRotationToLockRequest() {
  unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
  let c8 = false;
}
function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  const obj = require(477) /* set */;
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj.getState().orientationLock) {
        let c8 = true;
      }
    }
  } else {
    if (obj2.isIOS()) {
      const obj3 = require(4110) /* getSystemVersion */;
    }
    obj2 = require(477) /* set */;
  }
  importDefault(8348).ignoreAutoRotate(false);
  const obj4 = importDefault(8348);
  const result = importDefault(8348).unlockAllOrientations();
  const obj5 = importDefault(8348);
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_6.setState({ orientationLock: null });
  });
}
function lockOrientation(PORTRAIT, arg1) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = arg1;
  }
  importDefault(8348).ignoreAutoRotate(tmp);
  let c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    importDefault(8348).lockToLandscapeLeft();
    const obj4 = importDefault(8348);
    require(682) /* batchUpdates */.batchUpdates(() => {
      outer1_6.setState({ orientationLock: "LANDSCAPE" });
    });
    const obj5 = require(682) /* batchUpdates */;
  } else {
    importDefault(8348).lockToPortrait();
    const obj2 = importDefault(8348);
    require(682) /* batchUpdates */.batchUpdates(() => {
      outer1_6.setState({ orientationLock: "PORTRAIT" });
    });
    const obj3 = require(682) /* batchUpdates */;
  }
}
function lockOrientationForiOS(PORTRAIT) {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (!isAndroidResult) {
    let isIpadOSResult = require(4110) /* getSystemVersion */.isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
    const obj2 = require(4110) /* getSystemVersion */;
  }
  if (!isAndroidResult) {
    lockOrientation(PORTRAIT);
  }
}
let obj = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
obj = keys.create(() => {
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let c7 = null;
let c8 = false;
let result = require("getKey").addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
  let tmp = arg0 >= 0;
  if (tmp) {
    tmp = arg0 <= 5;
  }
  if (!tmp) {
    tmp = arg0 >= 355;
  }
  let str = "PORTRAIT";
  if (tmp !== true) {
    let tmp2 = arg0 >= 85;
    if (tmp2) {
      tmp2 = arg0 <= 95;
    }
    str = "LANDSCAPE-RIGHT";
    if (tmp2 !== true) {
      let tmp3 = arg0 >= 175;
      if (tmp3) {
        tmp3 = arg0 <= 185;
      }
      str = "PORTRAITUPSIDEDOWN";
      if (tmp3 !== true) {
        let tmp4 = arg0 >= 265;
        if (tmp4) {
          tmp4 = arg0 <= 275;
        }
        str = "LANDSCAPE-LEFT";
        if (tmp4 !== true) {
          str = "UNKNOWN";
        }
      }
    }
  }
  if ("LANDSCAPE-LEFT" !== str) {
    if ("LANDSCAPE-RIGHT" !== str) {
      if ("PORTRAIT" === str) {
        handleDeviceOrientationChange("PORTRAIT");
      }
    }
  }
  handleDeviceOrientationChange("LANDSCAPE");
});
let result1 = require("getKey").addOrientationListener(handleOrientationChange);
const result2 = handleOrientationChange(require("getKey").getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(arg0) {
  const orientationLock = obj.getState().orientationLock;
  let tmp = "active" === arg0;
  if (tmp) {
    tmp = null != orientationLock;
  }
  if (tmp) {
    lockOrientation(orientationLock, true);
  }
});
const result3 = require("keys").fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export const OrientationType = obj;
export const useStore = obj;
export { handleOrientationChange };
export { unlockOrientation };
export { lockOrientation };
export { lockOrientationForiOS };
export const toggleOrientation = function toggleOrientation() {
  let orientation;
  let orientationLock;
  const state = obj.getState();
  ({ orientation, orientationLock } = state);
  let hasItem = null != orientationLock;
  if (hasItem) {
    hasItem = closure_5.includes(orientationLock);
  }
  if (orientation === obj.LANDSCAPE) {
    if ("LANDSCAPE" !== orientationLock) {
      importDefault(8348).lockToPortrait();
      const obj4 = importDefault(8348);
      const result = importDefault(8348).unlockAllOrientations();
      const obj5 = importDefault(8348);
      require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ orientation: outer1_4.PORTRAIT }));
      const obj6 = require(682) /* batchUpdates */;
    }
  }
  if (!tmp4) {
    obj = importDefault(8348);
    obj.lockToLandscapeLeft();
    const result1 = importDefault(8348).unlockAllOrientations();
    const obj2 = importDefault(8348);
    require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ orientation: outer1_4.LANDSCAPE }));
    const obj3 = require(682) /* batchUpdates */;
  }
};
export const getOrientation = function getOrientation() {
  return obj.getState().orientation;
};
export const getOrientationLock = function getOrientationLock() {
  return obj.getState().orientationLock;
};
export const useOrientation = function useOrientation() {
  return obj().orientation;
};
export const useOrientationListener = function useOrientationListener(callback2) {
  let closure_0 = callback2;
  const items = [callback2];
  const effect = React.useEffect(() => outer1_6.subscribe(closure_0), items);
};
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  const obj = require(477) /* set */;
  if (obj.isIOS()) {
    const obj2 = require(4110) /* getSystemVersion */;
  }
  unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
  lockOrientationForiOS();
};
