// Module ID: 16021
// Function ID: 16022
// Name: CollectiblesTool
// Dependencies: [32, 19, 17, 7789, 7804, 8477, 21, 4758, 580, 558, 568, 9042, 4754, 5189, 565, 11031, 11376, 16022, 1181, 2]

// Module 16021 (CollectiblesTool)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4754 */;
import BaseTextButton from "BaseTextButton" /* 5189 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 9042 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11376 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7789 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7804 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(8477).useFramePreviewOverrideStore;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollContainer: null, section: null, sectionHeader: null, sectionTitle: null, inputContainer: null, inputWrapper: null, inputLabel: null, statusText: null, statusSuccess: null, statusError: null, statusLoading: null, previewContainer: null, previewButton: null, secondaryButton: null, description: null, placeholder: null, placeholderText: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.section = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.sectionHeader = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.sectionTitle = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
let obj7 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
obj2.inputWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
obj2.inputLabel = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
let obj10 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
obj2.statusText = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
let obj11 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
obj2.statusSuccess = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj12 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.statusError = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.statusLoading = { color: nativeDefault.colors.TEXT_MUTED };
let obj14 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.previewContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj15 = { marginBottom: nativeDefault.space.PX_16 };
obj2.previewButton = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
const obj16 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
obj2.secondaryButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
let obj17 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
obj2.description = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
let obj18 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
obj2.placeholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj19 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  const obj2 = noop;
  [tmp4, require] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const getPurchase = CollectiblesPurchaseStore.getPurchase;
      CollectiblesPurchaseStore.getPurchase = () => {

      };
      CollectiblesPurchaseStore.emitChange();
      require("logAppStart");
      return () => {
        CollectiblesPurchaseStore.getPurchase = getPurchase;
        CollectiblesPurchaseStore.emitChange();
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const layoutEffect = obj2.useLayoutEffect(tmp5, tmp6);
  if (cResult[2] === tmp4) {
    if (cResult[3] === arg0) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = {};
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  const merged = Object.assign(arg0);
  const tmp11 = closure_10(CollectiblesShopCardV2Default, obj3, tmp4);
  cResult[2] = tmp4;
  cResult[3] = arg0;
  cResult[4] = tmp11;
  tmp8 = tmp11;
}) : ((arg0) => {
  [tmp2, require] = noop.useState(0);
  const layoutEffect = noop.useLayoutEffect(() => {
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    CollectiblesPurchaseStore.getPurchase = () => {

    };
    CollectiblesPurchaseStore.emitChange();
    require("logAppStart");
    return () => {
      CollectiblesPurchaseStore.getPurchase = getPurchase;
      CollectiblesPurchaseStore.emitChange();
    };
  }, []);
  const obj = {};
  const tmp = _slicedToArray(noop.useState(0), 2);
  const merged = Object.assign(arg0);
  return closure_10(CollectiblesShopCardV2Default, obj, tmp2);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(34);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(override) {
      return override.override;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = closure_9(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(status) {
      return status.status;
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = closure_9(tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function u(error) {
      return error.error;
    };
    cResult[2] = fn3;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function x(loadFromDevice) {
      return loadFromDevice.loadFromDevice;
    };
    cResult[3] = fn4;
    let tmp12 = fn4;
  } else {
    tmp12 = cResult[3];
  }
  const tmp6Result5 = closure_9(tmp12);
  _require = tmp6Result5;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn5 = function _(clear) {
      return clear.clear;
    };
    cResult[4] = fn5;
    let tmp14 = fn5;
  } else {
    tmp14 = cResult[4];
  }
  const tmp6Result6 = closure_9(tmp14);
  if ("error" === tmp6Result) {
    let statusError = tmp4.statusError;
  } else {
    statusError = "loading" === tmp6Result ? tmp4.statusLoading : tmp4.statusSuccess;
  }
  if ("loading" === tmp6Result) {
    if (cResult[5] !== tmp4.sectionTitle) {
      const obj2 = { variant: "heading-md/semibold", style: tmp4.sectionTitle, children: "Frame Preview Override" };
      const tmp25 = v65535(tmp(4754).Text, obj2);
      cResult[5] = tmp4.sectionTitle;
      cResult[6] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[6];
    }
    if (cResult[7] === tmp4.sectionHeader) {
      if (cResult[10] !== tmp4.description) {
        const obj3 = { variant: "text-sm/normal", style: tmp4.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
        const tmp32 = v65535(tmp(4754).Text, obj3);
        cResult[10] = tmp4.description;
        cResult[11] = tmp32;
      }
      if (cResult[12] === statusError) {
        if (cResult[13] === tmp4.statusText) {
          let tmp33 = cResult[14];
        }
        if (cResult[15] === "Loading\u2026") {
          if (cResult[18] !== tmp6Result5) {
            class F {
              constructor() {
                tmp = closure_0();
                return;
              }
            }
            cResult[18] = tmp6Result5;
            cResult[19] = F;
          } else {
            class F {
              constructor() {
                tmp = closure_0();
                return;
              }
            }
          }
          if (cResult[20] === tmp4.secondaryButton) {
            class F {
              constructor() {
                tmp = closure_0();
                return;
              }
            }
            if (cResult[23] === tmp6Result6) {
              class F {
                constructor() {
                  tmp = closure_0();
                  return;
                }
              }
            }
            let tmp43 = null != tmp7;
            if (tmp43) {
              class F {
                constructor() {
                  tmp = closure_0();
                  return;
                }
              }
              const obj4 = { pillStyle: tmp4.secondaryButton, text: "Clear override", onPress: tmp6Result6 };
              tmp43 = v65535(tmp(5189).BaseTextButton, obj4);
            }
            cResult[23] = tmp6Result6;
            cResult[24] = tmp7;
            cResult[25] = tmp4.secondaryButton;
            cResult[26] = tmp43;
          }
          const obj5 = { pillStyle: tmp4.secondaryButton, text: "Load from device", onPress: tmp37 };
          const tmp40 = v65535(tmp(5189).BaseTextButton, obj5);
          cResult[20] = tmp4.secondaryButton;
          cResult[21] = tmp37;
          cResult[22] = tmp40;
        }
        const obj6 = { variant: "text-xs/normal", style: tmp33, children: "Loading\u2026" };
        const tmp36 = v65535(tmp(4754).Text, obj6);
        cResult[15] = "Loading\u2026";
        cResult[16] = tmp33;
        cResult[17] = tmp36;
      }
      const items = [tmp4.statusText, statusError];
      cResult[12] = statusError;
      cResult[13] = tmp4.statusText;
      cResult[14] = items;
      tmp33 = items;
    }
    const obj7 = { style: tmp4.sectionHeader, children: tmp23 };
    const tmp29 = v65535(timestampProducer, obj7);
    cResult[7] = tmp4.sectionHeader;
    cResult[8] = tmp23;
    cResult[9] = tmp29;
  } else {
    class F {
      constructor() {
        tmp = closure_0();
        return;
      }
    }
    if (tmp16) {
      class F {
        constructor() {
          tmp = closure_0();
          return;
        }
      }
      let combined = tmp6Result4;
    } else {
      class F {
        constructor() {
          tmp = closure_0();
          return;
        }
      }
      if (null != tmp7) {
        class F {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        if (1 === tmp7.layers.length) {
          class F {
            constructor() {
              tmp = closure_0();
              return;
            }
          }
        }
        const _HermesInternal = HermesInternal;
        combined = "Showing \"" + tmp18 + "\" \u00B7 " + length + " layer" + str2;
      }
    }
  }
}) : (() => {
  const tmp = closure_12();
  const tmp2 = closure_9((override) => override.override);
  const tmp3 = closure_9((status) => status.status);
  let str = closure_9((error) => error.error);
  closure_0 = closure_9((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    const obj = { style: tmp.section, children: null };
    const obj2 = { style: tmp.sectionHeader, children: null };
    const obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
    obj2.children = v65535(Text_Text.Text, obj3);
    const items = [v65535(timestampProducer, obj2), , , , ];
    const obj4 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    items[1] = v65535(Text_Text.Text, obj4);
    const obj5 = { variant: "text-xs/normal", style: null, children: null };
    const items1 = [tmp.statusText, statusError];
    obj5.style = items1;
    obj5.children = "Loading\u2026";
    items[2] = v65535(Text_Text.Text, obj5);
    const obj6 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          closure_0();
        }
    };
    items[3] = v65535(BaseTextButton.BaseTextButton, obj6);
    let tmp13Result = null != tmp2;
    if (tmp13Result) {
      const obj7 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
      tmp13Result = v65535(BaseTextButton.BaseTextButton, obj7);
    }
    items[4] = tmp13Result;
    obj.children = items;
    return closure_1_11(timestampProducer, obj);
  } else if (tmp5) {
    if (str == null) {
      str = "Failed to load";
    }
  } else {
    let str3 = "No frame loaded";
    if (null != tmp2) {
      const frameKey = tmp2.frameKey;
      let str4 = "s";
      if (1 === tmp2.layers.length) {
        str4 = "";
      }
      const _HermesInternal = HermesInternal;
      str3 = "Showing \"" + frameKey + "\" \u00B7 " + length + " layer" + str4;
    }
  }
});
ReactCompilerGating = fn(558);
let obj20 = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(88);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function h() {
      return CollectiblesCategoryStore.categories;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    class C {
      constructor() {
        return closure_1_8.purchases;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp10 = C;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CollectiblesCategoryStore];
    class B {
      constructor() {
        return closure_1_7.lastSuccessfulFetch;
      }
    }
    cResult[4] = items2;
    cResult[5] = B;
    let tmp14 = B;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult3 = require("useStateFromStores");
  let tmp17 = stateFromStores.size > 0;
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(tmp13, tmp14);
  if (tmp17) {
    tmp17 = stateFromStores1.size > 0;
  }
  if (tmp17) {
    tmp17 = null != stateFromStores2;
  }
  if (cResult[6] !== tmp17) {
    let obj2 = { logPerf: false, stalePurchasesOK: true, noOp: tmp17 };
    class B {
      constructor() {
        return closure_1_7.lastSuccessfulFetch;
      }
    }
    cResult[7] = obj2;
    let tmp19 = obj2;
  } else {
    tmp19 = cResult[7];
  }
  const tmp20 = value;
  const tmpResult4 = require("useStateFromStores");
  ({ isFetching, categories } = value(first1[15])(tmp19));
  let tmp22 = tmp17;
  if (!tmp17) {
    let tmp23 = !isFetching;
    if (!isFetching) {
      if (tmp17) {
        categories = stateFromStores;
      }
      tmp23 = categories.size > 0;
    }
    tmp22 = tmp23;
  }
  _require = tmp22;
  const obj6 = noop;
  const tmp21 = value(first1[15])(tmp19);
  value = _slicedToArray(noop.useState(""), 2)[0];
  [first1, _slicedToArray] = noop.useState(null);
  const tmp24 = _slicedToArray(noop.useState(""), 2);
  [r10094, noop] = noop.useState(null);
  if (cResult[8] === tmp22) {
    if (cResult[9] === value) {
      let tmp29 = cResult[10];
      let tmp30 = cResult[11];
    }
    const effect = obj6.useEffect(tmp29, tmp30);
    if (cResult[12] !== first1) {
      class X {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[16]);
            obj1 = { product: null, useCategoryImage: true };
            obj1.product = tmp;
            openResult = obj.open(obj1);
          }
          return;
        }
      }
      cResult[12] = first1;
      class B {
        constructor() {
          return closure_1_7.lastSuccessfulFetch;
        }
      }
      cResult[13] = X;
    } else {
      class X {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[16]);
            obj1 = { product: null, useCategoryImage: true };
            obj1.product = tmp;
            openResult = obj.open(obj1);
          }
          return;
        }
      }
    }
    class B {
      constructor() {
        return closure_1_7.lastSuccessfulFetch;
      }
    }
    if (cResult[16] === tmp4.sectionHeader) {
      class X {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[16]);
            obj1 = { product: null, useCategoryImage: true };
            obj1.product = tmp;
            openResult = obj.open(obj1);
          }
          return;
        }
      }
      const _Symbol = Symbol;
      class B {
        constructor() {
          return closure_1_7.lastSuccessfulFetch;
        }
      }
      if (cResult[20] === tmp4.section) {
        class X {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[16]);
              obj1 = { product: null, useCategoryImage: true };
              obj1.product = tmp;
              openResult = obj.open(obj1);
            }
            return;
          }
        }
        if (cResult[23] !== tmp4.sectionTitle) {
          class X {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[16]);
                obj1 = { product: null, useCategoryImage: true };
                obj1.product = tmp;
                openResult = obj.open(obj1);
              }
              return;
            }
          }
          { variant: "heading-md/semibold", style: null, children: "Product Configuration" }.style = tmp4.sectionTitle;
          class B {
            constructor() {
              return closure_1_7.lastSuccessfulFetch;
            }
          }
          cResult[23] = tmp4.sectionTitle;
          cResult[24] = tmp45;
          const obj3 = { variant: "heading-md/semibold", style: null, children: "Product Configuration" };
        } else {
          class X {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[16]);
                obj1 = { product: null, useCategoryImage: true };
                obj1.product = tmp;
                openResult = obj.open(obj1);
              }
              return;
            }
          }
        }
        if (cResult[25] === tmp4.sectionHeader) {
          class X {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[16]);
                obj1 = { product: null, useCategoryImage: true };
                obj1.product = tmp;
                openResult = obj.open(obj1);
              }
              return;
            }
          }
          if (cResult[28] !== tmp4.inputLabel) {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
            { variant: "text-md/semibold", style: null, children: "Primary Product SKU ID" }.style = tmp4.inputLabel;
            class B {
              constructor() {
                return closure_1_7.lastSuccessfulFetch;
              }
            }
            cResult[28] = tmp4.inputLabel;
            cResult[29] = tmp50;
            const obj4 = { variant: "text-md/semibold", style: null, children: "Primary Product SKU ID" };
          } else {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          class B {
            constructor() {
              return closure_1_7.lastSuccessfulFetch;
            }
          }
          if (tmp51 === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
            tmp53[1] = tmp20(tmp2[8]).space.PX_12;
            class B {
              constructor() {
                return closure_1_7.lastSuccessfulFetch;
              }
            }
            const tmp52 = tmp53;
          } else {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
          }
          if (cResult[31] !== value) {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
            const obj5 = { value, onChangeText: null, placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
            class B {
              constructor() {
                return closure_1_7.lastSuccessfulFetch;
              }
            }
            obj5.style = tmp52;
            const tmp55 = closure_10(tmp(tmp2[18]).TextInput, obj5);
            cResult[31] = value;
            cResult[32] = tmp55;
          } else {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
          }
          if (cResult[33] === tmp4.inputWrapper) {
            class X {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[16]);
                  obj1 = { product: null, useCategoryImage: true };
                  obj1.product = tmp;
                  openResult = obj.open(obj1);
                }
                return;
              }
            }
            if (cResult[36] === tmp22) {
              class X {
                constructor() {
                  if (null != closure_2) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[16]);
                    obj1 = { product: null, useCategoryImage: true };
                    obj1.product = tmp;
                    openResult = obj.open(obj1);
                  }
                  return;
                }
              }
            }
            let tmp61 = !tmp22;
            class B {
              constructor() {
                return closure_1_7.lastSuccessfulFetch;
              }
            }
            if (tmp61) {
              class X {
                constructor() {
                  if (null != closure_2) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[16]);
                    obj1 = { product: null, useCategoryImage: true };
                    obj1.product = tmp;
                    openResult = obj.open(obj1);
                  }
                  return;
                }
              }
              const obj7 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
              const items3 = [, ];
              class B {
                constructor() {
                  return closure_1_7.lastSuccessfulFetch;
                }
              }
              items3[1] = tmp4.statusLoading;
              obj7.style = items3;
              tmp61 = closure_10(tmp(tmp2[12]).Text, obj7);
            }
            cResult[36] = tmp22;
            cResult[37] = value;
            cResult[38] = tmp4.statusLoading;
            cResult[39] = tmp4.statusText;
            cResult[40] = tmp61;
          }
          const obj8 = { style: tmp4.inputWrapper, children: tmp54 };
          const tmp59 = closure_10(closure_6, obj8);
          cResult[33] = tmp4.inputWrapper;
          cResult[34] = tmp54;
          cResult[35] = tmp59;
        }
        class B {
          constructor() {
            return closure_1_7.lastSuccessfulFetch;
          }
        }
        const obj9 = { style: tmp4.sectionHeader, children: tmp44 };
        const tmp48 = closure_10(closure_6, obj9);
        cResult[25] = tmp4.sectionHeader;
        cResult[26] = tmp44;
        cResult[27] = tmp48;
      }
      const obj10 = { style: tmp4.section, children: null };
      const items4 = [tmp34, tmp39];
      obj10.children = items4;
      const tmp43 = closure_11(closure_6, obj10);
      cResult[20] = tmp4.section;
      cResult[21] = tmp34;
      cResult[22] = tmp43;
    }
    const obj11 = { style: tmp4.sectionHeader, children: tmp33 };
    const tmp37 = closure_10(closure_6, obj11);
    cResult[16] = tmp4.sectionHeader;
    cResult[17] = tmp33;
    cResult[18] = tmp37;
  }
  class L {
    constructor() {
      tmp = closure_1;
      if ("" !== closure_1.trim()) {
        tmp2 = closure_0;
        if (closure_0) {
          tmp3 = closure_7;
          product = closure_7.getProduct(tmp);
          categoryForProduct = closure_7.getCategoryForProduct(tmp);
          tmp6 = null;
          if (null != product) {
            if (null != categoryForProduct) {
              tmp11 = closure_3;
              tmp12 = closure_3(product);
              tmp13 = closure_4;
              tmp14 = closure_4(categoryForProduct);
            }
            return;
          }
          tmp7 = closure_3;
          tmp8 = closure_3(null);
          tmp9 = closure_4;
          tmp10 = closure_4(null);
        }
      }
      tmp15 = closure_3(null);
      tmp16 = closure_4(null);
      return;
    }
  }
  const items5 = [value, tmp22];
  cResult[8] = tmp22;
  cResult[9] = value;
  cResult[10] = L;
  cResult[11] = items5;
  tmp30 = items5;
  tmp29 = L;
}) : (() => {
  const tmp = closure_12();
  const items = [CollectiblesCategoryStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => purchases.purchases);
  let obj2 = require("useStateFromStores");
  const items2 = [CollectiblesCategoryStore];
  let tmp7 = stateFromStores.size > 0;
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items2, () => CollectiblesCategoryStore.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  const obj3 = require("useStateFromStores");
  const tmp9 = str;
  ({ isFetching, categories } = str(product[15])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
  let tmp18Result2 = tmp7;
  if (!tmp7) {
    let tmp12 = !isFetching;
    if (!isFetching) {
      if (tmp7) {
        categories = stateFromStores;
      }
      tmp12 = categories.size > 0;
    }
    tmp18Result2 = tmp12;
  }
  _require = tmp18Result2;
  const tmp13 = _slicedToArray(noop.useState(""), 2);
  str = tmp13[0];
  [product, _slicedToArray] = noop.useState(null);
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  noop = tmp16[1];
  const items3 = [str, tmp18Result2];
  const effect = noop.useEffect(() => {
    if ("" !== str.trim()) {
      if (closure_0) {
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
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" }) };
  const items4 = [closure_10(closure_6, obj7), closure_10(require("ShopSkipCategoriesFilter").ShopSkipCategoriesFilter, {})];
  obj6.children = items4;
  const items5 = [closure_11(closure_6, obj6), , , ];
  const obj9 = { style: tmp.section, children: null };
  const obj10 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" }) };
  const items6 = [closure_10(closure_6, obj10), ];
  const obj12 = { style: tmp.inputContainer, children: null };
  const items7 = [closure_10(require("Text/Text").Text, { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" }), , , , ];
  const obj14 = { style: tmp.inputWrapper, children: null };
  const obj15 = { value: str, onChangeText: tmp13[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
  const obj11 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  const obj13 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  const obj8 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const tmp10 = str(product[15])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  const tmp21 = closure_5;
  obj15.style = { fontSize: 14, padding: tmp9(product[8]).space.PX_12 };
  obj14.children = closure_10(require("native").TextInput, obj15);
  items7[1] = closure_10(closure_6, obj14);
  let tmp18Result = !tmp18Result2;
  if (!tmp18Result2) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    const obj17 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj17.style = items8;
    tmp18Result = tmp18(tmp2(tmp3[12]).Text, obj17);
  }
  items7[2] = tmp18Result;
  if (tmp18Result2) {
    tmp18Result2 = "" !== str.trim();
  }
  if (tmp18Result2) {
    tmp18Result2 = null == product;
  }
  if (tmp18Result2) {
    const obj18 = { variant: "text-xs/normal", style: null, children: "Product not found" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj18.style = items9;
    tmp18Result2 = tmp18(tmp2(tmp3[12]).Text, obj18);
  }
  items7[3] = tmp18Result2;
  let tmp20Result = null != product;
  if (tmp20Result) {
    const obj19 = { variant: "text-xs/normal", style: null, children: null };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj19.style = items10;
    const items11 = ["Found: ", product.name];
    obj19.children = items11;
    tmp20Result = tmp20(tmp2(tmp3[12]).Text, obj19);
  }
  items7[4] = tmp20Result;
  obj12.children = items7;
  items6[1] = closure_11(closure_6, obj12);
  obj9.children = items6;
  items5[1] = closure_11(closure_6, obj9);
  const obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" }) };
  const items12 = [closure_10(closure_6, obj21), ];
  if (null != product) {
    if (null != tmp16[0]) {
      const obj23 = { children: null };
      const obj24 = { style: tmp.previewContainer, children: null };
      const obj25 = { product };
      obj24.children = tmp18(closure_13, obj25);
      const items13 = [tmp18(tmp19, obj24), ];
      const obj26 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                ProductPurchaseSuccessActionCreatorsDefault.open(obj2);
              }
            }
      };
      items13[1] = tmp18(tmp2(tmp3[13]).BaseTextButton, obj26);
      obj23.children = items13;
      let tmp20Result2 = tmp20(tmp19, obj23);
    }
    items12[1] = tmp20Result2;
    obj20.children = items12;
    items5[2] = tmp20(tmp19, obj20);
    items5[3] = tmp18(closure_14, {});
    obj5.children = items5;
    obj4.children = tmp20(tmp21, obj5);
    return tmp18(tmp19, obj4);
  }
  const obj27 = { style: tmp.placeholder, children: closure_11(require("Text/Text").Text, { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] }) };
  tmp20Result2 = tmp18(tmp19, obj27);
});
