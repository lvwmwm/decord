// Module ID: 6394
// Function ID: 6395
// Name: BackgroundImage
// Dependencies: [19, 17, 21, 4767, 4685, 6395, 6396, 2]
// Exports: default

// Module 6394 (BackgroundImage)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  let closure_2;
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = flag(4767)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj2 = {};
  const merged = Object.assign(react.useMemo(() => {
    let tmp;
    const items = [metroRequire.absoluteFill, ];
    const obj = { style: items, source: tmp };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    tmp = backgroundImageSource;
    if (null == backgroundImageSource) {
      let tmp5Result;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_2)) {
        tmp5Result = tmp5(6395);
      } else {
        tmp5Result = tmp5(6396);
      }
      tmp = tmp5Result;
    }
    return obj;
  }, items));
  return <closure_5 style={closure_6.absoluteFill}>{null}</closure_5>;
};
