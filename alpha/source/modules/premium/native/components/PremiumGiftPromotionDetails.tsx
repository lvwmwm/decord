// Module ID: 11686
// Function ID: 11687
// Name: PremiumGiftPromotionDetails
// Dependencies: [19, 17, 5307, 21, 575, 5306, 5929, 504, 6020, 2114, 9462, 2]
// Exports: PremiumGiftPromotionCollectibleRewardDetails, default

// Module 11686 (PremiumGiftPromotionDetails)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2114 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import SKUPreview from "SKUPreview" /* 9462 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
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
  let topContent;
  ({ titleVariant, titleColor, subtitleVariant, subtitleColor } = arg0);
  ({ style, graphic, topContent, title, subtitle } = arg0);
  const tmp = closure_9();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  items1 = [graphic, ];
  const obj2 = { style: tmp.textContainer, children: items2 };
  items2 = [topContent, , ];
  const Text = Text_Text.Text;
  if (titleVariant == null) {
    titleVariant = "body-md/semibold";
  }
  const obj3 = { variant: titleVariant, color: titleColor, children: title };
  if (titleColor == null) {
    titleColor = "text-default";
  }
  items2[1] = metroRequire(Text, obj3);
  const Text2 = Text_Text.Text;
  if (subtitleVariant == null) {
    subtitleVariant = "body-sm/medium";
  }
  const obj4 = { variant: subtitleVariant, color: subtitleColor, children: subtitle };
  if (subtitleColor == null) {
    subtitleColor = "text-subtle";
  }
  items2[2] = metroRequire(Text2, obj4);
  items1[1] = metroImportDefault(View, obj2);
  return metroImportDefault(View, obj);
}
function AnimatedImage(shouldAnimate) {
  let imageUrl;
  let style;
  let useReducedMotion;
  let flag = shouldAnimate.shouldAnimate;
  ({ imageUrl, style } = shouldAnimate);
  if (flag === undefined) {
    flag = true;
  }
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style, resizeMode: "contain", source: { uri: imageUrl }, enableAnimation: flag };
  const tmp2 = metroRequire;
  const tmp3 = FastImageDefault;
  if (flag) {
    flag = !stateFromStores;
  }
  return tmp2(tmp3, obj2);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 }, image: size, textContainer: { flex: 1, alignSelf: "center" } };
  ({ flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 });
  size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xs };
  return obj;
});
createStyles = createStyles_mod;
let obj = { preview: size };
size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, border: obj2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_12 = createStyles(obj);
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
  return metroRequire(tmp4, obj2);
};
export function PremiumGiftPromotionCollectibleRewardDetails(product) {
  let CollectiblesPreview;
  let obj2;
  let rounded;
  product = product.product;
  require = product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [product];
  const tmp2 = closure_12();
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
    let obj = { style: tmp2.preview, children: closure_6(CollectiblesPreview, obj2) };
    obj2 = { collectiblesItemData: memo, size: rounded };
    CollectiblesPreview = SKUPreview.CollectiblesPreview;
    const tmp7 = View;
    const tmp8 = require;
    if ("bundle" === memo.type) {
      const _Math2 = Math;
      rounded = Math.floor(1.2 * tmp10);
    } else {
      rounded = tmp10;
      if (memo.item.type === tmp8(2114).CollectiblesItemType.AVATAR_DECORATION) {
        const _Math = Math;
        rounded = Math.floor(1.5 * tmp10);
      }
    }
    tmp4Result = tmp4(tmp7, obj);
  }
  let obj3 = { graphic: tmp4Result };
  const merged1 = Object.assign(merged);
  return closure_6(tmp5, obj3);
}
