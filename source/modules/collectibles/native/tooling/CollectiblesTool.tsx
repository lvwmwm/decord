// Module ID: 14575
// Function ID: 109808
// Name: FramePreviewOverrideSection
// Dependencies: []
// Exports: default

// Module 14575 (FramePreviewOverrideSection)
function FramePreviewOverrideSection() {
  const tmp = callback6();
  const tmp2 = callback3((override) => override.override);
  const tmp3 = callback3((status) => status.status);
  const tmp4 = callback3((error) => error.error);
  const callback = callback3((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    let obj = { style: tmp.section };
    obj = { style: tmp.sectionHeader };
    obj = { borderRadius: null, left: null, top: null, style: tmp.sectionTitle };
    obj.children = callback4(callback(dependencyMap[10]).Text, obj);
    const items = [callback4(closure_6, obj), , , , ];
    const obj1 = { borderRadius: "Array", left: "isArray", top: "Reflect", style: tmp.description };
    items[1] = callback4(callback(dependencyMap[10]).Text, obj1);
    const obj2 = { variant: "text-xs/normal" };
    const items1 = [tmp.statusText, statusError];
    obj2.style = items1;
    obj2.children = "Loading\u2026";
    items[2] = callback4(callback(dependencyMap[10]).Text, obj2);
    const obj3 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          callback();
        }
    };
    items[3] = callback4(callback(dependencyMap[11]).BaseTextButton, obj3);
    let tmp24 = null != tmp2;
    if (tmp24) {
      const obj4 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp5 };
      tmp24 = callback4(callback(dependencyMap[11]).BaseTextButton, obj4);
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
      const tmp11 = str7 != tmp4;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).useFramePreviewOverrideStore;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.scrollContainer = { padding: importDefault(dependencyMap[8]).space.PX_16, paddingBottom: importDefault(dependencyMap[8]).space.PX_32 };
