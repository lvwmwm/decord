// Module ID: 9629
// Function ID: 9630
// Name: NotificationSettingsChannelPost
// Dependencies: [19, 17, 5017, 21, 504, 5999, 1115, 5916, 6540, 2]
// Exports: NotificationSettingsChannelPost

// Module 9629 (NotificationSettingsChannelPost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const View = react_native.View;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  let intl;
  let intl2;
  let muted;
  let newForumThreadsCreated;
  _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = require("get initialized");
  const items = [UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { muted: UserGuildSettingsStore.isChannelMuted(importDefault, dependencyMap), guildMuted: UserGuildSettingsStore.isMuted(importDefault), newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel) };
    return obj;
  });
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  const guildMuted = stateFromStoresObject.guildMuted;
  ({ title: intl.string(require("intl").t.bK11jO), hasIcons: false, children: null });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  ({
    label: intl2.string(require("intl").t.Rkgjph),
    checked: newForumThreadsCreated,
    disabled: muted,
    onPress() {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const result = obj.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
    }
  });
  const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
  intl2 = require("intl").intl;
  if (!muted) {
    muted = guildMuted;
  }
  return <tmp3 style={arg0.style}>{null}</tmp3>;
};
