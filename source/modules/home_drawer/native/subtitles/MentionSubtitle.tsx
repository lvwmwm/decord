// Module ID: 14901
// Function ID: 113643
// Name: MentionSubtitle
// Dependencies: [31, 27, 33, 14902, 4593, 4638, 4126, 1212, 2]
// Exports: default

// Module 14901 (MentionSubtitle)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
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
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children) {
      return outer1_3(outer1_0(outer1_1[6]).Text, { variant: "text-xs/medium", children }, arg1);
    }
  });
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(View, obj);
};
