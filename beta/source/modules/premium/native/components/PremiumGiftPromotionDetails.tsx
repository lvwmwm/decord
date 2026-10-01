// Module ID: 10219
// Function ID: 10220
// Name: PremiumGiftPromotionDetails
// Dependencies: [32, 19, 17, 4825, 21, 576, 4836, 4832, 504, 8271, 1365, 10220, 5899, 1974, 8234, 2]
// Exports: PremiumGiftPromotionCollectibleRewardDetails, default

// Module 10219 (PremiumGiftPromotionDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import Text_Text from "Text/Text" /* 4832 */;
import SKUPreview from "SKUPreview" /* 8234 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
function PremiumGiftPromotionDetailsBase(arg0) {
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
  const tmp = closure_10();
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
  items2 = [metroImportDefault(Text, obj3), ];
  const Text2 = Text_Text.Text;
  if (subtitleVariant == null) {
    subtitleVariant = "text-sm/medium";
  }
  const obj4 = { variant: subtitleVariant, color: subtitleColor, children: subtitle };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  items2[1] = metroImportDefault(Text2, obj4);
  items1[1] = metroImportAll(View, obj2);
  return metroImportAll(View, obj);
}
function AnimatedImage(arg0) {
  let closure_4;
  let imageUrl;
  let shouldAnimate;
  let style;
  let useReducedMotion;
  ({ imageUrl, style, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let aPNGPlayerControls;
  let first;
  react = undefined;
  let tmp = shouldAnimate;
  let obj = shouldAnimate(aPNGPlayerControls[8]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = react.useRef(null);
  const obj2 = shouldAnimate(aPNGPlayerControls[9]);
  aPNGPlayerControls = obj2.useAPNGPlayerControls(ref);
  const tmp6 = first(react.useState(false), 2);
  first = tmp6[0];
  react = tmp6[1];
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
  const tmp10 = stateFromStores(aPNGPlayerControls[11]);
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
  const tmpResult = tmp(aPNGPlayerControls[10]);
  if (tmpResult.isAndroid()) {
    let tmp13;
    if (!stateFromStores) {
      const obj3 = { ref, url: imageUrl, autoplay: false, style };
      tmp13 = closure_7(tmp(tmp2[9]).APNGPlayer, obj3);
    }
    return tmp13;
  }
  const obj4 = { style, resizeMode: "contain", source: { uri: imageUrl } };
  tmp13 = closure_7(tmp9(tmp2[12]), obj4);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, image: size, textContainer: { flex: 1 } };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 });
  size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs };
  return obj;
});
createStyles = createStyles_mod;
let obj = { preview: size };
size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, border: obj2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_13 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftPromotionDetails.tsx");

export default function PremiumGiftPromotionDetails(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  const shouldAnimate = imageUrl.shouldAnimate;
  const merged = Object.assign(imageUrl, Object.assign({ imageUrl: 0, shouldAnimate: 0 }));
  let tmp3Result = null != imageUrl;
  const tmp4 = PremiumGiftPromotionDetailsBase;
  if (tmp3Result) {
    const obj = { style: tmp2.image, imageUrl, shouldAnimate };
    tmp3Result = tmp3(AnimatedImage, obj);
  }
  const obj2 = { graphic: tmp3Result };
  const merged1 = Object.assign(merged);
  return metroImportDefault(tmp4, obj2);
};
export const PremiumGiftPromotionCollectibleRewardDetails = function PremiumGiftPromotionCollectibleRewardDetails(product) {
  let CollectiblesPreview;
  let obj2;
  let rounded;
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [product];
  const tmp2 = closure_13();
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
  const tmp5 = PremiumGiftPromotionDetailsBase;
  if (tmp4Result) {
    let obj = { style: tmp2.preview, children: closure_7(CollectiblesPreview, obj2) };
    obj2 = { collectiblesItemData: memo, size: rounded };
    CollectiblesPreview = SKUPreview.CollectiblesPreview;
    const tmp7 = View;
    const tmp8 = require;
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      rounded = Math.floor(1.2 * tmp10);
    } else {
      rounded = tmp10;
      if (memo.item.type === tmp8(1974).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * tmp10);
      }
    }
    tmp4Result = tmp4(tmp7, obj);
  }
  let obj3 = { graphic: tmp4Result };
  const merged1 = Object.assign(merged);
  return closure_7(tmp5, obj3);
};
