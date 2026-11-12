// Module ID: 19277
// Function ID: 19278
// Name: useProfileCoachmarkPosition
// Dependencies: [32, 19, 575, 1493, 1627, 9745, 2]
// Exports: default

// Module 19277 (useProfileCoachmarkPosition)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import YouBannerDecorations from "YouBannerDecorations" /* 9745 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PX_64 = nativeDefault.space.PX_64;
const result = size.fileFinishedImporting("modules/user_profile/native/useProfileCoachmarkPosition.tsx");

export default function useProfileCoachmarkPosition(arg0, arg1) {
  let closure_129_2;
  let rect2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = dependencyMap;
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [rect2, closure_129_2] = tmp2;
  const items = [arg0, arg1, height];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            closure_1_2(rect);
          }
        });
      }
    }
  }, items);
  if (null == rect2) {
    return "bottom";
  } else {
    let str = "bottom";
    const obj = YouBannerDecorations;
    if (height - obj.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    return str;
  }
};
