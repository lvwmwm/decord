// Module ID: 12731
// Function ID: 12732
// Name: CheckpointNavigationControls
// Dependencies: [5, 17, 12495, 5969, 10118, 1071, 21, 560, 4913, 575, 5477, 12730, 12732, 12733, 12734, 1112, 7208, 12722, 3440, 5592, 2187, 12736, 12737, 10348, 12739, 6013, 12503, 5594, 12741, 12742, 504, 5993, 10142, 12534, 6336, 6338, 1628, 12539, 2]
// Exports: default, useCheckpointHomeControlsHeight

// Module 12731 (CheckpointNavigationControls)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef3440 from "module_3440" /* 3440 */;
import useToken from "useToken" /* 5477 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5993 */;
import ShareIcon from "ShareIcon" /* 10142 */;
import RetryIcon from "RetryIcon" /* 10348 */;
import CheckpointFadeLayerDefault from "CheckpointFadeLayer" /* 12539 */;
import CheckpointTextDefault from "CheckpointText" /* 12722 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 12730 */;
import useCheckpointPressSoundDefault from "useCheckpointPressSound" /* 12732 */;
import _modDef12733 from "module_12733" /* 12733 */;
import CheckpointButton2 from "CheckpointButton" /* 12734 */;
import _modDef12736 from "module_12736" /* 12736 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 12737 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 12739 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 12742 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12495 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 10118 */;
import Fragment from "Fragment" /* 21 */;
import module_560 from "module_560" /* 560 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2;

let CHECKPOINT_CONTROL_ICON_SIZE;
let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_PRIMARY;
let CHECKPOINT_WIDE_HOME_START_GAP;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let unpackModuleId;
function handleHomeControlsLayout(height) {
  const obj = { height: height.nativeEvent.layout.height };
  state.setState(obj);
}
function HomeControls(onStart) {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let link;
  let obj7;
  let onPressIn;
  let onPressWithSound;
  onStart = onStart.onStart;
  const tmp = closure_16();
  _require = tmp;
  const tmp4 = useIsCheckpointWideDefault();
  let obj = { source: _modDef12733, onPress: onStart };
  const tmp5 = useCheckpointPressSoundDefault;
  const items = [tmp.homeControls, ];
  let wideHomeControls = tmp4;
  ({ onPressIn, onPressWithSound } = tmp5(obj));
  tmp5(obj);
  const tmp8 = closure_5;
  if (tmp4) {
    wideHomeControls = tmp.wideHomeControls;
  }
  const obj2 = { style: items, onLayout: handleHomeControlsLayout, children: items4 };
  items[1] = wideHomeControls;
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(require("intl").t.I0v0Qv), style: items1, children: items2 };
  const CheckpointShadowButton = require("CheckpointButton").CheckpointShadowButton;
  intl = require("intl").intl;
  items1 = [tmp.labelButton, tmp4 && tmp.wideStart];
  items2 = [, ];
  const obj4 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon };
  items2[0] = closure_11(require("PlayIcon").PlayIcon, obj4);
  const obj5 = { variant: "mono-md/normal", style: items3, children: intl2.string(require("intl").t.I0v0Qv) };
  items3 = [, ];
  ({ label: arr4[0], primaryLabel: arr4[1] } = tmp);
  const tmp2Result = CheckpointTextDefault;
  intl2 = tmp9(1112).intl;
  items2[1] = closure_11(tmp2Result, obj5);
  items4 = [closure_12(CheckpointShadowButton, obj3), ];
  let wideDisclaimer;
  const tmp10 = closure_11;
  const tmp2Result2 = CheckpointTextDefault;
  if (tmp4) {
    wideDisclaimer = tmp.wideDisclaimer;
  }
  const obj6 = { variant: "body-sm/medium", style: wideDisclaimer, children: intl3.format(_modDef3440["SntY/v"], obj7) };
  intl3 = tmp9(1112).intl;
  obj7 = {
    learnMoreHook(children, arg1) {
      let obj = {
        variant: "body-sm/medium",
        style: link.link,
        onPress() {
          const openURL = closure_1_1(closure_1_2[19]).openURL;
          closure_1_1(closure_1_2[19]);
          const obj = closure_1_1(closure_1_2[20]);
          return openURL(obj.getArticleURL(constants.CHECKPOINT));
        },
        accessibilityRole: "link",
        children
      };
      return unpackModuleId(CheckpointTextDefault, obj, arg1);
    }
  };
  items4[1] = tmp10(tmp2Result2, obj6);
  return closure_12(tmp8, obj2);
}
function BackButton(disabled) {
  let hitSlop;
  let intl;
  let obj4;
  let onPressIn;
  let onPressWithSound;
  let style;
  let flag = disabled.disabled;
  const onPress = disabled.onPress;
  if (flag === undefined) {
    flag = false;
  }
  let color = disabled.color;
  ({ hitSlop, style } = disabled);
  const tmp = closure_16();
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const obj = useToken;
  if (flag) {
    color = obj.useToken("text-subtle");
  }
  const obj2 = { source: _modDef12736, onPress, disabled: flag };
  const tmp4 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp4(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(intl4.t["13/7kX"]), disabled: flag, hitSlop, style, children: unpackModuleId(ArrowSmallLeftIcon.ArrowSmallLeftIcon, obj4) };
  tmp4(obj2);
  const CheckpointButton = tmp2(12734).CheckpointButton;
  intl = tmp2(1112).intl;
  obj4 = { size: "custom", color, style: tmp.icon };
  return unpackModuleId(CheckpointButton, obj3);
}
function ReplayButton(arg0) {
  let color;
  let intl;
  let obj3;
  let onPress;
  let onPressIn;
  let onPressWithSound;
  let style;
  ({ onPress, color, style } = arg0);
  const obj = { source: _modDef12733, onPress };
  const tmp = closure_16();
  const tmp2 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp2(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(_modDef3440.u40i9u), style, children: unpackModuleId(RetryIcon.RetryIcon, obj3) };
  tmp2(obj);
  const CheckpointButton = CheckpointButton2.CheckpointButton;
  intl = intl4.intl;
  obj3 = { size: "custom", color, style: tmp.icon };
  return unpackModuleId(CheckpointButton, obj2);
}
function NextButton(disabled) {
  let accessibilityHint;
  let intl;
  let obj4;
  let onPress;
  let onPressIn;
  let onPressWithSound;
  disabled = disabled.disabled;
  ({ onPress, accessibilityHint } = disabled);
  const tmp = closure_16();
  let token = CHECKPOINT_PRIMARY;
  const obj = useToken;
  if (disabled) {
    token = obj.useToken("text-subtle");
  }
  const obj2 = { source: _modDef12733, onPress, disabled };
  const tmp5 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp5(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(intl4.t.PDTjLN), accessibilityHint, disabled, style: tmp.iconButton, children: unpackModuleId(ArrowSmallRightIcon.ArrowSmallRightIcon, obj4) };
  tmp5(obj2);
  const CheckpointShadowButton = tmp3(12734).CheckpointShadowButton;
  intl = tmp3(1112).intl;
  obj4 = { size: "custom", color: token, style: tmp.icon };
  return unpackModuleId(CheckpointShadowButton, obj3);
}
function DoneButton(onPress) {
  let intl;
  let intl2;
  let items;
  let items1;
  let onPressIn;
  let onPressWithSound;
  onPress = onPress.onPress;
  const tmp = closure_16();
  const obj = { source: _modDef12733, onPress };
  const tmp2 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp2(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(intl4.t.i4jeWR), style: tmp.labelButton, children: items1 };
  tmp2(obj);
  const CheckpointShadowButton = CheckpointButton2.CheckpointShadowButton;
  intl = intl4.intl;
  const obj3 = { variant: "mono-md/normal", style: items, children: intl2.string(intl4.t.i4jeWR) };
  items = [, ];
  ({ label: arr[0], primaryLabel: arr[1] } = tmp);
  const tmp4 = CheckpointTextDefault;
  intl2 = intl4.intl;
  items1 = [unpackModuleId(tmp4, obj3), ];
  const obj4 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon };
  items1[1] = unpackModuleId(ArrowSmallRightIcon.ArrowSmallRightIcon, obj4);
  return authStore2(CheckpointShadowButton, obj2);
}
function FinalizeCharacterSaveButton(blockedTrait) {
  let intl;
  let intl2;
  let isSaving;
  let items;
  let items1;
  let onPressIn;
  let onPressWithSound;
  let require;
  let tmp10Result;
  ({ onSave: require, isSaving } = blockedTrait);
  blockedTrait = blockedTrait.blockedTrait;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const obj2 = tmp3(c2[25]);
              const characterFromTraits = obj2.getCharacterFromTraits(closure_1_6.selectedCharacterTraits);
              c1 = 1;
              const obj3 = tmp3(c2[26]);
              c2 = 1;
              const obj6 = { value: obj3.completeCheckpoint(characterFromTraits), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              closure_128_0();
            } else {
              const presentError = tmp3(c2[27]).presentError;
              const tmp6 = tmp3(c2[27]);
              const intl = tmp3(c2[15]).intl;
              presentError(intl.string(tmp3(c2[15]).t.fEptJP));
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c2 = 3;
          throw tmp20;
        }
      }
    });
    return obj(...arguments);
  };
  const accessibilityHint = blockedTrait.accessibilityHint;
  let tmp = closure_16();
  let tmp2 = isSaving;
  if (!tmp2) {
    const tmp3 = null;
    tmp2 = null != blockedTrait;
  }
  let token = CHECKPOINT_PRIMARY;
  let tmp6 = blockedTrait;
  obj = require("useToken");
  if (tmp2) {
    token = obj.useToken("text-subtle");
  }
  let obj2 = {
    source: isSaving(tmp6[28]),
    onPress: function handlePress() {
      function handleSave() {
        return obj(...arguments);
      }
      const tmp = isSaving;
      if (!tmp) {
        if (null != blockedTrait) {
          showNitroLockedToastDefault(tmp2);
        } else {
          handleSave();
        }
      }
    },
    disabled: tmp2
  };
  const tmp7 = isSaving(tmp6[12]);
  ({ onPressIn, onPressWithSound } = tmp7(obj2));
  let obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(tmp5(tmp6[15]).t["R3BPH+"]), accessibilityHint, disabled: tmp2, style: tmp.labelButton, children: items1 };
  tmp7(obj2);
  const CheckpointShadowButton = tmp5(tmp6[14]).CheckpointShadowButton;
  intl = tmp5(tmp6[15]).intl;
  let obj4 = { variant: "mono-md/normal", style: items, children: intl2.string(tmp5(tmp6[15]).t["R3BPH+"]) };
  items = [tmp.label, { color: token }];
  const tmp11 = isSaving(tmp6[17]);
  intl2 = tmp5(tmp6[15]).intl;
  items1 = [closure_11(tmp11, obj4), ];
  const tmp9 = closure_12;
  if (isSaving) {
    let obj5 = { color: token };
    tmp10Result = tmp10(closure_4, obj5);
  } else {
    let obj6 = { size: "custom", color: token, style: tmp.icon };
    tmp10Result = tmp10(tmp5(tmp6[24]).ArrowSmallRightIcon, obj6);
  }
  items1[1] = tmp10Result;
  return tmp9(CheckpointShadowButton, obj3);
}
function SummaryControls(arg0) {
  let character;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onBack;
  let onReplay;
  let onShare;
  let primaryBackgroundColor;
  let shadowColor;
  ({ onBack, onReplay, onShare } = arg0);
  const tmp = closure_16();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => character.character);
  const getCardColors = CheckpointCardColors.getCardColors;
  CheckpointCardColors;
  const obj2 = CheckpointCardColors;
  const cardColors = getCardColors(obj2.getCharacterCardColorPalette(stateFromStores));
  ({ primaryBackgroundColor, shadowColor } = cardColors);
  const obj3 = useToken;
  const token = obj3.useToken("text-overlay-dark");
  const items1 = [tmp.summaryControl, { borderColor: primaryBackgroundColor }];
  const obj4 = { children: items3 };
  const obj5 = { style: tmp.summaryActions, children: items2 };
  items2 = [unpackModuleId(BackButton, { onPress: onBack, color: primaryBackgroundColor, style: items1 }), unpackModuleId(ReplayButton, { onPress: onReplay, color: primaryBackgroundColor, style: items1 })];
  items3 = [authStore2(hasOwnProperty, obj5), ];
  const obj6 = { accessibilityLabel: intl.string(intl4.t.RDE0Sc), onPress: onShare, shadowColor, style: items4, children: items6 };
  const CheckpointShadowButton = CheckpointButton2.CheckpointShadowButton;
  intl = intl4.intl;
  items4 = [tmp.share, { backgroundColor: primaryBackgroundColor }];
  const obj7 = { variant: "mono-md/bold", style: items5, children: intl2.string(intl4.t.RDE0Sc) };
  items5 = [tmp.label, { color: token }];
  const tmp6 = CheckpointTextDefault;
  intl2 = intl4.intl;
  items6 = [unpackModuleId(tmp6, obj7), ];
  const obj8 = { size: "custom", color: token, style: tmp.icon };
  items6[1] = unpackModuleId(ShareIcon.ShareIcon, obj8);
  items3[1] = authStore2(CheckpointShadowButton, obj6);
  return authStore2(map1, obj4);
}
function RouteControls(arg0) {
  let activeRoute;
  let isLastRoute;
  let isSaving;
  let items1;
  let nitroLockedMessage;
  let onBack;
  let onNext;
  let onReplay;
  let onSave;
  let onShare;
  ({ activeRoute, onBack, onNext } = arg0);
  let checkpointRouteBlockedTrait;
  ({ isLastRoute, onSave, onReplay, onShare } = arg0);
  const tmp = closure_16();
  const tmp4 = checkpointRouteBlockedTrait(12534)();
  const obj = onNext(6336);
  checkpointRouteBlockedTrait = obj.getCheckpointRouteBlockedTrait(activeRoute, tmp4);
  if (null != checkpointRouteBlockedTrait) {
    const tmp5Result = onNext(6336);
    nitroLockedMessage = tmp5Result.getNitroLockedMessage(checkpointRouteBlockedTrait);
  }
  const items = [CheckpointStore];
  const tmp5Result2 = onNext(504);
  const stateFromStores = tmp5Result2.useStateFromStores(items, () => isSaving.isSaving);
  if (onNext(6338).CheckpointRoute.HOME === activeRoute) {
    const obj2 = { onStart: onNext };
    return closure_11(HomeControls, obj2);
  } else if (onNext(6338).CheckpointRoute.FINALIZE_CHARACTER === activeRoute) {
    const obj3 = { children: items1 };
    const obj4 = { onPress: onBack, disabled: stateFromStores, hitSlop: checkpointRouteBlockedTrait(575).space.PX_4, style: tmp.noBorderBackButton };
    items1 = [closure_11(BackButton, obj4), ];
    const obj5 = { onSave, isSaving: stateFromStores, blockedTrait: checkpointRouteBlockedTrait, accessibilityHint: nitroLockedMessage };
    items1[1] = closure_11(FinalizeCharacterSaveButton, obj5);
    return closure_12(closure_13, obj3);
  } else if (onNext(6338).CheckpointRoute.SUMMARY === activeRoute) {
    const obj6 = { onBack, onReplay, onShare };
    return closure_11(SummaryControls, obj6);
  } else {
    let tmp23Result;
    const obj7 = { onPress: onBack, hitSlop: checkpointRouteBlockedTrait(575).space.PX_4, style: tmp.noBorderBackButton };
    const items2 = [closure_11(BackButton, obj7), ];
    const tmp21 = closure_12;
    const tmp22 = closure_13;
    if (isLastRoute) {
      const obj8 = { onPress: onNext };
      tmp23Result = tmp23(DoneButton, obj8);
    } else {
      const obj9 = {
        onPress: function handleNext() {
              if (null != checkpointRouteBlockedTrait) {
                showNitroLockedToastDefault(tmp);
              } else {
                onNext();
              }
            },
        accessibilityHint: nitroLockedMessage,
        disabled: null != checkpointRouteBlockedTrait
      };
      tmp23Result = tmp23(NextButton, obj9);
    }
    const obj10 = { children: items2 };
    items2[1] = tmp23Result;
    return tmp21(tmp22, obj10);
  }
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_WIDE_HOME_START_GAP } = CheckpointConstants);
({ CHECKPOINT_CHARACTER_PAGE_FADE_OUT: metroImportAll, CHECKPOINT_STATS_FADE_IN: c9 } = CheckpointTransitionConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const state = module_560.create(() => ({ height: 0 }));
let createStyles = createStyles_mod;
let obj = { container: rect, icon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, noBorderBackButton: obj2, iconButton: { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 }, labelButton: obj3, homeControls: obj4, wideHomeControls: { alignItems: "center", gap: CHECKPOINT_WIDE_HOME_START_GAP }, wideStart: obj5, wideDisclaimer: { maxWidth: 464, textAlign: "center" }, primaryLabel: { color: CHECKPOINT_PRIMARY }, link: { textDecorationLine: "underline" }, summaryActions: obj6, summaryControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, share: obj7, label: { textTransform: "uppercase", fontSize: 18, lineHeight: 24 } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: -nativeDefault.space.PX_12 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_24 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_64 };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_40, borderColor: nativeDefault.colors.BLACK };
let closure_16 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(isCharacterExiting) {
  let items;
  let obj2;
  const tmp = closure_16();
  const rect = useSafeAreaInsetsDefault();
  const obj = { visible: !isCharacterExiting.isCharacterExiting, enter, exit: metroImportAll, style: items, children: unpackModuleId(RouteControls, obj2) };
  items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj2 = {};
  const tmp2 = CheckpointFadeLayerDefault;
  const merged = Object.assign(isCharacterExiting);
  return unpackModuleId(tmp2, obj);
};
export function useCheckpointHomeControlsHeight() {
  return state((height) => height.height);
}
