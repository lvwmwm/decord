// Module ID: 15358
// Function ID: 116982
// Name: UserProfileYourFriendsCard
// Dependencies: []
// Exports: default

// Module 15358 (UserProfileYourFriendsCard)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const RelationshipTypes = arg1(dependencyMap[6]).RelationshipTypes;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = { direction: arg1(dependencyMap[8]).CutoutDirection.RIGHT, inset: -4 };
let closure_12 = Object.freeze(obj);
const tmp2 = arg1(dependencyMap[7]);
obj = {};
obj = { "Bool(false)": 123.002, "Bool(false)": null, "Bool(false)": 1, "Bool(false)": "Golive Simulcast without prober 720p@500k", borderRadius: importDefault(dependencyMap[10]).radii.lg };
obj.pressable = obj;
obj.label = { flex: 1 };
obj.facepile = {};
obj.avatars = { flexDirection: "row" };
let closure_13 = arg1(dependencyMap[9]).createStyles(obj);
const obj2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(arg0) {
  let navigateToFriends;
  let style;
  ({ navigateToFriends, style } = arg0);
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = callback(React.useState([]), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  let obj = arg1(closure_2[11]);
  const items = [closure_6];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  const callback = stateFromStoresArray;
  const items1 = [closure_7];
  const stateFromStoresArray1 = arg1(closure_2[11]).useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  const React = stateFromStoresArray1;
  const obj2 = arg1(closure_2[11]);
  const gameRelationshipsByType = arg1(closure_2[12]).useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const View = gameRelationshipsByType;
  const effect = React.useEffect(() => {
    const userAffinitiesV2 = tmp(closure_2[13]).fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = React.useEffect(() => {
    const obj = first(callback[14]);
    const found = first(callback[14]).chain(stateFromStoresArray).filter((arg0) => closure_4.includes(arg0));
    const chainResult = first(callback[14]).chain(stateFromStoresArray);
    const mapped = found.take(5).map(closure_8.getUser);
    const takeResult = found.take(5);
    let valueResult = mapped.filter(tmp(callback[15]).isNotNullish).value();
    if (valueResult.length >= 5) {
      callback(valueResult);
    } else {
      const obj3 = first(callback[14]);
      const mapped1 = first(callback[14]).chain(gameRelationshipsByType).map((id) => id.id);
      const chainResult1 = first(callback[14]).chain(gameRelationshipsByType);
      const uniqResult = mapped1.uniq();
      const mapped2 = mapped1.uniq().take(5 - valueResult.length).map(closure_8.getUser);
      const takeResult1 = mapped1.uniq().take(5 - valueResult.length);
      valueResult = mapped2.filter(tmp(callback[15]).isNotNullish).value();
      const items = [];
      HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(valueResult, 0));
      callback(items);
      const iter2 = mapped2.filter(tmp(callback[15]).isNotNullish);
    }
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = React.useMemo(() => {
    let obj = { style: tmp.facepile };
    obj = {
      style: tmp.avatars,
      children: first.map((id) => {
        let obj = { style: { transform: items } };
        obj = { translateX: 4 * (closure_1.length - 1 - arg1) };
        const items = [obj];
        obj = { user: id, guildId: undefined, size: callback(closure_2[8]).AvatarSizes.XSMALL };
        let tmp3;
        if (arg1 < closure_1.length - 1) {
          tmp3 = closure_12;
        }
        obj.cutout = tmp3;
        obj.children = closure_10(callback(closure_2[8]).CutoutableAvatarImage, obj);
        return closure_10(closure_5, obj, id.id);
      })
    };
    obj.children = callback2(gameRelationshipsByType, obj);
    return callback2(gameRelationshipsByType, obj);
  }, items3);
  obj = { accessibilityRole: "button" };
  const intl = arg1(closure_2[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(closure_2[17]).t.TdEu5X);
  obj.onPress = navigateToFriends;
  const items4 = [style, tmp.pressable];
  obj.style = items4;
  obj.activeOpacity = 0.8;
  obj = { style: tmp.label };
  const intl2 = arg1(closure_2[17]).intl;
  obj.children = intl2.string(arg1(closure_2[17]).t.TdEu5X);
  const items5 = [callback2(arg1(closure_2[18]).Text, obj), memo, callback2(arg1(closure_2[19]).ChevronSmallRightIcon, { size: "sm" })];
  obj.children = items5;
  return callback3(arg1(closure_2[16]).PressableOpacity, obj);
};
