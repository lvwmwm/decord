// Module ID: 10104
// Function ID: 77949
// Dependencies: [5, 57, 31, 27, 1348, 1838, 653, 33, 4130, 689, 566, 5737, 5048, 5713, 1282, 1392, 1212, 5167, 5513, 1387, 4126, 10075, 4543, 2]

// Module 10104
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import { JoinGuildSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 }, guildInfoContainer: { flexDirection: "column", flex: 1 } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 16 };
obj.guildIcon = obj;
obj.guildWrapper = { flex: 1 };
obj.guildDescription = { flexShrink: 1, marginBottom: 8 };
obj.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 4, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj.dotOnline = _createForOfIteratorHelperLoose;
let obj2 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
obj.dotOffline = obj2;
obj.headerContainer = { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" };
obj.titleContainer = { flexDirection: "row", flex: 1 };
obj.flex = { flex: 1, height: 4 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function GuildDirectoryRow(entry) {
  let approximateMemberCount;
  let approximatePresenceCount;
  let description;
  entry = entry.entry;
  let importDefault;
  let dependencyMap;
  function _handleJoinGuild() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleJoinGuild(tmp);
    return obj(...arguments);
  }
  const tmp = callback4();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  let obj = entry(566);
  const items = [closure_8];
  const tmp2 = null != obj.useStateFromStores(items, () => outer1_8.getGuild(entry.guildId));
  importDefault = tmp2;
  const tmp3 = callback(importAllResult.useState(false), 2);
  dependencyMap = tmp3[1];
  let obj1 = importDefault(1392);
  obj = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj1.getGuildIconURL(obj);
  let tmp5;
  if (null != guildIconURL) {
    tmp5 = guildIconURL;
  }
  const intl = entry(1212).intl;
  let stringResult = intl.string(entry(1212).t.VJlc0S);
  if (tmp2) {
    const intl2 = entry(1212).intl;
    stringResult = intl2.string(entry(1212).t.cqWE2Z);
  }
  obj = { style: tmp.container };
  obj1 = { style: tmp.guildWrapper };
  const obj2 = { style: tmp.headerContainer };
  const obj3 = { style: tmp.titleContainer };
  const obj4 = { style: tmp.guildIcon, icon: tmp5 };
  let result;
  if (null == tmp5) {
    let obj8 = entry(1387);
    result = obj8.fromGuildDirectoryEntry(entry);
  }
  obj4.guild = result;
  obj4.selected = false;
  const items1 = [callback2(importDefault(5513), obj4), ];
  const obj5 = { style: tmp.guildInfoContainer };
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: entry.name };
  const items2 = [callback2(entry(4126).Text, obj6), ];
  const obj7 = { style: tmp.memberInfo };
  let tmp18 = null;
  if (null != approximatePresenceCount) {
    obj8 = {};
    const obj9 = { style: tmp.dotOnline };
    const items3 = [callback2(View, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "text-default" };
    const intl3 = entry(1212).intl;
    const obj11 = { membersOnline: approximatePresenceCount };
    obj10.children = intl3.format(entry(1212).t["LC+S+m"], obj11);
    items3[1] = callback2(entry(4126).Text, obj10);
    obj8.children = items3;
    tmp18 = callback3(closure_11, obj8);
  }
  const items4 = [tmp18, ];
  let tmp25 = null;
  if (null != approximateMemberCount) {
    const obj12 = {};
    const obj13 = { style: tmp.dotOffline };
    const items5 = [callback2(View, obj13), ];
    const obj14 = { variant: "text-xs/medium", color: "text-default" };
    const intl4 = entry(1212).intl;
    const obj15 = { count: approximateMemberCount };
    obj14.children = intl4.format(entry(1212).t.zRl6XR, obj15);
    items5[1] = callback2(entry(4126).Text, obj14);
    obj12.children = items5;
    tmp25 = callback3(closure_11, obj12);
  }
  items4[1] = tmp25;
  obj7.children = items4;
  items2[1] = callback3(View, obj7);
  obj5.children = items2;
  items1[1] = callback3(View, obj5);
  obj3.children = items1;
  const items6 = [callback3(View, obj3), ];
  const tmp12 = importDefault(5513);
  items6[1] = callback2(View, { children: callback2(importDefault(10075), { entry }) });
  obj2.children = items6;
  const items7 = [callback3(View, obj2), , , ];
  let tmp32 = null != description;
  if (tmp32) {
    tmp32 = "" !== description;
  }
  if (tmp32) {
    const obj17 = { lineClamp: 3, style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: description };
    tmp32 = callback2(entry(4126).Text, obj17);
  }
  items7[1] = tmp32;
  items7[2] = callback2(View, { style: tmp.flex });
  const obj19 = {
    loading: tmp3[0],
    onPress: function handleJoinGuild() {
      return _handleJoinGuild(...arguments);
    }
  };
  let str2 = "active";
  if (tmp2) {
    str2 = "secondary";
  }
  obj19.variant = str2;
  obj19.text = stringResult;
  items7[3] = callback2(entry(4543).Button, obj19);
  obj1.children = items7;
  obj.children = callback3(View, obj1);
  return callback2(entry(5167).Card, obj);
});
let result = require("result").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default memoResult;
