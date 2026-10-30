// Module ID: 13651
// Function ID: 13652
// Name: CheckpointNavigationControls
// Dependencies: [17, 6061, 1072, 21, 5009, 575, 6429, 13641, 1626, 5591, 1114, 6430, 13652, 8839, 13587, 3091, 5704, 2062, 10212, 10881, 10791, 2]
// Exports: default

// Module 13651 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13641 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let CHECKPOINT_CONTROL_SIZE;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, editControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, editIcon: { width: 20, height: 20 }, share: obj3 };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_64 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(onShare) {
  let ArrowSmallLeftIcon;
  let activeRoute;
  let backDisabled;
  let color;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let nitroLockedMessage;
  let obj11;
  let obj15;
  let obj16;
  let obj18;
  let obj5;
  let obj7;
  let onBack;
  let shadowColor;
  let stringResult1;
  let tmp12;
  let tmp24Result;
  ({ activeRoute, onBack, onNext: require, color } = onShare);
  onShare = onShare.onShare;
  if (color === undefined) {
    color = closure_5;
  }
  ({ backDisabled, shadowColor } = onShare);
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = onShare.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onShare.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = onShare.nextBlockedTrait;
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
    const obj3 = { style: items1, children: items2 };
    items1 = [items, tmp.homeContainer];
    const obj4 = { Icon: require("PlayIcon").PlayIcon, label: intl6.string(require("intl").t.I0v0Qv), onPress: handleNextPress, disabled: flag2, accessibilityState: obj5 };
    const tmp5Result = tmp5(flag2[12]);
    intl6 = tmp7(tmp6[10]).intl;
    obj5 = { disabled: flag2 };
    items2 = [closure_7(tmp5Result, obj4), ];
    const obj6 = { variant: "text-sm/medium", children: intl7.format(tmp5(flag2[15]).hcNhyq, obj7) };
    const tmp5Result4 = tmp5(flag2[14]);
    intl7 = tmp7(tmp6[10]).intl;
    obj7 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "text-sm/medium",
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
    items2[1] = closure_7(tmp5Result4, obj6);
    tmp24Result = closure_8(link, obj3);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj8 = { style: items3, children: items5 };
    items3 = [items, tmp.routeControls];
    const obj9 = { style: items4, onPress: onBack, accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t.bt75uw), children: closure_7(require("PencilIcon").PencilIcon, obj11) };
    items4 = [, , ];
    ({ control: arr4[0], editControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    intl4 = tmp7(tmp6[10]).intl;
    obj11 = { size: "custom", color, style: tmp.editIcon };
    items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { label: intl5.string(require("intl").t.RDE0Sc), onPress: onShare, color, borderColor: color, shadowColor, style: tmp.share };
    const tmp5Result5 = tmp5(flag2[12]);
    intl5 = tmp7(tmp6[10]).intl;
    items5[1] = closure_7(tmp5Result5, obj12);
    tmp24Result = closure_8(link, obj8);
  } else {
    const obj13 = { style: items6, children: items7 };
    items6 = [items, tmp.routeControls];
    const obj14 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: intl8.string(require("intl").t["13/7kX"]), accessibilityState: obj15, children: closure_7(ArrowSmallLeftIcon, obj16) };
    intl8 = tmp7(tmp6[10]).intl;
    obj15 = { disabled: backDisabled };
    ArrowSmallLeftIcon = tmp7(tmp6[19]).ArrowSmallLeftIcon;
    const tmp24 = closure_8;
    const tmp25 = link;
    const tmp27 = nextBlockedTrait;
    if (!backDisabled) {
      token = closure_5;
    }
    obj16 = { color: token };
    items7 = [closure_7(tmp27, obj14), ];
    const obj17 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: flag || flag2, loading: flag2, accessibilityHint: tmp12, accessibilityLabel: stringResult1, accessibilityState: obj18 };
    tmp12 = undefined;
    const tmp5Result6 = tmp5(flag2[12]);
    if (flag) {
      if (!flag2) {
        tmp12 = nitroLockedMessage;
      }
    }
    if (stringResult1 == null) {
      stringResult1 = stringResult;
    }
    if (!flag) {
      flag = flag2;
    }
    obj18 = { disabled: flag };
    items7[1] = closure_7(tmp5Result6, obj17);
    tmp24Result = tmp24(tmp25, obj13);
  }
  return tmp24Result;
};
