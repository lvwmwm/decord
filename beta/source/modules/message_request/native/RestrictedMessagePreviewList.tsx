// Module ID: 16721
// Function ID: 16722
// Name: RestrictedMessagePreviewList
// Dependencies: [19, 17, 5056, 21, 4836, 16722, 576, 5395, 4832, 1115, 4787, 4512, 6583, 504, 7624, 7374, 16723, 8112, 5435, 16724, 2]
// Exports: default

// Module 16721 (RestrictedMessagePreviewList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5395 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import RestrictedMessagePreviewLayout from "RestrictedMessagePreviewLayout" /* 16722 */;
import RestrictedBlockedMessageGroupDefault from "RestrictedBlockedMessageGroup" /* 16724 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
function HiddenMedia(count) {
  let intl;
  let items;
  let items1;
  let mediaPlaceholderCard;
  count = count.count;
  const tmp = closure_10();
  _require = tmp;
  let obj = { children: items };
  items = [
    Array.from({ length: count }, (arg0, arg1) => {
      let intl;
      let items;
      const obj = { style: mediaPlaceholderCard.mediaPlaceholderCard, children: items };
      items = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "text-muted" }), ];
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.B2xSxL) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = metroRequire(Text, obj2);
      return metroImportDefault(View, obj, arg1);
    }),

  ];
  let obj2 = { style: tmp.mediaHiddenRow, children: items1 };
  items1 = [closure_6(require("CircleInformationIcon").CircleInformationIcon, { size: "sm", color: "text-muted" }), ];
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(require("intl").t["VGf+K3"]) };
  let Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1[1] = closure_6(Text, obj3);
  items[1] = closure_7(View, obj2);
  return closure_7(View, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = { renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: false, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false, restrictedPreview: true };
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column" }, hiddenMedia: obj2, messageRow: { position: "relative" }, avatarHitbox: size, dateDivider: obj3, dividerLine: obj4, mediaPlaceholderCard: obj5, mediaHiddenRow: obj6 };
obj2 = { marginLeft: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: 0, left: 0, width: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET, height: RestrictedMessagePreviewLayout.RESTRICTED_AVATAR_SIZE };
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
obj4 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, height: 160, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default function RestrictedMessagePreviewList(channelId) {
  let closure_1;
  function groupMessages(stateFromStoresArray) {
    let items1;
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.blocked) {
        let tmp5 = items[items.length - 1];
        let tmp7 = null;
        if (null != tmp5) {
          tmp7 = null;
          if ("blocked" === tmp6.type) {
            tmp7 = tmp5;
          }
        }
        let tmp9 = tmp7;
        if (null != tmp7) {
          let obj2 = channelId(analyticsLocations[11]);
          if (obj2.isSameDay(tmp9.messages[tmp9.messages.length - 1].timestamp, tmp2.timestamp)) {
            let messages = tmp9.messages;
            let arr = messages.push(tmp2);
          }
        }
        let obj3 = { type: "blocked", messages: items1 };
        items1 = [tmp2];
        let arr2 = items.push(obj3);
      } else {
        let obj = { type: "message", message: tmp2 };
        let arr3 = items.push(obj);
      }
      continue;
    }
    return items;
  }
  channelId = channelId.channelId;
  let analyticsLocations;
  let callback;
  let renderMessage;
  let tmp = closure_10();
  importDefault = tmp;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = channelId(analyticsLocations[13]);
  let items = [renderMessage];
  let items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const messages = MessageStore.getMessages(channelId);
    return messages.toArray();
  }, items1);
  callback = callback.useCallback((userId) => {
    const obj = { userId, channelId, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items2);
  const memo = callback.useMemo(() => {
    const obj = new closure_1(analyticsLocations[15])();
    obj.setOptions(closure_1_9);
    return obj;
  }, []);
  const items3 = [tmp, memo, callback];
  renderMessage = callback.useCallback((message) => {
    let intl;
    let items;
    let obj5;
    const tmp = closure_1(analyticsLocations[16])(message);
    const obj = { style: closure_1.messageRow, children: items };
    items = [, ];
    const obj2 = { pointerEvents: "none", message, rowGenerator: memo };
    items[0] = arr5(closure_1(analyticsLocations[17]), obj2);
    const obj3 = {
      style: closure_1.avatarHitbox,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(channelId(analyticsLocations[9]).t.iXAna6),
      onPress() {
        return callback(message.author.id);
      }
    };
    const PressableOpacity = channelId(analyticsLocations[18]).PressableOpacity;
    intl = channelId(analyticsLocations[9]).intl;
    items[1] = arr5(PressableOpacity, obj3);
    const children = [closure_1_7(memo, obj), ];
    let tmp6Result = tmp > 0;
    const tmp2 = closure_1_7;
    const tmp3 = closure_1_8;
    const tmp4 = memo;
    const tmp5 = closure_1;
    if (tmp6Result) {
      const obj4 = { style: tmp5.hiddenMedia, children: arr5(HiddenMedia, obj5) };
      obj5 = { count: tmp };
      tmp6Result = tmp6(tmp4, obj4);
    }
    children[1] = tmp6Result;
    return tmp2(tmp3, { children });
  }, items3);
  const arr5 = groupMessages(stateFromStoresArray);
  let obj2 = {
    style: tmp.container,
    children: arr5.map((type, index) => {
      let id;
      let items;
      let message;
      let obj5;
      let tmp18;
      if ("message" === type.type) {
        message = type.message;
      } else {
        message = type.messages[0];
      }
      let tmp2 = null;
      if (null != arr5[index - 1]) {
        let message2;
        if ("message" === arr5[index - 1].type) {
          message2 = tmp.message;
        } else {
          message2 = tmp.messages[tmp.messages.length - 1];
        }
        tmp2 = message2;
      }
      let tmp6Result = null == tmp2;
      if (!tmp6Result) {
        const obj = DateUtils;
        tmp6Result = !obj.isSameDay(tmp2.timestamp, message.timestamp);
      }
      if (tmp6Result) {
        const obj2 = { style: closure_1.dateDivider, children: items };
        const obj3 = { style: closure_1.dividerLine };
        items = [metroRequire(View, obj3), , ];
        const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: obj5.dateFormat(message.timestamp, "LL") };
        const Text = Text_Text.Text;
        obj5 = DateUtils;
        items[1] = metroRequire(Text, obj4);
        const obj6 = { style: closure_1.dividerLine };
        items[2] = metroRequire(View, obj6);
        tmp6Result = tmp6(tmp7, obj2);
      }
      const children = [tmp6Result, ];
      if ("message" === type.type) {
        tmp18 = renderMessage(type.message);
      } else {
        const obj7 = { messages: type.messages, renderMessage };
        tmp18 = metroRequire(RestrictedBlockedMessageGroupDefault, obj7);
      }
      children[1] = tmp18;
      if ("message" === type.type) {
        id = type.message.id;
      } else {
        const _HermesInternal = HermesInternal;
        id = "blocked-" + message.id;
      }
      return metroImportDefault(View, { children }, id);
    })
  };
  return arr5(memo, obj2);
};
