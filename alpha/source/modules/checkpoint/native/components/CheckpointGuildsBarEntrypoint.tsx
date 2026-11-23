// Module ID: 17920
// Function ID: 17921
// Name: CheckpointGuildsBarEntrypoint
// Dependencies: [5, 19, 17, 17865, 5969, 4759, 17862, 21, 1653, 1706, 4913, 575, 17886, 5504, 1112, 3440, 5477, 17874, 12497, 17921, 5089, 17923, 9087, 5468, 10116, 2]

// Module 17920 (CheckpointGuildsBarEntrypoint)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import Text_Text from "Text/Text" /* 5504 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import GuildsBarConstants from "GuildsBarConstants" /* 17862 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17886 */;
import AssetRegistryDefault from "AssetRegistry" /* 17923 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17865 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function ExpandedChildren() {
  let Text;
  let intl;
  let obj2;
  const obj = { title: unpackModuleId(Text, obj2), subtitle: null };
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  obj2 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef3440["8hclXY"]) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return unpackModuleId(HomeDrawerSharedItem, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const GUILD_ITEM_INSET_LEFT = GuildsBarConstants.GUILD_ITEM_INSET_LEFT;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const colors = ["#000000", "rgba(0, 0, 0, 0.5)", "#000000"];
const start = { x: 1, y: 1 };
const end = { x: 0, y: 0 };
let closure_16 = { code: "(function CheckpointGuildsBarEntrypointTsx1(){let[scrollPosition]=this.__closure;return scrollPosition.get();})" };
let closure_17 = { code: "(function CheckpointGuildsBarEntrypointTsx2(current){let[dismissed,initialScrollPosition,DISMISS_SCROLL_DISTANCE,scheduleOnRN,onScroll]=this.__closure;if(dismissed.get())return;const initial=initialScrollPosition.get();if(initial==null){initialScrollPosition.set(current);return;}if(Math.abs(current-initial)>=DISMISS_SCROLL_DISTANCE){dismissed.set(true);scheduleOnRN(onScroll);}})" };
let closure_18 = createStyles.createStyles((width) => {
  let obj2;
  const obj = { container: { position: "relative" }, itemShape: obj2, coachmarkAnchor: size };
  obj2 = { backgroundColor: CHECKPOINT_PRIMARY };
  size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: GUILD_ITEM_INSET_LEFT, width, height: width };
  return obj;
});
const memoResult = react.memo(function CheckpointGuildsBarEntrypoint(markAsDismissed) {
  let intl;
  let itemShape;
  let items10;
  let items11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let guildsBarAnimatedWrapperStyles;
  let callback;
  let isModalOpen;
  let coachmark;
  const tmp2 = guildsBarAnimatedWrapperStyles;
  let obj = markAsDismissed(guildsBarAnimatedWrapperStyles[16]);
  const tmp3 = importDefault;
  const tmp4 = closure_18(obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE));
  importDefault = tmp4;
  let obj2 = markAsDismissed(guildsBarAnimatedWrapperStyles[17]);
  guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  let obj3 = isModalOpen;
  const items = [guildsBarAnimatedWrapperStyles, tmp4.itemShape];
  const memo = isModalOpen.useMemo(() => {
    let obj2;
    const obj = { itemShape: obj2 };
    const merged = Object.assign(guildsBarAnimatedWrapperStyles);
    obj2 = {};
    const merged1 = Object.assign(guildsBarAnimatedWrapperStyles.itemShape);
    const merged2 = Object.assign(itemShape.itemShape);
    return obj;
  }, items);
  const items1 = [markAsDismissed];
  callback = isModalOpen.useCallback(callback(function*(arg0, value) {
    let c2;
    let closure_0;
    if (guildsBarAnimatedWrapperStyles === 2) {
      guildsBarAnimatedWrapperStyles = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        guildsBarAnimatedWrapperStyles = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            guildsBarAnimatedWrapperStyles = 3;
            throw value;
          } else if (arg0 === 2) {
            guildsBarAnimatedWrapperStyles = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            const obj2 = tmp3(guildsBarAnimatedWrapperStyles[18]);
            guildsBarAnimatedWrapperStyles = 1;
            const obj5 = { value: obj2.openCheckpoint(tmp3(guildsBarAnimatedWrapperStyles[19]).CHECKPOINT_GUILDS_BAR_SOURCE), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          guildsBarAnimatedWrapperStyles = 3;
          throw value;
        } else if (arg0 === 2) {
          guildsBarAnimatedWrapperStyles = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_0(constants.TAKE_ACTION);
          }
          guildsBarAnimatedWrapperStyles = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        guildsBarAnimatedWrapperStyles = 3;
        throw tmp10;
      }
    }
  }), items1);
  const items2 = [callback];
  const items3 = [markAsDismissed];
  const memo1 = isModalOpen.useMemo(() => ({ onPress }), items2);
  const callback1 = isModalOpen.useCallback(() => markAsDismissed(ContentDismissActionType.USER_DISMISS), items3);
  const tmp10 = GuildsBarDnDStore((scrollPosition) => scrollPosition.scrollPosition);
  let obj4 = markAsDismissed(guildsBarAnimatedWrapperStyles[8]);
  const sharedValue = obj4.useSharedValue(null);
  let obj5 = markAsDismissed(guildsBarAnimatedWrapperStyles[8]);
  const sharedValue1 = obj5.useSharedValue(false);
  const items4 = [closure_16, tmp10];
  let c0;
  [tmp14, tmp15] = items4;
  const tmp13 = markAsDismissed(guildsBarAnimatedWrapperStyles[8]);
  class CheckpointGuildsBarEntrypointTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items5 = [tmp15];
  CheckpointGuildsBarEntrypointTsx1.__closure = items5;
  CheckpointGuildsBarEntrypointTsx1.__workletHash = 1024720770114;
  CheckpointGuildsBarEntrypointTsx1.__initData = tmp14;
  const items6 = [closure_17, sharedValue1, sharedValue, 8, , ];
  const useAnimatedReaction = tmp13.useAnimatedReaction;
  items6[4] = markAsDismissed(tmp2[9]).scheduleOnRN;
  items6[5] = callback1;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items6;
  class CheckpointGuildsBarEntrypointTsx2 {
    constructor(arg0) {
      const obj = _undefined;
      if (!_undefined.get()) {
        const value = _undefined2.get();
        const obj2 = _undefined2;
        if (null != value) {
          const _Math = Math;
          if (Math.abs(arg0 - value) >= c2) {
            const result = obj.set(true);
            _undefined3(c4);
          }
        } else {
          const result1 = obj2.set(arg0);
        }
      }
    }
  }
  const items7 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  CheckpointGuildsBarEntrypointTsx2.__closure = items7;
  CheckpointGuildsBarEntrypointTsx2.__workletHash = 1045220900980;
  CheckpointGuildsBarEntrypointTsx2.__initData = tmp16;
  const animatedReaction = useAnimatedReaction(CheckpointGuildsBarEntrypointTsx1, CheckpointGuildsBarEntrypointTsx2);
  const tmpResult = markAsDismissed(tmp2[20]);
  isModalOpen = tmpResult.useIsModalOpen();
  const items8 = [markAsDismissed, callback, isModalOpen];
  const memo2 = obj3.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(_modDef3440.tgYaeZ),
      description: intl2.string(_modDef3440.BFc4lY),
      visible: !isModalOpen,
      position: "bottom",
      offsetY: 24,
      graphic: { type: "image", src: AssetRegistryDefault, aspectRatio: "16/9" },
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(_modDef3440.UjtEWE),
      buttonVariant: "primary",
      onButtonPress
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    ({ type: "image", src: AssetRegistryDefault, aspectRatio: "16/9" });
    intl3 = intl4.intl;
    return obj;
  }, items8);
  const ref = obj3.useRef(null);
  const tmpResult2 = markAsDismissed(tmp2[22]);
  coachmark = tmpResult2.useCoachmark(ref, memo2);
  const items9 = [coachmark];
  const obj6 = { style: tmp4.container, children: items11 };
  const callback2 = obj3.useCallback(() => {
    coachmark(false);
  }, items9);
  const obj7 = { selected: false, circle: false, unread: false, styles: memo, overState: "y", config: memo1, label: intl.string(tmp3(tmp2[15])["8hclXY"]), expandedChildren: closure_11(ExpandedChildren, {}), children: items10 };
  const tmp3Result = tmp3(tmp2[17]);
  intl = tmp(tmp2[14]).intl;
  items10 = [, ];
  const obj8 = { colors, start, end, style: coachmark.absoluteFill, pointerEvents: "none" };
  items10[0] = closure_11(tmp3(tmp2[23]), obj8);
  const obj9 = { size: "md", color: tmp3(tmp2[11]).colors.WHITE };
  const ExperimentalCheckpointIcon = tmp(tmp2[24]).ExperimentalCheckpointIcon;
  items10[1] = closure_11(ExperimentalCheckpointIcon, obj9);
  items11 = [closure_12(tmp3Result, obj7), ];
  const obj10 = { ref, style: tmp4.coachmarkAnchor, onLayout: callback2, pointerEvents: "none", collapsable: false };
  items11[1] = closure_11(closure_6, obj10);
  return closure_12(closure_6, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildsBarEntrypoint.tsx");

export default memoResult;
