// Module ID: 11607
// Function ID: 90192
// Name: GuildPowerupsGameServerCard
// Dependencies: [31, 27, 4122, 4038, 33, 4130, 689, 566, 11608, 11609, 11600, 11604, 3842, 2]
// Exports: default

// Module 11607 (GuildPowerupsGameServerCard)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.riveContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getStateForGuild(guildId));
  const tmp = _createForOfIteratorHelperLoose();
  const tmp4 = importDefault(11609)(guildId);
  let obj1 = guildId(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_4.useReducedMotion);
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (null != tmp4) {
      obj = {};
      ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp4);
      obj.costDecorator = "+";
      obj = { style: tmp.riveContainer };
      obj1 = { stateMachine: "SM_Auto" };
      const obj2 = { reducedMotion: stateFromStores1 };
      obj1.dataBinding = obj2;
      obj.children = jsx(guildId(3842).GameServerHostingRive, { stateMachine: "SM_Auto" });
      obj.riveComponent = <View style={tmp.riveContainer} />;
      obj.badge = "beta";
      obj.status = tmp3;
      obj.onPress = tmp6;
      tmp7 = jsx(importDefault(11604), { style: tmp.riveContainer });
      const tmp11 = importDefault(11604);
    }
  }
  return tmp7;
};
