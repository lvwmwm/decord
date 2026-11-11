// Module ID: 14431
// Function ID: 14432
// Name: CheckpointNavigationControls
// Dependencies: [17, 6314, 1072, 21, 5243, 575, 6681, 14432, 6682, 14433, 14434, 14430, 14435, 1627, 5839, 1113, 14436, 7540, 14164, 3269, 5949, 2185, 14437, 11034, 12200, 10857, 2]
// Exports: default

// Module 14431 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 14430 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
let obj5;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, controlIcon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, iconButton: { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 }, labelButton: obj3, summaryActions: obj4, summaryControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, share: obj5, buttonLabel: { fontSize: 18, lineHeight: 24 } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_40 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(nextDisabled) {
  let ArrowSmallLeftIcon;
  let activeRoute;
  let backDisabled;
  let color;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
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
  let obj11;
  let obj14;
  let obj19;
  let obj20;
  let obj22;
  let obj4;
  let obj6;
  let onBack;
  let onReplay;
  let onShare;
  let shadowColor;
  let stringResult1;
  let tmp25;
  let tmp26;
  let tmp47Result;
  let tmp5Result;
  ({ activeRoute, onNext: require, color } = nextDisabled);
  ({ onBack, onReplay, onShare } = nextDisabled);
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
  const tmp7 = flag(flag2[7]);
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    tmp5Result = tmp5(tmp6[9]);
  } else {
    tmp5Result = tmp5(tmp6[10]);
  }
  const tmp10 = flag || flag2;
  const tmp7Result = tmp7(tmp5Result, function handleNextPress() {
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
  }, tmp10);
  const tmp5Result7 = tmp5(flag2[7]);
  const tmp5Result1Result = tmp5Result7(tmp5(flag2[12]), onBack);
  const tmp5Result8 = tmp5(flag2[7]);
  const tmp5Result2Result = tmp5Result8(tmp5(flag2[10]), onReplay);
  const rect = tmp5(tmp6[13])();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  const tmp8Result = require("useToken");
  let token = tmp8Result.useToken("text-subtle");
  const tmp8Result3 = require("useToken");
  const token1 = tmp8Result3.useToken("text-overlay-dark");
  const tmp8Result4 = require("useToken");
  const token2 = tmp8Result4.useToken(tmp5(tmp6[5]).colors.BLACK);
  const intl = tmp8(tmp6[15]).intl;
  const stringResult = intl.string(require("intl").t.PDTjLN);
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl2 = tmp8(tmp6[15]).intl;
    stringResult1 = intl2.string(require("intl").t["R3BPH+"]);
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj2 = { style: items1, children: items2 };
    items1 = [items, tmp.homeContainer];
    const obj3 = { Icon: require("PlayIcon").PlayIcon, label: intl6.string(require("intl").t.I0v0Qv), labelVariant: "mono-md/normal", labelStyle: tmp.buttonLabel, disabled: flag2, accessibilityState: obj4, style: tmp.labelButton };
    const tmp5Result9 = tmp5(flag2[16]);
    intl6 = tmp8(tmp6[15]).intl;
    const merged = Object.assign(tmp7Result);
    obj4 = { disabled: flag2 };
    items2 = [closure_7(tmp5Result9, obj3), ];
    const obj5 = { variant: "body-sm/medium", children: intl7.format(tmp5(flag2[19]).hcNhyq, obj6) };
    const tmp5Result10 = tmp5(flag2[18]);
    intl7 = tmp8(tmp6[15]).intl;
    obj6 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "body-sm/medium",
            style: link.link,
            onPress() {
              const openURL = flag(flag2[20]).openURL;
              flag(flag2[20]);
              const obj = flag(flag2[21]);
              return openURL(obj.getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          };
          return metroImportDefault(CheckpointTextDefault, obj, arg1);
        }
    };
    items2[1] = closure_7(tmp5Result10, obj5);
    tmp47Result = closure_8(link, obj2);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj7 = { style: items3, children: items7 };
    items3 = [items, tmp.routeControls];
    const obj8 = { style: tmp.summaryActions, children: items5 };
    const obj9 = { style: items4, accessibilityRole: "button", accessibilityLabel: intl3.string(require("intl").t["13/7kX"]), children: closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj11) };
    const merged1 = Object.assign(tmp5Result1Result);
    items4 = [, , ];
    ({ control: arr4[0], summaryControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    intl3 = tmp8(tmp6[15]).intl;
    obj11 = { size: "custom", color, style: tmp.controlIcon };
    items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { style: items6, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp5(flag2[19]).u40i9u), children: closure_7(require("RetryIcon").RetryIcon, obj14) };
    const merged2 = Object.assign(tmp5Result2Result);
    items6 = [, , ];
    ({ control: arr6[0], summaryControl: arr6[1] } = tmp);
    const obj13 = { borderColor: color };
    items6[2] = obj13;
    intl4 = tmp8(tmp6[15]).intl;
    obj14 = { size: "custom", color, style: tmp.controlIcon };
    items5[1] = closure_7(nextBlockedTrait, obj12);
    items7 = [closure_8(link, obj8), ];
    const obj15 = { Icon: require("ShareIcon").ShareIcon, iconPosition: "end", label: intl5.string(require("intl").t.RDE0Sc), labelVariant: "mono-md/bold", labelStyle: tmp.buttonLabel, onPress: onShare, color: token1, borderColor: token2, shadowColor, style: items8 };
    const tmp5Result11 = tmp5(flag2[16]);
    intl5 = tmp8(tmp6[15]).intl;
    items8 = [tmp.share, ];
    const obj16 = { backgroundColor: color };
    items8[1] = obj16;
    items7[1] = closure_7(tmp5Result11, obj15);
    tmp47Result = closure_8(link, obj7);
  } else {
    const obj17 = { style: items9, children: items10 };
    items9 = [items, tmp.routeControls];
    const obj18 = { style: tmp.control, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: intl8.string(require("intl").t["13/7kX"]), accessibilityState: obj19, children: closure_7(ArrowSmallLeftIcon, obj20) };
    const merged3 = Object.assign(tmp5Result1Result);
    intl8 = tmp8(tmp6[15]).intl;
    obj19 = { disabled: backDisabled };
    ArrowSmallLeftIcon = tmp8(tmp6[22]).ArrowSmallLeftIcon;
    const tmp47 = closure_8;
    const tmp48 = link;
    const tmp50 = nextBlockedTrait;
    if (!backDisabled) {
      token = closure_5;
    }
    obj20 = { size: "custom", color: token, style: tmp.controlIcon };
    items10 = [closure_7(tmp50, obj18), ];
    const obj21 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", label: stringResult1, labelVariant: "mono-md/normal", labelStyle: tmp.buttonLabel, disabled: flag || flag2, loading: flag2, accessibilityHint: tmp25, accessibilityLabel: tmp26, accessibilityState: obj22, style: null == stringResult1 ? tmp.iconButton : tmp.labelButton };
    const tmp5Result12 = tmp5(flag2[16]);
    const merged4 = Object.assign(tmp7Result);
    tmp25 = undefined;
    if (flag) {
      if (!flag2) {
        tmp25 = nitroLockedMessage;
      }
    }
    tmp26 = stringResult1;
    if (stringResult1 == null) {
      tmp26 = stringResult;
    }
    if (!flag) {
      flag = flag2;
    }
    obj22 = { disabled: flag };
    items10[1] = closure_7(tmp5Result12, obj21);
    tmp47Result = tmp47(tmp48, obj17);
  }
  return tmp47Result;
};
