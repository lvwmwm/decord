// Module ID: 1651
// Function ID: 18342
// Name: getEasingFromConfig
// Dependencies: []

// Module 1651 (getEasingFromConfig)
function getEasingFromConfig(easingV) {
  if (easingV.easingV) {
    const obj2 = arg1(arg6[0]);
    if (tmp6) {
      return obj2.getEasingByName(tmp5);
    } else {
      let maybeGetBezierEasingResult = obj2.maybeGetBezierEasing(easingV.easingV);
      if (!maybeGetBezierEasingResult) {
        const logger = arg1(arg6[2]).logger;
        logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
        maybeGetBezierEasingResult = arg1(arg6[0]).getEasingByName("linear");
        const obj3 = arg1(arg6[0]);
      }
      return maybeGetBezierEasingResult;
    }
    const tmp6 = easingV.easingV[closure_0(undefined, closure_1[1]).EasingNameSymbol] in arg1(arg6[0]).WebEasings;
  } else {
    return arg1(arg6[0]).getEasingByName("linear");
  }
}
function getRandomDelay(delayV) {
  let num = 1000;
  if (arguments.length > 0) {
    num = 1000;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  return Math.floor(Math.random() * (num + 1)) / 1000;
}
function getDelayFromConfig(randomizeDelay) {
  randomizeDelay = randomizeDelay.randomizeDelay;
  let num = 0;
  if (randomizeDelay) {
    num = getRandomDelay();
  }
  if (!randomizeDelay.delayV) {
    return num;
  } else if (randomizeDelay) {
    let result = getRandomDelay(tmp.delayV);
  } else {
    result = tmp.delayV / 1000;
  }
}
function getDurationFromConfig(durationV, animationWithInitialValues) {
  let num = 0.3;
  if (animationWithInitialValues in animationWithInitialValues(arg6[5]).Animations) {
    num = animationWithInitialValues(arg6[5]).Animations[animationWithInitialValues].duration;
  }
  if (undefined !== durationV.durationV) {
    num = durationV.durationV / 1000;
  }
  return num;
}
function getCallbackFromConfig(callbackV) {
  callbackV = null;
  if (undefined !== callbackV.callbackV) {
    callbackV = callbackV.callbackV;
  }
  return callbackV;
}
function getReversedFromConfig(reversed) {
  return reversed.reversed;
}
function saveSnapshot(_componentDOMRef) {
  const size = _componentDOMRef.getBoundingClientRect();
  const snapshots = arg1(arg6[7]).snapshots;
  const result = snapshots.set(_componentDOMRef, { top: size.top, left: size.left, width: size.width, height: size.height, scrollOffsets: getElementScrollValue(_componentDOMRef) });
}
function setElementAnimation(cloneNodeResult, dummyAnimationConfig, arg2, offsetParent) {
  dummyAnimationConfig = cloneNodeResult;
  const arg6 = dummyAnimationConfig;
  let closure_2 = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
  let tmp = null;
  if (arguments.length > 3) {
    tmp = null;
    if (undefined !== arguments[3]) {
      tmp = arguments[3];
    }
  }
  const getRandomDelay = tmp;
  const animationName = dummyAnimationConfig.animationName;
  const getDelayFromConfig = animationName;
  const duration = dummyAnimationConfig.duration;
  const getDurationFromConfig = duration;
  const delay = dummyAnimationConfig.delay;
  const getReversedFromConfig = dummyAnimationConfig.easing;
  function configureAnimation() {
    arg0.style.animationName = animationName;
    arg0.style.animationDuration = "" + duration + "s";
    arg0.style.animationDelay = "" + delay + "s";
    arg0.style.animationTimingFunction = easing;
  }
  if (dummyAnimationConfig.animationType === dummyAnimationConfig(arg6[4]).LayoutAnimationType.ENTERING) {
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(configureAnimation);
  } else {
    configureAnimation();
  }
  function maybeRemoveElement(arg0) {
    let isDummy = arg0.isDummy;
    if (isDummy) {
      isDummy = null != tmp;
    }
    if (isDummy) {
      isDummy = tmp.contains(arg0);
    }
    if (isDummy) {
      arg0.removedAfterAnimation = true;
      tmp.removeChild(arg0);
    }
  }
  let closure_9 = false;
  function maybeCallCallback(arg0) {
    let callback = !closure_9;
    if (!closure_9) {
      callback = arg1.callback;
    }
    if (callback) {
      arg1.callback(arg0);
      closure_9 = true;
    }
  }
  cloneNodeResult.onanimationend = () => {
    if (closure_2) {
      maybeRemoveElement(arg0);
    }
    maybeRemoveElement();
    maybeCallCallback(true);
    const removed = arg0.removeEventListener("animationcancel", animationCancelHandler);
  };
  function animationCancelHandler() {
    maybeRemoveElement();
    maybeCallCallback(false);
    const removed = arg0.removeEventListener("animationcancel", animationCancelHandler);
  }
  cloneNodeResult.onanimationstart = () => {
    if (arg1.animationType === arg0(arg1[4]).LayoutAnimationType.ENTERING) {
      let obj = arg0(arg1[8]);
      obj = { visibility: "initial" };
      obj._updatePropsJS(obj, arg0);
    }
    const listener = arg0.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in dummyAnimationConfig(arg6[5]).Animations)) {
    const result = dummyAnimationConfig(arg6[9]).scheduleAnimationCleanup(animationName, duration + delay, () => {
      if (closure_2) {
        const snapshots = arg0(arg1[7]).snapshots;
        arg0(arg1[7]).setElementPosition(arg0, snapshots.get(arg0));
        const obj = arg0(arg1[7]);
      }
      maybeRemoveElement();
      maybeCallCallback(false);
    });
    const obj = dummyAnimationConfig(arg6[9]);
  }
}
function getElementScrollValue(offsetParent) {
  let parentElement = offsetParent;
  const obj = { topScreenId: -536870861, belowTopScreenId: -299892737 };
  if (offsetParent) {
    do {
      let tmp = 0 !== parentElement.scrollTop && 0 === obj.scrollTopOffset;
      if (tmp) {
        obj.scrollTopOffset = parentElement.scrollTop;
      }
      let tmp2 = 0 !== parentElement.scrollLeft && 0 === obj.scrollLeftOffset;
      if (tmp2) {
        obj.scrollLeftOffset = parentElement.scrollLeft;
      }
      parentElement = parentElement.parentElement;
    } while (parentElement);
  }
  return obj;
}
arg5.getReducedMotionFromConfig = function getReducedMotionFromConfig(entering) {
  if (entering.reduceMotionV) {
    const reduceMotionV = entering.reduceMotionV;
    if (arg1(arg6[4]).ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (arg1(arg6[4]).ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return arg1(arg6[3]).ReducedMotionManager.jsValue;
    }
  } else {
    return arg1(arg6[3]).ReducedMotionManager.jsValue;
  }
};
arg5.getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  return { animationName: animationWithInitialValues, animationType, duration: getDurationFromConfig(entering, animationWithInitialValues), delay: getDelayFromConfig(entering), easing: getEasingFromConfig(entering), callback: getCallbackFromConfig(entering), reversed: getReversedFromConfig(entering) };
};
arg5.maybeModifyStyleForKeyframe = function maybeModifyStyleForKeyframe(style, entering) {
  if (entering instanceof entering(arg6[6]).Keyframe) {
    style.style.animationFillMode = "forwards";
    const _Object = Object;
    const values = Object.values(entering.definitions);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (!("originX" in nextResult)) {
        let tmp8 = nextResult;
      }
      let str4 = "absolute";
      style.style.position = "absolute";
      iter.return();
    }
  }
};
arg5.saveSnapshot = saveSnapshot;
arg5.setElementAnimation = setElementAnimation;
arg5.handleLayoutTransition = function handleLayoutTransition(_componentDOMRef, animationName, easingY) {
  let dummyTransitionKeyframeName;
  animationName = animationName.animationName;
  if ("LinearTransition" === animationName) {
    let ENTRY_EXIT = animationName(arg6[5]).TransitionType.LINEAR;
  } else if ("SequencedTransition" === animationName) {
    ENTRY_EXIT = animationName(arg6[5]).TransitionType.SEQUENCED;
  } else if ("FadingTransition" === animationName) {
    ENTRY_EXIT = animationName(arg6[5]).TransitionType.FADING;
  } else if ("JumpingTransition" === animationName) {
    ENTRY_EXIT = animationName(arg6[5]).TransitionType.JUMPING;
  } else if ("CurvedTransition" === animationName) {
    ENTRY_EXIT = animationName(arg6[5]).TransitionType.CURVED;
  } else if ("EntryExitTransition" === animationName) {
    ENTRY_EXIT = animationName(arg6[5]).TransitionType.ENTRY_EXIT;
  }
  const obj = animationName(arg6[10]);
  ({ dummyTransitionKeyframeName, transitionKeyframeName: animationName.animationName } = animationName(arg6[10]).TransitionGenerator(ENTRY_EXIT, easingY));
  if (ENTRY_EXIT === animationName(arg6[5]).TransitionType.CURVED) {
    const obj2 = animationName(arg6[11]);
    const result = obj2.prepareCurvedTransition(_componentDOMRef, animationName, easingY, dummyTransitionKeyframeName);
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, animationName);
};
arg5.handleExitingAnimation = function handleExitingAnimation(offsetParent, dummyAnimationConfig) {
  let firstChild;
  dummyAnimationConfig = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  const arg6 = cloneNodeResult;
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  const getEasingFromConfig = new Map();
  function saveScrollPosition(scrollTop) {
    const result = map.set(scrollTop, { top: scrollTop.scrollTop, left: scrollTop.scrollLeft });
    for (const item10015 of arr) {
      let tmp3 = closure_3;
      let tmp4 = closure_3(item10015);
    }
  }
  const getRandomDelay = saveScrollPosition;
  saveScrollPosition(offsetParent);
  if (offsetParent.firstChild) {
    do {
      let appendChildResult = cloneNodeResult.appendChild(offsetParent.firstChild);
      firstChild = offsetParent.firstChild;
    } while (firstChild);
  }
  if (null != offsetParent) {
    offsetParent.appendChild(cloneNodeResult);
  }
  function restoreScrollPosition(cloneNodeResult) {
    let tmp2 = cloneNodeResult;
    if (cloneNodeResult === cloneNodeResult) {
      tmp2 = cloneNodeResult;
    }
    const value = map.get(tmp2);
    if (value) {
      ({ top: cloneNodeResult.scrollTop, left: cloneNodeResult.scrollLeft } = value);
    }
    for (const item10016 of arr) {
      let tmp5 = closure_4;
      let tmp6 = closure_4(item10016);
    }
  }
  const getDelayFromConfig = restoreScrollPosition;
  const result = restoreScrollPosition(cloneNodeResult);
  const snapshots = dummyAnimationConfig(arg6[7]).snapshots;
  const rect = snapshots.get(offsetParent);
  const tmp6 = getElementScrollValue(offsetParent);
  const scrollTopOffset = tmp6.scrollTopOffset;
  const scrollTopOffset2 = rect.scrollOffsets.scrollTopOffset;
  if (scrollTopOffset !== scrollTopOffset2) {
    rect.top = rect.top + (scrollTopOffset2 - scrollTopOffset);
  }
  const scrollLeftOffset = tmp6.scrollLeftOffset;
  const scrollLeftOffset2 = rect.scrollOffsets.scrollLeftOffset;
  if (scrollLeftOffset !== scrollLeftOffset2) {
    rect.left = rect.left + (scrollLeftOffset2 - scrollLeftOffset);
  }
  const snapshots2 = dummyAnimationConfig(arg6[7]).snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  const map = new Map();
  dummyAnimationConfig(arg6[7]).setElementPosition(cloneNodeResult, rect);
  setElementAnimation(cloneNodeResult, dummyAnimationConfig, false, offsetParent);
};
