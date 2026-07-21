// Module ID: 4170
// Function ID: 35370
// Name: convertToTransitionState
// Dependencies: []
// Exports: calculateProgressPercentage, convertComboId, getCombinedProgress, getComboId, isUserEntitledToLibraryApplication, shouldShareApplicationActivity, shouldShowGameInLibrary

// Module 4170 (convertToTransitionState)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ LibraryApplicationFlags: closure_5, LocalDispatchApplicationStates: closure_6, StatusTypes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/LibraryApplicationUtils.tsx");

export const getComboId = function getComboId(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
};
export const convertComboId = function convertComboId(str) {
  const tmp = callback(str.split(":"), 2);
  return { applicationId: tmp[0], branchId: tmp[1] };
};
export const shouldShareApplicationActivity = function shouldShareApplicationActivity(applicationId, closure_12) {
  const ShowCurrentGame = closure_12(dependencyMap[4]).ShowCurrentGame;
  if (ShowCurrentGame.getSetting()) {
    const StatusSetting = closure_12(dependencyMap[4]).StatusSetting;
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
    const tmp = callback(type);
    let tmp2 = total;
    if (null != tmp) {
      tmp2 = total;
      if (type.type !== constants.UP_TO_DATE) {
        const obj = {};
        const _Number = Number;
        obj.total = total.total + Number(tmp.total);
        const _Number2 = Number;
        obj.progress = total.progress + Number(tmp.progress);
        tmp2 = obj;
      }
    }
    return tmp2;
  }, { "Null": -536870861, "Null": -299892737 });
};
export const isUserEntitledToLibraryApplication = function isUserEntitledToLibraryApplication(libraryApplication) {
  const tmp = !libraryApplication.isDiscordApplication();
  let isEntitledResult = !tmp;
  if (!tmp) {
    isEntitledResult = libraryApplication.isEntitled(currentUser.getCurrentUser(), closure_4);
  }
  return isEntitledResult;
};
