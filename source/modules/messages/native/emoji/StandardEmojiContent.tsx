// Module ID: 9378
// Function ID: 73134
// Name: Emoji
// Dependencies: []
// Exports: default

// Module 9378 (Emoji)
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  let obj = {};
  const merged = Object.assign(callback3());
  let obj1 = arg1(dependencyMap[6]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = importDefault(dependencyMap[7]);
  const uRL = obj2.getURL(surrogate);
  obj = { style: obj.emojiWrapper };
  if ("" !== uRL) {
    obj = {};
    obj.style = obj.emojiIcon;
    obj.resizeMode = "contain";
    obj1 = { uri: uRL };
    obj.source = obj1;
    let tmp9 = callback(importDefault(dependencyMap[8]), obj);
  } else {
    obj2 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp9 = callback(arg1(dependencyMap[9]).Text, obj2);
  }
  obj.children = tmp9;
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { emojiSurrogate: { lastResponse: null, width: null, height: null } };
obj = { paddingTop: importDefault(dependencyMap[5]).space.PX_4 };
obj.ctaContainer = obj;
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(nonce) {
  const emojiNode = nonce.emojiNode;
  const arg1 = emojiNode;
  let obj = {};
  const merged = Object.assign(callback3());
  let obj1 = arg1(dependencyMap[6]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  const guildId = guildId.getGuildId();
  let obj2 = arg1(dependencyMap[10]);
  const trackOpenPopout = obj2.useTrackOpenPopout({ currentGuildId: guildId, nonce: nonce.nonce });
  const items = [emojiNode.surrogate];
  const memo = React.useMemo(() => memo(isFavoriteEmoji[11]).convertSurrogateToBase(emojiNode.surrogate), items);
  const importDefault = memo;
  let obj3 = arg1(dependencyMap[12]);
  const isFavoriteEmoji = obj3.useIsFavoriteEmoji(guildId, memo);
  const dependencyMap = isFavoriteEmoji;
  obj = {};
  obj = { style: obj.emojiContainer };
  obj1 = { surrogate: emojiNode.surrogate };
  const items1 = [callback(Emoji, obj1), ];
  obj2 = { style: obj.emojiDescriptionWrapper };
  obj3 = { hasMaxConnections: "Array", isBoostOnlySubscription: "isArray", children: importDefault(dependencyMap[13])(emojiNode.content) };
  const items2 = [callback(arg1(dependencyMap[9]).Text, obj3), ];
  const obj4 = { variant: "text-sm/medium" };
  const intl = arg1(dependencyMap[14]).intl;
  obj4.children = intl.string(arg1(dependencyMap[14]).t.sXdH8c);
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj4);
  obj2.children = items2;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  const items3 = [callback2(View, obj), callback(arg1(dependencyMap[15]).FormDivider, { style: obj.divider }), ];
  const obj6 = { style: obj.ctaContainer };
  const obj7 = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[14]).t;
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
  obj6.children = callback(arg1(dependencyMap[16]).Button, obj7);
  items3[2] = callback(View, obj6);
  obj.children = items3;
  return callback2(closure_8, obj);
};
