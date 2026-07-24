// Module ID: 8672
// Function ID: 68591
// Name: GameProfileHeader
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 8673, 4554, 8674, 4126, 2]
// Exports: default

// Module 8672 (GameProfileHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { width: "100%", position: "absolute", top: 0, bottom: -require("_createForOfIteratorHelperLoose").space.PX_80, left: 0, right: 0 };
_createForOfIteratorHelperLoose.artHero = obj1;
_createForOfIteratorHelperLoose.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
_createForOfIteratorHelperLoose.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_32, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: 520, alignSelf: "center", width: "100%" };
_createForOfIteratorHelperLoose.headerContent = obj2;
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.shadowContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const obj4 = { width: 85, height: 114, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
_createForOfIteratorHelperLoose.coverContainer = obj4;
let obj5 = { width: 85, height: 85, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
_createForOfIteratorHelperLoose.iconContainer = obj5;
_createForOfIteratorHelperLoose.image = { width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.textShadow = { textShadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
let obj6 = { textShadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  let onHeightMeasured;
  let scrollY;
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  let sharedValue;
  const tmp = _createForOfIteratorHelperLoose();
  const first = sharedValue(React.useState(() => Math.random()), 1)[0];
  let obj = game(first[6]);
  sharedValue = obj.useSharedValue(0);
  if (null != scrollY) {
    sharedValue = scrollY;
  }
  let obj1 = game(first[6]);
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
    const mapped = genres.map(game(first[7]).getGenreText);
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
          tmp6 = game.screenshotUrls[Math.floor(Math, first * game.screenshotUrls.length)];
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
  items4 = [tmp.artHero, animatedStyle];
  let tmp15 = null != memo;
  if (tmp15) {
    const obj2 = {};
    const obj3 = { uri: memo };
    obj2.source = obj3;
    obj2.style = tmp.artHeroImage;
    tmp15 = callback(closure_6, obj2);
  }
  const items5 = [tmp15, ];
  const items6 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  items5[1] = callback(onHeightMeasured(first[8]), { colors: items6, style: tmp.artHeroGradient });
  obj1.children = items5;
  const items7 = [closure_8(onHeightMeasured(first[6]).View, obj1), ];
  const obj5 = { style: tmp.headerContent };
  const obj6 = { style: tmp.shadowContainer };
  if (null != memo1) {
    const obj7 = { style: tmp.coverContainer };
    const obj8 = {};
    const obj9 = { uri: memo1 };
    obj8.source = obj9;
    obj8.style = tmp.image;
    obj7.children = callback(closure_6, obj8);
    let obj10 = obj7;
  } else {
    obj10 = { style: tmp.iconContainer };
    let tmp21 = null != memo2;
    if (tmp21) {
      const obj11 = {};
      const obj12 = { uri: memo2 };
      obj11.source = obj12;
      obj11.style = tmp.image;
      tmp21 = callback(closure_6, obj11);
    }
    obj10.children = tmp21;
  }
  obj6.children = callback(closure_5, obj10);
  const items8 = [callback(closure_5, obj6), ];
  const obj13 = { style: tmp.titleContainer };
  let tmp28 = null != l30Rank;
  if (tmp28) {
    const obj14 = { rank: l30Rank };
    tmp28 = callback(onHeightMeasured(first[9]), obj14);
  }
  const items9 = [tmp28, , ];
  const obj15 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: name };
  items9[1] = callback(game(first[10]).Text, obj15);
  let tmp32 = null;
  if (null != joined) {
    tmp32 = null;
    if ("" !== joined) {
      const obj16 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp32 = callback(game(first[10]).Text, obj16);
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
