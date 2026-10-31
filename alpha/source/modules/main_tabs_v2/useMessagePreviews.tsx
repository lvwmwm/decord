// Module ID: 17297
// Function ID: 17298
// Name: useMessagePreviews
// Dependencies: [1231, 6842, 4839, 504, 9837, 5692, 17298, 2]
// Exports: default, useMessagePreviewSetting

// Module 17297 (useMessagePreviews)
import useIsNsfwGatedDefault from "useIsNsfwGated" /* 9837 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp5;
const useLatestChannelMessageDefault = tmp5(17298);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id, arg1) {
  let disabled;
  let settings;
  let unread;
  _require = guild_id;
  ({ unread, disabled } = arg1);
  guild_id = guild_id.guild_id;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const items = [UserSettingsProtoStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guilds = settings.settings.guilds;
    let tmp2 = null;
    if (null != guild_id) {
      let messagePreviews;
      if (guilds != null) {
        if (guilds.guilds[tmp] != null) {
          const mobileRedesignChannelListSettings = tmp4.mobileRedesignChannelListSettings;
          if (mobileRedesignChannelListSettings != null) {
            messagePreviews = mobileRedesignChannelListSettings.messagePreviews;
          }
        }
      }
      tmp2 = messagePreviews;
    }
    if (null != tmp2) {
      let setting;
      const ValidMessagePreviewTypes = guild_id(dependencyMap[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(dependencyMap[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
  const items1 = [ReadStateStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const hasUnreadResult = null != guild_id && ReadStateStore.hasUnread(tmp.id);
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = stateFromStores === tmp(5692).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = stateFromStores === tmp(5692).MessagePreviewTypes.UNREADS;
    if (tmp6) {
      if (unread == null) {
        unread = stateFromStores1;
      }
      tmp6 = !unread;
    }
    disabled = tmp6;
  }
  return useLatestChannelMessageDefault(guild_id, disabled);
};
export function useMessagePreviewSetting(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsProtoStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guilds = settings.settings.guilds;
    let tmp2 = null;
    if (null != guild_id) {
      let messagePreviews;
      if (guilds != null) {
        if (guilds.guilds[tmp] != null) {
          const mobileRedesignChannelListSettings = tmp4.mobileRedesignChannelListSettings;
          if (mobileRedesignChannelListSettings != null) {
            messagePreviews = mobileRedesignChannelListSettings.messagePreviews;
          }
        }
      }
      tmp2 = messagePreviews;
    }
    if (null != tmp2) {
      let setting;
      const ValidMessagePreviewTypes = guild_id(dependencyMap[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(dependencyMap[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
}
