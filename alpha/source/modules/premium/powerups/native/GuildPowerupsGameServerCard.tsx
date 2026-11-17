// Module ID: 14088
// Function ID: 14089
// Name: GuildPowerupsGameServerCard
// Dependencies: [19, 17, 5311, 9251, 21, 5310, 575, 504, 14089, 14090, 14081, 14085, 5457, 2]
// Exports: default

// Module 14088 (GuildPowerupsGameServerCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useGameServerPowerupStatusDefault from "useGameServerPowerupStatus" /* 14089 */;
import useGameServerPerkDefault from "useGameServerPerk" /* 14090 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import GameServerStore from "GameServerStore" /* 9251 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const GuildPowerupsPerkCardDefault = tmp5(14085);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { riveContainer: obj2 };
obj2 = { flex: 1, paddingVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  let useReducedMotion;
  guildId = guildId.guildId;
  const items = [GameServerStore];
  const tmp = closure_7();
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GameServerStore.getStateForGuild(guildId));
  const tmp6 = useGameServerPowerupStatusDefault(guildId);
  const tmp7 = useGameServerPerkDefault(guildId);
  const items1 = [AccessibilityStore];
  const obj2 = guildId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != tmp7) {
      ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp7);
      const obj10 = { reducedMotion: stateFromStores1 };
      GuildPowerupsPerkCardDefault;
      tmp10 = <tmp5Result title={null} description={null} cost={null} costDecorator="+" riveComponent={null} badge="beta" status={tmp6} onPress={tmp9} />;
    }
  }
  return tmp10;
};
