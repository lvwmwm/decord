// Module ID: 9125
// Function ID: 71435
// Name: ActivityEmoji
// Dependencies: [31, 33, 4130, 3803, 1392, 7437, 5151, 2]
// Exports: default

// Module 9125 (ActivityEmoji)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ emoji: { flexShrink: 0, width: "100%", height: "100%" }, text: { textAlign: "center", fontFamily: "System" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

export default function ActivityEmoji(emoji) {
  let size;
  let style;
  let withPlaceholder;
  emoji = emoji.emoji;
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
  const AnimateEmoji = emoji(3803).AnimateEmoji;
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
      let obj = _undefined(outer1_2[4]);
      obj = { id: emoji.id, size: 48, animated: _undefined };
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
    jsx(emoji(7437).ReactionIcon, { style });
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
    jsx(importDefault(5151), { width: size, height: size });
  }
};
