// Module ID: 16628
// Function ID: 16629
// Name: UserProfileYourFriendsCard
// Dependencies: [32, 19, 17, 7072, 4479, 1372, 1074, 21, 1177, 4836, 504, 12637, 9303, 12, 1370, 5917, 4832, 1115, 2]
// Exports: default

// Module 16628 (UserProfileYourFriendsCard)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, userAffinities;

const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
let obj = { direction: native.CutoutDirection.RIGHT, inset: -4 };
let closure_11 = Object.freeze(obj);
let closure_12 = createStyles.createStyles({ facepile: { flexDirection: "row", alignItems: "center" }, avatars: { flexDirection: "row" } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileYourFriendsCard.tsx");

export default function UserProfileYourFriendsCard(navigateToFriends) {
  let closure_0;
  let closure_2;
  let friendIDs;
  let intl;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  navigateToFriends = navigateToFriends.navigateToFriends;
  const tmp = closure_12();
  _require = tmp;
  let tmp2 = stateFromStoresArray(stateFromStoresArray1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = require("get initialized");
  let items = [UserAffinitiesV2Store];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    userAffinities = userAffinities.getUserAffinities();
    return userAffinities.map((otherUserId) => otherUserId.otherUserId);
  });
  let obj2 = require("get initialized");
  const items1 = [RelationshipStore];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => friendIDs.getFriendIDs());
  let obj3 = require("GameRelationshipStoreHooks");
  const gameRelationshipsByType = obj3.useGameRelationshipsByType(RelationshipTypes.FRIEND);
  const effect = stateFromStoresArray1.useEffect(() => {
    const obj = closure_0(closure_2[12]);
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  }, []);
  const items2 = [stateFromStoresArray, stateFromStoresArray1, gameRelationshipsByType];
  const effect1 = stateFromStoresArray1.useEffect(() => {
    const obj = _modDef12;
    const chainResult = obj.chain(stateFromStoresArray);
    const found = chainResult.filter((item) => stateFromStoresArray1.includes(item));
    const takeResult = found.take(5);
    const mapped = takeResult.map(UserStore.getUser);
    const iter = mapped.filter(GlobalUtils.isNotNullish);
    const valueResult = iter.value();
    const tmp4 = UserStore;
    if (valueResult.length >= 5) {
      closure_2(valueResult);
    } else {
      const tmp2Result = _modDef12;
      const chainResult1 = tmp2Result.chain(gameRelationshipsByType);
      const mapped1 = chainResult1.map((id) => id.id);
      const uniqResult = mapped1.uniq();
      const takeResult1 = uniqResult.take(5 - valueResult.length);
      const mapped2 = takeResult1.map(tmp4.getUser);
      const iter2 = mapped2.filter(GlobalUtils.isNotNullish);
      const items = [];
      const valueResult2 = iter2.value();
      HermesBuiltin.arraySpread(items, valueResult2, HermesBuiltin.arraySpread(items, valueResult, 0));
      closure_2(items);
    }
  }, items2);
  const items3 = [first, , ];
  ({ avatars: arr4[1], facepile: arr4[2] } = tmp);
  const memo = stateFromStoresArray1.useMemo(() => {
    let obj2 = {
      style: closure_0.avatars,
      children: first.map((user, index) => {
        let items;
        let tmp3;
        const obj2 = { transform: items };
        items = [];
        const obj3 = { translateX: 4 * (first.length - 1 - index) };
        items[0] = obj3;
        ({ user, guildId: "r", size: closure_0(closure_2[8]).AvatarSizes.XSMALL, cutout: tmp3 });
        const CutoutableAvatarImage = closure_0(closure_2[8]).CutoutableAvatarImage;
        tmp3 = undefined;
        if (index < first.length - 1) {
          tmp3 = closure_2_11;
        }
        return <tmp2 key={arg0.id} style={obj2}>{null}</tmp2>;
      })
    };
    return <View style={closure_0.facepile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
  }, items3);
  const TableRow = require("TableRow").TableRow;
  ({ variant: "text-sm/semibold", color: "text-default", children: intl.string(require("intl").t.TdEu5X) });
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  const intl2 = require("intl").intl;
  return <TableRow label={null} accessibilityLabel={intl2.string(require("intl").t.TdEu5X)} onPress={navigateToFriends} trailing={memo} arrow start end />;
};
