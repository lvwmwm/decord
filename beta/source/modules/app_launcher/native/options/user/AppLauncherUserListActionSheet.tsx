// Module ID: 11667
// Function ID: 11668
// Name: AppLauncherUserListActionSheet
// Dependencies: [19, 1484, 21, 4836, 4800, 6941, 1177, 11650, 1115, 11648, 11668, 11083, 11649, 5917, 2]
// Exports: default

// Module 11667 (AppLauncherUserListActionSheet)
import Fragment from "Fragment" /* 21 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import TableRow from "TableRow" /* 5917 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const query = onPressRow.query;
  const items = [query];
  closure_6();
  return jsx(onPressRow(11649).AppLauncherList, {
    contentContainerStyle: closure_6().emptyState,
    data: items,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  });
}
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
const AppLauncherUserListActionSheet_str = "AppLauncherUserListActionSheet";
let obj = { emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx");

export default function AppLauncherUserListActionSheet(onUserPress) {
  let tmp4Result;
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const channel = onUserPress.channel;
  let callback1;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  const option = onUserPress.option;
  const guild_id = channel.guild_id;
  const callback = callback1.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(AppLauncherUserListActionSheet_str);
    onActionSheetDismiss();
  }, items);
  const items1 = [callback, onUserPress];
  callback1 = callback1.useCallback((user) => {
    const obj = { user: user.user };
    onUserPress(obj);
    callback();
  }, items1);
  const items2 = [callback1];
  const callback2 = callback1.useCallback((query) => {
    let intl;
    let intl2;
    let tmp3Result;
    const user = query;
    let obj = onUserPress(callback[5]);
    if (obj.isSnowflake(query)) {
      const obj2 = {
        query,
        onPressRow() {
            const obj = { user };
            return callback1(obj);
          }
      };
      tmp3Result = tmp3(EmptyStateWithSnowflakeQuery, obj2);
    } else {
      const obj3 = { style: { paddingTop: 80 }, lightSource: onActionSheetDismiss(callback[7]), darkSource: onActionSheetDismiss(callback[7]), title: intl.string(onUserPress(callback[8]).t.vYocDz), body: intl2.string(onUserPress(callback[8]).t.V6nAfF) };
      const EmptyState = tmp(tmp2[6]).EmptyState;
      intl = tmp(tmp2[8]).intl;
      intl2 = tmp(tmp2[8]).intl;
      tmp3Result = tmp3(EmptyState, obj3);
    }
    return tmp3Result;
  }, items2);
  let obj = { onDismiss: onActionSheetDismiss, option, contentContainerStyles: { paddingHorizontal: 0 }, children: tmp4Result };
  const AppLauncherCommandOptionActionSheet = onUserPress(callback[9]).AppLauncherCommandOptionActionSheet;
  if (channel.isPrivate()) {
    let obj2 = { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: callback1, opensUserProfileOnUserPress: false };
    tmp4Result = tmp4(tmp6(tmp5[10]), obj2);
  } else {
    let obj3 = { channelId: id, guildId: guild_id, searchable: true, searchableEmptyState: callback2, headerShown: false, opensUserProfileOnUserPress: false, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true };
    tmp4Result = tmp4(tmp6(tmp5[11]), obj3);
  }
  return jsx(AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";
