// Module ID: 9270
// Function ID: 72418
// Name: handleOpenEmailVerification
// Dependencies: [31, 1849, 33, 4130, 689, 9217, 1212, 566, 4660, 4126, 2]
// Exports: default

// Module 9270 (handleOpenEmailVerification)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function handleOpenEmailVerification() {
  importDefault(9217).open();
}
function getBannerText(currentUser) {
  if (null == currentUser) {
    return null;
  } else if (null == currentUser.email) {
    let obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl3.string(require(1212) /* getSystemLocale */.t["/yqgqs"]);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.button = intl4.string(require(1212) /* getSystemLocale */.t.ydw5nX);
    let tmp3 = obj;
  } else {
    tmp3 = null;
    if (!currentUser.verified) {
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t["3sWbf3"]);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.button = intl2.string(require(1212) /* getSystemLocale */.t["13ofGu"]);
      tmp3 = obj;
    }
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.accountWarning = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.accountWarningText = { flex: 1, lineHeight: 16 };
let obj1 = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
_createForOfIteratorHelperLoose.accountWarningButton = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const tmp2 = getBannerText(obj.useStateFromStores(items, () => outer1_3.getCurrentUser()));
  let tmp3 = null;
  if (null != tmp2) {
    obj = { accessibilityRole: "button", style: tmp.accountWarning, onPress: handleOpenEmailVerification };
    obj = { style: tmp.accountWarningText, variant: "text-xs/bold", color: "text-overlay-light", children: tmp2.title };
    const items1 = [callback(require(4126) /* Text */.Text, obj), ];
    const obj1 = { style: tmp.accountWarningButton, variant: "text-xs/medium", color: "text-overlay-light", children: tmp2.button };
    items1[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items1;
    tmp3 = callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
  }
  return tmp3;
};
export { getBannerText };
