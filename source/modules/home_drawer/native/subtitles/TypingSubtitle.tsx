// Module ID: 14903
// Function ID: 113647
// Name: TypingSubtitle
// Dependencies: [31, 27, 33, 14902, 4593, 4638, 4126, 2]
// Exports: default

// Module 14903 (TypingSubtitle)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  let channel;
  let channelName;
  let guild;
  let text;
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  let obj = require(14902) /* styles */;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    let obj1 = require(4593) /* getThreadChannelIcon */;
    channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, guild);
  }
  if (null == channelIconComponentWithGuild) {
    channelIconComponentWithGuild = require(4638) /* TextIcon */.TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow };
  let tmp9 = null;
  if (null != channelName) {
    obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    tmp9 = callback(channelIconComponentWithGuild, obj);
  }
  const items = [tmp9, ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText };
  let tmp12 = null;
  if (null != channelName) {
    const obj2 = { variant: "text-xs/medium" };
    const items1 = [channelName, "  \u00B7  "];
    obj2.children = items1;
    tmp12 = callback2(require(4126) /* Text */.Text, obj2);
  }
  const items2 = [tmp12, text];
  obj1.children = items2;
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(View, obj);
};
