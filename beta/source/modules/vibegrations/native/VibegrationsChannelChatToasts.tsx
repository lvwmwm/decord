// Module ID: 16428
// Function ID: 16429
// Name: VibegrationsChannelChatToasts
// Dependencies: [19, 17, 21, 4836, 576, 1115, 4678, 5919, 1177, 4832, 16429, 2]
// Exports: default

// Module 16428 (VibegrationsChannelChatToasts)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtils from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useVibegrationsChatToastMessagesDefault from "useVibegrationsChatToastMessages" /* 16429 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
function ChatToast(message) {
  let Card;
  let items1;
  let items2;
  let obj3;
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp = closure_7();
  const obj = UserUtils;
  const str = message.content;
  const name = obj.useName(message.author);
  const str2 = str.replace(/\s+/g, " ");
  let trimmed = str2.trim();
  if ("" === trimmed) {
    let stringResult;
    if (message.stickerItems.length > 0) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.kHdYCW);
    } else {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(tmp2(1115).t["6hGo0c"]);
    }
    trimmed = stringResult;
  }
  const items = [message, onOpenChat];
  const obj2 = { style: tmp.opaque, children: metroRequire(Card, obj3) };
  const callback = react.useCallback(() => onOpenChat(message), items);
  obj3 = { variant: "primary", shadow: "high", border: "subtle", style: tmp.card, onPress: callback, children: items1 };
  Card = tmp2(5919).Card;
  const obj4 = { size: native.AvatarSizes.SMALL, user: message.author, guildId: "Array" };
  const Avatar = tmp2(1177).Avatar;
  items1 = [hasOwnProperty(Avatar, obj4), ];
  const obj5 = { style: tmp.body, children: items2 };
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed })];
  items1[1] = metroRequire(View, obj5);
  return hasOwnProperty(View, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { column: rect, opaque: obj2, card: obj3, body: { flex: 1 } };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, alignItems: "flex-end", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj3 = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelChatToasts.tsx");

export default function VibegrationsChannelChatToasts(onOpenChat) {
  onOpenChat = onOpenChat.onOpenChat;
  const channelId = onOpenChat.channelId;
  const tmp = closure_7();
  const arr = useVibegrationsChatToastMessagesDefault(channelId, true);
  let tmp2 = null;
  if (0 !== arr.length) {
    let obj = {
      style: tmp.column,
      pointerEvents: "box-none",
      accessibilityLiveRegion: "polite",
      children: arr.map((message) => {
          const obj = { message, onOpenChat };
          return hasOwnProperty(ChatToast, obj, message.id);
        })
    };
    tmp2 = closure_5(View, obj);
  }
  return tmp2;
};
