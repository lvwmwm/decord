// Module ID: 9791
// Function ID: 9792
// Name: StandardEmojiContent
// Dependencies: [19, 17, 4655, 21, 4836, 576, 9792, 4487, 5899, 4832, 9793, 4483, 9748, 9795, 1115, 8053, 5281, 9797, 2]
// Exports: default

// Module 9791 (StandardEmojiContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4487 */;
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles" /* 9792 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9797 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
let tmp5;
const Text_Text = tmp2(4832);
const FastImageDefault = tmp5(5899);
function Emoji(surrogate) {
  let obj6;
  let tmp7Result;
  surrogate = surrogate.surrogate;
  const obj = {};
  const merged = Object.assign(closure_9());
  const obj2 = useSharedMessageEmojiStyles;
  const merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  const obj3 = EmojiUtilsDefault;
  const uRL = obj3.getURL(surrogate);
  const obj4 = { style: obj.emojiWrapper, children: tmp7Result };
  const tmp8 = View;
  if ("" !== uRL) {
    const obj5 = { style: obj.emojiIcon, resizeMode: "contain", source: obj6 };
    obj6 = { uri: uRL };
    tmp7Result = tmp7(FastImageDefault, obj5);
  } else {
    const obj7 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp7Result = tmp7(Text_Text.Text, obj7);
  }
  return metroRequire(tmp8, obj4);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 }, ctaContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(emojiNode) {
  let Button;
  let intl;
  let items1;
  let items2;
  let obj11;
  let str;
  let stringResult;
  emojiNode = emojiNode.emojiNode;
  let isFavoriteEmoji;
  let obj = {};
  const nonce = emojiNode.nonce;
  const merged = Object.assign(closure_9());
  const obj2 = emojiNode(isFavoriteEmoji[6]);
  const merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  const guildId = SelectedGuildStore.getGuildId();
  const obj3 = emojiNode(isFavoriteEmoji[10]);
  const trackOpenPopout = obj3.useTrackOpenPopout({ currentGuildId: guildId, nonce });
  const items = [emojiNode.surrogate];
  const memo = react.useMemo(() => {
    const obj = UnicodeEmojisDefault;
    return obj.convertSurrogateToBase(emojiNode.surrogate);
  }, items);
  const obj4 = emojiNode(isFavoriteEmoji[12]);
  isFavoriteEmoji = obj4.useIsFavoriteEmoji(guildId, memo);
  const obj5 = { style: obj.emojiContainer, children: items1 };
  items1 = [, ];
  const obj6 = { surrogate: emojiNode.surrogate };
  const tmp7 = memo(isFavoriteEmoji[13])(emojiNode.content);
  items1[0] = closure_6(Emoji, obj6);
  const obj7 = { style: obj.emojiDescriptionWrapper, children: items2 };
  items2 = [closure_6(emojiNode(isFavoriteEmoji[9]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: tmp7 }), ];
  const obj8 = { variant: "text-sm/medium", children: intl.string(emojiNode(isFavoriteEmoji[14]).t.sXdH8c) };
  const Text = emojiNode(isFavoriteEmoji[9]).Text;
  intl = emojiNode(isFavoriteEmoji[14]).intl;
  items2[1] = closure_6(Text, obj8);
  items1[1] = closure_7(View, obj7);
  const items3 = [closure_7(View, obj5), , ];
  const obj9 = { style: obj.divider };
  items3[1] = closure_6(emojiNode(isFavoriteEmoji[15]).FormDivider, obj9);
  const obj10 = { style: obj.ctaContainer, children: closure_6(Button, obj11) };
  Button = emojiNode(isFavoriteEmoji[16]).Button;
  const intl2 = emojiNode(isFavoriteEmoji[14]).intl;
  const string = intl2.string;
  const t = emojiNode(isFavoriteEmoji[14]).t;
  const tmp10 = View;
  const tmp8 = closure_7;
  const tmp9 = closure_8;
  if (isFavoriteEmoji) {
    stringResult = string(t.Ay49KA);
  } else {
    stringResult = string(t.nNsr67);
  }
  obj11 = {
    text: stringResult,
    variant: str,
    onPress() {
      const obj = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj.unfavoriteEmoji(memo);
      } else {
        obj.favoriteEmoji(memo);
      }
    }
  };
  str = "primary";
  if (isFavoriteEmoji) {
    str = "tertiary";
  }
  const obj12 = { children: items3 };
  items3[2] = closure_6(tmp10, obj10);
  return tmp8(tmp9, obj12);
};
