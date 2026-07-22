// Module ID: 7866
// Function ID: 62664
// Name: CutoutableAvatarDecoration
// Dependencies: [37093376, 516096000, 513802240, 516161536, 516227072, 305135616, 131072, 964034560, 520093696, 2365587456, 603979778]
// Exports: default

// Module 7866 (CutoutableAvatarDecoration)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  let avatarDecorationUrl;
  let sizeStyle;
  let source;
  let style;
  size = size.size;
  const arg1 = size;
  const avatarDecoration = size.avatarDecoration;
  const importDefault = avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const dependencyMap = decorationStyle;
  const animate = size.animate;
  const React = animate;
  let cutout = size.cutout;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const View = stateFromStores;
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = React.useMemo(() => {
    let tmp = animate;
    if (animate) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      tmp = null != avatarDecoration;
    }
    let obj = size(decorationStyle[5]);
    obj = { avatarDecoration, canAnimate: tmp, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    obj = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: obj1, style: items };
    const items = [{ width: size, height: size }, decorationStyle];
    obj.shouldAnimate = tmp;
    const obj3 = {};
    let str = "";
    if (null != avatarDecorationURL) {
      str = avatarDecorationURL;
    }
    obj3.uri = str;
    obj.source = obj3;
    return obj;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp4 = null;
  if (null != avatarDecoration) {
    tmp4 = null;
    if (null != avatarDecorationUrl) {
      let obj1 = arg1(dependencyMap[6]);
      if (!obj1.isAndroid()) {
        if (null != cutout) {
          obj = { style, cutouts: cutout.nativeCutouts };
          obj = { source, style: sizeStyle };
          obj.children = jsx(importDefault(dependencyMap[9]), obj);
          let tmp10 = jsx(importDefault(dependencyMap[7]), obj);
          const tmp14 = importDefault(dependencyMap[7]);
        } else {
          obj1 = { source, style };
          tmp10 = jsx(importDefault(dependencyMap[9]), obj1);
        }
      }
      if (null != cutout) {
        const obj2 = { style, cutouts: cutout.nativeCutouts };
        const obj3 = { url: avatarDecorationUrl, style: sizeStyle };
        cutout = jsx(importDefault(dependencyMap[8]), obj3);
        obj2.children = cutout;
        let tmp19 = jsx(importDefault(dependencyMap[7]), obj2);
        const tmp23 = importDefault(dependencyMap[7]);
      } else {
        const obj4 = { style, pointerEvents: "none" };
        const obj5 = { url: avatarDecorationUrl, style: sizeStyle };
        obj4.children = jsx(importDefault(dependencyMap[8]), obj5);
        tmp19 = <View {...obj4} />;
      }
    }
  }
  return tmp4;
};
