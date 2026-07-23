// Module ID: 11789
// Function ID: 91469
// Name: GuildDirectoryEmpty
// Dependencies: [31, 27, 1907, 653, 33, 4130, 689, 1557, 566, 10037, 11790, 1273, 1212, 4126, 7495, 10038, 11791, 8481, 11792, 2]
// Exports: default

// Module 11789 (GuildDirectoryEmpty)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
const InstantInviteSources = ME.InstantInviteSources;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginBottom: 16, alignSelf: "center" };
let obj1 = { fontFamily: ME.Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
_createForOfIteratorHelperLoose.title = obj1;
_createForOfIteratorHelperLoose.description = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
_createForOfIteratorHelperLoose.ctaContainer = { marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_5.getChannels(guild.id));
  let obj1 = guild(10037);
  obj = { contentContainerStyle: items1 };
  items1 = [tmp.container, ];
  obj = { paddingBottom: channel(1557)().bottom + 16 };
  items1[1] = obj;
  obj1 = {};
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1.source = channel(11790);
  obj1.style = tmp.header;
  const items2 = [callback(closure_3, obj1), , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header" };
  const intl = guild(1212).intl;
  obj2.children = intl.format(guild(1212).t.vyvrpC, { guildName: guild.name });
  items2[1] = callback(guild(1273).LegacyText, obj2);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = guild(1212).intl;
  obj4.children = intl2.string(guild(1212).t.WypE0i);
  items2[2] = callback(guild(4126).Text, obj4);
  let tmp5 = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = {
      style: tmp.ctaContainer,
      onPress() {
          let obj = channel(10038);
          obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
          return obj.open(obj);
        },
      iconSource: channel(11791)
    };
    const intl3 = guild(1212).intl;
    obj5.title = intl3.string(guild(1212).t.hyK15i);
    tmp5 = callback(guild(7495).FormCTA, obj5);
  }
  items2[3] = tmp5;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return guild(8481).handleOpenInviteActionsheet(guild, channel.id, dependencyMap, outer1_6.HUB_EMPTY_STATE);
    },
    iconSource: channel(11792)
  };
  const intl4 = guild(1212).intl;
  obj6.title = intl4.string(guild(1212).t.L4bwJ9);
  items2[4] = callback(guild(7495).FormCTA, obj6);
  obj.children = items2;
  return closure_8(closure_4, obj);
};
