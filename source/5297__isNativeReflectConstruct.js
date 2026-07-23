// Module ID: 5297
// Function ID: 45735
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 5222, 44, 5235, 5247]

// Module 5297 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_4 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Animated: closure_9, StyleSheet, View: closure_10, Keyboard: closure_11, StatusBar: closure_12, I18nManager: closure_13 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let tmp4 = ((Component) => {
  class DrawerLayout {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.accessibilityIsModalView = outer1_8.createRef();
      tmp2Result.pointerEventsView = outer1_8.createRef();
      tmp2Result.panGestureHandler = outer1_8.createRef();
      tmp2Result.drawerShown = false;
      tmp2Result.updateAnimatedEvent = (drawerWidth, drawerTranslation) => {
        let add;
        let containerWidth;
        let dragX;
        let multiply;
        let touchX;
        drawerWidth = drawerWidth.drawerWidth;
        ({ dragX, touchX, containerWidth } = drawerTranslation);
        if ("left" !== drawerWidth.drawerPosition) {
          const Value = outer2_9.Value;
          const prototype = Value.prototype;
          const value = new Value(-1);
          let multiplyResult = outer2_9.multiply(value, dragX);
          const Value2 = outer2_9.Value;
          const prototype2 = Value2.prototype;
          const value2 = new Value2(containerWidth);
          const Value3 = outer2_9.Value;
          const prototype3 = Value3.prototype;
          const value3 = new Value3(-1);
          let addResult = outer2_9.add(value2, outer2_9.multiply(value3, touchX));
          touchX.setValue(containerWidth);
        } else {
          touchX.setValue(0);
          multiplyResult = dragX;
          addResult = touchX;
        }
        let addResult2 = multiplyResult;
        if ("front" === drawerWidth.drawerType) {
          const Value4 = outer2_9.Value;
          const prototype4 = Value4.prototype;
          ({ add, multiply } = outer2_9);
          const value4 = new Value4(-1);
          let obj = {};
          const items = [drawerWidth - 1, drawerWidth, drawerWidth + 1];
          obj.inputRange = items;
          obj.outputRange = [0, 0, 1];
          addResult2 = outer2_9.add(multiplyResult, add(addResult, multiply(value4, multiplyResult)).interpolate(obj));
          const addResult1 = add(addResult, multiply(value4, multiplyResult));
        }
        const items1 = [0, drawerWidth];
        tmp2Result.openValue = outer2_9.add(addResult2, drawerTranslation.drawerTranslation).interpolate({ inputRange: items1, outputRange: [0, 1], extrapolate: "clamp" });
        obj = { useNativeDriver: drawerWidth.useNativeAnimations };
        if (tmp2Result.props.onDrawerSlide) {
          obj.listener = (arg0) => {
            if (null != outer1_0.props.onDrawerSlide) {
              const props = outer1_0.props;
              props.onDrawerSlide(tmp);
            }
          };
        }
        const items2 = [{ nativeEvent: { translationX: dragX, x: touchX } }];
        tmp2Result.onGestureEvent = outer2_9.event(items2, obj);
      };
      tmp2Result.handleContainerLayout = (containerWidth) => {
        tmp2Result.setState({ containerWidth: containerWidth.nativeEvent.layout.width });
      };
      tmp2Result.emitStateChanged = (arg0, arg1) => {
        if (null != tmp2Result.props.onDrawerStateChanged) {
          const props = tmp2Result.props;
          props.onDrawerStateChanged(arg0, arg1);
        }
      };
      tmp2Result.openingHandlerStateChange = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        if (nativeEvent.oldState === DrawerLayout(outer2_2[8]).State.ACTIVE) {
          let obj = { nativeEvent };
          tmp2Result.handleRelease(obj);
        } else if (nativeEvent.state === DrawerLayout(outer2_2[8]).State.ACTIVE) {
          tmp2Result.emitStateChanged("Dragging", false);
          obj = { drawerState: "Dragging" };
          tmp2Result.setState(obj);
          if ("on-drag" === tmp2Result.props.keyboardDismissMode) {
            outer2_11.dismiss();
          }
          if (tmp2Result.props.hideStatusBar) {
            let str = tmp2Result.props.statusBarAnimation;
            if (!str) {
              str = "slide";
            }
            outer2_12.setHidden(true, str);
          }
        }
      };
      tmp2Result.onTapHandlerStateChange = (nativeEvent) => {
        let drawerShown = tmp2Result.drawerShown;
        if (drawerShown) {
          drawerShown = nativeEvent.nativeEvent.oldState === DrawerLayout(outer2_2[8]).State.ACTIVE;
        }
        if (drawerShown) {
          drawerShown = "locked-open" !== tmp2Result.props.drawerLockMode;
        }
        if (drawerShown) {
          tmp2Result.closeDrawer();
        }
      };
      tmp2Result.handleRelease = (nativeEvent) => {
        let translationX;
        let velocityX;
        let x;
        const props = tmp2Result.props;
        const drawerWidth = props.drawerWidth;
        ({ translationX, velocityX, x } = nativeEvent.nativeEvent);
        let tmp2 = translationX;
        let tmp3 = velocityX;
        let diff = x;
        if ("left" !== props.drawerPosition) {
          tmp2 = -translationX;
          diff = tmp - x;
          tmp3 = -velocityX;
        }
        const diff1 = diff - tmp2;
        let num = 0;
        if ("front" === props.drawerType) {
          let num2 = 0;
          if (diff1 > drawerWidth) {
            num2 = diff1 - drawerWidth;
          }
          num = num2;
        }
        let num3 = 0;
        const sum = tmp2 + num;
        if (tmp2Result.drawerShown) {
          num3 = drawerWidth;
        }
        const sum1 = sum + num3;
        if (sum1 + 0.05 * tmp3 > drawerWidth / 2) {
          tmp2Result.animateDrawer(sum1, drawerWidth, tmp3);
        } else {
          tmp2Result.animateDrawer(sum1, 0, tmp3);
        }
      };
      tmp2Result.updateShowing = (drawerShown) => {
        tmp2Result.drawerShown = drawerShown;
        const current = tmp2Result.accessibilityIsModalView.current;
        if (null != current) {
          let obj = { accessibilityViewIsModal: drawerShown };
          current.setNativeProps(obj);
        }
        const current2 = tmp2Result.pointerEventsView.current;
        if (null != current2) {
          obj = {};
          let str = "none";
          if (drawerShown) {
            str = "auto";
          }
          obj.pointerEvents = str;
          current2.setNativeProps(obj);
        }
        const props = tmp2Result.props;
        const edgeWidth = props.edgeWidth;
        let num = -1;
        if ("left" === props.drawerPosition) {
          num = 1;
        }
        let num2 = 1;
        if (tmp2Result.drawerShown) {
          num2 = -1;
        }
        obj = {};
        if ("left" === props.drawerPosition) {
          obj.left = 0;
          let tmp6;
          if (!drawerShown) {
            tmp6 = edgeWidth;
          }
          obj.width = tmp6;
          let tmp5 = obj;
        } else {
          obj.right = 0;
          let tmp4;
          if (!drawerShown) {
            tmp4 = edgeWidth;
          }
          obj.width = tmp4;
          tmp5 = obj;
        }
        const current3 = tmp2Result.panGestureHandler.current;
        if (null != current3) {
          const obj1 = { hitSlop: tmp5, activeOffsetX: num * num2 * props.minSwipeDistance };
          current3.setNativeProps(obj1);
        }
      };
      tmp2Result.animateDrawer = (arg0, toValue, velocity) => {
        const dragX = tmp2Result.state.dragX;
        dragX.setValue(0);
        const touchX = tmp2Result.state.touchX;
        let num = 0;
        if ("left" !== tmp2Result.props.drawerPosition) {
          num = tmp2Result.state.containerWidth;
        }
        touchX.setValue(num);
        if (null != arg0) {
          if (!tmp2Result.props.useNativeAnimations) {
            const drawerTranslation = tmp2Result.state.drawerTranslation;
            drawerTranslation.setValue(arg0);
          } else {
            if (arg0 >= toValue) {
              let bound = arg0;
              if (tmp4) {
                const _Math = Math;
                bound = Math.max(arg0 + velocity / 60, toValue);
              }
              tmp4 = arg0 > toValue && velocity < 0;
            }
            const _Math2 = Math;
            bound = Math.min(arg0 + velocity / 60, toValue);
          }
        }
        0 !== toValue.updateShowing(0 !== toValue);
        0 !== toValue.emitStateChanged("Settling", 0 !== toValue);
        0 !== toValue.setState({ drawerState: "Settling" });
        if (0 !== toValue.props.hideStatusBar) {
          let str = tmp2Result.props.statusBarAnimation;
          if (!str) {
            str = "slide";
          }
          outer2_12.setHidden(tmp11, str);
        }
        let obj = { velocity, bounciness: 0, toValue, useNativeDriver: 0 !== toValue.props.useNativeAnimations };
        let tmp19;
        if (null != arg3) {
          tmp19 = arg3;
        }
        obj.speed = tmp19;
        outer2_9.spring(0 !== toValue.state.drawerTranslation, obj).start((finished) => {
          if (finished.finished) {
            tmp11.emitStateChanged("Idle", tmp11);
            let obj = { drawerOpened: tmp11 };
            tmp11.setState(obj);
            if (tmp11.state.drawerState !== "Dragging") {
              obj = { drawerState: "Idle" };
              tmp11.setState(obj);
            }
            const props = tmp11.props;
            if (tmp11) {
              if (null != props.onDrawerOpen) {
                const props3 = tmp11.props;
                props3.onDrawerOpen();
              }
            } else if (null != props.onDrawerClose) {
              const props2 = tmp11.props;
              props2.onDrawerClose();
            }
          }
        });
      };
      tmp2Result.openDrawer = () => {
        if (arguments.length > 0) {
          if (undefined !== arguments[0]) {
            let first = arguments[0];
          }
          const drawerWidth = tmp2Result.props.drawerWidth;
          let num = 0;
          if (first.velocity) {
            num = first.velocity;
          }
          tmp2Result.animateDrawer(undefined, drawerWidth, num, first.speed);
          tmp2Result.forceUpdate();
        }
        first = {};
      };
      tmp2Result.closeDrawer = () => {
        if (arguments.length > 0) {
          if (undefined !== arguments[0]) {
            let first = arguments[0];
          }
          let num = 0;
          if (first.velocity) {
            num = first.velocity;
          }
          tmp2Result.animateDrawer(undefined, 0, num, first.speed);
          tmp2Result.forceUpdate();
        }
        first = {};
      };
      tmp2Result.renderOverlay = () => {
        outer2_1(outer2_2[9])(tmp2Result.openValue, "should be set");
        let obj = {};
        if (tmp2Result.state.drawerState !== "Idle") {
          let num = tmp2Result.openValue;
        } else {
          num = 0;
          if (tmp2Result.state.drawerOpened) {
            num = 1;
          }
        }
        obj.opacity = num;
        obj.backgroundColor = tmp2Result.props.overlayColor;
        obj = { onHandlerStateChange: tmp2Result.onTapHandlerStateChange };
        obj = {};
        let str = "none";
        if (tmp2Result.drawerShown) {
          str = "auto";
        }
        obj.pointerEvents = str;
        obj.ref = tmp2Result.pointerEventsView;
        const items = [outer2_16.overlay, obj];
        obj.style = items;
        obj.children = outer2_14(outer2_9.View, obj);
        return outer2_14(DrawerLayout(outer2_2[10]).TapGestureHandler, obj);
      };
      tmp2Result.renderDrawer = () => {
        let View;
        let View2;
        let contentContainerStyle;
        let drawerBackgroundColor;
        let drawerContainerStyle;
        let drawerType;
        let drawerWidth;
        const props = tmp2Result.props;
        ({ drawerWidth, drawerType } = props);
        let tmp2 = tmp;
        ({ drawerBackgroundColor, drawerContainerStyle, contentContainerStyle } = props);
        if (!outer2_13.isRTL) {
          tmp2 = !tmp;
        }
        const openValue = tmp2Result.openValue;
        outer2_1(outer2_2[9])(openValue, "should be set");
        if ("front" === drawerType) {
          if ("back" === drawerType) {
            let obj = {};
            obj = { translateX: 0 };
            const items = [obj];
            obj.transform = items;
            let str5 = "row";
            if (tmp2) {
              str5 = "row-reverse";
            }
            obj.flexDirection = str5;
            const obj1 = { style: outer2_16.main, onLayout: tmp2Result.handleContainerLayout };
            const obj2 = {};
            ({ View, View: View2 } = outer2_9);
            if ("front" === drawerType) {
              let containerInFront = outer2_16.containerOnBack;
            } else {
              containerInFront = outer2_16.containerInFront;
            }
            const items1 = [containerInFront, undefined, contentContainerStyle];
            obj2.style = items1;
            let str6 = "yes";
            if (tmp2Result.drawerShown) {
              str6 = "no-hide-descendants";
            }
            obj2.importantForAccessibility = str6;
            if ("function" === typeof tmp2Result.props.children) {
              const props2 = tmp2Result.props;
              let children = props2.children(tmp2Result.openValue);
            } else {
              children = tmp2Result.props.children;
            }
            const items2 = [children, tmp2Result.renderOverlay()];
            obj2.children = items2;
            const items3 = [outer2_15(View2, obj2), ];
            const obj3 = { pointerEvents: "box-none" };
            ({ accessibilityIsModalView: obj8.ref, drawerShown: obj8.accessibilityViewIsModal } = tmp2Result);
            const items4 = [outer2_16.drawerContainer, obj, drawerContainerStyle];
            obj3.style = items4;
            const obj4 = { style: { backgroundColor: drawerBackgroundColor, width: drawerWidth } };
            const props3 = tmp2Result.props;
            obj4.children = props3.renderNavigationView(tmp2Result.openValue);
            obj3.children = outer2_14(outer2_10, obj4);
            items3[1] = outer2_14(outer2_9.View, obj3);
            obj1.children = items3;
            return outer2_15(View, obj1);
          } else {
            let tmp6 = drawerWidth;
            if (tmp) {
              tmp6 = -drawerWidth;
            }
            if (tmp2Result.state.drawerState !== "Idle") {
              const obj5 = { inputRange: [0, 1] };
              const items5 = [tmp6, 0];
              obj5.outputRange = items5;
              obj5.extrapolate = "clamp";
              let num3 = openValue.interpolate(obj5);
            } else {
              num3 = 0;
              if (!tmp2Result.state.drawerOpened) {
                num3 = tmp6;
              }
            }
          }
        } else {
          obj = {};
          const obj6 = {};
          let obj7 = { inputRange: [0, 1] };
          const items6 = [0];
          if (tmp) {
            items6[1] = drawerWidth;
            let tmp4 = items6;
          } else {
            items6[1] = -drawerWidth;
            tmp4 = items6;
          }
          obj7.outputRange = tmp4;
          obj7.extrapolate = "clamp";
          obj6.translateX = openValue.interpolate(obj7);
          obj7 = [obj6];
          obj.transform = obj7;
        }
      };
      tmp2Result.setPanGestureRef = (current) => {
        tmp2Result.panGestureHandler.current = current;
        if (null != tmp2Result.props.onGestureRef) {
          const props = tmp2Result.props;
          props.onGestureRef(current);
        }
      };
      value = new outer1_9.Value(0);
      value1 = new outer1_9.Value(0);
      value2 = new outer1_9.Value(0);
      obj = { dragX: null, touchX: null, drawerTranslation: null, containerWidth: 0, drawerState: "Idle", drawerOpened: false };
      obj.dragX = value;
      obj.touchX = value1;
      obj.drawerTranslation = value2;
      tmp2Result.state = obj;
      updateAnimatedEventResult = tmp2Result.updateAnimatedEvent(Component, tmp2Result.state);
      return tmp2Result;
    }
  }
  callback2(DrawerLayout, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(drawerPosition, containerWidth) {
      const self = this;
      if (!tmp) {
        self.updateAnimatedEvent(drawerPosition, containerWidth);
      }
      return true;
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let drawerLockMode;
      let edgeWidth;
      const self = this;
      const props = this.props;
      ({ drawerLockMode, edgeWidth } = props);
      let num = -1;
      if ("left" === props.drawerPosition) {
        num = 1;
      }
      let num2 = 1;
      if (self.drawerShown) {
        num2 = -1;
      }
      let obj = {};
      if ("left" === props.drawerPosition) {
        obj.left = 0;
        let tmp4;
        if (!self.drawerShown) {
          tmp4 = edgeWidth;
        }
        obj.width = tmp4;
        let tmp3 = obj;
      } else {
        obj.right = 0;
        let tmp2;
        if (!self.drawerShown) {
          tmp2 = edgeWidth;
        }
        obj.width = tmp2;
        tmp3 = obj;
      }
      obj = { userSelect: self.props.userSelect, activeCursor: self.props.activeCursor, mouseButton: self.props.mouseButton, enableContextMenu: self.props.enableContextMenu, ref: self.setPanGestureRef, hitSlop: tmp3, activeOffsetX: num * num2 * props.minSwipeDistance };
      const items = [-15, 15];
      obj.failOffsetY = items;
      ({ onGestureEvent: obj2.onGestureEvent, openingHandlerStateChange: obj2.onHandlerStateChange } = self);
      obj.enableTrackpadTwoFingerGesture = self.props.enableTrackpadTwoFingerGesture;
      let tmp6 = "locked-closed" !== drawerLockMode;
      if (tmp6) {
        tmp6 = "locked-open" !== drawerLockMode;
      }
      obj.enabled = tmp6;
      obj.children = self.renderDrawer();
      return outer1_14(DrawerLayout(outer1_2[11]).PanGestureHandler, obj);
    }
  };
  items[1] = obj;
  return callback(DrawerLayout, items);
})(require("result").Component);
tmp4.defaultProps = { drawerWidth: 200, drawerPosition: "left", useNativeAnimations: true, drawerType: "front", edgeWidth: 20, minSwipeDistance: 3, overlayColor: "rgba(0, 0, 0, 0.7)", drawerLockMode: "unlocked", enableTrackpadTwoFingerGesture: false };
tmp4.positions = { Left: "left", Right: "right" };
const styles = StyleSheet.create({ drawerContainer: Object.assign({}, StyleSheet.absoluteFillObject, { zIndex: 1001, flexDirection: "row" }), containerInFront: Object.assign({}, StyleSheet.absoluteFillObject, { zIndex: 1002 }), containerOnBack: Object.assign({}, StyleSheet.absoluteFillObject), main: { flex: 1, zIndex: 0, overflow: "hidden" }, overlay: Object.assign({}, StyleSheet.absoluteFillObject, { zIndex: 1000 }) });

export default tmp4;
