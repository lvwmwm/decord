// Module ID: 9386
// Function ID: 73188
// Name: Emoji
// Dependencies: [31, 27, 3947, 33, 4130, 689, 9387, 3775, 5085, 4126, 9388, 3771, 9330, 9389, 1212, 7495, 4543, 9391, 2]
// Exports: default

// Module 9386 (Emoji)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  let obj = {};
  const merged = Object.assign(_createForOfIteratorHelperLoose());
  let obj1 = require(9387) /* styles */;
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = importDefault(3775);
  const uRL = obj2.getURL(surrogate);
  obj = { style: obj.emojiWrapper };
  if ("" !== uRL) {
    obj = {};
    obj.style = obj.emojiIcon;
    obj.resizeMode = "contain";
    obj1 = { uri: uRL };
    obj.source = obj1;
    let tmp9 = callback(importDefault(5085), obj);
  } else {
    obj2 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp9 = callback(require(4126) /* Text */.Text, obj2);
  }
  obj.children = tmp9;
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.ctaContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(nonce) {
  const emojiNode = nonce.emojiNode;
  let obj = {};
  const merged = Object.assign(_createForOfIteratorHelperLoose());
  let obj1 = emojiNode(isFavoriteEmoji[6]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  guildId = guildId.getGuildId();
  let obj2 = emojiNode(isFavoriteEmoji[10]);
  const trackOpenPopout = obj2.useTrackOpenPopout({ currentGuildId: guildId, nonce: nonce.nonce });
  const items = [emojiNode.surrogate];
  const memo = React.useMemo(() => memo(isFavoriteEmoji[11]).convertSurrogateToBase(emojiNode.surrogate), items);
  let obj3 = emojiNode(isFavoriteEmoji[12]);
  isFavoriteEmoji = obj3.useIsFavoriteEmoji(guildId, memo);
  obj = {};
  obj = { style: obj.emojiContainer };
  obj1 = { surrogate: emojiNode.surrogate };
  const items1 = [callback(Emoji, obj1), ];
  obj2 = { style: obj.emojiDescriptionWrapper };
  obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: memo(isFavoriteEmoji[13])(emojiNode.content) };
  const items2 = [callback(emojiNode(isFavoriteEmoji[9]).Text, obj3), ];
  const obj4 = { variant: "text-sm/medium" };
  const intl = emojiNode(isFavoriteEmoji[14]).intl;
  obj4.children = intl.string(emojiNode(isFavoriteEmoji[14]).t.sXdH8c);
  items2[1] = callback(emojiNode(isFavoriteEmoji[9]).Text, obj4);
  obj2.children = items2;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  const items3 = [callback2(View, obj), callback(emojiNode(isFavoriteEmoji[15]).FormDivider, { style: obj.divider }), ];
  const obj6 = { style: obj.ctaContainer };
  const obj7 = {};
  const intl2 = emojiNode(isFavoriteEmoji[14]).intl;
  const string = intl2.string;
  const t = emojiNode(isFavoriteEmoji[14]).t;
  if (isFavoriteEmoji) {
    let stringResult = string(t.Ay49KA);
  } else {
    stringResult = string(t.nNsr67);
  }
  obj7.text = stringResult;
  let str = "primary";
  if (isFavoriteEmoji) {
    str = "tertiary";
  }
  obj7.variant = str;
  obj7.onPress = function onPress() {
    const obj = emojiNode(isFavoriteEmoji[17]);
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(memo);
    } else {
      obj.favoriteEmoji(memo);
    }
  };
  obj6.children = callback(emojiNode(isFavoriteEmoji[16]).Button, obj7);
  items3[2] = callback(View, obj6);
  obj.children = items3;
  return callback2(closure_8, obj);
};
