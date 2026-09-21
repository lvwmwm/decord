// Module ID: 8451
// Function ID: 8452
// Name: ProductDetailsActionSheet
// Dependencies: [109, 32, 19, 17, 7789, 1080, 1078, 1089, 21, 3, 4758, 580, 5193, 4471, 558, 568, 4610, 1119, 7211, 1977, 8452, 8453, 8450, 7800, 9477, 7429, 7409, 13442, 11388, 9045, 1253, 9046, 1245, 504, 13443, 9109, 9111, 7801, 9113, 9114, 9116, 13444, 13454, 13459, 1181, 6863, 13460, 13471, 7397, 9151, 11031, 8506, 5188, 13474, 8448, 2]

// Module 8451 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7800 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9045 */;
import useCollectiblesShopProducts from "useCollectiblesShopProducts" /* 9151 */;
import useFetchCollectiblesCategoriesAndPurchases from "useFetchCollectiblesCategoriesAndPurchases" /* 11031 */;
import ProductDetailsActionSheetSkeletonDefault from "ProductDetailsActionSheetSkeleton" /* 13474 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7789 */;

const Sheet_BottomSheet = tmp(7397);
require = fn;
let closure_3 = ["shopAnalyticsContext"];
let noop = fn(19);
({ useCallback: closure_7, useMemo: closure_8 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1080).ShopCtaEnum;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = {};
const logger = new LoggerDefault("ProductDetailsActionSheet");
const createStyles = fn(4758);
let obj = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
const rect = { position: "absolute", top: 0, right: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.actionButtons = rect;
let size = { width: fn(5193).MEDIUM_BUTTON_HEIGHT, height: fn(5193).MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj.previewProfileButton = size;
let obj3 = { backgroundColor: null };
let native = fn(4471);
obj3.backgroundColor = native.setColorOpacity("white", 0.72);
obj.previewProfileButtonLight = obj3;
let obj4 = { backgroundColor: null };
native = fn(4471);
obj4.backgroundColor = native.setColorOpacity("white", 0.62);
obj.previewProfileButtonLightPressed = obj4;
let tmp5 = new LoggerDefault("ProductDetailsActionSheet");
obj.previewProfileButtonDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewProfileButtonDarkPressed = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
let obj6 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj.previewProfileButtonMidnight = { borderColor: nativeDefault.colors.BORDER_STRONG };
const rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
obj.badgeWrapper = rect1;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((handlePreviewPress) => {
  const cResult = handlePreviewPress(568).c(14);
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp4 = closure_19();
  dependencyMap = tmp4;
  const obj = handlePreviewPress(568);
  const theme = handlePreviewPress(4471).useThemeContext().theme;
  const obj2 = handlePreviewPress(4471);
  const isThemeLightResult = handlePreviewPress(4610).isThemeLight(theme);
  closure_3 = tmp6;
  const tmp7 = isThemeLightResult ? tmp4.previewProfileButtonLight : tmp4.previewProfileButtonDark;
  closure_4 = tmp7;
  const tmp8 = isThemeLightResult ? tmp4.previewProfileButtonLightPressed : tmp4.previewProfileButtonDarkPressed;
  closure_5 = tmp8;
  if (cResult[0] === handlePreviewPress) {
    if (cResult[1] === onTrackPress) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp4.previewProfileButton) {
          if (cResult[6] === tmp4.previewProfileButtonMidnight) {
            if (cResult[7] === tmp7) {
              let tmp10 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1119).intl;
              const stringResult = intl.string(tmp(1119).t["3Qcx6K"]);
              const obj4 = { size: "md", color: onTrackPress(580).colors.INTERACTIVE_ICON_DEFAULT };
              const tmp17 = closure_15(tmp(7211).EyeIcon, obj4);
              cResult[9] = stringResult;
              cResult[10] = tmp17;
              let tmp13 = tmp17;
              let tmp12 = stringResult;
            } else {
              tmp12 = cResult[9];
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp10) {
                let tmp18 = cResult[13];
              }
              return tmp18;
            }
            const obj5 = { style: tmp10, onPress: tmp9, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp13 };
            const tmp21 = closure_15(closure_9, obj5);
            cResult[11] = tmp9;
            cResult[12] = tmp10;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
    }
    const fn2 = function f(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
        previewProfileButtonMidnight = closure_2.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    };
    cResult[3] = tmp6;
    cResult[4] = tmp8;
    cResult[5] = tmp4.previewProfileButton;
    cResult[6] = tmp4.previewProfileButtonMidnight;
    cResult[7] = tmp7;
    cResult[8] = fn2;
    tmp10 = fn2;
  }
  const fn = function o() {
    onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
    handlePreviewPress();
  };
  cResult[0] = handlePreviewPress;
  cResult[1] = onTrackPress;
  cResult[2] = fn;
  tmp9 = fn;
}) : ((handlePreviewPress) => {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_19();
  dependencyMap = tmp;
  const theme = handlePreviewPress(4471).useThemeContext().theme;
  const obj = handlePreviewPress(4471);
  const isThemeLightResult = handlePreviewPress(4610).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.ONYX;
  closure_4 = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
        previewProfileButtonMidnight = closure_2.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: noop.useCallback(() => {
      onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1119).intl;
  obj3.accessibilityLabel = intl.string(handlePreviewPress(1119).t["3Qcx6K"]);
  const obj2 = handlePreviewPress(4610);
  obj3.children = closure_15(handlePreviewPress(7211).EyeIcon, { size: "md", color: onTrackPress(580).colors.INTERACTIVE_ICON_DEFAULT });
  return closure_15(closure_9, obj3);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = require("c").c(8);
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const setShouldReset = product.setShouldReset;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let obj = require("c");
  const currentUser = require("useCurrentUser").useCurrentUser();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === product) {
      if (cResult[2] === setShouldReset) {
        if (cResult[3] === shopAnalyticsContext) {
          if (cResult[4] === stageCollectibleChangeForEditProfile) {
            if (cResult[5] === currentUser.id) {
              if (cResult[6] === variantIndex) {
                let tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
      }
    }
  }
  const fn = function o() {
    setShouldReset(false);
    showUserProfileActionSheetDefault({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        if (null == stageCollectibleChangeForEditProfile) {
          const obj2 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(analyticsLocations[22]).openProductDetailsActionSheet(obj2);
          const obj4 = product(analyticsLocations[22]);
        } else {
          const obj5 = { skuId: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null, stageCollectibleChangeForEditProfile: null };
          const obj = product(analyticsLocations[22]);
          obj5.skuId = product(analyticsLocations[23]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(analyticsLocations[23]);
        }
      }
    });
  };
  cResult[0] = analyticsLocations;
  cResult[1] = product;
  cResult[2] = setShouldReset;
  cResult[3] = shopAnalyticsContext;
  cResult[4] = stageCollectibleChangeForEditProfile;
  cResult[5] = currentUser.id;
  cResult[6] = variantIndex;
  cResult[7] = fn;
  tmp3 = fn;
}) : ((product) => {
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  const analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const setShouldReset = product.setShouldReset;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const currentUser = require("useCurrentUser").useCurrentUser();
  const items = [product, variantIndex, setShouldReset, currentUser.id, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile];
  return currentUser.useCallback(() => {
    setShouldReset(false);
    showUserProfileActionSheetDefault({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        if (null == stageCollectibleChangeForEditProfile) {
          const obj2 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(analyticsLocations[22]).openProductDetailsActionSheet(obj2);
          const obj4 = product(analyticsLocations[22]);
        } else {
          const obj5 = { skuId: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null, stageCollectibleChangeForEditProfile: null };
          const obj = product(analyticsLocations[22]);
          obj5.skuId = product(analyticsLocations[23]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(analyticsLocations[23]);
        }
      }
    });
  }, items);
});
ReactCompilerGating = fn(558);
let closure_22 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((product, ref) => {
  const cResult = require("c").c(109);
  product = product.product;
  require = product;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = product);
  let num = 0;
  if (undefined !== initialVariantIndex) {
    num = initialVariantIndex;
  }
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ProductDetailsActionSheetInner" };
    cResult[2] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[2];
  }
  const OTPACOMOrderExperiment = tmp(tmp2[24]).OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig(tmp5);
  closure_19();
  ref = noop.useRef(null);
  if (cResult[3] !== tmp4) {
    const items1 = [];
    items1[HermesBuiltin.arraySpread(tmp4, 0)] = require("AnalyticsLocation").COLLECTIBLES_SHOP_PROFILE_PREVIEW;
    cResult[3] = tmp4;
    cResult[4] = items1;
    let tmp9 = items1;
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp4, 0);
  } else {
    tmp9 = cResult[4];
  }
  const analyticsLocations2 = require("useAnalyticsLocations")(tmp9).analyticsLocations;
  const tmp16 = trackPdpClick(noop.useState(true), 2);
  closure_3 = tmp17;
  if (cResult[5] !== product) {
    const productSkuIds = tmp(tmp2[23]).getProductSkuIds(product);
    cResult[5] = product;
    cResult[6] = productSkuIds;
    let tmp18 = productSkuIds;
    const tmpResult = tmp(tmp2[23]);
  } else {
    tmp18 = cResult[6];
  }
  const obj = require("c");
  const tmp14 = importDefault;
  let first = trackPdpClick(noop.useState(num), 2)[0];
  if (cResult[7] === product) {
    if (cResult[8] === first) {
      let tmp22 = cResult[9];
    }
    closure_4 = tmp22;
    if (cResult[10] === analyticsLocations2) {
      if (cResult[11] === tmp18) {
        if (cResult[12] === tmp22.skuId) {
          let tmp24 = cResult[13];
        }
        trackPdpClick = tmp(tmp2[27]).useTrackPdpClick(tmp24);
        if (cResult[14] !== trackPdpClick) {
          const fn = function j() {
            return {
              scrollToEnd() {
                const current = ref.current;
                let scrollToEndResult;
                if (current != null) {
                  scrollToEndResult = current.scrollToEnd({ animated: true });
                }
                return scrollToEndResult;
              },
              notifyDismissed() {
                return trackPdpClick(constants.CLOSE_DETAIL);
              }
            };
          };
          const items2 = [trackPdpClick];
          cResult[14] = trackPdpClick;
          cResult[15] = items2;
          cResult[16] = fn;
          let tmp27 = fn;
          let tmp26 = items2;
        } else {
          tmp26 = cResult[15];
          tmp27 = cResult[16];
        }
        const imperativeHandle = obj3.useImperativeHandle(ref, tmp27, tmp26);
        const tmpResult8 = tmp(tmp2[27]);
        [tmp31, tmp32] = tmp15(obj3.useState(undefined), 2);
        noop = tmp32;
        const tmp15Result7 = tmp15(obj3.useState(undefined), 2);
        if (tmp22.skuId !== tmp15Result8[0]) {
          tmp34(tmp22.skuId);
          tmp32(undefined);
        }
        tmp15Result8 = tmp15(obj3.useState(tmp22.skuId), 2);
        const previewCollectibleProduct = tmp(tmp2[28]).usePreviewCollectibleProduct(tmp22, tmp16[0], tmp31);
        const tmpResult9 = tmp(tmp2[28]);
        const collectiblesAnalyticsContext = tmp(tmp2[29]).useCollectiblesAnalyticsContext();
        let cardId;
        if (collectiblesAnalyticsContext != null) {
          cardId = collectiblesAnalyticsContext.cardId;
        }
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        if (cResult[17] === analyticsLocations2) {
          if (cResult[18] === tmp18) {
            if (cResult[19] === tmp22.skuId) {
              if (cResult[20] === cardId) {
                if (cResult[21] === tilePosition) {
                  if (cResult[22] === sessionId) {
                    let tmp43 = cResult[23];
                  }
                  tmp14(tmp2[31])(tmp43);
                  if (cResult[24] === analyticsLocations2) {
                    if (cResult[25] === product) {
                      if (cResult[26] === stageCollectibleChangeForEditProfile) {
                        if (cResult[27] === tmp45) {
                          if (cResult[28] === first) {
                            let tmp46 = cResult[29];
                          }
                          const tmp48 = closure_21(tmp46);
                          const tmp49 = product.type === tmp(tmp2[19]).CollectiblesItemType.BUNDLE;
                          closure_7 = tmp49;
                          if (cResult[30] === tmp49) {
                            if (cResult[31] === product.items) {
                              let tmp50 = cResult[32];
                            }
                            [tmp52, closure_8] = tmp15(obj3.useState(tmp50), 2);
                            const _Symbol = Symbol;
                            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                              cResult[33] = Pe;
                            } else {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                            }
                            if (!tmp49) {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                            }
                            if (cResult[34] !== tmp52) {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                              if (tmp55) {
                                class Pe {
                                  constructor(arg0) {
                                    tmp = closure_6(product);
                                    tmp2 = closure_8(product.type);
                                    return;
                                  }
                                }
                              }
                              cResult[34] = tmp52;
                              cResult[35] = tmp55;
                            } else {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                            }
                            if (cResult[36] !== product.type) {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                              cResult[36] = product.type;
                              cResult[37] = tmp58;
                            } else {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                            }
                            if (cResult[38] === product.skuId) {
                              class Pe {
                                constructor(arg0) {
                                  tmp = closure_6(product);
                                  tmp2 = closure_8(product.type);
                                  return;
                                }
                              }
                              const effect = obj3.useEffect(tmp59, tmp60);
                              const theme = tmp(tmp2[13]).useThemeContext().theme;
                              if (cResult[42] !== theme) {
                                class Pe {
                                  constructor(arg0) {
                                    tmp = closure_6(product);
                                    tmp2 = closure_8(product.type);
                                    return;
                                  }
                                }
                                const isThemeDarkResult = obj14.isThemeDark(theme);
                                cResult[42] = theme;
                                cResult[43] = isThemeDarkResult;
                              } else {
                                class Pe {
                                  constructor(arg0) {
                                    tmp = closure_6(product);
                                    tmp2 = closure_8(product.type);
                                    return;
                                  }
                                }
                              }
                              const _Symbol2 = Symbol;
                              if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                class Pe {
                                  constructor(arg0) {
                                    tmp = closure_6(product);
                                    tmp2 = closure_8(product.type);
                                    return;
                                  }
                                }
                                const items3 = [CollectiblesCategoryStore];
                                cResult[44] = items3;
                              } else {
                                class Pe {
                                  constructor(arg0) {
                                    tmp = closure_6(product);
                                    tmp2 = closure_8(product.type);
                                    return;
                                  }
                                }
                              }
                              if (cResult[45] !== product.categorySkuId) {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                                cResult[45] = product.categorySkuId;
                                cResult[46] = Be;
                              } else {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                              }
                              tmp(tmp2[33]);
                              class Se {
                                constructor() {
                                  obj = closure_1(closure_2[32]);
                                  obj1 = { type: "Collectibles Shop Details Modal", location_stack: closure_1, sku_id: product.skuId };
                                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                                  return;
                                }
                              }
                              let tmp68 = tmp22;
                              if (tmp49) {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                                if (null != tmp31) {
                                  class Be {
                                    constructor() {
                                      category = closure_11.getCategory(product.categorySkuId);
                                      unpublishedAt = undefined;
                                      if (category != null) {
                                        unpublishedAt = category.unpublishedAt;
                                      }
                                      return unpublishedAt;
                                    }
                                  }
                                  ({ skuId: tmp69[0], type: tmp69[1] } = tmp31);
                                  const items4 = [tmp31];
                                  tmp69[2] = items4;
                                  tmp68 = tmp69;
                                }
                              }
                              if (null == product.badgeOverride) {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                                if (obj15.isDynamicProduct(tmp68)) {
                                  class Be {
                                    constructor() {
                                      category = closure_11.getCategory(product.categorySkuId);
                                      unpublishedAt = undefined;
                                      if (category != null) {
                                        unpublishedAt = category.unpublishedAt;
                                      }
                                      return unpublishedAt;
                                    }
                                  }
                                }
                                if (null != tmp67) {
                                  class Be {
                                    constructor() {
                                      category = closure_11.getCategory(product.categorySkuId);
                                      unpublishedAt = undefined;
                                      if (category != null) {
                                        unpublishedAt = category.unpublishedAt;
                                      }
                                      return unpublishedAt;
                                    }
                                  }
                                  if (obj16.shouldShowLimitedTimeBadge(tmp67)) {
                                    class Be {
                                      constructor() {
                                        category = closure_11.getCategory(product.categorySkuId);
                                        unpublishedAt = undefined;
                                        if (category != null) {
                                          unpublishedAt = category.unpublishedAt;
                                        }
                                        return unpublishedAt;
                                      }
                                    }
                                  }
                                }
                                const tmpResult13 = tmp(tmp2[23]);
                                if (tmp71) {
                                  class Be {
                                    constructor() {
                                      category = closure_11.getCategory(product.categorySkuId);
                                      unpublishedAt = undefined;
                                      if (category != null) {
                                        unpublishedAt = category.unpublishedAt;
                                      }
                                      return unpublishedAt;
                                    }
                                  }
                                  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                    class Be {
                                      constructor() {
                                        category = closure_11.getCategory(product.categorySkuId);
                                        unpublishedAt = undefined;
                                        if (category != null) {
                                          unpublishedAt = category.unpublishedAt;
                                        }
                                        return unpublishedAt;
                                      }
                                    }
                                    const stringResult = obj18.string(tmp(tmp2[17]).t["0TmQRG"]);
                                    cResult[53] = stringResult;
                                    const tmp72 = stringResult;
                                  } else {
                                    class Be {
                                      constructor() {
                                        category = closure_11.getCategory(product.categorySkuId);
                                        unpublishedAt = undefined;
                                        if (category != null) {
                                          unpublishedAt = category.unpublishedAt;
                                        }
                                        return unpublishedAt;
                                      }
                                    }
                                  }
                                  if (cResult[54] !== tmp62) {
                                    class Be {
                                      constructor() {
                                        category = closure_11.getCategory(product.categorySkuId);
                                        unpublishedAt = undefined;
                                        if (category != null) {
                                          unpublishedAt = category.unpublishedAt;
                                        }
                                        return unpublishedAt;
                                      }
                                    }
                                    const obj4 = { icon: tmp(tmp2[39]).OrbsIcon, label: tmp72, isDark: tmp62 };
                                    cResult[54] = tmp62;
                                    cResult[55] = closure_15(tmp(tmp2[35]).IconTextBadge, obj4);
                                    class Se {
                                      constructor() {
                                        obj = closure_1(closure_2[32]);
                                        obj1 = { type: "Collectibles Shop Details Modal", location_stack: closure_1, sku_id: product.skuId };
                                        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                                        return;
                                      }
                                    }
                                    const tmp75 = closure_15(tmp(tmp2[35]).IconTextBadge, obj4);
                                  } else {
                                    class Be {
                                      constructor() {
                                        category = closure_11.getCategory(product.categorySkuId);
                                        unpublishedAt = undefined;
                                        if (category != null) {
                                          unpublishedAt = category.unpublishedAt;
                                        }
                                        return unpublishedAt;
                                      }
                                    }
                                  }
                                }
                                tmp71 = tmp(tmp2[23]).isOrbsExclusiveProduct(tmp22) && !product.hideBadge;
                              }
                              const tmpResult11 = tmp(tmp2[13]);
                              [r10401, closure_9] = tmp15(obj3.useState(false), 2);
                              const tmp15Result10 = tmp15(obj3.useState(false), 2);
                              [r10406, closure_10] = tmp15(obj3.useState(null), 2);
                              const tmp15Result11 = tmp15(obj3.useState(null), 2);
                              [r10411, CollectiblesCategoryStore] = tmp15(obj3.useState(0), 2);
                              if (cResult[56] === tmp48) {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                              }
                              let tmp81 = tmp54;
                              if (tmp54) {
                                class Be {
                                  constructor() {
                                    category = closure_11.getCategory(product.categorySkuId);
                                    unpublishedAt = undefined;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                }
                                const obj5 = { handlePreviewPress: tmp48, onTrackPress: trackPdpClick };
                                tmp81 = closure_15(closure_20, obj5);
                              }
                              cResult[56] = tmp48;
                              cResult[57] = tmp54;
                              cResult[58] = trackPdpClick;
                              cResult[59] = tmp81;
                              const tmp15Result12 = tmp15(obj3.useState(0), 2);
                            }
                            class Se {
                              constructor() {
                                obj = closure_1(closure_2[32]);
                                obj1 = { type: "Collectibles Shop Details Modal", location_stack: closure_1, sku_id: product.skuId };
                                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                                return;
                              }
                            }
                            const items5 = [tmp4, product.skuId];
                            cResult[38] = product.skuId;
                            cResult[39] = tmp4;
                            cResult[40] = Se;
                            cResult[41] = items5;
                            const tmp15Result9 = tmp15(obj3.useState(tmp50), 2);
                            tmp59 = Se;
                            tmp60 = items5;
                          }
                          function ue() {
                            let tmp;
                            if (closure_7) {
                              const first = product.items[0];
                              let type;
                              if (first != null) {
                                type = first.type;
                              }
                              tmp = type;
                            }
                            return tmp;
                          }
                          cResult[30] = tmp49;
                          cResult[32] = ue;
                          tmp50 = ue;
                        }
                      }
                    }
                  }
                  const obj6 = { product, variantIndex: first, analyticsLocations: analyticsLocations2, setShouldReset: tmp17, shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile: null };
                  cResult[24] = analyticsLocations2;
                  cResult[25] = product;
                  cResult[26] = stageCollectibleChangeForEditProfile;
                  cResult[27] = collectiblesAnalyticsContext;
                  cResult[28] = first;
                  cResult[29] = obj6;
                  tmp46 = obj6;
                }
              }
            }
          }
        }
        const obj7 = { type: tmp(tmp2[30]).ImpressionTypes.HALFSHEET, name: tmp(tmp2[30]).ImpressionNames.SHOP_PRODUCT_DETAIL, properties: null };
        const obj8 = { sku_id: tmp22.skuId, location_stack: analyticsLocations2, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp18 };
        obj7.properties = obj8;
        cResult[17] = analyticsLocations2;
        cResult[18] = tmp18;
        cResult[19] = tmp22.skuId;
        cResult[20] = cardId;
        cResult[21] = tilePosition;
        cResult[22] = sessionId;
        cResult[23] = obj7;
        tmp43 = obj7;
        const tmpResult10 = tmp(tmp2[29]);
      }
    }
    const obj9 = { skuId: tmp22.skuId, productSkuIds: tmp18, analyticsLocations: analyticsLocations2 };
    cResult[10] = analyticsLocations2;
    cResult[11] = tmp18;
    cResult[12] = tmp22.skuId;
    cResult[13] = obj9;
    tmp24 = obj9;
  }
  const tmp15Result = trackPdpClick(noop.useState(num), 2);
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, first);
  cResult[7] = product;
  cResult[8] = first;
  cResult[9] = selectedProduct;
  tmp22 = selectedProduct;
}) : ((product, ref) => {
  product = product.product;
  require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations1 = product.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  ref = undefined;
  let trackPdpClick;
  noop = undefined;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = closure_19();
  ref = noop.useRef(null);
  const items = [];
  const tmp7 = analyticsLocations1(ref[26]);
  items[HermesBuiltin.arraySpread(analyticsLocations1, 0)] = analyticsLocations1(ref[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp7(items).analyticsLocations;
  const tmp10 = trackPdpClick(noop.useState(true), 2);
  closure_3 = tmp11;
  const items1 = [product];
  const tmp12 = c8(() => CollectiblesProductUtils.getProductSkuIds(product), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations1, 0);
  [tmp14, tmp15] = trackPdpClick(noop.useState(num), 2);
  const tmp13 = trackPdpClick(noop.useState(num), 2);
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, tmp14);
  const obj2 = require("CollectiblesProductUtils");
  trackPdpClick = require("useTrackPdpClick").useTrackPdpClick({ skuId: selectedProduct.skuId, productSkuIds: tmp12, analyticsLocations });
  const items2 = [trackPdpClick];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    scrollToEnd() {
      const current = ref.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    notifyDismissed() {
      return trackPdpClick(constants.CLOSE_DETAIL);
    }
  }), items2);
  const obj3 = require("useTrackPdpClick");
  const obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp12, analyticsLocations };
  [tmp20, tmp21] = trackPdpClick(noop.useState(undefined), 2);
  noop = tmp21;
  const tmp19 = trackPdpClick(noop.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  tmp22 = trackPdpClick(noop.useState(selectedProduct.skuId), 2);
  const previewCollectibleProduct = require("usePreviewCollectiblesProduct").usePreviewCollectibleProduct(selectedProduct, tmp10[0], tmp20);
  const tmpResult = require("usePreviewCollectiblesProduct");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const obj5 = { type: null, name: null, properties: null };
  const tmpResult8 = require("CollectiblesAnalyticsContext");
  obj5.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj5.name = require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL;
  const obj6 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: null, position_in_section: null, shop_session_id: null, product_sku_ids: null };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj6.card_id = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj6.position_in_section = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj6.shop_session_id = sessionId;
  obj6.product_sku_ids = tmp12;
  obj5.properties = obj6;
  analyticsLocations1(ref[31])(obj5);
  const obj7 = { product, variantIndex: tmp14, analyticsLocations, setShouldReset: tmp10[1], shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile };
  const tmp33Result = closure_21(obj7);
  const tmp35 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  closure_7 = tmp35;
  const tmp6Result = analyticsLocations1(ref[31]);
  [type, c8] = trackPdpClick(noop.useState(() => {
    let tmp;
    if (closure_7) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  const tmp37 = closure_7;
  const tmp9Result = trackPdpClick(noop.useState(() => {
    let tmp;
    if (closure_7) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  if (!tmp35) {
    type = selectedProduct.type;
  }
  let tmp39 = null != type;
  if (tmp39) {
    tmp39 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp40 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items3 = [product, tmp10[1]];
  const items4 = [analyticsLocations1, product.skuId];
  const tmp38 = closure_7((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const effect = obj.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: product.skuId });
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp37Result = tmp37(() => {
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      closure_3(false);
    }
  }, items3);
  const tmpResult9 = require("native");
  const isThemeDarkResult = require("shared").isThemeDark(tmpResult9.useThemeContext().theme);
  const tmpResult10 = require("shared");
  const items5 = [closure_11];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => {
    const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp45 = selectedProduct;
  if (tmp35) {
    tmp45 = selectedProduct;
    if (null != tmp20) {
      const obj8 = { skuId: null, type: null, items: null };
      ({ skuId: obj13.skuId, type: obj13.type } = tmp20);
      const items6 = [tmp20];
      obj8.items = items6;
      tmp45 = obj8;
    }
  }
  let tmp46 = null;
  if (null == product.badgeOverride) {
    if (tmpResult12.isDynamicProduct(tmp45)) {
      if (!hideBadge) {
        const obj9 = { accessibilityLabel: null, children: null };
        const intl = tmp(tmp2[17]).intl;
        obj9.accessibilityLabel = intl.string(tmp(tmp2[17]).t["+drfVi"]);
        const obj10 = { icon: tmp(tmp2[36]).DiceIcon, label: null, isDark: null };
        const intl2 = tmp(tmp2[17]).intl;
        obj10.label = intl2.string(tmp(tmp2[17]).t["+drfVi"]);
        obj10.isDark = isThemeDarkResult;
        obj9.children = closure_15(tmp(tmp2[35]).IconTextBadge, obj10);
        tmp46 = closure_15(tmp(tmp2[34]).DynamicBadgeTooltip, obj9);
      }
    }
    if (null != stateFromStores) {
      if (tmpResult13.shouldShowLimitedTimeBadge(stateFromStores)) {
        if (!hideBadge) {
          const obj11 = { unpublishedAt: stateFromStores };
          tmp46 = closure_15(tmp6(tmp2[38]), obj11);
        }
      }
      tmpResult13 = tmp(tmp2[37]);
    }
    tmpResult12 = tmp(tmp2[23]);
    const tmpResult14 = tmp(tmp2[23]);
    tmp46 = null;
    if (tmp49) {
      const obj12 = { icon: tmp(tmp2[39]).OrbsIcon, label: null, isDark: null };
      const intl3 = tmp(tmp2[17]).intl;
      obj12.label = intl3.string(tmp(tmp2[17]).t["0TmQRG"]);
      obj12.isDark = isThemeDarkResult;
      tmp46 = closure_15(tmp(tmp2[35]).IconTextBadge, obj12);
    }
    tmp49 = tmp(tmp2[23]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
  }
  const tmpResult11 = require("initialize");
  [tmp52, c9] = trackPdpClick(noop.useState(false), 2);
  const tmp9Result4 = trackPdpClick(noop.useState(false), 2);
  [tmp54, c10] = trackPdpClick(noop.useState(null), 2);
  const tmp9Result6 = trackPdpClick(noop.useState(0), 2);
  closure_11 = tmp9Result6[1];
  const obj14 = { value: analyticsLocations, children: null };
  const obj15 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj16 = { style: tmp4.actionButtons, children: null };
  if (tmp39) {
    const obj17 = { handlePreviewPress: tmp33Result, onTrackPress: trackPdpClick };
    tmp39 = closure_15(closure_20, obj17);
  }
  const items7 = [tmp39, closure_15(analyticsLocations1(ref[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj16.children = items7;
  const items8 = [closure_16(c10, obj16), , , , , ];
  let tmp60Result = null != tmp46;
  if (tmp60Result) {
    const obj18 = { style: tmp4.badgeWrapper, children: tmp46 };
    tmp60Result = tmp60(tmp57, obj18);
  }
  items8[1] = tmp60Result;
  items8[2] = closure_15(analyticsLocations1(ref[41]), { product: selectedProduct, handlePreviewPress: tmp33Result, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp38 });
  items8[3] = closure_15(analyticsLocations1(ref[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = closure_15(analyticsLocations1(ref[43]), { product, selectedVariantIndex: tmp14, disabled: tmp52, onVariantSelect: tmp15 });
  const tmp9Result5 = trackPdpClick(noop.useState(null), 2);
  items8[5] = closure_15(require("native").Spacer, { size: analyticsLocations1(ref[11]).space.PX_16 });
  obj15.children = items8;
  const items9 = [
    closure_16(require("BottomSheetModal").BottomSheetScrollView, obj15),
    closure_15(analyticsLocations1(ref[46]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp52,
      onStartPurchase() {
        _undefined4(selectedProduct);
        closure_11((arg0) => arg0 + 1);
        _undefined3(true);
      },
      stageCollectibleChangeForEditProfile
    }),

  ];
  let tmp60Result2 = null != tmp54;
  if (tmp60Result2) {
    const obj21 = {
      product: tmp54,
      attempt: tmp9Result6[0],
      analyticsLocations,
      onBuy: tmp37Result,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp60Result2 = tmp60(tmp6(tmp2[47]), obj21);
  }
  items9[2] = tmp60Result2;
  obj14.children = items9;
  return closure_16(require("useAnalyticsLocations").AnalyticsLocationProvider, obj14);
}));
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref1 = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    };
    const fn2 = function n() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    };
    cResult[0] = fn;
    cResult[1] = fn2;
    tmp6 = fn;
    tmp7 = fn2;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === initialVariantIndex) {
      if (cResult[4] === product) {
        if (cResult[5] === stageCollectibleChangeForEditProfile) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const ref = noop.useRef(null);
  const tmp9 = closure_1_15(Sheet_BottomSheet.BottomSheet, { scrollable: true, startExpanded: true, onExpand: tmp6, onDismiss: tmp7, ref: noop.useRef(null), children: closure_1_15(closure_22, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile }) });
  cResult[2] = analyticsLocations;
  cResult[3] = initialVariantIndex;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref1 = noop.useRef(null);
  const ref = noop.useRef(null);
  return closure_1_15(Sheet_BottomSheet.BottomSheet, {
    scrollable: true,
    startExpanded: true,
    onExpand() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    },
    onDismiss() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    },
    ref: noop.useRef(null),
    children: closure_1_15(closure_22, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  });
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(20);
  let _Math = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { needsCategory: false, seedCategoryStore: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const collectiblesShopProduct = useCollectiblesShopProducts.useCollectiblesShopProduct(_Math, first);
  ({ product, state, retry } = collectiblesShopProduct);
  const tmpResult = useCollectiblesShopProducts;
  const getOrFetchPurchases = useFetchCollectiblesCategoriesAndPurchases.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  noop.useRef(null);
  const ref1 = noop.useRef(null);
  if (null != product) {
    if (tmpResult4.getIsVariantProduct(product)) {
      if (cResult[1] === product.variants) {
        if (cResult[2] === _Math) {
          _Math = Math;
          const bound = Math.max(0, cResult[3]);
        }
      }
      if (cResult[4] !== _Math) {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
        cResult[4] = _Math;
        cResult[5] = T;
        const tmp10 = T;
      } else {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(tmp10);
      cResult[1] = product.variants;
      cResult[2] = _Math;
      cResult[3] = findIndexResult;
    }
    tmpResult4 = tmp(7800);
  }
  if ("ready" === state) {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
  }
  if ("error" === state) {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const stringResult = obj5.string(tmp(1119).t.eAn6z2);
      cResult[11] = stringResult;
      let tmp18 = stringResult;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const stringResult1 = obj6.string(tmp(1119).t["+hivLW"]);
      cResult[12] = stringResult1;
      const tmp20 = stringResult1;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
    if (cResult[13] !== retry) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const obj3 = { Illustration: tmp(8506).NoResults, body: tmp18, children: null };
      const obj4 = { text: tmp20, onPress: retry };
      tmp18 = closure_1_15(tmp(5188).Button, obj4);
      obj3.children = tmp18;
      const tmp23 = closure_1_15(tmp(1181).EmptyState, obj3);
      cResult[13] = retry;
      cResult[14] = tmp23;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
  } else {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const tmp17 = closure_1_15(ProductDetailsActionSheetSkeletonDefault, {});
      cResult[15] = tmp17;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
  }
}) : ((skuId) => {
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  const collectiblesShopProduct = skuId(9151).useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj = skuId(9151);
  const getOrFetchPurchases = skuId(11031).useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const obj2 = skuId(11031);
  const ref1 = noop.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        const obj3 = { ref: ref1, product, initialVariantIndex: tmp7, analyticsLocations, stageCollectibleChangeForEditProfile };
        const obj4 = {
          scrollable: true,
          startExpanded: true,
          onExpand() {
                  const current = ref1.current;
                  let scrollToEndResult;
                  if (current != null) {
                    scrollToEndResult = current.scrollToEnd();
                  }
                  return scrollToEndResult;
                },
          onDismiss() {
                  const current = ref1.current;
                  let notifyDismissedResult;
                  if (current != null) {
                    notifyDismissedResult = current.notifyDismissed();
                  }
                  return notifyDismissedResult;
                },
          ref,
          children: closure_15(closure_22, obj3)
        };
        return closure_15(tmp(7397).BottomSheet, obj4);
      }
    }
  }
  if ("error" === state) {
    const obj5 = { Illustration: tmp(8506).NoResults, body: null, children: null };
    const intl = tmp(1119).intl;
    obj5.body = intl.string(tmp(1119).t.eAn6z2);
    const obj6 = { text: null, onPress: null };
    const intl2 = tmp(1119).intl;
    obj6.text = intl2.string(tmp(1119).t["+hivLW"]);
    obj6.onPress = retry;
    obj5.children = closure_15(tmp(5188).Button, obj6);
    closure_15(tmp(1181).EmptyState, obj5);
  } else {
    closure_15(initialVariantIndex(13474), {});
  }
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(7);
  if (obj2.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in skuId) {
      skuId = skuId.skuId;
    } else {
      skuId = skuId.product.skuId;
    }
    if (cResult[0] === skuId.analyticsLocations) {
      if (cResult[1] === skuId.initialVariantIndex) {
        if (cResult[2] === skuId.stageCollectibleChangeForEditProfile) {
          if (cResult[3] === skuId) {
            let tmp13 = cResult[4];
          }
          return tmp13;
        }
      }
    }
    const obj3 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj4.initialVariantIndex, analyticsLocations: obj4.analyticsLocations, stageCollectibleChangeForEditProfile: obj4.stageCollectibleChangeForEditProfile } = skuId);
    const tmp16 = closure_1_15(closure_24, obj3);
    cResult[0] = skuId.analyticsLocations;
    cResult[1] = skuId.initialVariantIndex;
    cResult[2] = skuId.stageCollectibleChangeForEditProfile;
    cResult[3] = skuId;
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else if ("product" in skuId) {
    if (cResult[5] !== skuId) {
      const obj6 = {};
      const merged = Object.assign(skuId);
      const tmp11 = closure_1_15(closure_23, obj6);
      cResult[5] = skuId;
      cResult[6] = tmp11;
    }
  } else {
    logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
    return null;
  }
}) : ((arg0) => {
  stageCollectibleChangeForEditProfile = arg0;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in stageCollectibleChangeForEditProfile) {
      let skuId = stageCollectibleChangeForEditProfile.skuId;
    } else {
      skuId = stageCollectibleChangeForEditProfile.product.skuId;
    }
    const obj2 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj3.initialVariantIndex, analyticsLocations: obj3.analyticsLocations, stageCollectibleChangeForEditProfile } = stageCollectibleChangeForEditProfile);
    obj2.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
    closure_1_15(closure_24, obj2);
  } else {
    if ("product" in stageCollectibleChangeForEditProfile) {
      const obj5 = {};
      const merged = Object.assign(stageCollectibleChangeForEditProfile);
      let tmp3 = closure_1_15(closure_23, obj5);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
});
ReactCompilerGating = fn(558);
let obj8 = { borderColor: nativeDefault.colors.BORDER_STRONG };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shopAnalyticsContext) => {
  const cResult = c.c(8);
  if (cResult[0] !== shopAnalyticsContext) {
    shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
    const tmp8 = _objectWithoutProperties(shopAnalyticsContext, closure_3);
    cResult[0] = shopAnalyticsContext;
    cResult[1] = tmp8;
    cResult[2] = shopAnalyticsContext;
    let tmp5 = shopAnalyticsContext;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (undefined === tmp5) {
    tmp5 = closure_17;
  }
  if (cResult[3] !== tmp4) {
    const obj2 = {};
    const merged = Object.assign(tmp4);
    const tmp15 = closure_1_15(closure_25, obj2);
    cResult[3] = tmp4;
    cResult[4] = tmp15;
    let tmp9 = tmp15;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    if (cResult[6] === tmp9) {
      let tmp16 = cResult[7];
    }
    return tmp16;
  }
  const tmp17 = closure_1_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp5, children: tmp9 });
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((shopAnalyticsContext) => {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_17;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: null };
  const merged1 = Object.assign(merged);
  obj.children = closure_1_15(closure_25, {});
  return closure_1_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
});
