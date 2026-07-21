// Module ID: 431
// Function ID: 5984
// Name: showActionSheetWithOptions
// Dependencies: []

// Module 431 (showActionSheetWithOptions)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);

export default {
  showActionSheetWithOptions(destructiveButtonIndex, arg1) {
    let cancelButtonTintColor;
    let disabledButtonTintColor;
    let tintColor;
    let tmp2 = "object" === typeof destructiveButtonIndex;
    if (tmp2) {
      tmp2 = null !== destructiveButtonIndex;
    }
    arg1(dependencyMap[1])(tmp2, "Options must be a valid object");
    arg1(dependencyMap[1])("function" === typeof arg1, "Must provide a valid callback");
    const tmp = arg1(dependencyMap[1]);
    arg1(dependencyMap[1])(importDefault(dependencyMap[2]), "ActionSheetManager doesn't exist");
    destructiveButtonIndex = destructiveButtonIndex.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = destructiveButtonIndex);
    const tmp6 = arg1(dependencyMap[1]);
    let tmp9 = destructiveButtonIndex;
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp9 = null;
      if ("number" === typeof destructiveButtonIndex) {
        const items = [destructiveButtonIndex];
        tmp9 = items;
      }
    }
    let obj = arg1(dependencyMap[3]);
    const defaultResult = obj.default(tintColor);
    const tmp8 = callback(destructiveButtonIndex, closure_3);
    const defaultResult1 = arg1(dependencyMap[3]).default(cancelButtonTintColor);
    const obj2 = arg1(dependencyMap[3]);
    const defaultResult2 = arg1(dependencyMap[3]).default(disabledButtonTintColor);
    let tmp14 = null == defaultResult;
    const obj3 = arg1(dependencyMap[3]);
    if (!tmp14) {
      tmp14 = "number" === typeof defaultResult;
    }
    arg1(dependencyMap[1])(tmp14, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp17 = null == defaultResult1;
    const tmp13 = arg1(dependencyMap[1]);
    if (!tmp17) {
      tmp17 = "number" === typeof defaultResult1;
    }
    arg1(dependencyMap[1])(tmp17, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp20 = null == defaultResult2;
    const tmp16 = arg1(dependencyMap[1]);
    if (!tmp20) {
      tmp20 = "number" === typeof defaultResult2;
    }
    arg1(dependencyMap[1])(tmp20, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const tmp19 = arg1(dependencyMap[1]);
    obj = { tintColor: defaultResult, cancelButtonTintColor: defaultResult1, disabledButtonTintColor: defaultResult2, destructiveButtonIndices: tmp9 };
    const result = importDefault(dependencyMap[2]).showActionSheetWithOptions(Object.assign({}, tmp8, obj), arg1);
  },
  showShareActionSheetWithOptions(tintColor, arg1, arg2) {
    let tmp2 = "object" === typeof tintColor;
    if (tmp2) {
      tmp2 = null !== tintColor;
    }
    arg1(dependencyMap[1])(tmp2, "Options must be a valid object");
    arg1(dependencyMap[1])("function" === typeof arg1, "Must provide a valid failureCallback");
    arg1(dependencyMap[1])("function" === typeof arg2, "Must provide a valid successCallback");
    const tmp = arg1(dependencyMap[1]);
    arg1(dependencyMap[1])(importDefault(dependencyMap[2]), "ActionSheetManager doesn't exist");
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const tmp7 = arg1(dependencyMap[1]);
    obj.tintColor = arg1(dependencyMap[3]).default(tintColor.tintColor);
    const result = obj.showShareActionSheetWithOptions(Object.assign({}, tintColor, obj), arg1, arg2);
  },
  dismissActionSheet() {
    arg1(dependencyMap[1])(importDefault(dependencyMap[2]), "ActionSheetManager doesn't exist");
    if ("function" === typeof importDefault(dependencyMap[2]).dismissActionSheet) {
      importDefault(dependencyMap[2]).dismissActionSheet();
      const obj = importDefault(dependencyMap[2]);
    }
  }
};
