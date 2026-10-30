// Module ID: 15747
// Function ID: 15748
// Name: GameOrganizationInviteList
// Dependencies: [19, 21, 5009, 575, 5602, 15748, 7288, 1188, 1114, 2]
// Exports: default

// Module 15747 (GameOrganizationInviteList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow" /* 15748 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteList.tsx");

export default function GameOrganizationInviteList(users) {
  let intl;
  users = users.users;
  const getSendState = users.getSendState;
  const onInvite = users.onInvite;
  const tmp = closure_5(getSendState(onInvite[4])({ isKeyboardAwareOnAndroid: false }).insets.bottom);
  const items = [users.length, getSendState, onInvite];
  const callback = react.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    GameOrganizationInviteRowDefault;
    return <tmp user={item} start={0 === index} end={index === users.length - 1} sendState={getSendState(item.id)} onInvite={onInvite} />;
  }, items);
  const BottomSheetFlashList = users(onInvite[6]).BottomSheetFlashList;
  ({ style: tmp.emptyState, title: intl.string(users(onInvite[8]).t.ojoWgX) });
  const EmptyState = users(onInvite[7]).EmptyState;
  intl = users(onInvite[8]).intl;
  return <BottomSheetFlashList maintainVisibleContentPosition={{ disabled: true }} contentContainerStyle={tmp.content} bounces={false} data={users} renderItem={callback} keyExtractor={keyExtractor} keyboardShouldPersistTaps="always" ListEmptyComponent={null} />;
};
