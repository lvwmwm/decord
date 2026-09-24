// Module ID: 8640
// Function ID: 8641
// Name: DeviceOrientation
// Dependencies: [19, 17, 562, 1368, 1252, 4769, 8641, 558, 568, 2]
// Exports: getOrientation, getOrientationLock, handleOrientationChange, lockOrientation, restoreDefaultOrientation, unlockOrientation, useOrientation

// Module 8640 (DeviceOrientation)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator_mod from "module_8641" /* 8641 */;

const require = globalThis.__r;

require = fn;
function handleOrientationChange(initialOrientation) {
  if (obj.isIOS()) {
    handleDeviceOrientationChange(initialOrientation);
  }
  if (global !== initialOrientation) {
    global = initialOrientation;
    const orientationLock = obj3.getState().orientationLock;
    let hasItem = null != orientationLock;
    if (hasItem) {
      hasItem = closure_5.includes(orientationLock);
    }
    if ("LANDSCAPE" === global) {
      if (!hasItem) {
        tmp(1252).batchUpdates(() => obj3.setState({ orientation: constants.LANDSCAPE }));
        const tmpResult = tmp(1252);
      }
    }
    let tmp9 = "PORTRAIT" === global;
    if (!tmp9) {
      let isIpadOSResult = tmp(4769).isIpadOS();
      if (isIpadOSResult) {
        isIpadOSResult = "PORTRAITUPSIDEDOWN" === global;
      }
      tmp9 = isIpadOSResult;
      const tmpResult3 = tmp(4769);
    }
    if (tmp9) {
      tmp9 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp9) {
      tmp(1252).batchUpdates(() => obj3.setState({ orientation: constants.PORTRAIT }));
      const tmpResult4 = tmp(1252);
    }
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj3.getState().orientationLock;
  if (c8) {
    if ("LANDSCAPE" === LANDSCAPE) {
      if ("LANDSCAPE" === orientationLock) {
        const orientationLock3 = obj.getState().orientationLock;
        if (!obj13.isAndroid()) {
          if (tmp14Result.isIOS()) {
            tmp14(4769).getSystemVersionMajor() >= 16;
            const tmp14Result3 = tmp14(4769);
          }
          tmp14Result = tmp14(1368);
        }
        obj13 = PlatformUtils;
        get_ActivityIndicator.ignoreAutoRotate(false);
        const result = get_ActivityIndicator.unlockAllOrientations();
        ReactBatchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp14Result4 = ReactBatchUpdates;
      }
    } else if ("PORTRAIT" === LANDSCAPE) {
      if ("PORTRAIT" === orientationLock) {
        const orientationLock2 = obj.getState().orientationLock;
        if (!obj12.isAndroid()) {
          if (tmp12Result.isIOS()) {
            tmp12(4769).getSystemVersionMajor() >= 16;
            const tmp12Result3 = tmp12(4769);
          }
          tmp12Result = tmp12(1368);
        }
        obj12 = PlatformUtils;
        get_ActivityIndicator.ignoreAutoRotate(false);
        const result1 = get_ActivityIndicator.unlockAllOrientations();
        ReactBatchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp12Result4 = ReactBatchUpdates;
      }
    }
  }
}
function lockOrientationForiOS(PORTRAIT) {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (!isAndroidResult) {
    let isIpadOSResult = tmp(4769).isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
    const tmpResult = tmp(4769);
  }
  if (!isAndroidResult) {
    get_ActivityIndicator.ignoreAutoRotate(false);
    c8 = false;
    if ("LANDSCAPE" === PORTRAIT) {
      tmp6(8641).lockToLandscapeLeft();
      const tmp6Result = tmp6(8641);
      tmp(1252).batchUpdates(() => {
        obj3.setState({ orientationLock: "LANDSCAPE" });
      });
      const tmpResult3 = tmp(1252);
    } else {
      tmp6(8641).lockToPortrait();
      const tmp6Result2 = tmp6(8641);
      tmp(1252).batchUpdates(() => {
        obj3.setState({ orientationLock: "PORTRAIT" });
      });
      const tmpResult4 = tmp(1252);
    }
  }
}
const AppState = fn(17).AppState;
const OrientationType = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
const module_562 = fn(562);
let obj3 = module_562.create(() => {
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let global = null;
let c8 = false;
let get_ActivityIndicator = get_ActivityIndicator_mod;
let result = get_ActivityIndicator.addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
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
let get_ActivityIndicator = get_ActivityIndicator_mod;
let result1 = get_ActivityIndicator.addOrientationListener(handleOrientationChange);
let get_ActivityIndicator = get_ActivityIndicator_mod;
const result2 = handleOrientationChange(get_ActivityIndicator.getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(event) {
  const orientationLock = obj3.getState().orientationLock;
  let tmp = "active" === event;
  if (tmp) {
    tmp = null != orientationLock;
  }
  if (tmp) {
    get_ActivityIndicator.ignoreAutoRotate(true);
    c8 = false;
    if ("LANDSCAPE" === orientationLock) {
      tmp3(8641).lockToLandscapeLeft();
      const tmp3Result = tmp3(8641);
      ReactBatchUpdates.batchUpdates(() => {
        obj3.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp3(8641).lockToPortrait();
      obj3 = ReactBatchUpdates;
      obj3.batchUpdates(() => {
        obj3.setState({ orientationLock: "PORTRAIT" });
      });
      const tmp3Result2 = tmp3(8641);
    }
  }
});
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj3.getState().orientationLock) {
        c8 = true;
      }
    }
  } else {
    if (tmpResult.isIOS()) {
      const tmpResult3 = tmp(4769);
    }
    tmpResult = tmp(1368);
  }
  obj = PlatformUtils;
  get_ActivityIndicator.ignoreAutoRotate(false);
  const result = get_ActivityIndicator.unlockAllOrientations();
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
}
function lockOrientation(PORTRAIT, flag) {
  if (flag == null) {
    flag = false;
  }
  get_ActivityIndicator.ignoreAutoRotate(flag);
  c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    tmp(8641).lockToLandscapeLeft();
    const tmpResult = tmp(8641);
    ReactBatchUpdates.batchUpdates(() => {
      obj3.setState({ orientationLock: "LANDSCAPE" });
    });
  } else {
    tmp(8641).lockToPortrait();
    const tmpResult2 = tmp(8641);
    ReactBatchUpdates.batchUpdates(() => {
      obj3.setState({ orientationLock: "PORTRAIT" });
    });
  }
}
fn = () => obj3().orientation;
const size = fn(2);
const result4 = size.fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export { OrientationType };
export const useStore = obj3;
export { handleOrientationChange };
export { unlockOrientation };
export { lockOrientation };
export { lockOrientationForiOS };
export const getOrientation = function getOrientation() {
  return obj3.getState().orientation;
};
export const getOrientationLock = function getOrientationLock() {
  return obj3.getState().orientationLock;
};
export const useOrientation = fn;
export const useOrientationListener = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return obj3.subscribe(closure_0);
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => obj3.subscribe(closure_0), items);
});
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  if (obj.isIOS()) {
    const tmpResult = tmp(4769);
  }
  const orientationLock = obj3.getState().orientationLock;
  obj = PlatformUtils;
  if (!tmpResult5.isAndroid()) {
    if (tmpResult6.isIOS()) {
      tmp(4769).getSystemVersionMajor() >= 16;
      const tmpResult7 = tmp(4769);
    }
    tmpResult6 = tmp(1368);
  }
  tmpResult5 = PlatformUtils;
  get_ActivityIndicator.ignoreAutoRotate(false);
  const result = get_ActivityIndicator.unlockAllOrientations();
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  lockOrientationForiOS();
};
