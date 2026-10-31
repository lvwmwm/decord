// Module ID: 16900
// Function ID: 16901
// Name: OrbChallengeListItem
// Dependencies: [5, 32, 19, 17, 21, 5014, 575, 15626, 1113, 2172, 14679, 9707, 5634, 7378, 5624, 9532, 2]
// Exports: OrbChallengeListItem

// Module 16900 (OrbChallengeListItem)
import nativeDefault from "native" /* 575 */;
import _modDef2172 from "module_2172" /* 2172 */;
import OrbsIcon2 from "OrbsIcon" /* 9532 */;
import _modDef9707 from "module_9707" /* 9707 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 14679 */;
import OrbChallengeTypes from "OrbChallengeTypes" /* 15626 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, closure_2;

let c10;
let c9;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
function OrbChallengeAsset(achievementStatus) {
  let intl;
  let size1;
  let tmp9;
  achievementStatus = achievementStatus.achievementStatus;
  const tmp = closure_12();
  if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.COMPLETED) {
    let tmp8;
    if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.CLAIMED) {
      size = { assetUrl: _modDef9707, isAnimatedAsset, height: 40, width: 40 };
      const tmp6 = QuestDockRewardTileDefault;
      tmp8 = metroImportAll(tmp6, size);
    }
    return tmp8;
  }
  const obj = { style: tmp.completedRing, accessible: true, accessibilityLabel: intl.string(_modDef2172.k6h2J3), children: metroImportAll(tmp9, size1) };
  intl = tmp2(1113).intl;
  size1 = { assetUrl: _modDef9707, isAnimatedAsset, height: 32, width: 32, style: tmp.completedTile };
  tmp9 = QuestDockRewardTileDefault;
  tmp8 = metroImportAll(metroImportDefault, obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = false;
let createStyles = createStyles_mod;
let obj = { item: obj2, pressableItem: obj3, pressedItem: obj4, content: obj5, completedRing: size, completedTile: { borderRadius: 16 }, inlineOrbIcon: size1 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: -nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { flex: 1, marginStart: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
size = { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: nativeDefault.colors.STATUS_POSITIVE, alignItems: "center", justifyContent: "center" };
size1 = { width: 14, height: 12, transform: items };
items = [{ translateY: 1 }];
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbChallengeListItem.tsx");

export function OrbChallengeListItem(achievementIdentifier) {
  let closure_3;
  let closure_5;
  let items3;
  let obj5;
  let orbRewardAmount;
  let title;
  let tmp12Result;
  achievementIdentifier = achievementIdentifier.achievementIdentifier;
  const achievementStatus = achievementIdentifier.achievementStatus;
  const onClaim = achievementIdentifier.onClaim;
  const onDiscoveryClick = achievementIdentifier.onDiscoveryClick;
  let loading;
  react = undefined;
  ({ title, orbRewardAmount } = achievementIdentifier);
  const tmp = closure_12();
  _asyncToGenerator = tmp;
  let obj = react;
  let tmp2 = loading(react.useState(false), 2);
  loading = tmp2[0];
  react = tmp2[1];
  let items = [onClaim, achievementIdentifier];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            if (null != onClaim) {
              closure_5(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: tmp16(achievementIdentifier), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_5(false);
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c4 = 3;
          throw tmp20;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  let tmp6 = onClaim;
  const tmp7 = achievementStatus === achievementIdentifier(onClaim[7]).UserAchievementStatus.COMPLETED;
  let closure_7 = tmp8;
  const items1 = [achievementStatus, loading, callback, tmp8];
  const memo = obj.useMemo(() => {
    let intl;
    const tmp2 = callback;
    const tmp3 = closure_7;
    if (achievementStatus !== OrbChallengeTypes.UserAchievementStatus.COMPLETED) {
      let tmp6;
      if (!loading) {
        tmp6 = null;
        if (tmp3) {
          const obj = { size: "md", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
          const ChevronSmallRightIcon = tmp4(7378).ChevronSmallRightIcon;
          tmp6 = metroImportAll(ChevronSmallRightIcon, obj);
        }
      }
      return tmp6;
    }
    const obj2 = { variant: "primary", size: "sm", text: intl.string(_modDef2172.WmfVjs), loading, onPress: tmp2 };
    const Button = tmp4(5634).Button;
    intl = tmp4(1113).intl;
    tmp6 = metroImportAll(Button, obj2);
  }, items1);
  const items2 = [closure_8(OrbChallengeAsset, { achievementStatus }), , ];
  let obj2 = { style: tmp.content, children: items3 };
  items3 = [closure_8(tmp5(tmp6[14]).Text, { variant: "text-sm/medium", color: "text-default", children: title }), ];
  const Text = tmp5(tmp6[14]).Text;
  let intl = tmp5(tmp6[8]).intl;
  const format = intl.format;
  const tmp14 = achievementStatus(tmp6[9]);
  let obj3 = { children: items2 };
  let obj4 = { variant: "text-sm/normal", color: "text-subtle", children: format(tmp7 ? tmp14.h2qWpS : tmp14.B8Fxns, obj5) };
  obj5 = {
    orbAmount: orbRewardAmount,
    orbIconHook() {
      let OrbsIcon;
      let obj2;
      const obj = { style: closure_3.inlineOrbIcon, children: metroImportAll(OrbsIcon, obj2) };
      obj2 = { size: "xxs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
      OrbsIcon = OrbsIcon2.OrbsIcon;
      return metroImportAll(metroImportDefault, obj);
    }
  };
  items3[1] = closure_8(Text, obj4);
  items2[1] = closure_9(closure_7, obj2);
  items2[2] = memo;
  const tmp10Result = closure_9(closure_10, obj3);
  if (null != onDiscoveryClick && !tmp7) {
    const obj6 = {
      style(pressed) {
          let pressedItem = pressed.pressed;
          const items = [, , ];
          ({ item: arr[0], pressableItem: arr[1] } = closure_3);
          if (pressedItem) {
            pressedItem = closure_3.pressedItem;
          }
          items[2] = pressedItem;
          return items;
        },
      onPress: onDiscoveryClick,
      accessibilityRole: "button",
      children: tmp10Result
    };
    tmp12Result = tmp12(callback, obj6);
  } else {
    const obj7 = { style: tmp.item, children: tmp10Result };
    tmp12Result = tmp12(tmp13, obj7);
  }
  return tmp12Result;
}
