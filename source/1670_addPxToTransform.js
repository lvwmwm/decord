// Module ID: 1670
// Function ID: 18546
// Name: addPxToTransform
// Dependencies: []
// Exports: TransitionGenerator, createAnimationWithInitialValues, createCustomKeyFrameAnimation

// Module 1670 (addPxToTransform)
function addPxToTransform(transform) {
  return transform.map((arg0) => {
    const obj = {};
    const entries = Object.entries(arg0);
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
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
          // continue
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
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = 0;

export const createCustomKeyFrameAnimation = function createCustomKeyFrameAnimation(definitions) {
  const values = Object.values(definitions);
  for (const item10009 of values) {
    let tmp2 = item10009;
    if (item10009.transform) {
      let tmp3 = item10009;
      let tmp4 = closure_7;
      tmp2.transform = closure_7(tmp2.transform);
    }
  }
  const obj = { style: definitions, name: generateNextCustomKeyframeName() };
  const keys = Object.keys(definitions);
  for (let num = 1; num < keys.length; num = num + 1) {
    let tmp5 = definitions[keys[num]];
    if (tmp5.easing) {
      definitions[keys[num - 1]].easing = tmp5.easing;
      delete r2.easing;
    }
  }
  const result = arg1(dependencyMap[3]).convertAnimationObjectToKeyframes(obj);
  const obj2 = arg1(dependencyMap[3]);
  arg1(dependencyMap[4]).insertWebAnimation(obj.name, result);
  return obj.name;
};
export const createAnimationWithInitialValues = function createAnimationWithInitialValues(presetName, initialValues) {
  const structuredCloneResult = structuredClone(initialValues(dependencyMap[5]).AnimationsData[presetName].style);
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
          let tmp15 = closure_5;
          let tmp16 = closure_5(item10042, 2);
          let tmp17 = map;
          let result = obj.set(tmp16[0], tmp16[1]);
        }
        // continue
      }
      for (const item10055 of tmp5) {
        let _Object2 = Object;
        let entries1 = Object.entries(item10055);
        let tmp21 = entries1;
        for (const item10062 of entries1) {
          let tmp22 = closure_5;
          let tmp23 = closure_5(item10062, 2);
          let tmp24 = map;
          let result1 = obj.set(tmp23[0], tmp23[1]);
        }
      }
      const _Array = Array;
      first.transform = Array.from(obj, (arg0) => {
        const tmp = callback2(arg0, 2);
        return callback({}, tmp[0], tmp[1]);
      });
    } else {
      first.transform = tmp5;
    }
  }
  structuredCloneResult[0] = Object.assign({}, structuredCloneResult[0], callback(initialValues, closure_2));
  const tmp27 = generateNextCustomKeyframeName();
  obj = { name: tmp27, style: structuredCloneResult, duration: initialValues(dependencyMap[5]).AnimationsData[presetName].duration };
  const tmp3 = callback(initialValues, closure_2);
  const result2 = initialValues(dependencyMap[3]).convertAnimationObjectToKeyframes(obj);
  const obj3 = initialValues(dependencyMap[3]);
  initialValues(dependencyMap[4]).insertWebAnimation(tmp27, result2);
  return tmp27;
};
export const TransitionGenerator = function TransitionGenerator(ENTRY_EXIT, easingY) {
  const tmp = generateNextCustomKeyframeName();
  if (easingY(dependencyMap[5]).TransitionType.LINEAR === ENTRY_EXIT) {
    let firstKeyframeObj = easingY(dependencyMap[6]).LinearTransition(tmp, easingY);
    const obj7 = easingY(dependencyMap[6]);
  } else if (easingY(dependencyMap[5]).TransitionType.SEQUENCED === ENTRY_EXIT) {
    firstKeyframeObj = easingY(dependencyMap[7]).SequencedTransition(tmp, easingY);
    const obj6 = easingY(dependencyMap[7]);
  } else if (easingY(dependencyMap[5]).TransitionType.FADING === ENTRY_EXIT) {
    firstKeyframeObj = easingY(dependencyMap[8]).FadingTransition(tmp, easingY);
    const obj5 = easingY(dependencyMap[8]);
  } else if (easingY(dependencyMap[5]).TransitionType.JUMPING === ENTRY_EXIT) {
    firstKeyframeObj = easingY(dependencyMap[9]).JumpingTransition(tmp, easingY);
    const obj4 = easingY(dependencyMap[9]);
  } else if (easingY(dependencyMap[5]).TransitionType.CURVED === ENTRY_EXIT) {
    const tmp6 = generateNextCustomKeyframeName();
    let obj = easingY(dependencyMap[10]);
    const CurvedTransitionResult = obj.CurvedTransition(tmp, tmp6, easingY);
    firstKeyframeObj = CurvedTransitionResult.firstKeyframeObj;
    const result = easingY(dependencyMap[3]).convertAnimationObjectToKeyframes(CurvedTransitionResult.secondKeyframeObj);
    const obj2 = easingY(dependencyMap[3]);
    easingY(dependencyMap[4]).insertWebAnimation(tmp6, result);
    const obj3 = easingY(dependencyMap[4]);
    const tmp4 = tmp6;
  } else if (easingY(dependencyMap[5]).TransitionType.ENTRY_EXIT === ENTRY_EXIT) {
    firstKeyframeObj = easingY(dependencyMap[11]).EntryExitTransition(tmp, easingY);
    const obj11 = easingY(dependencyMap[11]);
  }
  const result1 = easingY(dependencyMap[3]).convertAnimationObjectToKeyframes(firstKeyframeObj);
  const obj8 = easingY(dependencyMap[3]);
  easingY(dependencyMap[4]).insertWebAnimation(tmp, result1);
  obj = { transitionKeyframeName: tmp, dummyTransitionKeyframeName: tmp4 };
  return obj;
};
