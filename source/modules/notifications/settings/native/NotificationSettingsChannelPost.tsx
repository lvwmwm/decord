// Module ID: 10337
// Function ID: 79735
// Name: NotificationSettingsChannelPost
// Dependencies: [31, 27, 4325, 33, 566, 5501, 1212, 9132, 5079, 2]
// Exports: NotificationSettingsChannelPost

// Module 10337 (NotificationSettingsChannelPost)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  let dependencyMap;
  let importDefault;
  let muted;
  let newForumThreadsCreated;
  const _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: outer1_4.isChannelMuted(closure_1, closure_2), guildMuted: outer1_4.isMuted(closure_1), newForumThreadsCreated: outer1_4.getNewForumThreadsCreated(channel.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  obj = { style: channel.style };
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.bK11jO);
  obj.hasIcons = false;
  const obj1 = {};
  const intl2 = _require(1212).intl;
  obj1.label = intl2.string(_require(1212).t.Rkgjph);
  obj1.checked = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1.disabled = muted;
  obj1.onPress = function onPress() {
    const result = outer1_1(outer1_2[8]).setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
  };
  obj.children = jsx(_require(9132).TableCheckboxRow, {});
  obj.children = jsx(_require(5501).TableRowGroup, {});
  return <newForumThreadsCreated />;
};
