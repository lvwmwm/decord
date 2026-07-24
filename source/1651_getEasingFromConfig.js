// Module ID: 1651
// Function ID: 18349
// Name: getEasingFromConfig
// Dependencies: [1641, 1634, 1586, 1623, 1607, 1638, 1652, 1668, 1592, 1669, 1670, 1675]

// Module 1651 (getEasingFromConfig)
const require = arg1;
let dependencyMap = arg6;
function getEasingFromConfig(easingV) {
  if (easingV.easingV) {
    const tmp5 = easingV.easingV[require(undefined, 1634) /* linear */.EasingNameSymbol];
    const obj2 = require(1641) /* getEasingByName */;
    if (tmp6) {
      return obj2.getEasingByName(tmp5);
    } else {
      let maybeGetBezierEasingResult = obj2.maybeGetBezierEasing(easingV.easingV);
      if (!maybeGetBezierEasingResult) {
        const logger = require(1586) /* noop */.logger;
        logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
        maybeGetBezierEasingResult = require(1641) /* getEasingByName */.getEasingByName("linear");
        const obj3 = require(1641) /* getEasingByName */;
      }
      return maybeGetBezierEasingResult;
    }
    tmp6 = tmp5 in require(1641) /* getEasingByName */.WebEasings;
  } else {
    return require(1641) /* getEasingByName */.getEasingByName("linear");
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
  if (animationWithInitialValues in require(1638) /* TransitionType */.Animations) {
    num = require(1638) /* TransitionType */.Animations[animationWithInitialValues].duration;
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
  const snapshots = require(1668) /* weakMap */.snapshots;
  const result = snapshots.set(_componentDOMRef, { top: size.top, left: size.left, width: size.width, height: size.height, scrollOffsets: getElementScrollValue(_componentDOMRef) });
}
function setElementAnimation(cloneNodeResult, dummyAnimationConfig, arg2, offsetParent) {
  const _require = cloneNodeResult;
  const dependencyMap = dummyAnimationConfig;
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
  const duration = dummyAnimationConfig.duration;
  const delay = dummyAnimationConfig.delay;
  const easing = dummyAnimationConfig.easing;
  function configureAnimation() {
    cloneNodeResult.style.animationName = animationName;
    cloneNodeResult.style.animationDuration = "" + duration + "s";
    cloneNodeResult.style.animationDelay = "" + delay + "s";
    cloneNodeResult.style.animationTimingFunction = easing;
  }
  if (dummyAnimationConfig.animationType === _require(1607).LayoutAnimationType.ENTERING) {
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(configureAnimation);
  } else {
    configureAnimation();
  }
  function maybeRemoveElement(closure_0) {
    let isDummy = cloneNodeResult.isDummy;
    if (isDummy) {
      isDummy = null != tmp;
    }
    if (isDummy) {
      isDummy = tmp.contains(cloneNodeResult);
    }
    if (isDummy) {
      cloneNodeResult.removedAfterAnimation = true;
      tmp.removeChild(cloneNodeResult);
    }
  }
  let c9 = false;
  function maybeCallCallback(arg0) {
    let callback = !c9;
    if (!c9) {
      callback = dummyAnimationConfig.callback;
    }
    if (callback) {
      dummyAnimationConfig.callback(arg0);
      c9 = true;
    }
  }
  cloneNodeResult.onanimationend = () => {
    if (closure_2) {
      maybeRemoveElement(cloneNodeResult);
    }
    maybeRemoveElement();
    maybeCallCallback(true);
    const removed = cloneNodeResult.removeEventListener("animationcancel", animationCancelHandler);
  };
  function animationCancelHandler() {
    maybeRemoveElement();
    maybeCallCallback(false);
    const removed = cloneNodeResult.removeEventListener("animationcancel", animationCancelHandler);
  }
  cloneNodeResult.onanimationstart = () => {
    if (dummyAnimationConfig.animationType === cloneNodeResult(dummyAnimationConfig[4]).LayoutAnimationType.ENTERING) {
      let obj = cloneNodeResult(dummyAnimationConfig[8]);
      obj = { visibility: "initial" };
      obj._updatePropsJS(obj, cloneNodeResult);
    }
    const listener = cloneNodeResult.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in _require(1638).Animations)) {
    const result = _require(1669).scheduleAnimationCleanup(animationName, duration + delay, () => {
      if (closure_2) {
        const snapshots = cloneNodeResult(dummyAnimationConfig[7]).snapshots;
        cloneNodeResult(dummyAnimationConfig[7]).setElementPosition(cloneNodeResult, snapshots.get(cloneNodeResult));
        const obj = cloneNodeResult(dummyAnimationConfig[7]);
      }
      maybeRemoveElement();
      maybeCallCallback(false);
    });
    let obj = _require(1669);
  }
}
function getElementScrollValue(offsetParent) {
  let parentElement = offsetParent;
  const obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
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
    if (require(1607) /* isWorkletFunction */.ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (require(1607) /* isWorkletFunction */.ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return require(1623) /* isReducedMotionEnabledInSystem */.ReducedMotionManager.jsValue;
    }
  } else {
    return require(1623) /* isReducedMotionEnabledInSystem */.ReducedMotionManager.jsValue;
  }
};
arg5.getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  return { animationName: animationWithInitialValues, animationType, duration: getDurationFromConfig(entering, animationWithInitialValues), delay: getDelayFromConfig(entering), easing: getEasingFromConfig(entering), callback: getCallbackFromConfig(entering), reversed: getReversedFromConfig(entering) };
};
arg5.maybeModifyStyleForKeyframe = function maybeModifyStyleForKeyframe(style, entering) {
  if (entering instanceof require(1652) /* BaseAnimationBuilder */.Keyframe) {
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
    let ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.LINEAR;
  } else if ("SequencedTransition" === animationName) {
    ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.SEQUENCED;
  } else if ("FadingTransition" === animationName) {
    ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.FADING;
  } else if ("JumpingTransition" === animationName) {
    ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.JUMPING;
  } else if ("CurvedTransition" === animationName) {
    ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.CURVED;
  } else if ("EntryExitTransition" === animationName) {
    ENTRY_EXIT = require(1638) /* TransitionType */.TransitionType.ENTRY_EXIT;
  }
  const obj = require(1670) /* addPxToTransform */;
  ({ dummyTransitionKeyframeName, transitionKeyframeName: animationName.animationName } = require(1670) /* addPxToTransform */.TransitionGenerator(ENTRY_EXIT, easingY));
  if (ENTRY_EXIT === require(1638) /* TransitionType */.TransitionType.CURVED) {
    const obj2 = require(1675) /* showChildren */;
    const result = obj2.prepareCurvedTransition(_componentDOMRef, animationName, easingY, dummyTransitionKeyframeName);
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, animationName);
};
arg5.handleExitingAnimation = function handleExitingAnimation(offsetParent, dummyAnimationConfig) {
  let firstChild;
  const _require = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  const dependencyMap = cloneNodeResult;
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  const map = new Map();
  function saveScrollPosition(item10015) {
    const result = map.set(item10015, { top: item10015.scrollTop, left: item10015.scrollLeft });
    for (const item10015 of arr) {
      let tmp3 = saveScrollPosition;
      let tmp4 = saveScrollPosition(item10015);
      continue;
    }
  }
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
    if (cloneNodeResult === closure_1) {
      tmp2 = closure_0;
    }
    const value = map.get(tmp2);
    if (value) {
      ({ top: cloneNodeResult.scrollTop, left: cloneNodeResult.scrollLeft } = value);
    }
    for (const item10016 of arr) {
      let tmp5 = restoreScrollPosition;
      let tmp6 = restoreScrollPosition(item10016);
      continue;
    }
  }
  let result = restoreScrollPosition(cloneNodeResult);
  const snapshots = _require(1668).snapshots;
  const rect = snapshots.get(offsetParent);
  let tmp6 = getElementScrollValue(offsetParent);
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
  const snapshots2 = _require(1668).snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  _require(1668).setElementPosition(cloneNodeResult, rect);
  setElementAnimation(cloneNodeResult, dummyAnimationConfig, false, offsetParent);
};
