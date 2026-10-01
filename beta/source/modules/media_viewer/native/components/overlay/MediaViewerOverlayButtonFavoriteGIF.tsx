// Module ID: 12522
// Function ID: 12523
// Name: MediaViewerOverlayButtonFavoriteGIF
// Dependencies: [19, 21, 9831, 9827, 4528, 1115, 9842, 9829, 1221, 7713, 7817, 9698, 576, 9704, 2]

// Module 12522 (MediaViewerOverlayButtonFavoriteGIF)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import frecency_user_settings from "frecency_user_settings" /* 1221 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 9827 */;
import GIFPickerUtils from "GIFPickerUtils" /* 9829 */;
import GifIcon from "GifIcon" /* 9842 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function GIFFavButton(source) {
  let tmp7Result;
  let tmp7Result2;
  source = source.source;
  let isFavoriteGIF;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  const useIsFavoriteGIF = source(isFavoriteGIF[2]).useIsFavoriteGIF;
  const tmp3 = source(isFavoriteGIF[2]);
  let obj = source(isFavoriteGIF[3]);
  isFavoriteGIF = useIsFavoriteGIF(obj.gifUrlKey(uri));
  const items = [isFavoriteGIF, , , , , , , ];
  ({ embedProviderName: arr[1], height: arr[2], isGIFV: arr[3], thumbnail: arr[4], uri: arr[5], width: arr[6] } = source);
  items[7] = uri;
  const callback = react.useCallback(() => {
    let GIFType;
    let intl;
    let intl2;
    let isGIFV;
    if (isFavoriteGIF) {
      const tmpResult = GIFPickerActionCreators;
      tmpResult.removeFavoriteGIF(uri);
      const obj = { key: "REMOVED_FROM_FAVORITES", content: intl2.string(intl3.t.in1rga), IconComponent: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2(obj);
    } else {
      const obj4 = { providerName: null, thumbnail: null };
      ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
      const tmpResult2 = GIFPickerUtils;
      const gIFThumbnailForFavorite = tmpResult2.getGIFThumbnailForFavorite(obj4);
      size = { url: uri, src: source.uri, gifSrc: gIFThumbnailForFavorite, width: null, height: null, format: isGIFV ? GIFType.VIDEO : GIFType.IMAGE };
      ({ width: obj3.width, height: obj3.height } = source);
      const addFavoriteGIF = GIFPickerActionCreators.addFavoriteGIF;
      isGIFV = source.isGIFV;
      GIFPickerActionCreators;
      GIFType = frecency_user_settings.GIFType;
      addFavoriteGIF(size);
      const obj5 = { key: "ADDED_TO_FAVORITES", content: intl.string(intl3.t.okQonm), IconComponent: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open(obj5);
    }
  }, items);
  const obj2 = source(isFavoriteGIF[9]);
  if (obj2.isAnimatedImageSource(source)) {
    let stringResult;
    const tmp7 = jsx;
    const tmp9 = uri(isFavoriteGIF[10]);
    let intl = tmp(tmp2[5]).intl;
    const string = intl.string;
    const t = tmp(tmp2[5]).t;
    const tmp8 = uri;
    if (isFavoriteGIF) {
      stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    const obj3 = { accessibilityLabel: stringResult, onPress: callback, icon: tmp7Result };
    if (isFavoriteGIF) {
      let obj4 = { color: tmp8(tmp2[12]).unsafe_rawColors.YELLOW_300, size: "md" };
      const StarIcon = tmp(tmp2[11]).StarIcon;
      tmp7Result = tmp7(StarIcon, obj4);
    } else {
      tmp7Result = tmp7(tmp(tmp2[13]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
    }
    tmp7Result2 = tmp7(tmp9, obj3);
  } else {
    tmp7Result2 = null;
  }
  return tmp7Result2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default memoResult;
