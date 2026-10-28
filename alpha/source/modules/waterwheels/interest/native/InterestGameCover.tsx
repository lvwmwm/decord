// Module ID: 19212
// Function ID: 19213
// Name: InterestGameCover
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 5705, 5270, 2]

// Module 19212 (InterestGameCover)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5705 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let rect;
let tmp;
const Text_Text = tmp(5270);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { cover: obj2, image: StyleSheet.absoluteFillObject, name: rect };
obj2 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", right: 0, bottom: 0, left: 0, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function InterestGameCover(game) {
  let items;
  let obj4;
  let obj6;
  const obj = react2;
  const cResult = obj.c(14);
  game = game.game;
  const width = game.width;
  const tmp4 = closure_7();
  const rounded = Math.ceil(width * _false.get());
  if (cResult[0] === game) {
    let tmp6;
    if (cResult[1] === rounded) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.image) {
      let tmp8;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === game.name) {
        if (cResult[7] === tmp4.name) {
          let tmp13;
          if (cResult[8] === tmp6) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.cover) {
            if (cResult[11] === tmp8) {
              let tmp18;
              if (cResult[12] === tmp13) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
          const obj2 = { accessible: false, pointerEvents: "none", style: tmp4.cover, children: items };
          items = [tmp8, tmp13];
          const tmp21 = metroRequire(React3, obj2);
          cResult[10] = tmp4.cover;
          cResult[11] = tmp8;
          cResult[12] = tmp13;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
      }
      let tmp15 = null == tmp6;
      if (tmp15) {
        const obj3 = { style: tmp4.name, children: hasOwnProperty(Text_Text.Text, obj4) };
        obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: game.name };
        tmp15 = hasOwnProperty(React3, obj3);
      }
      cResult[6] = game.name;
      cResult[7] = tmp4.name;
      cResult[8] = tmp6;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
    let tmp10 = null != tmp6;
    if (tmp10) {
      const obj5 = { source: obj6, style: tmp4.image, resizeMode: "cover" };
      obj6 = { uri: tmp6 };
      tmp10 = hasOwnProperty(FastImageDefault, obj5);
    }
    cResult[3] = tmp4.image;
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  let coverURL = game.getCoverURL(rounded);
  if (coverURL == null) {
    coverURL = game.getIconURL(rounded);
  }
  cResult[0] = game;
  cResult[1] = rounded;
  cResult[2] = coverURL;
  tmp6 = coverURL;
}) : (function InterestGameCover(game) {
  let items;
  let obj3;
  let obj5;
  game = game.game;
  const width = game.width;
  const tmp = closure_7();
  const rounded = Math.ceil(width * _false.get());
  let coverURL = game.getCoverURL(rounded);
  if (coverURL == null) {
    coverURL = game.getIconURL(rounded);
  }
  let tmp6 = null != coverURL;
  const obj = { accessible: false, pointerEvents: "none", style: tmp.cover, children: items };
  const tmp4 = metroRequire;
  if (tmp6) {
    const obj2 = { source: obj3, style: tmp.image, resizeMode: "cover" };
    obj3 = { uri: coverURL };
    tmp6 = hasOwnProperty(FastImageDefault, obj2);
  }
  items = [tmp6, ];
  let tmp10 = null == coverURL;
  if (tmp10) {
    const obj4 = { style: tmp.name, children: hasOwnProperty(Text_Text.Text, obj5) };
    obj5 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: game.name };
    tmp10 = hasOwnProperty(tmp5, obj4);
  }
  items[1] = tmp10;
  return tmp4(React3, obj);
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default tmp7;
