// Module ID: 14256
// Function ID: 109443
// Name: useMessagePreviewSetting
// Dependencies: [1316, 4142, 3803, 566, 9172, 3808, 14257, 2]
// Exports: default

// Module 14256 (useMessagePreviewSetting)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function useMessagePreviewSetting(guild_id) {
  const _require = guild_id;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const guilds = outer1_3.settings.guilds;
    let tmp2 = null;
    if (null != guild_id) {
      let messagePreviews;
      if (null != guilds) {
        if (null != guilds.guilds[tmp]) {
          const mobileRedesignChannelListSettings = tmp4.mobileRedesignChannelListSettings;
          if (null != mobileRedesignChannelListSettings) {
            messagePreviews = mobileRedesignChannelListSettings.messagePreviews;
          }
        }
      }
      tmp2 = messagePreviews;
    }
    if (null != tmp2) {
      const ValidMessagePreviewTypes = guild_id(outer1_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(outer1_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
}
const result = require("explicitContentFromProto").fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id) {
  let disabled;
  let unread;
  const _require = guild_id;
  ({ unread, disabled } = arg1);
  const tmp = useMessagePreviewSetting(guild_id.guild_id);
  const items = [closure_4];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let hasUnreadResult = null != guild_id;
    if (hasUnreadResult) {
      hasUnreadResult = outer1_4.hasUnread(guild_id.id);
    }
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = importDefault(9172)(guild_id);
  }
  if (!disabled) {
    disabled = tmp === _require(3808).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp7 = tmp === _require(3808).MessagePreviewTypes.UNREADS;
    if (tmp7) {
      if (null != unread) {
        stateFromStores = unread;
      }
      tmp7 = !stateFromStores;
    }
    disabled = tmp7;
  }
  return importDefault(14257)(guild_id, disabled);
};
export { useMessagePreviewSetting };
