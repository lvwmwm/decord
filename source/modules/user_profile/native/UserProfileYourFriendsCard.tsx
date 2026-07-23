// Module ID: 15493
// Function ID: 119262
// Name: UserProfileYourFriendsCard
// Dependencies: [57, 31, 27, 6902, 3767, 1849, 653, 33, 1273, 4130, 689, 566, 11986, 8821, 22, 1327, 4660, 1212, 4126, 5514, 2]
// Exports: default

// Module 15493 (UserProfileYourFriendsCard)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -4 };
let closure_12 = Object.freeze(obj);
obj = {};
obj = { flex: 1, flexDirection: "row", alignItems: "center", padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.pressable = obj;
obj.label = { flex: 1 };
obj.facepile = { flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: 8 };
obj.avatars = { flexDirection: "row" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(arg0) {
  let navigateToFriends;
  let style;
  ({ navigateToFriends, style } = arg0);
  const tmp = callback3();
  const require = tmp;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = require(566) /* initialize */;
  let items = [_isNativeReflectConstruct];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const userAffinities = outer1_6.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  const items1 = [closure_7];
  stateFromStoresArray1 = require(566) /* initialize */.useStateFromStoresArray(items1, () => outer1_7.getFriendIDs());
  const obj2 = require(566) /* initialize */;
  const gameRelationshipsByType = require(11986) /* useGameRelationshipsForUserByType */.useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const userAffinitiesV2 = tmp(8821).fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const obj = first(22);
    const found = first(22).chain(stateFromStoresArray).filter((arg0) => outer1_4.includes(arg0));
    const chainResult = first(22).chain(stateFromStoresArray);
    const mapped = found.take(5).map(outer1_8.getUser);
    const takeResult = found.take(5);
    let valueResult = mapped.filter(tmp(1327).isNotNullish).value();
    if (valueResult.length >= 5) {
      dependencyMap(valueResult);
    } else {
      const obj3 = first(22);
      const mapped1 = first(22).chain(gameRelationshipsByType).map((id) => id.id);
      const chainResult1 = first(22).chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(outer1_8.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      valueResult = mapped2.filter(tmp(1327).isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(valueResult, 0));
      dependencyMap(items);
      const iter2 = mapped2.filter(tmp(1327).isNotNullish);
    }
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj = { style: tmp.facepile };
    obj = {
      style: tmp.avatars,
      children: first.map((id) => {
        let obj = { style: { transform: items } };
        obj = { translateX: 4 * (outer1_1.length - 1 - arg1) };
        items = [obj];
        obj = { user: id, guildId: undefined, size: callback(1273).AvatarSizes.XSMALL };
        let tmp3;
        if (arg1 < outer1_1.length - 1) {
          tmp3 = outer2_12;
        }
        obj.cutout = tmp3;
        obj.children = outer2_10(callback(1273).CutoutableAvatarImage, obj);
        return outer2_10(gameRelationshipsByType, obj, id.id);
      })
    };
    obj.children = outer1_10(gameRelationshipsByType, obj);
    return outer1_10(gameRelationshipsByType, obj);
  }, items3);
  obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.TdEu5X);
  obj.onPress = navigateToFriends;
  const items4 = [style, tmp.pressable];
  obj.style = items4;
  obj.activeOpacity = 0.8;
  obj = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", style: tmp.label };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.TdEu5X);
  const items5 = [callback(require(4126) /* Text */.Text, obj), memo, callback(require(5514) /* ChevronSmallRightIcon */.ChevronSmallRightIcon, { size: "sm" })];
  obj.children = items5;
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
};
