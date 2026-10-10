// Module ID: 15509
// Function ID: 15510
// Name: GuildRoleSubscriptionEmojiGallery
// Dependencies: [19, 17, 21, 558, 576, 9558, 9560, 15510, 2]

// Module 15509 (GuildRoleSubscriptionEmojiGallery)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import chunkDefault from "chunk" /* 9558 */;
import LayoutUtils from "LayoutUtils" /* 9560 */;
import EmojiIconDefault from "EmojiIcon" /* 15510 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiGallery(maxPerRow) {
  let emojiIds;
  let guildId;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(16);
  const tmp = guildId;
  ({ emojiIds, guildId } = maxPerRow);
  maxPerRow = maxPerRow.maxPerRow;
  let num = 9;
  if (undefined !== maxPerRow) {
    num = maxPerRow;
  }
  if (cResult[0] === emojiIds) {
    if (cResult[1] === guildId) {
      let tmp4;
      let tmp5;
      let num2;
      let tmp6;
      if (cResult[2] === num) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
        num2 = cResult[5];
        tmp6 = cResult[6];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === num2) {
          let tmp10;
          if (cResult[11] === tmp6) {
            tmp10 = cResult[12];
          }
          if (cResult[13] === tmp5) {
            let tmp13;
            if (cResult[14] === tmp10) {
              tmp13 = cResult[15];
            }
            return tmp13;
          }
          const tmp15 = <tmp5>{tmp10}</tmp5>;
          cResult[13] = tmp5;
          cResult[14] = tmp10;
          cResult[15] = tmp15;
          tmp13 = tmp15;
        }
      }
      const tmp12 = <tmp4 gap={num2}>{tmp6}</tmp4>;
      cResult[9] = tmp4;
      cResult[10] = num2;
      cResult[11] = tmp6;
      cResult[12] = tmp12;
      tmp10 = tmp12;
    }
  }
  const arr = chunkDefault(emojiIds, num);
  let GappedList = tmp(9560).GappedList;
  if (cResult[7] !== guildId) {
    class I {
      constructor(arg0, arg1) {
        obj = { style: { flexDirection: "row" }, children: null };
        obj1 = { gap: 16, children: null };
        GappedList = closure_0(closure_2[6]).GappedList;
        obj1.children = maxPerRow.map(() => { /* body not rendered: F147016 */ });
        obj.children = jsx(GappedList, obj1);
        return jsx(View, obj, arg1);
      }
    }
    cResult[7] = guildId;
    cResult[8] = I;
    tmp8 = I;
  } else {
    class I {
      constructor(arg0, arg1) {
        obj = { style: { flexDirection: "row" }, children: null };
        obj1 = { gap: 16, children: null };
        GappedList = closure_0(closure_2[6]).GappedList;
        obj1.children = maxPerRow.map(() => { /* body not rendered: F147016 */ });
        obj.children = jsx(GappedList, obj1);
        return jsx(View, obj, arg1);
      }
    }
  }
  const mapped = arr.map(tmp8);
  cResult[0] = emojiIds;
  cResult[1] = guildId;
  cResult[2] = num;
  cResult[3] = GappedList;
  cResult[4] = View;
  cResult[5] = 8;
  cResult[6] = mapped;
  tmp6 = mapped;
  num2 = 8;
  tmp5 = tmp7;
  tmp4 = GappedList;
}) : (function EmojiGallery(emojiIds) {
  let arr;
  let maxPerRow;
  let require;
  ({ guildId: require, maxPerRow } = emojiIds);
  emojiIds = emojiIds.emojiIds;
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  const obj2 = {
    gap: 8,
    children: arr.map((arr, index) => {
      let guildId;
      ({ gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) });
      const GappedList = LayoutUtils.GappedList;
      return <View key={arg1} style={{ flexDirection: "row" }}>{null}</View>;
    })
  };
  arr = chunkDefault(emojiIds, maxPerRow);
  let GappedList = LayoutUtils.GappedList;
  return <View>{null}</View>;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default tmp3;
