// Module ID: 5416
// Function ID: 46425
// Name: StickyHeaders
// Dependencies: [5382, 5359, 31, 33, 5413, 5417, 5374]
// Exports: StickyHeaders

// Module 5416 (StickyHeaders)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ useRef: closure_4, useState: closure_5, useMemo: closure_6, useImperativeHandle: closure_7, useCallback: closure_8, useEffect: closure_9 } = result);

export const StickyHeaders = function StickyHeaders(stickyHeaderIndices) {
  stickyHeaderIndices = stickyHeaderIndices.stickyHeaderIndices;
  const stickyHeaderOffset = stickyHeaderIndices.stickyHeaderOffset;
  const renderItem = stickyHeaderIndices.renderItem;
  const recyclerViewManager = stickyHeaderIndices.recyclerViewManager;
  const scrollY = stickyHeaderIndices.scrollY;
  const data = stickyHeaderIndices.data;
  const extraData = stickyHeaderIndices.extraData;
  const onChangeStickyIndex = stickyHeaderIndices.onChangeStickyIndex;
  const inverted = stickyHeaderIndices.inverted;
  const stickyHeaderZIndex = stickyHeaderIndices.stickyHeaderZIndex;
  let num = 2;
  if (undefined !== stickyHeaderZIndex) {
    num = stickyHeaderZIndex;
  }
  const tmp = recyclerViewManager(data({ currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER }), 2);
  const first = tmp[0];
  let closure_10 = tmp[1];
  const currentStickyIndex = first.currentStickyIndex;
  const pushStartsAt = first.pushStartsAt;
  let items = [stickyHeaderIndices];
  const arr2 = extraData(() => renderItem(stickyHeaderIndices).sort((arg0, arg1) => arg0 - arg1), items);
  const tmp3 = 0 === arr2.length || recyclerViewManager.getDataLength() <= arr2[arr2.length - 1];
  let closure_14 = tmp3;
  let items1 = [tmp3, recyclerViewManager, arr2, currentStickyIndex, pushStartsAt, onChangeStickyIndex, stickyHeaderOffset];
  const tmp4 = inverted(() => {
    let diff1;
    if (!closure_14) {
      let diff = arr2.length - 1;
      let num5 = 0;
      let num6 = -1;
      let num7 = -1;
      if (0 <= diff) {
        do {
          let _Math = Math;
          let rounded = Math.floor((num5 + diff) / 2);
          let tmp8 = recyclerViewManager;
          if (recyclerViewManager.getLayout(tmp2[rounded]).y <= tmp4) {
            num5 = rounded + 1;
            diff1 = diff;
            num6 = rounded;
          } else {
            diff1 = rounded - 1;
          }
          diff = diff1;
          num7 = num6;
        } while (num5 <= diff1);
      }
      let num8 = -1;
      if (null != arr2[num7]) {
        num8 = tmp11;
      }
      let num9 = -1;
      if (null != arr2[num7 + 1]) {
        num9 = tmp14;
      }
      if (num9 > recyclerViewManager.getEngagedIndices().endIndex) {
        num9 = -1;
      }
      if (-1 === num9) {
        const _Number = Number;
      } else {
        const tryGetLayoutResult = recyclerViewManager.tryGetLayout(num9);
        let y;
        if (null != tryGetLayoutResult) {
          y = tryGetLayoutResult.y;
        }
        let num10 = 0;
        if (null != y) {
          num10 = y;
        }
        MAX_SAFE_INTEGER = num10 + recyclerViewManager.firstItemOffset;
      }
      const tryGetLayoutResult1 = recyclerViewManager.tryGetLayout(num8);
      let height;
      if (null != tryGetLayoutResult1) {
        height = tryGetLayoutResult1.height;
      }
      let num11 = 0;
      if (null != height) {
        num11 = height;
      }
      const diff2 = MAX_SAFE_INTEGER - num11;
      let tmp25 = num8 === currentStickyIndex;
      if (tmp25) {
        tmp25 = diff2 === pushStartsAt;
      }
      if (!tmp25) {
        const obj = { currentStickyIndex: num8, pushStartsAt: diff2 - stickyHeaderOffset };
        callback(obj);
      }
      if (num8 !== currentStickyIndex) {
        if (null != onChangeStickyIndex) {
          onChangeStickyIndex(num8);
        }
      }
    }
  }, items1);
  let closure_15 = tmp4;
  let items2 = [tmp4];
  num(() => {
    tmp4();
  }, items2);
  const items3 = [tmp4];
  onChangeStickyIndex(stickyHeaderIndices.stickyHeaderRef, () => ({
    reportScrollEvent(nativeEvent) {
      outer1_15();
    }
  }), items3);
  const current = scrollY(new Map()).current;
  const items4 = [recyclerViewManager, currentStickyIndex, scrollY, pushStartsAt, stickyHeaderOffset];
  let tmp8 = extraData(() => {
    const tryGetLayoutResult = recyclerViewManager.tryGetLayout(currentStickyIndex);
    let height;
    if (null != tryGetLayoutResult) {
      height = tryGetLayoutResult.height;
    }
    let num = 0;
    if (null != height) {
      num = height;
    }
    let obj = { translateY: scrollY.interpolate({ inputRange: items, outputRange: items1, extrapolate: "clamp" }) };
    items = [pushStartsAt, pushStartsAt + num];
    items1 = [0, -num];
    let interpolateResult;
    if (stickyHeaderOffset > 0) {
      obj = {};
      const items2 = [pushStartsAt, pushStartsAt + num];
      obj.inputRange = items2;
      obj.outputRange = [1, 0];
      obj.extrapolate = "clamp";
      interpolateResult = scrollY.interpolate(obj);
    }
    obj.opacity = interpolateResult;
    return obj;
  }, items4);
  const translateY = tmp8.translateY;
  const opacity = tmp8.opacity;
  const items5 = [translateY, opacity, currentStickyIndex, data, renderItem, current, extraData, stickyHeaderOffset, num, inverted];
  const map = new Map();
  let obj = { currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER };
  if (!stickyHeaderIndices(stickyHeaderOffset[6]).PlatformConfig.isRN083OrAbove) {
    let tmp10 = tmp9;
  } else {
    tmp10 = null;
  }
  return tmp10;
};
