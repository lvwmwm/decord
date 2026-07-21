// Module ID: 10854
// Function ID: 84440
// Name: onLongPressLink
// Dependencies: []

// Module 10854 (onLongPressLink)
const importDefaultResult = importDefault(dependencyMap[0]);
const obj = { onLongPressLink };
function onLongPressLink(nativeEvent) {
  const url = nativeEvent.nativeEvent.url;
  let tmp = null != url;
  if (tmp) {
    tmp = "" !== url;
  }
  if (tmp) {
    const obj = { urlString: url };
    importDefault(dependencyMap[1])(obj);
  }
}
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
  let obj = arg1(dependencyMap[5]);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  const arg1 = parsedUserId;
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId, channelId };
    const items = [importDefault(dependencyMap[7]).USER_MENTION];
    obj.sourceAnalyticsLocations = items;
    importDefault(dependencyMap[6])(obj);
    const tmp22 = importDefault(dependencyMap[6]);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId, roleId, channelId };
        importDefault(dependencyMap[8]).openLazy(arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), "RoleMembersActionSheet", obj);
        const obj9 = importDefault(dependencyMap[8]);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj1 = { guildId };
        const obj6 = importDefault(dependencyMap[8]);
        const tmp14 = arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths);
        obj1.roleId = importDefault(dependencyMap[11]).castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1.channelId = channelId;
        obj6.openLazy(tmp14, "RoleMembersActionSheet", obj1);
        const obj8 = importDefault(dependencyMap[11]);
      }
    }
    if (null == roleName) {
      const DeveloperMode = arg1(dependencyMap[12]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj2 = {};
          const intl = arg1(dependencyMap[13]).intl;
          obj2.secondaryConfirmText = intl.string(arg1(dependencyMap[13]).t./AXYnE);
          obj2.onConfirmSecondary = function onConfirmSecondary() {
            parsedUserId(closure_2[14]).copy(parsedUserId);
            const obj = parsedUserId(closure_2[14]);
            const result = parsedUserId(closure_2[15]).presentCopiedToClipboard();
          };
          let obj4 = obj2;
        }
        let obj3 = importDefault(dependencyMap[16]);
        obj3 = {};
        const intl2 = arg1(dependencyMap[13]).intl;
        obj3.title = intl2.string(arg1(dependencyMap[13]).t.r0DLNm);
        const intl3 = arg1(dependencyMap[13]).intl;
        obj3.body = intl3.string(arg1(dependencyMap[13]).t.Fqqbhg);
        const intl4 = arg1(dependencyMap[13]).intl;
        obj3.confirmText = intl4.string(arg1(dependencyMap[13]).t.BddRzS);
        const merged = Object.assign(obj4);
        obj3.show(obj3);
      }
      obj4 = {};
    }
  }
};
obj.onTapTimestamp = function onTapTimestamp(nativeEvent) {
  arg1(dependencyMap[15]).presentTimestamp(nativeEvent.nativeEvent.node.full);
};
obj.onTapInlineCode = function onTapInlineCode(nativeEvent) {
  const node = nativeEvent.nativeEvent.node;
  let tmp = null != node.content;
  if (tmp) {
    tmp = "string" === typeof node.content;
  }
  if (tmp) {
    arg1(dependencyMap[14]).copy(node.content);
    const obj = arg1(dependencyMap[14]);
    const result = arg1(dependencyMap[15]).presentCopiedToClipboard();
    const obj2 = arg1(dependencyMap[15]);
  }
};
obj.onTapEmoji = function onTapEmoji(emojiNode) {
  importDefault(dependencyMap[8]).openLazy(arg1(dependencyMap[10])(dependencyMap[17], dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
