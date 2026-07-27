// Module ID: 10843
// Function ID: 84297
// Name: onLongPressLink
// Dependencies: [5, 9482, 9538, 8143, 3828, 9485, 8297, 5482, 4099, 10844, 1935, 21, 3804, 1212, 5490, 3831, 4471, 9341, 2]

// Module 10843 (onLongPressLink)
import importDefaultResult from "castNativeSyntheticEventData";

const require = arg1;
let obj = { onLongPressLink };
onLongPressLink = function onLongPressLink(nativeEvent) {
  const url = nativeEvent.nativeEvent.url;
  let tmp = null != url;
  if (tmp) {
    tmp = "" !== url;
  }
  if (tmp) {
    const obj = { urlString: url };
    importDefault(9482)(obj);
  }
};
// CreateGeneratorClosureLongIndex (0x67)
let closure_4 = importDefaultResult(onLongPressLink);
const fn = function() {
  return callback2(...arguments);
};
obj.onTapAttachmentLink = fn;
// CreateGeneratorClosureLongIndex (0x67)
let closure_3 = importDefaultResult(fn);
obj.onLongPressAttachmentLink = function() {
  return callback(...arguments);
};
obj.onTapMention = function onTapMention(nativeEvent) {
  let channelId;
  let guildId;
  let parsedUserId;
  let roleId;
  let roleName;
  let userId;
  let obj = parsedUserId(9485);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId, channelId };
    const items = [importDefault(5482).USER_MENTION];
    obj.sourceAnalyticsLocations = items;
    importDefault(8297)(obj);
    const tmp22 = importDefault(8297);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId, roleId, channelId };
        importDefault(4099).openLazy(parsedUserId(1935)(10844, dependencyMap.paths), "RoleMembersActionSheet", obj);
        const obj9 = importDefault(4099);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj1 = { guildId };
        const obj6 = importDefault(4099);
        const tmp14 = parsedUserId(1935)(10844, dependencyMap.paths);
        obj1.roleId = importDefault(21).castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1.channelId = channelId;
        obj6.openLazy(tmp14, "RoleMembersActionSheet", obj1);
        const obj8 = importDefault(21);
      }
    }
    if (null == roleName) {
      const DeveloperMode = parsedUserId(3804).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj2 = {};
          const intl = parsedUserId(1212).intl;
          obj2.secondaryConfirmText = intl.string(parsedUserId(1212).t["/AXYnE"]);
          obj2.onConfirmSecondary = function onConfirmSecondary() {
            parsedUserId(outer1_2[14]).copy(parsedUserId);
            const obj = parsedUserId(outer1_2[14]);
            const result = parsedUserId(outer1_2[15]).presentCopiedToClipboard();
          };
          let obj4 = obj2;
        }
        let obj3 = importDefault(4471);
        obj3 = {};
        const intl2 = parsedUserId(1212).intl;
        obj3.title = intl2.string(parsedUserId(1212).t.r0DLNm);
        const intl3 = parsedUserId(1212).intl;
        obj3.body = intl3.string(parsedUserId(1212).t.Fqqbhg);
        const intl4 = parsedUserId(1212).intl;
        obj3.confirmText = intl4.string(parsedUserId(1212).t.BddRzS);
        const merged = Object.assign(obj4);
        obj3.show(obj3);
      }
      obj4 = {};
    }
  }
};
obj.onTapTimestamp = function onTapTimestamp(nativeEvent) {
  require(3831) /* presentAddedFriendToast */.presentTimestamp(nativeEvent.nativeEvent.node.full);
};
obj.onTapInlineCode = function onTapInlineCode(nativeEvent) {
  const node = nativeEvent.nativeEvent.node;
  let tmp = null != node.content;
  if (tmp) {
    tmp = "string" === typeof node.content;
  }
  if (tmp) {
    require(5490) /* _copy */.copy(node.content);
    const obj = require(5490) /* _copy */;
    const result = require(3831) /* presentAddedFriendToast */.presentCopiedToClipboard();
    const obj2 = require(3831) /* presentAddedFriendToast */;
  }
};
obj.onTapEmoji = function onTapEmoji(emojiNode) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(9341, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
let result = require("isAttachmentUrl").fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
