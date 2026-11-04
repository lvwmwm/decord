// Module ID: 5547
// Function ID: 5548
// Dependencies: [32, 109, 19, 21, 5432, 5537, 5548, 5549]
// Exports: default

// Module 5547
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_5432 from "tagMessage" /* 5432 */;

let c9;
let jsx;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "ref", "immediatePressOut"];
let closure_3 = ["cancelable", "dimensionsAfterResize", "simultaneousWith", "requireToFail", "block"];
let react = react_mod;
({ useEffect: metroRequire, useRef: metroImportDefault, useState: metroImportAll } = react);
react = react_mod;
({ jsx, jsxs: c9 } = Fragment);
let closure_10 = module_5432.isTestEnv();
let animationDuration = { in: 50, out: 100, tap: { in: 130 } };

export default function _default(delayHoverOut) {
  let accessible;
  let android_disableSound;
  let android_ripple;
  let block;
  let borderless;
  let cancelable;
  let children;
  let closure_11;
  let closure_9;
  let delayHoverIn;
  let delayLongPress;
  let dimensionsAfterResize;
  let disabled;
  let fn3;
  let fn4;
  let foreground;
  let hitSlop;
  let immediatePressOut;
  let items;
  let items1;
  let numberAsInsetResult;
  let numberAsInsetResult1;
  let pressRetentionOffset;
  let radius;
  let ref;
  let requireToFail;
  let simultaneousWith;
  let style;
  let testOnly_pressed;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let unstable_pressDelay;
  ({ testOnly_pressed, hitSlop, pressRetentionOffset, delayHoverIn } = delayHoverOut);
  delayHoverOut = delayHoverOut.delayHoverOut;
  ({ delayLongPress, unstable_pressDelay } = delayHoverOut);
  const onHoverIn = delayHoverOut.onHoverIn;
  const onHoverOut = delayHoverOut.onHoverOut;
  const onPress = delayHoverOut.onPress;
  const onPressIn = delayHoverOut.onPressIn;
  const onPressOut = delayHoverOut.onPressOut;
  const onLongPress = delayHoverOut.onLongPress;
  ({ onLayout: closure_9, style, children, android_disableSound, android_ripple, immediatePressOut } = delayHoverOut);
  let tmp = undefined !== immediatePressOut;
  ({ disabled, accessible, ref } = delayHoverOut);
  if (tmp) {
    tmp = immediatePressOut;
  }
  const tmp2 = onPress(delayHoverOut, unstable_pressDelay);
  ({ cancelable, dimensionsAfterResize, simultaneousWith, requireToFail, block } = tmp2);
  const tmp3 = onPress(tmp2, onHoverIn);
  let tmp4 = onHoverOut(onLongPress(false), 2);
  closure_10 = tmp4[1];
  const first = tmp4[0];
  animationDuration = onPressOut({ press: null, hoverIn: null, hoverOut: null });
  ref = onPressOut({ width: 0, height: 0 });
  let closure_13 = onPressOut(false);
  const tmp6 = onPressIn(() => () => {
    const current = ref.current;
    if (current.press) {
      const _clearTimeout = clearTimeout;
      clearTimeout(current.press);
    }
    if (current.hoverIn) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(current.hoverIn);
    }
    if (current.hoverOut) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(current.hoverOut);
    }
  }, []);
  let tmp7;
  if (android_ripple) {
    const color = android_ripple.color;
    let obj = { color, borderless, radius, foreground };
    borderless = android_ripple.borderless;
    radius = android_ripple.radius;
    foreground = android_ripple.foreground;
    tmp7 = obj;
  }
  if (typeof hitSlop === "number") {
    const tmp12 = delayHoverIn;
    let obj3 = delayHoverIn(delayHoverOut[5]);
    numberAsInsetResult = obj3.numberAsInset(hitSlop);
  } else {
    numberAsInsetResult = hitSlop;
    if (hitSlop == null) {
      const tmp9 = delayHoverIn;
      let obj2 = delayHoverIn(delayHoverOut[5]);
      numberAsInsetResult = obj2.numberAsInset(0);
    }
  }
  const addInsets = delayHoverIn(delayHoverOut[5]).addInsets;
  const tmp16 = delayHoverIn(delayHoverOut[5]);
  if (typeof pressRetentionOffset === "number") {
    const tmp14Result = delayHoverIn(delayHoverOut[5]);
    numberAsInsetResult1 = tmp14Result.numberAsInset(pressRetentionOffset);
  } else {
    numberAsInsetResult1 = pressRetentionOffset;
    if (pressRetentionOffset == null) {
      const tmp14Result2 = delayHoverIn(delayHoverOut[5]);
      numberAsInsetResult1 = tmp14Result2.numberAsInset(0);
    }
  }
  const addInsetsResult = addInsets(numberAsInsetResult, numberAsInsetResult1);
  if (delayLongPress == null) {
    delayLongPress = 500;
  }
  if (unstable_pressDelay == null) {
    unstable_pressDelay = 0;
  }
  function firePressIn(arg0) {

  }
  let fn;
  const sum = delayLongPress + unstable_pressDelay;
  if (onPress) {
    fn = (arg0) => {
      let items;
      let items1;
      let obj3;
      if (closure_13.current) {
        const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
        ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
        const _Date = Date;
        const obj2 = { nativeEvent: obj3 };
        obj3 = { touches: items, changedTouches: items1 };
        const merged = Object.assign(obj);
        items = [obj];
        items1 = [obj];
        onPress(obj2);
      }
    };
  }
  let fn2;
  if (onLongPress) {
    fn2 = (arg0) => {
      let items;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj5;
      if (closure_13.current) {
        if (closure_11.current.press) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current.press);
          closure_11.current.press = null;
          if (typeof firePressIn === "function") {
            closure_10(true);
            if (onPressIn != null) {
              const obj2 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
              ({ x: obj4.locationX, y: obj4.locationY, absoluteX: obj4.pageX, absoluteY: obj4.pageY } = arg0);
              const _Date2 = Date;
              const obj3 = { nativeEvent: obj5 };
              obj5 = { touches: items, changedTouches: items1 };
              const merged = Object.assign(obj2);
              items = [obj2];
              items1 = [obj2];
              tmp9(obj3);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
        ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
        const _Date = Date;
        const obj6 = { nativeEvent: obj11 };
        obj11 = { touches: items2, changedTouches: items3 };
        const merged1 = Object.assign(obj);
        items2 = [obj];
        items3 = [obj];
        onLongPress(obj6);
      }
    };
  }
  if (null != onHoverIn) {
    fn3 = (arg0) => {
      let items;
      let items1;
      let obj3;
      let closure_0 = arg0;
      if (ref.current.hoverOut) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current.hoverOut);
        ref.current.hoverOut = null;
      }
      if (onHoverIn) {
        if (closure_0) {
          const _setTimeout = setTimeout;
          ref.current.hoverIn = setTimeout(() => {
            let items;
            let items1;
            let obj3;
            ref.current.hoverIn = null;
            const obj = { identifier: 0, locationX: closure_0.x, locationY: closure_0.y, pageX: closure_0.absoluteX, pageY: closure_0.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
            const obj2 = { nativeEvent: obj3 };
            obj3 = { touches: items, changedTouches: items1 };
            const merged = Object.assign(obj);
            items = [obj];
            items1 = [obj];
            onHoverIn(obj2);
          }, tmp6);
        } else {
          let obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
          ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
          const _Date = Date;
          let obj2 = { nativeEvent: obj3 };
          obj3 = { touches: items, changedTouches: items1 };
          let merged = Object.assign(obj);
          items = [obj];
          items1 = [obj];
          tmp5(obj2);
        }
      }
    };
  }
  if (null != onHoverOut) {
    fn4 = (arg0) => {
      let items;
      let items1;
      let obj3;
      let closure_0 = arg0;
      if (ref.current.hoverIn) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current.hoverIn);
        ref.current.hoverIn = null;
      }
      if (onHoverOut) {
        if (delayHoverOut) {
          const _setTimeout = setTimeout;
          ref.current.hoverOut = setTimeout(() => {
            let items;
            let items1;
            let obj3;
            ref.current.hoverOut = null;
            const obj = { identifier: 0, locationX: closure_0.x, locationY: closure_0.y, pageX: closure_0.absoluteX, pageY: closure_0.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
            const obj2 = { nativeEvent: obj3 };
            obj3 = { touches: items, changedTouches: items1 };
            const merged = Object.assign(obj);
            items = [obj];
            items1 = [obj];
            onHoverOut(obj2);
          }, tmp6);
        } else {
          let obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
          ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
          const _Date = Date;
          let obj2 = { nativeEvent: obj3 };
          obj3 = { touches: items, changedTouches: items1 };
          let merged = Object.assign(obj);
          items = [obj];
          items1 = [obj];
          tmp5(obj2);
        }
      }
    };
  }
  if (testOnly_pressed == null) {
    testOnly_pressed = first;
  }
  let style1 = style;
  if (typeof style === "function") {
    let obj4 = { pressed: testOnly_pressed };
    style1 = style(obj4);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    let obj5 = { pressed: testOnly_pressed };
    childrenResult = children(obj5);
  }
  let obj6 = {
    ref,
    accessible: false !== accessible,
    disabled: true === disabled,
    hitSlop: addInsetsResult,
    onLayout(nativeEvent) {
      if (closure_9 != null) {
        tmp(nativeEvent);
      }
      ref.current = nativeEvent.nativeEvent.layout;
    },
    androidRipple: tmp7,
    touchSoundDisabled: android_disableSound,
    delayLongPress: sum,
    style: items,
    animationDuration,
    immediatePressOut: tmp,
    onPressIn(locationX) {
      let items;
      let items1;
      let obj9;
      let tmp;
      let closure_0 = locationX;
      let obj = delayHoverIn(delayHoverOut[5]);
      let obj2 = { identifier: 0, locationX: locationX.x, locationY: locationX.y, pageX: locationX.absoluteX, pageY: locationX.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
      closure_13.current = obj.isTouchWithinInset(ref.current, closure_14, obj2);
      if (closure_13.current) {
        if (unstable_pressDelay) {
          if (ref.current.press) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current.press);
          }
          const _setTimeout = setTimeout;
          ref.current.press = setTimeout(() => {
            let items;
            let items1;
            let obj3;
            ref.current.press = null;
            const tmp = locationX;
            if (typeof firePressIn === "function") {
              closure_10(true);
              if (onPressIn != null) {
                const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
                ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = tmp);
                const _Date = Date;
                const obj2 = { nativeEvent: obj3 };
                obj3 = { touches: items, changedTouches: items1 };
                const merged = Object.assign(obj);
                items = [obj];
                items1 = [obj];
                tmp4(obj2);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, tmp);
        } else if (typeof firePressIn === "function") {
          const tmp4 = closure_10(true);
          if (onPressIn != null) {
            const obj4 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
            ({ x: obj3.locationX, y: obj3.locationY, absoluteX: obj3.pageX, absoluteY: obj3.pageY } = locationX);
            let _Date = Date;
            const obj5 = { nativeEvent: obj9 };
            obj9 = { touches: items, changedTouches: items1 };
            let merged = Object.assign(obj4);
            items = [obj4];
            items1 = [obj4];
            tmp5(obj5);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        return tmp7;
      }
    },
    onPressOut(arg0) {
      let items;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj3;
      if (closure_13.current) {
        if (closure_11.current.press) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current.press);
          closure_11.current.press = null;
          if (typeof firePressIn === "function") {
            closure_10(true);
            if (onPressIn != null) {
              const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
              ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
              const _Date = Date;
              const obj2 = { nativeEvent: obj3 };
              obj3 = { touches: items, changedTouches: items1 };
              const merged = Object.assign(obj);
              items = [obj];
              items1 = [obj];
              tmp9(obj2);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        closure_10(false);
        if (onPressOut != null) {
          const obj5 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
          ({ x: obj4.locationX, y: obj4.locationY, absoluteX: obj4.pageX, absoluteY: obj4.pageY } = arg0);
          const _Date2 = Date;
          const obj6 = { nativeEvent: obj11 };
          obj11 = { touches: items2, changedTouches: items3 };
          const merged1 = Object.assign(obj5);
          items2 = [obj5];
          items3 = [obj5];
          tmp12(obj6);
        }
      }
    },
    onPress: fn,
    onLongPress: fn2,
    onHoverIn: fn3,
    onHoverOut: fn4,
    testOnly_onPress: tmp25,
    testOnly_onPressIn: tmp26,
    testOnly_onPressOut: tmp27,
    testOnly_onLongPress: tmp28,
    testOnly_onHoverIn: tmp29,
    testOnly_onHoverOut: tmp30,
    children: items1
  };
  const Touchable = tmp14(tmp15[6]).Touchable;
  let merged = Object.assign(tmp3);
  items = [tmp14(tmp15[7]).pointerStyle, style1];
  tmp25 = undefined;
  const tmp22 = closure_9;
  if (closure_10) {
    tmp25 = onPress;
  }
  tmp26 = undefined;
  if (closure_10) {
    tmp26 = onPressIn;
  }
  tmp27 = undefined;
  if (closure_10) {
    tmp27 = onPressOut;
  }
  tmp28 = undefined;
  if (closure_10) {
    tmp28 = onLongPress;
  }
  tmp29 = undefined;
  if (closure_10) {
    tmp29 = onHoverIn;
  }
  tmp30 = undefined;
  if (closure_10) {
    tmp30 = onHoverOut;
  }
  items1 = [childrenResult, null];
  return tmp22(Touchable, obj6);
};
