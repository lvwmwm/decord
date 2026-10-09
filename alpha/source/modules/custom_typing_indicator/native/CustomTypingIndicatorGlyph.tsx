// Module ID: 11608
// Function ID: 11609
// Name: CustomTypingIndicatorGlyph
// Dependencies: [19, 17, 21, 5091, 558, 576, 1411, 1200, 587, 11609, 2]

// Module 11608 (CustomTypingIndicatorGlyph)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 11609 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorGlyph(config) {
  let animation;
  let tmp5;
  const obj = config(576);
  const cResult = obj.c(23);
  config = config.config;
  size = config.size;
  const tmp4 = closure_5();
  if (cResult[0] !== config) {
    const tmpResult = config(1411);
    const effectiveCustomTypingIndicatorAnimation = tmpResult.getEffectiveCustomTypingIndicatorAnimation(config);
    cResult[0] = config;
    cResult[1] = effectiveCustomTypingIndicatorAnimation;
    tmp5 = effectiveCustomTypingIndicatorAnimation;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmpResult3 = config(1411);
  if (tmpResult3.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let tmp11;
    let PX_4;
    let tmp15;
    if (cResult[3] !== config.emojis) {
      const tmpResult4 = config(1411);
      const customTypingIndicatorEmojisKey = tmpResult4.getCustomTypingIndicatorEmojisKey(config.emojis);
      cResult[3] = config.emojis;
      cResult[4] = customTypingIndicatorEmojisKey;
      tmp11 = customTypingIndicatorEmojisKey;
    } else {
      tmp11 = cResult[4];
    }
    const emojisKey = tmp11;
    if (null == size) {
      PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    if (cResult[5] !== PX_4) {
      const obj2 = { gap: PX_4 };
      cResult[5] = PX_4;
      cResult[6] = obj2;
      tmp15 = obj2;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.emojiRow) {
      let tmp16;
      let tmp17;
      if (cResult[8] === tmp15) {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === config.emojis) {
          if (cResult[12] === tmp11) {
            if (cResult[13] === size) {
              tmp17 = cResult[14];
            }
            if (cResult[20] === tmp16) {
              let tmp20;
              if (cResult[21] === tmp17) {
                tmp20 = cResult[22];
              }
              return tmp20;
            }
            const tmp23 = <emojisKey style={tmp16}>{tmp17}</emojisKey>;
            cResult[20] = tmp16;
            cResult[21] = tmp17;
            cResult[22] = tmp23;
            tmp20 = tmp23;
          }
        }
      }
      if (cResult[15] === tmp5) {
        if (cResult[16] === config.emojis.length) {
          if (cResult[17] === tmp11) {
            let tmp18;
            if (cResult[18] === size) {
              tmp18 = cResult[19];
            }
            const emojis = config.emojis;
            const mapped = emojis.map(tmp18);
            cResult[10] = tmp5;
            cResult[11] = config.emojis;
            cResult[12] = tmp11;
            cResult[13] = size;
            cResult[14] = mapped;
            tmp17 = mapped;
          }
        }
      }
      const fn = function _(emoji, index) {
        return jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, emojisKey, index, emojiCount: config.emojis.length, animation, size }, index);
      };
      cResult[15] = tmp5;
      cResult[16] = config.emojis.length;
      cResult[17] = tmp11;
      cResult[18] = size;
      cResult[19] = fn;
      tmp18 = fn;
    }
    const items = [tmp4.emojiRow, tmp15];
    cResult[7] = tmp4.emojiRow;
    cResult[8] = tmp15;
    cResult[9] = items;
    tmp16 = items;
  } else {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = jsx(config(1200).Ellipsis, {});
      cResult[2] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[2];
    }
    return tmp8;
  }
}) : (function CustomTypingIndicatorGlyph(config) {
  let animation;
  let emojis;
  config = config.config;
  size = config.size;
  let emojisKey;
  const tmp = closure_5();
  const obj = config(1411);
  dependencyMap = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const obj2 = config(1411);
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let PX_4;
    const tmp2Result = config(1411);
    emojisKey = tmp2Result.getCustomTypingIndicatorEmojisKey(config.emojis);
    const items = [tmp.emojiRow, ];
    const tmp5 = jsx;
    const tmp6 = emojisKey;
    if (null == size) {
      PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    const obj3 = { style: items, children: emojis.map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, emojisKey, index, emojiCount: config.emojis.length, animation, size }, index)) };
    emojis = config.emojis;
    return tmp5(tmp6, obj3);
  } else {
    return jsx(config(1200).Ellipsis, {});
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default tmp3;
