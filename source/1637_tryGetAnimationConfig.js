// Module ID: 1637
// Function ID: 18324
// Name: tryGetAnimationConfig
// Dependencies: []

// Module 1637 (tryGetAnimationConfig)
function tryGetAnimationConfig(entering, ENTERING) {
  if (ENTERING === ENTERING(arg6[0]).LayoutAnimationType.ENTERING) {
    entering = entering.entering;
  } else if (ENTERING === ENTERING(arg6[0]).LayoutAnimationType.EXITING) {
    entering = entering.exiting;
  } else {
    entering = null;
    if (ENTERING === ENTERING(arg6[0]).LayoutAnimationType.LAYOUT) {
      entering = entering.layout;
    }
  }
  if (entering) {
    let tmp9 = ENTERING === ENTERING(arg6[0]).LayoutAnimationType.LAYOUT;
    const tmp10 = entering instanceof ENTERING(arg6[4]).Keyframe;
    if (tmp10) {
      let presetName = ENTERING(arg6[5]).createCustomKeyFrameAnimation(entering.definitions);
      const obj = ENTERING(arg6[5]);
    } else if ("function" === typeof entering) {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      animationWithInitialValues = ENTERING(arg6[5]).createAnimationWithInitialValues(presetName, entering.initialValues);
      const obj2 = ENTERING(arg6[5]);
    }
    if (!tmp9) {
      tmp9 = tmp10;
    }
    if (!tmp9) {
      tmp9 = tmp11;
    }
    const tmp19 = animationWithInitialValues in ENTERING(arg6[1]).Animations;
    let flag = !tmp19;
    if (!tmp19) {
      flag = !tmp9;
    }
    if (flag) {
      const logger = ENTERING(arg6[2]).logger;
      logger.warn("Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.");
      flag = true;
    }
    if (flag) {
      return null;
    } else {
      if (tmp10) {
        const _Object = Object;
        const keys = Object.keys(entering.definitions);
        let hasItem = keys.includes("100");
        if (!hasItem) {
          hasItem = keys.includes("to");
        }
        if (!hasItem) {
          const logger2 = ENTERING(arg6[2]).logger;
          logger2.warn("Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')");
        }
      }
      return ENTERING(arg6[3]).getProcessedConfig(animationWithInitialValues, ENTERING, entering);
    }
  } else {
    return null;
  }
}
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  const tmp = tryGetAnimationConfig(props, ENTERING);
  const result = _componentDOMRef(arg6[3]).maybeModifyStyleForKeyframe(_componentDOMRef, props.entering);
  let animationName;
  if (null != tmp) {
    animationName = tmp.animationName;
  }
  if (animationName in _componentDOMRef(arg6[1]).Animations) {
    let animationName1;
    if (null != tmp) {
      animationName1 = tmp.animationName;
    }
    function maybeReportOverwrittenProperties(style, style2) {
      const set = new Set();
      const matchAllResult = style.matchAll(/([a-zA-Z-]+)(?=:)/g);
      const obj = set;
      while (tmp3 !== undefined) {
        let tmp5 = set;
        let addResult = obj.add(tmp4[1]);
        // continue
      }
      const tmp3 = style.matchAll(/([a-zA-Z-]+)(?=:)/g)[Symbol.iterator]();
      const found = Array.from(style2).filter((arg0) => set.has(arg0));
      if (0 !== found.length) {
        const logger = set(closure_1[2]).logger;
        let str = "Properties";
        if (1 === found.length) {
          str = "Property";
        }
        const _HermesInternal = HermesInternal;
        logger.warn("" + str + " [" + found.join(", ") + "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.");
      }
    }(_componentDOMRef(arg6[1]).Animations[animationName1].style, _componentDOMRef.style);
  }
  if (tmp) {
    if (tmp8(tmp9[0]).LayoutAnimationType.ENTERING === ENTERING) {
      _componentDOMRef(arg6[3]).setElementAnimation(_componentDOMRef, tmp, true);
      const obj5 = _componentDOMRef(arg6[3]);
    } else if (_componentDOMRef(arg6[0]).LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = tmp.reversed;
      const result1 = _componentDOMRef(arg6[3]).handleLayoutTransition(_componentDOMRef, tmp, easingY);
      const obj4 = _componentDOMRef(arg6[3]);
    } else if (_componentDOMRef(arg6[0]).LayoutAnimationType.EXITING === ENTERING) {
      const result2 = _componentDOMRef(arg6[3]).handleExitingAnimation(_componentDOMRef, tmp);
      const obj3 = _componentDOMRef(arg6[3]);
    }
  } else {
    const elementVisible = tmp8(tmp9[6]).makeElementVisible(_componentDOMRef, 0);
    const tmp8Result = tmp8(tmp9[6]);
  }
}
arg5.startWebLayoutAnimation = startWebLayoutAnimation;
arg5.tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
  if (props.layout) {
    const size = _componentDOMRef.getBoundingClientRect();
    let obj = _componentDOMRef(arg6[7]);
    if (!obj.areDOMRectsEqual(size, arg2)) {
      const enteringV = props.layout.enteringV;
      let presetName;
      if (null != enteringV) {
        presetName = enteringV.presetName;
      }
      const exitingV = props.layout.exitingV;
      let presetName1;
      if (null != exitingV) {
        presetName1 = exitingV.presetName;
      }
      obj = { translateX: arg2.x - size.x + (arg2.width - size.width) / 2, translateY: arg2.y - size.y + (arg2.height - size.height) / 2, scaleX: arg2.width / size.width, scaleY: arg2.height / size.height, reversed: false };
      const easingXV = props.layout.easingXV;
      let tmp6;
      if (null != easingXV) {
        tmp6 = easingXV[closure_0(undefined, closure_1[8]).EasingNameSymbol];
      }
      let str = "ease";
      let str2 = "ease";
      if (null != tmp6) {
        str2 = tmp6;
      }
      obj.easingX = str2;
      const easingYV = props.layout.easingYV;
      let tmp9;
      if (null != easingYV) {
        tmp9 = easingYV[closure_0(undefined, closure_1[8]).EasingNameSymbol];
      }
      if (null != tmp9) {
        str = tmp9;
      }
      obj.easingY = str;
      obj.entering = presetName;
      obj.exiting = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, _componentDOMRef(arg6[0]).LayoutAnimationType.LAYOUT, obj);
    }
  }
};
