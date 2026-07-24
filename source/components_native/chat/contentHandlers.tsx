// Module ID: 10892
// Function ID: 84702
// Name: onLongPressLink
// Dependencies: [5, 9561, 9617, 8385, 3827, 9564, 8537, 5482, 4098, 10893, 1934, 21, 3803, 1212, 5490, 3830, 4470, 9421, 2]

// Module 10892 (onLongPressLink)
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
    importDefault(9561)(obj);
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
  let obj = parsedUserId(9564);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId, channelId };
    const items = [importDefault(5482).USER_MENTION];
    obj.sourceAnalyticsLocations = items;
    importDefault(8537)(obj);
    const tmp22 = importDefault(8537);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId, roleId, channelId };
        importDefault(4098).openLazy(parsedUserId(1934)(10893, dependencyMap.paths), "RoleMembersActionSheet", obj);
        const obj9 = importDefault(4098);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj1 = { guildId };
        const obj6 = importDefault(4098);
        const tmp14 = parsedUserId(1934)(10893, dependencyMap.paths);
        obj1.roleId = importDefault(21).castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1.channelId = channelId;
        obj6.openLazy(tmp14, "RoleMembersActionSheet", obj1);
        const obj8 = importDefault(21);
      }
    }
    if (null == roleName) {
      const DeveloperMode = parsedUserId(3803).DeveloperMode;
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
        let obj3 = importDefault(4470);
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
  require(3830) /* presentAddedFriendToast */.presentTimestamp(nativeEvent.nativeEvent.node.full);
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
    const result = require(3830) /* presentAddedFriendToast */.presentCopiedToClipboard();
    const obj2 = require(3830) /* presentAddedFriendToast */;
  }
};
obj.onTapEmoji = function onTapEmoji(emojiNode) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9421, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
let result = require("isAttachmentUrl").fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
