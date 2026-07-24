// Module ID: 13876
// Function ID: 106204
// Name: FamilyCenterAvatarPair
// Dependencies: [31, 27, 1849, 33, 4130, 689, 624, 1273, 2]
// Exports: default

// Module 13876 (FamilyCenterAvatarPair)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
_createForOfIteratorHelperLoose.avatars = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { height: 24, width: 24, marginHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  let iconSrc;
  let iconStyles;
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentUser());
  let tmp3 = null;
  if (undefined !== stateFromStores) {
    tmp3 = null;
    if (undefined !== otherUser) {
      obj = { style: tmp.avatars };
      obj = { size: require(1273) /* Button */.AvatarSizes.LARGE_48, user: stateFromStores, guildId: undefined, avatarDecoration: stateFromStores.avatarDecoration };
      const items1 = [callback(require(1273) /* Button */.Avatar, obj), , ];
      const obj1 = {};
      const items2 = [tmp.icon, iconStyles];
      obj1.style = items2;
      obj1.size = require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL;
      obj1.source = iconSrc;
      items1[1] = callback(require(1273) /* Button */.Icon, obj1);
      const obj2 = { size: require(1273) /* Button */.AvatarSizes.LARGE_48, user: otherUser, guildId: undefined, avatarDecoration: otherUser.avatarDecoration };
      items1[2] = callback(require(1273) /* Button */.Avatar, obj2);
      obj.children = items1;
      tmp3 = callback2(View, obj);
    }
  }
  return tmp3;
};
