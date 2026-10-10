// Module ID: 13056
// Function ID: 13057
// Name: MediaViewerOverlayButtonFavoriteGIF
// Dependencies: [19, 21, 558, 576, 9735, 9739, 4809, 1126, 9751, 9737, 1245, 8392, 9552, 587, 9550, 8488, 2]

// Module 13056 (MediaViewerOverlayButtonFavoriteGIF)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import frecency_user_settings from "frecency_user_settings" /* 1245 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 9735 */;
import GIFPickerUtils from "GIFPickerUtils" /* 9737 */;
import GifIcon from "GifIcon" /* 9751 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GIFFavButton(source) {
  let isFavoriteGIF;
  let tmp4;
  let obj = source(isFavoriteGIF[3]);
  const cResult = obj.c(19);
  source = source.source;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  if (cResult[0] !== uri) {
    let tmpResult = tmp(tmp2[4]);
    const gifUrlKeyResult = tmpResult.gifUrlKey(uri);
    cResult[0] = uri;
    cResult[1] = gifUrlKeyResult;
    tmp4 = gifUrlKeyResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult3 = source(isFavoriteGIF[5]);
  isFavoriteGIF = tmpResult3.useIsFavoriteGIF(tmp4);
  if (cResult[2] === isFavoriteGIF) {
    if (cResult[3] === source.embedProviderName) {
      if (cResult[4] === source.height) {
        if (cResult[5] === source.isGIFV) {
          if (cResult[6] === source.thumbnail) {
            if (cResult[7] === source.uri) {
              if (cResult[8] === source.width) {
                let tmp7;
                let tmp8;
                if (cResult[9] === uri) {
                  tmp7 = cResult[10];
                }
                const tmpResult4 = source(isFavoriteGIF[11]);
                if (tmpResult4.isAnimatedImageSource(source)) {
                  let tmp9;
                  let tmp11;
                  if (cResult[11] !== isFavoriteGIF) {
                    let stringResult;
                    let intl = tmp(tmp2[7]).intl;
                    const string = intl.string;
                    const t = tmp(tmp2[7]).t;
                    if (isFavoriteGIF) {
                      stringResult = string(t["5/NS74"]);
                    } else {
                      stringResult = string(t.nIH0v8);
                    }
                    cResult[11] = isFavoriteGIF;
                    cResult[12] = stringResult;
                    tmp9 = stringResult;
                  } else {
                    tmp9 = cResult[12];
                  }
                  if (cResult[13] !== isFavoriteGIF) {
                    let tmp12Result;
                    if (isFavoriteGIF) {
                      const obj2 = { color: uri(tmp2[13]).unsafe_rawColors.YELLOW_300, size: "md" };
                      const StarIcon = tmp(tmp2[12]).StarIcon;
                      tmp12Result = tmp12(StarIcon, obj2);
                    } else {
                      tmp12Result = tmp12(tmp(tmp2[14]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
                    }
                    cResult[13] = isFavoriteGIF;
                    cResult[14] = tmp12Result;
                    tmp11 = tmp12Result;
                  } else {
                    tmp11 = cResult[14];
                  }
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp9) {
                      let tmp15;
                      if (cResult[17] === tmp11) {
                        tmp15 = cResult[18];
                      }
                      tmp8 = tmp15;
                    }
                  }
                  const tmp18 = jsx(uri(isFavoriteGIF[15]), { accessibilityLabel: tmp9, onPress: tmp7, icon: tmp11 });
                  cResult[15] = tmp7;
                  cResult[16] = tmp9;
                  cResult[17] = tmp11;
                  cResult[18] = tmp18;
                  tmp15 = tmp18;
                } else {
                  tmp8 = null;
                }
                return tmp8;
              }
            }
          }
        }
      }
    }
  }
  const fn = function u() {
    let GIFType;
    let intl;
    let intl2;
    let isGIFV;
    if (isFavoriteGIF) {
      const tmpResult = GIFPickerActionCreators;
      tmpResult.removeFavoriteGIF(uri);
      const obj = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2("REMOVED_FROM_FAVORITES", obj);
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
      const obj5 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open("ADDED_TO_FAVORITES", obj5);
    }
  };
  cResult[2] = isFavoriteGIF;
  cResult[3] = source.embedProviderName;
  cResult[4] = source.height;
  cResult[5] = source.isGIFV;
  cResult[6] = source.thumbnail;
  cResult[7] = source.uri;
  cResult[8] = source.width;
  cResult[9] = uri;
  cResult[10] = fn;
  tmp7 = fn;
}) : (function GIFFavButton(source) {
  let tmp7Result;
  let tmp7Result2;
  source = source.source;
  let isFavoriteGIF;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  const useIsFavoriteGIF = source(isFavoriteGIF[5]).useIsFavoriteGIF;
  const tmp3 = source(isFavoriteGIF[5]);
  let obj = source(isFavoriteGIF[4]);
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
      const obj = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2("REMOVED_FROM_FAVORITES", obj);
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
      const obj5 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open("ADDED_TO_FAVORITES", obj5);
    }
  }, items);
  const obj2 = source(isFavoriteGIF[11]);
  if (obj2.isAnimatedImageSource(source)) {
    let stringResult;
    const tmp7 = jsx;
    const tmp9 = uri(isFavoriteGIF[15]);
    let intl = tmp(tmp2[7]).intl;
    const string = intl.string;
    const t = tmp(tmp2[7]).t;
    const tmp8 = uri;
    if (isFavoriteGIF) {
      stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    const obj3 = { accessibilityLabel: stringResult, onPress: callback, icon: tmp7Result };
    if (isFavoriteGIF) {
      let obj4 = { color: tmp8(tmp2[13]).unsafe_rawColors.YELLOW_300, size: "md" };
      const StarIcon = tmp(tmp2[12]).StarIcon;
      tmp7Result = tmp7(StarIcon, obj4);
    } else {
      tmp7Result = tmp7(tmp(tmp2[14]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
    }
    tmp7Result2 = tmp7(tmp9, obj3);
  } else {
    tmp7Result2 = null;
  }
  return tmp7Result2;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default memoResult;
