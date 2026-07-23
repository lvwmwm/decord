// Module ID: 389
// Function ID: 5721
// Name: ScrollViewStickyHeader
// Dependencies: [57, 29, 31, 33, 383, 325, 390, 253]
// Exports: default

// Module 389 (ScrollViewStickyHeader)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_6 from "result";
import result from "result";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
let closure_3 = ["ref"];
({ cloneElement: closure_7, useCallback: closure_8, useEffect: closure_9, useMemo: closure_10, useRef: closure_11, useState: closure_12 } = result);
let closure_14 = require("setStyleAttributePreprocessor").create({ header: { zIndex: 10 }, fill: { flex: 1 } });

export default function ScrollViewStickyHeader(ref) {
  let tmp = first(ref, hiddenOnScroll);
  const require = tmp;
  let inverted = tmp.inverted;
  const scrollViewHeight = tmp.scrollViewHeight;
  hiddenOnScroll = tmp.hiddenOnScroll;
  const scrollAnimatedValue = tmp.scrollAnimatedValue;
  const tmp2 = scrollAnimatedValue(callback3(false), 2);
  first = tmp2[0];
  const React = tmp2[1];
  const tmp4 = scrollAnimatedValue(callback3(0), 2);
  const first1 = tmp4[0];
  const callback = tmp4[1];
  const tmp6 = scrollAnimatedValue(callback3(0), 2);
  const first2 = tmp6[0];
  const callback2 = tmp6[1];
  const tmp8 = scrollAnimatedValue(callback3(null), 2);
  const first3 = tmp8[0];
  callback3 = tmp8[1];
  const tmp10 = scrollAnimatedValue(callback3(tmp.nextHeaderLayoutY), 2);
  const first4 = tmp10[0];
  let closure_14 = tmp10[1];
  const tmp12 = scrollAnimatedValue(callback3(false), 2);
  const first5 = tmp12[0];
  let closure_16 = tmp12[1];
  let items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const tmp14 = callback((closure_0) => {
    if (null != closure_0) {
      closure_0.setNextHeaderY = closure_14;
      callback3(closure_14(scrollViewHeight[4]).isPublicInstance(closure_0));
      const obj = closure_14(scrollViewHeight[4]);
    }
  }, []);
  const tmp16 = callback2(() => {
    let diffClampResult = null;
    if (true === hiddenOnScroll) {
      let obj = inverted(scrollViewHeight[6]);
      obj = { extrapolateLeft: "clamp" };
      const items = [first1, first1 + 1];
      obj.inputRange = items;
      obj.outputRange = [0, 1];
      obj = { inputRange: [0, 1] };
      const items1 = [0, -1];
      obj.outputRange = items1;
      diffClampResult = obj.diffClamp(scrollAnimatedValue.interpolate(obj).interpolate(obj), -first2, 0);
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
    }
    return diffClampResult;
  }, items);
  let closure_17 = tmp16;
  const tmp17 = scrollAnimatedValue(callback3(() => {
    const items = [-1, 0];
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: [0, 0] });
    let addResult = interpolateResult;
    if (null != closure_17) {
      addResult = inverted(scrollViewHeight[6]).add(interpolateResult, closure_17);
      const obj = inverted(scrollViewHeight[6]);
    }
    return addResult;
  }), 2);
  let closure_18 = tmp17[1];
  let closure_19 = first3(true);
  let closure_20 = first3(null);
  let items1 = [first3];
  first2(() => {
    let tmp = 0 !== first3;
    if (tmp) {
      tmp = null != first3;
    }
    if (tmp) {
      closure_19.current = false;
    }
  }, items1);
  const tmp19 = callback((value) => {
    value = value.value;
    let closure_0 = value;
    if (0 === value) {
      if (!ref.current) {
        ref.current = true;
      }
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
    }
    ref2.current = setTimeout(() => outer1_12(closure_0), 15);
  }, []);
  let closure_21 = tmp19;
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, tmp16, tmp19, first5];
  first2(() => {
    const items = [-1, 0];
    const items1 = [0, 0];
    if (first) {
      if (true === inverted) {
        if (null != scrollViewHeight) {
          const diff = first1 + first2 - scrollViewHeight;
          if (diff > 0) {
            items.push(diff);
            items1.push(0);
            items.push(diff + 1);
            items1.push(1);
            let num5 = first4;
            if (!first4) {
              num5 = 0;
            }
            const diff1 = num5 - first2 - scrollViewHeight;
            if (diff1 > diff) {
              items.push(diff1, diff1 + 1);
              items1.push(diff1 - diff, diff1 - diff);
            }
          }
        }
      } else {
        items.push(first1);
        items1.push(0);
        let num = first4;
        if (!first4) {
          num = 0;
        }
        const diff2 = num - first2;
        if (diff2 >= first1) {
          items.push(diff2, diff2 + 1);
          items1.push(diff2 - first1, diff2 - first1);
        } else {
          items.push(first1 + 1);
          items1.push(1);
        }
      }
    }
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: items1 });
    inverted = interpolateResult;
    let obj = interpolateResult;
    if (null != closure_17) {
      const addResult = inverted(scrollViewHeight[6]).add(interpolateResult, closure_17);
      inverted = addResult;
      obj = addResult;
      const obj2 = inverted(scrollViewHeight[6]);
    }
    if (first5) {
      let closure_0 = obj.addListener(closure_21);
    }
    callback4(obj);
    return () => {
      if (closure_0) {
        addResult.removeListener(closure_0);
      }
      if (null != outer1_20.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_20.current);
      }
    };
  }, items2);
  let Children = React.Children;
  let onlyResult = Children.only(tmp.children);
  let tmp22 = null;
  if (first5) {
    tmp22 = null;
    if (null != first3) {
      let obj = {};
      obj = {};
      obj = { translateY: first3 };
      const items3 = [obj];
      obj.transform = items3;
      obj.style = obj;
      tmp22 = obj;
    }
  }
  const obj1 = {
    collapsable: false,
    nativeID: tmp.nativeID,
    onLayout: function _onLayout(nativeEvent) {
      const tmp = callback(nativeEvent.nativeEvent.layout.y);
      callback2(nativeEvent.nativeEvent.layout.height);
      React(true);
      tmp.onLayout(nativeEvent);
      const Children = React.Children;
      const onlyResult = Children.only(tmp.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: inverted(scrollViewHeight[5])(callback((closure_0) => {
      if (null != closure_0) {
        closure_0.setNextHeaderY = closure_14;
        callback3(closure_14(scrollViewHeight[4]).isPublicInstance(closure_0));
        const obj = closure_14(scrollViewHeight[4]);
      }
    }, []), ref.ref),
    style: items4
  };
  items4 = [onlyResult.props.style, closure_14.header, ];
  const items5 = [{ translateY: tmp17[0] }];
  items4[2] = { transform: items5 };
  obj1.passthroughAnimatedPropExplicitValues = tmp22;
  obj1.children = first1(onlyResult, { style: closure_14.fill, onLayout: undefined });
  return first4(inverted(scrollViewHeight[6]).View, obj1);
};
