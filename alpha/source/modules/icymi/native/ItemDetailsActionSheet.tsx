// Module ID: 18523
// Function ID: 18524
// Name: ItemDetailsActionSheet
// Dependencies: [19, 17, 4863, 4885, 8906, 21, 5014, 575, 504, 5652, 7000, 6957, 1187, 8923, 7366, 11144, 18524, 7060, 6975, 2]
// Exports: default

// Module 18523 (ItemDetailsActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import useDesignToggleDefault from "useDesignToggle" /* 7000 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import ICYMIStore from "ICYMIStore" /* 8906 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
let tmp5;
const native = tmp(1187);
const GuildIcon = tmp(6957);
const GuildIconDefault = tmp5(6957);
const TableRow2 = tmp(6975);
const TableRowGroup2 = tmp(7060);
const ActionSheet2 = tmp(7366);
const ICYMIUtils = tmp(8923);
const ActionSheetIconHeader2 = tmp(11144);
const ICYMIContentSettingControl = tmp(18524);
const View = react_native.View;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { divider: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  let TableRow;
  let items3;
  let items4;
  let obj13;
  let str;
  let tmp9;
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  const tmp = require;
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  const items1 = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const items2 = [ICYMIStore];
  const tmp6 = useChannelNameDefault(stateFromStores, true);
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != dependencyMap) {
      dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (null != stateFromStores1) {
    const obj4 = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.LARGE };
    const tmp5Result = GuildIconDefault;
    tmp9 = closure_7(tmp5Result, obj4);
  } else if (null != stateFromStores) {
    const obj5 = { size: native.AvatarSizes.LARGE, channel: stateFromStores };
    const Avatar = native.Avatar;
    tmp9 = closure_7(Avatar, obj5);
  }
  let result = null != stateFromStores;
  const tmp13 = closure_10();
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    const tmpResult = ICYMIUtils;
    result = tmpResult.isChannelCustomScoreEligible(stateFromStores);
  }
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj6 = { icon: tmp9, title: tmp6, subtitle: str };
  str = undefined;
  const ActionSheetIconHeader = ActionSheetIconHeader2.ActionSheetIconHeader;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp16Result = result;
  const obj7 = { showGradient: true, startExpanded: true, header: closure_7(ActionSheetIconHeader, obj6), children: items3 };
  if (tmp16Result) {
    const obj8 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp16Result = tmp16(ICYMIContentSettingControl.ChannelScoreSettings, obj8);
  }
  items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    const tmp19 = closure_8;
    if (result) {
      const obj9 = { style: tmp13.divider };
      result = tmp16(View, obj9);
    }
    const obj10 = { children: items4 };
    items4 = [result, ];
    const obj11 = { guild: stateFromStores1 };
    items4[1] = closure_7(ICYMIContentSettingControl.GuildScoreSettings, obj11);
    tmp15Result = tmp15(tmp19, obj10);
  }
  items3[1] = tmp15Result;
  let tmp16Result2 = null;
  if (null != stateFromStores2) {
    tmp16Result2 = null;
    if (tmp8) {
      const obj12 = { title: "Debug details", hasIcons: false, children: closure_7(TableRow, obj13) };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const _JSON = JSON;
      obj13 = { label: `Total Score: ${tmp7.score}`, subLabel: JSON.stringify(stateFromStores2.score_components) };
      TableRow = TableRow2.TableRow;
      tmp16Result2 = tmp16(TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  return closure_9(ActionSheet, obj7);
};
