// Module ID: 17932
// Function ID: 17933
// Name: CheckpointGuildsBarEntrypoint
// Dependencies: [19, 17, 17877, 5969, 4759, 17874, 21, 1653, 1706, 4913, 575, 17898, 5504, 1112, 3440, 5477, 17886, 12500, 12504, 5089, 17933, 9087, 5468, 10121, 2]

// Module 17932 (CheckpointGuildsBarEntrypoint)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import Text_Text from "Text/Text" /* 5504 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import GuildsBarConstants from "GuildsBarConstants" /* 17874 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17898 */;
import AssetRegistryDefault from "AssetRegistry" /* 17933 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17877 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
function ExpandedChildren() {
  let Text;
  let intl;
  let obj2;
  const obj = { title: authStore(Text, obj2), subtitle: null };
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  obj2 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef3440["8hclXY"]) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return authStore(HomeDrawerSharedItem, obj);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const GUILD_ITEM_INSET_LEFT = GuildsBarConstants.GUILD_ITEM_INSET_LEFT;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const colors = ["#000000", "rgba(0, 0, 0, 0.5)", "#000000"];
const start = { x: 1, y: 1 };
const end = { x: 0, y: 0 };
let closure_15 = { code: "(function CheckpointGuildsBarEntrypointTsx1(){let[scrollPosition]=this.__closure;return scrollPosition.get();})" };
let closure_16 = { code: "(function CheckpointGuildsBarEntrypointTsx2(current){let[dismissed,initialScrollPosition,DISMISS_SCROLL_DISTANCE,scheduleOnRN,onScroll]=this.__closure;if(dismissed.get())return;const initial=initialScrollPosition.get();if(initial==null){initialScrollPosition.set(current);return;}if(Math.abs(current-initial)>=DISMISS_SCROLL_DISTANCE){dismissed.set(true);scheduleOnRN(onScroll);}})" };
let closure_17 = createStyles.createStyles((width) => {
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
  let items9;
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
  let obj = markAsDismissed(guildsBarAnimatedWrapperStyles[15]);
  const tmp4 = closure_17(obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE));
  importDefault = tmp4;
  let obj2 = markAsDismissed(guildsBarAnimatedWrapperStyles[16]);
  guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  const items = [guildsBarAnimatedWrapperStyles, tmp4.itemShape];
  const memo = callback.useMemo(() => {
    let obj2;
    const obj = { itemShape: obj2 };
    const merged = Object.assign(guildsBarAnimatedWrapperStyles);
    obj2 = {};
    const merged1 = Object.assign(guildsBarAnimatedWrapperStyles.itemShape);
    const merged2 = Object.assign(itemShape.itemShape);
    return obj;
  }, items);
  callback = callback.useCallback(() => {
    const obj = markAsDismissed(guildsBarAnimatedWrapperStyles[17]);
    obj.openCheckpoint(markAsDismissed(guildsBarAnimatedWrapperStyles[18]).CHECKPOINT_GUILDS_BAR_SOURCE);
  }, []);
  const items1 = [callback];
  const items2 = [markAsDismissed];
  const memo1 = callback.useMemo(() => ({ onPress }), items1);
  const callback1 = callback.useCallback(() => markAsDismissed(ContentDismissActionType.USER_DISMISS), items2);
  const tmp10 = GuildsBarDnDStore((scrollPosition) => scrollPosition.scrollPosition);
  const obj4 = markAsDismissed(guildsBarAnimatedWrapperStyles[7]);
  const sharedValue = obj4.useSharedValue(null);
  const obj5 = markAsDismissed(guildsBarAnimatedWrapperStyles[7]);
  const sharedValue1 = obj5.useSharedValue(false);
  const items3 = [closure_15, tmp10];
  let c0;
  [tmp14, tmp15] = items3;
  const tmp13 = markAsDismissed(guildsBarAnimatedWrapperStyles[7]);
  class CheckpointGuildsBarEntrypointTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items4 = [tmp15];
  CheckpointGuildsBarEntrypointTsx1.__closure = items4;
  CheckpointGuildsBarEntrypointTsx1.__workletHash = 1024720770114;
  CheckpointGuildsBarEntrypointTsx1.__initData = tmp14;
  const items5 = [closure_16, sharedValue1, sharedValue, 8, , ];
  const useAnimatedReaction = tmp13.useAnimatedReaction;
  items5[4] = markAsDismissed(guildsBarAnimatedWrapperStyles[8]).scheduleOnRN;
  items5[5] = callback1;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items5;
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
  const items6 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  CheckpointGuildsBarEntrypointTsx2.__closure = items6;
  CheckpointGuildsBarEntrypointTsx2.__workletHash = 1045220900980;
  CheckpointGuildsBarEntrypointTsx2.__initData = tmp16;
  const animatedReaction = useAnimatedReaction(CheckpointGuildsBarEntrypointTsx1, CheckpointGuildsBarEntrypointTsx2);
  const tmpResult = markAsDismissed(guildsBarAnimatedWrapperStyles[19]);
  isModalOpen = tmpResult.useIsModalOpen();
  const items7 = [markAsDismissed, callback, isModalOpen];
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
  }, items7);
  const ref = callback.useRef(null);
  const tmpResult2 = markAsDismissed(guildsBarAnimatedWrapperStyles[21]);
  coachmark = tmpResult2.useCoachmark(ref, memo2);
  const items8 = [coachmark];
  const obj6 = { style: tmp4.container, children: items10 };
  const callback2 = obj3.useCallback(() => {
    coachmark(false);
  }, items8);
  const obj7 = { selected: false, circle: false, unread: false, styles: memo, overState: "y", config: memo1, label: intl.string(require("module_3440")["8hclXY"]), expandedChildren: closure_10(ExpandedChildren, {}), children: items9 };
  const tmp3Result = require("GuildsBarAnimatedItemWrapper");
  intl = tmp(tmp2[13]).intl;
  items9 = [, ];
  const obj8 = { colors, start, end, style: isModalOpen.absoluteFill, pointerEvents: "none" };
  items9[0] = closure_10(require("LinearGradient"), obj8);
  const obj9 = { size: "md", color: require("native").colors.WHITE };
  const ExperimentalCheckpointIcon = tmp(tmp2[23]).ExperimentalCheckpointIcon;
  items9[1] = closure_10(ExperimentalCheckpointIcon, obj9);
  items10 = [closure_11(tmp3Result, obj7), ];
  const obj10 = { ref, style: tmp4.coachmarkAnchor, onLayout: callback2, pointerEvents: "none", collapsable: false };
  items10[1] = closure_10(coachmark, obj10);
  return closure_11(coachmark, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildsBarEntrypoint.tsx");

export default memoResult;
