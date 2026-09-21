// Module ID: 13445
// Function ID: 13446
// Name: BundleProductDetailsActionSheetPreview
// Dependencies: [32, 19, 17, 1080, 21, 4758, 580, 558, 568, 13446, 6891, 1119, 7801, 13447, 4754, 2]

// Module 13445 (BundleProductDetailsActionSheetPreview)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7801 */;
import IndividualProductPreview from "IndividualProductPreview" /* 13447 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ memo, useCallback: closure_4, useLayoutEffect: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_8, ScrollView: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1080).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { previewContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, bundleThumbnail: null, selectedRing: null, bundleThumbnailRow: null, bundleContainer: null, bundleInfoContainer: null };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
obj2.bundleThumbnail = size;
const rect = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: nativeDefault.radii.sm + 2, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.selectedRing = rect;
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.bundleThumbnailRow = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj2.bundleContainer = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.bundleInfoContainer = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onTrackPress) => {
  const cResult = index(trackedSkuId[8]).c(19);
  ({ item, index } = onTrackPress);
  ({ isSelected, setSelected } = onTrackPress);
  ({ label, trackedSkuId } = onTrackPress);
  onTrackPress = onTrackPress.onTrackPress;
  if (cResult[0] === index) {
    if (cResult[1] === onTrackPress) {
      if (cResult[2] === setSelected) {
        if (cResult[3] === trackedSkuId) {
          let tmp3 = cResult[4];
        }
        const tmp5 = closure_14();
        if (cResult[5] !== item) {
          const obj2 = { item, size: 56 };
          const tmp9 = closure_12(setSelected(trackedSkuId[9]), obj2);
          cResult[5] = item;
          cResult[6] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp5.bundleThumbnail) {
          if (cResult[8] === tmp6) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === isSelected) {
            if (cResult[11] === tmp5.selectedRing) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp3) {
              if (cResult[14] === isSelected) {
                if (cResult[15] === label) {
                  if (cResult[16] === tmp10) {
                    if (cResult[17] === tmp14) {
                      let tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj3 = { role: "radio", "aria-checked": isSelected, onPress: tmp3, "aria-label": label, children: null };
            const items = [tmp10, tmp14];
            obj3.children = items;
            const tmp21 = closure_13(closure_8, obj3);
            cResult[13] = tmp3;
            cResult[14] = isSelected;
            cResult[15] = label;
            cResult[16] = tmp10;
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            tmp18 = tmp21;
          }
          let tmp15 = isSelected;
          if (isSelected) {
            const obj4 = { style: tmp5.selectedRing, pointerEvents: "none" };
            tmp15 = closure_12(closure_10, obj4);
          }
          cResult[10] = isSelected;
          cResult[11] = tmp5.selectedRing;
          cResult[12] = tmp15;
          tmp14 = tmp15;
        }
        const obj5 = { style: tmp5.bundleThumbnail, children: tmp6 };
        const tmp13 = closure_12(closure_10, obj5);
        cResult[7] = tmp5.bundleThumbnail;
        cResult[8] = tmp6;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const fn = function n() {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  };
  cResult[0] = index;
  cResult[1] = onTrackPress;
  cResult[2] = setSelected;
  cResult[3] = trackedSkuId;
  cResult[4] = fn;
  tmp3 = fn;
}) : ((index) => {
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = closure_14();
  const obj = {
    role: "radio",
    "aria-checked": isSelected,
    onPress: closure_4(() => {
      if (onTrackPress != null) {
        tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label,
    children: null
  };
  const tmp = closure_4(() => {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  }, items);
  const items1 = [closure_12(closure_10, { style: tmp2.bundleThumbnail, children: closure_12(setSelected(trackedSkuId[9]), { item, size: 56 }) }), ];
  if (isSelected) {
    const obj3 = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = closure_12(closure_10, obj3);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
}));
ReactCompilerGating = fn(558);
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((activeIndex) => {
  const cResult = bundledProducts(onSelect[8]).c(19);
  ({ items, bundledProducts } = activeIndex);
  activeIndex = activeIndex.activeIndex;
  onSelect = activeIndex.onSelect;
  const onTrackPress = activeIndex.onTrackPress;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = bundledProducts(onSelect[8]);
  const nativeGesture = bundledProducts(onSelect[10]).useNativeGesture(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[11]).intl;
    const stringResult = intl.string(tmp(tmp2[11]).t.cTbdgu);
    cResult[1] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === activeIndex) {
    if (cResult[3] === bundledProducts) {
      if (cResult[4] === items) {
        if (cResult[5] === onSelect) {
          if (cResult[6] === onTrackPress) {
            if (cResult[13] === tmp4.bundleThumbnailRow) {
              if (cResult[14] === tmp9) {
                let tmp13 = cResult[15];
              }
              if (cResult[16] === tmp13) {
                if (cResult[17] === nativeGesture) {
                  let tmp17 = cResult[18];
                }
                return tmp17;
              }
              const obj3 = { gesture: nativeGesture, children: tmp13 };
              const tmp19 = closure_12(tmp(tmp2[10]).GestureDetector, obj3);
              cResult[16] = tmp13;
              cResult[17] = nativeGesture;
              cResult[18] = tmp19;
              tmp17 = tmp19;
            }
            const obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp4.bundleThumbnailRow, role: "radiogroup", "aria-label": tmp7, children: cResult[7] };
            const tmp16 = closure_12(closure_9, obj4);
            cResult[13] = tmp4.bundleThumbnailRow;
            cResult[14] = cResult[7];
            cResult[15] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
    }
  }
  if (cResult[8] === activeIndex) {
    if (cResult[9] === bundledProducts) {
      if (cResult[10] === onSelect) {
        if (cResult[11] === onTrackPress) {
          let tmp10 = cResult[12];
        }
        const mapped = items.map(tmp10);
        cResult[2] = activeIndex;
        cResult[3] = bundledProducts;
        cResult[4] = items;
        cResult[5] = onSelect;
        cResult[6] = onTrackPress;
        cResult[7] = mapped;
      }
    }
  }
  class P {
    constructor(arg0, arg1) {
      obj = { item: activeIndex, index: arg1, isSelected: arg1 === activeIndex, setSelected: onSelect, label: null, trackedSkuId: null, onTrackPress: null };
      tmp3 = bundledProducts;
      name = undefined;
      tmp = jsx;
      tmp2 = closure_15;
      if (bundledProducts != null) {
        tmp5 = tmp3[arg1];
        if (tmp5 != null) {
          name = tmp5.name;
        }
      }
      if (name == null) {
        name = activeIndex.skuId;
      }
      obj.label = name;
      skuId = undefined;
      if (tmp3 != null) {
        tmp7 = tmp3[arg1];
        if (tmp7 != null) {
          skuId = tmp7.skuId;
        }
      }
      if (skuId == null) {
        skuId = activeIndex.skuId;
      }
      obj.trackedSkuId = skuId;
      obj.onTrackPress = onTrackPress;
      return tmp(tmp2, obj, activeIndex.skuId);
    }
  }
  cResult[8] = activeIndex;
  cResult[9] = bundledProducts;
  cResult[10] = onSelect;
  cResult[11] = onTrackPress;
  cResult[12] = P;
  tmp10 = P;
}) : ((arg0) => {
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: _slicedToArray } = arg0);
  const tmp = closure_14();
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.bundleThumbnailRow, role: "radiogroup", "aria-label": null, children: null };
  const intl = util.intl;
  obj3["aria-label"] = intl.string(util.t.cTbdgu);
  obj3.children = items.map((item, index) => {
    const obj = { item, index, isSelected: index === importDefault, setSelected, label: null, trackedSkuId: null, onTrackPress: null };
    let name;
    if (require != null) {
      if (tmp3[index] != null) {
        name = tmp5.name;
      }
    }
    if (name == null) {
      name = item.skuId;
    }
    obj.label = name;
    let skuId;
    if (require != null) {
      if (tmp3[index] != null) {
        skuId = tmp7.skuId;
      }
    }
    if (skuId == null) {
      skuId = item.skuId;
    }
    obj.trackedSkuId = skuId;
    obj.onTrackPress = onTrackPress;
    return __initData(closure_15, obj, item.skuId);
  });
  obj2.children = closure_12(closure_9, obj3);
  return closure_12(LegacyBaseButton.GestureDetector, obj2);
}));
ReactCompilerGating = fn(558);
let obj6 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(49);
  ({ product, width, handlePreviewPress, onTrackPress, onActiveItemChange } = arg0);
  const tmp4 = closure_14();
  [num, tmp6] = React5(0);
  const tmp5 = _slicedToArray(React5(0), 2);
  ({ items, bundledProducts } = product);
  if (product.skuId !== tmp7[0]) {
    tmp8(product.skuId);
    tmp6(0);
  }
  closure_1 = tmp11;
  if (cResult[0] === items[num]) {
    if (cResult[1] === onActiveItemChange) {
      let tmp12 = cResult[2];
      let tmp13 = cResult[3];
    }
    hasOwnProperty(tmp12, tmp13);
    let tmp17;
    if (bundledProducts != null) {
      tmp17 = bundledProducts[num];
    }
    let name;
    if (tmp17 != null) {
      name = tmp17.name;
    }
    if (name == null) {
      name = tmp11.skuId;
    }
    if (cResult[4] !== tmp11.type) {
      const collectibleTypeLabel = tmp(7801).getCollectibleTypeLabel(tmp11.type);
      cResult[4] = tmp11.type;
      cResult[5] = collectibleTypeLabel;
      let tmp19 = collectibleTypeLabel;
      const tmpResult = tmp(7801);
    } else {
      tmp19 = cResult[5];
    }
    if (cResult[6] !== tmp11) {
      const items1 = [tmp11];
      cResult[6] = tmp11;
      cResult[7] = items1;
      let tmp21 = items1;
    } else {
      tmp21 = cResult[7];
    }
    if (cResult[8] === tmp11.skuId) {
      if (cResult[9] === tmp11.type) {
        if (cResult[10] === tmp21) {
          let tmp22 = cResult[11];
        }
        if (cResult[12] === tmp22) {
          if (cResult[13] === handlePreviewPress) {
            if (cResult[14] === onTrackPress) {
              if (cResult[15] === width) {
                let tmp24 = cResult[16];
              }
              ({ bundleContainer, bundleInfoContainer } = tmp4);
              if (cResult[17] !== product.name) {
                const obj2 = { variant: "heading-xl/bold", children: product.name };
                const tmp29 = __initData(tmp(4754).Text, obj2);
                cResult[17] = product.name;
                cResult[18] = tmp29;
                let tmp27 = tmp29;
              } else {
                tmp27 = cResult[18];
              }
              if (cResult[19] !== items.length) {
                const intl = tmp(1119).intl;
                const obj4 = { num: items.length };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t["/0Yndu"], obj4);
                cResult[19] = items.length;
                cResult[20] = formatToPlainStringResult;
                let tmp30 = formatToPlainStringResult;
              } else {
                tmp30 = cResult[20];
              }
              if (cResult[21] !== tmp30) {
                const obj5 = { variant: "text-sm/medium", color: "text-default", children: tmp30 };
                const tmp34 = __initData(tmp(4754).Text, obj5);
                cResult[21] = tmp30;
                cResult[22] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[22];
              }
              if (cResult[23] === tmp4.bundleInfoContainer) {
                if (cResult[24] === tmp27) {
                  if (cResult[25] === tmp32) {
                    let tmp35 = cResult[26];
                  }
                  if (cResult[27] === num) {
                    if (cResult[28] === bundledProducts) {
                      if (cResult[29] === items) {
                        if (cResult[30] === onTrackPress) {
                          let tmp39 = cResult[31];
                        }
                        if (cResult[32] !== tmp19) {
                          let tmp44 = null != tmp19;
                          if (tmp44) {
                            const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
                            const _HermesInternal = HermesInternal;
                            obj6.children = " - " + tmp19;
                            tmp44 = __initData(tmp(4754).Text, obj6);
                          }
                          cResult[32] = tmp19;
                          cResult[33] = tmp44;
                          let tmp43 = tmp44;
                        } else {
                          tmp43 = cResult[33];
                        }
                        if (cResult[34] === name) {
                          if (cResult[35] === tmp43) {
                            let tmp47 = cResult[36];
                          }
                          if (cResult[37] === tmp4.bundleInfoContainer) {
                            if (cResult[38] === tmp39) {
                              if (cResult[39] === tmp47) {
                                let tmp50 = cResult[40];
                              }
                              if (cResult[41] === tmp4.bundleContainer) {
                                if (cResult[42] === tmp35) {
                                  if (cResult[43] === tmp50) {
                                    let tmp54 = cResult[44];
                                  }
                                  if (cResult[45] === tmp4.previewContainer) {
                                    if (cResult[46] === tmp54) {
                                      if (cResult[47] === tmp24) {
                                        let tmp58 = cResult[48];
                                      }
                                      return tmp58;
                                    }
                                  }
                                  const obj7 = { style: tmp23, children: null };
                                  const items2 = [tmp24, tmp54];
                                  obj7.children = items2;
                                  const tmp61 = __initData2(v65535, obj7);
                                  cResult[45] = tmp4.previewContainer;
                                  cResult[46] = tmp54;
                                  cResult[47] = tmp24;
                                  cResult[48] = tmp61;
                                  tmp58 = tmp61;
                                }
                              }
                              const obj8 = { style: bundleContainer, children: null };
                              const items3 = [tmp35, tmp50];
                              obj8.children = items3;
                              const tmp57 = __initData2(v65535, obj8);
                              cResult[41] = tmp4.bundleContainer;
                              cResult[42] = tmp35;
                              cResult[43] = tmp50;
                              cResult[44] = tmp57;
                              tmp54 = tmp57;
                            }
                          }
                          const obj9 = { style: tmp4.bundleInfoContainer, children: null };
                          const items4 = [tmp39, tmp47];
                          obj9.children = items4;
                          const tmp53 = __initData2(v65535, obj9);
                          cResult[37] = tmp4.bundleInfoContainer;
                          cResult[38] = tmp39;
                          cResult[39] = tmp47;
                          cResult[40] = tmp53;
                          tmp50 = tmp53;
                        }
                        const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
                        const items5 = [name, tmp43];
                        obj10.children = items5;
                        const tmp49 = __initData2(tmp(4754).Text, obj10);
                        cResult[34] = name;
                        cResult[35] = tmp43;
                        cResult[36] = tmp49;
                        tmp47 = tmp49;
                      }
                    }
                  }
                  const obj11 = { items, bundledProducts, activeIndex: num, onSelect: tmp6, onTrackPress };
                  const tmp42 = __initData(closure_16, obj11);
                  cResult[27] = num;
                  cResult[28] = bundledProducts;
                  cResult[29] = items;
                  cResult[30] = onTrackPress;
                  cResult[31] = tmp42;
                  tmp39 = tmp42;
                }
              }
              const obj12 = { style: bundleInfoContainer, children: null };
              const items6 = [tmp27, tmp32];
              obj12.children = items6;
              const tmp38 = __initData2(v65535, obj12);
              cResult[23] = tmp4.bundleInfoContainer;
              cResult[24] = tmp27;
              cResult[25] = tmp32;
              cResult[26] = tmp38;
              tmp35 = tmp38;
            }
          }
        }
        const obj13 = { product: tmp22, width, handlePreviewPress, onTrackPress };
        const tmp26 = __initData(tmp(13447).IndividualProductPreview, obj13);
        cResult[12] = tmp22;
        cResult[13] = handlePreviewPress;
        cResult[14] = onTrackPress;
        cResult[15] = width;
        cResult[16] = tmp26;
        tmp24 = tmp26;
      }
    }
    const obj14 = { skuId: null, type: null, items: null };
    ({ skuId: obj3.skuId, type: obj3.type } = tmp11);
    obj14.items = tmp21;
    cResult[8] = tmp11.skuId;
    cResult[9] = tmp11.type;
    cResult[10] = tmp21;
    cResult[11] = obj14;
    tmp22 = obj14;
  }
  class B {
    constructor() {
      if (onActiveItemChange != null) {
        tmp2 = closure_1;
        tmpResult = tmp(closure_1);
      }
      return;
    }
  }
  const items7 = [items[num], onActiveItemChange];
  cResult[0] = items[num];
  cResult[1] = onActiveItemChange;
  cResult[2] = B;
  cResult[3] = items7;
  tmp13 = items7;
  tmp12 = B;
}) : ((arg0) => {
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  closure_1 = undefined;
  ({ width, handlePreviewPress } = arg0);
  const tmp = closure_14();
  [num, tmp3] = React5(0);
  const tmp2 = _slicedToArray(React5(0), 2);
  ({ items, bundledProducts } = product);
  if (product.skuId !== tmp4[0]) {
    tmp5(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp8;
  const items1 = [items[num], onActiveItemChange];
  hasOwnProperty(() => {
    if (onActiveItemChange != null) {
      tmp(closure_1);
    }
  }, items1);
  let tmp10;
  if (bundledProducts != null) {
    tmp10 = bundledProducts[num];
  }
  let name;
  if (tmp10 != null) {
    name = tmp10.name;
  }
  if (name == null) {
    name = tmp8.skuId;
  }
  tmp4 = _slicedToArray(React5(product.skuId), 2);
  const collectibleTypeLabel = CollectiblesUtils.getCollectibleTypeLabel(tmp8.type);
  const items2 = [items[num]];
  const obj2 = { style: tmp.previewContainer, children: null };
  const items3 = [
    __initData(IndividualProductPreview.IndividualProductPreview, {
      product: timestampProducer(() => {
        const obj = { skuId: closure_1.skuId, type: closure_1.type, items: null };
        const items = [closure_1];
        obj.items = items;
        return obj;
      }, items2),
      width,
      handlePreviewPress,
      onTrackPress
    }),

  ];
  const obj3 = { style: tmp.bundleContainer, children: null };
  const obj4 = { style: tmp.bundleInfoContainer, children: null };
  const items4 = [__initData(Text_Text.Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.formatToPlainString(util.t["/0Yndu"], { num: items.length });
  items4[1] = __initData(Text_Text.Text, obj6);
  obj4.children = items4;
  const items5 = [__initData2(v65535, obj4), ];
  const obj8 = { style: tmp.bundleInfoContainer, children: null };
  const items6 = [__initData(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress }), ];
  const items7 = [name, ];
  let tmp18Result = null != collectibleTypeLabel;
  if (tmp18Result) {
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj9.children = " - " + collectibleTypeLabel;
    tmp18Result = __initData(Text_Text.Text, obj9);
  }
  items7[1] = tmp18Result;
  items6[1] = __initData2(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: items7 });
  obj8.children = items6;
  items5[1] = __initData2(v65535, obj8);
  obj3.children = items5;
  items3[1] = __initData2(v65535, obj3);
  obj2.children = items3;
  return __initData2(v65535, obj2);
});
