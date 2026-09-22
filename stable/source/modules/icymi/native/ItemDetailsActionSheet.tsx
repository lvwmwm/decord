// Module ID: 16555
// Function ID: 16556
// Name: ItemDetailsActionSheet
// Dependencies: [19, 17, 1957, 1979, 8453, 21, 4636, 576, 504, 4789, 5707, 5665, 1176, 8468, 7300, 11136, 16556, 5768, 5686, 2]
// Exports: default

// Module 16555 (ItemDetailsActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4789 */;
import useDesignToggleDefault from "useDesignToggle" /* 5707 */;
import ActionSheet from "ActionSheet" /* 7300 */;
import ActionSheetIconHeader from "ActionSheetIconHeader" /* 11136 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ICYMIStore from "ICYMIStore" /* 8453 */;

const GuildIconDefault = tmp5(5665);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
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
    const obj4 = { guild: stateFromStores1, size: tmp(5665).GuildIconSizes.LARGE };
    let tmp9 = closure_7(GuildIconDefault, obj4);
    const tmp5Result = GuildIconDefault;
  } else if (null != stateFromStores) {
    const obj5 = { size: tmp(1176).AvatarSizes.LARGE, channel: stateFromStores };
    tmp9 = closure_7(tmp(1176).Avatar, obj5);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = tmp(8468).isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = tmp(8468);
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
    tmp16Result = tmp16(tmp(16556).ChannelScoreSettings, obj8);
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
    items4[1] = tmp16(tmp(16556).GuildScoreSettings, obj11);
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
      obj12.children = tmp16(tmp(5686).TableRow, obj13);
      tmp16Result2 = tmp16(tmp(5768).TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  obj7.children = items3;
  return closure_9(ActionSheet.ActionSheet, obj7);
};
