// Module ID: 7142
// Function ID: 7143
// Name: BackgroundImage
// Dependencies: [19, 17, 21, 5253, 5021, 7143, 7144, 5717, 2]
// Exports: default

// Module 7142 (BackgroundImage)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5021 */;
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
  let tmp = flag(5253)();
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
        tmp5Result = tmp5(7143);
      } else {
        tmp5Result = tmp5(7144);
      }
      tmp = tmp5Result;
    }
    return obj;
  }, items);
  let obj2 = {};
  flag(5717);
  const merged = Object.assign(memo);
  return <closure_4 style={closure_5.absoluteFill}>{null}</closure_4>;
};
