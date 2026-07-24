// Module ID: 12264
// Function ID: 95773
// Dependencies: [31, 33, 9619, 9612, 3831, 1212, 9630, 9616, 1317, 8320, 12263, 9431, 689, 9433, 2]

// Module 12264
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function GIFFavButton(source) {
  source = source.source;
  let uri;
  let isFavoriteGIF;
  uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (null == uri) {
    uri = source.uri;
  }
  let obj = source(isFavoriteGIF[2]);
  isFavoriteGIF = obj.useIsFavoriteGIF(source(isFavoriteGIF[3]).gifUrlKey(uri));
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
  let obj2 = source(isFavoriteGIF[3]);
  if (!obj3.isAnimatedImageSource(source)) {
    if (!source.isGIFV) {
      return null;
    }
  }
  obj = {};
  obj3 = source(isFavoriteGIF[9]);
  const tmp4 = jsx;
  let intl = source(isFavoriteGIF[5]).intl;
  const string = intl.string;
  const t = source(isFavoriteGIF[5]).t;
  if (isFavoriteGIF) {
    let stringResult = string(t["5/NS74"]);
  } else {
    stringResult = string(t.nIH0v8);
  }
  obj.accessibilityLabel = stringResult;
  obj.onPress = callback;
  let StarIcon = source;
  if (isFavoriteGIF) {
    StarIcon = StarIcon(tmp8[11]).StarIcon;
    obj = { color: uri(tmp8[12]).unsafe_rawColors.YELLOW_300, size: "md" };
    let tmp7Result = tmp7(StarIcon, obj);
  } else {
    tmp7Result = tmp7(StarIcon(tmp8[13]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
  }
  obj.icon = tmp7Result;
  tmp4(uri(isFavoriteGIF[10]), obj);
});
const result = require("useFavoriteGIFs").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default memoResult;
