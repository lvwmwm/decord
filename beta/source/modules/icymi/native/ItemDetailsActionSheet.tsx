// Module ID: 16797
// Function ID: 16798
// Name: ItemDetailsActionSheet
// Dependencies: [19, 17, 2041, 2063, 8606, 21, 4756, 576, 504, 4909, 5843, 5801, 1177, 8621, 7442, 11267, 16798, 5904, 5822, 2]
// Exports: default

// Module 16797 (ItemDetailsActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4909 */;
import useDesignToggleDefault from "useDesignToggle" /* 5843 */;
import ActionSheet from "ActionSheet" /* 7442 */;
import ActionSheetIconHeader from "ActionSheetIconHeader" /* 11267 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import ICYMIStore from "ICYMIStore" /* 8606 */;

const GuildIconDefault = tmp5(5801);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  const items1 = [GuildStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const tmp6 = useChannelNameDefault(stateFromStores, true);
  const items2 = [ICYMIStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != dependencyMap) {
      dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  if (null != stateFromStores1) {
    const obj4 = { guild: stateFromStores1, size: tmp(5801).GuildIconSizes.LARGE };
    let tmp9 = closure_7(GuildIconDefault, obj4);
    const tmp5Result = GuildIconDefault;
  } else if (null != stateFromStores) {
    const obj5 = { size: tmp(1177).AvatarSizes.LARGE, channel: stateFromStores };
    tmp9 = closure_7(tmp(1177).Avatar, obj5);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = tmp(8621).isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = tmp(8621);
  }
  const obj6 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const obj7 = { showGradient: true, startExpanded: true, header: closure_7(ActionSheetIconHeader.ActionSheetIconHeader, obj6), children: null };
  obj6.subtitle = str;
  let tmp16Result = result;
  if (result) {
    const obj8 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp16Result = tmp16(tmp(16798).ChannelScoreSettings, obj8);
  }
  const items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj9 = { style: tmp13.divider };
      result = tmp16(View, obj9);
    }
    const obj10 = { children: null };
    const items4 = [result, ];
    const obj11 = { guild: stateFromStores1 };
    items4[1] = tmp16(tmp(16798).GuildScoreSettings, obj11);
    obj10.children = items4;
    tmp15Result = tmp15(closure_8, obj10);
  }
  items3[1] = tmp15Result;
  let tmp16Result2 = null;
  if (null != stateFromStores2) {
    tmp16Result2 = null;
    if (tmp8) {
      const obj12 = { title: "Debug details", hasIcons: false, children: null };
      const obj13 = { label: `Total Score: ${tmp7.score}`, subLabel: null };
      const _JSON = JSON;
      obj13.subLabel = JSON.stringify(stateFromStores2.score_components);
      obj12.children = tmp16(tmp(5822).TableRow, obj13);
      tmp16Result2 = tmp16(tmp(5904).TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  obj7.children = items3;
  return closure_9(ActionSheet.ActionSheet, obj7);
};
