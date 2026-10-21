// Module ID: 15106
// Function ID: 15107
// Name: GameOrganizationInviteList
// Dependencies: [19, 21, 4966, 587, 558, 576, 5575, 15107, 1128, 1202, 7199, 2]

// Module 15106 (GameOrganizationInviteList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow" /* 15107 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function keyExtractor(id) {
  return id.id;
}
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 }, emptyState: { backgroundColor: "transparent" } };
  ({ paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInviteList(users) {
  let content;
  let emptyState;
  let first;
  let onInvite;
  const tmp = users;
  const obj = users(onInvite[5]);
  const cResult = obj.c(14);
  users = users.users;
  const getSendState = users.getSendState;
  onInvite = users.onInvite;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isKeyboardAwareOnAndroid: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_5(getSendState(onInvite[6])(first).insets.bottom);
  if (cResult[1] === getSendState) {
    if (cResult[2] === onInvite) {
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp10;
      if (cResult[3] === users.length) {
        tmp6 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { disabled: true };
        cResult[5] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[5];
      }
      const _Symbol2 = Symbol;
      ({ content, emptyState } = tmp5);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(tmp(onInvite[8]).t.ojoWgX);
        cResult[6] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] !== tmp5.emptyState) {
        const tmp12 = jsx(tmp(onInvite[9]).EmptyState, { style: emptyState, title: tmp8 });
        cResult[7] = tmp5.emptyState;
        cResult[8] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[8];
      }
      if (cResult[9] === tmp6) {
        if (cResult[10] === tmp5.content) {
          if (cResult[11] === tmp10) {
            let tmp13;
            if (cResult[12] === users) {
              tmp13 = cResult[13];
            }
            return tmp13;
          }
        }
      }
      const tmp16 = jsx(tmp(onInvite[10]).BottomSheetFlashList, { maintainVisibleContentPosition: tmp7, contentContainerStyle: content, bounces: false, data: users, renderItem: tmp6, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent: tmp10 });
      class S {
        constructor(arg0) {
          ({ item, index } = users);
          obj = { user: item, start: 0 === index, end: index === users.length - 1, sendState: null, onInvite: null };
          tmp = closure_1(closure_2[7]);
          obj.sendState = getSendState(item.id);
          obj.onInvite = onInvite;
          return jsx(tmp, obj);
        }
      }
      cResult[10] = tmp5.content;
      cResult[11] = tmp10;
      cResult[12] = users;
      cResult[13] = tmp16;
      tmp13 = tmp16;
    }
  }
  class S {
    constructor(arg0) {
      ({ item, index } = users);
      obj = { user: item, start: 0 === index, end: index === users.length - 1, sendState: null, onInvite: null };
      tmp = closure_1(closure_2[7]);
      obj.sendState = getSendState(item.id);
      obj.onInvite = onInvite;
      return jsx(tmp, obj);
    }
  }
  cResult[1] = getSendState;
  cResult[2] = onInvite;
  cResult[3] = users.length;
  cResult[4] = S;
  tmp6 = S;
}) : (function GameOrganizationInviteList(users) {
  let intl;
  users = users.users;
  const getSendState = users.getSendState;
  const onInvite = users.onInvite;
  const tmp = closure_5(getSendState(onInvite[6])({ isKeyboardAwareOnAndroid: false }).insets.bottom);
  const items = [users.length, getSendState, onInvite];
  const callback = react.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    GameOrganizationInviteRowDefault;
    return <tmp user={item} start={0 === index} end={index === users.length - 1} sendState={getSendState(item.id)} onInvite={onInvite} />;
  }, items);
  const BottomSheetFlashList = users(onInvite[10]).BottomSheetFlashList;
  ({ style: tmp.emptyState, title: intl.string(users(onInvite[8]).t.ojoWgX) });
  const EmptyState = users(onInvite[9]).EmptyState;
  intl = users(onInvite[8]).intl;
  return <BottomSheetFlashList maintainVisibleContentPosition={{ disabled: true }} contentContainerStyle={tmp.content} bounces={false} data={users} renderItem={callback} keyExtractor={keyExtractor} keyboardShouldPersistTaps="always" ListEmptyComponent={null} />;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteList.tsx");

export default tmp2;
