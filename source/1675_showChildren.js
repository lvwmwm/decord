// Module ID: 1675
// Function ID: 18568
// Name: showChildren
// Dependencies: [1641, 1607]

// Module 1675 (showChildren)
const require = arg1;
const dependencyMap = arg6;
function showChildren(children, get) {
  for (let num = 0; num < children.children.length; num = num + 1) {
    let tmp = children.children[num];
    if (arg2) {
      tmp.style.display = get.get(tmp);
    } else {
      let result = get.set(tmp, tmp.style.display);
      tmp.style.display = "none";
    }
  }
}
arg5.prepareCurvedTransition = function prepareCurvedTransition(_componentDOMRef, animationName, easingY, dummyTransitionKeyframeName) {
  let dummyAnimationConfig = (function prepareDummy(cloneNode, duration, easingY, animationName) {
    const dummyAnimationConfig = { animationName, animationType: outer1_0(outer1_1[1]).LayoutAnimationType.LAYOUT, duration: duration.duration, delay: duration.delay, easing: outer1_0(outer1_1[0]).getEasingByName(easingY.easingY), callback: null, reversed: false };
    const dummy = cloneNode.cloneNode(true);
    dummy.isDummy = true;
    dummy.style.animationName = "";
    dummy.style.position = "absolute";
    dummy.style.top = "0px";
    dummy.style.left = "0px";
    dummy.style.margin = "0px";
    dummy.style.width = "100%";
    dummy.style.height = "100%";
    return { dummy, dummyAnimationConfig };
  })(_componentDOMRef, animationName, easingY, dummyTransitionKeyframeName);
  let dummy = dummyAnimationConfig.dummy;
  (function prepareParent(style, dummy, animationName, easingX) {
    let closure_0 = style;
    let closure_1 = dummy;
    animationName.easing = outer1_0(outer1_1[0]).getEasingByName(easingX.easingX);
    const map = new Map();
    outer1_2(style, map, false);
    const backgroundColor = style.style.backgroundColor;
    style.style.backgroundColor = "transparent";
    function onFinalize() {
      if (style.contains(closure_1)) {
        style.removeChild(closure_1);
      }
      outer2_2(style, map, true);
      style.style.backgroundColor = backgroundColor;
    }
    function animationCancelCallback() {
      onFinalize();
      const removed = style.removeEventListener("animationcancel", animationCancelCallback);
    }
    function animationEndCallback() {
      onFinalize();
      const removed = style.removeEventListener("animationend", animationEndCallback);
    }
    const listener = style.addEventListener("animationend", animationEndCallback);
    const listener1 = style.addEventListener("animationcancel", animationCancelCallback);
    style.appendChild(dummy);
  })(_componentDOMRef, dummy, animationName, easingY);
  return { dummy, dummyAnimationConfig: dummyAnimationConfig.dummyAnimationConfig };
};
arg5.CurvedTransition = function CurvedTransition(name, name2, translateX) {
  let obj = {};
  obj = { name };
  obj = {};
  const obj1 = {};
  const items = [{ translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj1.transform = items;
  obj[0] = obj1;
  obj.style = obj;
  obj.duration = 300;
  obj.firstKeyframeObj = obj;
  const obj3 = { name: name2 };
  const obj4 = {};
  const obj5 = {};
  const obj2 = { translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY };
  const items1 = [{ translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj5.transform = items1;
  obj4[0] = obj5;
  obj3.style = obj4;
  obj3.duration = 300;
  obj.secondKeyframeObj = obj3;
  return obj;
};
