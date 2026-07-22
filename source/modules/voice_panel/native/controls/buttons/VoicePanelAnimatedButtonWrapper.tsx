// Module ID: 15745
// Function ID: 120428
// Name: AnimatedButtonWrapper
// Dependencies: []
// Exports: default

// Module 15745 (AnimatedButtonWrapper)
let closure_3 = importAll(dependencyMap[0]);
const MODE_CHANGE_PHYSICS = arg1(dependencyMap[2]).MODE_CHANGE_PHYSICS;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(false)": null, "Bool(false)": null, borderRadius: importDefault(dependencyMap[5]).modules.button.BORDER_RADIUS_LG };
obj.pressableWrapper = obj;
let closure_6 = obj.createStyles(obj);
let closure_7 = importDefault(dependencyMap[6]).createAnimatedComponent(arg1(dependencyMap[1]).Pressable);
let closure_8 = { code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}" };
let closure_9 = { code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}" };
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

export default function AnimatedButtonWrapper(onPressOut) {
  let accessibilityLabel;
  let children;
  let disabled;
  let onLongPress;
  let onPress;
  let onPressIn;
  let props;
  ({ props, onPressIn } = onPressOut);
  const arg1 = onPressIn;
  onPressOut = onPressOut.onPressOut;
  const importDefault = onPressOut;
  const style = onPressOut.style;
  const dependencyMap = style;
  const pressed = onPressOut.pressed;
  let React;
  let MODE_CHANGE_PHYSICS;
  let jsx;
  let callback;
  let closure_7;
  let closure_8;
  ({ onPress, onLongPress, accessibilityLabel, children, disabled } = onPressOut);
  let obj = arg1(dependencyMap[6]);
  let sharedValue = obj.useSharedValue(false);
  if (null != pressed) {
    sharedValue = pressed;
  }
  React = sharedValue;
  const tmp2 = importDefault(dependencyMap[7])();
  MODE_CHANGE_PHYSICS = tmp2;
  const tmp3 = callback();
  jsx = tmp3;
  const items = [sharedValue, tmp2, onPressIn, onPressOut];
  const memo = React.useMemo(() => ({
    onPressIn: null != onPressIn ? onPressIn : () => {
      closure_4.lock();
      const result = store.set(true);
    },
    onPressOut: null != onPressOut ? onPressOut : () => {
      closure_4.unlock();
      const result = store.set(false);
    }
  }), items);
  const width = props.width;
  callback = width;
  const height = props.height;
  closure_7 = height;
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(0);
  closure_8 = sharedValue1;
  const items1 = [sharedValue1];
  const items2 = [sharedValue1];
  const memo1 = React.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(windowWidth) {
        const result = store.set(windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2);
        let obj = {};
        obj = { originX: windowWidth.targetOriginX + store.get(), opacity: 0, transform: items };
        const items = [{ scale: 0.5 }];
        obj.initialValues = obj;
        obj = { originX: callback(closure_2[9]).withSpring(windowWidth.targetOriginX, closure_4) };
        const obj4 = callback(closure_2[9]);
        obj.opacity = callback(closure_2[10]).withTiming(1, { duration: 100 });
        const obj1 = {};
        const obj5 = callback(closure_2[10]);
        obj1.scale = callback(closure_2[9]).withSpring(1, closure_4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = { offsetFromCenter: sharedValue1, withSpring: onPressIn(style[9]).withSpring, MODE_CHANGE_PHYSICS: onPressIn, withTiming: onPressIn(style[10]).withTiming };
      fn.__closure = obj;
      fn.__workletHash = 16238937246135;
      fn.__initData = sharedValue1;
      return fn;
    }
  }, items1);
  const items3 = [style, tmp3.pressableWrapper, width, height];
  const memo2 = React.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(currentOriginX) {
        let obj = { initialValues: obj };
        obj = { originX: currentOriginX.currentOriginX, opacity: 1, transform: items };
        const items = [{ scale: 1 }];
        obj = { originX: callback(closure_2[9]).withSpring(currentOriginX.currentOriginX + closure_8.get(), closure_4) };
        const obj4 = callback(closure_2[9]);
        obj.opacity = callback(closure_2[10]).withTiming(0, { duration: 100 });
        const obj1 = {};
        const obj5 = callback(closure_2[10]);
        obj1.scale = callback(closure_2[9]).withSpring(0.5, closure_4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = { withSpring: onPressIn(style[9]).withSpring, offsetFromCenter: sharedValue1, MODE_CHANGE_PHYSICS: style, withTiming: onPressIn(style[10]).withTiming };
      fn.__closure = obj;
      fn.__workletHash = 17504057367727;
      fn.__initData = closure_9;
      return fn;
    }
  }, items2);
  obj = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = React.useMemo(() => {
    const items = [tmp3.pressableWrapper, { width, height }, style];
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj["accessibilityRole"] = "button";
  obj["accessibilityLabel"] = accessibilityLabel;
  obj["style"] = memo3;
  obj["children"] = children;
  return <closure_7 {...obj} />;
};
