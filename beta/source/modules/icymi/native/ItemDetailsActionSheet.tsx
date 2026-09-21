// Module ID: 16800
// Function ID: 16801
// Name: ItemDetailsActionSheet
// Dependencies: [19, 17, 2045, 2067, 8611, 21, 4758, 580, 558, 568, 504, 4911, 5841, 5799, 1181, 8626, 11301, 16801, 5903, 5822, 7449, 2]

// Module 16800 (ItemDetailsActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 580 */;
import useChannelNameDefault from "useChannelName" /* 4911 */;
import useDesignToggleDefault from "useDesignToggle" /* 5841 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import ActionSheetIconHeader from "ActionSheetIconHeader" /* 11301 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import ICYMIStore from "ICYMIStore" /* 8611 */;

const GuildIconDefault = tmp5(5799);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(id[9]).c(37);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  id = guildId.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(id[9]);
  const stateFromStores = guildId(id[10]).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function f() {
      return GuildStore.getGuild(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = guildId(id[10]);
  const stateFromStores1 = guildId(id[10]).useStateFromStores(tmp8, tmp10);
  const tmp13 = channelId(id[11])(stateFromStores, true);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ICYMIStore];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== id) {
    class C {
      constructor() {
        dehydratedItem = null;
        if (null != id) {
          tmp3 = closure_6;
          dehydratedItem = closure_6.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    cResult[7] = id;
    cResult[8] = C;
    const tmp16 = C;
  } else {
    class C {
      constructor() {
        dehydratedItem = null;
        if (null != id) {
          tmp3 = closure_6;
          dehydratedItem = closure_6.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
  }
  const tmp12 = channelId;
  const tmpResult3 = guildId(id[10]);
  const stateFromStores2 = guildId(id[10]).useStateFromStores(tmp14, tmp16);
  tmp12(id[12])("show_icymi_debug_scores");
  if (null != stateFromStores1) {
    class C {
      constructor() {
        dehydratedItem = null;
        if (null != id) {
          tmp3 = closure_6;
          dehydratedItem = closure_6.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
  } else {
    class C {
      constructor() {
        dehydratedItem = null;
        if (null != id) {
          tmp3 = closure_6;
          dehydratedItem = closure_6.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    if (null != stateFromStores) {
      class C {
        constructor() {
          dehydratedItem = null;
          if (null != id) {
            tmp3 = closure_6;
            dehydratedItem = closure_6.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
    }
    closure_10();
    if (cResult[13] === stateFromStores) {
      class C {
        constructor() {
          dehydratedItem = null;
          if (null != id) {
            tmp3 = closure_6;
            dehydratedItem = closure_6.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
      if (stateFromStores1 != null) {
        class C {
          constructor() {
            dehydratedItem = null;
            if (null != id) {
              tmp3 = closure_6;
              dehydratedItem = closure_6.getDehydratedItem(tmp);
            }
            return dehydratedItem;
          }
        }
      }
      if (undefined == null) {
        class C {
          constructor() {
            dehydratedItem = null;
            if (null != id) {
              tmp3 = closure_6;
              dehydratedItem = closure_6.getDehydratedItem(tmp);
            }
            return dehydratedItem;
          }
        }
      }
      if (cResult[16] === tmp13) {
        class C {
          constructor() {
            dehydratedItem = null;
            if (null != id) {
              tmp3 = closure_6;
              dehydratedItem = closure_6.getDehydratedItem(tmp);
            }
            return dehydratedItem;
          }
        }
      }
      const obj2 = { icon: tmp19, title: tmp13, subtitle: undefined };
      const tmp30 = closure_7(tmp(tmp2[16]).ActionSheetIconHeader, obj2);
      cResult[16] = tmp13;
      cResult[17] = tmp19;
      cResult[18] = undefined;
      cResult[19] = tmp30;
    }
    let result = null != stateFromStores && null != stateFromStores1;
    if (result) {
      class C {
        constructor() {
          dehydratedItem = null;
          if (null != id) {
            tmp3 = closure_6;
            dehydratedItem = closure_6.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
      result = obj5.isChannelCustomScoreEligible(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = stateFromStores1;
    cResult[15] = result;
  }
}) : ((arg0) => {
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
    const obj4 = { guild: stateFromStores1, size: tmp(5799).GuildIconSizes.LARGE };
    let tmp9 = closure_7(GuildIconDefault, obj4);
    const tmp5Result = GuildIconDefault;
  } else if (null != stateFromStores) {
    const obj5 = { size: tmp(1181).AvatarSizes.LARGE, channel: stateFromStores };
    tmp9 = closure_7(tmp(1181).Avatar, obj5);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = tmp(8626).isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = tmp(8626);
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
    tmp16Result = tmp16(tmp(16801).ChannelScoreSettings, obj8);
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
    items4[1] = tmp16(tmp(16801).GuildScoreSettings, obj11);
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
      tmp16Result2 = tmp16(tmp(5903).TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  obj7.children = items3;
  return closure_9(ActionSheet.ActionSheet, obj7);
});
