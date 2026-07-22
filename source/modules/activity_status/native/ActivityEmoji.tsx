// Module ID: 9080
// Function ID: 71182
// Name: ActivityEmoji
// Dependencies: []
// Exports: default

// Module 9080 (ActivityEmoji)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles({ emoji: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, text: {} });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

export default function ActivityEmoji(emoji) {
  let size;
  let style;
  let withPlaceholder;
  emoji = emoji.emoji;
  const arg1 = emoji;
  ({ size, style, withPlaceholder } = emoji);
  if (withPlaceholder === undefined) {
    withPlaceholder = false;
  }
  let flag = emoji.animate;
  if (flag === undefined) {
    flag = true;
  }
  let importDefault;
  const tmp = callback();
  const AnimateEmoji = arg1(dependencyMap[3]).AnimateEmoji;
  let animated;
  const setting = AnimateEmoji.useSetting();
  if (null != emoji) {
    animated = emoji.animated;
  }
  if (animated) {
    animated = setting;
  }
  if (animated) {
    animated = flag;
  }
  const BooleanResult = Boolean(animated);
  importDefault = BooleanResult;
  let id;
  if (null != emoji) {
    id = emoji.id;
  }
  const items = [id, BooleanResult];
  const memo = React.useMemo(() => {
    let id;
    if (null != emoji) {
      id = emoji.id;
    }
    if (null != id) {
      let obj = BooleanResult(closure_2[4]);
      obj = { id: emoji.id, size: 48, animated: BooleanResult };
      return obj.getEmojiURL(obj);
    }
  }, items);
  if (null == emoji) {
    if (!withPlaceholder) {
      return null;
    }
  }
  if (null == emoji) {
    let obj = { style };
    style = "sm";
    obj.size = "sm";
    jsx(arg1(dependencyMap[5]).ReactionIcon, obj);
  } else {
    obj = { src: memo, name: emoji.name };
    const items1 = [style, ];
    obj = { width: size, height: size };
    items1[1] = obj;
    obj.style = items1;
    const items2 = [, , ];
    ({ emoji: arr3[0], text: arr3[1] } = tmp);
    const obj1 = { fontSize: size };
    items2[2] = obj1;
    obj.textEmojiStyle = items2;
    obj.fastImageStyle = tmp.emoji;
    obj.adjustsFontSizeToFit = true;
    jsx(importDefault(dependencyMap[6]), obj);
  }
};
