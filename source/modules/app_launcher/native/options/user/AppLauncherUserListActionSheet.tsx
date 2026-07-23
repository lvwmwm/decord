// Module ID: 11308
// Function ID: 87968
// Name: EmptyStateWithSnowflakeQuery
// Dependencies: [31, 1455, 33, 4130, 4098, 6753, 1273, 11291, 1212, 11289, 11309, 10867, 11290, 5165, 2]
// Exports: default

// Module 11308 (EmptyStateWithSnowflakeQuery)
import result from "result";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const tmp = callback();
  const items = [onPressRow.query];
  return jsx(onPressRow(11290).AppLauncherList, {
    contentContainerStyle: callback().emptyState,
    data: items,
    renderItem(item) {
      const obj = { label: item.item, start: true, end: true, onPress: onPressRow };
      return outer1_4(onPressRow(outer1_2[13]).TableRow, obj);
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  });
}
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx");

export default function AppLauncherUserListActionSheet(onUserPress) {
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const channel = onUserPress.channel;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  const callback = callback1.useCallback(() => {
    onActionSheetDismiss(callback[4]).hideActionSheet("AppLauncherUserListActionSheet");
    onActionSheetDismiss();
  }, items);
  const items1 = [callback, onUserPress];
  callback1 = callback1.useCallback((user) => {
    onUserPress({ user: user.user });
    callback();
  }, items1);
  const items2 = [callback1];
  const callback2 = callback1.useCallback((query) => {
    let closure_0 = query;
    let obj = onUserPress(callback[5]);
    if (obj.isSnowflake(query)) {
      obj = {
        query,
        onPressRow(arg0) {
            return outer1_3({ user: closure_0 });
          }
      };
      let tmpResult = tmp(outer1_6, obj);
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
    obj = { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: callback1, opensUserProfileOnUserPress: false };
    let tmp5Result = tmp5(tmp6(tmp7[10]), obj);
  } else {
    obj = { channelId: id, guildId: channel.guild_id, searchable: true, searchableEmptyState: callback2, headerShown: false, opensUserProfileOnUserPress: false, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true };
    tmp5Result = tmp5(tmp6(tmp7[11]), obj);
  }
  obj.children = tmp5Result;
  return jsx(onUserPress(callback[9]).AppLauncherCommandOptionActionSheet, { onDismiss: onActionSheetDismiss, option: onUserPress.option, contentContainerStyles: { paddingHorizontal: 0 } });
};
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";
