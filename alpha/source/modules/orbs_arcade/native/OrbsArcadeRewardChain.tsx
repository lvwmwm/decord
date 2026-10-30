// Module ID: 16982
// Function ID: 16983
// Name: OrbsArcadeRewardChain
// Dependencies: [19, 17, 21, 575, 5009, 5016, 16961, 16955, 16970, 16983, 671, 5582, 16965, 5619, 2]
// Exports: default

// Module 16982 (OrbsArcadeRewardChain)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Text_Text from "Text/Text" /* 5619 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16961 */;
import OrbsArcadeRewardChainCellDefault from "OrbsArcadeRewardChainCell" /* 16983 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let absoluteFill, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp16;
const OrbsArcadeRewardStatusLabelDefault = tmp16(16965);
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_8 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { chain: obj2, divider: obj3, row: obj4, dimmedRow: { opacity: 0.4 }, rewardCopy: obj5 };
obj2 = { overflow: "hidden", padding: nativeDefault.space.PX_16, gap: PX_16, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginHorizontal: -nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default function OrbsArcadeRewardChain(game) {
  let _undefined2;
  let _undefined3;
  let c7;
  let c8;
  let c9;
  let closure_2;
  let closure_4;
  let id;
  let items3;
  let mapped;
  let timeline;
  game = game.game;
  const gameState = game.gameState;
  let memo;
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  start = undefined;
  const grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
  const tmp = closure_11();
  dependencyMap = tmp;
  const tmp2 = game;
  let obj = game(5016);
  let obj2 = memo;
  let items = [game.rewards];
  const theme = obj.useThemeContext().theme;
  memo = memo.useMemo(() => {
    const items = [...game.rewards];
    return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
  }, items);
  let items1 = [memo, gameState];
  absoluteFill = memo.useMemo(() => memo.map((id) => {
    const obj = game(closure_2[6]);
    return obj.getOrbsArcadeRewardStatus(id.id, gameState);
  }), items1);
  const findLastResult = memo.findLast((arg0, arg1) => closure_4[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  let c5 = findLastResult;
  let first = findLastResult;
  let tmp6 = gameState(16970);
  const tmp5 = gameState;
  if (findLastResult == null) {
    first = memo[0];
  }
  const tmp6Result = tmp6(first);
  closure_6 = tmp6Result;
  let tmp2Result = tmp2(16983);
  let obj3 = { grantedRewardIds: mapped.reverse(), focusedRewardId: id, grantAnimatedOnOpenRewardIds };
  const useOrbsArcadeRewardChainTimeline = tmp2Result.useOrbsArcadeRewardChainTimeline;
  const found = memo.filter((item, index) => closure_4[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  mapped = found.map((id) => id.id);
  id = undefined;
  if (findLastResult != null) {
    id = findLastResult.id;
  }
  if (id == null) {
    id = null;
  }
  const orbsArcadeRewardChainTimeline = useOrbsArcadeRewardChainTimeline(obj3);
  ({ timeline: c7, getGrantAtMs: c8, getFocusRingAtMs: c9 } = orbsArcadeRewardChainTimeline);
  let items2 = [tmp6Result];
  let obj4 = { style: tmp.chain, children: items3 };
  const memo1 = obj2.useMemo(() => {
    const items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef671(closure_6);
    const alphaResult = obj.alpha(0.3);
    items[1] = alphaResult.css();
    return items;
  }, items2);
  const tmp13 = c7;
  let tmp15 = null;
  const tmp14 = c5;
  const tmp2Result2 = tmp2(5016);
  if (!tmp2Result2.isThemeLight(theme)) {
    let tmp16 = closure_6;
    let obj5 = { style: absoluteFill.absoluteFill, start, end, colors: memo1 };
    let tmp17 = absoluteFill;
    let tmp18 = start;
    tmp15 = closure_6(tmp5(5582), obj5);
  }
  items3 = [
    tmp15,
    memo.map((reward, index) => {
      let items2;
      let items3;
      let tmp18;
      let tmp2Result;
      let id1;
      const LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      id = reward.id;
      if (id != null) {
        id1 = id.id;
      }
      let tmp6 = null;
      const Fragment = react.Fragment;
      if (index > 0) {
        const obj = { style: closure_2.divider };
        tmp6 = metroRequire(hasOwnProperty, obj);
      }
      const items = [tmp6, ];
      const items1 = [closure_2.row, ];
      let dimmedRow;
      if (closure_4[index] === LOCKED) {
        if (id !== id1) {
          dimmedRow = tmp13.dimmedRow;
        }
      }
      const obj2 = { style: items1, children: items2 };
      items1[1] = dimmedRow;
      const obj3 = { reward, status: closure_4[index], isFocused: id === id1, stemLength: tmp18, timeline, grantAtMs: _undefined2(reward.id), focusRingAtMs: _undefined3(reward.id) };
      tmp18 = null;
      const tmp17 = OrbsArcadeRewardChainCellDefault;
      if (index > 0) {
        tmp18 = null;
        if (closure_4[index] !== LOCKED) {
          tmp18 = closure_8;
        }
      }
      const obj4 = { children: items };
      items2 = [metroRequire(tmp17, obj3), ];
      const obj5 = { style: closure_2.rewardCopy, children: items3 };
      items3 = [, , ];
      const obj6 = { reward, status: closure_4[index], color: "text-subtle" };
      items3[0] = metroRequire(OrbsArcadeRewardStatusLabelDefault, obj6);
      const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
      items3[1] = metroRequire(Text_Text.Text, obj7);
      const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: tmp2Result.getOrbsArcadeRewardScoreLabel(reward, closure_4[index]) };
      const Text = tmp2(5619).Text;
      tmp2Result = OrbsArcadeRewardUtils;
      items3[2] = metroRequire(Text, obj8);
      items2[1] = metroImportDefault(hasOwnProperty, obj5);
      items[1] = metroImportDefault(hasOwnProperty, obj2);
      return metroImportDefault(Fragment, obj4, reward.id);
    })
  ];
  return tmp13(tmp14, obj4);
};
