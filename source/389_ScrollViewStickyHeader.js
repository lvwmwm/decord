// Module ID: 389
// Function ID: 5721
// Name: ScrollViewStickyHeader
// Dependencies: [57, 29, 31, 33, 396, 147, 397, 325]
// Exports: default

// Module 389 (ScrollViewStickyHeader)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_6 from "module_31";
import module_31 from "module_31";
import { jsx } from "module_33";

let closure_3 = [null];
({ cloneElement: closure_7, useCallback: closure_8, useEffect: closure_9, useMemo: closure_10, useRef: closure_11, useState: closure_12 } = module_31);
let closure_14 = require("useMergeRefs").create({ header: { zIndex: 10 }, fill: { flex: 1 } });

export default function ScrollViewStickyHeader(ref) {
  const tmp = callback2(ref, closure_3);
  const arg1 = tmp;
  const inverted = tmp.inverted;
  const importDefault = inverted;
  const scrollViewHeight = tmp.scrollViewHeight;
  const dependencyMap = scrollViewHeight;
  const hiddenOnScroll = tmp.hiddenOnScroll;
  closure_3 = hiddenOnScroll;
  const scrollAnimatedValue = tmp.scrollAnimatedValue;
  const callback = scrollAnimatedValue;
  const tmp2 = callback(callback5(false), 2);
  const first = tmp2[0];
  const callback2 = first;
  const React = tmp2[1];
  const tmp4 = callback(callback5(0), 2);
  const first1 = tmp4[0];
  const callback3 = tmp4[1];
  const tmp6 = callback(callback5(0), 2);
  const first2 = tmp6[0];
  const callback4 = tmp6[1];
  const tmp8 = callback(callback5(null), 2);
  const first3 = tmp8[0];
  const callback5 = tmp8[1];
  const tmp10 = callback(callback5(tmp.nextHeaderLayoutY), 2);
  const first4 = tmp10[0];
  const jsx = first4;
  let closure_14 = tmp10[1];
  const tmp12 = callback(callback5(false), 2);
  const first5 = tmp12[0];
  let closure_16 = tmp12[1];
  const items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const tmp14 = callback3((nativeScrollRef) => {
    if (null != nativeScrollRef) {
      nativeScrollRef.setNextHeaderY = closure_14;
      callback3(closure_14(scrollViewHeight[4]).isPublicInstance(nativeScrollRef));
      const obj = closure_14(scrollViewHeight[4]);
    }
  }, []);
  const tmp16 = callback4(() => {
    let diffClampResult = null;
    if (true === hiddenOnScroll) {
      let obj = inverted(scrollViewHeight[6]);
      obj = { extrapolateLeft: "clamp" };
      const items = [first1, first1 + 1];
      obj.inputRange = items;
      obj.outputRange = ["replace", "then"];
      obj = { inputRange: ["replace", "then"] };
      const items1 = [0.229, -1];
      obj.outputRange = items1;
      diffClampResult = obj.diffClamp(scrollAnimatedValue.interpolate(obj).interpolate(obj), -first2, 0);
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
    }
    return diffClampResult;
  }, items);
  const tmp17 = callback(callback5(() => {
    const items = [-1, 0];
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: ["<string:53040003>", "<string:806589490>"] });
    let addResult = interpolateResult;
    if (null != tmp16) {
      addResult = inverted(scrollViewHeight[6]).add(interpolateResult, tmp16);
      const obj = inverted(scrollViewHeight[6]);
    }
    return addResult;
  }), 2);
  let closure_18 = tmp17[1];
  let closure_19 = first3(true);
  let closure_20 = first3(null);
  const items1 = [first3];
  first2(() => {
    let tmp = 0 !== first3;
    if (tmp) {
      tmp = null != first3;
    }
    if (tmp) {
      closure_19.current = false;
    }
  }, items1);
  const tmp19 = callback3((value) => {
    value = value.value;
    if (0 === value) {
      if (!ref.current) {
        ref.current = true;
      }
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
    }
    ref2.current = setTimeout(() => callback(value), 15);
  }, []);
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, tmp16, tmp19, first5];
  first2(() => {
    const items = [-1, 0];
    const items1 = ["<string:53040003>", "<string:806589490>"];
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
    let inverted = interpolateResult;
    let obj = interpolateResult;
    if (null != tmp16) {
      const addResult = inverted(scrollViewHeight[6]).add(interpolateResult, tmp16);
      inverted = addResult;
      obj = addResult;
      const obj2 = inverted(scrollViewHeight[6]);
    }
    if (first5) {
      let closure_0 = obj.addListener(tmp19);
    }
    callback4(obj);
    return () => {
      if (closure_0) {
        addResult.removeListener(closure_0);
      }
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
    };
  }, items2);
  const Children = React.Children;
  const onlyResult = Children.only(tmp.children);
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
    ref: importDefault(dependencyMap[5])(callback3((nativeScrollRef) => {
      if (null != nativeScrollRef) {
        nativeScrollRef.setNextHeaderY = closure_14;
        callback3(closure_14(scrollViewHeight[4]).isPublicInstance(nativeScrollRef));
        const obj = closure_14(scrollViewHeight[4]);
      }
    }, []), ref.ref),
    style: items4
  };
  const items4 = [onlyResult.props.style, closure_14.header, ];
  const items5 = [{ translateY: tmp17[0] }];
  items4[2] = { transform: items5 };
  obj1.passthroughAnimatedPropExplicitValues = tmp22;
  obj1.children = first1(onlyResult, { style: closure_14.fill, onLayout: undefined });
  return jsx(importDefault(dependencyMap[6]).View, obj1);
};
