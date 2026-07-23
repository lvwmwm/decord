// Module ID: 1669
// Function ID: 18540
// Name: findDescendantWithExitingAnimation
// Dependencies: [1585, 1586, 1638, 1593, 1668]

// Module 1669 (findDescendantWithExitingAnimation)
const require = arg1;
const dependencyMap = arg6;
function findDescendantWithExitingAnimation(isDummy, appendChild) {
  let length;
  if (isDummy instanceof globalThis.HTMLElement) {
    isDummy = isDummy.isDummy;
    if (isDummy) {
      isDummy = undefined === isDummy.removedAfterAnimation;
    }
    if (isDummy) {
      (function reattachElementToAncestor(onanimationend, appendChild) {
        let closure_0 = onanimationend;
        let closure_1 = appendChild;
        const snapshots = outer1_0(outer1_1[4]).snapshots;
        const value = snapshots.get(onanimationend);
        if (value) {
          onanimationend.removedAfterAnimation = true;
          appendChild.appendChild(onanimationend);
          outer1_0(outer1_1[4]).setElementPosition(onanimationend, value);
          onanimationend = onanimationend.onanimationend;
          onanimationend.onanimationend = function(arg0) {
            appendChild.removeChild(closure_0);
            if (null != onanimationend) {
              const self = this;
              onanimationend.call(this, arg0);
            }
          };
          const obj = outer1_0(outer1_1[4]);
        } else {
          const logger = outer1_0(outer1_1[1]).logger;
          logger.error("Failed to obtain snapshot.");
        }
      })(isDummy, appendChild);
    }
    const _Array = Array;
    const arr = Array.from(isDummy.children);
    let num = 0;
    if (0 < arr.length) {
      do {
        let tmp2 = findDescendantWithExitingAnimation;
        let tmp3 = findDescendantWithExitingAnimation(arr[num], appendChild);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  }
}
const map = new Map();
let closure_3 = [];
let c4 = false;
arg5.configureWebLayoutAnimations = function configureWebLayoutAnimations() {
  if (obj.isWindowAvailable()) {
    const _document = document;
    if (null === document.getElementById("ReanimatedPredefinedWebAnimationsStyle")) {
      const _document2 = document;
      const element = <style />;
      element.id = "ReanimatedPredefinedWebAnimationsStyle";
      element.onload = () => {
        if (element.sheet) {
          for (const key10018 in tmp(tmp2[2]).Animations) {
            let tmp4 = key10018;
            let tmp5 = element;
            let sheet = element.sheet;
            let tmp6 = element;
            let tmp7 = outer1_1;
            let insertRuleResult = sheet.insertRule(element(outer1_1[2]).Animations[key10018].style);
            continue;
          }
        } else {
          const logger = tmp(tmp2[1]).logger;
          logger.error("Failed to create layout animations stylesheet.");
        }
      };
      const _document3 = document;
      const element1 = <style />;
      element1.id = "ReanimatedCustomWebAnimationsStyle";
      const _document4 = document;
      head.appendChild(element);
      const _document5 = document;
      head2.appendChild(element1);
    }
  }
};
arg5.insertWebAnimation = function insertWebAnimation(name, result) {
  if (obj.isWindowAvailable()) {
    const _document = document;
    const element = document.getElementById("ReanimatedCustomWebAnimationsStyle");
    if (element.sheet) {
      const sheet = element.sheet;
      sheet.insertRule(result, 0);
      arr = arr.unshift(name);
      result = map.set(name, 0);
      let num3 = 1;
      if (1 < arr.length) {
        const value = map.get(arr[num3]);
        while (undefined !== value) {
          let tmp15 = map;
          let tmp16 = arr;
          let result1 = map.set(arr[num3], value + 1);
          num3 = num3 + 1;
        }
        const ReanimatedError = require(1593) /* processStack */.ReanimatedError;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      }
    } else {
      const logger = require(1586) /* noop */.logger;
      logger.error("Failed to create layout animations stylesheet.");
    }
  }
};
arg5.scheduleAnimationCleanup = function scheduleAnimationCleanup(animationName, arg1, arg2) {
  let closure_0 = animationName;
  let closure_1 = arg2;
  const timerId = setTimeout(() => {
    if (obj.isWindowAvailable()) {
      const _document = document;
      const element = document.getElementById("ReanimatedCustomWebAnimationsStyle");
      let sum = outer1_2.get(tmp);
      if (undefined === sum) {
        const ReanimatedError2 = animationName(1593).ReanimatedError;
        const prototype2 = ReanimatedError2.prototype;
        const reanimatedError2 = new ReanimatedError2("Failed to obtain animation index.");
        throw reanimatedError2;
      } else {
        dependencyMap();
        const sheet = element.sheet;
        if (null != sheet) {
          sheet.deleteRule(sum);
        }
        outer1_3.splice(sum, 1);
        outer1_2.delete(tmp);
        if (sum < outer1_3.length) {
          const value = outer1_2.get(outer1_3[sum]);
          while (undefined !== value) {
            let tmp15 = outer1_2;
            let tmp16 = outer1_3;
            let result = outer1_2.set(outer1_3[sum], value - 1);
            sum = sum + 1;
          }
          const ReanimatedError = animationName(1593).ReanimatedError;
          const prototype = ReanimatedError.prototype;
          const reanimatedError = new ReanimatedError("Failed to obtain animation index.");
          throw reanimatedError;
        }
      }
    }
  }, Math.max(5 * arg1 * 1000, arg1 + 160));
};
arg5.addHTMLMutationObserver = function addHTMLMutationObserver() {
  let isWindowAvailableResult = !c4;
  if (!c4) {
    isWindowAvailableResult = require(1585) /* isJest */.isWindowAvailable();
    const obj = require(1585) /* isJest */;
  }
  if (isWindowAvailableResult) {
    c4 = true;
    const prototype = globalThis.MutationObserver.prototype;
    const mutationObserver = new globalThis.MutationObserver((arg0) => {
      const target = tmp.target;
      let str = "__reactFiber";
      const keys = Object.keys(target);
      for (const item10016 of keys) {
        let tmp3 = item10016;
        if (item10016.startsWith("__reactFiber")) {
          str = item10016;
          obj.return();
          break;
        }
        let tmp4 = target[str];
        let tmp5 = null;
        let navigation;
        if (null != tmp4) {
          let child = tmp4.child;
          if (null != child) {
            let memoizedProps = child.memoizedProps;
            if (null != memoizedProps) {
              navigation = memoizedProps.navigation;
            }
          }
        }
        if (undefined === navigation) {
          let num = 0;
          if (0 < tmp.removedNodes.length) {
            do {
              let tmp7 = outer1_5;
              let tmp8 = outer1_5(tmp.removedNodes[num], tmp.target);
              num = num + 1;
              let length = tmp.removedNodes.length;
            } while (num < length);
          }
        }
      }
    });
    const _document = document;
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }
};
arg5.areDOMRectsEqual = function areDOMRectsEqual(size, arg1) {
  return size.x === arg1.x && size.y === arg1.y && size.width === arg1.width && size.height === arg1.height;
};
