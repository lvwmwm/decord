// Module ID: 8710
// Function ID: 68939
// Name: WishlistButtonBase
// Dependencies: [5, 57, 31, 27, 1194, 1849, 655, 482, 33, 3991, 4547, 4130, 689, 3842, 5513, 3976, 3849, 3831, 1212, 4131, 4542, 4546, 8711, 8674, 566, 8670, 8702, 8713, 8668, 2]
// Exports: default

// Module 8710 (WishlistButtonBase)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "getProductPurchaseState";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ShopCtaEnum } from "items";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import { Easing } from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_6;
let closure_7;
let require = arg1;
class WishlistButtonBase {
  constructor(arg0) {
    isWishlisted = global.isWishlisted;
    onPress = global.onPress;
    busy = global.busy;
    disabled = global.disabled;
    flag = global.accessibilityHidden;
    if (flag === undefined) {
      flag = false;
    }
    ({ style, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    onTrackPress = global.onTrackPress;
    c6 = undefined;
    MIDNIGHT = undefined;
    dark = undefined;
    darkPressed = undefined;
    enabled = undefined;
    c11 = undefined;
    useState = undefined;
    c13 = undefined;
    c14 = undefined;
    tmp = f68958(size);
    c6 = tmp;
    tmp2 = require("ICON_SIZE").ICON_SIZE[jsxs[size]];
    obj = require("ManaContext");
    theme = obj.useThemeContext().theme;
    obj2 = require("AccessibilityAnnouncer");
    isThemeLightResult = obj2.isThemeLight(theme);
    MIDNIGHT = theme === c11.MIDNIGHT;
    dark = isThemeLightResult ? tmp.light : tmp.dark;
    darkPressed = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    enabled = onTrackPress.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp4 = style(onTrackPress.useState(false), 2);
    first = tmp4[0];
    c11 = first;
    useState = tmp4[1];
    tmp6 = isWishlisted;
    if (!isWishlisted) {
      tmp6 = first;
    }
    c13 = tmp6;
    obj3 = require("module_3991");
    num = 0;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = obj3.useSharedValue(num);
    c14 = sharedValue;
    items = [, , , , , , ];
    items[0] = disabled;
    items[1] = busy;
    items[2] = onPress;
    items[3] = isWishlisted;
    items[4] = enabled;
    items[5] = first;
    items[6] = onTrackPress;
    items1 = [, , ];
    items1[0] = isWishlisted;
    items1[1] = first;
    items1[2] = sharedValue;
    callback = onTrackPress.useCallback(() => {
      if (disabled) {
        let obj = onPress(busy[17]);
        obj = { key: "WISHLIST_DISABLED" };
        const intl = isWishlisted(busy[18]).intl;
        obj.content = intl.string(isWishlisted(busy[18]).t["50TX9k"]);
        obj.open(obj);
      } else if (!busy) {
        if (null == onTrackPress) {
          if (!isWishlisted) {
            if (!enabled) {
              callback(true);
            }
            if (null != onPress) {
              onPress();
            }
          }
          let tmp10 = isWishlisted;
          if (isWishlisted) {
            tmp10 = first;
          }
          if (tmp10) {
            callback(false);
          }
        } else {
          let tmp5 = enabled;
          tmp5 = onTrackPress(isWishlisted ? tmp5.REMOVE_FROM_WISHLIST : tmp5.ADD_TO_WISHLIST);
        }
      }
    }, items);
    effect = onTrackPress.useEffect(() => {
      if (!first) {
        let num = 0;
        if (isWishlisted) {
          num = 1;
        }
        const result = sharedValue.set(num);
      }
    }, items1);
    items2 = [, ];
    items2[0] = first;
    items2[1] = sharedValue;
    effect1 = onTrackPress.useEffect(() => {
      if (first) {
        let result = sharedValue.set(0);
        const _requestAnimationFrame = requestAnimationFrame;
        let closure_0 = requestAnimationFrame(() => {
          let obj = isWishlisted(busy[19]);
          const fn = function t(arg0) {
            if (arg0) {
              isWishlisted(busy[9]).runOnJS(outer2_12)(false);
              const obj = isWishlisted(busy[9]);
            }
          };
          obj = { runOnJS: isWishlisted(busy[9]).runOnJS, setIsClickAnimating: outer1_12 };
          fn.__closure = obj;
          fn.__workletHash = 13061953734403;
          fn.__initData = outer2_18;
          const result = outer1_14.set(obj.withTiming(1, sharedValue, "animate-always", fn));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    obj4 = require("module_3991");
    class J {
      constructor() {
        obj = {};
        merged = Object.assign(c6.animationFill);
        obj2 = require("withSpring");
        num = 1;
        num2 = 1;
        if (c13) {
          num2 = 0;
        }
        obj["opacity"] = obj2.withSpring(num2, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always");
        obj = {};
        obj4 = require("withSpring");
        if (c13) {
          num = 0.9;
        }
        obj.scale = obj4.withSpring(num, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always");
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj = { styles: tmp, withSpring: require("withSpring").withSpring };
    obj.showFilled = tmp6;
    obj.SUBTLE_SPRING = require("SUBTLE_SPRING").SUBTLE_SPRING;
    J.__closure = obj;
    J.__workletHash = 1357254413161;
    J.__initData = f68958;
    animatedStyle = obj4.useAnimatedStyle(J);
    obj6 = require("module_3991");
    class Y {
      constructor() {
        value = c14.get();
        obj = {};
        merged = Object.assign(c6.animationFill);
        obj2 = require("withSpring");
        num = 0;
        if (c13) {
          num = 1;
        }
        obj["opacity"] = obj2.withSpring(num, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always");
        obj = {};
        obj4 = require("module_3991");
        obj.scale = obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], require("module_3991").Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj1 = { animationFillProgress: sharedValue, styles: tmp, withSpring: require("withSpring").withSpring };
    obj1.showFilled = tmp6;
    obj1.SUBTLE_SPRING = require("SUBTLE_SPRING").SUBTLE_SPRING;
    obj1.interpolate = require("module_3991").interpolate;
    obj1.Extrapolation = require("module_3991").Extrapolation;
    Y.__closure = obj1;
    Y.__workletHash = 15039903885060;
    Y.__initData = f68958;
    animatedStyle1 = obj6.useAnimatedStyle(Y);
    obj8 = require("module_3991");
    class K {
      constructor() {
        value = c14.get();
        obj = {};
        merged = Object.assign(c6.animationFill);
        num = 0;
        if (c13) {
          tmp3 = isWishlisted;
          tmp4 = busy;
          num2 = 9;
          obj2 = require("module_3991");
          tmp5 = obj2;
          tmp6 = value;
          num = obj2.interpolate(value, [0, 0.7], [1, 0], require("module_3991").Extrapolation.CLAMP);
        }
        obj["opacity"] = num;
        obj = {};
        obj4 = require("module_3991");
        obj.scale = obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], require("module_3991").Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj2 = { animationFillProgress: sharedValue, styles: tmp };
    obj2.showFilled = tmp6;
    obj2.interpolate = require("module_3991").interpolate;
    obj2.Extrapolation = require("module_3991").Extrapolation;
    K.__closure = obj2;
    K.__workletHash = 12429379889426;
    K.__initData = f68958;
    obj3 = {
      style(pressed) {
            pressed = pressed.pressed;
            const items = [_undefined.button, closure_8, , , , ];
            let midnight = closure_7;
            if (closure_7) {
              midnight = _undefined.midnight;
            }
            items[2] = midnight;
            if (pressed) {
              pressed = !disabled;
            }
            if (pressed) {
              pressed = closure_9;
            }
            items[3] = pressed;
            if (disabled) {
              disabled = _undefined.disabled;
            }
            items[4] = disabled;
            items[5] = _slicedToArray;
            return items;
          },
      onPress: callback
    };
    str = "togglebutton";
    animatedStyle2 = obj8.useAnimatedStyle(K);
    tmp14 = useState;
    tmp15 = c6;
    if (flag) {
      str = "none";
    }
    obj3.accessibilityRole = str;
    accessibilityLabel = undefined;
    if (!flag) {
      accessibilityLabel = global.accessibilityLabel;
    }
    obj3.accessibilityLabel = accessibilityLabel;
    tmp17 = undefined;
    if (!flag) {
      obj4 = {};
      obj4.checked = isWishlisted;
      obj4.busy = busy;
      obj4.disabled = disabled;
      tmp17 = obj4;
    }
    obj3.accessibilityState = tmp17;
    obj3.accessibilityElementsHidden = flag;
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj3.importantForAccessibility = str2;
    obj5 = { style: items3 };
    items3 = [, ];
    items3[0] = tmp.iconContainer;
    items3[1] = { width: tmp2, height: tmp2 };
    obj6 = { style: animatedStyle, pointerEvents: "none" };
    obj7 = {};
    obj7.size = jsxs[size];
    obj7.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_ICON_DEFAULT;
    obj6.children = useState(require("HeartOutlineIcon").HeartOutlineIcon, obj7);
    items4 = [, , ];
    items4[0] = useState(require("module_3991").View, obj6);
    obj8 = { style: animatedStyle1, pointerEvents: "none" };
    obj9 = {};
    obj9.size = jsxs[size];
    obj9.color = require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_NEW_50;
    obj8.children = useState(require("HeartIcon").HeartIcon, obj9);
    items4[1] = useState(require("module_3991").View, obj8);
    obj10 = { style: animatedStyle2, pointerEvents: "none" };
    obj11 = {};
    obj11.size = jsxs[size];
    obj11.color = "white";
    obj10.children = useState(require("HeartIcon").HeartIcon, obj11);
    items4[2] = useState(require("module_3991").View, obj10);
    obj5.children = items4;
    obj3.children = c13(MIDNIGHT, obj5);
    return tmp14(tmp15, obj3);
  }
}
class WishlistButton {
  constructor(arg0) {
    product = global.product;
    closure_0 = product;
    onPress = global.onPress;
    onTrackPress = global.onTrackPress;
    obj = { skuId: 0, product: 0, onPress: 0, onTrackPress: 0 };
    tmp = null;
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    obj2 = require("initialize");
    items = [];
    items[0] = c8;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_8.getId());
    obj3 = require("initialize");
    items1 = [];
    items1[0] = c9;
    stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_9.getCurrentUser());
    tmp6 = require("useHasNeverWishlisted")();
    shouldShowWishlistNUXActionSheet = tmp6.shouldShowWishlistNUXActionSheet;
    useStateFromStores = shouldShowWishlistNUXActionSheet;
    showWishlistNUXActionSheet = tmp6.showWishlistNUXActionSheet;
    _slicedToArray = showWishlistNUXActionSheet;
    intl = require("getSystemLocale").intl;
    obj = { productName: product.name };
    items2 = [, , ];
    items2[0] = shouldShowWishlistNUXActionSheet;
    items2[1] = showWishlistNUXActionSheet;
    items2[2] = product;
    formatToPlainStringResult = intl.formatToPlainString(require("getSystemLocale").t["7kFjeK"], obj);
    callback = F8FvUy.useCallback(() => {
      if (shouldShowWishlistNUXActionSheet) {
        showWishlistNUXActionSheet(closure_0);
      }
    }, items2);
    intl2 = require("getSystemLocale").intl;
    stringResult = intl2.string(require("getSystemLocale").t.F8FvUy);
    F8FvUy = stringResult;
    items3 = [];
    items3[0] = stringResult;
    callback1 = F8FvUy.useCallback(() => {
      let obj = onPress(onTrackPress[17]);
      obj = { key: "WISHLIST_ERROR", content: result };
      obj.open(obj);
    }, items3);
    obj5 = require("useWishlistButtonState");
    wishlistButtonState = obj5.useWishlistButtonState({ userId: stateFromStores, skuId: global.skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
    isWishlisted = wishlistButtonState.isWishlisted;
    handleToggle = wishlistButtonState.handleToggle;
    // CreateGeneratorClosureLongIndex (0x67)
    items4 = [, , , ];
    items4[0] = onPress;
    items4[1] = onTrackPress;
    items4[2] = isWishlisted;
    items4[3] = handleToggle;
    if (null != stateFromStores1) {
      tmp13 = jsx;
      tmp14 = WishlistButtonBase;
      obj1 = {};
      obj1.isWishlisted = isWishlisted;
      obj1.onPress = tmp12;
      obj1.busy = wishlistButtonState.isBusy;
      obj1.accessibilityLabel = formatToPlainStringResult;
      tmp15 = obj1;
      tmp16 = merged;
      merged1 = Object.assign(merged);
      tmp = jsx(WishlistButtonBase, obj1);
    }
    return tmp;
  }
}
({ Pressable: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = { duration: 400 };
obj.easing = Easing.bezier(0.67, 0, 0.26, 1);
obj = { sm: require("getButtonPadding").SMALL_BUTTON_HEIGHT, md: require("getButtonPadding").MEDIUM_BUTTON_HEIGHT };
let closure_16 = { sm: "sm", md: "md" };
let closure_17 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { width: null, height: null, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: null, borderWidth: 1 };
  obj.width = obj[arg0];
  obj.height = obj[arg0];
  obj.borderRadius = importDefault(689).radii.round;
  obj.borderColor = importDefault(689).colors.CONTROL_SECONDARY_BORDER_DEFAULT;
  obj.button = obj;
  obj = {};
  let obj3 = require(3842) /* ManaContext */;
  obj.backgroundColor = obj3.setColorOpacity("white", 0.72);
  obj.light = obj;
  const obj1 = { backgroundColor: require(3842) /* ManaContext */.setColorOpacity("white", 0.62) };
  obj.lightPressed = obj1;
  const obj6 = require(3842) /* ManaContext */;
  obj.dark = { backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj3 = { backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
  obj.darkPressed = obj3;
  const obj2 = { backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj.midnight = { borderColor: importDefault(689).colors.BORDER_STRONG };
  obj.disabled = { opacity: 0.5 };
  obj.iconContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  obj.animationFill = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
  return obj;
});
let closure_18 = { code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
let closure_19 = { code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}" };
let closure_20 = { code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let closure_21 = { code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let result = require("result").fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  let obj = Object.create(null);
  obj.selectedProduct = 0;
  obj.onTrackPress = 0;
  const merged = Object.assign(selectedProduct, obj);
  obj = require(8713) /* getProductPurchaseState */;
  require(8668) /* getProductNameAndTypeFromSku */;
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj = { skuId: selectedProduct.skuId, product: selectedProduct, disabled: !tmp5, onTrackPress: selectedProduct.onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = callback2(WishlistButton, obj);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };
