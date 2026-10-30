// Module ID: 8564
// Function ID: 8565
// Name: ChangelogInlineImage
// Dependencies: [32, 19, 17, 21, 5009, 575, 1492, 4834, 8562, 5712, 1114, 8565, 2]
// Exports: default

// Module 8564 (ChangelogInlineImage)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import UserSettings from "UserSettings" /* 4834 */;
import ChangelogImageUtils from "ChangelogImageUtils" /* 8562 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let tmp2;
const FastImageDefault = tmp2(5712);
const GifTagDefault = tmp2(8565);
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, image: obj3, gifTag: rect };
obj2 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/changelog/native/ChangelogInlineImage.tsx");

export default function ChangelogInlineImage(title) {
  let alt;
  let c2;
  let c3;
  let closure_1;
  let first;
  let height;
  let items;
  let items1;
  let obj2;
  let string;
  let t;
  let target;
  let tmp10;
  let tmp12;
  let tmp22;
  let tmp23;
  let width;
  ({ target, alt } = title);
  first = undefined;
  closure_1 = undefined;
  c2 = undefined;
  c3 = undefined;
  title = title.title;
  let tmp = closure_9();
  let tmp2 = importDefault;
  let tmp4 = useWindowDimensionsDefault();
  ({ width, height } = tmp4);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  [first, closure_1] = react.useState(null);
  [tmp10, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp12, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (!tmp10) {
    const tmp5Result = ChangelogImageUtils;
    if (tmp5Result.isChangelogImageUrl(target)) {
      let tmp19Result3;
      const diff = width - 36;
      const tmp5Result5 = ChangelogImageUtils;
      let result = tmp5Result5.parseChangelogImageSize(title);
      if (result == null) {
        result = first;
      }
      if (result == null) {
        size = { width: diff, height: 0.5625 * diff };
        result = size;
      }
      let changelogImageStillUrl = null;
      const tmp5Result6 = ChangelogImageUtils;
      const fitChangelogImageResult = tmp5Result6.fitChangelogImage(result, diff, 0.5 * height);
      if (!setting) {
        changelogImageStillUrl = null;
        const tmp5Result7 = ChangelogImageUtils;
        if (tmp5Result7.isAnimatedChangelogImage(target)) {
          const tmp5Result8 = ChangelogImageUtils;
          changelogImageStillUrl = tmp5Result8.getChangelogImageStillUrl(target);
        }
      }
      let tmp21 = target;
      const tmp2Result = FastImageDefault;
      if (null != changelogImageStillUrl && !tmp12) {
        tmp21 = changelogImageStillUrl;
      }
      const obj = {
        source: obj2,
        style: items,
        resizeMode: "contain",
        accessible: tmp22,
        accessibilityLabel: tmp23,
        onLoad: function handleLoad(nativeEvent) {
              let height;
              let width;
              nativeEvent = nativeEvent.nativeEvent;
              let source = nativeEvent;
              if ("source" in nativeEvent) {
                source = nativeEvent.source;
              }
              ({ width, height } = source);
              let tmp = null;
              if (width > 0) {
                tmp = null;
                if (height > 0) {
                  const size1 = { width, height };
                  tmp = size1;
                }
              }
              let tmp2 = null == tmp;
              if (!tmp2) {
                size = first;
                let width1;
                const width2 = tmp.width;
                if (first != null) {
                  width1 = size.width;
                }
                let tmp4 = width2 === width1;
                if (tmp4) {
                  let height1;
                  const height2 = tmp.height;
                  if (size != null) {
                    height1 = size.height;
                  }
                  tmp4 = height2 === height1;
                }
                tmp2 = tmp4;
              }
              if (!tmp2) {
                closure_1(tmp);
              }
            },
        onError() {
              return _undefined(true);
            }
      };
      items = [tmp.image, fitChangelogImageResult];
      tmp23 = undefined;
      obj2 = { uri: tmp21 };
      tmp22 = !tmp17 && "" !== alt;
      if (null == changelogImageStillUrl) {
        tmp23 = alt;
      }
      const tmp19Result = metroImportDefault(tmp2Result, obj);
      if (null != changelogImageStillUrl) {
        const obj3 = {
          style: tmp.container,
          accessibilityRole: "button",
          accessibilityLabel: alt,
          accessibilityHint: string(tmp12 ? t.ZcgDJX : t.RscU7I),
          onPress() {
                  return _undefined2((arg0) => !arg0);
                },
          children: items1
        };
        const intl = tmp5(1114).intl;
        string = intl.string;
        t = tmp5(1114).t;
        items1 = [tmp19Result, ];
        let tmp19Result2 = null;
        const tmp27 = metroImportAll;
        const tmp28 = hasOwnProperty;
        if (null != changelogImageStillUrl && !tmp12) {
          const obj4 = { style: tmp.gifTag };
          tmp19Result2 = tmp19(GifTagDefault, obj4);
        }
        items1[1] = tmp19Result2;
        tmp19Result3 = tmp27(tmp28, obj3);
      } else {
        const obj5 = { style: tmp.container, children: tmp19Result };
        tmp19Result3 = tmp19(metroRequire, obj5);
      }
      return tmp19Result3;
    }
  }
  return null;
};
