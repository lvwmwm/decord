// Module ID: 9375
// Function ID: 9376
// Name: GameCoverArt
// Dependencies: [19, 17, 21, 5014, 575, 9376, 1113, 5717, 5624, 2]
// Exports: default

// Module 9375 (GameCoverArt)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useGameArtworkDefault from "useGameArtwork" /* 9376 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let items;
let obj10;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
class GameCoverArtFromURLs {
  constructor(loadingPlaceholder) {
    let accessible;
    let coverUrl;
    let firstReleaseDate;
    let gameName;
    let iconUrl;
    let imageUrl;
    let isCover;
    let isLoading;
    let items1;
    let obj;
    let obj5;
    let obj6;
    let obj8;
    let str;
    let style;
    ({ gameName, size, style, accessible } = loadingPlaceholder);
    ({ coverUrl, iconUrl, firstReleaseDate } = loadingPlaceholder);
    if (accessible === undefined) {
      accessible = true;
    }
    loadingPlaceholder = loadingPlaceholder.loadingPlaceholder;
    const tmp = closure_8();
    ({ imageUrl, isCover, isLoading } = useGameArtworkDefault(coverUrl, iconUrl));
    useGameArtworkDefault(coverUrl, iconUrl);
    if (null == imageUrl) {
      const obj2 = { gameName, firstReleaseDate, size, style, accessible };
      return React3(GameCoverArtFallback, obj2);
    } else {
      let formatToPlainStringResult = gameName;
      if (size !== obj.COMPACT) {
        const intl = intl2.intl;
        obj = { game: gameName };
        formatToPlainStringResult = intl.formatToPlainString(intl2.t["3ev90U"], obj);
      }
      const items = [tmp.container, , ];
      let iconContainer = !isCover;
      const tmp9 = hasOwnProperty;
      if (!isCover) {
        iconContainer = tmp.iconContainer;
      }
      const obj3 = { style: items, accessible, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, children: items1 };
      items[1] = iconContainer;
      items[2] = style;
      let tmp11 = !isCover;
      if (tmp11) {
        const obj4 = { style: tmp.backdropContainer, pointerEvents: "none", children: React3(FastImageDefault, obj5) };
        obj5 = { source: obj6, style: tmp.backdrop, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        obj6 = { uri: imageUrl };
        tmp11 = React3(tmp10, obj4);
      }
      items1 = [tmp11, , ];
      const obj7 = { source: obj8, accessible: false, style: isCover ? tmp.image : tmp.icon, resizeMode: str, onError: tmp6, onLoad: tmp5 };
      str = "cover";
      obj8 = { uri: imageUrl };
      const tmp2Result = FastImageDefault;
      if (isCover) {
        str = "stretch";
      }
      items1[1] = React3(tmp2Result, obj7, imageUrl);
      if (isLoading) {
        isLoading = null != loadingPlaceholder;
      }
      if (isLoading) {
        const obj9 = { style: tmp.placeholder, children: loadingPlaceholder };
        isLoading = tmp13(tmp10, obj9);
      }
      items1[2] = isLoading;
      return tmp9(_false, obj3);
    }
  }
}
function GameCoverArtFallback(arg0) {
  let accessible;
  let combined1;
  let firstReleaseDate;
  let gameName;
  let items;
  let items1;
  let items2;
  let nameLineClamp;
  let nameVariant;
  let obj;
  let obj3;
  let releaseYearVariant;
  let style;
  ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
  const tmp = closure_8();
  if (size === obj.COMPACT) {
    const obj2 = { style: items, accessible, accessibilityRole: "image", accessibilityLabel: gameName, children: React3(Text_Text.Text, obj3) };
    items = [tmp.container, style, tmp.compactFallback];
    obj3 = { variant: "text-xxs/medium", lineClamp: 3, style: tmp.fallbackText, accessible: false, children: gameName };
    return React3(_false, obj2);
  } else {
    let date = null;
    ({ nameVariant, nameLineClamp, releaseYearVariant } = closure_7[size]);
    if (null != firstReleaseDate) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(firstReleaseDate);
    }
    let combined = null;
    if (null != date) {
      const _HermesInternal = HermesInternal;
      combined = "(" + date.getFullYear() + ")";
    }
    obj = { style: items1, accessible, accessibilityRole: "image", accessibilityLabel: combined1, children: items2 };
    items1 = [tmp.container, style, tmp.fallback];
    combined1 = gameName;
    const tmp7 = hasOwnProperty;
    if (null != combined) {
      const _HermesInternal2 = HermesInternal;
      combined1 = "" + gameName + " " + combined;
    }
    const obj4 = { style: tmp.spacer };
    items2 = [React3(_false, obj4), , , ];
    const obj5 = { variant: nameVariant, color: "text-default", lineClamp: nameLineClamp, style: tmp.fallbackText, accessible: false, children: gameName };
    items2[1] = React3(Text_Text.Text, obj5);
    const obj6 = { style: tmp.spacer };
    items2[2] = React3(_false, obj6);
    const obj7 = { variant: releaseYearVariant, color: "text-default", accessible: false, children: combined };
    items2[3] = React3(Text_Text.Text, obj7);
    return tmp7(_false, obj);
  }
}
({ StyleSheet, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const GameCoverArtSize = { SMALL: 0, [0]: "SMALL", LARGE: 1, [1]: "LARGE", COMPACT: 2, [2]: "COMPACT" };
let closure_7 = { [GameCoverArtSize.SMALL]: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" }, [GameCoverArtSize.LARGE]: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" } };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, image: size, iconContainer: obj4, backdropContainer: obj5, backdrop: obj6, icon: obj7, fallback: obj8, compactFallback: obj9, fallbackText: { textAlign: "center" }, spacer: { flex: 1 }, placeholder: obj10 };
obj3 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj4 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { transform: items };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
items = [{ scale: 1.2 }];
obj7 = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
obj8 = { alignItems: "center", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj9 = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj10 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
const metroImportAll = createStyles(obj2);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default function GameCoverArt(arg0) {
  let game;
  let getIconURL;
  let imageSize;
  ({ game, imageSize } = arg0);
  const obj = { coverUrl: game.getCoverURL(imageSize), iconUrl: getIconURL(imageSize) };
  const merged = Object.assign(Object.assign(arg0, Object.assign({ game: 0, imageSize: 0 })));
  getIconURL = game.getIconURL;
  const tmp = React3;
  const tmp2 = GameCoverArtFromURLs;
  if (imageSize == null) {
    imageSize = 256;
  }
  ({ name: obj.gameName, firstReleaseDate: obj.firstReleaseDate } = game);
  return tmp(tmp2, obj);
};
export { GameCoverArtSize };
export { GameCoverArtFromURLs };
