// Module ID: 1670
// Function ID: 18552
// Name: addPxToTransform
// Dependencies: [77, 29, 57, 1640, 1669, 1638, 1671, 1672, 1673, 1674, 1675, 1676]
// Exports: TransitionGenerator, createAnimationWithInitialValues, createCustomKeyFrameAnimation

// Module 1670 (addPxToTransform)
import _defineProperty from "_defineProperty";
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";

const require = arg1;
function addPxToTransform(transform) {
  return transform.map((arg0) => {
    const obj = {};
    const entries = Object.entries(arg0);
    while (tmp2 !== undefined) {
      let tmp4 = outer1_5;
      let tmp5 = outer1_5(tmp3, 2);
      let first = tmp5[0];
      let obj3 = first;
      let tmp6 = tmp5[1];
      if (first.includes("translate")) {
        let tmp8 = tmp6;
        if ("number" === typeof tmp6) {
          let tmp12 = obj;
          let tmp13 = first;
          let tmp14 = tmp6;
          let _HermesInternal = HermesInternal;
          obj[obj3] = "" + tmp6 + "px";
          continue;
        }
      } else {
        let tmp7 = first;
      }
      let tmp9 = obj;
      let tmp10 = first;
      let tmp11 = tmp6;
      obj[obj3] = tmp6;
    }
    return obj;
  });
}
function generateNextCustomKeyframeName() {
  let closure_6 = tmp + 1;
  return "REA" + +closure_6;
}
let closure_2 = ["transform"];
let c6 = 0;

