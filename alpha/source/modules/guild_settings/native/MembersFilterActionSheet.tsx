// Module ID: 18914
// Function ID: 18915
// Name: MembersFilterActionSheet
// Dependencies: [19, 5047, 9220, 21, 5141, 575, 504, 9219, 5382, 7202, 13485, 7502, 7457, 1113, 7430, 2]
// Exports: default

// Module 18914 (MembersFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9219 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9220 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let item;

let obj2;
const jsx = Fragment.jsx;
let obj = { listView: obj2 };
obj2 = { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  let intl;
  let selectedRoleId;
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    const tmp = GuildSettingsStore;
    selectedRoleId = GuildSettingsStore.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let callback;
  const tmp2 = closure_7();
  let obj = require("get initialized");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(require.id));
  const mapped = stateFromStores.map((id) => {
    const obj = { value: id.id };
    const merged = Object.assign(id);
    return obj;
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  const items1 = [onFilterRoleId, selectedRoleId];
  callback = callback.useCallback((roleId) => {
    if (roleId !== selectedRoleId) {
      if (null != onFilterRoleId) {
        tmp(roleId);
      } else {
        const obj = GuildSettingsActionCreatorsDefault;
        const role = obj.selectRole(roleId);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet("MembersFilter");
    }
  }, items1);
  const items2 = [callback, selectedRoleId];
  const callback1 = callback.useCallback((item) => {
    item = item.item;
    const TableRadioRow = require("TableRadioRow").TableRadioRow;
    return <TableRadioRow value={item.id} label={null} legacyCompat_onPress={function legacyCompat_onPress() {
      return callback(item.id);
    }} legacyCompat_selected={item.id === selectedRoleId} />;
  }, items2);
  const ActionSheet = require("ActionSheet").ActionSheet;
  ({ title: intl.string(require("intl").t.pEasFX) });
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  return <ActionSheet scrollable header={null}>{null}</ActionSheet>;
};
