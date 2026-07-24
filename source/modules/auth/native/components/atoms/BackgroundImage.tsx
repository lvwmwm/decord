// Module ID: 9258
// Function ID: 72348
// Name: BackgroundImage
// Dependencies: [31, 27, 33, 4066, 3976, 9259, 9260, 2]
// Exports: default

// Module 9258 (BackgroundImage)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_4, View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  const tmp = flag(4066)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill };
  obj = {};
  const merged = Object.assign(React.useMemo(() => {
    let obj = {};
    const items = [outer1_6.absoluteFill, ];
    if (flag) {
      obj = { width: "100%", height: "100%" };
    } else {
      obj = { width: "100%" };
    }
    items[1] = obj;
    obj.style = items;
    if (null != backgroundImageSource) {
      let tmp4Result = backgroundImageSource;
    } else {
      if (obj3.isThemeDark(_undefined)) {
        tmp4Result = tmp4(tmp5[5]);
      } else {
        tmp4Result = tmp4(tmp5[6]);
      }
      obj3 = backgroundImageSource(_undefined[4]);
    }
    obj.source = tmp4Result;
    return obj;
  }, items));
  obj.children = <closure_4 />;
  return <closure_5 />;
};
