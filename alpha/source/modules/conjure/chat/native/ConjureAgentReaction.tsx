// Module ID: 12646
// Function ID: 12647
// Name: ConjureAgentReaction
// Dependencies: [19, 17, 21, 5014, 575, 4839, 1409, 10855, 7300, 2]
// Exports: default

// Module 12646 (ConjureAgentReaction)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import UserSettings from "UserSettings" /* 4839 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp2;
const conjureAgentReaction = tmp2(10855);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { pill: obj2, emoji: { width: 18, height: 18 } };
obj2 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAgentReaction.tsx");

export default function ConjureAgentReaction(reaction) {
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
};
