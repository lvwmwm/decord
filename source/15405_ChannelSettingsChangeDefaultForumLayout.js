// Module ID: 15405
// Function ID: 117608
// Name: ChannelSettingsChangeDefaultForumLayout
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15405 (ChannelSettingsChangeDefaultForumLayout)
import closure_3 from "result";
import closure_4 from "result";
import { View } from "result";
import closure_6 from "result";
import result from "result";
import result from "result";
import result from "result";

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
    intl = require("result").intl;
    obj.title = intl.string(require("result").t.mFMDSq);
    LIST = first;
    if (null == first) {
      tmp8 = arg1;
      tmp9 = dependencyMap;
      num = 10;
      LIST = require("result").ForumLayout.LIST;
    }
    obj.defaultValue = LIST;
    obj.onChange = callback;
    obj.hasIcons = true;
    obj1 = {};
    obj1.icon = jsx(require("result").GridSquareIcon, {});
    intl2 = require("result").intl;
    obj1.label = intl2.string(require("result").t.U+rQfW);
    obj1.value = require("result").ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(require("result").TableRadioRow, obj1);
    obj2 = {};
    obj2.icon = jsx(require("result").ListViewIcon, {});
    intl3 = require("result").intl;
    obj2.label = intl3.string(require("result").t.tuHPRX);
    obj2.value = require("result").ForumLayout.LIST;
    items1[1] = jsx(require("result").TableRadioRow, obj2);
    obj.children = items1;
    items2 = [, , , ];
    items2[0] = tmp7(require("result").TableRadioGroup, obj);
    obj3 = { Promise: null, marginTop: null, flags: null };
    obj3.style = tmp.description;
    intl4 = require("result").intl;
    obj3.children = intl4.string(require("result").t.MbX5Hu);
    items2[1] = jsx(require("result").Text, obj3);
    obj4 = {};
    intl5 = require("result").intl;
    obj4.title = intl5.string(require("result").t.e4oMl4);
    items2[2] = jsx(require("result").TableRowGroupTitle, obj4);
    tmp10 = jsx;
    obj5 = { style: tmp.thumbnailImagePortrait };
    tmp11 = require("result");
    if (first === require("result").ForumLayout.GRID) {
      tmp15 = closure_1;
      tmp16 = dependencyMap;
      num3 = 17;
      tmp14 = require("result");
    } else {
      tmp12 = closure_1;
      tmp13 = dependencyMap;
      num2 = 18;
      tmp14 = require("result");
    }
    obj5.source = tmp14;
    items2[3] = tmp10(tmp11, obj5);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = result);
result = {};
result = { flex: 1, backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("result").space.PX_16, paddingTop: require("result").space.PX_16 };
result.container = result;
result.description = { paddingTop: require("result").space.PX_8, paddingBottom: require("result").space.PX_16 };
result.thumbnailImagePortrait = { alignSelf: "center" };
result = result.createStyles(result);
result = result.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

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
