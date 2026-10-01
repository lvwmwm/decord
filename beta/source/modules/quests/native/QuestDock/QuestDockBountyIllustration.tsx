// Module ID: 14741
// Function ID: 14742
// Name: QuestDockBountyIllustration
// Dependencies: [19, 17, 4825, 5756, 14624, 21, 4836, 14737, 14621, 8271, 14742, 504, 1364, 5899, 4540, 10687, 2]

// Module 14741 (QuestDockBountyIllustration)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4540 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import FastImageDefault from "FastImage" /* 5899 */;
import APNGPlayer2 from "APNGPlayer" /* 8271 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 10687 */;
import QuestDockHooks from "QuestDockHooks" /* 14621 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 14737 */;
import _modDef14742 from "module_14742" /* 14742 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let current;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT;
let QUEST_DOCK_COLLAPSED_HEIGHT;
let items;
let obj2;
let size;
let size1;
function useRivePlaybackGateRef() {
  let tmp = useIsQuestDockContentVisibleDefault();
  const obj = QuestDockHooks;
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
  let closure_0 = tmp;
  let closure_1 = react.useRef(null);
  let closure_2 = react.useRef(tmp);
  let closure_3 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = null;
    }
  }, []);
  const items = [tmp, callback];
  const effect = react.useEffect(() => {
    ref2.current = current;
    if (current) {
      callback();
      const current2 = ref.current;
      if (current2 != null) {
        current2.play();
      }
    } else {
      current = ref.current;
      if (current != null) {
        current.pause();
      }
    }
  }, items);
  const items1 = [callback];
  const effect1 = react.useEffect(() => callback, items1);
  const items2 = [callback];
  return react.useCallback((current) => {
    closure_1.current = current;
    callback();
    current = null == current || ref2.current;
    if (!current) {
      const _setTimeout = setTimeout;
      closure_3.current = setTimeout(() => {
        ref3.current = null;
        if (!ref.current) {
          current.pause();
        }
      }, 0);
    }
  }, items2);
}
function IllustrationFrame(arg0) {
  let children;
  let style;
  ({ style, children } = arg0);
  const items = [closure_8().frame, style];
  return <View style={items} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{children}</View>;
}
function QuestDock3DOrbsAPNGPlayer(shouldAnimate) {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const tmp = closure_8();
  const ref = react.useRef(null);
  const obj = APNGPlayer2;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [aPNGPlayerControls, shouldAnimate];
  const effect = react.useEffect(() => {
    if (shouldAnimate) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.pause();
    }
  }, items);
  const APNGPlayer = APNGPlayer2.APNGPlayer;
  return <APNGPlayer ref={ref} url={_modDef14742} style={tmp.fill} autoplay={false} />;
}
function QuestDock3DOrbsIllustration() {
  let obj5;
  let tmp8Result;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = closure_8();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = useIsQuestDockContentVisibleDefault();
  const obj2 = QuestDockHooks;
  const tmp7 = tmp6 && !obj2.useIsQuestDockExpanded() && !stateFromStores;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    const obj3 = { shouldAnimate: tmp7 };
    tmp8Result = tmp8(QuestDock3DOrbsAPNGPlayer, obj3);
  } else {
    const obj4 = { source: obj5, style: tmp.fill, resizeMode: "contain", enableAnimation: !stateFromStores, paused: !tmp7, accessible: false };
    obj5 = { uri: _modDef14742 };
    const tmp5Result = FastImageDefault;
    tmp8Result = tmp8(tmp5Result, obj4);
  }
  return tmp8Result;
}
function QuestDock2DOrbsIllustration() {
  const ref = useRivePlaybackGateRef();
  return jsx(native.QuestBar_2DOrbsRive, { ref, stateMachine: "State Machine 1", fit: "contain" });
}
function QuestDockOrbHandsIllustration() {
  const ref = useRivePlaybackGateRef();
  return jsx(native.OrbsIllustration_HandsRive, { ref, stateMachine: "State Machine 1", fit: "contain" });
}
const View = react_native.View;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = Fragment.jsx;
let obj = { frame: obj2, hands: size, orbs: size1, fill: { flex: 1 } };
obj2 = { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 };
size = { width: 124, height: QUEST_DOCK_COLLAPSED_HEIGHT, transform: items };
items = [{ translateY: -2 }];
size1 = { width: 120, height: 70, marginBottom: QUEST_DOCK_COLLAPSED_HEIGHT - 70 };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function QuestDockBountyIllustration() {
  const tmp = closure_8();
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const illustration = BountiesMobileQuestBarExperiment.useConfig(obj).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    return <IllustrationFrame style={tmp.orbs}><QuestDock2DOrbsIllustration /></IllustrationFrame>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    return <IllustrationFrame style={tmp.hands}><QuestDockOrbHandsIllustration /></IllustrationFrame>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    return <IllustrationFrame style={tmp.orbs}><QuestDock3DOrbsIllustration /></IllustrationFrame>;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyIllustration.tsx");

export default memoResult;
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;