const obj1 = { padding: importDefault(dependencyMap[8]).space.PX_16, paddingBottom: importDefault(dependencyMap[8]).space.PX_32 };
obj.section = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.lg, padding: importDefault(dependencyMap[8]).space.PX_16, marginBottom: importDefault(dependencyMap[8]).space.PX_16, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED };
const obj3 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.sectionHeader = obj3;
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.lg, padding: importDefault(dependencyMap[8]).space.PX_16, marginBottom: importDefault(dependencyMap[8]).space.PX_16, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED };
obj.sectionTitle = { flex: 1, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
const obj4 = { flex: 1, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.inputContainer = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
const obj5 = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.inputWrapper = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[8]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, padding: importDefault(dependencyMap[8]).space.PX_4 };
const obj6 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[8]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, padding: importDefault(dependencyMap[8]).space.PX_4 };
obj.inputLabel = { marginBottom: importDefault(dependencyMap[8]).space.PX_8, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT, fontWeight: "600" };
const obj8 = { "Bool(true)": true, "Bool(true)": null, "Bool(true)": 8, marginTop: importDefault(dependencyMap[8]).space.PX_8 };
obj.statusText = obj8;
const obj7 = { marginBottom: importDefault(dependencyMap[8]).space.PX_8, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT, fontWeight: "600" };
obj.statusSuccess = { color: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_POSITIVE };
const obj9 = { color: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_POSITIVE };
obj.statusError = { color: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_CRITICAL };
const obj10 = { color: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_CRITICAL };
obj.statusLoading = { color: importDefault(dependencyMap[8]).colors.TEXT_MUTED };
const obj11 = { color: importDefault(dependencyMap[8]).colors.TEXT_MUTED };
obj.previewContainer = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
const obj12 = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.previewButton = { backgroundColor: "#23a55a", borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, alignItems: "center" };
const obj13 = { backgroundColor: "#23a55a", borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, alignItems: "center" };
obj.secondaryButton = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, alignItems: "center", marginTop: importDefault(dependencyMap[8]).space.PX_8 };
const obj14 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, alignItems: "center", marginTop: importDefault(dependencyMap[8]).space.PX_8 };
obj.description = { color: importDefault(dependencyMap[8]).colors.TEXT_MUTED, marginBottom: importDefault(dependencyMap[8]).space.PX_12 };
const obj15 = { color: importDefault(dependencyMap[8]).colors.TEXT_MUTED, marginBottom: importDefault(dependencyMap[8]).space.PX_12 };
obj.placeholder = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, padding: importDefault(dependencyMap[8]).space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
const obj17 = { "Bool(true)": "png", "Bool(true)": "SETTINGS_PREMIUM_MANAGE_PLAN", "Bool(true)": "allowSparse", color: importDefault(dependencyMap[8]).colors.TEXT_MUTED };
obj.placeholderText = obj17;
let closure_12 = obj.createStyles(obj);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  let tmp2;
  [tmp2, closure_0] = callback2(React.useState(0), 2);
  const layoutEffect = React.useLayoutEffect(() => {
    const getPurchase = closure_8.getPurchase;
    closure_8.getPurchase = () => {

    };
    closure_8.emitChange();
    getPurchase(1);
    return () => {
      closure_8.getPurchase = getPurchase;
      closure_8.emitChange();
    };
  }, []);
  const obj = {};
  const tmp = callback2(React.useState(0), 2);
  const merged = Object.assign(arg0);
  return callback4(importDefault(dependencyMap[9]), obj, tmp2);
}
const obj16 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, padding: importDefault(dependencyMap[8]).space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default function _default() {
  const tmp = callback6();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => store.categories);
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => purchases.purchases);
  let obj2 = arg1(dependencyMap[12]);
  const items2 = [closure_7];
  let tmp5 = stateFromStores.size > 0;
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.lastSuccessfulFetch);
  if (tmp5) {
    tmp5 = stateFromStores1.size > 0;
  }
  if (tmp5) {
    tmp5 = null != stateFromStores2;
  }
  obj = { position: 1766088043, top: 827788593, noOp: tmp5 };
  const tmp7 = importDefault(dependencyMap[13])(obj);
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
  const arg1 = tmp8;
  const tmp10 = callback2(React.useState(""), 2);
  const importDefault = str;
  const tmp11 = callback2(React.useState(null), 2);
  const first = tmp11[0];
  const dependencyMap = first;
  const callback2 = tmp11[1];
  const tmp13 = callback2(React.useState(null), 2);
  const React = tmp13[1];
  const items3 = [tmp10[0], tmp8];
  const effect = React.useEffect(() => {
    if ("" !== str.trim()) {
      if (tmp8) {
        const product = store.getProduct(str);
        const categoryForProduct = store.getCategoryForProduct(str);
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
  const obj4 = { borderRadius: true, left: "/assets/design/components/Icon/native/redesign/generated/images", top: 24, style: tmp.sectionTitle };
  const items4 = [callback4(closure_6, { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj4) }), callback4(arg1(dependencyMap[14]).ShopSkipCategoriesFilter, {})];
  obj2.children = items4;
  const items5 = [callback5(closure_6, obj2), , , ];
  const obj5 = { style: tmp.section };
  const obj3 = { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj4) };
  const tmp15 = callback4;
  const tmp16 = closure_6;
  const tmp17 = callback5;
  const tmp18 = closure_5;
  const obj7 = { borderRadius: true, left: true, top: true, style: tmp.sectionTitle };
  const items6 = [callback4(closure_6, { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj7) }), ];
  const obj8 = { style: tmp.inputContainer };
  const obj9 = { borderRadius: "<string:3528584694>", left: "<string:2982494503>", top: "<string:3528523777>", style: tmp.inputLabel };
  const items7 = [callback4(arg1(dependencyMap[10]).Text, obj9), , , , ];
  const obj10 = { style: tmp.inputWrapper };
  const obj11 = { value: tmp10[0], onChangeText: tmp10[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done" };
  const obj12 = { fontSize: 14, padding: importDefault(dependencyMap[8]).space.PX_12 };
  obj11.style = obj12;
  obj10.children = callback4(arg1(dependencyMap[15]).TextInput, obj11);
  items7[1] = callback4(closure_6, obj10);
  let tmp23 = !tmp8;
  if (!tmp8) {
    tmp23 = "" !== str.trim();
  }
  if (tmp23) {
    const obj13 = { borderRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023524834930865437, left: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000163313580062558, top: 1758094639633310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj13.style = items8;
    tmp23 = callback4(arg1(dependencyMap[10]).Text, obj13);
  }
  items7[2] = tmp23;
  if (tmp8) {
    tmp8 = "" !== str.trim();
  }
  if (tmp8) {
    tmp8 = null == first;
  }
  if (tmp8) {
    const obj14 = { borderRadius: "Error", left: "Photos permission is required to save recordings", top: "Error" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj14.style = items9;
    tmp8 = callback4(arg1(dependencyMap[10]).Text, obj14);
  }
  items7[3] = tmp8;
  let tmp30 = null != first;
  if (tmp30) {
    const obj15 = { variant: "text-xs/normal" };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj15.style = items10;
    const items11 = [true, first.name];
    obj15.children = items11;
    tmp30 = callback5(arg1(dependencyMap[10]).Text, obj15);
  }
  items7[4] = tmp30;
  obj8.children = items7;
  items6[1] = callback5(closure_6, obj8);
  obj5.children = items6;
  items5[1] = callback5(closure_6, obj5);
  const obj16 = { style: tmp.section };
  const obj6 = { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj7) };
  const tmp19 = callback5;
  const tmp20 = closure_6;
  const tmp21 = callback5;
  const tmp22 = closure_6;
  const obj18 = { borderRadius: false, left: false, top: false, style: tmp.sectionTitle };
  const items12 = [callback4(closure_6, { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj18) }), ];
  if (null != first) {
    if (null != tmp13[0]) {
      const obj19 = {};
      const obj20 = { style: tmp.previewContainer };
      const obj21 = { product: first };
      obj20.children = callback4(UnpurchasedCollectiblesShopCardV2, obj21);
      const items13 = [callback4(closure_6, obj20), ];
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
      items13[1] = callback4(arg1(dependencyMap[11]).BaseTextButton, obj22);
      obj19.children = items13;
      let tmp36 = callback5(closure_6, obj19);
    }
    items12[1] = tmp36;
    obj16.children = items12;
    items5[2] = tmp34(tmp35, obj16);
    items5[3] = callback4(FramePreviewOverrideSection, {});
    obj1.children = items5;
    obj.children = tmp17(tmp18, obj1);
    return tmp15(tmp16, obj);
  }
  const obj17 = { style: tmp.sectionHeader, children: callback4(arg1(dependencyMap[10]).Text, obj18) };
  const tmp34 = callback5;
  const tmp35 = closure_6;
  tmp36 = callback4(closure_6, { style: tmp.placeholder, children: callback5(arg1(dependencyMap[10]).Text, obj24) });
};
