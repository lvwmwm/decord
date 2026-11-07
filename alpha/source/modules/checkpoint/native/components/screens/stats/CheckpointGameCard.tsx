// Module ID: 13907
// Function ID: 13908
// Name: CheckpointGameCard
// Dependencies: [19, 17, 2138, 6199, 21, 5140, 575, 504, 1411, 5842, 8213, 5751, 13877, 2]
// Exports: CheckpointGameCard, CheckpointGameCardDescription

// Module 13907 (CheckpointGameCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import CheckpointTextDefault from "CheckpointText" /* 13877 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let CHECKPOINT_DARK_CYAN;
let CHECKPOINT_PRIMARY;
let CHECKPOINT_WHITE;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ CHECKPOINT_DARK_CYAN, CHECKPOINT_PRIMARY, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { cover: obj2, coverImage: { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, unknownCover: obj3, description: obj4, centeredText: { textAlign: "center" }, name: { color: CHECKPOINT_WHITE }, label: { fontSize: 14, lineHeight: 18 } };
obj2 = { aspectRatio: 0.75, boxShadow: items };
items = [{ offsetX: 4, offsetY: 4, blurRadius: 0, color: CHECKPOINT_DARK_CYAN }];
obj3 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj4 = { alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameCard.tsx");

export function CheckpointGameCard(game) {
  let children;
  let items1;
  let items2;
  let items3;
  let obj6;
  let style;
  let tmp10;
  game = game.game;
  const id = game.id;
  let coverImageHash = game.coverImageHash;
  const iconHash = game.iconHash;
  ({ style, children } = game);
  const tmp = closure_7();
  const items = [GameStore];
  const obj = id(504);
  let stateFromStores = obj.useStateFromStores(items, () => GameStore.getCoverImageUrl(id, { size: 480 }));
  const tmp2 = id;
  if (stateFromStores == null) {
    const obj2 = { id, icon: coverImageHash, keepAspectRatio: true, fallbackAvatar: false };
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (coverImageHash == null) {
      coverImageHash = iconHash;
    }
    stateFromStores = getApplicationIconURL(obj2);
  }
  const obj3 = { style: items1, children: items3 };
  items1 = [tmp.cover, style];
  const tmp7 = closure_6;
  if (null != stateFromStores) {
    const obj4 = { source: obj6.makeSource(stateFromStores), style: tmp.coverImage, resizeMode: "cover" };
    const tmp13 = FastImageDefault;
    obj6 = AvatarUtilsDefault;
    tmp10 = closure_5(tmp13, obj4);
  } else {
    const obj5 = { style: items2, children: closure_5(tmp2(8213).UnknownGameIcon, { size: "lg" }) };
    items2 = [, ];
    ({ coverImage: arr3[0], unknownCover: arr3[1] } = tmp);
    tmp10 = closure_5(tmp8, obj5);
  }
  items3 = [tmp10, children];
  return tmp7(View, obj3);
}
export function CheckpointGameCardDescription(arg0) {
  let items;
  let items1;
  let items2;
  let label;
  let name;
  let textAlignment;
  ({ name, label, textAlignment } = arg0);
  const tmp = closure_7();
  let centeredText;
  if ("center" === textAlignment) {
    centeredText = tmp.centeredText;
  }
  const obj2 = { variant: "body-md/semibold", style: items, lineClamp: 2, children: name };
  items = [tmp.name, centeredText];
  const obj = { style: tmp.description, children: items1 };
  items1 = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { variant: "mono-md/bold", style: items2, children: label };
  items2 = [tmp.label, centeredText];
  items1[1] = hasOwnProperty(CheckpointTextDefault, obj3);
  return metroRequire(View, obj);
}
