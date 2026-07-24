// Module ID: 9830
// Function ID: 76313
// Name: balance
// Dependencies: [31, 27, 653, 1345, 33, 9831, 9832, 9833, 1212, 3821, 1920, 3849, 3834, 689, 675, 3946, 1334, 3842, 5187, 5085, 8346, 5446, 9834, 8749, 4126, 4543, 4130, 477, 2]
// Exports: default

// Module 9830 (balance)
import result from "result";
import get_ActivityIndicator from "set";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, TouchableOpacity: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_6, Fonts: closure_7, HelpdeskArticles: closure_8 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((color) => {
  let obj = {};
  obj = { flex: 1, flexDirection: "column", gap: importDefault(689).space.PX_12, minWidth: "100%", paddingTop: importDefault(689).space.PX_12, paddingHorizontal: importDefault(689).space.PX_16 };
  obj.actions = obj;
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: importDefault(689).space.PX_8, flexWrap: "wrap" };
  obj.balanceHeader = obj;
  const obj1 = { color, fontSize: 36 };
  let obj4 = require(477) /* set */;
  let num = 44;
  if (obj4.isAndroid()) {
    num = 36;
  }
  obj1.lineHeight = num;
  obj1.textAlignVertical = "center";
  obj.balanceText = obj1;
  const obj2 = { width: "100%", height: "100%", alignItems: "center", flex: 1, marginBottom: importDefault(689).space.PX_16 };
  obj.content = obj2;
  const obj3 = { width: "100%", paddingTop: importDefault(689).space.PX_12, paddingBottom: importDefault(689).space.PX_16, alignItems: "center", position: "relative", flexDirection: "column" };
  obj.header = obj3;
  obj4 = { width: 32, height: 32, backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center" };
  obj.infoIconBackground = obj4;
  obj.infoIconContainer = { position: "absolute", left: importDefault(689).space.PX_16, top: importDefault(689).space.PX_16, zIndex: 10 };
  const obj6 = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: importDefault(689).radii.xl, bottom: -100 };
  obj.promotionalBackground = obj6;
  obj.promotionalBackgroundContainer = { flex: 1, height: 428 };
  obj.promotionalBannerAsset = { width: "100%", height: "100%" };
  const obj7 = { width: "100%", height: 144, gap: importDefault(689).space.PX_12, marginBottom: importDefault(689).space.PX_64 };
  obj.promotionalBannerContainer = obj7;
  const obj8 = { color, fontFamily: constants.PRIMARY_BOLD, fontWeight: "600", fontSize: 16, lineHeight: 20, textAlign: "center" };
  obj.promotionalBannerText = obj8;
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let importDefault;
  let primaryButtonConfig;
  let secondaryButtonConfig;
  let themeOverride;
  balance = balance.balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: importDefault } = balance);
  const ref = React.useRef(null);
  const callback = React.useCallback(() => {
    const tmp = outer1_1(ref[9]);
    tmp(outer1_1(ref[10]).getArticleURL(outer1_8.ORBS_FAQ));
  }, []);
  const enabled = React.useContext(balance(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [balance];
  const memo = React.useMemo(() => {
    let num = 0;
    if (null != balance) {
      num = balance;
    }
    let tmp = null;
    if (num > 4100) {
      const obj = { backgroundVideo: balance(ref[5]).default, backgroundImage: balance(ref[6]).default, bannerImage: balance(ref[7]).default };
      const intl = balance(ref[8]).intl;
      obj.bannerText = intl.string(balance(ref[8]).t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp4) {
    themeOverride = "dark";
  }
  let obj = balance(ref[12]);
  const token = obj.useToken(importDefault(ref[13]).colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp6 = callback3(token);
  const effect = React.useEffect(() => {
    let obj = outer1_1(ref[14]);
    obj = { type: "VIEW", source: closure_1, balance };
    obj.track(outer1_6.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
    if (!obj3.UNSAFE_isDismissibleContentDismissed(balance(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL)) {
      obj = { dismissAction: outer1_9.AUTO_DISMISS };
      const result = balance(ref[15]).UNSAFE_markDismissibleContentAsDismissed(balance(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL, obj);
      const obj4 = balance(ref[15]);
    }
  }, []);
  obj = { theme: themeOverride };
  obj = {
    ref,
    startExpanded: true,
    handleComponent() {
      return outer1_10(outer1_4, {});
    },
    handleDisabled: false
  };
  const obj1 = {};
  const items1 = [tmp6.content, ];
  let promotionalBackgroundContainer = null != memo;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp6.promotionalBackgroundContainer;
  }
  items1[1] = promotionalBackgroundContainer;
  obj1.style = items1;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp11, , , , , ];
    const obj2 = {
      onPress() {
          const current = ref.current;
          if (null != current) {
            current.closeActionSheet();
          }
        }
    };
    items2[1] = callback(balance(ref[21]).ActionSheetHeaderBar, obj2);
    const obj3 = { style: tmp6.infoIconContainer };
    let obj4 = { onPress: callback, accessibilityRole: "link" };
    let intl = balance(ref[8]).intl;
    obj4.accessibilityLabel = intl.string(balance(ref[8]).t.B1oJtQ);
    const obj5 = { style: tmp6.infoIconBackground };
    const obj6 = { size: "sm", color: importDefault(ref[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj5.children = callback(balance(ref[22]).CircleQuestionIcon, obj6);
    obj4.children = callback(closure_4, obj5);
    obj3.children = callback(closure_5, obj4);
    items2[2] = callback(closure_4, obj3);
    const obj7 = { style: tmp6.header };
    const obj8 = { style: tmp6.balanceHeader };
    const obj9 = { size: "lg", color: token };
    const items3 = [callback(balance(ref[23]).OrbsIcon, obj9), ];
    const obj10 = { variant: "display-md", style: tmp6.balanceText };
    const intl2 = balance(ref[8]).intl;
    const obj11 = {};
    let num8 = 0;
    if (null != balance) {
      num8 = balance;
    }
    obj11.orbAmount = num8;
    obj10.accessibilityLabel = intl2.formatToPlainString(balance(ref[8]).t.W4DfeF, obj11);
    let num9 = 0;
    if (null != balance) {
      num9 = balance;
    }
    obj10.children = num9;
    items3[1] = callback(balance(ref[24]).Text, obj10);
    obj8.children = items3;
    obj7.children = callback2(closure_4, obj8);
    items2[3] = callback(closure_4, obj7);
    let tmp27Result = null != memo && null != memo.bannerImage;
    if (tmp27Result) {
      const obj12 = { style: tmp6.promotionalBannerContainer };
      const obj13 = {};
      const obj14 = { uri: memo.bannerImage };
      obj13.source = obj14;
      obj13.style = tmp6.promotionalBannerAsset;
      obj13.resizeMode = "contain";
      const items4 = [callback(importDefault(ref[19]), obj13), ];
      let tmp32 = null != memo.bannerText;
      if (tmp32) {
        tmp32 = "" !== memo.bannerText;
      }
      if (tmp32) {
        const obj15 = { variant: "heading-xl/medium", style: tmp6.promotionalBannerText, children: memo.bannerText };
        tmp32 = callback(balance(ref[24]).Text, obj15);
      }
      items4[1] = tmp32;
      obj12.children = items4;
      tmp27Result = callback2(closure_4, obj12);
      const tmp27 = callback2;
      const tmp28 = closure_4;
    }
    items2[4] = tmp27Result;
    const obj16 = { style: tmp6.actions };
    ({ buttonText: obj24.text, onButtonPress: obj24.onPress } = primaryButtonConfig);
    const items5 = [callback(balance(ref[25]).Button, { text: null, variant: "primary", size: "lg" }), ];
    ({ buttonText: obj25.text, onButtonPress: obj25.onPress } = secondaryButtonConfig);
    items5[1] = callback(balance(ref[25]).Button, { text: null, variant: "tertiary", size: "lg" });
    obj16.children = items5;
    items2[5] = callback2(closure_4, obj16);
    obj1.children = items2;
    obj.children = callback2(closure_4, obj1);
    obj.children = tmp8(balance(ref[18]).BottomSheet, obj);
    return tmp8(balance(ref[17]).ThemeContextProvider, obj);
  } else if (enabled) {
    const obj19 = {};
    const obj20 = { uri: memo.backgroundImage };
    obj19.source = obj20;
    obj19.style = tmp6.promotionalBackground;
    obj19.resizeMode = "cover";
    let tmp12Result = tmp12(importDefault(ref[19]), obj19);
  } else {
    const obj21 = { source: null, poster: null, style: null, muted: true, disableFocus: true, pauseWhileAppInactive: true };
    const obj22 = { uri: memo.backgroundVideo };
    obj21.source = obj22;
    obj21.poster = memo.backgroundImage;
    obj21.style = tmp6.promotionalBackground;
    obj21.paused = enabled;
    obj21.posterResizeMode = "cover";
    obj21.resizeMode = "cover";
    obj21.preventsDisplaySleepDuringVideoPlayback = false;
    tmp12Result = tmp12(balance(ref[20]).VideoComponent, obj21);
  }
};
