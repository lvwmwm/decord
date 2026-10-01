// Module ID: 8300
// Function ID: 8301
// Name: WishlistButton
// Dependencies: [5, 32, 19, 17, 502, 1372, 1076, 1085, 21, 4566, 5286, 4836, 576, 4540, 6038, 4685, 4550, 4528, 1115, 4837, 5280, 5284, 8301, 8236, 504, 8232, 8292, 8303, 8231, 2]
// Exports: default

// Module 8300 (WishlistButton)
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import CollectiblesWishlistUtils from "CollectiblesWishlistUtils" /* 8231 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8303 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let Easing;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
class WishlistButtonBase {
  constructor(isWishlisted) {
    let HeartIcon;
    let HeartOutlineIcon;
    let first;
    let items3;
    let items4;
    let obj11;
    let obj13;
    let obj15;
    let obj9;
    let str;
    let str2;
    let tmp20;
    let tmp21;
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
    let closure_6 = tmp;
    let tmp2 = isWishlisted;
    const tmp3 = busy;
    const tmp4 = closure_16;
    const tmp5 = isWishlisted(busy[14]).ICON_SIZE[closure_16[size]];
    obj = isWishlisted(busy[13]);
    const theme = obj.useThemeContext().theme;
    obj2 = isWishlisted(busy[15]);
    const isThemeLightResult = obj2.isThemeLight(theme);
    let closure_7 = theme === first.ONYX;
    let closure_8 = isThemeLightResult ? tmp.light : tmp.dark;
    let closure_9 = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    let obj3 = onTrackPress;
    const enabled = onTrackPress.useContext(tmp2(tmp3[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    [first, closure_12] = onTrackPress.useState(false);
    let tmp9 = isWishlisted || first;
    let closure_13 = tmp9;
    const tmp2Result = tmp2(tmp3[9]);
    let num = 0;
    const useSharedValue = tmp2Result.useSharedValue;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = useSharedValue(num);
    let items = [disabled, busy, onPress, isWishlisted, enabled, first, onTrackPress];
    const items1 = [isWishlisted, first, sharedValue];
    const callback = obj3.useCallback(() => {
      let intl;
      const tmp = disabled;
      if (tmp) {
        obj = { key: "WISHLIST_DISABLED", content: intl.string(intl3.t["50TX9k"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl3.intl;
        open(obj);
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
      let setIsClickAnimating;
      let tmp = first;
      if (tmp) {
        let result = sharedValue.set(0);
        const _requestAnimationFrame = requestAnimationFrame;
        let closure_0 = requestAnimationFrame(() => {
          obj = isWishlisted(busy[19]);
          const fn = function t(arg0) {
            const tmp = arg0;
            if (tmp) {
              obj = closure_0(busy[9]);
              obj.runOnJS(setIsClickAnimating)(false);
            }
          };
          fn.__closure = { runOnJS: isWishlisted(busy[9]).runOnJS, setIsClickAnimating };
          fn.__workletHash = 13061953734403;
          fn.__initData = __initData;
          ({ runOnJS: isWishlisted(busy[9]).runOnJS, setIsClickAnimating });
          const result = set(obj.withTiming(1, sharedValue, "animate-always", fn));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    let fn = function z() {
      let items;
      let num2;
      let withSpring;
      obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
      const merged = Object.assign(closure_6.animationFill);
      let num = 1;
      num2 = 1;
      withSpring = spring.withSpring;
      spring;
      if (closure_13) {
        num2 = 0;
      }
      const withSpring2 = spring.withSpring;
      spring;
      if (closure_13) {
        num = 0.9;
      }
      items = [{ scale: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always") }];
      ({ scale: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always") });
      return obj;
    };
    const tmp2Result4 = tmp2(tmp3[9]);
    let obj4 = { styles: tmp, withSpring: tmp2(tmp3[20]).withSpring, showFilled: tmp9, SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING };
    fn.__closure = obj4;
    fn.__workletHash = 1357254413161;
    fn.__initData = __initData;
    const animatedStyle = tmp2Result4.useAnimatedStyle(fn);
    const tmp2Result5 = tmp2(tmp3[9]);
    class J {
      constructor() {
        let items;
        let num;
        let tmp3Result;
        let withSpring;
        const value = sharedValue.get();
        obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
        const merged = Object.assign(closure_6.animationFill);
        num = 0;
        withSpring = spring.withSpring;
        spring;
        if (closure_13) {
          num = 1;
        }
        obj2 = { scale: tmp3Result.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], ReanimatedRexport.Extrapolation.CLAMP) };
        items = [obj2];
        tmp3Result = ReanimatedRexport;
        return obj;
      }
    }
    J.__closure = { animationFillProgress: sharedValue, styles: tmp, withSpring: tmp2(tmp3[20]).withSpring, showFilled: tmp9, SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING, interpolate: tmp2(tmp3[9]).interpolate, Extrapolation: tmp2(tmp3[9]).Extrapolation };
    J.__workletHash = 15039903885060;
    J.__initData = __initData2;
    ({ animationFillProgress: sharedValue, styles: tmp, withSpring: tmp2(tmp3[20]).withSpring, showFilled: tmp9, SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING, interpolate: tmp2(tmp3[9]).interpolate, Extrapolation: tmp2(tmp3[9]).Extrapolation });
    const animatedStyle1 = tmp2Result5.useAnimatedStyle(J);
    const tmp2Result6 = tmp2(tmp3[9]);
    class X {
      constructor() {
        let items;
        let num;
        let obj4;
        const value = sharedValue.get();
        obj = { opacity: num, transform: items };
        const merged = Object.assign(closure_6.animationFill);
        num = 0;
        if (closure_13) {
          obj2 = ReanimatedRexport;
          num = obj2.interpolate(value, [0, 0.7], [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
        }
        const obj3 = { scale: obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], ReanimatedRexport.Extrapolation.CLAMP) };
        items = [obj3];
        obj4 = ReanimatedRexport;
        return obj;
      }
    }
    X.__closure = { animationFillProgress: sharedValue, styles: tmp, showFilled: tmp9, interpolate: tmp2(tmp3[9]).interpolate, Extrapolation: tmp2(tmp3[9]).Extrapolation };
    X.__workletHash = 12429379889426;
    X.__initData = __initData3;
    const tmp18 = closure_12;
    const obj7 = {
      style(pressed) {
        pressed = pressed.pressed;
        const items = [closure_6.button, closure_8, closure_7 && closure_6.midnight, , , ];
        if (pressed) {
          pressed = !disabled;
        }
        if (pressed) {
          pressed = closure_9;
        }
        items[3] = pressed;
        items[4] = disabled && closure_6.disabled;
        items[5] = _slicedToArray;
        return items;
      },
      onPress: callback,
      accessibilityRole: str,
      accessibilityLabel: tmp20,
      accessibilityState: tmp21,
      accessibilityElementsHidden: flag,
      importantForAccessibility: str2,
      children: closure_13(closure_7, obj9)
    };
    str = "togglebutton";
    ({ animationFillProgress: sharedValue, styles: tmp, showFilled: tmp9, interpolate: tmp2(tmp3[9]).interpolate, Extrapolation: tmp2(tmp3[9]).Extrapolation });
    const animatedStyle2 = tmp2Result6.useAnimatedStyle(X);
    const tmp19 = closure_6;
    if (flag) {
      str = "none";
    }
    tmp20 = undefined;
    if (!flag) {
      tmp20 = accessibilityLabel;
    }
    tmp21 = undefined;
    if (!flag) {
      tmp21 = { checked: isWishlisted, busy, disabled };
      const obj8 = { checked: isWishlisted, busy, disabled };
    }
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj9 = { style: items3, children: items4 };
    items3 = [tmp.iconContainer, { width: tmp5, height: tmp5 }];
    const obj10 = { style: animatedStyle, pointerEvents: "none", children: tmp18(HeartOutlineIcon, obj11) };
    const View = onPress(tmp3[9]).View;
    obj11 = { size: tmp4[size], color: onPress(tmp3[12]).colors.INTERACTIVE_ICON_DEFAULT };
    HeartOutlineIcon = tmp2(tmp3[22]).HeartOutlineIcon;
    items4 = [tmp18(View, obj10), , ];
    const obj12 = { style: animatedStyle1, pointerEvents: "none", children: tmp18(HeartIcon, obj13) };
    const View2 = onPress(tmp3[9]).View;
    obj13 = { size: tmp4[size], color: onPress(tmp3[12]).unsafe_rawColors.RED_NEW_50 };
    HeartIcon = tmp2(tmp3[23]).HeartIcon;
    items4[1] = tmp18(View2, obj12);
    const obj14 = { style: animatedStyle2, pointerEvents: "none", children: tmp18(tmp2(tmp3[23]).HeartIcon, obj15) };
    const View3 = onPress(tmp3[9]).View;
    obj15 = { size: tmp4[size], color: "white" };
    items4[2] = tmp18(View3, obj14);
    return tmp18(tmp19, obj7);
  }
}
class WishlistButton {
  constructor(product) {
    let content;
    let currentUser;
    let id;
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
    const tmp5 = onPress(onTrackPress[25])();
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
      obj2 = { key: "WISHLIST_ERROR", content };
      obj.open(obj2);
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
Easing = ReanimatedRexport.Easing;
let obj2 = { sm: ButtonConstants.SMALL_BUTTON_HEIGHT, md: ButtonConstants.MEDIUM_BUTTON_HEIGHT };
const authStore3 = { sm: "sm", md: "md" };
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
let closure_18 = { code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
const __initData = { code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}" };
const __initData2 = { code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
const __initData3 = { code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
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
    tmp = closure_12(WishlistButton, obj2);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };
