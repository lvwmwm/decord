// Module ID: 12359
// Function ID: 12360
// Name: ConjureAgentReaction
// Dependencies: [19, 17, 21, 4972, 587, 558, 576, 4800, 1414, 10706, 7229, 2]

// Module 12359 (ConjureAgentReaction)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserSettings from "UserSettings" /* 4800 */;
import EmojiDefault from "Emoji" /* 7229 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const conjureAgentReaction = tmp(10706);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { pill: obj2, emoji: { width: 18, height: 18 } };
obj2 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAgentReaction(reaction) {
  const obj = react2;
  const cResult = obj.c(13);
  reaction = reaction.reaction;
  const tmp4 = closure_5();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let setting = AnimateEmoji.useSetting();
  if (setting) {
    setting = true === reaction.animated;
  }
  if (cResult[0] === setting) {
    let tmp6;
    let tmp9;
    if (cResult[1] === reaction.emojiId) {
      tmp6 = cResult[2];
    }
    const pill = tmp4.pill;
    if (cResult[3] !== reaction) {
      const tmpResult = conjureAgentReaction;
      const conjureAgentReactionLabel = tmpResult.getConjureAgentReactionLabel(reaction);
      cResult[3] = reaction;
      cResult[4] = conjureAgentReactionLabel;
      tmp9 = conjureAgentReactionLabel;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === reaction.emoji) {
      if (cResult[6] === tmp6) {
        let tmp11;
        if (cResult[7] === tmp4.emoji) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.pill) {
          if (cResult[10] === tmp9) {
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const tmp18 = <View style={pill} accessible accessibilityRole="image" accessibilityLabel={tmp9}>{tmp11}</View>;
        cResult[9] = tmp4.pill;
        cResult[10] = tmp9;
        cResult[11] = tmp11;
        cResult[12] = tmp18;
        tmp15 = tmp18;
      }
    }
    const tmp14 = jsx(EmojiDefault, { src: tmp6, name: reaction.emoji, fastImageStyle: tmp4.emoji });
    cResult[5] = reaction.emoji;
    cResult[6] = tmp6;
    cResult[7] = tmp4.emoji;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  let emojiURL;
  if (null != reaction.emojiId) {
    const obj5 = { id: reaction.emojiId, animated: setting, size: 18 };
    const obj2 = AvatarUtilsDefault;
    emojiURL = obj2.getEmojiURL(obj5);
  }
  cResult[0] = setting;
  cResult[1] = reaction.emojiId;
  cResult[2] = emojiURL;
  tmp6 = emojiURL;
}) : (function ConjureAgentReaction(reaction) {
  reaction = reaction.reaction;
  const tmp = closure_5();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let setting = AnimateEmoji.useSetting();
  if (setting) {
    setting = true === reaction.animated;
  }
  let emojiURL;
  if (null != reaction.emojiId) {
    const obj2 = { id: reaction.emojiId, animated: setting, size: 18 };
    const obj = AvatarUtilsDefault;
    emojiURL = obj.getEmojiURL(obj2);
  }
  const tmp2Result = conjureAgentReaction;
  return <View style={tmp.pill} accessible accessibilityRole="image" accessibilityLabel={tmp2Result.getConjureAgentReactionLabel(reaction)}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAgentReaction.tsx");

export default tmp3;
