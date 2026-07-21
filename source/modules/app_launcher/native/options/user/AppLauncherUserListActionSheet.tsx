// Module ID: 11297
// Function ID: 87905
// Name: EmptyStateWithSnowflakeQuery
// Dependencies: []
// Exports: default

// Module 11297 (EmptyStateWithSnowflakeQuery)
function EmptyStateWithSnowflakeQuery(onPressRow) {
  const arg1 = onPressRow.onPressRow;
  const tmp = callback();
  const items = [onPressRow.query];
  return jsx(arg1(dependencyMap[12]).AppLauncherList, {
    contentContainerStyle: callback().emptyState,
    data: items,
    renderItem(item) {
      const obj = { lineClamp: null, maxFontSizeMultiplier: null, bottom: null, label: item.item, onPress: onPressRow };
      return callback(onPressRow(closure_2[13]).TableRow, obj);
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  });
}
let closure_3 = importAll(dependencyMap[0]);
const DEFAULT_CONTENT_PADDING = arg1(dependencyMap[1]).DEFAULT_CONTENT_PADDING;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx");

export default function AppLauncherUserListActionSheet(onUserPress) {
  onUserPress = onUserPress.onUserPress;
  const arg1 = onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const importDefault = onActionSheetDismiss;
  const channel = onUserPress.channel;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  const callback = React.useCallback(() => {
    onActionSheetDismiss(callback[4]).hideActionSheet("AppLauncherUserListActionSheet");
    onActionSheetDismiss();
  }, items);
  const dependencyMap = callback;
  const items1 = [callback, onUserPress];
  const callback1 = React.useCallback((user) => {
    onUserPress({ user: user.user });
    callback();
  }, items1);
  const React = callback1;
  const items2 = [callback1];
  const callback2 = React.useCallback((query) => {
    const onUserPress = query;
    let obj = onUserPress(callback[5]);
    if (obj.isSnowflake(query)) {
      obj = {
        query,
        onPressRow(arg0) {
            return callback({ user: arg0 });
          }
      };
      let tmpResult = tmp(closure_6, obj);
    } else {
      obj = {};
      const obj1 = { paddingTop: 80 };
      obj.style = obj1;
      obj.lightSource = onActionSheetDismiss(callback[7]);
      obj.darkSource = onActionSheetDismiss(callback[7]);
      const intl = onUserPress(callback[8]).intl;
      obj.title = intl.string(onUserPress(callback[8]).t.vYocDz);
      const intl2 = onUserPress(callback[8]).intl;
      obj.body = intl2.string(onUserPress(callback[8]).t.V6nAfF);
      tmpResult = tmp(onUserPress(callback[6]).EmptyState, obj);
    }
    return tmpResult;
  }, items2);
  let obj = { onDismiss: onActionSheetDismiss, option: onUserPress.option, contentContainerStyles: { paddingHorizontal: 0 } };
  if (channel.isPrivate()) {
    obj = { channelId: id, onUserPress: callback1 };
    let tmp5Result = tmp5(tmp6(tmp7[10]), obj);
  } else {
    obj = { channelId: id, guildId: channel.guild_id, searchableEmptyState: callback2, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true };
    tmp5Result = tmp5(tmp6(tmp7[11]), obj);
  }
  obj.children = tmp5Result;
  return jsx(arg1(dependencyMap[9]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";
