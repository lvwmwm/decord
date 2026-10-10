// Module ID: 11891
// Function ID: 11892
// Name: AppLauncherUserListActionSheet
// Dependencies: [19, 1502, 21, 5092, 558, 576, 5056, 7242, 1200, 11852, 1126, 11892, 10746, 11853, 6179, 11851, 2]

// Module 11891 (AppLauncherUserListActionSheet)
import Fragment from "Fragment" /* 21 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import TableRow from "TableRow" /* 6179 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_0, dependencyMap, obj1, obj4;

const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
const AppLauncherUserListActionSheet_str = "AppLauncherUserListActionSheet";
let obj = { emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherUserListActionSheet(onUserPress) {
  let channel;
  let closure_2;
  let guild_id;
  let id;
  let option;
  let tmp3;
  const tmp = dependencyMap;
  let obj = onUserPress(576);
  const cResult = obj.c(18);
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  ({ channel, option } = onUserPress);
  ({ guild_id, id } = channel);
  if (cResult[0] !== onActionSheetDismiss) {
    const fn = function n() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(AppLauncherUserListActionSheet_str);
      onActionSheetDismiss();
    };
    cResult[0] = onActionSheetDismiss;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  if (cResult[2] === tmp3) {
    let tmp4;
    let tmp10Result;
    if (cResult[3] === onUserPress) {
      tmp4 = cResult[4];
    }
    let closure_3 = tmp4;
    if (cResult[5] !== tmp4) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      cResult[5] = tmp4;
      cResult[6] = U;
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      cResult[7] = tmp8;
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    if (cResult[8] === channel) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
    }
    if (channel.isPrivate()) {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      tmp14[0] = id;
      tmp14[5] = tmp4;
      tmp10Result = tmp10(tmp11(11892), tmp14);
    } else {
      class U {
        constructor(arg0) {
          closure_0 = onUserPress;
          tmp = onUserPress;
          tmp2 = closure_2;
          obj = onUserPress(closure_2[7]);
          tmp3 = closure_1_4;
          if (obj.isSnowflake(onUserPress)) {
            tmp6 = closure_1_7;
            obj1 = { query: null, onPressRow: null };
            obj1.query = onUserPress;
            obj1.onPressRow = function onPressRow() {
              const obj = { user };
              return closure_3(obj);
            };
            tmp3Result = tmp3(closure_1_7, obj1);
          } else {
            obj4 = { style: null, lightSource: null, darkSource: null, title: null, body: null };
            obj4.style = { paddingTop: 80 };
            tmp4 = onActionSheetDismiss;
            EmptyState = tmp(tmp2[8]).EmptyState;
            obj4.lightSource = onActionSheetDismiss(tmp2[9]);
            obj4.darkSource = onActionSheetDismiss(tmp2[9]);
            intl = tmp(tmp2[10]).intl;
            obj4.title = intl.string(tmp(tmp2[10]).t.vYocDz);
            intl2 = tmp(tmp2[10]).intl;
            obj4.body = intl2.string(tmp(tmp2[10]).t.V6nAfF);
            tmp3Result = tmp3(EmptyState, obj4);
          }
          return tmp3Result;
        }
      }
      tmp12[0] = id;
      tmp12[1] = guild_id;
      tmp12[3] = tmp5;
      tmp12[6] = tmp4;
      tmp10Result = tmp10(tmp11(10746), tmp12);
    }
    cResult[8] = channel;
    cResult[9] = id;
    cResult[10] = guild_id;
    class P {
      constructor(user) {
        const obj = { user: user.user };
        onUserPress(obj);
        closure_2();
      }
    }
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = tmp10Result;
  }
  class P {
    constructor(user) {
      const obj = { user: user.user };
      onUserPress(obj);
      closure_2();
    }
  }
  cResult[2] = tmp3;
  cResult[3] = onUserPress;
  cResult[4] = P;
  tmp4 = P;
}) : (function AppLauncherUserListActionSheet(onUserPress) {
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
    let obj = onUserPress(callback[7]);
    if (obj.isSnowflake(query)) {
      const obj2 = {
        query,
        onPressRow() {
            const obj = { user };
            return callback1(obj);
          }
      };
      tmp3Result = tmp3(closure_1_7, obj2);
    } else {
      const obj3 = { style: { paddingTop: 80 }, lightSource: onActionSheetDismiss(callback[9]), darkSource: onActionSheetDismiss(callback[9]), title: intl.string(onUserPress(callback[10]).t.vYocDz), body: intl2.string(onUserPress(callback[10]).t.V6nAfF) };
      const EmptyState = tmp(tmp2[8]).EmptyState;
      intl = tmp(tmp2[10]).intl;
      intl2 = tmp(tmp2[10]).intl;
      tmp3Result = tmp3(EmptyState, obj3);
    }
    return tmp3Result;
  }, items2);
  let obj = { onDismiss: onActionSheetDismiss, option, contentContainerStyles: { paddingHorizontal: 0 }, children: tmp4Result };
  const AppLauncherCommandOptionActionSheet = onUserPress(callback[13]).AppLauncherCommandOptionActionSheet;
  if (channel.isPrivate()) {
    let obj2 = { channelId: id, disableStickySections: true, hideTitle: true, headerShown: false, inActionSheet: true, onUserPress: callback1, opensUserProfileOnUserPress: false };
    tmp4Result = tmp4(tmp6(tmp5[11]), obj2);
  } else {
    let obj3 = { channelId: id, guildId: guild_id, searchable: true, searchableEmptyState: callback2, headerShown: false, opensUserProfileOnUserPress: false, onUserPress: callback1, inActionSheet: true, disableThemedGradient: true };
    tmp4Result = tmp4(tmp6(tmp5[12]), obj3);
  }
  return jsx(AppLauncherCommandOptionActionSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyStateWithSnowflakeQuery(arg0) {
  let onPressRow;
  let query;
  let tmp5;
  let tmp6;
  const obj = onPressRow(576);
  const cResult = obj.c(8);
  const tmp = onPressRow;
  ({ query, onPressRow } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== query) {
    const items = [query];
    cResult[0] = query;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onPressRow) {
    const fn = function o(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    };
    cResult[2] = onPressRow;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4.emptyState) {
    if (cResult[5] === tmp5) {
      let tmp7;
      if (cResult[6] === tmp6) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(tmp(11851).AppLauncherList, { contentContainerStyle: tmp4.emptyState, data: tmp5, renderItem: tmp6, keyboardShouldPersistTaps: "always", keyboardDismissMode: "on-drag" });
  cResult[4] = tmp4.emptyState;
  cResult[5] = tmp5;
  cResult[6] = tmp6;
  cResult[7] = tmp8;
  tmp7 = tmp8;
}) : (function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const query = onPressRow.query;
  const items = [query];
  closure_6();
  return jsx(onPressRow(11851).AppLauncherList, {
    contentContainerStyle: closure_6().emptyState,
    data: items,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  });
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx");

export default tmp2;
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";
