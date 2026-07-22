// Module ID: 8623
// Function ID: 68329
// Name: GameProfileHeader
// Dependencies: []
// Exports: default

// Module 8623 (GameProfileHeader)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.artHero = { bottom: -importDefault(dependencyMap[5]).space.PX_80 };
obj.artHeroImage = { GifAutoPlay: "89c1f821400ffcc75deeeab8c6315a88", lavender: "pt-BR.messages.89c1f821400ffcc75deeeab8c6315a88.compiled.messages", useShouldShowWishlistInDMGifting: "jsona" };
obj.artHeroGradient = {};
const obj2 = { "Null": "png", "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", "Null": 24, "Null": 24, "Null": null, "Null": "e8a96141e48bf46350215d4dadeaaebc", "Null": "ExperimentalGameControllerLinkIcon", paddingTop: importDefault(dependencyMap[5]).space.PX_32, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_12 };
obj.headerContent = obj2;
const obj1 = { bottom: -importDefault(dependencyMap[5]).space.PX_80 };
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_LOW);
obj.shadowContainer = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const obj4 = { borderColor: "concat", justifyContent: "isArray", alignItems: "isArray", overflow: "isArray", style: "Text", borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.coverContainer = obj4;
const obj3 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.iconContainer = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.image = {};
obj.titleContainer = { Text: null, applicationId: null, message: null };
const obj5 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.textShadow = { textShadowColor: importDefault(dependencyMap[5]).colors.BLACK, textShadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" }, textShadowRadius: 1 };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const obj6 = { textShadowColor: importDefault(dependencyMap[5]).colors.BLACK, textShadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" }, textShadowRadius: 1 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  let onHeightMeasured;
  let scrollY;
  game = game.game;
  const arg1 = game;
  ({ scrollY, onHeightMeasured } = game);
  const importDefault = onHeightMeasured;
  let callback;
  const tmp = callback3();
  const first = callback(React.useState(() => Math.random()), 1)[0];
  const dependencyMap = first;
  let obj = arg1(dependencyMap[6]);
  let sharedValue = obj.useSharedValue(0);
  if (null != scrollY) {
    sharedValue = scrollY;
  }
  callback = sharedValue;
  let obj1 = arg1(dependencyMap[6]);
  const fn = function x() {
    return { top: -Math.max(0, -sharedValue.get()) };
  };
  obj = { effectiveScrollY: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 1177397229282;
  fn.__initData = closure_10;
  let name;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  if (null != game) {
    name = game.name;
  }
  let joined;
  if (null != game) {
    const genres = game.genres;
    const mapped = genres.map(arg1(dependencyMap[7]).getGenreText);
    joined = mapped.join(", ");
  }
  let l30Rank;
  if (null != game) {
    l30Rank = game.l30Rank;
  }
  const items = [game, first];
  const memo = React.useMemo(() => {
    let bannerURL;
    if (null != game) {
      bannerURL = game.getBannerURL(1024);
    }
    if (null == bannerURL) {
      let screenshotUrls;
      if (null != game) {
        screenshotUrls = game.screenshotUrls;
      }
      let tmp6 = null;
      if (null != screenshotUrls) {
        tmp6 = null;
        if (game.screenshotUrls.length > 0) {
          const _Math = Math;
          tmp6 = game.screenshotUrls[Math.floor(Math, closure_2 * closure_0.screenshotUrls.length)];
        }
      }
      bannerURL = tmp6;
    }
    return bannerURL;
  }, items);
  const items1 = [game];
  const memo1 = React.useMemo(() => {
    let coverURL;
    if (null != game) {
      coverURL = game.getCoverURL(114);
    }
    return coverURL;
  }, items1);
  const items2 = [game];
  const memo2 = React.useMemo(() => {
    let iconURL;
    if (null != game) {
      iconURL = game.getIconURL(114);
    }
    return iconURL;
  }, items2);
  const items3 = [onHeightMeasured];
  obj = {
    style: tmp.container,
    onLayout: React.useCallback((nativeEvent) => {
      if (null != onHeightMeasured) {
        onHeightMeasured(nativeEvent.nativeEvent.layout.height);
      }
    }, items3)
  };
  obj1 = { style: items4 };
  const items4 = [tmp.artHero, animatedStyle];
  let tmp15 = null != memo;
  if (tmp15) {
    const obj2 = {};
    const obj3 = { uri: memo };
    obj2.source = obj3;
    obj2.style = tmp.artHeroImage;
    tmp15 = callback2(closure_6, obj2);
  }
  const items5 = [tmp15, ];
  const items6 = [843081088, tmp.container.backgroundColor];
  items5[1] = callback2(importDefault(dependencyMap[8]), { colors: items6, style: tmp.artHeroGradient });
  obj1.children = items5;
  const items7 = [closure_8(importDefault(dependencyMap[6]).View, obj1), ];
  const obj5 = { style: tmp.headerContent };
  const obj6 = { style: tmp.shadowContainer };
  if (null != memo1) {
    const obj7 = { style: tmp.coverContainer };
    const obj8 = {};
    const obj9 = { uri: memo1 };
    obj8.source = obj9;
    obj8.style = tmp.image;
    obj7.children = callback2(closure_6, obj8);
    let obj10 = obj7;
  } else {
    obj10 = { style: tmp.iconContainer };
    let tmp21 = null != memo2;
    if (tmp21) {
      const obj11 = {};
      const obj12 = { uri: memo2 };
      obj11.source = obj12;
      obj11.style = tmp.image;
      tmp21 = callback2(closure_6, obj11);
    }
    obj10.children = tmp21;
  }
  obj6.children = callback2(closure_5, obj10);
  const items8 = [callback2(closure_5, obj6), ];
  const obj13 = { style: tmp.titleContainer };
  let tmp28 = null != l30Rank;
  if (tmp28) {
    const obj14 = { rank: l30Rank };
    tmp28 = callback2(importDefault(dependencyMap[9]), obj14);
  }
  const items9 = [tmp28, , ];
  const obj15 = { style: tmp.textShadow, children: name };
  items9[1] = callback2(arg1(dependencyMap[10]).Text, obj15);
  let tmp32 = null;
  if (null != joined) {
    tmp32 = null;
    if ("" !== joined) {
      const obj16 = { 803799044: "position", 1269170180: "scalar", 711589892: 13, style: tmp.textShadow, children: joined };
      tmp32 = callback2(arg1(dependencyMap[10]).Text, obj16);
    }
  }
  items9[2] = tmp32;
  obj13.children = items9;
  items8[1] = closure_8(closure_5, obj13);
  obj5.children = items8;
  items7[1] = closure_8(closure_5, obj5);
  obj.children = items7;
  return closure_8(closure_5, obj);
};
