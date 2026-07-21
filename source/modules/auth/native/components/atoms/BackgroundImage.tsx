// Module ID: 9214
// Function ID: 72085
// Name: BackgroundImage
// Dependencies: []
// Exports: default

// Module 9214 (BackgroundImage)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  const arg1 = backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  const tmp = importDefault(dependencyMap[3])();
  dependencyMap = tmp;
  const items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill };
  obj = {};
  const merged = Object.assign(React.useMemo(() => {
    let obj = {};
    const items = [absoluteFill.absoluteFill, ];
    if (flag) {
      obj = {};
    } else {
      obj = { width: "100%" };
    }
    items[1] = obj;
    obj.style = items;
    if (null != backgroundImageSource) {
      let tmp4Result = backgroundImageSource;
    } else {
      if (obj3.isThemeDark(backgroundImageSource)) {
        tmp4Result = tmp4(tmp5[5]);
      } else {
        tmp4Result = tmp4(tmp5[6]);
      }
      const obj3 = backgroundImageSource(backgroundImageSource[4]);
    }
    obj.source = tmp4Result;
    return obj;
  }, items));
  obj.children = <closure_4 {...obj} />;
  return <closure_5 {...obj} />;
};
