// Module ID: 5556
// Function ID: 47156
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getIsModalPresentation

// Module 5556 (_isNativeReflectConstruct)
let Platform;
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const tmp3 = arg1(dependencyMap[7]);
({ Animated: closure_11, InteractionManager: closure_12, Platform, StyleSheet } = tmp3);
const View = tmp3.View;
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[8]));
function hasOpacityStyle(arg0) {
  let tmp2 = !tmp;
  if (!!arg0) {
    tmp2 = null != StyleSheet.flatten(arg0).opacity;
  }
  return tmp2;
}
const tmp5 = (Component) => {
  class Card {
    constructor() {
      self = this;
      tmp = closure_5(this, Card);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(Card);
      tmp4 = closure_7;
      if (closure_19()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      Card = tmp4Result;
      tmp4Result.isCurrentlyMounted = false;
      value = new closure_11.Value(0);
      tmp4Result.isClosing = value;
      value1 = new closure_11.Value(closure_1(closure_2[9])(tmp4Result.props.gestureDirection));
      tmp4Result.inverted = value1;
      obj = {};
      value2 = new closure_11.Value(tmp4Result.props.layout.width);
      obj.width = value2;
      value3 = new closure_11.Value(tmp4Result.props.layout.height);
      obj.height = value3;
      tmp4Result.layout = obj;
      value4 = new closure_11.Value(0);
      tmp4Result.isSwiping = value4;
      tmp4Result.animate = (closing) => {
        let onTransition;
        let transitionSpec;
        closing = closing.closing;
        const velocity = closing.velocity;
        const props = tmp4Result.props;
        ({ transitionSpec, onOpen: closure_1, onClose: closure_2, onTransition } = props);
        const animateToValue = tmp4Result.getAnimateToValue(Object.assign({}, tmp4Result.props, { closing }));
        closing.lastToValue = animateToValue;
        const isClosing = tmp4Result.isClosing;
        let num = 0;
        if (closing) {
          num = 1;
        }
        isClosing.setValue(num);
        const tmp3 = closing ? transitionSpec.close : transitionSpec.open;
        if ("spring" === tmp3.animation) {
          let timing = closure_11.spring;
        } else {
          timing = closure_11.timing;
        }
        const result = tmp4Result.setPointerEventsEnabled(!closing);
        const result1 = tmp4Result.handleStartInteraction();
        clearTimeout(closing.pendingGestureCallback);
        if (null != onTransition) {
          const obj = { closing, gesture: undefined !== velocity };
          onTransition(obj);
        }
        timing(props.gesture, Object.assign({}, tmp3.config, { velocity, toValue: animateToValue, useNativeDriver: true, isInteraction: false })).start((finished) => {
          closing.handleEndInteraction();
          clearTimeout(closing.pendingGestureCallback);
          if (finished.finished) {
            if (closing) {
              callback2();
            } else {
              callback();
            }
            if (closing.isCurrentlyMounted) {
              closing.forceUpdate();
            }
          }
        });
      };
      tmp4Result.getAnimateToValue = (closing) => {
        let num = 0;
        if (closing.closing) {
          num = callback(closure_2[10])(tmp, tmp2);
        }
        return num;
      };
      tmp4Result.setPointerEventsEnabled = (arg0) => {
        let str = "none";
        if (arg0) {
          str = "box-none";
        }
        const current = tmp4Result.ref.current;
        if (null != current) {
          current.setPointerEvents(str);
        }
      };
      tmp4Result.handleStartInteraction = () => {
        if (undefined === tmp4Result.interactionHandle) {
          tmp4Result.interactionHandle = closure_12.createInteractionHandle();
        }
      };
      tmp4Result.handleEndInteraction = () => {
        if (undefined !== tmp4Result.interactionHandle) {
          const result = closure_12.clearInteractionHandle(tmp4Result.interactionHandle);
          tmp4Result.interactionHandle = undefined;
        }
      };
      tmp4Result.handleGestureStateChange = (nativeEvent) => {
        let gestureDirection;
        let layout;
        let onGestureBegin;
        let onGestureCanceled;
        let onGestureEnd;
        let translationY;
        let velocityY;
        nativeEvent = nativeEvent.nativeEvent;
        const props = tmp4Result.props;
        ({ layout, onClose: closure_0, onGestureBegin, onGestureCanceled, onGestureEnd, gestureDirection } = props);
        const state = nativeEvent.state;
        if (tmp4Result(closure_2[11]).GestureState.ACTIVE === state) {
          const isSwiping2 = tmp4Result.isSwiping;
          isSwiping2.setValue(1);
          const result = tmp4Result.handleStartInteraction();
          if (null != onGestureBegin) {
            onGestureBegin();
          }
        } else if (tmp4Result(closure_2[11]).GestureState.CANCELLED === state) {
          const isSwiping = tmp4Result.isSwiping;
          isSwiping.setValue(0);
          tmp4Result.handleEndInteraction();
          if ("vertical" !== gestureDirection) {
            if ("vertical-inverted" !== gestureDirection) {
              let velocityY2 = nativeEvent.velocityX;
            }
            let obj = { closing: tmp4Result.props.closing, velocity: velocityY2 };
            tmp4Result.animate(obj);
            if (null != onGestureCanceled) {
              onGestureCanceled();
            }
          }
          velocityY2 = nativeEvent.velocityY;
        } else if (tmp4Result(closure_2[11]).GestureState.END === state) {
          const isSwiping3 = tmp4Result.isSwiping;
          isSwiping3.setValue(0);
          if ("vertical" !== gestureDirection) {
            if ("vertical-inverted" !== gestureDirection) {
              let height = layout.width;
              ({ translationX: translationY, velocityX: velocityY } = nativeEvent);
            }
            const sum = translationY + velocityY * props.gestureVelocityImpact;
            if (sum * callback(closure_2[9])(gestureDirection) > height / 2) {
              let closing = 0 !== velocityY || 0 !== translationY;
              const tmp5 = 0 !== velocityY || 0 !== translationY;
            } else {
              closing = tmp4Result.props.closing;
            }
            obj = { closing, velocity: velocityY };
            tmp4Result.animate(obj);
            if (closing) {
              const _setTimeout = setTimeout;
              tmp4Result.pendingGestureCallback = setTimeout(() => {
                lib();
                lib.forceUpdate();
              }, 32);
            }
            if (null != onGestureEnd) {
              onGestureEnd();
            }
          }
          height = layout.height;
          ({ translationY, velocityY } = nativeEvent);
        }
      };
      tmp4Result.getInterpolatedStyle = closure_1(closure_2[12])((arg0, arg1) => arg0(arg1));
      tmp4Result.getCardAnimation = closure_1(closure_2[12])((index, progress, progress2, screen, top, right, bottom, left) => {
        let obj = { index, current: obj };
        obj = { progress };
        let tmp = progress2;
        if (progress2) {
          obj = { progress: progress2 };
          tmp = obj;
        }
        obj.next = tmp;
        obj.closing = tmp4Result.isClosing;
        obj.swiping = tmp4Result.isSwiping;
        obj.inverted = tmp4Result.inverted;
        obj.layouts = { screen };
        obj.insets = { top, right, bottom, left };
        return obj;
      });
      tmp4Result.ref = closure_10.createRef();
      return tmp4Result;
    }
  }
  const arg1 = Card;
  callback2(Card, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate({ closing: this.props.closing });
      this.isCurrentlyMounted = true;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(layout) {
      let gestureDirection;
      let height;
      let width;
      const self = this;
      const props = this.props;
      ({ layout, gestureDirection } = props);
      ({ width, height } = layout);
      if (width !== layout.layout.width) {
        const width2 = self.layout.width;
        width2.setValue(width);
      }
      if (height !== layout.layout.height) {
        const height2 = self.layout.height;
        height2.setValue(height);
      }
      if (gestureDirection !== layout.gestureDirection) {
        const inverted = self.inverted;
        inverted.setValue(callback(closure_2[9])(gestureDirection));
      }
      const animateToValue = self.getAnimateToValue(self.props);
      if (!tmp7) {
        const obj = { closing: props.closing };
        self.animate(obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const gesture = this.props.gesture;
      gesture.stopAnimation();
      this.isCurrentlyMounted = false;
      this.handleEndInteraction();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gestureActivationCriteria",
    value: function gestureActivationCriteria() {
      let gestureDirection;
      let gestureResponseDistance;
      let layout;
      ({ layout, gestureDirection, gestureResponseDistance } = this.props);
      if (undefined === gestureResponseDistance) {
        if ("vertical" === gestureDirection) {
          let num = 135;
        } else {
          num = 50;
        }
        gestureResponseDistance = num;
      }
      if ("vertical" === gestureDirection) {
        let obj = { "Null": 148, "Null": null, "Null": 1, "Null": "text-sm/semibold" };
        obj = { bottom: -layout.height + gestureResponseDistance };
        obj.hitSlop = obj;
        return obj;
      } else if ("vertical-inverted" === gestureDirection) {
        const obj1 = { "Null": null, "Null": null, "Null": null, "Null": null };
        const obj2 = { top: -layout.height + gestureResponseDistance };
        obj1.hitSlop = obj2;
        return obj1;
      } else {
        const sum = -layout.width + gestureResponseDistance;
        if (1 === callback(closure_2[9])(gestureDirection)) {
          const obj3 = {};
          const obj4 = { right: sum };
          obj3.hitSlop = obj4;
          obj = obj3;
        } else {
          obj = {};
          const obj5 = { left: sum };
          obj.hitSlop = obj5;
        }
        return obj;
      }
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      let cardStyle;
      let children;
      let containerStyle;
      let contentStyle;
      let current;
      let gesture;
      let gestureDirection;
      let gestureEnabled;
      let headerDarkContent;
      let insets;
      let interpolationIndex;
      let layout;
      let next;
      let overlay;
      let overlayEnabled;
      let pageOverflowEnabled;
      let shadowEnabled;
      let shadowStyle;
      let styleInterpolator;
      const self = this;
      const props = this.props;
      ({ interpolationIndex, current, gesture, layout, insets, gestureEnabled, gestureDirection, headerDarkContent, contentStyle } = props);
      ({ styleInterpolator, next, overlay, overlayEnabled, shadowEnabled, pageOverflowEnabled, children, containerStyle } = props);
      const cardAnimation = this.getCardAnimation(interpolationIndex, current, next, layout, insets.top, insets.right, insets.bottom, insets.left);
      const interpolatedStyle = this.getInterpolatedStyle(styleInterpolator, cardAnimation);
      ({ cardStyle, shadowStyle } = interpolatedStyle);
      if (!gestureEnabled) {
        let obj = contentStyle;
        if (!contentStyle) {
          obj = {};
        }
        const backgroundColor = closure_13.flatten(obj).backgroundColor;
        let tmp10 = "string" === typeof backgroundColor;
        if (tmp10) {
          let obj4 = callback(closure_2[13])(backgroundColor);
          tmp10 = 0 === obj4.alpha();
        }
        obj = { value: cardAnimation };
        const obj1 = {};
        const obj2 = { opacity: current };
        obj1.style = obj2;
        obj1.collapsable = false;
        const items = [true, callback5(RN.View, obj1)];
        const obj3 = {};
        let tmp20 = null;
        if (overlayEnabled) {
          obj4 = { pointerEvents: "box-none", style: closure_13.absoluteFill };
          const obj5 = { style: tmp5 };
          obj4.children = overlay(obj5);
          tmp20 = callback5(closure_14, obj4);
        }
        const items1 = [tmp20, ];
        const obj6 = {};
        const items2 = [closure_18.container, tmp4, containerStyle];
        obj6.style = items2;
        obj6.pointerEvents = "box-none";
        const obj7 = {};
        let tmp29 = 0 !== layout.width;
        if (tmp29) {
          tmp29 = gestureEnabled;
        }
        obj7.enabled = tmp29;
        obj7.onGestureEvent = undefined;
        obj7.onHandlerStateChange = self.handleGestureStateChange;
        const obj8 = {};
        const obj9 = {};
        const result = self.gestureActivationCriteria();
        obj9.needsOffscreenAlphaCompositing = callback6(cardStyle);
        const items3 = [closure_18.container, cardStyle];
        obj9.style = items3;
        let tmp35 = null;
        if (shadowEnabled) {
          tmp35 = null;
          if (shadowStyle) {
            tmp35 = null;
            if (!tmp10) {
              const obj10 = {};
              let str5 = [closure_18.shadow, , , ];
              if ("horizontal" === gestureDirection) {
                const items4 = [closure_18.shadowHorizontal, closure_18.shadowLeft];
                let items7 = items4;
              } else if ("horizontal-inverted" === gestureDirection) {
                const items5 = [closure_18.shadowHorizontal, closure_18.shadowRight];
                items7 = items5;
              } else if ("vertical" === gestureDirection) {
                const items6 = [closure_18.shadowVertical, closure_18.shadowTop];
                items7 = items6;
              } else {
                items7 = [closure_18.shadowVertical, closure_18.shadowBottom];
              }
              str5[1] = items7;
              const obj11 = { backgroundColor };
              str5[2] = obj11;
              str5[3] = shadowStyle;
              obj10.style = str5;
              str5 = "none";
              obj10.pointerEvents = "none";
              callback5(RN.View, obj10);
              const tmp36 = callback5;
            }
          }
        }
        const items8 = [tmp35, ];
        const obj12 = { ref: self.ref, enabled: pageOverflowEnabled, layout, style: contentStyle, children };
        items8[1] = callback5(callback(closure_2[15]), obj12);
        obj9.children = items8;
        obj8.children = closure_16(RN.View, obj9);
        obj6.children = callback5(Card(closure_2[11]).PanGestureHandler, Object.assign(obj7, result, obj8));
        items1[1] = callback5(RN.View, obj6);
        obj3.children = items1;
        items[2] = closure_16(closure_14, Object.assign({ SENDABLE_WITH_PREMIUM: null, REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE: null }, tmp, obj3));
        obj.children = items;
        return closure_16(callback(closure_2[14]).Provider, obj);
      } else {
        obj = {};
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== gestureDirection) {
            let obj13 = { translationX: gesture };
          }
          obj.nativeEvent = obj13;
          const items9 = [obj];
          obj = { useNativeDriver: true };
          tmp7(items9, obj);
        }
        const obj14 = { translationY: gesture };
        obj13 = obj14;
      }
    }
  };
  return callback(Card, items);
}(importAllResult.Component);
tmp5.defaultProps = {
  overlay(style) {
    style = style.style;
    let tmp = null;
    if (style) {
      const obj = { pointerEvents: "none" };
      const items = [overlay.overlay, style];
      obj.style = items;
      tmp = callback3(RN.View, obj);
    }
    return tmp;
  }
};
let obj = { -73375060: false, 1627731025: false, 657281372: false, shadowOffset: { bhk: null, bic: null } };
obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, shadowOffset: { bhk: false, bic: false } };
const styles = StyleSheet.create({ container: { flex: 1 }, overlay: { "Bool(false)": null, "Bool(false)": null }, shadow: {}, shadowHorizontal: obj, shadowLeft: { left: 0 }, shadowRight: { right: 0 }, shadowVertical: obj, shadowTop: { top: 0 }, shadowBottom: { bottom: 0 } });

export default tmp5;
export const getIsModalPresentation = function getIsModalPresentation(cardStyleInterpolator) {
  let tmp = cardStyleInterpolator === arg1(dependencyMap[16]).forModalPresentationIOS;
  if (!tmp) {
    tmp = "forModalPresentationIOS" === cardStyleInterpolator.name;
  }
  return tmp;
};
