// Module ID: 10290
// Function ID: 79437
// Name: ChannelIndicator
// Dependencies: []
// Exports: default

// Module 10290 (ChannelIndicator)
const _module = require(dependencyMap[0]);
const View = _module.View;
const UnreadSetting = require(dependencyMap[1]).UnreadSetting;
const jsx = require(dependencyMap[2]).jsx;
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = {};
const merged = Object.assign(_module.StyleSheet.absoluteFillObject);
obj["top"] = 0;
obj["bottom"] = 0;
obj["justifyContent"] = "center";
obj.indicatorContainer = obj;
obj.indicator = { borderRadius: importDefault(dependencyMap[4]).radii.round };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default function ChannelIndicator(arg0) {
  let resolvedUnreadSetting;
  let style;
  let unread;
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = callback();
  require(dependencyMap[5]);
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = importDefault(dependencyMap[4]).colors.CHANNELS_DEFAULT;
  }
  let tmp8 = null;
  if (unread) {
    let obj = { style: tmp.indicatorContainer };
    obj = {};
    const items = [tmp.indicator, , ];
    obj = { backgroundColor: tmp7 };
    items[1] = obj;
    items[2] = style;
    obj.style = items;
    obj.children = <View {...obj} />;
    tmp8 = <View {...obj} />;
  }
  return tmp8;
};
