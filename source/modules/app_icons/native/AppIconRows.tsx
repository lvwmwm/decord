// Module ID: 14410
// Function ID: 110131
// Name: BackwardsCompatibleAppIconRows
// Dependencies: [57, 31, 27, 1849, 33, 4130, 7445, 5501, 1212, 14411, 7443, 566, 1872, 2]
// Exports: default

// Module 14410 (BackwardsCompatibleAppIconRows)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { createElement } from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function BackwardsCompatibleAppIconRows(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let merged = Object.assign(arg0, undefined);
    let closure_1;
    let dependencyMap;
    function onLongPress(result, arg1) {
      let tmp = null;
      if (result === merged(7445).FreemiumAppIconIds.DEFAULT) {
        tmp = dependencyMap(true);
      }
      return tmp;
    }
    const tmp9 = onLongPress(React.useState(false), 2);
    closure_1 = tmp9[0];
    dependencyMap = tmp9[1];
    const icons = merged.icons;
    let obj = { style: callback2().container };
    obj = { title: merged.title, accessibilityRole: "radiogroup" };
    const intl = merged(1212).intl;
    obj.accessibilityLabel = intl.string(merged(1212).t.N4YDao);
    obj.hasIcons = true;
    obj.children = icons.map((id) => {
      const obj = {};
      merged = Object.assign(merged);
      obj["key"] = id.id;
      obj["icon"] = id;
      obj["showEasterEgg"] = callback;
      obj["onLongPress"] = onLongPress;
      return outer1_7(callback(14411), obj);
    });
    obj.children = callback(merged(5501).TableRowGroup, obj);
    return callback(View, obj);
  }
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  let currentAppIcon;
  let limitedTimeAppIcons;
  onSelect = onSelect.onSelect;
  let obj = require(7443) /* fetchCurrentAppIcon */;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon } = appIcons);
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj2 = require(1872) /* isPremiumAtLeast */;
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const tmp5 = limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
  obj = {};
  let tmp8 = null;
  if (tmp5) {
    obj = { hasNitro: isPremiumResult, icons: limitedTimeAppIcons, currentAppIcon };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.anqaFd);
    obj.onSelect = onSelect;
    tmp8 = callback(BackwardsCompatibleAppIconRows, obj);
  }
  const items1 = [tmp8, ];
  obj1 = {};
  let bottomUpsellPadding = !isPremiumResult;
  if (bottomUpsellPadding) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  obj1.style = bottomUpsellPadding;
  obj2 = { hasNitro: isPremiumResult, icons: appIcons.officialAppIcons, currentAppIcon };
  let stringResult;
  if (tmp5) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.Ipxkog);
  }
  obj2.title = stringResult;
  obj2.onSelect = onSelect;
  obj1.children = callback(BackwardsCompatibleAppIconRows, obj2);
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return closure_10(closure_9, obj);
};
