// Module ID: 408
// Function ID: 5806
// Name: useAndroidRippleForView
// Dependencies: [31, 38, 44, 115]
// Exports: default

// Module 408 (useAndroidRippleForView)
import "result";
import { useMemo } from "result";

const require = arg1;

export default function useAndroidRippleForView(arg0, arg1) {
  let closure_4;
  let foreground;
  let obj = arg0;
  let closure_0 = arg1;
  if (null == arg0) {
    obj = {};
  }
  const color = obj.color;
  const borderless = obj.borderless;
  const radius = obj.radius;
  ({ cornerRadius: closure_4, foreground } = obj);
  const items = [borderless, color, foreground, radius, arg1];
  return radius(() => {
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
      const current = outer1_0.current;
      if (null != current) {
        const Commands2 = callback(borderless[3]).Commands;
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
        const Commands = callback(borderless[3]).Commands;
        Commands.setPressed(current, true);
      }
    };
    obj.onPressMove = function onPressMove(nativeEvent) {
      const current = outer1_0.current;
      if (null != current) {
        const Commands = callback(borderless[3]).Commands;
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
      const current = outer1_0.current;
      if (null != current) {
        const Commands = callback(borderless[3]).Commands;
        Commands.setPressed(current, false);
      }
    };
    return obj;
  }, items);
};
