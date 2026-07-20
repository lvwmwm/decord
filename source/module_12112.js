// Module ID: 12112
// Function ID: 93321
// Dependencies: []

// Module 12112
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(function GIFFavButton(source) {
  source = source.source;
  const arg1 = source;
  let importDefault;
  let dependencyMap;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (null == uri) {
    uri = source.uri;
  }
  importDefault = uri;
  let obj = arg1(dependencyMap[2]);
  const isFavoriteGIF = obj.useIsFavoriteGIF(arg1(dependencyMap[3]).gifUrlKey(uri));
  dependencyMap = isFavoriteGIF;
  const items = [isFavoriteGIF, , , , , , , ];
  ({ embedProviderName: arr[1], height: arr[2], isGIFV: arr[3], thumbnail: arr[4], uri: arr[5], width: arr[6] } = source);
  items[7] = uri;
  const callback = importAllResult.useCallback(() => {
    if (isFavoriteGIF) {
      let tmpResult = tmp(tmp2[3]);
      tmpResult.removeFavoriteGIF(uri);
      let obj = { key: "REMOVED_FROM_FAVORITES" };
      const intl2 = tmp(tmp2[5]).intl;
      obj.content = intl2.string(tmp(tmp2[5]).t.in1rga);
      obj.IconComponent = tmp(tmp2[6]).GifIcon;
      uri(tmp2[4]).open(obj);
      const obj8 = uri(tmp2[4]);
    } else {
      tmpResult = tmp(tmp2[7]);
      obj = {};
      ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
      const gIFThumbnailForFavorite = tmpResult.getGIFThumbnailForFavorite(obj);
      const obj1 = { url: uri, src: source.uri, gifSrc: gIFThumbnailForFavorite };
      ({ width: obj4.width, height: obj4.height } = source);
      const GIFType = source(isFavoriteGIF[8]).GIFType;
      obj1.format = source.isGIFV ? GIFType.VIDEO : GIFType.IMAGE;
      tmp(tmp2[3]).addFavoriteGIF(obj1);
      const tmpResult1 = tmp(tmp2[3]);
      const obj2 = { key: "ADDED_TO_FAVORITES" };
      const intl = source(isFavoriteGIF[5]).intl;
      obj2.content = intl.string(source(isFavoriteGIF[5]).t.okQonm);
      obj2.IconComponent = source(isFavoriteGIF[6]).GifIcon;
      uri(isFavoriteGIF[4]).open(obj2);
      const obj5 = uri(isFavoriteGIF[4]);
    }
  }, items);
  const obj2 = arg1(dependencyMap[3]);
  if (!obj3.isAnimatedImageSource(source)) {
    if (!source.isGIFV) {
      return null;
    }
  }
  obj = {};
  const obj3 = arg1(dependencyMap[9]);
  const tmp4 = jsx;
  const intl = arg1(dependencyMap[5]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[5]).t;
  if (isFavoriteGIF) {
    let stringResult = string(t.5/NS74);
  } else {
    stringResult = string(t.nIH0v8);
  }
  obj.accessibilityLabel = stringResult;
  obj.onPress = callback;
  let StarIcon = arg1;
  if (isFavoriteGIF) {
    StarIcon = StarIcon(tmp8[11]).StarIcon;
    obj = { color: importDefault(tmp8[12]).unsafe_rawColors.YELLOW_300, size: "md" };
    let tmp7Result = tmp7(StarIcon, obj);
  } else {
    tmp7Result = tmp7(StarIcon(tmp8[13]).StarOutlineIcon, {});
  }
  obj.icon = tmp7Result;
  tmp4(importDefault(dependencyMap[10]), obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default memoResult;
