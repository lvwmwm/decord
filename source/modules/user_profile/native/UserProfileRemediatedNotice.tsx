// Module ID: 12177
// Function ID: 95393
// Name: RemediatedUserNotice
// Dependencies: [31, 27, 3767, 653, 33, 4130, 689, 8282, 624, 4126, 1212, 8962, 2]
// Exports: default

// Module 12177 (RemediatedUserNotice)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  let isBlocked;
  let isIgnored;
  user = user.user;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isPendingIncoming: outer1_4.getRelationshipType(user.id) === outer1_5.PENDING_INCOMING, isBlocked: outer1_4.isBlocked(user.id), isIgnored: outer1_4.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    obj = {};
    const items1 = [tmp.container, tmp2.card, user.style];
    obj.style = items1;
    if (isBlocked) {
      obj = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1 };
      const intl = user(1212).intl;
      obj.children = intl.string(user(1212).t["oC/fU6"]);
      isBlocked = callback(user(4126).Text, obj);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj1 = {};
      const obj2 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1 };
      const intl2 = user(1212).intl;
      obj2.children = intl2.string(user(1212).t.HXz5An);
      const items3 = [callback(user(4126).Text, obj2), callback(user(4126).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = user(1212).intl;
      const obj3 = {
        unignoreHook(children) {
              const obj = {
                role: "button",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress() {
                  return outer2_1(outer2_2[11]).unignoreUser(outer1_0.id, "UserProfileRemediatedNotice");
                },
                children
              };
              return outer1_6(user(outer1_2[9]).Text, obj);
            }
      };
      items3[2] = intl3.format(user(1212).t.PrtAqy, obj3);
      obj1.children = items3;
      isIgnored = callback2(closure_7, obj1);
    }
    items2[1] = isIgnored;
    obj.children = items2;
    let tmp6Result = callback2(View, obj);
    const tmp6 = callback2;
    const tmp7 = View;
  } else {
    tmp6Result = null;
    if (isIgnored) {
      tmp6Result = null;
    }
  }
  return tmp6Result;
};
