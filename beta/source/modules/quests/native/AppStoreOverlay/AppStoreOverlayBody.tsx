// Module ID: 10725
// Function ID: 10726
// Name: AppStoreOverlayBody
// Dependencies: [19, 17, 1074, 6572, 21, 4836, 576, 7131, 5899, 4832, 10726, 1115, 10729, 10734, 1613, 4531, 672, 5293, 5281, 2]
// Exports: AppStoreOverlayBody, AppStoreOverlayFooter

// Module 10725 (AppStoreOverlayBody)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel" /* 10726 */;
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel" /* 10729 */;
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection" /* 10734 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
let closure_6 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithHeader: { paddingTop: 110 }, iconContainer: size, icon: { width: 72, height: 72 }, textBlock: obj3, mediaSection: obj4, header: { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 }, footer: obj5, footerGradient: { position: "absolute", top: -32, right: 0, left: 0, height: 32 } };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: 84, height: 84, borderRadius: nativeDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = function AppStoreOverlayBody(arg0) {
  let intl;
  let items3;
  let items4;
  let items5;
  let metadata;
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  let onCarouselScroll;
  let onMediaGetGamePress;
  let onOpenReviews;
  let onOverlaySurfaceClick;
  ({ metadata, onCarouselScroll, onOverlaySurfaceClick } = arg0);
  ({ onOpenReviews, onMediaGetGamePress } = arg0);
  const tmp = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  const items = [onOverlaySurfaceClick];
  let tmp6 = null != headerUrl;
  const callback = react.useCallback(() => {
    if (onOverlaySurfaceClick != null) {
      tmp(AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE);
    }
  }, items);
  const tmp5 = closure_9;
  if (tmp6) {
    const obj = { style: tmp.header, children: closure_7(FastImageDefault, obj2) };
    obj2 = { source: obj3, style: tmp.header, accessibilityIgnoresInvertColors: true };
    obj3 = { uri: headerUrl };
    tmp6 = closure_7(View, obj);
  }
  const items1 = [tmp6, ];
  const items2 = [tmp.container, ];
  const obj4 = { style: items2, children: items3 };
  const tmp12 = null != headerUrl && tmp.containerWithHeader;
  items2[1] = tmp12;
  let tmp13 = null != metadata.iconUrl && "" !== metadata.iconUrl;
  if (tmp13) {
    const obj5 = { style: tmp.iconContainer, children: closure_7(FastImageDefault, obj6) };
    obj6 = { source: obj7, style: tmp.icon, accessibilityIgnoresInvertColors: true };
    obj7 = { uri: metadata.iconUrl };
    tmp13 = closure_7(tmp11, obj5);
  }
  items3 = [tmp13, , , , ];
  const obj8 = { style: tmp.textBlock, children: items4 };
  items4 = [, ];
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title };
  items4[0] = closure_7(onOverlaySurfaceClick(4832).Text, obj9);
  let tmp17Result = null != metadata.subtitle && "" !== metadata.subtitle;
  if (tmp17Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp17Result = tmp17(tmp18(4832).Text, obj10);
  }
  items4[1] = tmp17Result;
  items3[1] = closure_8(View, obj8);
  let tmp17Result3 = null != metadata.stats && metadata.stats.length > 0;
  if (tmp17Result3) {
    const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews, onCarouselScroll };
    tmp17Result3 = tmp17(AppStoreOverlayStatsCarouselDefault, obj11);
  }
  items3[2] = tmp17Result3;
  let tmp4Result = null != metadata.media && metadata.media.length > 0;
  if (tmp4Result) {
    const obj12 = { style: tmp.mediaSection, children: items5 };
    const obj13 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(onOverlaySurfaceClick(1115).t["EV1W/L"]) };
    const Text = tmp18(4832).Text;
    intl = tmp18(1115).intl;
    items5 = [closure_7(Text, obj13), ];
    const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
    items5[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj14);
    tmp4Result = tmp4(tmp11, obj12);
  }
  items3[3] = tmp4Result;
  let tmp17Result4 = null != metadata.description && "" !== metadata.description;
  if (tmp17Result4) {
    const obj15 = { description: metadata.description, onSeeMorePress: callback };
    tmp17Result4 = tmp17(AppStoreOverlayAboutSectionDefault, obj15);
  }
  const obj16 = { children: items1 };
  items3[4] = tmp17Result4;
  items1[1] = closure_8(View, obj4);
  return closure_8(tmp5, obj16);
};
export const AppStoreOverlayFooter = function AppStoreOverlayFooter(arg0) {
  let Button;
  let intl;
  let items2;
  let obj5;
  let onInstallPress;
  let onLayout;
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1613)().bottom;
  let obj = bottom(4531);
  token = obj.useToken(token(576).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef672(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
  const obj2 = { style: tmp.footer, onLayout, children: items2 };
  const memo1 = react.useMemo(() => {
    const obj = { paddingBottom: Math.max(bottom, closure_6) };
    return obj;
  }, items1);
  items2 = [, ];
  const obj3 = { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: VerticalGradient.START, end: VerticalGradient.END };
  items2[0] = closure_7(token(5293), obj3);
  const obj4 = { style: memo1, children: closure_7(Button, obj5) };
  obj5 = { size: "lg", text: intl.string(bottom(1115).t.lwQdjB), onPress: onInstallPress };
  Button = bottom(5281).Button;
  intl = bottom(1115).intl;
  items2[1] = closure_7(View, obj4);
  return closure_8(View, obj2);
};
