// Module ID: 8703
// Function ID: 8704
// Name: ProductDetailsActionSheet
// Dependencies: [109, 32, 19, 17, 7685, 1086, 1084, 1095, 21, 3, 5004, 587, 5286, 5070, 558, 576, 5011, 1125, 7099, 1992, 8704, 8705, 8702, 7696, 9830, 7314, 7289, 14707, 14708, 9391, 1272, 9392, 1264, 504, 14709, 9454, 9457, 7697, 9459, 9460, 9462, 14710, 14720, 14731, 1199, 5305, 14732, 14743, 5301, 9507, 10525, 8760, 5280, 14746, 8700, 2]

// Module 8703 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1086 */;
import Constants2 from "Constants" /* 1095 */;
import intl4 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7696 */;
import ShopStandalonePdpMobileExperiment from "ShopStandalonePdpMobileExperiment" /* 8700 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8705 */;
import generated_NoResults from "generated/NoResults" /* 8760 */;
import useCollectiblesShopProducts from "useCollectiblesShopProducts" /* 9507 */;
import useFetchCollectiblesCategoriesAndPurchases from "useFetchCollectiblesCategoriesAndPurchases" /* 10525 */;
import ProductDetailsActionSheetSkeletonDefault from "ProductDetailsActionSheetSkeleton" /* 14746 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import "react";
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7685 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import native_mod from "native" /* 5070 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let c10;
let c9;
let closure_15;
let closure_16;
let metroImportAll;
let metroImportDefault;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let rect1;
let size;
let tmp;
const Sheet_BottomSheet = tmp(5301);
const CollectiblesAnalyticsContext = tmp(9391);
let closure_3 = ["shopAnalyticsContext"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useCallback: metroImportDefault, useMemo: metroImportAll } = react);
({ Pressable: c9, View: c10 } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = {};
let tmp5 = new LoggerDefault("ProductDetailsActionSheet");
const logger = tmp5;
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", flex: 1 }, actionButtons: rect, previewProfileButton: size, previewProfileButtonLight: obj2, previewProfileButtonLightPressed: obj3, previewProfileButtonDark: obj4, previewProfileButtonDarkPressed: obj5, previewProfileButtonMidnight: obj6, badgeWrapper: rect1 };
rect = { position: "absolute", top: 0, right: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: ButtonConstants.MEDIUM_BUTTON_HEIGHT, height: ButtonConstants.MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj2 = { backgroundColor: native.setColorOpacity("white", 0.72) };
native = native_mod;
obj3 = { backgroundColor: native.setColorOpacity("white", 0.62) };
native = native_mod;
obj4 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj6 = { borderColor: nativeDefault.colors.BORDER_STRONG };
rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewProfileTrigger(handlePreviewPress) {
  let closure_2;
  const obj = handlePreviewPress(576);
  const cResult = obj.c(14);
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp4 = closure_19();
  dependencyMap = tmp4;
  const obj2 = handlePreviewPress(5070);
  const theme = obj2.useThemeContext().theme;
  const obj3 = handlePreviewPress(5011);
  const isThemeLightResult = obj3.isThemeLight(theme);
  closure_3 = tmp6;
  const tmp7 = isThemeLightResult ? tmp4.previewProfileButtonLight : tmp4.previewProfileButtonDark;
  let closure_4 = tmp7;
  const tmp8 = isThemeLightResult ? tmp4.previewProfileButtonLightPressed : tmp4.previewProfileButtonDarkPressed;
  let closure_5 = tmp8;
  if (cResult[0] === handlePreviewPress) {
    let tmp9;
    if (cResult[1] === onTrackPress) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === theme === ThemeTypes.ONYX) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp4.previewProfileButton) {
          if (cResult[6] === tmp4.previewProfileButtonMidnight) {
            let tmp10;
            let tmp13;
            let tmp12;
            if (cResult[7] === tmp7) {
              tmp10 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1125).intl;
              const stringResult = intl.string(handlePreviewPress(1125).t["3Qcx6K"]);
              const obj4 = { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT };
              const EyeIcon = tmp(7099).EyeIcon;
              const tmp17 = closure_15(EyeIcon, obj4);
              cResult[9] = stringResult;
              cResult[10] = tmp17;
              tmp13 = tmp17;
              tmp12 = stringResult;
            } else {
              tmp12 = cResult[9];
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp9) {
              let tmp18;
              if (cResult[12] === tmp10) {
                tmp18 = cResult[13];
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
    const fn2 = function b(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, closure_3 && closure_2.previewProfileButtonMidnight, ];
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    };
    cResult[3] = theme === ThemeTypes.ONYX;
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
}) : (function PreviewProfileTrigger(handlePreviewPress) {
  let EyeIcon;
  let closure_2;
  let intl;
  let obj4;
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_19();
  dependencyMap = tmp;
  const obj = handlePreviewPress(5070);
  const theme = obj.useThemeContext().theme;
  const obj2 = handlePreviewPress(5011);
  const isThemeLightResult = obj2.isThemeLight(theme);
  closure_3 = theme === ThemeTypes.ONYX;
  let closure_4 = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  let closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, closure_3 && closure_2.previewProfileButtonMidnight, ];
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: react.useCallback(() => {
      onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: intl.string(handlePreviewPress(1125).t["3Qcx6K"]),
    children: closure_15(EyeIcon, obj4)
  };
  intl = tmp2(1125).intl;
  obj4 = { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT };
  EyeIcon = tmp2(7099).EyeIcon;
  return closure_15(closure_9, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHandlePreviewPress(product) {
  let analyticsLocations;
  let obj = require("react");
  const cResult = obj.c(8);
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const collectibleProfileOverrides = product.collectibleProfileOverrides;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let obj2 = require("useCurrentUser");
  const currentUser = obj2.useCurrentUser();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === collectibleProfileOverrides) {
      if (cResult[2] === product) {
        if (cResult[3] === shopAnalyticsContext) {
          if (cResult[4] === stageCollectibleChangeForEditProfile) {
            if (cResult[5] === currentUser.id) {
              let tmp3;
              if (cResult[6] === variantIndex) {
                tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
      }
    }
  }
  const fn = function o() {
    let initialVariantIndex;
    let obj = {
      userId: currentUser.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj2;
        if (null == stageCollectibleChangeForEditProfile) {
          const obj4 = { product: require, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const obj3 = require("openProductDetailsActionSheet");
          const result = obj3.openProductDetailsActionSheet(obj4);
        } else {
          const obj = { skuId: obj2.getSelectedProduct(require, initialVariantIndex).skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile: tmp };
          const openProductDetailsActionSheetForSku = require("openProductDetailsActionSheet").openProductDetailsActionSheetForSku;
          require("openProductDetailsActionSheet");
          obj2 = require("CollectiblesProductUtils");
          const result1 = openProductDetailsActionSheetForSku(obj);
        }
      }
    };
    const tmp = showUserProfileActionSheetDefault(obj);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = collectibleProfileOverrides;
  cResult[2] = product;
  cResult[3] = shopAnalyticsContext;
  cResult[4] = stageCollectibleChangeForEditProfile;
  cResult[5] = currentUser.id;
  cResult[6] = variantIndex;
  cResult[7] = fn;
  tmp3 = fn;
}) : (function useHandlePreviewPress(product) {
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  const analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const collectibleProfileOverrides = product.collectibleProfileOverrides;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const items = [product, variantIndex, collectibleProfileOverrides, currentUser.id, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile];
  return currentUser.useCallback(() => {
    let initialVariantIndex;
    let obj = {
      userId: currentUser.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj2;
        if (null == stageCollectibleChangeForEditProfile) {
          const obj4 = { product: require, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const obj3 = require("openProductDetailsActionSheet");
          const result = obj3.openProductDetailsActionSheet(obj4);
        } else {
          const obj = { skuId: obj2.getSelectedProduct(require, initialVariantIndex).skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile: tmp };
          const openProductDetailsActionSheetForSku = require("openProductDetailsActionSheet").openProductDetailsActionSheetForSku;
          require("openProductDetailsActionSheet");
          obj2 = require("CollectiblesProductUtils");
          const result1 = openProductDetailsActionSheetForSku(obj);
        }
      }
    };
    const tmp = showUserProfileActionSheetDefault(obj);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetContent(product) {
  let IconTextBadge;
  let analyticsLocations;
  let closure_10;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let initialVariantIndex;
  let items4;
  let items5;
  let items6;
  let items7;
  let location_stack;
  let obj24;
  let obj6;
  let ref1;
  let stageCollectibleChangeForEditProfile;
  let tmp10;
  let tmp16;
  let tmp30;
  let tmp31;
  let tmp5;
  let tmp6;
  let tmp82;
  let tmp84;
  let tmp86;
  let type;
  let obj = require("react");
  const cResult = obj.c(107);
  product = product.product;
  require = product;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = product);
  let num = 0;
  const ref = product.ref;
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
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "ProductDetailsActionSheetInner" };
    cResult[2] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  const OTPACOMOrderExperiment = tmp2(tmp3[24]).OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig(tmp6);
  const tmp8 = closure_19();
  ref1 = react.useRef(null);
  if (cResult[3] !== tmp5) {
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp5, 0);
    items1[arraySpreadResult] = require("AnalyticsLocation").COLLECTIBLES_SHOP_PROFILE_PREVIEW;
    cResult[3] = tmp5;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  const analyticsLocations2 = require("useAnalyticsLocations")(tmp10).analyticsLocations;
  if (cResult[5] !== product) {
    const tmp2Result = require("CollectiblesProductUtils");
    const productSkuIds = tmp2Result.getProductSkuIds(product);
    cResult[5] = product;
    cResult[6] = productSkuIds;
    tmp16 = productSkuIds;
  } else {
    tmp16 = cResult[6];
  }
  let first = _slicedToArray(react.useState(num), 2)[0];
  _slicedToArray(react.useState(num), 2);
  if (cResult[7] === product) {
    let tmp22;
    if (cResult[8] === first) {
      tmp22 = cResult[9];
    }
    closure_3 = tmp22;
    if (cResult[10] === analyticsLocations2) {
      if (cResult[11] === tmp16) {
        let tmp24;
        let tmp27;
        let tmp26;
        if (cResult[12] === tmp22.skuId) {
          tmp24 = cResult[13];
        }
        const tmp2Result11 = require("useTrackPdpClick");
        const trackPdpClick = tmp2Result11.useTrackPdpClick(tmp24);
        if (cResult[14] !== trackPdpClick) {
          const fn = function z() {
            let ref;
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
          tmp27 = fn;
          tmp26 = items2;
        } else {
          tmp26 = cResult[15];
          tmp27 = cResult[16];
        }
        const imperativeHandle = obj3.useImperativeHandle(ref, tmp27, tmp26);
        [tmp30, tmp31] = react.useState(undefined);
        _slicedToArray(react.useState(undefined), 2);
        _slicedToArray = tmp31;
        const tmp18Result6 = _slicedToArray(react.useState(tmp22.skuId), 2);
        if (tmp22.skuId !== tmp18Result6[0]) {
          tmp33(tmp22.skuId);
          tmp31(undefined);
        }
        const tmp2Result12 = require("useCollectibleProfileOverrides");
        const collectibleProfileOverrides = tmp2Result12.useCollectibleProfileOverrides(tmp22, tmp30);
        const tmp2Result13 = require("CollectiblesAnalyticsContext");
        const collectiblesAnalyticsContext = tmp2Result13.useCollectiblesAnalyticsContext();
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
          if (cResult[18] === tmp16) {
            if (cResult[19] === tmp22.skuId) {
              if (cResult[20] === cardId) {
                if (cResult[21] === tilePosition) {
                  let tmp42;
                  if (cResult[22] === sessionId) {
                    tmp42 = cResult[23];
                  }
                  require("useTrackImpression")(tmp42);
                  if (cResult[24] === analyticsLocations2) {
                    if (cResult[25] === collectibleProfileOverrides) {
                      if (cResult[26] === product) {
                        if (cResult[27] === stageCollectibleChangeForEditProfile) {
                          if (cResult[28] === collectiblesAnalyticsContext) {
                            let tmp45;
                            if (cResult[29] === first) {
                              tmp45 = cResult[30];
                            }
                            const tmp47 = closure_21(tmp45);
                            const tmp48 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
                            react = tmp48;
                            if (cResult[31] === tmp48) {
                              let tmp49;
                              let tmp51;
                              let tmp52;
                              if (cResult[32] === product.items) {
                                tmp49 = cResult[33];
                              }
                              [type, closure_7] = react.useState(tmp49);
                              const _Symbol = Symbol;
                              _slicedToArray(react.useState(tmp49), 2);
                              if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                function ue(type) {
                                  tmp31(type);
                                  closure_7(type.type);
                                }
                                cResult[34] = ue;
                                tmp51 = ue;
                              } else {
                                tmp51 = cResult[34];
                              }
                              if (!tmp48) {
                                type = tmp22.type;
                              }
                              if (cResult[35] !== type) {
                                let tmp53 = null != type;
                                if (tmp53) {
                                  tmp53 = type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp2(tmp3[19]).CollectiblesItemType.AVATAR_DECORATION;
                                  type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME || type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
                                }
                                cResult[35] = type;
                                cResult[36] = tmp53;
                                tmp52 = tmp53;
                              } else {
                                tmp52 = cResult[36];
                              }
                              if (cResult[37] === product.skuId) {
                                let tmp55;
                                let tmp56;
                                let tmp58;
                                let tmp60;
                                let tmp62;
                                if (cResult[38] === tmp5) {
                                  tmp55 = cResult[39];
                                  tmp56 = cResult[40];
                                }
                                const effect = obj3.useEffect(tmp55, tmp56);
                                const hideBadge = product.hideBadge;
                                const tmp2Result14 = require("native");
                                const theme = tmp2Result14.useThemeContext().theme;
                                if (cResult[41] !== theme) {
                                  const tmp2Result15 = require("shared");
                                  const isThemeDarkResult = tmp2Result15.isThemeDark(theme);
                                  cResult[41] = theme;
                                  cResult[42] = isThemeDarkResult;
                                  tmp58 = isThemeDarkResult;
                                } else {
                                  tmp58 = cResult[42];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                  const items3 = [CollectiblesCategoryStore];
                                  cResult[43] = items3;
                                  tmp60 = items3;
                                } else {
                                  tmp60 = cResult[43];
                                }
                                if (cResult[44] !== product.categorySkuId) {
                                  function ke() {
                                    const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
                                    let unpublishedAt;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                  cResult[44] = product.categorySkuId;
                                  cResult[45] = ke;
                                  tmp62 = ke;
                                } else {
                                  tmp62 = cResult[45];
                                }
                                let categoryWillUnpublishAt = product.categoryWillUnpublishAt;
                                const tmp2Result16 = require("get initialized");
                                if (categoryWillUnpublishAt == null) {
                                  categoryWillUnpublishAt = tmp2Result16.useStateFromStores(tmp60, tmp62);
                                }
                                let tmp63 = tmp22;
                                if (tmp48) {
                                  tmp63 = tmp22;
                                  if (null != tmp30) {
                                    const obj4 = { skuId: null, type: null, items: items4 };
                                    ({ skuId: obj16.skuId, type: obj16.type } = tmp30);
                                    items4 = [tmp30];
                                    tmp63 = obj4;
                                  }
                                }
                                let tmp64 = null;
                                if (null == product.badgeOverride) {
                                  const tmp2Result17 = require("CollectiblesProductUtils");
                                  if (tmp2Result17.isDynamicProduct(tmp63)) {
                                    if (!hideBadge) {
                                      let tmp65;
                                      let tmp67;
                                      let tmp69;
                                      const _Symbol3 = Symbol;
                                      if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl = tmp2(tmp3[17]).intl;
                                        const stringResult = intl.string(require("intl").t["+drfVi"]);
                                        cResult[46] = stringResult;
                                        tmp65 = stringResult;
                                      } else {
                                        tmp65 = cResult[46];
                                      }
                                      const _Symbol4 = Symbol;
                                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl2 = tmp2(tmp3[17]).intl;
                                        const stringResult1 = intl2.string(require("intl").t["+drfVi"]);
                                        cResult[47] = stringResult1;
                                        tmp67 = stringResult1;
                                      } else {
                                        tmp67 = cResult[47];
                                      }
                                      if (cResult[48] !== tmp58) {
                                        const obj5 = { accessibilityLabel: tmp65, children: closure_15(IconTextBadge, obj6) };
                                        const DynamicBadgeTooltip = tmp2(tmp3[34]).DynamicBadgeTooltip;
                                        obj6 = { icon: require("DiceIcon").DiceIcon, label: tmp67, isDark: tmp58 };
                                        IconTextBadge = tmp2(tmp3[35]).IconTextBadge;
                                        const tmp71 = closure_15(DynamicBadgeTooltip, obj5);
                                        cResult[48] = tmp58;
                                        cResult[49] = tmp71;
                                        tmp69 = tmp71;
                                      } else {
                                        tmp69 = cResult[49];
                                      }
                                      tmp64 = tmp69;
                                    }
                                  }
                                  if (null != categoryWillUnpublishAt) {
                                    const tmp2Result18 = require("CollectiblesUtils");
                                    if (tmp2Result18.shouldShowLimitedTimeBadge(categoryWillUnpublishAt)) {
                                      if (!hideBadge) {
                                        let tmp72;
                                        if (cResult[50] !== categoryWillUnpublishAt) {
                                          const obj7 = { unpublishedAt: categoryWillUnpublishAt };
                                          const tmp74 = closure_15(require("LimitedTimeBadge"), obj7);
                                          cResult[50] = categoryWillUnpublishAt;
                                          cResult[51] = tmp74;
                                          tmp72 = tmp74;
                                        } else {
                                          tmp72 = cResult[51];
                                        }
                                        tmp64 = tmp72;
                                      }
                                    }
                                  }
                                  tmp64 = null;
                                  const tmp2Result19 = require("CollectiblesProductUtils");
                                  const tmp75 = tmp2Result19.isOrbsExclusiveProduct(tmp22) && !hideBadge;
                                  if (tmp75) {
                                    let tmp76;
                                    let tmp78;
                                    const _Symbol5 = Symbol;
                                    if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl3 = tmp2(tmp3[17]).intl;
                                      const stringResult2 = intl3.string(require("intl").t["0TmQRG"]);
                                      cResult[52] = stringResult2;
                                      tmp76 = stringResult2;
                                    } else {
                                      tmp76 = cResult[52];
                                    }
                                    if (cResult[53] !== tmp58) {
                                      const obj8 = { icon: require("OrbsIcon").OrbsIcon, label: tmp76, isDark: tmp58 };
                                      const IconTextBadge2 = tmp2(tmp3[35]).IconTextBadge;
                                      const tmp80 = closure_15(IconTextBadge2, obj8);
                                      cResult[53] = tmp58;
                                      cResult[54] = tmp80;
                                      tmp78 = tmp80;
                                    } else {
                                      tmp78 = cResult[54];
                                    }
                                    tmp64 = tmp78;
                                  }
                                }
                                [tmp82, closure_8] = react.useState(false);
                                _slicedToArray(react.useState(false), 2);
                                [tmp84, closure_9] = react.useState(null);
                                _slicedToArray(react.useState(null), 2);
                                [tmp86, closure_10] = react.useState(0);
                                _slicedToArray(react.useState(0), 2);
                                if (cResult[55] === tmp47) {
                                  if (cResult[56] === tmp52) {
                                    let tmp87;
                                    if (cResult[57] === trackPdpClick) {
                                      tmp87 = cResult[58];
                                    }
                                    if (cResult[59] === tmp22) {
                                      let tmp91;
                                      if (cResult[60] === trackPdpClick) {
                                        tmp91 = cResult[61];
                                      }
                                      if (cResult[62] === tmp8.actionButtons) {
                                        if (cResult[63] === tmp87) {
                                          let tmp94;
                                          if (cResult[64] === tmp91) {
                                            tmp94 = cResult[65];
                                          }
                                          if (cResult[66] === tmp64) {
                                            let tmp98;
                                            if (cResult[67] === tmp8.badgeWrapper) {
                                              tmp98 = cResult[68];
                                            }
                                            if (cResult[69] === tmp47) {
                                              if (cResult[70] === tmp22) {
                                                let tmp102;
                                                if (cResult[71] === trackPdpClick) {
                                                  tmp102 = cResult[72];
                                                }
                                                if (cResult[73] === tmp22) {
                                                  let tmp105;
                                                  if (cResult[74] === trackPdpClick) {
                                                    tmp105 = cResult[75];
                                                  }
                                                  if (cResult[76] === tmp82) {
                                                    if (cResult[77] === product) {
                                                      let tmp108;
                                                      let tmp111;
                                                      if (cResult[78] === first) {
                                                        tmp108 = cResult[79];
                                                      }
                                                      const _Symbol6 = Symbol;
                                                      if (cResult[80] === Symbol.for("react.memo_cache_sentinel")) {
                                                        const obj9 = { size: require("native").space.PX_16 };
                                                        const Spacer = tmp2(tmp3[44]).Spacer;
                                                        const tmp113 = closure_15(Spacer, obj9);
                                                        cResult[80] = tmp113;
                                                        tmp111 = tmp113;
                                                      } else {
                                                        tmp111 = cResult[80];
                                                      }
                                                      if (cResult[81] === tmp8.container) {
                                                        if (cResult[82] === tmp94) {
                                                          if (cResult[83] === tmp98) {
                                                            if (cResult[84] === tmp102) {
                                                              if (cResult[85] === tmp105) {
                                                                let tmp114;
                                                                let tmp117;
                                                                if (cResult[86] === tmp108) {
                                                                  tmp114 = cResult[87];
                                                                }
                                                                if (cResult[88] !== tmp22) {
                                                                  function je() {
                                                                    closure_9(closure_3);
                                                                    closure_10((arg0) => arg0 + 1);
                                                                    closure_8(true);
                                                                  }
                                                                  cResult[88] = tmp22;
                                                                  cResult[89] = je;
                                                                  tmp117 = je;
                                                                } else {
                                                                  tmp117 = cResult[89];
                                                                }
                                                                if (cResult[90] === analyticsLocations2) {
                                                                  if (cResult[91] === tmp82) {
                                                                    if (cResult[92] === tmp22) {
                                                                      if (cResult[93] === stageCollectibleChangeForEditProfile) {
                                                                        if (cResult[94] === tmp117) {
                                                                          let tmp118;
                                                                          if (cResult[95] === trackPdpClick) {
                                                                            tmp118 = cResult[96];
                                                                          }
                                                                          if (cResult[97] === analyticsLocations2) {
                                                                            if (cResult[98] === tmp86) {
                                                                              if (cResult[99] === tmp84) {
                                                                                let tmp121;
                                                                                if (cResult[100] === stageCollectibleChangeForEditProfile) {
                                                                                  tmp121 = cResult[101];
                                                                                }
                                                                                if (cResult[102] === analyticsLocations2) {
                                                                                  if (cResult[103] === tmp114) {
                                                                                    if (cResult[104] === tmp118) {
                                                                                      let tmp124;
                                                                                      if (cResult[105] === tmp121) {
                                                                                        tmp124 = cResult[106];
                                                                                      }
                                                                                      return tmp124;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                const obj10 = { value: analyticsLocations2, children: items5 };
                                                                                items5 = [tmp114, tmp118, tmp121];
                                                                                const tmp126 = closure_16(require("useAnalyticsLocations").AnalyticsLocationProvider, obj10);
                                                                                cResult[102] = analyticsLocations2;
                                                                                cResult[103] = tmp114;
                                                                                cResult[104] = tmp118;
                                                                                cResult[105] = tmp121;
                                                                                cResult[106] = tmp126;
                                                                                tmp124 = tmp126;
                                                                              }
                                                                            }
                                                                          }
                                                                          let tmp122 = null != tmp84;
                                                                          if (tmp122) {
                                                                            const obj11 = {
                                                                              product: tmp84,
                                                                              attempt: tmp86,
                                                                              analyticsLocations: analyticsLocations2,
                                                                              onBuySettled() {
                                                                                                                                                          return closure_8(false);
                                                                                                                                                        },
                                                                              stageCollectibleChangeForEditProfile
                                                                            };
                                                                            tmp122 = closure_15(tmp15(tmp3[47]), obj11);
                                                                          }
                                                                          cResult[97] = analyticsLocations2;
                                                                          cResult[98] = tmp86;
                                                                          cResult[99] = tmp84;
                                                                          cResult[100] = stageCollectibleChangeForEditProfile;
                                                                          cResult[101] = tmp122;
                                                                          tmp121 = tmp122;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                const obj12 = { product: tmp22, analyticsLocations: analyticsLocations2, onTrackPress: trackPdpClick, isBuying: tmp82, onStartPurchase: tmp117, stageCollectibleChangeForEditProfile };
                                                                const tmp120 = closure_15(require("ProductDetailsActionSheetPurchaseSection"), obj12);
                                                                cResult[90] = analyticsLocations2;
                                                                cResult[91] = tmp82;
                                                                cResult[92] = tmp22;
                                                                cResult[93] = stageCollectibleChangeForEditProfile;
                                                                cResult[94] = tmp117;
                                                                cResult[95] = trackPdpClick;
                                                                cResult[96] = tmp120;
                                                                tmp118 = tmp120;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj13 = { scrollsToTop: false, style: tmp8.container, ref: ref1, children: items6 };
                                                      items6 = [tmp94, tmp98, tmp102, tmp105, tmp108, tmp111];
                                                      const tmp116 = closure_16(require("BottomSheetModal").BottomSheetScrollView, obj13);
                                                      cResult[81] = tmp8.container;
                                                      cResult[82] = tmp94;
                                                      cResult[83] = tmp98;
                                                      cResult[84] = tmp102;
                                                      cResult[85] = tmp105;
                                                      cResult[86] = tmp108;
                                                      cResult[87] = tmp116;
                                                      tmp114 = tmp116;
                                                    }
                                                  }
                                                  const obj14 = { product, selectedVariantIndex: first, disabled: tmp82, onVariantSelect: tmp21 };
                                                  const tmp110 = closure_15(require("ProductDetailsActionSheetVariants"), obj14);
                                                  cResult[76] = tmp82;
                                                  cResult[77] = product;
                                                  cResult[78] = first;
                                                  cResult[79] = tmp110;
                                                  tmp108 = tmp110;
                                                }
                                                const obj15 = { product: tmp22, onTrackPress: trackPdpClick };
                                                const tmp107 = closure_15(require("ProductDetailsActionSheetInfo"), obj15);
                                                cResult[73] = tmp22;
                                                cResult[74] = trackPdpClick;
                                                cResult[75] = tmp107;
                                                tmp105 = tmp107;
                                              }
                                            }
                                            const obj17 = { product: tmp22, handlePreviewPress: tmp47, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp51 };
                                            const tmp104 = closure_15(require("ProductDetailsActionSheetPreview"), obj17);
                                            cResult[69] = tmp47;
                                            cResult[70] = tmp22;
                                            cResult[71] = trackPdpClick;
                                            cResult[72] = tmp104;
                                            tmp102 = tmp104;
                                          }
                                          let tmp99 = null != tmp64;
                                          if (tmp99) {
                                            const obj18 = { style: tmp8.badgeWrapper, children: tmp64 };
                                            tmp99 = closure_15(closure_10, obj18);
                                          }
                                          cResult[66] = tmp64;
                                          cResult[67] = tmp8.badgeWrapper;
                                          cResult[68] = tmp99;
                                          tmp98 = tmp99;
                                        }
                                      }
                                      const obj19 = { style: tmp8.actionButtons, children: items7 };
                                      items7 = [tmp87, tmp91];
                                      const tmp97 = closure_16(closure_10, obj19);
                                      cResult[62] = tmp8.actionButtons;
                                      cResult[63] = tmp87;
                                      cResult[64] = tmp91;
                                      cResult[65] = tmp97;
                                      tmp94 = tmp97;
                                    }
                                    const obj20 = { selectedProduct: tmp22, size: "md", onTrackPress: trackPdpClick };
                                    const tmp93 = closure_15(require("WishlistButton"), obj20);
                                    cResult[59] = tmp22;
                                    cResult[60] = trackPdpClick;
                                    cResult[61] = tmp93;
                                    tmp91 = tmp93;
                                  }
                                }
                                let tmp88 = tmp52;
                                if (tmp88) {
                                  const obj21 = { handlePreviewPress: tmp47, onTrackPress: trackPdpClick };
                                  tmp88 = closure_15(closure_20, obj21);
                                }
                                cResult[55] = tmp47;
                                cResult[56] = tmp52;
                                cResult[57] = trackPdpClick;
                                cResult[58] = tmp88;
                                tmp87 = tmp88;
                              }
                              function fe() {
                                const obj = AnalyticsUtilsDefault;
                                const obj2 = { type: "Collectibles Shop Details Modal", location_stack, sku_id: require.skuId };
                                obj.track(AnalyticEvents.OPEN_MODAL, obj2);
                              }
                              const items8 = [tmp5, product.skuId];
                              cResult[37] = product.skuId;
                              cResult[38] = tmp5;
                              cResult[39] = fe;
                              cResult[40] = items8;
                              tmp56 = items8;
                              tmp55 = fe;
                            }
                            function ae() {
                              let tmp;
                              if (closure_6) {
                                const first = require.items[0];
                                let type;
                                if (first != null) {
                                  type = first.type;
                                }
                                tmp = type;
                              }
                              return tmp;
                            }
                            cResult[31] = tmp48;
                            cResult[32] = product.items;
                            cResult[33] = ae;
                            tmp49 = ae;
                          }
                        }
                      }
                    }
                  }
                  const obj22 = { product, variantIndex: first, analyticsLocations: analyticsLocations2, collectibleProfileOverrides, shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile };
                  cResult[24] = analyticsLocations2;
                  cResult[25] = collectibleProfileOverrides;
                  cResult[26] = product;
                  cResult[27] = stageCollectibleChangeForEditProfile;
                  cResult[28] = collectiblesAnalyticsContext;
                  cResult[29] = first;
                  cResult[30] = obj22;
                  tmp45 = obj22;
                }
              }
            }
          }
        }
        const obj23 = { type: require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET, name: require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL, properties: obj24 };
        obj24 = { sku_id: tmp22.skuId, location_stack: analyticsLocations2, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp16 };
        cResult[17] = analyticsLocations2;
        cResult[18] = tmp16;
        cResult[19] = tmp22.skuId;
        cResult[20] = cardId;
        cResult[21] = tilePosition;
        cResult[22] = sessionId;
        cResult[23] = obj23;
        tmp42 = obj23;
      }
    }
    const obj25 = { skuId: tmp22.skuId, productSkuIds: tmp16, analyticsLocations: analyticsLocations2 };
    cResult[10] = analyticsLocations2;
    cResult[11] = tmp16;
    cResult[12] = tmp22.skuId;
    cResult[13] = obj25;
    tmp24 = obj25;
  }
  const tmp2Result20 = require("CollectiblesProductUtils");
  const selectedProduct = tmp2Result20.getSelectedProduct(product, first);
  cResult[7] = product;
  cResult[8] = first;
  cResult[9] = selectedProduct;
  tmp22 = selectedProduct;
}) : (function ProductDetailsActionSheetContent(product) {
  let IconTextBadge;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c7;
  let c8;
  let c9;
  let cardId;
  let closure_10;
  let closure_6;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj6;
  let sessionId;
  let tilePosition;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp20;
  let tmp48;
  let tmp50;
  let type;
  const f102125 = () => {
    let tmp;
    if (closure_6) {
      const first = require.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  };
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
  let ref1;
  _slicedToArray = undefined;
  react = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  const ref = product.ref;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp5 = closure_19();
  let obj = react;
  ref1 = react.useRef(null);
  const items = [];
  const tmp8 = analyticsLocations1(ref1[26]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations1, 0);
  items[arraySpreadResult] = analyticsLocations1(ref1[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp8(items).analyticsLocations;
  const items1 = [product];
  const tmp10 = c8(() => {
    const obj = CollectiblesProductUtils;
    return obj.getProductSkuIds(require);
  }, items1);
  [tmp13, tmp14] = react.useState(num);
  _slicedToArray(react.useState(num), 2);
  let obj2 = require("CollectiblesProductUtils");
  const selectedProduct = obj2.getSelectedProduct(product, tmp13);
  const obj3 = require("useTrackPdpClick");
  const obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp10, analyticsLocations };
  const trackPdpClick = obj3.useTrackPdpClick(obj4);
  const items2 = [trackPdpClick];
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let ref;
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
  }, items2);
  [tmp19, tmp20] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  _slicedToArray = tmp20;
  const tmp21 = _slicedToArray(react.useState(selectedProduct.skuId), 2);
  if (selectedProduct.skuId !== tmp21[0]) {
    tmp22(selectedProduct.skuId);
    tmp20(undefined);
  }
  const tmp2Result = require("useCollectibleProfileOverrides");
  const collectibleProfileOverrides = tmp2Result.useCollectibleProfileOverrides(selectedProduct, tmp19);
  const tmp2Result8 = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = tmp2Result8.useCollectiblesAnalyticsContext();
  const obj5 = { type: require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET, name: require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL, properties: obj6 };
  obj6 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp10 };
  cardId = undefined;
  const tmp7Result = analyticsLocations1(ref1[31]);
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  tilePosition = undefined;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  sessionId = undefined;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  tmp7Result(obj5);
  const obj7 = { product, variantIndex: tmp13, analyticsLocations, collectibleProfileOverrides, shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile };
  const tmp32Result = closure_21(obj7);
  const tmp34 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  react = tmp34;
  [type, c7] = obj.useState(f102125);
  _slicedToArray(obj.useState(f102125), 2);
  const tmp36 = c7((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  if (!tmp34) {
    type = selectedProduct.type;
  }
  let tmp37 = null != type;
  if (tmp37) {
    tmp37 = type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp2(tmp3[19]).CollectiblesItemType.AVATAR_DECORATION;
    type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME || type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
  }
  const items3 = [analyticsLocations1, product.skuId];
  const effect = obj.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: require.skuId };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  }, items3);
  const hideBadge = product.hideBadge;
  const tmp2Result9 = require("native");
  const theme = tmp2Result9.useThemeContext().theme;
  const tmp2Result10 = require("shared");
  const isThemeDarkResult = tmp2Result10.isThemeDark(theme);
  const items4 = [CollectiblesCategoryStore];
  let categoryWillUnpublishAt = product.categoryWillUnpublishAt;
  const tmp2Result11 = require("get initialized");
  if (categoryWillUnpublishAt == null) {
    categoryWillUnpublishAt = tmp2Result11.useStateFromStores(items4, () => {
      const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  let tmp41 = selectedProduct;
  if (tmp34) {
    tmp41 = selectedProduct;
    if (null != tmp19) {
      const obj8 = { skuId: null, type: null, items: items5 };
      ({ skuId: obj13.skuId, type: obj13.type } = tmp19);
      items5 = [tmp19];
      tmp41 = obj8;
    }
  }
  let tmp42 = null;
  if (null == product.badgeOverride) {
    const tmp2Result12 = require("CollectiblesProductUtils");
    if (tmp2Result12.isDynamicProduct(tmp41)) {
      if (!hideBadge) {
        const obj9 = { accessibilityLabel: intl.string(require("intl").t["+drfVi"]), children: closure_15(IconTextBadge, obj10) };
        const DynamicBadgeTooltip = tmp2(tmp3[34]).DynamicBadgeTooltip;
        intl = tmp2(tmp3[17]).intl;
        obj10 = { icon: require("DiceIcon").DiceIcon, label: intl2.string(require("intl").t["+drfVi"]), isDark: isThemeDarkResult };
        IconTextBadge = tmp2(tmp3[35]).IconTextBadge;
        intl2 = tmp2(tmp3[17]).intl;
        tmp42 = closure_15(DynamicBadgeTooltip, obj9);
      }
    }
    if (null != categoryWillUnpublishAt) {
      const tmp2Result13 = require("CollectiblesUtils");
      if (tmp2Result13.shouldShowLimitedTimeBadge(categoryWillUnpublishAt)) {
        if (!hideBadge) {
          const obj11 = { unpublishedAt: categoryWillUnpublishAt };
          tmp42 = closure_15(tmp7(tmp3[38]), obj11);
        }
      }
    }
    tmp42 = null;
    const tmp2Result14 = require("CollectiblesProductUtils");
    const tmp45 = tmp2Result14.isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    if (tmp45) {
      const obj12 = { icon: require("OrbsIcon").OrbsIcon, label: intl3.string(require("intl").t["0TmQRG"]), isDark: isThemeDarkResult };
      const IconTextBadge2 = tmp2(tmp3[35]).IconTextBadge;
      intl3 = tmp2(tmp3[17]).intl;
      tmp42 = closure_15(IconTextBadge2, obj12);
    }
  }
  [tmp48, c8] = obj.useState(false);
  _slicedToArray(obj.useState(false), 2);
  [tmp50, c9] = obj.useState(null);
  _slicedToArray(obj.useState(null), 2);
  [first, closure_10] = obj.useState(0);
  const obj14 = { value: analyticsLocations, children: items8 };
  const AnalyticsLocationProvider = tmp2(tmp3[26]).AnalyticsLocationProvider;
  const obj15 = { scrollsToTop: false, style: tmp5.container, ref: ref1, children: items7 };
  const obj16 = { style: tmp5.actionButtons, children: items6 };
  const BottomSheetScrollView = tmp2(tmp3[45]).BottomSheetScrollView;
  if (tmp37) {
    const obj17 = { handlePreviewPress: tmp32Result, onTrackPress: trackPdpClick };
    tmp37 = closure_15(closure_20, obj17);
  }
  items6 = [tmp37, closure_15(analyticsLocations1(tmp3[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  items7 = [closure_16(closure_10, obj16), , , , , ];
  let tmp57Result = null != tmp42;
  if (tmp57Result) {
    const obj18 = { style: tmp5.badgeWrapper, children: tmp42 };
    tmp57Result = tmp57(tmp54, obj18);
  }
  items7[1] = tmp57Result;
  items7[2] = closure_15(analyticsLocations1(ref1[41]), { product: selectedProduct, handlePreviewPress: tmp32Result, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp36 });
  items7[3] = closure_15(analyticsLocations1(ref1[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items7[4] = closure_15(analyticsLocations1(ref1[43]), { product, selectedVariantIndex: tmp13, disabled: tmp48, onVariantSelect: tmp14 });
  const obj19 = { size: analyticsLocations1(ref1[11]).space.PX_16 };
  const Spacer = tmp2(tmp3[44]).Spacer;
  items7[5] = closure_15(Spacer, obj19);
  items8 = [closure_16(BottomSheetScrollView, obj15), , ];
  const obj20 = {
    product: selectedProduct,
    analyticsLocations,
    onTrackPress: trackPdpClick,
    isBuying: tmp48,
    onStartPurchase() {
      _undefined4(selectedProduct);
      closure_10((arg0) => arg0 + 1);
      _undefined3(true);
    },
    stageCollectibleChangeForEditProfile
  };
  items8[1] = closure_15(analyticsLocations1(ref1[46]), obj20);
  let tmp57Result2 = null != tmp50;
  if (tmp57Result2) {
    const obj21 = {
      product: tmp50,
      attempt: first,
      analyticsLocations,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp57Result2 = tmp57(tmp7(tmp3[47]), obj21);
  }
  items8[2] = tmp57Result2;
  return closure_16(AnalyticsLocationProvider, obj14);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetInner(arg0) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let stageCollectibleChangeForEditProfile;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
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
        let tmp8;
        if (cResult[5] === stageCollectibleChangeForEditProfile) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const obj2 = { scrollable: true, startExpanded: true, onExpand: tmp6, onDismiss: tmp7, ref, children: closure_15(closure_22, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile }) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const tmp9 = closure_15(BottomSheet, obj2);
  cResult[2] = analyticsLocations;
  cResult[3] = initialVariantIndex;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function ProductDetailsActionSheetInner(arg0) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let stageCollectibleChangeForEditProfile;
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const obj = {
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
    children: closure_15(closure_22, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  return closure_15(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManagedProductDetailsActionSheetInner(skuId) {
  let analyticsLocations;
  let fetchPurchasesError;
  let first;
  let hasPreviouslyFetched;
  let initialVariantIndex;
  let obj4;
  let product;
  let retry;
  let stageCollectibleChangeForEditProfile;
  let state;
  const obj = react2;
  const cResult = obj.c(20);
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { needsCategory: false, seedCategoryStore: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = useCollectiblesShopProducts;
  const collectiblesShopProduct = tmpResult.useCollectiblesShopProduct(skuId, first);
  ({ product, state, retry } = collectiblesShopProduct);
  const tmpResult3 = useFetchCollectiblesCategoriesAndPurchases;
  const getOrFetchPurchases = tmpResult3.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  react.useRef(null);
  react.useRef(null);
  if (null != product) {
    let bound = initialVariantIndex;
    const tmpResult4 = CollectiblesProductUtils;
    if (tmpResult4.getIsVariantProduct(product)) {
      let tmp11;
      if (cResult[1] === product.variants) {
        let tmp10;
        if (cResult[2] === skuId) {
          tmp10 = cResult[3];
        }
        const _Math = Math;
        bound = Math.max(0, tmp10);
      }
      if (cResult[4] !== skuId) {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
        cResult[4] = skuId;
        cResult[5] = T;
        tmp11 = T;
      } else {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(tmp11);
      cResult[1] = product.variants;
      cResult[2] = skuId;
      cResult[3] = findIndexResult;
      tmp10 = findIndexResult;
    }
  }
  if ("ready" === state) {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
  }
  if ("error" === state) {
    let tmp17;
    let tmp19;
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
      const stringResult = obj5.string(intl4.t.eAn6z2);
      cResult[11] = stringResult;
      tmp17 = stringResult;
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
      const stringResult1 = obj6.string(intl4.t["+hivLW"]);
      cResult[12] = stringResult1;
      tmp19 = stringResult1;
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
      const obj3 = { Illustration: generated_NoResults.NoResults, body: tmp17, children: closure_15(components_Button_Button.Button, obj4) };
      const EmptyState = tmp(1199).EmptyState;
      obj4 = { text: tmp19, onPress: retry };
      const tmp22 = closure_15(EmptyState, obj3);
      cResult[13] = retry;
      cResult[14] = tmp22;
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
      const tmp16 = closure_15(ProductDetailsActionSheetSkeletonDefault, {});
      cResult[15] = tmp16;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
  }
}) : (function ManagedProductDetailsActionSheetInner(skuId) {
  let Button;
  let analyticsLocations;
  let c2;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let intl;
  let intl2;
  let obj6;
  let retry;
  let stageCollectibleChangeForEditProfile;
  let state;
  let tmp11;
  let tmp13;
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  const tmp = skuId;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  let obj = skuId(9507);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj2 = skuId(10525);
  const getOrFetchPurchases = obj2.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      let tmp8;
      let tmp10;
      if (null != product) {
        tmp8 = closure_15;
        const obj3 = { ref: ref1, product, initialVariantIndex: tmp7, analyticsLocations, stageCollectibleChangeForEditProfile };
        tmp10 = closure_15(closure_22, obj3);
      }
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
        children: tmp10
      };
      return tmp8(tmp(5301).BottomSheet, obj4);
    }
  }
  if ("error" === state) {
    const obj5 = { Illustration: tmp(8760).NoResults, body: intl.string(tmp(1125).t.eAn6z2), children: closure_15(Button, obj6) };
    const EmptyState = tmp(1199).EmptyState;
    intl = tmp(1125).intl;
    obj6 = { text: intl2.string(tmp(1125).t["+hivLW"]), onPress: retry };
    Button = tmp(5280).Button;
    intl2 = tmp(1125).intl;
    tmp13 = closure_15(EmptyState, obj5);
    tmp11 = closure_15;
  } else {
    tmp11 = closure_15;
    tmp13 = closure_15(initialVariantIndex(14746), {});
  }
  tmp8 = tmp11;
  tmp10 = tmp13;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetWithOrderCTX(skuId) {
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = ShopStandalonePdpMobileExperiment;
  if (obj2.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in skuId) {
      skuId = skuId.skuId;
    } else {
      skuId = skuId.product.skuId;
    }
    if (cResult[0] === skuId.analyticsLocations) {
      if (cResult[1] === skuId.initialVariantIndex) {
        if (cResult[2] === skuId.stageCollectibleChangeForEditProfile) {
          let tmp12;
          if (cResult[3] === skuId) {
            tmp12 = cResult[4];
          }
          return tmp12;
        }
      }
    }
    const obj3 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj4.initialVariantIndex, analyticsLocations: obj4.analyticsLocations, stageCollectibleChangeForEditProfile: obj4.stageCollectibleChangeForEditProfile } = skuId);
    const tmp15 = closure_15(closure_24, obj3);
    cResult[0] = skuId.analyticsLocations;
    cResult[1] = skuId.initialVariantIndex;
    cResult[2] = skuId.stageCollectibleChangeForEditProfile;
    cResult[3] = skuId;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    let tmp4;
    if ("product" in skuId) {
      let tmp5;
      if (cResult[5] !== skuId) {
        const obj6 = {};
        const merged = Object.assign(skuId);
        const tmp11 = closure_15(closure_23, obj6);
        cResult[5] = skuId;
        cResult[6] = tmp11;
        tmp5 = tmp11;
      } else {
        tmp5 = cResult[6];
      }
      tmp4 = tmp5;
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp4 = null;
    }
    return tmp4;
  }
}) : (function ProductDetailsActionSheetWithOrderCTX(skuId) {
  let tmp9Result;
  const obj = ShopStandalonePdpMobileExperiment;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    const tmp10 = closure_24;
    const tmp9 = closure_15;
    if ("skuId" in skuId) {
      skuId = skuId.skuId;
    } else {
      skuId = skuId.product.skuId;
    }
    const obj2 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj3.initialVariantIndex, analyticsLocations: obj3.analyticsLocations, stageCollectibleChangeForEditProfile: obj3.stageCollectibleChangeForEditProfile } = skuId);
    tmp9Result = tmp9(tmp10, obj2);
  } else if ("product" in skuId) {
    const obj5 = {};
    const merged = Object.assign(skuId);
    tmp9Result = closure_15(closure_23, obj5);
  } else {
    logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
    tmp9Result = null;
  }
  return tmp9Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheet(shopAnalyticsContext) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== shopAnalyticsContext) {
    shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
    const tmp8 = _objectWithoutProperties(shopAnalyticsContext, closure_3);
    cResult[0] = shopAnalyticsContext;
    cResult[1] = tmp8;
    cResult[2] = shopAnalyticsContext;
    tmp5 = shopAnalyticsContext;
    tmp4 = tmp8;
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
    const tmp15 = closure_15(closure_25, obj2);
    cResult[3] = tmp4;
    cResult[4] = tmp15;
    tmp9 = tmp15;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    let tmp16;
    if (cResult[6] === tmp9) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const tmp17 = closure_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp5, children: tmp9 });
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function ProductDetailsActionSheet(shopAnalyticsContext) {
  let obj2;
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_17;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: closure_15(closure_25, obj2) };
  obj2 = {};
  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
  const merged1 = Object.assign(merged);
  return closure_15(CollectiblesAnalyticsProvider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default tmp7;
