// Module ID: 9651
// Function ID: 9652
// Name: WishlistButton
// Dependencies: [5, 32, 19, 17, 502, 1385, 1074, 1083, 21, 1652, 5796, 5170, 575, 5231, 7200, 5177, 5184, 5869, 1113, 5402, 1705, 5793, 5794, 9652, 9585, 504, 9581, 9642, 9654, 9580, 2]
// Exports: default

// Module 9651 (WishlistButton)
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import native from "native" /* 5231 */;
import ButtonConstants from "ButtonConstants" /* 5796 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import CollectiblesWishlistUtils from "CollectiblesWishlistUtils" /* 9580 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9654 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let constants2, set;

let Easing;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
class WishlistButtonBase {
  constructor(isWishlisted) {
    let HeartIcon;
    let HeartOutlineIcon;
    let _slicedToArray;
    let button;
    let closure_12;
    let first;
    let items10;
    let items9;
    let obj10;
    let obj12;
    let obj6;
    let obj8;
    let str;
    let str2;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp42;
    let tmp43;
    isWishlisted = isWishlisted.isWishlisted;
    const onPress = isWishlisted.onPress;
    const busy = isWishlisted.busy;
    const disabled = isWishlisted.disabled;
    let flag = isWishlisted.accessibilityHidden;
    const accessibilityLabel = isWishlisted.accessibilityLabel;
    if (flag === undefined) {
      flag = false;
    }
    ({ style: _slicedToArray, size } = isWishlisted);
    if (size === undefined) {
      size = "sm";
    }
    const onTrackPress = isWishlisted.onTrackPress;
    first = undefined;
    closure_12 = undefined;
    let sharedValue;
    let tmp = closure_17(size);
    constants2 = tmp;
    let tmp2 = isWishlisted;
    let tmp3 = busy;
    let tmp4 = closure_16;
    const tmp5 = isWishlisted(busy[14]).ICON_SIZE[closure_16[size]];
    obj = isWishlisted(busy[13]);
    const theme = obj.useThemeContext().theme;
    obj2 = isWishlisted(busy[15]);
    const isThemeLightResult = obj2.isThemeLight(theme);
    let closure_7 = theme === first.ONYX;
    let closure_8 = isThemeLightResult ? tmp.light : tmp.dark;
    let closure_9 = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    const enabled = onTrackPress.useContext(tmp2(tmp3[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    [first, closure_12] = onTrackPress.useState(false);
    let tmp9 = isWishlisted || first;
    let num = 0;
    const useSharedValue = tmp2(tmp3[9]).useSharedValue;
    tmp2(tmp3[9]);
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = useSharedValue(num);
    let items = [disabled, busy, onPress, isWishlisted, enabled, first, onTrackPress];
    let items1 = [isWishlisted, first, sharedValue];
    const callback = obj3.useCallback(() => {
      let intl;
      const tmp = disabled;
      if (tmp) {
        obj = { text: intl.string(intl3.t["50TX9k"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl3.intl;
        open("WISHLIST_DISABLED", obj);
      } else {
        const tmp2 = busy;
        if (!tmp2) {
          if (onTrackPress != null) {
            tmp3(isWishlisted ? ShopCtaEnum.REMOVE_FROM_WISHLIST : ShopCtaEnum.ADD_TO_WISHLIST);
          }
          let tmp8 = isWishlisted;
          if (!tmp8) {
            const tmp9 = enabled;
            if (!tmp9) {
              closure_12(true);
            }
            if (onPress != null) {
              tmp14();
            }
          }
          if (tmp8) {
            tmp8 = first;
          }
          if (tmp8) {
            closure_12(false);
          }
        }
      }
    }, items);
    const effect = obj3.useEffect(() => {
      const tmp = first;
      if (!tmp) {
        let num = 0;
        set = sharedValue.set;
        if (isWishlisted) {
          num = 1;
        }
        const result = set(num);
      }
    }, items1);
    const items2 = [first, sharedValue];
    const effect1 = obj3.useEffect(() => {
      let tmp = first;
      if (tmp) {
        let tmp2 = sharedValue;
        let result = sharedValue.set(0);
        const tmp4 = globalThis;
        const _requestAnimationFrame = requestAnimationFrame;
        let closure_0 = requestAnimationFrame(() => {
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp = set;
          const items = [closure_2_18, , ];
          const withTiming = isWishlisted(busy[19]).withTiming;
          const tmp2 = isWishlisted(busy[19]);
          items[1] = isWishlisted(busy[20]).scheduleOnRN;
          items[2] = closure_1_12;
          let c0;
          let c1;
          [tmp4, tmp5, tmp6] = items;
          const tmp3 = obj;
          class WishlistButtonTsx1 {
            constructor(arg0) {
              tmp = arg0;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                flag = false;
                tmp4 = closure_0(closure_1, false);
              }
              return;
            }
          }
          const items1 = [tmp5, tmp6];
          WishlistButtonTsx1.__closure = items1;
          WishlistButtonTsx1.__workletHash = 12515096529687;
          WishlistButtonTsx1.__initData = tmp4;
          const result = set(withTiming(1, tmp3, "animate-always", WishlistButtonTsx1));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    const items3 = [closure_19, tmp, , , ];
    const useAnimatedStyle = tmp2(tmp3[9]).useAnimatedStyle;
    tmp2(tmp3[9]);
    items3[2] = tmp2(tmp3[21]).withSpring;
    items3[3] = tmp9;
    items3[4] = tmp2(tmp3[22]).SUBTLE_SPRING;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
    class WishlistButtonTsx2 {
      constructor() {
        let items;
        let num2;
        obj = { opacity: _undefined(num2, c3, "animate-always"), transform: items };
        const merged = Object.assign(_undefined.animationFill);
        let num = 1;
        num2 = 1;
        if (c2) {
          num2 = 0;
        }
        if (c2) {
          num = 0.9;
        }
        items = [{ scale: _undefined(num, tmp4, "animate-always") }];
        ({ scale: _undefined(num, c3, "animate-always") });
        return obj;
      }
    }
    const items4 = [tmp17, tmp18, tmp19, tmp20];
    WishlistButtonTsx2.__closure = items4;
    WishlistButtonTsx2.__workletHash = 5411045007536;
    WishlistButtonTsx2.__initData = tmp16;
    const animatedStyle = useAnimatedStyle(WishlistButtonTsx2);
    const items5 = [closure_20, sharedValue, tmp, , , , , ];
    const useAnimatedStyle2 = tmp2(tmp3[9]).useAnimatedStyle;
    tmp2(tmp3[9]);
    items5[3] = tmp2(tmp3[21]).withSpring;
    items5[4] = tmp9;
    items5[5] = tmp2(tmp3[22]).SUBTLE_SPRING;
    items5[6] = tmp2(tmp3[9]).interpolate;
    items5[7] = tmp2(tmp3[9]).Extrapolation;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    let c4;
    let c5;
    let c6;
    [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
    class WishlistButtonTsx3 {
      constructor() {
        let items;
        let num;
        let tmp3;
        const value = _undefined.get();
        obj = { opacity: tmp3(num, c4, "animate-always"), transform: items };
        const merged = Object.assign(_undefined2.animationFill);
        num = 0;
        tmp3 = c2;
        if (c3) {
          num = 1;
        }
        items = [{ scale: _undefined3(value, [0, 0.625, 1], [0, 1.35, 1], _undefined4.CLAMP) }];
        ({ scale: _undefined3(value, [0, 0.625, 1], [0, 1.35, 1], _undefined4.CLAMP) });
        return obj;
      }
    }
    const items6 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
    WishlistButtonTsx3.__closure = items6;
    WishlistButtonTsx3.__workletHash = 698204376317;
    WishlistButtonTsx3.__initData = tmp23;
    const animatedStyle2 = useAnimatedStyle2(WishlistButtonTsx3);
    const items7 = [closure_21, sharedValue, tmp, tmp9, , ];
    const useAnimatedStyle3 = tmp2(tmp3[9]).useAnimatedStyle;
    tmp2(tmp3[9]);
    items7[4] = tmp2(tmp3[9]).interpolate;
    items7[5] = tmp2(tmp3[9]).Extrapolation;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items7;
    class WishlistButtonTsx4 {
      constructor() {
        let items;
        let num;
        const value = _undefined.get();
        obj = { opacity: num, transform: items };
        const merged = Object.assign(_undefined2.animationFill);
        num = 0;
        if (c2) {
          num = _undefined3(value, [0, 0.7], [1, 0], _undefined4.CLAMP);
        }
        items = [{ scale: _undefined3(value, [0, 0.625, 1], [0, 1.35, 1], _undefined4.CLAMP) }];
        ({ scale: _undefined3(value, [0, 0.625, 1], [0, 1.35, 1], _undefined4.CLAMP) });
        return obj;
      }
    }
    const items8 = [tmp34, tmp35, tmp36, tmp37, tmp38];
    WishlistButtonTsx4.__closure = items8;
    WishlistButtonTsx4.__workletHash = 2275753545643;
    WishlistButtonTsx4.__initData = tmp33;
    const obj4 = {
      style(pressed) {
        pressed = pressed.pressed;
        const items = [button.button, closure_8, closure_7 && button.midnight, , , ];
        if (pressed) {
          pressed = !disabled;
        }
        if (pressed) {
          pressed = closure_9;
        }
        items[3] = pressed;
        items[4] = disabled && button.disabled;
        items[5] = constants;
        return items;
      },
      onPress: callback,
      accessibilityRole: str,
      accessibilityLabel: tmp42,
      accessibilityState: tmp43,
      accessibilityElementsHidden: flag,
      importantForAccessibility: str2,
      children: sharedValue(closure_7, obj6)
    };
    str = "togglebutton";
    const animatedStyle3 = useAnimatedStyle3(WishlistButtonTsx4);
    const tmp41 = constants2;
    if (flag) {
      str = "none";
    }
    tmp42 = undefined;
    if (!flag) {
      tmp42 = accessibilityLabel;
    }
    tmp43 = undefined;
    if (!flag) {
      tmp43 = { checked: isWishlisted, busy, disabled };
      const obj5 = { checked: isWishlisted, busy, disabled };
    }
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj6 = { style: items9, children: items10 };
    items9 = [tmp.iconContainer, { width: tmp5, height: tmp5 }];
    const obj7 = { style: animatedStyle, pointerEvents: "none", children: closure_12(HeartOutlineIcon, obj8) };
    const View = onPress(tmp3[9]).View;
    obj8 = { size: tmp4[size], color: onPress(tmp3[12]).colors.INTERACTIVE_ICON_DEFAULT };
    HeartOutlineIcon = tmp2(tmp3[23]).HeartOutlineIcon;
    items10 = [closure_12(View, obj7), , ];
    const obj9 = { style: animatedStyle2, pointerEvents: "none", children: closure_12(HeartIcon, obj10) };
    const View2 = onPress(tmp3[9]).View;
    obj10 = { size: tmp4[size], color: onPress(tmp3[12]).unsafe_rawColors.RED_NEW_50 };
    HeartIcon = tmp2(tmp3[24]).HeartIcon;
    items10[1] = closure_12(View2, obj9);
    const obj11 = { style: animatedStyle3, pointerEvents: "none", children: closure_12(tmp2(tmp3[24]).HeartIcon, obj12) };
    const View3 = onPress(tmp3[9]).View;
    obj12 = { size: tmp4[size], color: "white" };
    items10[2] = closure_12(View3, obj11);
    return closure_12(tmp41, obj4);
  }
}
class WishlistButton {
  constructor(product) {
    let currentUser;
    let id;
    let text;
    product = product.product;
    const require = product;
    const onPress = product.onPress;
    const onTrackPress = product.onTrackPress;
    let tmp = null;
    const skuId = product.skuId;
    const merged = Object.assign(product, Object.assign({ skuId: 0, product: 0, onPress: 0, onTrackPress: 0 }));
    react = undefined;
    obj = require("get initialized");
    const items = [AuthenticationStore];
    const stateFromStores = obj.useStateFromStores(items, () => id.getId());
    obj2 = require("get initialized");
    const items1 = [UserStore];
    const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
    const tmp5 = onPress(onTrackPress[26])();
    const shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
    const showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
    const intl = require("intl").intl;
    let obj3 = { productName: product.name };
    const items2 = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, product];
    const formatToPlainStringResult = intl.formatToPlainString(require("intl").t["7kFjeK"], obj3);
    const callback = react.useCallback(() => {
      const tmp = shouldShowWishlistNUXActionSheet;
      if (tmp) {
        showWishlistNUXActionSheet(require);
      }
    }, items2);
    const intl2 = require("intl").intl;
    const stringResult = intl2.string(require("intl").t.F8FvUy);
    react = stringResult;
    const items3 = [stringResult];
    const callback1 = react.useCallback(() => {
      obj = ToastActionCreatorsDefault;
      obj2 = { text };
      obj.open("WISHLIST_ERROR", obj2);
    }, items3);
    let obj4 = require("useWishlistButtonState");
    const wishlistButtonState = obj4.useWishlistButtonState({ userId: stateFromStores, skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
    const isWishlisted = wishlistButtonState.isWishlisted;
    const handleToggle = wishlistButtonState.handleToggle;
    const isBusy = wishlistButtonState.isBusy;
    const items4 = [onPress, onTrackPress, isWishlisted, handleToggle];
    if (null != stateFromStores1) {
      const tmp12 = closure_12;
      const obj5 = { isWishlisted, onPress: tmp11, busy: isBusy, accessibilityLabel: formatToPlainStringResult };
      const merged1 = Object.assign(merged);
      tmp = closure_12(WishlistButtonBase, obj5);
    }
    return tmp;
  }
}
let react = react_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { duration: 400, easing: Easing.bezier(0.67, 0, 0.26, 1) };
Easing = _mod1652.Easing;
let obj2 = { sm: ButtonConstants.SMALL_BUTTON_HEIGHT, md: ButtonConstants.MEDIUM_BUTTON_HEIGHT };
const authStore4 = { sm: "sm", md: "md" };
let closure_17 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let obj6;
  obj = { button: size, light: obj2, lightPressed: obj3, dark: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT }, darkPressed: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE }, midnight: { borderColor: nativeDefault.colors.BORDER_STRONG }, disabled: { opacity: 0.5 }, iconContainer: { position: "relative", alignItems: "center", justifyContent: "center" }, animationFill: { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" } };
  size = { width: obj2[arg0], height: obj2[arg0], display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
  obj2 = { backgroundColor: obj4.setColorOpacity("white", 0.72) };
  obj4 = native;
  obj3 = { backgroundColor: obj6.setColorOpacity("white", 0.62) };
  obj6 = native;
  ({ backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT });
  ({ backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE });
  ({ borderColor: nativeDefault.colors.BORDER_STRONG });
  return obj;
});
let closure_18 = { code: "(function WishlistButtonTsx1(done){let[scheduleOnRN,setIsClickAnimating]=this.__closure;if(done){scheduleOnRN(setIsClickAnimating,false);}})" };
let closure_19 = { code: "(function WishlistButtonTsx2(){let[styles,withSpring,showFilled,SUBTLE_SPRING]=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};})" };
let closure_20 = { code: "(function WishlistButtonTsx3(){let[animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation]=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};})" };
let closure_21 = { code: "(function WishlistButtonTsx4(){let[animationFillProgress,styles,showFilled,interpolate,Extrapolation]=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const onTrackPress = selectedProduct.onTrackPress;
  const merged = Object.assign(selectedProduct, Object.assign({ selectedProduct: 0, onTrackPress: 0 }));
  const skuId = selectedProduct.skuId;
  obj = useProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(selectedProduct).isPurchased;
  CollectiblesWishlistUtils;
  if (!isPurchased) {
    obj2 = { skuId, product: selectedProduct, disabled: !tmp4, onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = authStore2(WishlistButton, obj2);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };
