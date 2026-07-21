// Module ID: 8295
// Function ID: 65516
// Name: handleOrientationChange
// Dependencies: []
// Exports: getOrientation, getOrientationLock, handleOrientationChange, restoreDefaultOrientation, toggleOrientation, useOrientation, useOrientationListener

// Module 8295 (handleOrientationChange)
function handleOrientationChange(initialOrientation) {
  const obj = arg1(dependencyMap[3]);
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
        arg1(dependencyMap[4]).batchUpdates(() => store.setState({ orientation: constants.LANDSCAPE }));
        const obj2 = arg1(dependencyMap[4]);
      }
    }
    let tmp10 = "PORTRAIT" === closure_7;
    if (!tmp10) {
      let isIpadOSResult = arg1(dependencyMap[5]).isIpadOS();
      if (isIpadOSResult) {
        isIpadOSResult = "PORTRAITUPSIDEDOWN" === closure_7;
      }
      tmp10 = isIpadOSResult;
      const obj3 = arg1(dependencyMap[5]);
    }
    if (tmp10) {
      tmp10 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp10) {
      arg1(dependencyMap[4]).batchUpdates(() => store.setState({ orientation: constants.PORTRAIT }));
      const obj4 = arg1(dependencyMap[4]);
    }
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj.getState().orientationLock;
  if (closure_8) {
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
  let closure_8 = false;
}
function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  const obj = arg1(dependencyMap[3]);
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj.getState().orientationLock) {
        let closure_8 = true;
      }
    }
  } else {
    if (obj2.isIOS()) {
      const obj3 = arg1(dependencyMap[5]);
    }
    const obj2 = arg1(dependencyMap[3]);
  }
  importDefault(dependencyMap[6]).ignoreAutoRotate(false);
  const obj4 = importDefault(dependencyMap[6]);
  const result = importDefault(dependencyMap[6]).unlockAllOrientations();
  const obj5 = importDefault(dependencyMap[6]);
  arg1(dependencyMap[4]).batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
}
function lockOrientation(PORTRAIT, arg1) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = arg1;
  }
  importDefault(dependencyMap[6]).ignoreAutoRotate(tmp);
  let closure_8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    importDefault(dependencyMap[6]).lockToLandscapeLeft();
    const obj4 = importDefault(dependencyMap[6]);
    arg1(dependencyMap[4]).batchUpdates(() => {
      store.setState({ orientationLock: "LANDSCAPE" });
    });
    const obj5 = arg1(dependencyMap[4]);
  } else {
    importDefault(dependencyMap[6]).lockToPortrait();
    const obj2 = importDefault(dependencyMap[6]);
    arg1(dependencyMap[4]).batchUpdates(() => {
      store.setState({ orientationLock: "PORTRAIT" });
    });
    const obj3 = arg1(dependencyMap[4]);
  }
}
function lockOrientationForiOS(PORTRAIT) {
  let isAndroidResult = arg1(dependencyMap[3]).isAndroid();
  if (!isAndroidResult) {
    let isIpadOSResult = arg1(dependencyMap[5]).isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
    const obj2 = arg1(dependencyMap[5]);
  }
  if (!isAndroidResult) {
    lockOrientation(PORTRAIT);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const AppState = arg1(dependencyMap[1]).AppState;
let obj = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = [15182003184217623000000000000000000000000000000000000000000000000000000000000000000, 2125709875315483600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
obj = arg1(dependencyMap[2]).create(() => {
  const obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let closure_7 = null;
let closure_8 = false;
const obj2 = arg1(dependencyMap[2]);
const result = importDefault(dependencyMap[6]).addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
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
const importDefaultResult = importDefault(dependencyMap[6]);
const result1 = importDefault(dependencyMap[6]).addOrientationListener(handleOrientationChange);
const importDefaultResult1 = importDefault(dependencyMap[6]);
const result2 = handleOrientationChange(importDefault(dependencyMap[6]).getInitialOrientation());
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
const importDefaultResult2 = importDefault(dependencyMap[6]);
const result3 = arg1(dependencyMap[7]).fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

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
      importDefault(dependencyMap[6]).lockToPortrait();
      const obj4 = importDefault(dependencyMap[6]);
      const result = importDefault(dependencyMap[6]).unlockAllOrientations();
      const obj5 = importDefault(dependencyMap[6]);
      arg1(dependencyMap[4]).batchUpdates(() => store.setState({ orientation: constants.PORTRAIT }));
      const obj6 = arg1(dependencyMap[4]);
    }
  }
  if (!tmp4) {
    const obj = importDefault(dependencyMap[6]);
    obj.lockToLandscapeLeft();
    const result1 = importDefault(dependencyMap[6]).unlockAllOrientations();
    const obj2 = importDefault(dependencyMap[6]);
    arg1(dependencyMap[4]).batchUpdates(() => store.setState({ orientation: constants.LANDSCAPE }));
    const obj3 = arg1(dependencyMap[4]);
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
  const arg1 = callback2;
  const items = [callback2];
  const effect = React.useEffect(() => closure_6.subscribe(arg0), items);
};
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  const obj = arg1(dependencyMap[3]);
  if (obj.isIOS()) {
    const obj2 = arg1(dependencyMap[5]);
  }
  unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
  lockOrientationForiOS();
};
