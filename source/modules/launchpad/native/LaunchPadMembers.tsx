// Module ID: 15724
// Function ID: 121221
// Dependencies: [31, 27, 1348, 1906, 33, 4130, 624, 11338, 15428, 10894, 4126, 1212, 2]

// Module 15724
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const memoResult = require("result").memo(function LaunchPadMembers() {
  const tmp = callback();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_5, _isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const currentlySelectedChannelId = outer1_5.getCurrentlySelectedChannelId();
    let tmp2;
    if (null != currentlySelectedChannelId) {
      tmp2 = currentlySelectedChannelId;
    }
    const channel = outer1_4.getChannel(tmp2);
    if (null != tmp2) {
      if (null != channel) {
        if (channel.isPrivate()) {
          let obj = { channelId: tmp2, type: "private" };
          return obj;
        } else {
          obj = { channelId: tmp2, guildId: channel.guild_id };
          if (channel.isThread()) {
            obj.type = "thread";
            let tmp3 = obj;
          } else {
            obj.type = "guild";
            tmp3 = obj;
          }
          return tmp3;
        }
      }
    }
    return { channelId: undefined, type: "none" };
  });
  if ("private" === stateFromStoresObject.type) {
    obj = { style: tmp.wrapper };
    obj = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    obj.children = jsx(importDefault(11338), { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp7 = <View channelId={stateFromStoresObject.channelId} listStyleOverride={tmp.listStyle} disableBottomSafeZone insetEnd={20} />;
  } else if ("thread" === stateFromStoresObject.type) {
    const obj1 = { style: tmp.wrapper };
    const obj2 = {};
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj2.listStyleOverride = tmp.listStyle;
    obj2.disableBottomSafeZone = true;
    obj2.insetEnd = 20;
    obj1.children = jsx(importDefault(15428), {}, stateFromStoresObject.channelId);
    tmp7 = <View style={tmp.wrapper} />;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj3 = { style: tmp.wrapper };
    const obj4 = {};
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj4.listStyleOverride = tmp.listStyle;
    obj4.disableBottomSafeZone = true;
    obj4.insetEnd = 20;
    obj3.children = jsx(importDefault(10894), {}, stateFromStoresObject.channelId);
    tmp7 = <View style={tmp.wrapper} />;
  } else {
    const obj5 = { style: tmp.emptyWrapper };
    const obj6 = { style: tmp.emptyText, variant: "text-md/semibold" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl.string(require(1212) /* getSystemLocale */.t["+7wtJq"]);
    obj5.children = jsx(require(4126) /* Text */.Text, { style: tmp.emptyText, variant: "text-md/semibold" });
    tmp7 = <View style={tmp.emptyWrapper} />;
  }
  return tmp7;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;
