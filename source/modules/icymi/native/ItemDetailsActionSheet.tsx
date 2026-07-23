// Module ID: 15185
// Function ID: 115620
// Name: ItemDetailsActionSheet
// Dependencies: [31, 27, 1348, 1838, 8306, 33, 4130, 689, 566, 4320, 5089, 5515, 1273, 8320, 5500, 10349, 15186, 5503, 5165, 2]
// Exports: default

// Module 15185 (ItemDetailsActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.divider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(closure_1));
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getGuild(closure_0));
  let obj2 = require(566) /* initialize */;
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != closure_2) {
      dehydratedItem = outer1_6.getDehydratedItem(closure_2);
    }
    return dehydratedItem;
  });
  const tmp3 = importDefault(4320)(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: stateFromStores1, size: require(5515) /* makeSizeStyle */.GuildIconSizes.LARGE };
    let tmp6 = callback(importDefault(5515), obj);
    const tmp13 = importDefault(5515);
  } else if (null != stateFromStores) {
    obj = { size: require(1273) /* Button */.AvatarSizes.LARGE, channel: stateFromStores };
    tmp6 = callback(require(1273) /* Button */.Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp5 = importDefault(5089)("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    let obj5 = require(8320) /* generateHydrationId */;
    result = obj5.isChannelCustomScoreEligible(stateFromStores);
  }
  obj1 = { showGradient: true, startExpanded: true };
  obj2 = { icon: tmp6, title: tmp3 };
  let name;
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj2.subtitle = str;
  obj1.header = callback(require(10349) /* ActionSheetIconHeader */.ActionSheetIconHeader, obj2);
  let tmp22 = result;
  if (result) {
    const obj3 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp22 = callback(require(15186) /* customScoreToIndex */.ChannelScoreSettings, obj3);
  }
  const items3 = [tmp22, , ];
  let tmp27Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp27Result) {
    const obj4 = {};
    if (result) {
      obj5 = { style: tmp15.divider };
      result = callback(View, obj5);
    }
    const items4 = [result, ];
    const obj6 = { guild: stateFromStores1 };
    items4[1] = callback(require(15186) /* customScoreToIndex */.GuildScoreSettings, obj6);
    obj4.children = items4;
    tmp27Result = closure_9(closure_8, obj4);
    const tmp27 = closure_9;
    const tmp28 = closure_8;
  }
  items3[1] = tmp27Result;
  let tmp34 = null;
  if (null != stateFromStores2) {
    tmp34 = null;
    if (tmp5) {
      const obj7 = { title: "Debug details", hasIcons: false };
      const obj8 = { label: `Total Score: ${tmp4.score}` };
      const _JSON = JSON;
      obj8.subLabel = JSON.stringify(stateFromStores2.score_components);
      obj7.children = callback(require(5165) /* TableRowInner */.TableRow, obj8);
      tmp34 = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj7);
    }
  }
  items3[2] = tmp34;
  obj1.children = items3;
  return closure_9(require(5500) /* ActionSheet */.ActionSheet, obj1);
};
