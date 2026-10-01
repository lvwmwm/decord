// Module ID: 16224
// Function ID: 16225
// Name: MembersFilterActionSheet
// Dependencies: [19, 2102, 9049, 21, 4836, 576, 504, 9048, 4800, 6000, 11316, 6618, 6570, 1115, 6045, 2]
// Exports: default

// Module 16224 (MembersFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import createStyles from "createStyles" /* 4836 */;
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
