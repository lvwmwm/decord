// Module ID: 14690
// Function ID: 111972
// Name: FramePreviewOverrideSection
// Dependencies: [57, 31, 27, 6774, 6790, 8243, 33, 4130, 689, 8663, 4126, 4544, 624, 7859, 14691, 1273, 9772, 2]
// Exports: default

// Module 14690 (FramePreviewOverrideSection)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { useFramePreviewOverrideStore as closure_9 } from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let require = arg1;
function FramePreviewOverrideSection() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback2((override) => override.override);
  const tmp3 = callback2((status) => status.status);
  const tmp4 = callback2((error) => error.error);
  const _require = callback2((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    let obj = { style: tmp.section };
    obj = { style: tmp.sectionHeader };
    obj = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
    obj.children = callback3(_require(4126).Text, obj);
    const items = [callback3(closure_6, obj), , , , ];
    const obj1 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    items[1] = callback3(_require(4126).Text, obj1);
    const obj2 = { variant: "text-xs/normal" };
    const items1 = [tmp.statusText, statusError];
    obj2.style = items1;
    obj2.children = "Loading\u2026";
    items[2] = callback3(_require(4126).Text, obj2);
    const obj3 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          callback();
        }
    };
    items[3] = callback3(_require(4544).BaseTextButton, obj3);
    let tmp24 = null != tmp2;
    if (tmp24) {
      const obj4 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp5 };
      tmp24 = callback3(_require(4544).BaseTextButton, obj4);
    }
    items[4] = tmp24;
    obj.children = items;
    return closure_11(closure_6, obj);
  } else {
    let str7 = null;
    if (tmp6) {
      str7 = "Failed to load";
      if (tmp11) {
        str7 = tmp4;
      }
      let str2 = str7;
      tmp11 = str7 != tmp4;
    } else {
      str2 = "No frame loaded";
      if (str7 != tmp2) {
        const frameKey = tmp2.frameKey;
        let str3 = "s";
        if (1 === tmp2.layers.length) {
          str3 = "";
        }
        const _HermesInternal = HermesInternal;
        str2 = "Showing \"" + frameKey + "\" \u00B7 " + length + " layer" + str3;
      }
    }
  }
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.section = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.sectionHeader = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.sectionTitle = { flex: 1, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj4 = { flex: 1, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.inputContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.inputWrapper = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, padding: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, padding: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.inputLabel = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontWeight: "600" };
let obj8 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, fontSize: 12, fontWeight: "500" };
_createForOfIteratorHelperLoose.statusText = obj8;
let obj7 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontWeight: "600" };
_createForOfIteratorHelperLoose.statusSuccess = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
let obj9 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
_createForOfIteratorHelperLoose.statusError = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let obj10 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.statusLoading = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj11 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.previewContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj12 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.previewButton = { backgroundColor: "#23a55a", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
let obj13 = { backgroundColor: "#23a55a", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
_createForOfIteratorHelperLoose.secondaryButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj14 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj15 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.placeholder = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, padding: require("_createForOfIteratorHelperLoose").space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj17 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
_createForOfIteratorHelperLoose.placeholderText = obj17;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(0), 2);
  const layoutEffect = React.useLayoutEffect(() => {
    const getPurchase = outer1_8.getPurchase;
    outer1_8.getPurchase = () => {

    };
    outer1_8.emitChange();
    getPurchase(1);
    return () => {
      outer2_8.getPurchase = getPurchase;
      outer2_8.emitChange();
    };
  }, []);
  const obj = {};
  const tmp = callback(React.useState(0), 2);
  const merged = Object.assign(arg0);
  return callback3(importDefault(8663), obj, tmp2);
}
let obj16 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, padding: require("_createForOfIteratorHelperLoose").space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default function _default() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(first[12]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.categories);
  let obj1 = require(first[12]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_8.purchases);
  let obj2 = require(first[12]);
  const items2 = [_isNativeReflectConstruct];
  let tmp5 = stateFromStores.size > 0;
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_7.lastSuccessfulFetch);
  if (tmp5) {
    tmp5 = stateFromStores1.size > 0;
  }
  if (tmp5) {
    tmp5 = null != stateFromStores2;
  }
  obj = { logPerf: false, stalePurchasesOK: true, noOp: tmp5 };
  const tmp7 = str(first[13])(obj);
  let categories = tmp7.categories;
  let tmp8 = tmp5;
  if (!tmp5) {
    let tmp9 = !tmp7.isFetching;
    if (tmp9) {
      if (tmp5) {
        categories = stateFromStores;
      }
      tmp9 = categories.size > 0;
    }
    tmp8 = tmp9;
  }
  require = tmp8;
  const tmp10 = callback(React.useState(""), 2);
  str = tmp10[0];
  const tmp11 = callback(React.useState(null), 2);
  first = tmp11[0];
  callback = tmp11[1];
  const tmp13 = callback(React.useState(null), 2);
  React = tmp13[1];
  const items3 = [str, tmp8];
  const effect = React.useEffect(() => {
    if ("" !== str.trim()) {
      if (closure_0) {
        const product = outer1_7.getProduct(str);
        const categoryForProduct = outer1_7.getCategoryForProduct(str);
        if (null != product) {
          if (null != categoryForProduct) {
            callback(product);
            callback2(categoryForProduct);
          }
        }
        callback(null);
        callback2(null);
      }
    }
    callback(null);
    callback2(null);
  }, items3);
  obj = { style: tmp.container };
  obj1 = { contentContainerStyle: tmp.scrollContainer, showsVerticalScrollIndicator: false };
  obj2 = { style: tmp.section };
  const obj4 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const items4 = [callback3(closure_6, { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj4) }), callback3(require(first[14]).ShopSkipCategoriesFilter, {})];
  obj2.children = items4;
  const items5 = [callback4(closure_6, obj2), , , ];
  const obj5 = { style: tmp.section };
  const obj3 = { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj4) };
  const tmp15 = callback3;
  const tmp16 = closure_6;
  const tmp17 = callback4;
  const tmp18 = closure_5;
  const obj7 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  const items6 = [callback3(closure_6, { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj7) }), ];
  const obj8 = { style: tmp.inputContainer };
  const obj9 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  const items7 = [callback3(require(first[10]).Text, obj9), , , , ];
  const obj10 = { style: tmp.inputWrapper };
  const obj11 = { value: str, onChangeText: tmp10[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done" };
  const obj12 = { fontSize: 14, padding: str(first[8]).space.PX_12 };
  obj11.style = obj12;
  obj10.children = callback3(require(first[15]).TextInput, obj11);
  items7[1] = callback3(closure_6, obj10);
  let tmp23 = !tmp8;
  if (!tmp8) {
    tmp23 = "" !== str.trim();
  }
  if (tmp23) {
    const obj13 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj13.style = items8;
    tmp23 = callback3(require(first[10]).Text, obj13);
  }
  items7[2] = tmp23;
  if (tmp8) {
    tmp8 = "" !== str.trim();
  }
  if (tmp8) {
    tmp8 = null == first;
  }
  if (tmp8) {
    const obj14 = { variant: "text-xs/normal", style: null, children: "Product not found" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj14.style = items9;
    tmp8 = callback3(require(first[10]).Text, obj14);
  }
  items7[3] = tmp8;
  let tmp30 = null != first;
  if (tmp30) {
    const obj15 = { variant: "text-xs/normal" };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj15.style = items10;
    const items11 = ["Found: ", first.name];
    obj15.children = items11;
    tmp30 = callback4(require(first[10]).Text, obj15);
  }
  items7[4] = tmp30;
  obj8.children = items7;
  items6[1] = callback4(closure_6, obj8);
  obj5.children = items6;
  items5[1] = callback4(closure_6, obj5);
  const obj16 = { style: tmp.section };
  const obj6 = { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj7) };
  const tmp19 = callback4;
  const tmp20 = closure_6;
  const tmp21 = callback4;
  const tmp22 = closure_6;
  const obj18 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" };
  const items12 = [callback3(closure_6, { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj18) }), ];
  if (null != first) {
    if (null != tmp13[0]) {
      const obj19 = {};
      const obj20 = { style: tmp.previewContainer };
      const obj21 = { product: first };
      obj20.children = callback3(UnpurchasedCollectiblesShopCardV2, obj21);
      const items13 = [callback3(closure_6, obj20), ];
      const obj22 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                let obj = str(first[16]);
                obj = { product: first, useCategoryImage: true };
                obj.open(obj);
              }
            }
      };
      items13[1] = callback3(require(first[11]).BaseTextButton, obj22);
      obj19.children = items13;
      let tmp36 = callback4(closure_6, obj19);
    }
    items12[1] = tmp36;
    obj16.children = items12;
    items5[2] = tmp34(tmp35, obj16);
    items5[3] = callback3(FramePreviewOverrideSection, {});
    obj1.children = items5;
    obj.children = tmp17(tmp18, obj1);
    return tmp15(tmp16, obj);
  }
  const obj17 = { style: tmp.sectionHeader, children: callback3(require(first[10]).Text, obj18) };
  tmp34 = callback4;
  tmp35 = closure_6;
  tmp36 = callback3(closure_6, { style: tmp.placeholder, children: callback4(require(first[10]).Text, obj24) });
};
