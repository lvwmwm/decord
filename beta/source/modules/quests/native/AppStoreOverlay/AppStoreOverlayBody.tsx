// Module ID: 11626
// Function ID: 11627
// Name: AppStoreOverlayBody
// Dependencies: [19, 17, 1078, 7398, 21, 4758, 580, 558, 568, 5802, 4754, 11627, 1119, 11630, 11635, 1616, 4462, 676, 5198, 5188, 2]

// Module 11626 (AppStoreOverlayBody)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useToken from "useToken" /* 4462 */;
import Text_Text from "Text/Text" /* 4754 */;
import FastImageDefault from "FastImage" /* 5802 */;
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel" /* 11627 */;
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel" /* 11630 */;
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection" /* 11635 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1078).VerticalGradient;
let closure_6 = fn(7398).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, containerWithHeader: { paddingTop: 110 }, iconContainer: null, icon: null, textBlock: null, mediaSection: null, header: null, footer: null, footerGradient: null };
let size = { width: 84, height: 84, borderRadius: nativeDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.iconContainer = size;
obj2.icon = { width: 72, height: 72 };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.textBlock = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.mediaSection = { gap: nativeDefault.space.PX_8 };
obj2.header = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footerGradient = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(37);
  ({ metadata, onOpenReviews, onMediaGetGamePress } = arg0);
  const tmp4 = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  if (cResult[0] === headerUrl) {
    if (cResult[1] === tmp4.header) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp11) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === metadata.iconUrl) {
        if (cResult[7] === tmp4.icon) {
          if (cResult[8] === tmp4.iconContainer) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] !== metadata.title) {
            const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title };
            const tmp20 = React5(tmp(4754).Text, obj2);
            cResult[10] = metadata.title;
            cResult[11] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== metadata.subtitle) {
            let tmp22 = null != metadata.subtitle;
            if (tmp22) {
              tmp22 = "" !== metadata.subtitle;
            }
            if (tmp22) {
              const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
              tmp22 = React5(tmp(4754).Text, obj3);
            }
            cResult[12] = metadata.subtitle;
            cResult[13] = tmp22;
            let tmp21 = tmp22;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] === tmp4.textBlock) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp21) {
                let tmp24 = cResult[17];
              }
              if (cResult[18] === metadata.stats) {
                if (cResult[19] === onOpenReviews) {
                  let tmp28 = cResult[20];
                }
                if (cResult[21] === metadata.media) {
                  if (cResult[22] === onMediaGetGamePress) {
                    if (cResult[23] === tmp4.mediaSection) {
                      let tmp32 = cResult[24];
                    }
                    if (cResult[25] !== metadata.description) {
                      let tmp39 = null != metadata.description;
                      if (tmp39) {
                        tmp39 = "" !== metadata.description;
                      }
                      if (tmp39) {
                        const obj4 = { description: metadata.description };
                        tmp39 = React5(AppStoreOverlayAboutSectionDefault, obj4);
                      }
                      cResult[25] = metadata.description;
                      cResult[26] = tmp39;
                      let tmp38 = tmp39;
                    } else {
                      tmp38 = cResult[26];
                    }
                    if (cResult[27] === tmp38) {
                      if (cResult[28] === tmp12) {
                        if (cResult[29] === tmp13) {
                          if (cResult[30] === tmp24) {
                            if (cResult[31] === tmp28) {
                              if (cResult[32] === tmp32) {
                                let tmp42 = cResult[33];
                              }
                              if (cResult[34] === tmp6) {
                                if (cResult[35] === tmp42) {
                                  let tmp46 = cResult[36];
                                }
                                return tmp46;
                              }
                              const obj5 = { children: null };
                              const items = [tmp6, tmp42];
                              obj5.children = items;
                              const tmp49 = closure_1_8(options, obj5);
                              cResult[34] = tmp6;
                              cResult[35] = tmp42;
                              cResult[36] = tmp49;
                              tmp46 = tmp49;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { style: tmp12, children: null };
                    const items1 = [tmp13, tmp24, tmp28, tmp32, tmp38];
                    obj6.children = items1;
                    const tmp45 = closure_1_8(View, obj6);
                    cResult[27] = tmp38;
                    cResult[28] = tmp12;
                    cResult[29] = tmp13;
                    cResult[30] = tmp24;
                    cResult[31] = tmp28;
                    cResult[32] = tmp32;
                    cResult[33] = tmp45;
                    tmp42 = tmp45;
                  }
                }
                let tmp33 = null != metadata.media;
                if (tmp33) {
                  tmp33 = metadata.media.length > 0;
                }
                if (tmp33) {
                  const obj7 = { style: tmp4.mediaSection, children: null };
                  const obj8 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
                  const intl = tmp(1119).intl;
                  obj8.children = intl.string(tmp(1119).t["EV1W/L"]);
                  const items2 = [React5(tmp(4754).Text, obj8), ];
                  const obj9 = { media: metadata.media, onGetGamePress: onMediaGetGamePress };
                  items2[1] = React5(AppStoreOverlayMediaCarouselDefault, obj9);
                  obj7.children = items2;
                  tmp33 = closure_1_8(View, obj7);
                }
                cResult[21] = metadata.media;
                cResult[22] = onMediaGetGamePress;
                cResult[23] = tmp4.mediaSection;
                cResult[24] = tmp33;
                tmp32 = tmp33;
              }
              let tmp29 = null != metadata.stats;
              if (tmp29) {
                tmp29 = metadata.stats.length > 0;
              }
              if (tmp29) {
                const obj10 = { stats: metadata.stats, onRatingPress: onOpenReviews };
                tmp29 = React5(AppStoreOverlayStatsCarouselDefault, obj10);
              }
              cResult[18] = metadata.stats;
              cResult[19] = onOpenReviews;
              cResult[20] = tmp29;
              tmp28 = tmp29;
            }
          }
          const obj11 = { style: tmp4.textBlock, children: null };
          const items3 = [tmp18, tmp21];
          obj11.children = items3;
          const tmp27 = closure_1_8(View, obj11);
          cResult[14] = tmp4.textBlock;
          cResult[15] = tmp18;
          cResult[16] = tmp21;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      let tmp14 = null != metadata.iconUrl;
      if (tmp14) {
        tmp14 = "" !== metadata.iconUrl;
      }
      if (tmp14) {
        const obj12 = { style: tmp4.iconContainer, children: null };
        const obj13 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
        const obj14 = { uri: metadata.iconUrl };
        obj13.source = obj14;
        obj13.style = tmp4.icon;
        obj12.children = React5(FastImageDefault, obj13);
        tmp14 = React5(View, obj12);
      }
      cResult[6] = metadata.iconUrl;
      cResult[7] = tmp4.icon;
      cResult[8] = tmp4.iconContainer;
      cResult[9] = tmp14;
      tmp13 = tmp14;
    }
    const items4 = [tmp4.container, null != headerUrl && tmp4.containerWithHeader];
    cResult[3] = tmp4.container;
    cResult[4] = null != headerUrl && tmp4.containerWithHeader;
    cResult[5] = items4;
    tmp12 = items4;
  }
  let tmp7 = null != headerUrl;
  if (tmp7) {
    const obj15 = { style: tmp4.header, children: null };
    const obj16 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj17 = { uri: headerUrl };
    obj16.source = obj17;
    obj16.style = tmp4.header;
    obj15.children = React5(FastImageDefault, obj16);
    tmp7 = React5(View, obj15);
  }
  cResult[0] = headerUrl;
  cResult[1] = tmp4.header;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((metadata) => {
  metadata = metadata.metadata;
  ({ onOpenReviews, onMediaGetGamePress } = metadata);
  const tmp = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  let tmp5 = null != headerUrl;
  if (tmp5) {
    const obj = { style: tmp.header, children: null };
    const obj2 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj3 = { uri: headerUrl };
    obj2.source = obj3;
    obj2.style = tmp.header;
    obj.children = React5(FastImageDefault, obj2);
    tmp5 = React5(View, obj);
  }
  const items = [tmp5, ];
  const items1 = [tmp.container, ];
  const obj4 = { style: items1, children: null };
  items1[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp12 = null != metadata.iconUrl;
  if (tmp12) {
    tmp12 = "" !== metadata.iconUrl;
  }
  if (tmp12) {
    const obj5 = { style: tmp.iconContainer, children: null };
    const obj6 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj7 = { uri: metadata.iconUrl };
    obj6.source = obj7;
    obj6.style = tmp.icon;
    obj5.children = React5(FastImageDefault, obj6);
    tmp12 = React5(tmp10, obj5);
  }
  const items2 = [tmp12, , , , ];
  const obj8 = { style: tmp.textBlock, children: null };
  const items3 = [React5(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp16Result = null != metadata.subtitle;
  if (tmp16Result) {
    tmp16Result = "" !== metadata.subtitle;
  }
  if (tmp16Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp16Result = tmp16(tmp17(4754).Text, obj10);
  }
  items3[1] = tmp16Result;
  obj8.children = items3;
  items2[1] = closure_1_8(View, obj8);
  let tmp16Result3 = null != metadata.stats;
  if (tmp16Result3) {
    tmp16Result3 = metadata.stats.length > 0;
  }
  if (tmp16Result3) {
    const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews };
    tmp16Result3 = tmp16(AppStoreOverlayStatsCarouselDefault, obj11);
  }
  items2[2] = tmp16Result3;
  let tmp3Result = null != metadata.media;
  if (tmp3Result) {
    tmp3Result = metadata.media.length > 0;
  }
  if (tmp3Result) {
    const obj12 = { style: tmp.mediaSection, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp17(1119).intl;
    obj13.children = intl.string(tmp17(1119).t["EV1W/L"]);
    const items4 = [tmp16(tmp17(4754).Text, obj13), ];
    const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress };
    items4[1] = tmp16(AppStoreOverlayMediaCarouselDefault, obj14);
    obj12.children = items4;
    tmp3Result = tmp3(tmp10, obj12);
  }
  items2[3] = tmp3Result;
  let tmp16Result4 = null != metadata.description;
  if (tmp16Result4) {
    tmp16Result4 = "" !== metadata.description;
  }
  if (tmp16Result4) {
    const obj15 = { description: metadata.description };
    tmp16Result4 = tmp16(AppStoreOverlayAboutSectionDefault, obj15);
  }
  const obj16 = { children: null };
  items2[4] = tmp16Result4;
  obj4.children = items2;
  items[1] = closure_1_8(View, obj4);
  obj16.children = items;
  return closure_1_8(options, obj16);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = tmp3;
export const AppStoreOverlayFooter = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(21);
  ({ onInstallPress, onLayout } = arg0);
  const tmp4 = closure_10();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  if (cResult[0] !== token) {
    const obj3 = tmp5(676)(token);
    const hexResult = tmp5(676)(token).alpha(0).hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    let tmp7 = hexResult;
    const alphaResult = tmp5(676)(token).alpha(0);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp7) {
      let tmp9 = cResult[4];
    }
    const _Math = Math;
    const bound = Math.max(useSafeAreaInsetsDefault().bottom, closure_6);
    if (cResult[5] !== bound) {
      const obj4 = { paddingBottom: bound };
      cResult[5] = bound;
      cResult[6] = obj4;
      let tmp13 = obj4;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      if (cResult[8] === tmp4.footerGradient) {
        let tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t.lwQdjB);
        cResult[10] = stringResult;
        let tmp19 = stringResult;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] !== onInstallPress) {
        const obj5 = { size: "lg", text: tmp19, onPress: onInstallPress };
        const tmp23 = React5(tmp(5188).Button, obj5);
        cResult[11] = onInstallPress;
        cResult[12] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp21) {
          let tmp24 = cResult[15];
        }
        if (cResult[16] === onLayout) {
          if (cResult[17] === tmp4.footer) {
            if (cResult[18] === tmp15) {
              if (cResult[19] === tmp24) {
                let tmp28 = cResult[20];
              }
              return tmp28;
            }
          }
        }
        const obj7 = { style: tmp14, onLayout, children: null };
        const items = [tmp15, tmp24];
        obj7.children = items;
        const tmp31 = closure_1_8(View, obj7);
        cResult[16] = onLayout;
        cResult[17] = tmp4.footer;
        cResult[18] = tmp15;
        cResult[19] = tmp24;
        cResult[20] = tmp31;
        tmp28 = tmp31;
      }
      const obj8 = { style: tmp13, children: tmp21 };
      const tmp27 = React5(View, obj8);
      cResult[13] = tmp13;
      cResult[14] = tmp21;
      cResult[15] = tmp27;
      tmp24 = tmp27;
    }
    const obj9 = { pointerEvents: "none", style: tmp4.footerGradient, colors: tmp9, start: null, end: null };
    ({ START: obj6.start, END: obj6.end } = VerticalGradient);
    const tmp18 = React5(tmp5(5198), obj9);
    cResult[7] = tmp9;
    cResult[8] = tmp4.footerGradient;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp7, token];
  cResult[2] = token;
  cResult[3] = tmp7;
  cResult[4] = items1;
  tmp9 = items1;
}) : ((arg0) => {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1616)().bottom;
  token = bottom(4462).useToken(token(580).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = noop.useMemo(() => {
    const obj = _modDef676(token);
    const items = [_modDef676(token).alpha(0).hex(), token];
    return items;
  }, items);
  const obj2 = { style: tmp.footer, onLayout, children: null };
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_6) }), items1);
  const items2 = [closure_7(token(5198), { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: VerticalGradient.START, end: VerticalGradient.END }), ];
  const obj4 = { style: memo1, children: null };
  const obj5 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1119).intl;
  obj5.text = intl.string(bottom(1119).t.lwQdjB);
  obj5.onPress = onInstallPress;
  obj4.children = closure_7(bottom(5188).Button, obj5);
  items2[1] = closure_7(View, obj4);
  obj2.children = items2;
  return closure_8(View, obj2);
});
