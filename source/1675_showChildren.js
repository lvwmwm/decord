// Module ID: 1675
// Function ID: 18567
// Name: showChildren
// Dependencies: []

// Module 1675 (showChildren)
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
  const dummyAnimationConfig = function prepareDummy(cloneNode, duration, easingY, animationName) {
    const dummyAnimationConfig = { animationName, animationType: callback(closure_1[1]).LayoutAnimationType.LAYOUT, duration: duration.duration, delay: duration.delay, easing: callback(closure_1[0]).getEasingByName(easingY.easingY), callback: null, reversed: false };
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
  }(_componentDOMRef, animationName, easingY, dummyTransitionKeyframeName);
  const dummy = dummyAnimationConfig.dummy;
  function prepareParent(style, dummy, animationName, easingX) {
    animationName.easing = style(dummy[0]).getEasingByName(easingX.easingX);
    const map = new Map();
    map(style, map, false);
    const backgroundColor = style.style.backgroundColor;
    style.style.backgroundColor = "transparent";
    function onFinalize(self) {
      if (self.contains(arg1)) {
        self.removeChild(arg1);
      }
      map(self, map, true);
      self.style.backgroundColor = backgroundColor;
    }
    function animationCancelCallback() {
      onFinalize();
      const removed = arg0.removeEventListener("animationcancel", animationCancelCallback);
    }
    function animationEndCallback() {
      onFinalize();
      const removed = arg0.removeEventListener("animationend", animationEndCallback);
    }
    const listener = style.addEventListener("animationend", animationEndCallback);
    const listener1 = style.addEventListener("animationcancel", animationCancelCallback);
    style.appendChild(dummy);
  }(_componentDOMRef, dummy, animationName, easingY);
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
