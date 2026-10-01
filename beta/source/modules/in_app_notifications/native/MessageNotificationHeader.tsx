// Module ID: 9632
// Function ID: 9633
// Name: MessageNotificationHeader
// Dependencies: [19, 17, 4825, 4479, 1372, 21, 4836, 576, 4832, 4989, 1095, 5385, 5387, 5335, 504, 2]
// Exports: SimpleNotificationHeader, default

// Module 9632 (MessageNotificationHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ChannelTypes from "ChannelTypes" /* 1095 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
function LocationText(channel) {
  let _location;
  let author;
  let icon;
  let items1;
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str;
  ({ author, location: _location } = channel);
  const tmp = closure_9();
  react = tmp;
  if (str == null) {
    str = "text-muted";
  }
  const items = [channel, parentChannel, tmp.icon, str];
  let tmp5 = null != author;
  const obj = { style: tmp.secondaryTextContainer, children: items1 };
  const memo = react.useMemo(() => {
    const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
    let tmp5;
    if (!PRIVATE_CHANNEL.has(channel.type)) {
      let simpleChannelIconComponent;
      if (channel.type === ChannelTypes.ChannelTypes.PUBLIC_THREAD) {
        if (null != parentChannel) {
          let ThreadIcon;
          if (parentChannel.type === ChannelTypes.ChannelTypes.GUILD_FORUM) {
            ThreadIcon = tmp3(5385).ChatIcon;
          }
          simpleChannelIconComponent = ThreadIcon;
        }
        ThreadIcon = tmp3(5387).ThreadIcon;
      } else {
        const tmp3Result = utils_ChannelUtils;
        simpleChannelIconComponent = tmp3Result.getSimpleChannelIconComponent(tmp);
      }
      tmp5 = simpleChannelIconComponent;
    }
    let element = null;
    if (null != tmp5) {
      element = <tmp5 color={str} style={icon.icon} />;
    }
    return element;
  }, items);
  const tmp3 = closure_8;
  const tmp4 = str;
  if (tmp5) {
    const obj2 = { variant: "text-md/bold", color: str, maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    tmp5 = closure_7(channel(parentChannel[8]).Text, obj2);
  }
  items1 = [tmp5, memo, ];
  const obj3 = { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location };
  items1[2] = closure_7(channel(parentChannel[8]).Text, obj3);
  return tmp3(tmp4, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, headerContent: { flex: 1, flexDirection: "row", alignItems: "center" }, primaryText: { flexShrink: 1, marginRight: 2 }, secondaryTextContainer: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" }, separator: { marginHorizontal: 2 }, icon: { width: 16, height: 16 }, secondaryText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(locationTextColor) {
  let author;
  let channel;
  let colorString;
  let guild;
  let items1;
  let items2;
  let obj4;
  let parentChannel;
  let roleStyle;
  let tmp19;
  let tmp6;
  ({ channel, parentChannel, guild, author } = locationTextColor);
  locationTextColor = locationTextColor.locationTextColor;
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if (author != null) {
    colorString = author.colorString;
  }
  let tmp5;
  if ("username" === stateFromStores) {
    tmp5 = colorString;
  }
  if (null != tmp5) {
    tmp6 = { color: tmp5 };
  }
  const tmp2Result = useChannelName;
  const channelName = tmp2Result.computeChannelName(channel, UserStore, RelationshipStore);
  const type = channel.type;
  let tmp10 = channelName;
  const tmp7 = UserStore;
  const tmp8 = RelationshipStore;
  if (ChannelTypes.ChannelTypes.GROUP_DM !== type) {
    if (ChannelTypes.ChannelTypes.GUILD_FORUM !== type) {
      if (ChannelTypes.ChannelTypes.GUILD_MEDIA !== type) {
        if (ChannelTypes.ChannelTypes.GUILD_TEXT !== type) {
          if (ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
            if (ChannelTypes.ChannelTypes.GUILD_APP !== type) {
              if (ChannelTypes.ChannelTypes.GUILD_VOICE !== type) {
                if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE !== type) {
                  let combined;
                  if (ChannelTypes.ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
                    if (ChannelTypes.ChannelTypes.PUBLIC_THREAD !== type) {
                      if (ChannelTypes.ChannelTypes.PRIVATE_THREAD !== type) {
                        if (ChannelTypes.ChannelTypes.MEDIA_THREAD !== type) {
                          tmp10 = null;
                          if (ChannelTypes.ChannelTypes.DM !== type) {
                            tmp10 = null;
                            if (ChannelTypes.ChannelTypes.GUILD_CATEGORY !== type) {
                              tmp10 = null;
                              if (ChannelTypes.ChannelTypes.GUILD_STORE !== type) {
                                tmp10 = null;
                                if (ChannelTypes.ChannelTypes.GUILD_DIRECTORY !== type) {
                                  tmp10 = null;
                                  if (ChannelTypes.ChannelTypes.GUILD_SPACE !== type) {
                                    const UNKNOWN = tmp2(1095).ChannelTypes.UNKNOWN;
                                    tmp10 = null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let channelName1 = null;
                  if (null != parentChannel) {
                    const tmp2Result2 = useChannelName;
                    channelName1 = tmp2Result2.computeChannelName(parentChannel, tmp7, tmp8);
                  }
                  if (null != channelName1) {
                    const _HermesInternal2 = HermesInternal;
                    combined = "" + channelName + ", " + channelName1;
                  } else {
                    combined = channelName;
                    if (null != guild) {
                      const _HermesInternal = HermesInternal;
                      combined = "" + channelName + ", " + guild.name;
                    }
                  }
                  tmp10 = combined;
                }
              }
            }
          }
        }
      }
    }
    let combined1 = null;
    if (null != guild) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + channelName + ", " + guild.name;
    }
    tmp10 = combined1;
  }
  const obj3 = { style: tmp.container, children: tmp19(View, obj4) };
  let tmp17Result = null != author;
  obj4 = { style: tmp.headerContent, children: items2 };
  tmp19 = metroImportAll;
  if (tmp17Result) {
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items1, children: author.nick };
    items1 = [tmp.primaryText, tmp6];
    tmp17Result = tmp17(tmp2(4832).Text, obj5);
  }
  items2 = [tmp17Result, ];
  let tmp17Result2 = null != tmp10;
  if (tmp17Result2) {
    const obj6 = { location: tmp10, channel, parentChannel, author, color: locationTextColor };
    tmp17Result2 = tmp17(LocationText, obj6);
  }
  items2[1] = tmp17Result2;
  return metroImportDefault(View, obj3);
};
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  let items;
  let items1;
  let items2;
  let labelStyle;
  let text;
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = closure_9();
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items, children: text };
  items = [tmp.primaryText, labelStyle];
  const obj = { style: tmp.container, children: items1 };
  items1 = [metroImportDefault(Text_Text.Text, obj2), ];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    const obj3 = { style: tmp.secondaryTextContainer, children: items2 };
    const obj4 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    items2 = [metroImportDefault(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.secondaryText, children: secondaryText };
    items2[1] = metroImportDefault(Text_Text.Text, obj5);
    tmp2Result = tmp2(tmp3, obj3);
  }
  items1[1] = tmp2Result;
  return metroImportAll(View, obj);
};
