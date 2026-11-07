// Module ID: 13932
// Function ID: 13933
// Name: CheckpointNavigationControls
// Dependencies: [17, 6199, 1072, 21, 5140, 575, 6566, 13931, 1627, 5724, 1113, 6567, 13933, 8922, 13877, 3248, 5834, 2185, 11032, 11215, 12410, 10930, 2]
// Exports: default

// Module 13932 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 13877 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13931 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let CHECKPOINT_CONTROL_ICON_SIZE;
let CHECKPOINT_CONTROL_SIZE;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, controlIcon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, iconButton: { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 }, summaryActions: obj3, summaryControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, share: obj4, shareLabel: { fontSize: 18, lineHeight: 24 } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_40 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(nextDisabled) {
  let ArrowSmallLeftIcon;
  let activeRoute;
  let backDisabled;
  let color;
  let iconButton;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let nitroLockedMessage;
  let obj14;
  let obj17;
  let obj22;
  let obj23;
  let obj25;
  let obj7;
  let obj9;
  let onBack;
  let onReplay;
  let onShare;
  let shadowColor;
  let stringResult1;
  let tmp14;
  let tmp15;
  let tmp28Result;
  ({ activeRoute, onBack, onNext: require, color } = nextDisabled);
  ({ onReplay, onShare } = nextDisabled);
  if (color === undefined) {
    color = closure_5;
  }
  ({ backDisabled, shadowColor } = nextDisabled);
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = nextDisabled.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = nextDisabled.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = nextDisabled.nextBlockedTrait;
  let tmp = closure_9();
  const link = tmp;
  if (null != nextBlockedTrait) {
    let obj = require("CheckpointCustomizationUtils");
    nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  }
  const tmp5 = flag;
  const rect = flag(flag2[8])();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  const obj2 = require("useToken");
  let token = obj2.useToken("text-subtle");
  const obj3 = require("useToken");
  const token1 = obj3.useToken("text-overlay-dark");
  const obj4 = require("useToken");
  const token2 = obj4.useToken(flag(flag2[5]).colors.BLACK);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.PDTjLN);
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl3 = tmp7(tmp6[10]).intl;
    stringResult1 = intl3.string(tmp7(tmp6[10]).t["R3BPH+"]);
  } else {
    const tmp7Result = require("CheckpointNavigation");
    if (tmp7Result.isCheckpointCustomizationRoute(activeRoute)) {
      const intl2 = tmp7(tmp6[10]).intl;
      stringResult1 = intl2.string(tmp7(tmp6[10]).t.PDTjLN);
    }
  }
  function handleNextPress() {
    const tmp = flag2;
    if (!tmp) {
      const tmp2 = flag;
      if (tmp2) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp5);
        }
      } else {
        require();
      }
    }
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj5 = { style: items1, children: items2 };
    items1 = [items, tmp.homeContainer];
    const obj6 = { Icon: require("PlayIcon").PlayIcon, label: intl7.string(require("intl").t.I0v0Qv), onPress: handleNextPress, disabled: flag2, accessibilityState: obj7 };
    const tmp5Result = tmp5(flag2[12]);
    intl7 = tmp7(tmp6[10]).intl;
    obj7 = { disabled: flag2 };
    items2 = [closure_7(tmp5Result, obj6), ];
    const obj8 = { variant: "body-sm/medium", children: intl8.format(tmp5(flag2[15]).hcNhyq, obj9) };
    const tmp5Result4 = tmp5(flag2[14]);
    intl8 = tmp7(tmp6[10]).intl;
    obj9 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "body-sm/medium",
            style: link.link,
            onPress() {
              const openURL = flag(flag2[16]).openURL;
              flag(flag2[16]);
              const obj = flag(flag2[17]);
              return openURL(obj.getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          };
          return metroImportDefault(CheckpointTextDefault, obj, arg1);
        }
    };
    items2[1] = closure_7(tmp5Result4, obj8);
    tmp28Result = closure_8(link, obj5);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj10 = { style: items3, children: items7 };
    items3 = [items, tmp.routeControls];
    const obj11 = { style: tmp.summaryActions, children: items5 };
    const obj12 = { style: items4, onPress: onBack, accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t["13/7kX"]), children: closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj14) };
    items4 = [, , ];
    ({ control: arr4[0], summaryControl: arr4[1] } = tmp);
    const obj13 = { borderColor: color };
    items4[2] = obj13;
    intl4 = tmp7(tmp6[10]).intl;
    obj14 = { size: "custom", color, style: tmp.controlIcon };
    items5 = [closure_7(nextBlockedTrait, obj12), ];
    const obj15 = { style: items6, onPress: onReplay, accessibilityRole: "button", accessibilityLabel: intl5.string(tmp5(flag2[15]).u40i9u), children: closure_7(require("RetryIcon").RetryIcon, obj17) };
    items6 = [, , ];
    ({ control: arr6[0], summaryControl: arr6[1] } = tmp);
    const obj16 = { borderColor: color };
    items6[2] = obj16;
    intl5 = tmp7(tmp6[10]).intl;
    obj17 = { size: "custom", color, style: tmp.controlIcon };
    items5[1] = closure_7(nextBlockedTrait, obj15);
    items7 = [closure_8(link, obj11), ];
    const obj18 = { Icon: require("ShareIcon").ShareIcon, iconPosition: "end", label: intl6.string(require("intl").t.RDE0Sc), labelVariant: "mono-md/bold", labelStyle: tmp.shareLabel, onPress: onShare, color: token1, borderColor: token2, shadowColor, style: items8 };
    const tmp5Result5 = tmp5(flag2[12]);
    intl6 = tmp7(tmp6[10]).intl;
    items8 = [tmp.share, ];
    const obj19 = { backgroundColor: color };
    items8[1] = obj19;
    items7[1] = closure_7(tmp5Result5, obj18);
    tmp28Result = closure_8(link, obj10);
  } else {
    const obj20 = { style: items9, children: items10 };
    items9 = [items, tmp.routeControls];
    const obj21 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: intl9.string(require("intl").t["13/7kX"]), accessibilityState: obj22, children: closure_7(ArrowSmallLeftIcon, obj23) };
    intl9 = tmp7(tmp6[10]).intl;
    obj22 = { disabled: backDisabled };
    ArrowSmallLeftIcon = tmp7(tmp6[18]).ArrowSmallLeftIcon;
    const tmp28 = closure_8;
    const tmp29 = link;
    const tmp31 = nextBlockedTrait;
    if (!backDisabled) {
      token = closure_5;
    }
    obj23 = { size: "custom", color: token, style: tmp.controlIcon };
    items10 = [closure_7(tmp31, obj21), ];
    const obj24 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", label: stringResult1, onPress: handleNextPress, disabled: flag || flag2, loading: flag2, accessibilityHint: tmp14, accessibilityLabel: tmp15, accessibilityState: obj25, style: iconButton };
    tmp14 = undefined;
    const tmp5Result6 = tmp5(flag2[12]);
    if (flag) {
      if (!flag2) {
        tmp14 = nitroLockedMessage;
      }
    }
    tmp15 = stringResult1;
    if (stringResult1 == null) {
      tmp15 = stringResult;
    }
    if (!flag) {
      flag = flag2;
    }
    iconButton = undefined;
    obj25 = { disabled: flag };
    if (null == stringResult1) {
      iconButton = tmp.iconButton;
    }
    items10[1] = closure_7(tmp5Result6, obj24);
    tmp28Result = tmp28(tmp29, obj20);
  }
  return tmp28Result;
};
