// Module ID: 17910
// Function ID: 17911
// Name: GuildRoleSubscriptionsRow
// Dependencies: [19, 1084, 4863, 11992, 21, 5004, 587, 1111, 5246, 17911, 1999, 13507, 1125, 13974, 2]
// Exports: default

// Module 17910 (GuildRoleSubscriptionsRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ChannelConstants from "ChannelConstants" /* 4863 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11992 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13507 */;
import AssetRegistryDefault from "AssetRegistry" /* 13974 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  let DEFAULT;
  let c1;
  let intl2;
  let tmp6;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = react.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId: id,
      onClose() {
        const obj = c1(dependencyMap[8]);
        obj.hideActionSheet(closure_1_1);
      }
    };
    obj.openLazy(asyncRequire(17911, dependencyMap.paths), c1, obj2);
  }, items1);
  const ChannelModes = id(13507).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  BaseChannelItemDefault;
  const intl = tmp6(1125).intl;
  let obj2 = { name: intl2.string(tmp6(1125).t["KzCF/6"]), mode: DEFAULT };
  const BaseChannelName = tmp6(13507).BaseChannelName;
  intl2 = tmp6(1125).intl;
  ({ disableColor: true, mode: DEFAULT, source: AssetRegistryDefault });
  const BaseChannelIcon = tmp6(13507).BaseChannelIcon;
  return <tmp8 onPress={callback} onLongPress={callback1} style={tmp.container} accessible accessibilityLabel={intl.string(tmp6(1125).t["KzCF/6"])} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
