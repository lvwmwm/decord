// Module ID: 19510
// Function ID: 19511
// Name: InterestGameCover
// Dependencies: [19, 17, 21, 5009, 575, 5712, 5619, 2]
// Exports: default

// Module 19510 (InterestGameCover)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let rect;
({ PixelRatio: c3, StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { cover: obj2, image: StyleSheet.absoluteFillObject, name: rect };
obj2 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", right: 0, bottom: 0, left: 0, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default function InterestGameCover(game) {
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
    obj5 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: game.name };
    tmp10 = hasOwnProperty(tmp5, obj4);
  }
  items[1] = tmp10;
  return tmp4(React3, obj);
};
