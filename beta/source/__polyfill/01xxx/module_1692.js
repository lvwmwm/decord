// Module ID: 1692
// Function ID: 1693
// Dependencies: [1662, 1693, 1641, 1706, 1707, 1725, 1723, 1724, 1689]
// Exports: tryActivateLayoutTransition

// Module 1692
import _mod1641 from "module_1641" /* 1641 */;
import _mod1662 from "module_1662" /* 1662 */;
import TransitionType from "TransitionType" /* 1693 */;
import maybeModifyStyleForKeyframe from "maybeModifyStyleForKeyframe" /* 1706 */;
import findDescendantWithExitingAnimation from "findDescendantWithExitingAnimation" /* 1724 */;

require = arg1;
const dependencyMap = arg6;
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  if (ENTERING === _mod1662.LayoutAnimationType.ENTERING) {
    let entering = props.entering;
  } else if (ENTERING === tmp(1662).LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === tmp(1662).LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    const tmp5 = entering instanceof tmp(1707).Keyframe;
    if (tmp5) {
      let presetName = tmp(1725).createCustomKeyFrameAnimation(entering.definitions);
      const tmpResult = tmp(1725);
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      animationWithInitialValues = tmp(1725).createAnimationWithInitialValues(presetName, entering.initialValues);
      const tmpResult8 = tmp(1725);
    }
    let flag = !(animationWithInitialValues in tmp(1693).Animations) && !(ENTERING === tmp(1662).LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues);
    if (flag) {
      let logger = tmp(1641).logger;
      logger.warn("Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.");
      flag = true;
    }
    processedConfig = null;
    if (!flag) {
      if (tmp5) {
        const _Object = Object;
        const keys = Object.keys(entering.definitions);
        let hasItem = keys.includes("100");
        if (!hasItem) {
          hasItem = keys.includes("to");
        }
        if (!hasItem) {
          const logger2 = tmp(1641).logger;
          logger2.warn("Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')");
        }
      }
      processedConfig = tmp(1706).getProcessedConfig(animationWithInitialValues, ENTERING, entering);
      const tmpResult9 = tmp(1706);
    }
    const tmp8 = ENTERING === tmp(1662).LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues;
  }
  const result = maybeModifyStyleForKeyframe.maybeModifyStyleForKeyframe(_componentDOMRef, props.entering);
  let animationName;
  if (processedConfig != null) {
    animationName = processedConfig.animationName;
  }
  if (animationName in TransitionType.Animations) {
    let animationName1;
    if (processedConfig != null) {
      animationName1 = processedConfig.animationName;
    }
    (function maybeReportOverwrittenProperties(style, style2) {
      const set = new Set();
      for (const item10014 of matchAllResult) {
        let addResult = set.add(item10014[1]);
        continue;
      }
      const matchAllResult = style.matchAll(/([a-zA-Z-]+)(?=:)/g);
      const found = Array.from(style2).filter((item) => set.has(item));
      if (0 !== found.length) {
        const logger = _mod1641.logger;
        let str = "Properties";
        if (1 === found.length) {
          str = "Property";
        }
        const _HermesInternal = HermesInternal;
        logger.warn("" + str + " [" + found.join(", ") + "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.");
      }
    })(tmp(1693).Animations[animationName1].style, _componentDOMRef.style);
  }
  if (processedConfig) {
    if (tmp(1662).LayoutAnimationType.ENTERING === ENTERING) {
      tmp(1706).setElementAnimation(_componentDOMRef, processedConfig, true);
      const tmpResult11 = tmp(1706);
    } else if (tmp(1662).LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const result1 = tmp(1706).handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
      const tmpResult12 = tmp(1706);
    } else if (tmp(1662).LayoutAnimationType.EXITING === ENTERING) {
      const result2 = tmp(1706).handleExitingAnimation(_componentDOMRef, processedConfig);
      const tmpResult13 = tmp(1706);
    }
  } else {
    const elementVisible = tmp(1723).makeElementVisible(_componentDOMRef, 0);
    const tmpResult14 = tmp(1723);
  }
}

export { startWebLayoutAnimation };
export const tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
  if (props.layout) {
    const size = _componentDOMRef.getBoundingClientRect();
    if (!obj.areDOMRectsEqual(size, arg2)) {
      const enteringV = props.layout.enteringV;
      let presetName;
      if (enteringV != null) {
        presetName = enteringV.presetName;
      }
      const exitingV = props.layout.exitingV;
      let presetName1;
      if (exitingV != null) {
        presetName1 = exitingV.presetName;
      }
      const obj2 = { translateX: arg2.x - size.x + (arg2.width - size.width) / 2, translateY: arg2.y - size.y + (arg2.height - size.height) / 2, scaleX: arg2.width / size.width, scaleY: arg2.height / size.height, reversed: false, easingX: null, easingY: null, entering: null, exiting: null };
      const easingXV = props.layout.easingXV;
      let str;
      if (easingXV != null) {
        str = easingXV[tmp3(undefined, 1689).EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      obj2.easingX = str;
      const easingYV = props.layout.easingYV;
      let str2;
      if (easingYV != null) {
        str2 = easingYV[tmp3(undefined, 1689).EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      obj2.easingY = str2;
      obj2.entering = presetName;
      obj2.exiting = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, tmp3(1662).LayoutAnimationType.LAYOUT, obj2);
    }
    obj = findDescendantWithExitingAnimation;
  }
};
