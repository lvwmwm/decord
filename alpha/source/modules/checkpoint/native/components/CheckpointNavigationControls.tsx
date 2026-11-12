// Module ID: 14427
// Function ID: 14428
// Name: CheckpointNavigationControls
// Dependencies: [5, 17, 14146, 6314, 1072, 21, 5243, 575, 5839, 14428, 14429, 14430, 1113, 7540, 14161, 3269, 5949, 2185, 14431, 14432, 11028, 10851, 6358, 14150, 5951, 14434, 14426, 504, 6338, 12194, 14191, 6681, 6682, 1627, 2]
// Exports: default

// Module 14427 (CheckpointNavigationControls)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef3269 from "module_3269" /* 3269 */;
import useToken from "useToken" /* 5839 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6338 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 10851 */;
import RetryIcon from "RetryIcon" /* 11028 */;
import ShareIcon from "ShareIcon" /* 12194 */;
import CheckpointTextDefault from "CheckpointText" /* 14161 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 14426 */;
import useCheckpointPressSoundDefault from "useCheckpointPressSound" /* 14428 */;
import _modDef14429 from "module_14429" /* 14429 */;
import CheckpointButton2 from "CheckpointButton" /* 14430 */;
import _modDef14431 from "module_14431" /* 14431 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 14432 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2;

let CHECKPOINT_CONTROL_ICON_SIZE;
let CHECKPOINT_PRIMARY;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let unpackModuleId;
function HomeControls(onStart) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let link;
  let obj7;
  let onPressIn;
  let onPressWithSound;
  onStart = onStart.onStart;
  const tmp = closure_12();
  _require = tmp;
  let obj = { source: _modDef14429, onPress: onStart };
  const tmp2 = useCheckpointPressSoundDefault;
  const obj2 = { style: tmp.homeControls, children: items2 };
  ({ onPressIn, onPressWithSound } = tmp2(obj));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(require("intl").t.I0v0Qv), style: tmp.labelButton, children: items };
  tmp2(obj);
  const CheckpointShadowButton = require("CheckpointButton").CheckpointShadowButton;
  intl = require("intl").intl;
  items = [, ];
  const obj4 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon };
  items[0] = closure_9(require("PlayIcon").PlayIcon, obj4);
  const obj5 = { variant: "mono-md/normal", style: items1, children: intl2.string(require("intl").t.I0v0Qv) };
  items1 = [, ];
  ({ label: arr2[0], startLabel: arr2[1] } = tmp);
  const tmp4 = CheckpointTextDefault;
  intl2 = require("intl").intl;
  items[1] = closure_9(tmp4, obj5);
  items2 = [closure_10(CheckpointShadowButton, obj3), ];
  const obj6 = { variant: "body-sm/medium", children: intl3.format(_modDef3269.hcNhyq, obj7) };
  const tmp5 = CheckpointTextDefault;
  intl3 = require("intl").intl;
  obj7 = {
    learnMoreHook(children, arg1) {
      let obj = {
        variant: "body-sm/medium",
        style: link.link,
        onPress() {
          const openURL = closure_1_1(closure_1_2[16]).openURL;
          closure_1_1(closure_1_2[16]);
          const obj = closure_1_1(closure_1_2[17]);
          return openURL(obj.getArticleURL(constants.CHECKPOINT));
        },
        accessibilityRole: "link",
        children
      };
      return React4(CheckpointTextDefault, obj, arg1);
    }
  };
  items2[1] = closure_9(tmp5, obj6);
  return closure_10(closure_5, obj2);
}
function BackButton(disabled) {
  let intl;
  let obj4;
  let onPressIn;
  let onPressWithSound;
  let flag = disabled.disabled;
  const onPress = disabled.onPress;
  if (flag === undefined) {
    flag = false;
  }
  let color = disabled.color;
  const style = disabled.style;
  const tmp = closure_12();
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const obj = useToken;
  if (flag) {
    color = obj.useToken("text-subtle");
  }
  const obj2 = { source: _modDef14431, onPress, disabled: flag };
  const tmp4 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp4(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(intl4.t["13/7kX"]), disabled: flag, style, children: React4(ArrowSmallLeftIcon.ArrowSmallLeftIcon, obj4) };
  tmp4(obj2);
  const CheckpointButton = tmp2(14430).CheckpointButton;
  intl = tmp2(1113).intl;
  obj4 = { size: "custom", color, style: tmp.icon };
  return React4(CheckpointButton, obj3);
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
  const obj = { source: _modDef14429, onPress };
  const tmp = closure_12();
  const tmp2 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp2(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(_modDef3269.u40i9u), style, children: React4(RetryIcon.RetryIcon, obj3) };
  tmp2(obj);
  const CheckpointButton = CheckpointButton2.CheckpointButton;
  intl = intl4.intl;
  obj3 = { size: "custom", color, style: tmp.icon };
  return React4(CheckpointButton, obj2);
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
  const tmp = closure_12();
  let token = CHECKPOINT_PRIMARY;
  const obj = useToken;
  if (disabled) {
    token = obj.useToken("text-subtle");
  }
  const obj2 = { source: _modDef14429, onPress, disabled };
  const tmp5 = useCheckpointPressSoundDefault;
  ({ onPressIn, onPressWithSound } = tmp5(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(intl4.t.PDTjLN), accessibilityHint, disabled, style: tmp.iconButton, children: React4(ArrowSmallRightIcon.ArrowSmallRightIcon, obj4) };
  tmp5(obj2);
  const CheckpointShadowButton = tmp3(14430).CheckpointShadowButton;
  intl = tmp3(1113).intl;
  obj4 = { size: "custom", color: token, style: tmp.icon };
  return React4(CheckpointShadowButton, obj3);
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
              const obj2 = tmp3(c2[22]);
              const characterFromTraits = obj2.getCharacterFromTraits(closure_1_6.selectedCharacterTraits);
              c1 = 1;
              const obj3 = tmp3(c2[23]);
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
              const presentError = tmp3(c2[24]).presentError;
              const tmp6 = tmp3(c2[24]);
              const intl = tmp3(c2[12]).intl;
              presentError(intl.string(tmp3(c2[12]).t.fEptJP));
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
  let tmp = closure_12();
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
    source: isSaving(tmp6[25]),
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
  const tmp7 = isSaving(tmp6[9]);
  ({ onPressIn, onPressWithSound } = tmp7(obj2));
  let obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: intl.string(tmp5(tmp6[12]).t["R3BPH+"]), accessibilityHint, disabled: tmp2, style: tmp.labelButton, children: items1 };
  tmp7(obj2);
  const CheckpointShadowButton = tmp5(tmp6[11]).CheckpointShadowButton;
  intl = tmp5(tmp6[12]).intl;
  let obj4 = { variant: "mono-md/normal", style: items, children: intl2.string(tmp5(tmp6[12]).t["R3BPH+"]) };
  items = [tmp.label, { color: token }];
  const tmp11 = isSaving(tmp6[14]);
  intl2 = tmp5(tmp6[12]).intl;
  items1 = [closure_9(tmp11, obj4), ];
  const tmp9 = closure_10;
  if (isSaving) {
    let obj5 = { color: token };
    tmp10Result = tmp10(closure_4, obj5);
  } else {
    let obj6 = { size: "custom", color: token, style: tmp.icon };
    tmp10Result = tmp10(tmp5(tmp6[21]).ArrowSmallRightIcon, obj6);
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
  const tmp = closure_12();
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
  items2 = [React4(BackButton, { onPress: onBack, color: primaryBackgroundColor, style: items1 }), React4(ReplayButton, { onPress: onReplay, color: primaryBackgroundColor, style: items1 })];
  items3 = [authStore(hasOwnProperty, obj5), ];
  const obj6 = { accessibilityLabel: intl.string(intl4.t.RDE0Sc), onPress: onShare, shadowColor, style: items4, children: items6 };
  const CheckpointShadowButton = CheckpointButton2.CheckpointShadowButton;
  intl = intl4.intl;
  items4 = [tmp.share, { backgroundColor: primaryBackgroundColor }];
  const obj7 = { variant: "mono-md/bold", style: items5, children: intl2.string(intl4.t.RDE0Sc) };
  items5 = [tmp.label, { color: token }];
  const tmp6 = CheckpointTextDefault;
  intl2 = intl4.intl;
  items6 = [React4(tmp6, obj7), ];
  const obj8 = { size: "custom", color: token, style: tmp.icon };
  items6[1] = React4(ShareIcon.ShareIcon, obj8);
  items3[1] = authStore(CheckpointShadowButton, obj6);
  return authStore(unpackModuleId, obj4);
}
function RouteControls(arg0) {
  let activeRoute;
  let isSaving;
  let items1;
  let items2;
  let nitroLockedMessage;
  let onBack;
  let onNext;
  let onReplay;
  let onSave;
  let onShare;
  ({ activeRoute, onBack, onNext } = arg0);
  let checkpointRouteBlockedTrait;
  const tmp = dependencyMap;
  ({ onSave, onReplay, onShare } = arg0);
  const tmp2 = checkpointRouteBlockedTrait(14191)();
  const obj = onNext(6681);
  checkpointRouteBlockedTrait = obj.getCheckpointRouteBlockedTrait(activeRoute, tmp2);
  if (null != checkpointRouteBlockedTrait) {
    const tmp3Result = onNext(6681);
    nitroLockedMessage = tmp3Result.getNitroLockedMessage(checkpointRouteBlockedTrait);
  }
  const items = [CheckpointStore];
  const tmp3Result2 = onNext(504);
  const stateFromStores = tmp3Result2.useStateFromStores(items, () => isSaving.isSaving);
  if (onNext(6682).CheckpointRoute.HOME === activeRoute) {
    const obj2 = { onStart: onNext };
    return closure_9(HomeControls, obj2);
  } else if (onNext(6682).CheckpointRoute.FINALIZE_CHARACTER === activeRoute) {
    const obj3 = { children: items1 };
    const obj4 = { onPress: onBack, disabled: stateFromStores };
    items1 = [closure_9(BackButton, obj4), ];
    const obj5 = { onSave, isSaving: stateFromStores, blockedTrait: checkpointRouteBlockedTrait, accessibilityHint: nitroLockedMessage };
    items1[1] = closure_9(FinalizeCharacterSaveButton, obj5);
    return closure_10(closure_11, obj3);
  } else if (onNext(6682).CheckpointRoute.SUMMARY === activeRoute) {
    const obj6 = { onBack, onReplay, onShare };
    return closure_9(SummaryControls, obj6);
  } else {
    const obj7 = { children: items2 };
    const obj8 = { onPress: onBack };
    items2 = [closure_9(BackButton, obj8), ];
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
    items2[1] = closure_9(NextButton, obj9);
    return closure_10(closure_11, obj7);
  }
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_CONTROL_SIZE = CheckpointConstants.CHECKPOINT_CONTROL_SIZE;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, icon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, iconButton: { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 }, labelButton: obj2, homeControls: obj3, startLabel: { color: CHECKPOINT_PRIMARY }, link: { textDecorationLine: "underline" }, summaryActions: obj4, summaryControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, share: obj5, label: { textTransform: "uppercase", fontSize: 18, lineHeight: 24 } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj3 = { flex: 1, gap: nativeDefault.space.PX_24 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_40, borderColor: nativeDefault.colors.BLACK };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(arg0) {
  let items;
  let obj2;
  const tmp = closure_12();
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: items, children: React4(RouteControls, obj2) };
  items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj2 = {};
  const merged = Object.assign(arg0);
  return React4(hasOwnProperty, obj);
};
