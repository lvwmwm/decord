// Module ID: 15587
// Function ID: 120210
// Name: ChannelSettingsChangeDefaultForumLayout
// Dependencies: [57, 31, 27, 1348, 33, 4130, 689, 7685, 7654, 1212, 1358, 7653, 15550, 9203, 4126, 5501, 5085, 15588, 15589, 566, 2]
// Exports: default

// Module 15587 (ChannelSettingsChangeDefaultForumLayout)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
class ChannelSettingsChangeDefaultForumLayout {
  constructor(arg0) {
    channel = global.channel;
    tmp = c9();
    tmp2 = _slicedToArray(result.useState(channel.defaultForumLayout), 2);
    first = tmp2[0];
    c1 = tmp2[1];
    items = [];
    items[0] = channel.id;
    obj = { style: tmp.container };
    callback = result.useCallback((defaultForumLayout) => {
      callback(defaultForumLayout);
      let obj = callback(outer1_2[7]);
      obj = { defaultForumLayout };
      obj.updateChannel(obj);
      obj = { defaultForumLayout };
      callback(outer1_2[7]).saveChannel(channel.id, obj);
    }, items);
    tmp5 = jsxs;
    tmp6 = View;
    tmp7 = jsxs;
    obj = {};
    intl = require("getSystemLocale").intl;
    obj.title = intl.string(require("getSystemLocale").t.mFMDSq);
    LIST = first;
    if (null == first) {
      tmp8 = channel;
      tmp9 = closure_2;
      num = 10;
      LIST = require("set").ForumLayout.LIST;
    }
    obj.defaultValue = LIST;
    obj.onChange = callback;
    obj.hasIcons = true;
    obj1 = {};
    obj1.icon = jsx(require("GridSquareIcon").GridSquareIcon, {});
    intl2 = require("getSystemLocale").intl;
    obj1.label = intl2.string(require("getSystemLocale").t["U+rQfW"]);
    obj1.value = require("set").ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(require("TableRadioRow").TableRadioRow, obj1);
    obj2 = {};
    obj2.icon = jsx(require("ListViewIcon").ListViewIcon, {});
    intl3 = require("getSystemLocale").intl;
    obj2.label = intl3.string(require("getSystemLocale").t.tuHPRX);
    obj2.value = require("set").ForumLayout.LIST;
    items1[1] = jsx(require("TableRadioRow").TableRadioRow, obj2);
    obj.children = items1;
    items2 = [, , , ];
    items2[0] = tmp7(require("context").TableRadioGroup, obj);
    obj3 = { style: null, variant: "text-sm/medium", color: "text-muted" };
    obj3.style = tmp.description;
    intl4 = require("getSystemLocale").intl;
    obj3.children = intl4.string(require("getSystemLocale").t.MbX5Hu);
    items2[1] = jsx(require("Text").Text, obj3);
    obj4 = {};
    intl5 = require("getSystemLocale").intl;
    obj4.title = intl5.string(require("getSystemLocale").t.e4oMl4);
    items2[2] = jsx(require("TableRowGroupTitle").TableRowGroupTitle, obj4);
    tmp10 = jsx;
    obj5 = { style: tmp.thumbnailImagePortrait };
    tmp11 = require("preload");
    if (first === require("set").ForumLayout.GRID) {
      tmp15 = c1;
      tmp16 = closure_2;
      num3 = 17;
      tmp14 = require("registerAsset");
    } else {
      tmp12 = c1;
      tmp13 = closure_2;
      num2 = 18;
      tmp14 = require("registerAsset");
    }
    obj5.source = tmp14;
    items2[3] = tmp10(tmp11, obj5);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.thumbnailImagePortrait = { alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = callback2(ChannelSettingsChangeDefaultForumLayout, obj);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };
