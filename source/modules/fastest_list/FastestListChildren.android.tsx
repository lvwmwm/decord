// Module ID: 9248
// Function ID: 72293
// Name: map
// Dependencies: []

// Module 9248 (map)
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ portal: { delete: 131420590, pos: -1717986767, items: -644245095, channel: 94527 } });
const obj = { items: [] };
const obj2 = arg1(dependencyMap[4]);
obj.keys = new Map();
obj.keyIndex = 0;
const map = new Map();
const memoResult = importAllResult.memo(importAllResult.forwardRef((listFooterAlwaysMounted) => {
  let horizontal;
  ({ estimatedListSize: closure_0, horizontal } = listFooterAlwaysMounted);
  if (horizontal === undefined) {
    horizontal = false;
  }
  const dependencyMap = horizontal;
  listFooterAlwaysMounted = listFooterAlwaysMounted.listFooterAlwaysMounted;
  const callback = listFooterAlwaysMounted;
  const listHeaderAlwaysMounted = listFooterAlwaysMounted.listHeaderAlwaysMounted;
  let flag = listFooterAlwaysMounted.placeholdersForceEnabled;
  if (flag === undefined) {
    flag = false;
  }
  const View = flag;
  const marginEnd = listFooterAlwaysMounted.marginEnd;
  const jsx = marginEnd;
  const marginStart = listFooterAlwaysMounted.marginStart;
  const callback2 = marginStart;
  const sectionsVersioned = listFooterAlwaysMounted.sectionsVersioned;
  let obj = sectionsVersioned;
  const renderItem = listFooterAlwaysMounted.renderItem;
  const renderListFooter = listFooterAlwaysMounted.renderListFooter;
  const renderListHeader = listFooterAlwaysMounted.renderListHeader;
  const renderSectionFooter = listFooterAlwaysMounted.renderSectionFooter;
  const renderSectionHeader = listFooterAlwaysMounted.renderSectionHeader;
  let flag2 = listFooterAlwaysMounted.wrapChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp;
  let first;
  let closure_16;
  let closure_17;
  let memo1;
  tmp = callback2();
  const items = [tmp.portal, marginStart, marginEnd];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.portal, { left: marginStart, right: marginEnd }];
    return items;
  }, items);
  const tmp3 = callback(listHeaderAlwaysMounted.useState(() => callback(horizontal[5])({ estimatedListSize: callback, sectionsVersioned })), 2);
  first = tmp3[0];
  closure_16 = tmp3[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    setVisibleItems(nativeEvent) {
      callback((arg0) => {
        let tmp = arg0;
        if (!arg0(closure_1[6])(arg0, arg0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }
  }), []);
  closure_17 = importAllResult.useRef(obj);
  const items1 = [horizontal, listFooterAlwaysMounted, listHeaderAlwaysMounted, flag, renderItem, renderListFooter, renderListHeader, renderSectionFooter, renderSectionHeader, sectionsVersioned, first, flag2];
  memo1 = importAllResult.useMemo(() => {
    let first;
    let item;
    let itemEnd;
    let itemKeys;
    let itemSize;
    let itemSizes;
    let itemStart;
    let keyId;
    let keysAreUniform;
    let listFooterKey;
    let listFooterSize;
    let listHeaderKey;
    let listHeaderSize;
    let listId;
    let sectionEnd;
    let sectionFooterKeys;
    let sectionFooterSizes;
    let sectionHeaderKeys;
    let sectionHeaderSizes;
    let sectionStart;
    let sections;
    function fastestListChildJSX(item, itemSize) {
      if (closure_13) {
        let obj = {};
        obj = {};
        let tmp10;
        if (closure_1) {
          tmp10 = itemSize;
        }
        obj.width = tmp10;
        let tmp12;
        if (!closure_1) {
          tmp12 = itemSize;
        }
        obj.height = tmp12;
        obj.overflow = "hidden";
        obj.style = obj;
        obj.collapsable = false;
        obj.children = item;
        return closure_5(closure_4, obj);
      } else if (validElement.isValidElement(item)) {
        return item;
      } else {
        const _Error = Error;
        const error = new Error("Must return a single child element.");
        throw error;
      }
    }
    ({ keysAreUniform, listId, itemKeys, itemSizes, listFooterKey, listFooterSize, listHeaderKey, listHeaderSize, sections, sectionFooterKeys, sectionFooterSizes, sectionHeaderKeys, sectionHeaderSizes } = sectionsVersioned);
    if (sectionsVersioned.sectionsId !== first.sectionsId) {
      let arr6 = ref;
      return ref.current;
    } else {
      arr6 = ref;
      const keyIndex = ref.current.keyIndex;
      arr6 = globalThis;
      const _Map = Map;
      arr6 = ref;
      arr6 = new.target;
      arr6 = new.target;
      const map = new Map(ref.current.keys);
      arr6 = map;
      const _Map2 = Map;
      arr6 = new.target;
      arr6 = new.target;
      const map1 = new Map();
      arr6 = map1;
      const items = [];
      const items1 = [];
      arr6 = callback;
      arr6 = horizontal;
      arr6 = first;
      arr6 = callback(horizontal[7])(listId, first, sections);
      ({ sectionStart, sectionEnd, itemStart, itemEnd } = arr6);
      arr6 = null;
      let sum1 = sectionStart;
      if (sectionStart <= sectionEnd) {
        do {
          let tmp4 = closure_4;
          let tmp5 = tmp35;
          let tmp6 = tmp36;
          let tmp7 = tmp37;
          let tmp8 = tmp38;
          let tmp9 = tmp39;
          if (!closure_4) {
            let num = 0;
            if (sum1 === sectionStart) {
              num = itemStart;
            }
            let diff = itemEnd;
            if (sum1 !== sectionEnd) {
              diff = sections[sum1] - 1;
            }
            let sum = num;
            let tmp12 = num;
            tmp5 = tmp35;
            tmp6 = tmp36;
            tmp7 = tmp37;
            tmp8 = tmp38;
            tmp9 = tmp39;
            let tmp13 = num;
            let tmp14 = diff;
            if (num <= diff) {
              do {
                let tmp15 = closure_8;
                let tmp16 = closure_8(sum1, sum);
                let tmp17 = sum;
                if (arr6) {
                  first = itemSizes[0].sizes[0];
                } else {
                  first = itemSizes[sum1].sizes[sum];
                }
                if (keysAreUniform) {
                  let first1 = itemKeys[0].keys[0];
                } else {
                  first1 = itemKeys[sum1].keys[sum];
                }
                let combined = first1;
                if ("" === first1) {
                  let _HermesInternal = HermesInternal;
                  combined = "s" + sum1 + "-i" + sum;
                }
                let _HermesInternal2 = HermesInternal;
                let combined1 = "" + listId + "-" + combined;
                let value = map.get(combined1);
                if (null != value) {
                  let result = map1.set(combined1, value);
                  let deleteResult = map.delete(combined1);
                  let tmp26 = closure_5;
                  let tmp27 = closure_0;
                  let tmp28 = closure_1;
                  let obj = { portalId: combined1 };
                  let tmp29 = closure_0(closure_1[8]);
                  obj.children = fastestListChildJSX(tmp16, first);
                  let _HermesInternal3 = HermesInternal;
                  let arr = items.push(closure_5(tmp29, obj, "" + value));
                } else {
                  obj = { keyId: combined1, item: tmp16, itemSize: first };
                  arr = items1.push(obj);
                }
                sum = sum + 1;
                let tmp31 = num;
                let tmp32 = diff;
                tmp5 = tmp16;
                tmp6 = first;
                tmp7 = first1;
                tmp8 = combined1;
                tmp9 = value;
                let tmp33 = sum;
              } while (sum <= diff);
            }
          }
          sum1 = sum1 + 1;
          let tmp35 = tmp5;
          let tmp36 = tmp6;
          let tmp37 = tmp7;
          let tmp38 = tmp8;
          let tmp39 = tmp9;
        } while (sum1 <= sectionEnd);
      }
      let tmp40 = keyIndex;
      let num2 = 0;
      let tmp41 = keyIndex;
      if (0 < items1.length) {
        do {
          ({ keyId, item, itemSize } = items1[num2]);
          if (map.size > 0) {
            let iter = map.keys();
            value = iter.next().value;
            value = map.get(value);
            let result1 = map1.set(keyId, value);
            let deleteResult1 = map.delete(value);
            let tmp54 = closure_5;
            let tmp55 = closure_0;
            let tmp56 = closure_1;
            obj = { portalId: keyId };
            let tmp57 = closure_0(closure_1[8]);
            obj.children = fastestListChildJSX(item, itemSize);
            let _HermesInternal5 = HermesInternal;
            let arr1 = items.push(closure_5(tmp57, obj, "" + value));
            let sum2 = tmp40;
          } else {
            let tmp42 = +tmp40;
            sum2 = tmp42 + 1;
            let text = `key-${tmp42}`;
            let result2 = map1.set(keyId, `key-${tmp42}`);
            let tmp46 = closure_5;
            let tmp47 = closure_0;
            let tmp48 = closure_1;
            let obj1 = { portalId: keyId };
            let tmp49 = closure_0(closure_1[8]);
            obj1.children = fastestListChildJSX(item, itemSize);
            let _HermesInternal4 = HermesInternal;
            let arr2 = items.push(closure_5(tmp49, obj1, "" + `key-${tmp42}`));
          }
          num2 = num2 + 1;
          tmp40 = sum2;
          tmp41 = sum2;
        } while (num2 < items1.length);
      }
      if (null != renderListHeader) {
        if (listHeaderSize > 0) {
          arr6 = listHeaderAlwaysMounted;
          if (listHeaderAlwaysMounted) {
            let str2 = "lh";
            if ("" !== listHeaderKey) {
              str2 = listHeaderKey;
            }
            const obj2 = {};
            const _HermesInternal6 = HermesInternal;
            obj2.portalId = "" + listId + "-" + str2;
            obj2.children = fastestListChildJSX(renderListHeader(), listHeaderSize);
            items.push(marginEnd(callback(horizontal[8]), obj2, str2));
            const tmp65 = callback(horizontal[8]);
          } else {
            let flag = false;
            if (!flag) {
              flag = false;
              if (0 === itemStart) {
                let diff1 = sectionStart - 1;
                flag = true;
                if (diff1 >= 0) {
                  flag = false;
                  while (sections[diff1] <= 0) {
                    diff1 = diff1 - 1;
                    flag = true;
                    if (diff1 < 0) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (null != renderListFooter) {
        if (listFooterSize > 0) {
          arr6 = listFooterAlwaysMounted;
          if (listFooterAlwaysMounted) {
            let str3 = "lf";
            if ("" !== listFooterKey) {
              str3 = listFooterKey;
            }
            const _HermesInternal7 = HermesInternal;
            const combined2 = "" + listId + "-" + str3;
            const obj3 = { portalId: combined2, children: fastestListChildJSX(renderListFooter(), listFooterSize) };
            items.push(marginEnd(callback(horizontal[8]), obj3, combined2));
            const tmp75 = callback(horizontal[8]);
          } else {
            let flag2 = false;
            if (!flag) {
              const _Math = Math;
              flag2 = false;
              if (itemEnd === Math.max(sections[sectionEnd] - 1, 0)) {
                let sum3 = sectionEnd + 1;
                flag2 = true;
                if (sum3 < sections.length) {
                  flag2 = false;
                  while (sections[sum3] <= 0) {
                    sum3 = sum3 + 1;
                    flag2 = true;
                    if (sum3 >= sections.length) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      while (sectionStart <= sectionEnd) {
        let tmp80 = flag;
        let tmp81 = tmp78;
        let tmp82 = tmp79;
        if (!flag) {
          let tmp83 = tmp2 ? sectionFooterSizes[0] : sectionFooterSizes[sectionStart];
          let tmp84 = tmp78;
          if (tmp83 > 0) {
            arr6 = renderSectionFooter;
            tmp84 = tmp78;
            if (null != renderSectionFooter) {
              let tmp85 = keysAreUniform ? sectionFooterKeys[0] : sectionFooterKeys[sectionStart];
              let combined3 = tmp85;
              if ("" === tmp85) {
                let _HermesInternal8 = HermesInternal;
                combined3 = "sf" + sectionStart;
              }
              let _HermesInternal9 = HermesInternal;
              let combined4 = "" + listId + "-" + combined3;
              let tmp88 = marginEnd;
              let tmp89 = callback;
              let tmp90 = horizontal;
              let obj4 = { portalId: combined4 };
              let tmp92 = renderSectionFooter;
              let tmp91 = callback(horizontal[8]);
              obj4.children = fastestListChildJSX(renderSectionFooter(sectionStart), tmp83);
              let arr5 = items.push(marginEnd(tmp91, obj4, combined4));
              tmp84 = tmp85;
            }
          }
          let tmp94 = tmp3 ? sectionHeaderSizes[0] : sectionHeaderSizes[sectionStart];
          let tmp95 = tmp83;
          tmp81 = tmp84;
          tmp82 = tmp79;
          let tmp96 = tmp94;
          if (tmp94 > 0) {
            arr6 = renderSectionHeader;
            arr6 = tmp83;
            tmp81 = tmp84;
            arr6 = tmp94;
            tmp82 = tmp79;
            if (null != renderSectionHeader) {
              let tmp97 = keysAreUniform ? sectionHeaderKeys[0] : sectionHeaderKeys[sectionStart];
              let combined5 = tmp97;
              if ("" === tmp97) {
                let _HermesInternal10 = HermesInternal;
                combined5 = "sh" + sectionStart;
              }
              let _HermesInternal11 = HermesInternal;
              let combined6 = "" + listId + "-" + combined5;
              arr6 = marginEnd;
              arr6 = callback;
              arr6 = horizontal;
              let obj5 = { portalId: combined6 };
              arr6 = renderSectionHeader;
              arr6 = callback(horizontal[8]);
              obj5.children = fastestListChildJSX(renderSectionHeader(sectionStart), tmp94);
              arr6 = items.push(marginEnd(arr6, obj5, combined6));
              arr6 = tmp83;
              tmp81 = tmp84;
              arr6 = tmp94;
              tmp82 = tmp97;
            }
          }
        }
        sectionStart = sectionStart + 1;
        let tmp78 = tmp81;
        let tmp79 = tmp82;
      }
      const obj6 = { items, keys: map1, keyIndex: tmp41 };
      return obj6;
    }
  }, items1);
  const items2 = [memo1];
  const effect = importAllResult.useEffect(() => {
    closure_17.current = memo1;
  }, items2);
  obj = { pointerEvents: "none", style: memo, children: memo1.items };
  return <View {...obj} />;
}));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/fastest_list/FastestListChildren.android.tsx");

export default memoResult;
