// Module ID: 4656
// Function ID: 40334
// Name: PressableBase
// Dependencies: []

// Module 4656 (PressableBase)
function PressableBase(androidRippleConfig) {
  let children;
  let innerRef;
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const arg1 = androidRippleConfig;
  const style = androidRippleConfig.style;
  const importDefault = style;
  const type = androidRippleConfig.type;
  const dependencyMap = type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  const Pressable = underlayColor;
  let obj = { "Bool(true)": "ThreadLockIcon", "Bool(true)": "png", "Bool(true)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null };
  ({ children, innerRef } = androidRippleConfig);
  Object.setPrototypeOf(null);
  const merged = Object.assign(androidRippleConfig, obj);
  const backgroundColor = callback().pressedHighlight.backgroundColor;
  const IOS_POINTER_STYLE = backgroundColor;
  const items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = importAllResult.useMemo(() => androidRippleConfig(type[7]).isAndroid() ? style : (pressed) => {
    const items = [closure_1, , ];
    if (!pressed.pressed) {
      items[1] = null;
      items[2] = closure_5;
      return items;
    } else {
      if ("highlight" !== closure_2) {
        let obj = {};
        let num = 0.2;
        if (null != closure_3) {
          num = closure_3;
        }
        obj.opacity = num;
      }
      obj = { backgroundColor: null != closure_4 ? closure_4 : closure_5 };
    }
  }, items);
  obj = {
    android_ripple: importAllResult.useMemo(() => {
      let obj = androidRippleConfig(type[7]);
      if (obj.isAndroid()) {
        const cornerRadius = null != androidRippleConfig ? androidRippleConfig : {}.cornerRadius;
        let tmp3 = cornerRadius;
        if (null == cornerRadius) {
          const styleProp = style(type[8]).getStyleProp(style, "borderRadius");
          tmp3 = cornerRadius;
          if (null != styleProp) {
            tmp3 = styleProp;
          }
          const obj2 = style(type[8]);
        }
        obj = {};
        const merged = Object.assign(androidRippleConfig);
        obj["cornerRadius"] = tmp3;
        return callback(obj);
      }
    }, items1),
    style: memo,
    ref: innerRef
  };
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return <Pressable {...obj} />;
}
const importAllResult = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const IOS_POINTER_STYLE = arg1(dependencyMap[2]).IOS_POINTER_STYLE;
const getThemedRippleConfig = arg1(dependencyMap[3]).getThemedRippleConfig;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.pressedHighlight = obj;
let closure_8 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const forwardRefResult = importAllResult.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  let obj = Object.create(null);
  obj.activeOpacity = 0;
  obj = { innerRef, type: "opacity", activeOpacity: num };
  const merged = Object.assign(Object.assign(activeOpacity, obj));
  return <PressableBase {...obj} />;
});
const forwardRefResult1 = importAllResult.forwardRef((underlayColor, innerRef) => {
  let obj = Object.create(null);
  obj.underlayColor = 0;
  obj = { innerRef, type: "highlight", underlayColor: underlayColor.underlayColor };
  const merged = Object.assign(Object.assign(underlayColor, obj));
  return <PressableBase {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRefResult1;
