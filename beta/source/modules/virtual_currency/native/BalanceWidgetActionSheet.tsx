// Module ID: 11398
// Function ID: 11399
// Name: BalanceWidgetActionSheet
// Dependencies: [19, 17, 1074, 2038, 21, 11399, 11400, 11401, 1115, 4477, 2108, 4508, 4489, 576, 1241, 4608, 2027, 4498, 7427, 5836, 8610, 7431, 11402, 9148, 4784, 5218, 4788, 1364, 2]
// Exports: default

// Module 11398 (BalanceWidgetActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import _mod11399 from "module_11399" /* 11399 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Fonts: closure_7, HelpdeskArticles: closure_8, ThemeTypes: closure_9 } = Constants);
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4788);
let closure_13 = createStyles.createStyles((color) => {
  const obj = { actions: { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_12, minWidth: "100%", paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, balanceHeader: null, balanceText: null, content: null, header: null, infoIconBackground: null, infoIconContainer: null, promotionalBackground: null, promotionalBackgroundContainer: null, promotionalBannerAsset: null, promotionalBannerContainer: null, promotionalBannerText: null };
  const obj2 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_12, minWidth: "100%", paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.balanceHeader = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
  const obj4 = { color, fontSize: 36, lineHeight: null, textAlignVertical: "center" };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
  let num = 44;
  if (obj5.isAndroid()) {
    num = 36;
  }
  obj4.lineHeight = num;
  obj.balanceText = obj4;
  const size = { width: "100%", height: "100%", alignItems: "center", flex: 1, marginBottom: tmp(576).space.PX_16 };
  obj.content = size;
  obj5 = PlatformUtils;
  obj.header = { width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", position: "relative", flexDirection: "column" };
  const size1 = { width: 32, height: 32, backgroundColor: tmp(576).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: tmp(576).radii.round, justifyContent: "center", alignItems: "center" };
  obj.infoIconBackground = size1;
  const rect = { position: "absolute", left: tmp(576).space.PX_16, top: tmp(576).space.PX_16, zIndex: 10 };
  obj.infoIconContainer = rect;
  const rect1 = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: tmp(576).radii.xl, bottom: -100 };
  obj.promotionalBackground = rect1;
  obj.promotionalBackgroundContainer = { flex: 1, height: 428 };
  obj.promotionalBannerAsset = { width: "100%", height: "100%" };
  const size2 = { width: "100%", height: 144, gap: tmp(576).space.PX_12, marginBottom: tmp(576).space.PX_64 };
  obj.promotionalBannerContainer = size2;
  obj.promotionalBannerText = { color, fontFamily: constants2.PRIMARY_BOLD, fontWeight: "600", fontSize: 16, lineHeight: 20, textAlign: "center" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let num = balance.balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: importDefault } = balance);
  const ref = noop.useRef(null);
  const callback = noop.useCallback(() => {
    const tmp = source(ref[9]);
    tmp(source(ref[10]).getArticleURL(constants.ORBS_FAQ));
  }, []);
  const enabled = noop.useContext(num(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [num];
  const memo = noop.useMemo(() => {
    if (num == null) {
      num = 0;
    }
    let tmp = null;
    if (num > 4100) {
      const obj = { backgroundVideo: _mod11399.default, backgroundImage: _mod11400.default, bannerImage: _mod11401.default, bannerText: null };
      const intl = util.intl;
      obj.bannerText = intl.string(util.t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp6) {
    themeOverride = constants3.DARK;
  }
  const token = num(ref[12]).useToken(require("native").colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp10 = closure_13(token);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "VIEW", source, balance: num });
    const obj2 = { type: "VIEW", source, balance: num };
    if (!obj3.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL)) {
      const obj4 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = tmp3(4608).UNSAFE_markDismissibleContentAsDismissed(tmp3(2027).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL, obj4);
      const tmp3Result = tmp3(4608);
    }
  }, []);
  let obj2 = { theme: themeOverride, children: null };
  const obj3 = {
    ref,
    startExpanded: true,
    handleComponent() {
      return closure_1_11(closure_1_4, {});
    },
    handleDisabled: false,
    children: null
  };
  const items1 = [tmp10.content, ];
  let promotionalBackgroundContainer = null != memo;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp10.promotionalBackgroundContainer;
  }
  let obj4 = { style: items1, children: null };
  items1[1] = promotionalBackgroundContainer;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp15, , , , , ];
    const obj5 = {
      onPress() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }
    };
    items2[1] = tmp12(tmp3(tmp4[21]).ActionSheetHeaderBar, obj5);
    const obj6 = { style: tmp10.infoIconContainer, children: null };
    const obj7 = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, children: null };
    let intl = tmp3(tmp4[8]).intl;
    obj7.accessibilityLabel = intl.string(tmp3(tmp4[8]).t.B1oJtQ);
    const obj8 = { style: tmp10.infoIconBackground, children: null };
    const obj9 = { size: "sm", color: tmp8(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj8.children = tmp12(tmp3(tmp4[22]).CircleQuestionIcon, obj9);
    obj7.children = tmp12(tmp14, obj8);
    obj6.children = tmp12(closure_5, obj7);
    items2[2] = tmp12(tmp14, obj6);
    const obj10 = { style: tmp10.header, children: null };
    const obj11 = { style: tmp10.balanceHeader, children: null };
    const obj12 = { size: "lg", color: token };
    const items3 = [tmp12(tmp3(tmp4[23]).OrbsIcon, obj12), ];
    const obj13 = { variant: "display-md", style: tmp10.balanceText, accessibilityLabel: null, children: null };
    const intl2 = tmp3(tmp4[8]).intl;
    let num2 = num;
    if (num == null) {
      num2 = 0;
    }
    const obj14 = { orbAmount: num2 };
    obj13.accessibilityLabel = intl2.formatToPlainString(tmp3(tmp4[8]).t.W4DfeF, obj14);
    if (num == null) {
      num = 0;
    }
    obj13.children = num;
    items3[1] = tmp12(tmp3(tmp4[24]).Text, obj13);
    obj11.children = items3;
    obj10.children = tmp13(tmp14, obj11);
    items2[3] = tmp12(tmp14, obj10);
    let tmp13Result = null != memo && null != memo.bannerImage;
    if (tmp13Result) {
      const obj15 = { style: tmp10.promotionalBannerContainer, children: null };
      const obj16 = { source: null, style: null, resizeMode: "contain" };
      const obj17 = { uri: memo.bannerImage };
      obj16.source = obj17;
      obj16.style = tmp10.promotionalBannerAsset;
      const items4 = [tmp12(tmp8(tmp4[19]), obj16), ];
      let tmp12Result = null != memo.bannerText;
      if (tmp12Result) {
        tmp12Result = "" !== memo.bannerText;
      }
      if (tmp12Result) {
        const obj18 = { variant: "heading-xl/medium", style: tmp10.promotionalBannerText, children: memo.bannerText };
        tmp12Result = tmp12(tmp3(tmp4[24]).Text, obj18);
      }
      items4[1] = tmp12Result;
      obj15.children = items4;
      tmp13Result = tmp13(tmp14, obj15);
    }
    items2[4] = tmp13Result;
    const obj19 = { style: tmp10.actions, children: null };
    ({ buttonText: obj25.text, onButtonPress: obj25.onPress } = primaryButtonConfig);
    const items5 = [tmp12(tmp3(tmp4[25]).Button, { text: null, variant: "primary", size: "lg", onPress: null }), ];
    ({ buttonText: obj26.text, onButtonPress: obj26.onPress } = secondaryButtonConfig);
    items5[1] = tmp12(tmp3(tmp4[25]).Button, { text: null, variant: "tertiary", size: "lg", onPress: null });
    obj19.children = items5;
    items2[5] = tmp13(tmp14, obj19);
    obj4.children = items2;
    obj3.children = tmp13(tmp14, obj4);
    obj2.children = tmp12(tmp3(tmp4[18]).BottomSheet, obj3);
    return tmp12(tmp3(tmp4[17]).ThemeContextProvider, obj2);
  } else if (enabled) {
    const obj22 = { source: null, style: null, resizeMode: "cover" };
    const obj23 = { uri: memo.backgroundImage };
    obj22.source = obj23;
    obj22.style = tmp10.promotionalBackground;
    let tmp12Result2 = tmp12(tmp8(tmp4[19]), obj22);
  } else {
    const obj24 = { source: null, poster: null, style: null, muted: true, disableFocus: true, pauseWhileAppInactive: true, paused: null, posterResizeMode: "cover", resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
    const obj50 = { uri: memo.backgroundVideo };
    obj24.source = obj50;
    obj24.poster = memo.backgroundImage;
    obj24.style = tmp10.promotionalBackground;
    obj24.paused = enabled;
    tmp12Result2 = tmp12(tmp3(tmp4[20]).VideoComponent, obj24);
  }
};
