// Module ID: 12070
// Function ID: 12071
// Name: GuildPowerupsGameServerCard
// Dependencies: [19, 17, 4825, 4744, 21, 4836, 576, 504, 12071, 12072, 12063, 12067, 4634, 2]
// Exports: default

// Module 12070 (GuildPowerupsGameServerCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useGameServerPowerupStatusDefault from "useGameServerPowerupStatus" /* 12071 */;
import useGameServerPerkDefault from "useGameServerPerk" /* 12072 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const GuildPowerupsPerkCardDefault = tmp5(12067);
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
