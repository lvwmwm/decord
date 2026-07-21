// Module ID: 14085
// Function ID: 106924
// Name: useMessagePreviewSetting
// Dependencies: []
// Exports: default

// Module 14085 (useMessagePreviewSetting)
function useMessagePreviewSetting(guild_id) {
  const arg1 = guild_id;
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const guilds = settings.settings.guilds;
    let tmp2 = null;
    if (null != arg0) {
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
      const ValidMessagePreviewTypes = arg0(closure_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = arg0(closure_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id) {
  let disabled;
  let unread;
  const arg1 = guild_id;
  ({ unread, disabled } = arg1);
  const tmp = useMessagePreviewSetting(guild_id.guild_id);
  const items = [closure_4];
  let stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let hasUnreadResult = null != arg0;
    if (hasUnreadResult) {
      hasUnreadResult = closure_4.hasUnread(arg0.id);
    }
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = importDefault(dependencyMap[4])(guild_id);
  }
  if (!disabled) {
    disabled = tmp === arg1(dependencyMap[5]).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp7 = tmp === arg1(dependencyMap[5]).MessagePreviewTypes.UNREADS;
    if (tmp7) {
      if (null != unread) {
        stateFromStores = unread;
      }
      tmp7 = !stateFromStores;
    }
    disabled = tmp7;
  }
  return importDefault(dependencyMap[6])(guild_id, disabled);
};
export { useMessagePreviewSetting };
