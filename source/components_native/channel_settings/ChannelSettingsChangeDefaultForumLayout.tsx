// Module ID: 15412
// Function ID: 117632
// Name: ChannelSettingsChangeDefaultForumLayout
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15412 (ChannelSettingsChangeDefaultForumLayout)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

class ChannelSettingsChangeDefaultForumLayout {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    tmp = closure_9();
    tmp2 = closure_3(importAll.useState(channel.defaultForumLayout), 2);
    first = tmp2[0];
    closure_1 = tmp2[1];
    items = [];
    items[0] = channel.id;
    obj = { style: tmp.container };
    callback = importAll.useCallback((defaultForumLayout) => {
      callback(defaultForumLayout);
      let obj = callback(closure_2[7]);
      obj = { defaultForumLayout };
      obj.updateChannel(obj);
      obj = { defaultForumLayout };
      callback(closure_2[7]).saveChannel(channel.id, obj);
    }, items);
    tmp5 = jsxs;
    tmp6 = View;
    tmp7 = jsxs;
    obj = {};
    intl = require("__exportStarResult1").intl;
    obj.title = intl.string(require("__exportStarResult1").t.mFMDSq);
    LIST = first;
    if (null == first) {
      tmp8 = arg1;
      tmp9 = dependencyMap;
      num = 10;
      LIST = require("__exportStarResult1").ForumLayout.LIST;
    }
    obj.defaultValue = LIST;
    obj.onChange = callback;
    obj.hasIcons = true;
    obj1 = {};
    obj1.icon = jsx(require("__exportStarResult1").GridSquareIcon, {});
    intl2 = require("__exportStarResult1").intl;
    obj1.label = intl2.string(require("__exportStarResult1").t.U+rQfW);
    obj1.value = require("__exportStarResult1").ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(require("__exportStarResult1").TableRadioRow, obj1);
    obj2 = {};
    obj2.icon = jsx(require("__exportStarResult1").ListViewIcon, {});
    intl3 = require("__exportStarResult1").intl;
    obj2.label = intl3.string(require("__exportStarResult1").t.tuHPRX);
    obj2.value = require("__exportStarResult1").ForumLayout.LIST;
    items1[1] = jsx(require("__exportStarResult1").TableRadioRow, obj2);
    obj.children = items1;
    items2 = [, , , ];
    items2[0] = tmp7(require("__exportStarResult1").TableRadioGroup, obj);
    obj3 = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>" };
    obj3.style = tmp.description;
    intl4 = require("__exportStarResult1").intl;
    obj3.children = intl4.string(require("__exportStarResult1").t.MbX5Hu);
    items2[1] = jsx(require("__exportStarResult1").Text, obj3);
    obj4 = {};
    intl5 = require("__exportStarResult1").intl;
    obj4.title = intl5.string(require("__exportStarResult1").t.e4oMl4);
    items2[2] = jsx(require("__exportStarResult1").TableRowGroupTitle, obj4);
    tmp10 = jsx;
    obj5 = { style: tmp.thumbnailImagePortrait };
    tmp11 = require("__exportStarResult1");
    if (first === require("__exportStarResult1").ForumLayout.GRID) {
      tmp15 = closure_1;
      tmp16 = dependencyMap;
      num3 = 17;
      tmp14 = require("__exportStarResult1");
    } else {
      tmp12 = closure_1;
      tmp13 = dependencyMap;
      num2 = 18;
      tmp14 = require("__exportStarResult1");
    }
    obj5.source = tmp14;
    items2[3] = tmp10(tmp11, obj5);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { flex: 1, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("__exportStarResult1").space.PX_16, paddingTop: require("__exportStarResult1").space.PX_16 };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.description = { paddingTop: require("__exportStarResult1").space.PX_8, paddingBottom: require("__exportStarResult1").space.PX_16 };
__exportStarResult1.thumbnailImagePortrait = { alignSelf: "center" };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  const arg1 = channelId.channelId;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = callback2(ChannelSettingsChangeDefaultForumLayout, obj);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };
