// Module ID: 15463
// Function ID: 15464
// Name: MentionSubtitle
// Dependencies: [19, 17, 21, 15464, 4764, 4809, 4299, 1236, 2]
// Exports: default

// Module 15463 (MentionSubtitle)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = require(15464) /* styles */;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(4764).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(4764);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(4809).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  const intl = tmp(1236).intl;
  obj1[4] = intl.format(require(1236) /* getSystemLocale */.t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children) {
      return callback2(callback(table[6]).Text, { variant: "text-xs/medium", children }, arg1);
    }
  });
  items[1] = callback(require(4299) /* Text */.Text, obj1);
  obj[1] = items;
  return callback2(View, obj);
};
