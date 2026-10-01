// Module ID: 15319
// Function ID: 15320
// Name: CollectiblesTool
// Dependencies: [32, 19, 17, 10163, 1372, 6962, 6977, 7648, 1074, 1374, 21, 4836, 576, 8226, 4832, 5282, 10976, 563, 10198, 15320, 1177, 10542, 2]
// Exports: default

// Module 15319 (CollectiblesTool)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Text_Text from "Text/Text" /* 4832 */;
import BaseTextButton from "BaseTextButton" /* 5282 */;
import FramePreviewOverrideStore from "FramePreviewOverrideStore" /* 7648 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8226 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10542 */;
import actions_GiftCodeActionCreators from "actions/GiftCodeActionCreators" /* 10976 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10163 */;
import UserStore from "UserStore" /* 1372 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
class GiftingFlowSection {
  constructor(product) {
    let c0;
    let obj2;
    product = product.product;
    _require = undefined;
    let obj;
    if (null == product) {
      return closure_14(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Enter a valid product SKU ID above to preview the gift screens." });
    } else {
      _require = "devtools-collectibles-gift";
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        obj = { code: "devtools-collectibles-gift", user: obj2, sku_id: product.skuId, uses: 1, max_uses: 1, expires_at: null, redeemed: false, application_id, gift_style: PremiumGiftStyles.STANDARD_BOX };
        obj2 = { id: currentUser.id };
        const obj3 = {
          variant: "primary",
          pillStyle: tmp.previewButton,
          text: "Open Gift Redeem Modal",
          onPress() {
                obj = actions_GiftCodeActionCreators;
                return obj.openGiftCodeRedeemModal(c0, GiftCodeRecord.createFromServer(obj));
              }
        };
        return closure_14(require("BaseTextButton").BaseTextButton, obj3);
      }
    }
  }
}
function FramePreviewOverrideSection() {
  let items;
  let items1;
  let obj3;
  let statusError;
  const tmp = closure_16();
  const tmp2 = closure_11((override) => override.override);
  const tmp3 = closure_11((status) => status.status);
  let str = closure_11((error) => error.error);
  let closure_0 = closure_11((loadFromDevice) => loadFromDevice.loadFromDevice);
  const tmp4 = closure_11((clear) => clear.clear);
  if ("error" === tmp3) {
    statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  let str3 = "Loading\u2026";
  if ("loading" !== tmp3) {
    let str4;
    if ("error" === tmp3) {
      if (str == null) {
        str = "Failed to load";
      }
      str4 = str;
    } else {
      str4 = "No frame loaded";
      if (null != tmp2) {
        const frameKey = tmp2.frameKey;
        let str5 = "s";
        if (1 === tmp2.layers.length) {
          str5 = "";
        }
        const _HermesInternal = HermesInternal;
        str4 = "Showing \"" + frameKey + "\" \u00B7 " + length + " layer" + str5;
      }
    }
    str3 = str4;
  }
  const obj = { style: tmp.section, children: items };
  const obj2 = { style: tmp.sectionHeader, children: authStore2(Text_Text.Text, obj3) };
  obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
  items = [authStore2(metroRequire, obj2), , , , ];
  const obj4 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
  items[1] = authStore2(Text_Text.Text, obj4);
  const obj5 = { variant: "text-xs/normal", style: items1, children: str3 };
  items1 = [tmp.statusText, statusError];
  items[2] = authStore2(Text_Text.Text, obj5);
  const obj6 = {
    pillStyle: tmp.secondaryButton,
    text: "Load from device",
    onPress() {
      closure_0();
    }
  };
  items[3] = authStore2(BaseTextButton.BaseTextButton, obj6);
  let tmp12Result = null != tmp2;
  const tmp10 = closure_15;
  const tmp11 = metroRequire;
  const tmp12 = authStore2;
  if (tmp12Result) {
    const obj7 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
    tmp12Result = tmp12(BaseTextButton.BaseTextButton, obj7);
  }
  items[4] = tmp12Result;
  return tmp10(tmp11, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_11 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: obj3, contentContainer: obj4, section: obj5, sectionHeader: obj6, sectionTitle: obj7, inputContainer: obj8, inputWrapper: obj9, inputLabel: obj10, statusText: obj11, statusSuccess: obj12, statusError: obj13, statusLoading: obj14, previewContainer: obj15, previewButton: obj16, secondaryButton: obj17, description: obj18, placeholder: obj19, placeholderText: obj20 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
obj8 = { marginBottom: nativeDefault.space.PX_16 };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
obj10 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
obj11 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
obj12 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj14 = { color: nativeDefault.colors.TEXT_MUTED };
obj15 = { marginBottom: nativeDefault.space.PX_16 };
obj16 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
obj17 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
obj18 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
obj19 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
obj20 = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_16 = createStyles(obj);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  let require;
  let tmp2;
  [tmp2, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const layoutEffect = react.useLayoutEffect(() => {
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    CollectiblesPurchaseStore.getPurchase = () => {

    };
    CollectiblesPurchaseStore.emitChange();
    require("logAppStart");
    return () => {
      closure_2_10.getPurchase = getPurchase;
      closure_2_10.emitChange();
    };
  }, []);
  const obj = {};
  const tmp4 = CollectiblesShopCardV2Default;
  const merged = Object.assign(arg0);
  return closure_14(tmp4, obj, tmp2);
}
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default function _default() {
  let TextInput;
  let categories;
  let closure_0;
  let closure_3;
  let closure_4;
  let first1;
  let isFetching;
  let items10;
  let items11;
  let items13;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj15;
  let obj16;
  let obj22;
  let obj25;
  let obj29;
  let obj8;
  let product;
  let purchases;
  let str;
  let tmp14;
  const tmp = closure_16();
  let tmp2 = _require;
  let obj = require("useStateFromStores");
  const items = [CollectiblesCategoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj2 = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => purchases.purchases);
  const items2 = [CollectiblesCategoryStore];
  let tmp7 = stateFromStores.size > 0;
  const obj3 = require("useStateFromStores");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => CollectiblesCategoryStore.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  ({ isFetching, categories } = str(product[18])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
  let tmp20Result2 = tmp7;
  const tmp10 = str(product[18])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  const tmp9 = str;
  if (!tmp20Result2) {
    let tmp12 = !isFetching;
    if (tmp12) {
      if (tmp7) {
        categories = stateFromStores;
      }
      tmp12 = categories.size > 0;
    }
    tmp20Result2 = tmp12;
  }
  _require = tmp20Result2;
  [str, tmp14] = react.useState("");
  [product, _slicedToArray] = react.useState(null);
  [first1, react] = react.useState(null);
  const items3 = [str, tmp20Result2];
  const effect = react.useEffect(() => {
    if ("" !== str.trim()) {
      const tmp2 = closure_0;
      if (tmp2) {
        product = CollectiblesCategoryStore.getProduct(tmp);
        const categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(tmp);
        if (null != product) {
          if (null != categoryForProduct) {
            closure_3(product);
            closure_4(categoryForProduct);
          }
        }
        closure_3(null);
        closure_4(null);
      }
    }
    closure_3(null);
    closure_4(null);
  }, items3);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { contentContainerStyle: tmp.scrollContainer, showsVerticalScrollIndicator: false, children: null };
  const obj6 = { style: tmp.section, children: items4 };
  const obj7 = { style: tmp.sectionHeader, children: closure_14(tmp2(product[14]).Text, obj8) };
  obj8 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  items4 = [closure_14(closure_6, obj7), closure_14(tmp2(tmp3[19]).ShopSkipCategoriesFilter, {})];
  const items5 = [closure_15(closure_6, obj6), , , ];
  const obj9 = { style: tmp.section, children: items6 };
  const obj10 = { style: tmp.sectionHeader, children: closure_14(tmp2(product[14]).Text, obj11) };
  obj11 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  items6 = [closure_14(closure_6, obj10), ];
  const obj12 = { style: tmp.inputContainer, children: items7 };
  items7 = [, , , , ];
  const obj13 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  items7[0] = closure_14(tmp2(product[14]).Text, obj13);
  const obj14 = { style: tmp.inputWrapper, children: closure_14(TextInput, obj15) };
  obj15 = { value: str, onChangeText: tmp14, placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: obj16 };
  obj16 = { fontSize: 14, padding: tmp9(product[12]).space.PX_12 };
  TextInput = tmp2(tmp3[20]).TextInput;
  items7[1] = closure_14(closure_6, obj14);
  let tmp20Result = !tmp20Result2 && "" !== str.trim();
  const tmp23 = closure_5;
  if (tmp20Result) {
    const obj17 = { variant: "text-xs/normal", style: items8, children: "Loading products..." };
    items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    tmp20Result = tmp20(tmp2(tmp3[14]).Text, obj17);
  }
  items7[2] = tmp20Result;
  if (tmp20Result2) {
    tmp20Result2 = "" !== str.trim();
  }
  if (tmp20Result2) {
    tmp20Result2 = null == product;
  }
  if (tmp20Result2) {
    const obj18 = { variant: "text-xs/normal", style: items9, children: "Product not found" };
    items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    tmp20Result2 = tmp20(tmp2(tmp3[14]).Text, obj18);
  }
  items7[3] = tmp20Result2;
  let tmp22Result = null != product;
  if (tmp22Result) {
    const obj19 = { variant: "text-xs/normal", style: items10, children: items11 };
    items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    items11 = ["Found: ", product.name];
    tmp22Result = tmp22(tmp2(tmp3[14]).Text, obj19);
  }
  items7[4] = tmp22Result;
  items6[1] = closure_15(closure_6, obj12);
  items5[1] = closure_15(closure_6, obj9);
  const obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeader, children: closure_14(tmp2(product[14]).Text, obj22) };
  obj22 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" };
  const items12 = [closure_14(closure_6, obj21), ];
  if (null != product) {
    let tmp22Result2;
    if (null != first1) {
      const obj23 = { style: tmp.contentContainer, children: items13 };
      const obj24 = { style: tmp.previewContainer, children: closure_14(UnpurchasedCollectiblesShopCardV2, obj25) };
      obj25 = { product };
      items13 = [closure_14(closure_6, obj24), , ];
      const obj26 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                const obj = ProductPurchaseSuccessActionCreatorsDefault;
                obj.open(obj2);
              }
            }
      };
      items13[1] = closure_14(tmp2(product[15]).BaseTextButton, obj26);
      const obj27 = { product };
      items13[2] = closure_14(GiftingFlowSection, obj27);
      tmp22Result2 = tmp22(tmp21, obj23);
    }
    items12[1] = tmp22Result2;
    obj20.children = items12;
    items5[2] = closure_15(closure_6, obj20);
    items5[3] = closure_14(FramePreviewOverrideSection, {});
    obj5.children = items5;
    obj4.children = closure_15(tmp23, obj5);
    return closure_14(closure_6, obj4);
  }
  const obj28 = { style: tmp.placeholder, children: closure_15(tmp2(product[14]).Text, obj29) };
  obj29 = { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] };
  tmp22Result2 = tmp20(tmp21, obj28);
};
export { GiftingFlowSection };
