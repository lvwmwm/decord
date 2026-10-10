// Module ID: 16618
// Function ID: 16619
// Name: GuildRoleSubscriptionsRow
// Dependencies: [19, 1085, 2072, 11758, 21, 5092, 587, 1112, 5056, 16619, 2000, 12085, 1126, 12559, 2]
// Exports: default

// Module 16618 (GuildRoleSubscriptionsRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11758 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12085 */;
import AssetRegistryDefault from "AssetRegistry" /* 12559 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
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
    obj.openLazy(asyncRequire(16619, dependencyMap.paths), c1, obj2);
  }, items1);
  const ChannelModes = id(12085).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  BaseChannelItemDefault;
  const intl = tmp6(1126).intl;
  let obj2 = { name: intl2.string(tmp6(1126).t["KzCF/6"]), mode: DEFAULT };
  const BaseChannelName = tmp6(12085).BaseChannelName;
  intl2 = tmp6(1126).intl;
  ({ disableColor: true, mode: DEFAULT, source: AssetRegistryDefault });
  const BaseChannelIcon = tmp6(12085).BaseChannelIcon;
  return <tmp8 onPress={callback} onLongPress={callback1} style={tmp.container} accessible accessibilityLabel={intl.string(tmp6(1126).t["KzCF/6"])} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
