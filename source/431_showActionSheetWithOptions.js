// Module ID: 431
// Function ID: 5984
// Name: showActionSheetWithOptions
// Dependencies: [29, 44, 432, 38]

// Module 431 (showActionSheetWithOptions)
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(destructiveButtonIndex, arg1) {
    let cancelButtonTintColor;
    let disabledButtonTintColor;
    let tintColor;
    let tmp2 = "object" === typeof destructiveButtonIndex;
    if (tmp2) {
      tmp2 = null !== destructiveButtonIndex;
    }
    require(44) /* invariant */(tmp2, "Options must be a valid object");
    require(44) /* invariant */("function" === typeof arg1, "Must provide a valid callback");
    const tmp = require(44) /* invariant */;
    require(44) /* invariant */(importDefault(432), "ActionSheetManager doesn't exist");
    destructiveButtonIndex = destructiveButtonIndex.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = destructiveButtonIndex);
    const tmp6 = require(44) /* invariant */;
    let tmp9 = destructiveButtonIndex;
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp9 = null;
      if ("number" === typeof destructiveButtonIndex) {
        const items = [destructiveButtonIndex];
        tmp9 = items;
      }
    }
    let obj = require(38) /* processColor */;
    const defaultResult = obj.default(tintColor);
    const tmp8 = callback(destructiveButtonIndex, closure_3);
    const defaultResult1 = require(38) /* processColor */.default(cancelButtonTintColor);
    const obj2 = require(38) /* processColor */;
    const defaultResult2 = require(38) /* processColor */.default(disabledButtonTintColor);
    let tmp14 = null == defaultResult;
    const obj3 = require(38) /* processColor */;
    if (!tmp14) {
      tmp14 = "number" === typeof defaultResult;
    }
    require(44) /* invariant */(tmp14, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp17 = null == defaultResult1;
    const tmp13 = require(44) /* invariant */;
    if (!tmp17) {
      tmp17 = "number" === typeof defaultResult1;
    }
    require(44) /* invariant */(tmp17, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp20 = null == defaultResult2;
    const tmp16 = require(44) /* invariant */;
    if (!tmp20) {
      tmp20 = "number" === typeof defaultResult2;
    }
    require(44) /* invariant */(tmp20, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const tmp19 = require(44) /* invariant */;
    obj = { tintColor: defaultResult, cancelButtonTintColor: defaultResult1, disabledButtonTintColor: defaultResult2, destructiveButtonIndices: tmp9 };
    const result = importDefault(432).showActionSheetWithOptions(Object.assign({}, tmp8, obj), arg1);
  },
  showShareActionSheetWithOptions(tintColor, arg1, arg2) {
    let tmp2 = "object" === typeof tintColor;
    if (tmp2) {
      tmp2 = null !== tintColor;
    }
    require(44) /* invariant */(tmp2, "Options must be a valid object");
    require(44) /* invariant */("function" === typeof arg1, "Must provide a valid failureCallback");
    require(44) /* invariant */("function" === typeof arg2, "Must provide a valid successCallback");
    const tmp = require(44) /* invariant */;
    require(44) /* invariant */(importDefault(432), "ActionSheetManager doesn't exist");
    let obj = importDefault(432);
    obj = {};
    const tmp7 = require(44) /* invariant */;
    obj.tintColor = require(38) /* processColor */.default(tintColor.tintColor);
    const result = obj.showShareActionSheetWithOptions(Object.assign({}, tintColor, obj), arg1, arg2);
  },
  dismissActionSheet() {
    require(44) /* invariant */(importDefault(432), "ActionSheetManager doesn't exist");
    if ("function" === typeof importDefault(432).dismissActionSheet) {
      importDefault(432).dismissActionSheet();
      const obj = importDefault(432);
    }
  }
};
