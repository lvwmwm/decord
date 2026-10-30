// Module ID: 7136
// Function ID: 7137
// Name: BackgroundImage
// Dependencies: [19, 17, 21, 5248, 5016, 7137, 7138, 5712, 2]
// Exports: default

// Module 7136 (BackgroundImage)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5016 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  let closure_2;
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = flag(5248)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  const memo = react.useMemo(() => {
    let tmp;
    const items = [hasOwnProperty.absoluteFill, ];
    const obj = { style: items, source: tmp };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    tmp = backgroundImageSource;
    if (null == backgroundImageSource) {
      let tmp5Result;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_2)) {
        tmp5Result = tmp5(7137);
      } else {
        tmp5Result = tmp5(7138);
      }
      tmp = tmp5Result;
    }
    return obj;
  }, items);
  let obj2 = {};
  flag(5712);
  const merged = Object.assign(memo);
  return <closure_4 style={closure_5.absoluteFill}>{null}</closure_4>;
};