export const createCustomKeyFrameAnimation = function createCustomKeyFrameAnimation(definitions) {
  const values = Object.values(definitions);
  for (const item10009 of values) {
    let tmp3 = item10009;
    if (item10009.transform) {
      let tmp4 = item10009;
      let tmp5 = addPxToTransform;
      tmp3.transform = addPxToTransform(tmp3.transform);
    }
    continue;
  }
  const obj = { name: generateNextCustomKeyframeName(), style: definitions, duration: -1 };
  const keys = Object.keys(definitions);
  for (let num = 1; num < keys.length; num = num + 1) {
    let tmp6 = definitions[keys[num]];
    if (tmp6.easing) {
      definitions[keys[num - 1]].easing = tmp6.easing;
      delete tmp.easing;
    }
  }
  const result = require(1640) /* convertAnimationObjectToKeyframes */.convertAnimationObjectToKeyframes(obj);
  const obj2 = require(1640) /* convertAnimationObjectToKeyframes */;
  require(1669) /* findDescendantWithExitingAnimation */.insertWebAnimation(obj.name, result);
  return obj.name;
};
export const createAnimationWithInitialValues = function createAnimationWithInitialValues(presetName, initialValues) {
  const structuredCloneResult = structuredClone(require(1638) /* TransitionType */.AnimationsData[presetName].style);
  const first = structuredCloneResult[0];
  const transform = initialValues.transform;
  if (transform) {
    const tmp5 = addPxToTransform(transform);
    if (first.transform) {
      const _Map = Map;
      const map = new Map();
      let obj = map;
      const transform2 = first.transform;
      const tmp10 = transform2[Symbol.iterator]();
      while (tmp10 !== undefined) {
        let _Object = Object;
        let entries = Object.entries(tmp11);
        let tmp14 = entries;
        for (const item10042 of entries) {
          let tmp15 = callback2;
          let tmp16 = callback2(item10042, 2);
          let tmp17 = map;
          let result = obj.set(tmp16[0], tmp16[1]);
          continue;
        }
        continue;
      }
      for (const item10055 of tmp5) {
        let _Object2 = Object;
        let entries1 = Object.entries(item10055);
        let tmp21 = entries1;
        for (const item10062 of entries1) {
          let tmp22 = callback2;
          let tmp23 = callback2(item10062, 2);
          let tmp24 = map;
          let result1 = obj.set(tmp23[0], tmp23[1]);
          continue;
        }
        continue;
      }
      const _Array = Array;
      first.transform = Array.from(obj, (arg0) => {
        const tmp = outer1_5(arg0, 2);
        return outer1_3({}, tmp[0], tmp[1]);
      });
    } else {
      first.transform = tmp5;
    }
  }
  structuredCloneResult[0] = Object.assign({}, structuredCloneResult[0], callback(initialValues, closure_2));
  const tmp27 = generateNextCustomKeyframeName();
  obj = { name: tmp27, style: structuredCloneResult, duration: require(1638) /* TransitionType */.AnimationsData[presetName].duration };
  const tmp3 = callback(initialValues, closure_2);
  const result2 = require(1640) /* convertAnimationObjectToKeyframes */.convertAnimationObjectToKeyframes(obj);
  const obj3 = require(1640) /* convertAnimationObjectToKeyframes */;
  require(1669) /* findDescendantWithExitingAnimation */.insertWebAnimation(tmp27, result2);
  return tmp27;
};
export const TransitionGenerator = function TransitionGenerator(ENTRY_EXIT, easingY) {
  const tmp = generateNextCustomKeyframeName();
  if (require(1638) /* TransitionType */.TransitionType.LINEAR === ENTRY_EXIT) {
    let firstKeyframeObj = require(1671) /* LinearTransition */.LinearTransition(tmp, easingY);
    const obj7 = require(1671) /* LinearTransition */;
  } else if (require(1638) /* TransitionType */.TransitionType.SEQUENCED === ENTRY_EXIT) {
    firstKeyframeObj = require(1672) /* SequencedTransition */.SequencedTransition(tmp, easingY);
    const obj6 = require(1672) /* SequencedTransition */;
  } else if (require(1638) /* TransitionType */.TransitionType.FADING === ENTRY_EXIT) {
    firstKeyframeObj = require(1673) /* FadingTransition */.FadingTransition(tmp, easingY);
    const obj5 = require(1673) /* FadingTransition */;
  } else if (require(1638) /* TransitionType */.TransitionType.JUMPING === ENTRY_EXIT) {
    firstKeyframeObj = require(1674) /* JumpingTransition */.JumpingTransition(tmp, easingY);
    const obj4 = require(1674) /* JumpingTransition */;
  } else if (require(1638) /* TransitionType */.TransitionType.CURVED === ENTRY_EXIT) {
    const tmp6 = generateNextCustomKeyframeName();
    let obj = require(1675) /* showChildren */;
    const CurvedTransitionResult = obj.CurvedTransition(tmp, tmp6, easingY);
    firstKeyframeObj = CurvedTransitionResult.firstKeyframeObj;
    const result = require(1640) /* convertAnimationObjectToKeyframes */.convertAnimationObjectToKeyframes(CurvedTransitionResult.secondKeyframeObj);
    const obj2 = require(1640) /* convertAnimationObjectToKeyframes */;
    require(1669) /* findDescendantWithExitingAnimation */.insertWebAnimation(tmp6, result);
    const obj3 = require(1669) /* findDescendantWithExitingAnimation */;
    const tmp4 = tmp6;
  } else if (require(1638) /* TransitionType */.TransitionType.ENTRY_EXIT === ENTRY_EXIT) {
    firstKeyframeObj = require(1676) /* addTransformToKeepPosition */.EntryExitTransition(tmp, easingY);
    const obj11 = require(1676) /* addTransformToKeepPosition */;
  }
  const result1 = require(1640) /* convertAnimationObjectToKeyframes */.convertAnimationObjectToKeyframes(firstKeyframeObj);
  const obj8 = require(1640) /* convertAnimationObjectToKeyframes */;
  require(1669) /* findDescendantWithExitingAnimation */.insertWebAnimation(tmp, result1);
  obj = { transitionKeyframeName: tmp, dummyTransitionKeyframeName: tmp4 };
  return obj;
};
