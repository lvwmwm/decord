// Module ID: 17040
// Function ID: 17041
// Name: OrbsArcadeRewardChain
// Dependencies: [19, 17, 17010, 21, 575, 5014, 17041, 5095, 5021, 504, 17017, 17011, 17027, 671, 5587, 17021, 5624, 2]
// Exports: default

// Module 17040 (OrbsArcadeRewardChain)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import Text_Text from "Text/Text" /* 5624 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 17017 */;
import OrbsArcadeRewardChainCell from "OrbsArcadeRewardChainCell" /* 17041 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const OrbsArcadeRewardChainCellDefault = OrbsArcadeRewardChainCell;
let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp17;
const OrbsArcadeRewardStatusLabelDefault = tmp17(17021);
function OrbsArcadeRewardChainRow(arg0) {
  let children;
  let focusRingAtMs;
  let isFocused;
  let isGranted;
  let items;
  let timeline;
  ({ isGranted, isFocused, timeline, focusRingAtMs, children } = arg0);
  const tmp = closure_12();
  const obj = OrbsArcadeRewardChainCell;
  const orbsArcadeRewardChainRowStyle = obj.useOrbsArcadeRewardChainRowStyle({ isGranted, isFocused, timeline, focusRingAtMs });
  const obj2 = { style: items, children };
  items = [tmp.row, orbsArcadeRewardChainRowStyle];
  return metroImportDefault(ReanimatedRexportDefault.View, obj2);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_9 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
let end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { chainGlowContainer: obj2, chain: obj3, divider: obj4, row: obj5, rewardCopy: { flex: 1, gap: 2 } };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { overflow: "hidden", padding: nativeDefault.space.PX_16, gap: PX_16, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { height: 1, marginHorizontal: -nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default function OrbsArcadeRewardChain(game) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c10;
  let c11;
  let c9;
  let closure_2;
  let id;
  let items6;
  let mapped;
  let obj6;
  let timeline;
  let tmp19;
  game = game.game;
  const gameState = game.gameState;
  let c6;
  let closure_7;
  let NITRO_GLOW_COLOR;
  c9 = undefined;
  start = undefined;
  end = undefined;
  const grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
  let tmp = closure_12();
  dependencyMap = tmp;
  const tmp3 = dependencyMap;
  let obj = game(5021);
  const theme = obj.useThemeContext().theme;
  let obj2 = game(504);
  let items = [c6];
  const stateFromStores = obj2.useStateFromStores(items, () => _undefined.ownedRewardSkuIds);
  let obj3 = stateFromStores;
  let items1 = [game.rewards];
  const memo = stateFromStores.useMemo(() => {
    const items = [...game.rewards];
    return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
  }, items1);
  let items2 = [memo, gameState, stateFromStores];
  let closure_5 = stateFromStores.useMemo(() => memo.map((item) => {
    const obj = game(closure_2[10]);
    return obj.getOrbsArcadeRewardStatus(item, gameState, stateFromStores);
  }), items2);
  const findLastResult = memo.findLast((arg0, arg1) => closure_5[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  c6 = findLastResult;
  let first = findLastResult;
  if (findLastResult == null) {
    first = memo[0];
  }
  let tmp7 = gameState;
  const tmp8 = gameState(17027)(first);
  closure_7 = tmp8;
  let type;
  if (first != null) {
    type = first.type;
  }
  NITRO_GLOW_COLOR = tmp8;
  if (type === game(17011).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    NITRO_GLOW_COLOR = tmp2(17027).NITRO_GLOW_COLOR;
  }
  let obj4 = { grantedRewardIds: mapped.reverse(), focusedRewardId: id, grantAnimatedOnOpenRewardIds };
  const useOrbsArcadeRewardChainTimeline = tmp2(17041).useOrbsArcadeRewardChainTimeline;
  game(17041);
  const found = memo.filter((item, index) => closure_5[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  mapped = found.map((id) => id.id);
  id = undefined;
  if (findLastResult != null) {
    id = findLastResult.id;
  }
  if (id == null) {
    id = null;
  }
  const orbsArcadeRewardChainTimeline = useOrbsArcadeRewardChainTimeline(obj4);
  ({ timeline: c9, getGrantAtMs: c10, getFocusRingAtMs: c11 } = orbsArcadeRewardChainTimeline);
  const items3 = [tmp8];
  const items4 = [NITRO_GLOW_COLOR];
  const memo1 = obj3.useMemo(() => {
    const items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef671(closure_7);
    const alphaResult = obj.alpha(0.3);
    items[1] = alphaResult.css();
    return items;
  }, items3);
  const memo2 = obj3.useMemo(() => {
    let items;
    const obj = { boxShadow: items };
    items = [];
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: NITRO_GLOW_COLOR };
    items[0] = obj2;
    return obj;
  }, items4);
  const tmp2Result2 = game(5021);
  const isThemeLightResult = tmp2Result2.isThemeLight(theme);
  let tmp17 = closure_5;
  const items5 = [tmp.chainGlowContainer, ];
  let tmp18;
  if (!isThemeLightResult) {
    tmp18 = memo2;
  }
  let obj5 = { style: items5, children: tmp19(tmp17, obj6) };
  items5[1] = tmp18;
  obj6 = { style: tmp.chain, children: items6 };
  let tmp16Result = null;
  tmp19 = NITRO_GLOW_COLOR;
  if (!isThemeLightResult) {
    let obj7 = { style: memo.absoluteFill, start, end, colors: memo1 };
    tmp16Result = tmp16(tmp7(5587), obj7);
  }
  items6 = [
    tmp16Result,
    memo.map((reward, index) => {
      let items1;
      let items2;
      let tmp14;
      let tmp15;
      let tmp19;
      let tmp20;
      let tmp3Result;
      let id1;
      const LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      const id = reward.id;
      const tmp = hasOwnProperty;
      if (_undefined != null) {
        id1 = _undefined.id;
      }
      let tmp7 = null;
      const Fragment = react.Fragment;
      if (index > 0) {
        const obj = { style: closure_2.divider };
        tmp7 = metroImportDefault(hasOwnProperty, obj);
      }
      const items = [tmp7, ];
      const obj2 = { isGranted: hasOwnProperty[index] !== LOCKED, isFocused: id === id1, timeline, focusRingAtMs: _undefined3(reward.id), children: items1 };
      const obj3 = { reward, status: hasOwnProperty[index], isFocused: id === id1, stemLength: tmp19, isStemTargetGranted: tmp20, timeline: tmp14, grantAtMs: _undefined2(reward.id), focusRingAtMs: tmp15(reward.id) };
      tmp19 = null;
      const tmp13 = OrbsArcadeRewardChainRow;
      tmp14 = timeline;
      tmp15 = _undefined3;
      const tmp18 = OrbsArcadeRewardChainCellDefault;
      if (index > 0) {
        tmp19 = null;
        if (hasOwnProperty[index] !== LOCKED) {
          tmp19 = closure_9;
        }
      }
      const obj4 = { children: items };
      tmp20 = index > 0 && tmp[index - 1] !== tmp3(17011).OrbsArcadeRewardStatus.LOCKED;
      items1 = [metroImportDefault(tmp18, obj3), ];
      const obj5 = { style: closure_2.rewardCopy, children: items2 };
      items2 = [, , ];
      const obj6 = { reward, status: hasOwnProperty[index], color: "text-subtle" };
      items2[0] = metroImportDefault(OrbsArcadeRewardStatusLabelDefault, obj6);
      const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
      items2[1] = metroImportDefault(Text_Text.Text, obj7);
      const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: tmp3Result.getOrbsArcadeRewardScoreLabel(reward, hasOwnProperty[index], gameState, stateFromStores) };
      const Text = tmp3(5624).Text;
      tmp3Result = OrbsArcadeRewardUtils;
      items2[2] = metroImportDefault(Text, obj8);
      items1[1] = metroImportAll(hasOwnProperty, obj5);
      items[1] = metroImportAll(tmp13, obj2);
      return metroImportAll(Fragment, obj4, reward.id);
    })
  ];
  return closure_7(tmp17, obj5);
};
