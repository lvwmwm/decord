// Module ID: 4174
// Function ID: 35412
// Name: convertToTransitionState
// Dependencies: [57, 1849, 4175, 653, 3803, 2]
// Exports: calculateProgressPercentage, convertComboId, getCombinedProgress, getComboId, isUserEntitledToLibraryApplication, shouldShareApplicationActivity, shouldShowGameInLibrary

// Module 4174 (convertToTransitionState)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function convertToTransitionState(type) {
  let tmp = null;
  if (null != type) {
    if (type.type !== constants2.INSTALLING) {
      if (type.type !== constants2.UPDATING) {
        let tmp5 = null;
      }
      tmp = tmp5;
    }
    tmp5 = type;
  }
  return tmp;
}
({ LibraryApplicationFlags: closure_5, LocalDispatchApplicationStates: closure_6, StatusTypes: closure_7 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/LibraryApplicationUtils.tsx");

export const getComboId = function getComboId(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
};
export const convertComboId = function convertComboId(str) {
  const tmp = callback(str.split(":"), 2);
  return { applicationId: tmp[0], branchId: tmp[1] };
};
export const shouldShareApplicationActivity = function shouldShareApplicationActivity(applicationId, closure_12) {
  const ShowCurrentGame = require(3803) /* explicitContentFromProto */.ShowCurrentGame;
  if (ShowCurrentGame.getSetting()) {
    const StatusSetting = require(3803) /* explicitContentFromProto */.StatusSetting;
    if (StatusSetting.getSetting() !== constants3.INVISIBLE) {
      const activeLibraryApplication = closure_12.getActiveLibraryApplication(applicationId);
      let tmp6 = null == activeLibraryApplication;
      if (!tmp6) {
        tmp6 = !activeLibraryApplication.hasFlag(constants.PRIVATE);
      }
      return tmp6;
    }
  }
  return false;
};
export const calculateProgressPercentage = function calculateProgressPercentage(arg0, arg1) {
  let num = 100;
  if (0 !== arg1) {
    num = arg0 / arg1 * 100;
  }
  return num;
};
export const shouldShowGameInLibrary = function shouldShowGameInLibrary(arg0, hasFlag, enabled) {
  let tmp = null != hasFlag;
  if (tmp) {
    let tmp3 = !enabled.enabled;
    if (!tmp3) {
      tmp3 = !hasFlag.hasFlag(constants.PRIVATE);
    }
    if (tmp3) {
      tmp3 = !hasFlag.isHidden();
    }
    tmp = tmp3;
  }
  return tmp;
};
export { convertToTransitionState };
export const getCombinedProgress = function getCombinedProgress(arr) {
  return arr.reduce((total, type) => {
    const tmp = outer1_8(type);
    let tmp2 = total;
    if (null != tmp) {
      tmp2 = total;
      if (type.type !== outer1_6.UP_TO_DATE) {
        const obj = {};
        const _Number = Number;
        obj.total = total.total + Number(tmp.total);
        const _Number2 = Number;
        obj.progress = total.progress + Number(tmp.progress);
        tmp2 = obj;
      }
    }
    return tmp2;
  }, { total: 0, progress: 0 });
};
export const isUserEntitledToLibraryApplication = function isUserEntitledToLibraryApplication(libraryApplication) {
  const tmp = !libraryApplication.isDiscordApplication();
  let isEntitledResult = !tmp;
  if (!tmp) {
    isEntitledResult = libraryApplication.isEntitled(currentUser.getCurrentUser(), closure_4);
  }
  return isEntitledResult;
};
