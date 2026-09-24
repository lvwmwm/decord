// Module ID: 17180
// Function ID: 17181
// Name: VibegrationsChannelChatToasts
// Dependencies: [19, 17, 21, 4829, 576, 1115, 4673, 5912, 1177, 4825, 17181, 2]
// Exports: default

// Module 17180 (VibegrationsChannelChatToasts)
import nativeDefault from "native" /* 576 */;
import UserUtils from "UserUtils" /* 4673 */;
import useVibegrationsChatToastMessagesDefault from "useVibegrationsChatToastMessages" /* 17181 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChatToast(message) {
  message = message.message;
  const onOpenChat = message.onOpenChat;
  const tmp = closure_7();
  const name = UserUtils.useName(message.author);
  const trimmed = message.content.replace(/\s+/g, " ").trim();
  if ("" !== trimmed) {
    const items = [message, onOpenChat];
    const obj2 = { style: tmp.opaque, children: null };
    const callback = noop.useCallback(() => onOpenChat(message), items);
    const obj3 = { variant: "primary", shadow: "high", border: "subtle", style: tmp.card, onPress: callback, children: null };
    const obj4 = { size: tmp2(1177).AvatarSizes.SMALL, user: message.author, guildId: "r" };
    const items1 = [hasOwnProperty(tmp2(1177).Avatar, obj4), ];
    const obj5 = { style: tmp.body, children: null };
    const obj6 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, children: name };
    const items2 = [hasOwnProperty(tmp2(4825).Text, obj6), ];
    const obj7 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
    items2[1] = hasOwnProperty(tmp2(4825).Text, obj7);
    obj5.children = items2;
    items1[1] = timestampProducer(View, obj5);
    obj3.children = items1;
    obj2.children = timestampProducer(tmp2(5912).Card, obj3);
    return hasOwnProperty(View, obj2);
  } else if (message.stickerItems.length > 0) {
    const intl2 = tmp2(1115).intl;
    let stringResult = intl2.string(tmp2(1115).t.kHdYCW);
  } else {
    const intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t["6hGo0c"]);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { column: null, opaque: null, card: null, body: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, alignItems: "flex-end", gap: nativeDefault.space.PX_8 };
obj2.column = rect;
obj2.opaque = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
let obj3 = { width: 304, maxWidth: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj2.card = { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.body = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelChatToasts.tsx");

export default function VibegrationsChannelChatToasts(onOpenChat) {
  onOpenChat = onOpenChat.onOpenChat;
  const arr = useVibegrationsChatToastMessagesDefault(onOpenChat.channelId, true);
  let tmp2 = null;
  if (0 !== arr.length) {
    const obj = { style: tmp.column, pointerEvents: "box-none", accessibilityLiveRegion: "polite", children: arr.map((message) => hasOwnProperty(ChatToast, { message, onOpenChat }, message.id)) };
    tmp2 = closure_5(View, obj);
  }
  return tmp2;
};
