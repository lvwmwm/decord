// Module ID: 10257
// Function ID: 10258
// Name: PremiumGiftPromotionDetails
// Dependencies: [109, 32, 19, 17, 4826, 21, 588, 4837, 558, 576, 4833, 504, 8268, 1371, 10258, 5896, 1980, 8231, 2]

// Module 10257 (PremiumGiftPromotionDetails)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import Text_Text from "Text/Text" /* 4833 */;
import SKUPreview from "SKUPreview" /* 8231 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, product;

let c10;
let obj2;
let size;
let unpackModuleId;
let closure_3 = ["imageUrl", "shouldAnimate"];
let closure_4 = ["product"];
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, image: size, textContainer: { flex: 1 } };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 });
  size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let graphic;
  let items;
  let items1;
  let style;
  let subtitle;
  let subtitleColor;
  let subtitleVariant;
  let title;
  let titleColor;
  let titleVariant;
  const obj = react2;
  const cResult = obj.c(19);
  ({ style, graphic, title, titleVariant, titleColor, subtitle, subtitleVariant, subtitleColor } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (titleVariant == null) {
      titleVariant = "text-md/semibold";
    }
    if (titleColor == null) {
      titleColor = "text-default";
    }
    if (cResult[3] === titleVariant) {
      if (cResult[4] === titleColor) {
        let tmp7;
        if (cResult[5] === title) {
          tmp7 = cResult[6];
        }
        if (subtitleVariant == null) {
          subtitleVariant = "text-sm/medium";
        }
        if (subtitleColor == null) {
          subtitleColor = "text-subtle";
        }
        if (cResult[7] === subtitle) {
          if (cResult[8] === subtitleVariant) {
            let tmp10;
            if (cResult[9] === subtitleColor) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === tmp4.textContainer) {
              if (cResult[12] === tmp7) {
                let tmp13;
                if (cResult[13] === tmp10) {
                  tmp13 = cResult[14];
                }
                if (cResult[15] === graphic) {
                  if (cResult[16] === tmp5) {
                    let tmp17;
                    if (cResult[17] === tmp13) {
                      tmp17 = cResult[18];
                    }
                    return tmp17;
                  }
                }
                const obj2 = { style: tmp5, children: items };
                items = [graphic, tmp13];
                const tmp20 = unpackModuleId(View, obj2);
                cResult[15] = graphic;
                cResult[16] = tmp5;
                cResult[17] = tmp13;
                cResult[18] = tmp20;
                tmp17 = tmp20;
              }
            }
            const obj3 = { style: tmp4.textContainer, children: items1 };
            items1 = [tmp7, tmp10];
            const tmp16 = unpackModuleId(View, obj3);
            cResult[11] = tmp4.textContainer;
            cResult[12] = tmp7;
            cResult[13] = tmp10;
            cResult[14] = tmp16;
            tmp13 = tmp16;
          }
        }
        const obj4 = { variant: subtitleVariant, color: subtitleColor, children: subtitle };
        const tmp12 = authStore(Text_Text.Text, obj4);
        cResult[7] = subtitle;
        cResult[8] = subtitleVariant;
        cResult[9] = subtitleColor;
        cResult[10] = tmp12;
        tmp10 = tmp12;
      }
    }
    const obj5 = { variant: titleVariant, color: titleColor, children: title };
    const tmp9 = authStore(Text_Text.Text, obj5);
    cResult[3] = titleVariant;
    cResult[4] = titleColor;
    cResult[5] = title;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items2;
  tmp5 = items2;
}) : ((arg0) => {
  let graphic;
  let items;
  let items1;
  let items2;
  let style;
  let subtitle;
  let subtitleColor;
  let subtitleVariant;
  let title;
  let titleColor;
  let titleVariant;
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, title, subtitle } = arg0);
  const tmp = closure_13();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  items1 = [graphic, ];
  const obj2 = { style: tmp.textContainer, children: items2 };
  const Text = Text_Text.Text;
  if (titleVariant == null) {
    titleVariant = "text-md/semibold";
  }
  const obj3 = { variant: titleVariant, color: titleColor, children: title };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  items2 = [authStore(Text, obj3), ];
  const Text2 = Text_Text.Text;
  if (subtitleVariant == null) {
    subtitleVariant = "text-sm/medium";
  }
  const obj4 = { variant: subtitleVariant, color: subtitleColor, children: subtitle };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  items2[1] = authStore(Text2, obj4);
  items1[1] = unpackModuleId(View, obj2);
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let aPNGPlayerControls;
  let closure_0;
  let first;
  let imageUrl;
  let shouldAnimate;
  let style;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(18);
  ({ imageUrl, style, shouldAnimate } = arg0);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(aPNGPlayerControls[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const ref = react.useRef(null);
  const tmpResult3 = tmp(aPNGPlayerControls[12]);
  aPNGPlayerControls = tmpResult3.useAPNGPlayerControls(ref);
  [first, closure_4] = react.useState(false);
  const obj3 = react;
  if (cResult[2] === aPNGPlayerControls) {
    if (cResult[3] === (undefined === shouldAnimate || shouldAnimate)) {
      let tmp13;
      let tmp14;
      if (cResult[4] === stateFromStores) {
        tmp13 = cResult[5];
        tmp14 = cResult[6];
      }
      const effect = obj3.useEffect(tmp13, tmp14);
      if (cResult[7] === aPNGPlayerControls) {
        let tmp16;
        let tmp23;
        let tmp20;
        if (cResult[8] === first) {
          tmp16 = cResult[9];
        }
        let num6 = null;
        const tmp17 = stateFromStores;
        class C {
          constructor() {
            const tmp = first;
            if (tmp) {
              aPNGPlayerControls.play();
            }
          }
        }
        if (first) {
          num6 = 100;
        }
        tmp18(tmp16, num6);
        const tmpResult4 = tmp(aPNGPlayerControls[13]);
        if (tmpResult4.isAndroid()) {
          if (!stateFromStores) {
            if (cResult[10] === imageUrl) {
              if (cResult[11] === style) {
                tmp20 = cResult[12];
              }
            }
            const obj2 = { ref: null, url: imageUrl, autoplay: false, style };
            class C {
              constructor() {
                const tmp = first;
                if (tmp) {
                  aPNGPlayerControls.play();
                }
              }
            }
            const tmp22 = closure_10(tmp(aPNGPlayerControls[12]).APNGPlayer, obj2);
            cResult[10] = imageUrl;
            cResult[11] = style;
            cResult[12] = tmp22;
            tmp20 = tmp22;
          }
          return tmp20;
        }
        if (cResult[13] !== imageUrl) {
          const obj4 = { uri: imageUrl };
          class C {
            constructor() {
              const tmp = first;
              if (tmp) {
                aPNGPlayerControls.play();
              }
            }
          }
          cResult[14] = obj4;
          tmp23 = obj4;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] === style) {
          let tmp24;
          if (cResult[16] === tmp23) {
            tmp24 = cResult[17];
          }
          tmp20 = tmp24;
        }
        const obj5 = { style, resizeMode: "contain", source: tmp23 };
        const tmp26 = closure_10(tmp17(aPNGPlayerControls[15]), obj5);
        cResult[15] = style;
        cResult[16] = tmp23;
        cResult[17] = tmp26;
        tmp24 = tmp26;
      }
      class C {
        constructor() {
          const tmp = first;
          if (tmp) {
            aPNGPlayerControls.play();
          }
        }
      }
      cResult[7] = aPNGPlayerControls;
      cResult[8] = first;
      cResult[9] = C;
      tmp16 = C;
    }
  }
  const fn2 = function f() {
    const obj = utils_PlatformUtils;
    const isAndroidResult = obj.isAndroid() && !stateFromStores;
    if (isAndroidResult) {
      const tmp3 = closure_0;
      if (tmp3) {
        aPNGPlayerControls.seek(0);
        closure_4(true);
      } else {
        closure_4(false);
        aPNGPlayerControls.stop();
      }
    }
  };
  const items1 = [tmp4, aPNGPlayerControls, stateFromStores];
  cResult[2] = aPNGPlayerControls;
  cResult[3] = undefined === shouldAnimate || shouldAnimate;
  cResult[4] = stateFromStores;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp14 = items1;
  tmp13 = fn2;
}) : ((arg0) => {
  let first;
  let imageUrl;
  let shouldAnimate;
  let style;
  let useReducedMotion;
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let aPNGPlayerControls;
  first = undefined;
  closure_4 = undefined;
  let tmp = shouldAnimate;
  let obj = shouldAnimate(aPNGPlayerControls[11]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = react.useRef(null);
  const obj2 = shouldAnimate(aPNGPlayerControls[12]);
  aPNGPlayerControls = obj2.useAPNGPlayerControls(ref);
  [first, closure_4] = react.useState(false);
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = react.useEffect(() => {
    const obj = utils_PlatformUtils;
    const isAndroidResult = obj.isAndroid() && !stateFromStores;
    if (isAndroidResult) {
      const tmp3 = shouldAnimate;
      if (tmp3) {
        aPNGPlayerControls.seek(0);
        closure_4(true);
      } else {
        closure_4(false);
        aPNGPlayerControls.stop();
      }
    }
  }, items1);
  const tmp10 = stateFromStores(aPNGPlayerControls[14]);
  const tmp9 = stateFromStores;
  if (first) {
    num = 100;
  }
  tmp10(() => {
    const tmp = first;
    if (tmp) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmpResult = tmp(aPNGPlayerControls[13]);
  if (tmpResult.isAndroid()) {
    let tmp13;
    if (!stateFromStores) {
      const obj3 = { ref, url: imageUrl, autoplay: false, style };
      tmp13 = closure_10(tmp(tmp2[12]).APNGPlayer, obj3);
    }
    return tmp13;
  }
  const obj4 = { style, resizeMode: "contain", source: { uri: imageUrl } };
  tmp13 = closure_10(tmp9(tmp2[15]), obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let imageUrl;
  let shouldAnimate;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== arg0) {
    ({ imageUrl, shouldAnimate } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = imageUrl;
    cResult[2] = tmp7;
    cResult[3] = shouldAnimate;
    tmp4 = shouldAnimate;
    tmp3 = tmp7;
    tmp2 = imageUrl;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
  }
  const tmp8 = closure_13();
  if (cResult[4] === tmp2) {
    if (cResult[5] === tmp4) {
      let tmp9;
      if (cResult[6] === tmp8) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp3) {
        let tmp13;
        if (cResult[9] === tmp9) {
          tmp13 = cResult[10];
        }
        return tmp13;
      }
      const obj2 = { graphic: tmp9 };
      const merged = Object.assign(tmp3);
      const tmp19 = authStore(closure_14, obj2);
      cResult[8] = tmp3;
      cResult[9] = tmp9;
      cResult[10] = tmp19;
      tmp13 = tmp19;
    }
  }
  let tmp10 = null != tmp2;
  if (tmp10) {
    const obj3 = { style: tmp8.image, imageUrl: tmp2, shouldAnimate: tmp4 };
    tmp10 = authStore(closure_15, obj3);
  }
  cResult[4] = tmp2;
  cResult[5] = tmp4;
  cResult[6] = tmp8;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((imageUrl) => {
  imageUrl = imageUrl.imageUrl;
  const shouldAnimate = imageUrl.shouldAnimate;
  const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
  let tmp3Result = null != imageUrl;
  const tmp4 = closure_14;
  if (tmp3Result) {
    const obj = { style: tmp2.image, imageUrl, shouldAnimate };
    tmp3Result = tmp3(closure_15, obj);
  }
  const obj2 = { graphic: tmp3Result };
  const merged1 = Object.assign(merged);
  return authStore(tmp4, obj2);
});
createStyles = createStyles_mod;
let obj = { preview: size };
size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, border: obj2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_16 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let CollectiblesPreview;
  let obj11;
  let rounded;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  if (cResult[0] !== product) {
    product = product.product;
    const tmp8 = _objectWithoutProperties(product, closure_4);
    cResult[0] = product;
    cResult[1] = product;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = product;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_16();
  let tmp10;
  if (null != tmp4) {
    if (0 !== tmp4.items.length) {
      if (tmp4.type !== CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        let tmp12;
        if (cResult[6] !== tmp4.items[0]) {
          const obj3 = { type: "single", item: tmp4.items[0] };
          cResult[6] = tmp4.items[0];
          cResult[7] = obj3;
          tmp12 = obj3;
        } else {
          tmp12 = cResult[7];
        }
        tmp10 = tmp12;
      } else {
        if (cResult[3] === tmp4.items) {
          let tmp11;
          if (cResult[4] === tmp4.previewAssets) {
            tmp11 = cResult[5];
          }
          tmp10 = tmp11;
        }
        const obj4 = { type: "bundle", items: null, previewAssets: null };
        ({ items: obj2.items, previewAssets: obj2.previewAssets } = tmp4);
        cResult[3] = tmp4.items;
        cResult[4] = tmp4.previewAssets;
        cResult[5] = obj4;
        tmp11 = obj4;
      }
    }
  }
  if (cResult[8] === tmp10) {
    let tmp13;
    if (cResult[9] === tmp9) {
      tmp13 = cResult[10];
    }
    if (cResult[11] === tmp5) {
      let tmp21;
      if (cResult[12] === tmp13) {
        tmp21 = cResult[13];
      }
      return tmp21;
    }
    const obj5 = { graphic: tmp13 };
    const merged = Object.assign(tmp5);
    const tmp27 = authStore(closure_14, obj5);
    cResult[11] = tmp5;
    cResult[12] = tmp13;
    cResult[13] = tmp27;
    tmp21 = tmp27;
  }
  let tmp15Result = null != tmp10;
  if (tmp15Result) {
    const obj6 = { style: tmp9.preview, children: authStore(CollectiblesPreview, obj11) };
    obj11 = { collectiblesItemData: tmp10, size: rounded };
    CollectiblesPreview = tmp(8231).CollectiblesPreview;
    const tmp16 = View;
    if ("bundle" === tmp10.type) {
      const _Math2 = Math;
      rounded = Math.floor(1.2 * tmp17);
    } else {
      rounded = tmp17;
      if (tmp10.item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * tmp17);
      }
    }
    tmp15Result = tmp15(tmp16, obj6);
  }
  cResult[8] = tmp10;
  cResult[9] = tmp9;
  cResult[10] = tmp15Result;
  tmp13 = tmp15Result;
}) : ((product) => {
  let CollectiblesPreview;
  let obj2;
  let rounded;
  product = product.product;
  const require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [product];
  const tmp2 = closure_16();
  const memo = react.useMemo(() => {
    if (null != require) {
      if (0 !== require.items.length) {
        let obj;
        if (require.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          const obj3 = { type: "bundle", items: null, previewAssets: null };
          ({ items: obj2.items, previewAssets: obj2.previewAssets } = require);
          obj = obj3;
        } else {
          obj = { type: "single", item: require.items[0] };
        }
        return obj;
      }
    }
  }, items);
  let tmp4Result = null != memo;
  const tmp5 = closure_14;
  if (tmp4Result) {
    let obj = { style: tmp2.preview, children: closure_10(CollectiblesPreview, obj2) };
    obj2 = { collectiblesItemData: memo, size: rounded };
    CollectiblesPreview = SKUPreview.CollectiblesPreview;
    const tmp7 = View;
    const tmp8 = require;
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      rounded = Math.floor(1.2 * tmp10);
    } else {
      rounded = tmp10;
      if (memo.item.type === tmp8(1980).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * tmp10);
      }
    }
    tmp4Result = tmp4(tmp7, obj);
  }
  let obj3 = { graphic: tmp4Result };
  const merged1 = Object.assign(merged);
  return closure_10(tmp5, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default tmp3;
export const PremiumGiftPromotionCollectibleRewardDetails = tmp5;
