// Module ID: 408
// Function ID: 5806
// Name: useAndroidRippleForView
// Dependencies: []
// Exports: default

// Module 408 (useAndroidRippleForView)
importAll(dependencyMap[0]);
const useMemo = arg1(dependencyMap[0]).useMemo;

export default function useAndroidRippleForView(arg0, arg1) {
  let foreground;
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  const color = obj.color;
  const importDefault = color;
  const borderless = obj.borderless;
  const dependencyMap = borderless;
  const radius = obj.radius;
  const useMemo = radius;
  ({ cornerRadius: closure_4, foreground } = obj);
  const items = [borderless, color, foreground, radius, arg1];
  return useMemo(() => {
    if (null == color) {
      if (null == borderless) {
        if (null == radius) {
          return null;
        }
      }
    }
    const tmp3 = color(borderless[1])(color);
    let tmp5 = null == tmp3;
    if (!tmp5) {
      tmp5 = "number" === typeof tmp3;
    }
    color(borderless[2])(tmp5, "Unexpected color given for Ripple color");
    let obj = { type: "RippleAndroid", color: tmp3, borderless: true === borderless, rippleRadius: radius, rippleCornerRadius: closure_4 };
    obj = {};
    if (true === foreground) {
      obj = {};
      obj.nativeForegroundAndroid = obj;
      let obj1 = obj;
    } else {
      obj1 = { nativeBackgroundAndroid: obj };
    }
    obj.viewProps = obj1;
    obj.onPressIn = function onPressIn(nativeEvent) {
      const current = ref.current;
      if (null != current) {
        const Commands2 = ref(closure_2[3]).Commands;
        const locationX = nativeEvent.nativeEvent.locationX;
        let num = 0;
        if (null != locationX) {
          num = locationX;
        }
        const locationY = nativeEvent.nativeEvent.locationY;
        let num2 = 0;
        if (null != locationY) {
          num2 = locationY;
        }
        Commands2.hotspotUpdate(current, num, num2);
        const Commands = ref(closure_2[3]).Commands;
        Commands.setPressed(current, true);
      }
    };
    obj.onPressMove = function onPressMove(nativeEvent) {
      const current = ref.current;
      if (null != current) {
        const Commands = ref(closure_2[3]).Commands;
        const locationX = nativeEvent.nativeEvent.locationX;
        let num2 = 0;
        if (null != locationX) {
          num2 = locationX;
        }
        const locationY = nativeEvent.nativeEvent.locationY;
        let num3 = 0;
        if (null != locationY) {
          num3 = locationY;
        }
        Commands.hotspotUpdate(current, num2, num3);
      }
    };
    obj.onPressOut = function onPressOut(arg0) {
      const current = ref.current;
      if (null != current) {
        const Commands = ref(closure_2[3]).Commands;
        Commands.setPressed(current, false);
      }
    };
    return obj;
  }, items);
};
