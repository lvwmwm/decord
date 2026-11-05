// Module ID: 1658
// Function ID: 1659
// Name: ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE
// Dependencies: [1659]
// Exports: getAnimationEventMaskFromProps, getTransitionEventMaskFromProps

// Module 1658 (ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE)
import CSS_EVENT_MASK from "CSS_EVENT_MASK" /* 1659 */;

const f82616 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp2, tmp];
  return items;
};
const obj = { animationStart: "onCSSAnimationStart", animationEnd: "onCSSAnimationEnd", animationIteration: "onCSSAnimationIteration", animationCancel: "onCSSAnimationCancel" };
const obj2 = { transitionRun: "onCSSTransitionRun", transitionStart: "onCSSTransitionStart", transitionEnd: "onCSSTransitionEnd", transitionCancel: "onCSSTransitionCancel" };
const entries = Object.entries(obj);
let closure_2 = fromEntries(entries.map(f82616));
const fromEntries2 = Object.fromEntries;
const entries1 = Object.entries(obj2);
let closure_3 = fromEntries2(entries1.map(f82616));

export const ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE = obj;
export const TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE = obj2;
export function getAnimationEventMaskFromProps(arg0) {
  let num = 0;
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    num = num | CSS_EVENT_MASK.CSS_EVENT_MASK[closure_2[tmp2]];
    continue;
  }
  return num;
}
export function getTransitionEventMaskFromProps(arg0) {
  let num = 0;
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    num = num | CSS_EVENT_MASK.CSS_EVENT_MASK[closure_3[tmp2]];
    continue;
  }
  return num;
}
