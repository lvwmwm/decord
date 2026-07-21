// Module ID: 8702
// Function ID: 68887
// Name: WishlistButtonBase
// Dependencies: []
// Exports: default

// Module 8702 (WishlistButtonBase)
class WishlistButtonBase {
  constructor(arg0) {
    isWishlisted = global.isWishlisted;
    arg1 = isWishlisted;
    onPress = global.onPress;
    importDefault = onPress;
    busy = global.busy;
    dependencyMap = busy;
    disabled = global.disabled;
    flag = global.accessibilityHidden;
    if (flag === undefined) {
      flag = false;
    }
    ({ style: closure_4, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    onTrackPress = global.onTrackPress;
    importAll = onTrackPress;
    closure_6 = undefined;
    View = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    ShopCtaEnum = undefined;
    closure_11 = undefined;
    jsx = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    tmp = f68906(size);
    closure_6 = tmp;
    tmp2 = arg1(dependencyMap[14]).ICON_SIZE[closure_16[size]];
    obj = arg1(dependencyMap[13]);
    theme = obj.useThemeContext().theme;
    obj2 = arg1(dependencyMap[15]);
    isThemeLightResult = obj2.isThemeLight(theme);
    View = theme === closure_11.MIDNIGHT;
    closure_8 = isThemeLightResult ? tmp.light : tmp.dark;
    closure_9 = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    enabled = importAll.useContext(arg1(dependencyMap[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    ShopCtaEnum = enabled;
    tmp4 = style(importAll.useState(false), 2);
    first = tmp4[0];
    closure_11 = first;
    jsx = tmp4[1];
    tmp6 = isWishlisted;
    if (!isWishlisted) {
      tmp6 = first;
    }
    closure_13 = tmp6;
    obj3 = arg1(dependencyMap[9]);
    num = 0;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = obj3.useSharedValue(num);
    closure_14 = sharedValue;
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
    callback = importAll.useCallback(() => {
      if (disabled) {
        let obj = onPress(busy[17]);
        obj = { key: "WISHLIST_DISABLED" };
        const intl = isWishlisted(busy[18]).intl;
        obj.content = intl.string(isWishlisted(busy[18]).t.50TX9k);
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
    effect = importAll.useEffect(() => {
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
    effect1 = importAll.useEffect(() => {
      if (first) {
        const result = sharedValue.set(0);
        const _requestAnimationFrame = requestAnimationFrame;
        let closure_0 = requestAnimationFrame(() => {
          let obj = callback(closure_2[19]);
          const fn = function t(arg0) {
            if (arg0) {
              callback(closure_2[9]).runOnJS(closure_12)(false);
              const obj = callback(closure_2[9]);
            }
          };
          obj = { runOnJS: callback(closure_2[9]).runOnJS, setIsClickAnimating: closure_12 };
          fn.__closure = obj;
          fn.__workletHash = 13061953734403;
          fn.__initData = closure_18;
          const result = closure_14.set(obj.withTiming(1, closure_14, "animate-always", fn));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    obj4 = arg1(dependencyMap[9]);
    class J {
      constructor() {
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        obj2 = isWishlisted(busy[20]);
        num = 1;
        num2 = 1;
        if (closure_13) {
          num2 = 0;
        }
        obj["opacity"] = obj2.withSpring(num2, isWishlisted(busy[21]).SUBTLE_SPRING, "animate-always");
        obj = {};
        obj4 = isWishlisted(busy[20]);
        if (closure_13) {
          num = 0.9;
        }
        obj.scale = obj4.withSpring(num, isWishlisted(busy[21]).SUBTLE_SPRING, "animate-always");
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj = { styles: tmp, withSpring: arg1(dependencyMap[20]).withSpring };
    obj.showFilled = tmp6;
    obj.SUBTLE_SPRING = arg1(dependencyMap[21]).SUBTLE_SPRING;
    J.__closure = obj;
    J.__workletHash = 1357254413161;
    J.__initData = f68906;
    animatedStyle = obj4.useAnimatedStyle(J);
    obj6 = arg1(dependencyMap[9]);
    class Y {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        obj2 = isWishlisted(busy[20]);
        num = 0;
        if (closure_13) {
          num = 1;
        }
        obj["opacity"] = obj2.withSpring(num, isWishlisted(busy[21]).SUBTLE_SPRING, "animate-always");
        obj = {};
        obj4 = isWishlisted(busy[9]);
        obj.scale = obj4.interpolate(value, [null, null, false], [], isWishlisted(busy[9]).Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj1 = { animationFillProgress: sharedValue, styles: tmp, withSpring: arg1(dependencyMap[20]).withSpring };
    obj1.showFilled = tmp6;
    obj1.SUBTLE_SPRING = arg1(dependencyMap[21]).SUBTLE_SPRING;
    obj1.interpolate = arg1(dependencyMap[9]).interpolate;
    obj1.Extrapolation = arg1(dependencyMap[9]).Extrapolation;
    Y.__closure = obj1;
    Y.__workletHash = 15039903885060;
    Y.__initData = f68906;
    animatedStyle1 = obj6.useAnimatedStyle(Y);
    obj8 = arg1(dependencyMap[9]);
    class K {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        num = 0;
        if (closure_13) {
          tmp3 = isWishlisted;
          tmp4 = busy;
          num2 = 9;
          obj2 = isWishlisted(busy[9]);
          tmp5 = obj2;
          tmp6 = value;
          num = obj2.interpolate(value, [], [], isWishlisted(busy[9]).Extrapolation.CLAMP);
        }
        obj["opacity"] = num;
        obj = {};
        obj4 = isWishlisted(busy[9]);
        obj.scale = obj4.interpolate(value, [null, null, false], [], isWishlisted(busy[9]).Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj["transform"] = items;
        return obj;
      }
    }
    obj2 = { animationFillProgress: sharedValue, styles: tmp };
    obj2.showFilled = tmp6;
    obj2.interpolate = arg1(dependencyMap[9]).interpolate;
    obj2.Extrapolation = arg1(dependencyMap[9]).Extrapolation;
    K.__closure = obj2;
    K.__workletHash = 12429379889426;
    K.__initData = f68906;
    obj3 = {
      style(pressed) {
            pressed = pressed.pressed;
            const items = [tmp.button, closure_8, , , , ];
            let midnight = closure_7;
            if (closure_7) {
              midnight = tmp.midnight;
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
              const disabled = tmp.disabled;
            }
            items[4] = disabled;
            items[5] = closure_4;
            return items;
          },
      onPress: callback
    };
    str = "togglebutton";
    animatedStyle2 = obj8.useAnimatedStyle(K);
    tmp14 = jsx;
    tmp15 = closure_6;
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
    obj7.color = importDefault(dependencyMap[12]).colors.INTERACTIVE_ICON_DEFAULT;
    obj6.children = jsx(arg1(dependencyMap[22]).HeartOutlineIcon, obj7);
    items4 = [, , ];
    items4[0] = jsx(importDefault(dependencyMap[9]).View, obj6);
    obj8 = { style: animatedStyle1, pointerEvents: "none" };
    obj9 = {};
    obj9.size = jsxs[size];
    obj9.color = importDefault(dependencyMap[12]).unsafe_rawColors.RED_NEW_50;
    obj8.children = jsx(arg1(dependencyMap[23]).HeartIcon, obj9);
    items4[1] = jsx(importDefault(dependencyMap[9]).View, obj8);
    obj10 = { style: animatedStyle2, pointerEvents: "none" };
    obj11 = {};
    obj11.size = jsxs[size];
    obj11.color = "white";
    obj10.children = jsx(arg1(dependencyMap[23]).HeartIcon, obj11);
    items4[2] = jsx(importDefault(dependencyMap[9]).View, obj10);
    obj5.children = items4;
    obj3.children = closure_13(View, obj5);
    return tmp14(tmp15, obj3);
  }
}
class WishlistButton {
  constructor(arg0) {
    product = global.product;
    arg1 = product;
    onPress = global.onPress;
    importDefault = onPress;
    onTrackPress = global.onTrackPress;
    dependencyMap = onTrackPress;
    obj = { 0: "ERROR", 9223372036854775807: "ERROR", 9223372036854775807: "NOT_RESPONDER", 9223372036854775807: "NOT_RESPONDER" };
    tmp = null;
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    obj2 = arg1(dependencyMap[24]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => id.getId());
    obj3 = arg1(dependencyMap[24]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
    tmp6 = importDefault(dependencyMap[25])();
    shouldShowWishlistNUXActionSheet = tmp6.shouldShowWishlistNUXActionSheet;
    useStateFromStores = shouldShowWishlistNUXActionSheet;
    showWishlistNUXActionSheet = tmp6.showWishlistNUXActionSheet;
    closure_4 = showWishlistNUXActionSheet;
    intl = arg1(dependencyMap[18]).intl;
    obj = { productName: product.name };
    items2 = [, , ];
    items2[0] = shouldShowWishlistNUXActionSheet;
    items2[1] = showWishlistNUXActionSheet;
    items2[2] = product;
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[18]).t.7kFjeK, obj);
    callback = importAll.useCallback(() => {
      if (shouldShowWishlistNUXActionSheet) {
        showWishlistNUXActionSheet(product);
      }
    }, items2);
    intl2 = arg1(dependencyMap[18]).intl;
    stringResult = intl2.string(arg1(dependencyMap[18]).t.F8FvUy);
    importAll = stringResult;
    items3 = [];
    items3[0] = stringResult;
    callback1 = importAll.useCallback(() => {
      let obj = onPress(onTrackPress[17]);
      obj = { key: "WISHLIST_ERROR", content: stringResult };
      obj.open(obj);
    }, items3);
    obj5 = arg1(dependencyMap[26]);
    wishlistButtonState = obj5.useWishlistButtonState({ userId: stateFromStores, skuId: global.skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
    isWishlisted = wishlistButtonState.isWishlisted;
    Pressable = isWishlisted;
    handleToggle = wishlistButtonState.handleToggle;
    View = handleToggle;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Pressable: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const ShopCtaEnum = arg1(dependencyMap[6]).ShopCtaEnum;
const ThemeTypes = arg1(dependencyMap[7]).ThemeTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = { duration: 400 };
const Easing = arg1(dependencyMap[9]).Easing;
obj.easing = Easing.bezier(0.67, 0, 0.26, 1);
obj = { sm: arg1(dependencyMap[10]).SMALL_BUTTON_HEIGHT, md: arg1(dependencyMap[10]).MEDIUM_BUTTON_HEIGHT };
let closure_16 = { overflow: "d6d04f6fd100db0e028d8a7cb876c1d6", position: "PlusSmallIcon" };
const tmp3 = arg1(dependencyMap[8]);
let closure_17 = arg1(dependencyMap[11]).createStyles((arg0) => {
  let obj = {};
  obj = { width: obj[arg0], height: obj[arg0], borderRadius: importDefault(dependencyMap[12]).radii.round, borderColor: importDefault(dependencyMap[12]).colors.CONTROL_SECONDARY_BORDER_DEFAULT };
  obj.button = obj;
  obj = {};
  let obj3 = arg1(dependencyMap[13]);
  obj.backgroundColor = obj3.setColorOpacity("white", 0.72);
  obj.light = obj;
  const obj1 = { backgroundColor: arg1(dependencyMap[13]).setColorOpacity("white", 0.62) };
  obj.lightPressed = obj1;
  const obj6 = arg1(dependencyMap[13]);
  obj.dark = { backgroundColor: importDefault(dependencyMap[12]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj3 = { backgroundColor: importDefault(dependencyMap[12]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
  obj.darkPressed = obj3;
  const obj2 = { backgroundColor: importDefault(dependencyMap[12]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj.midnight = { borderColor: importDefault(dependencyMap[12]).colors.BORDER_STRONG };
  obj.disabled = { opacity: 0.5 };
  obj.iconContainer = { fr: true, fs: true, ha: true };
  obj.animationFill = { icon: "<string:1627390343>", trailing: "<string:3175236087>", arrow: "<string:242483201>", onPress: "<string:234881024>" };
  return obj;
});
let closure_18 = { code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
let closure_19 = { code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}" };
let closure_20 = { code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let closure_21 = { code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
const obj3 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  let obj = Object.create(null);
  obj.selectedProduct = 0;
  obj.onTrackPress = 0;
  const merged = Object.assign(selectedProduct, obj);
  obj = arg1(dependencyMap[27]);
  arg1(dependencyMap[28]);
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj = { skuId: selectedProduct.skuId, product: selectedProduct, disabled: !tmp5, onTrackPress: selectedProduct.onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = callback2(WishlistButton, obj);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };
