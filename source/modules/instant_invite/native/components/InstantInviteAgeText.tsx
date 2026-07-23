// Module ID: 11748
// Function ID: 91232
// Name: InstantInviteAgeText
// Dependencies: [31, 27, 8482, 33, 4130, 566, 4126, 8483, 4660, 8481, 1212, 2]
// Exports: default

// Module 11748 (InstantInviteAgeText)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsxs: closure_4, jsx: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  let View;
  let canEditInvite;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let require;
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: _isNativeReflectConstruct } = style);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getInviteSettings());
  let tmp4Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj.style = items1;
    obj = { variant: "text-xs/normal" };
    const items2 = [require(8483) /* _createForOfIteratorHelperLoose */.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj.children = items2;
    const items3 = [callback(require(4126) /* Text */.Text, obj), ];
    if (canEditInvite) {
      const obj1 = {
        onPress() {
              outer1_0(outer1_1[9]).handlePressSettings(closure_0, closure_1, _isNativeReflectConstruct);
              if (null != callback) {
                callback();
              }
            },
        accessibilityRole: "link"
      };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["VNe8P/"]);
      obj1.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      const obj2 = { variant: "text-xs/normal", color: "text-link" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["VNe8P/"]);
      obj1.children = callback2(require(4126) /* Text */.Text, obj2);
      canEditInvite = callback2(require(4660) /* PressableBase */.PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj.children = items3;
    tmp4Result = callback(View, obj);
    const obj4 = require(8483) /* _createForOfIteratorHelperLoose */;
    const tmp4 = callback;
    const tmp5 = View;
  }
  return tmp4Result;
};
