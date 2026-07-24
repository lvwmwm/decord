// Module ID: 11501
// Function ID: 89592
// Dependencies: [31, 1348, 1849, 3759, 653, 33, 566, 5713, 1282, 5700, 5715, 5048, 4543, 1212, 1392, 3969, 2]

// Module 11501
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { JoinGuildSources } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  const onBeforeJoin = guildId.onBeforeJoin;
  let obj = guildId(onBeforeJoin[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  const items1 = [guildId, joinSource, onBeforeJoin];
  const callback = stateFromStores.useCallback(() => {
    const lurkingSourceForGuild = outer1_6.getLurkingSourceForGuild(guildId);
    let type;
    if (null != lurkingSourceForGuild) {
      type = lurkingSourceForGuild.type;
    }
    if (type === outer1_7.DIRECTORY_ENTRY) {
      const channel = outer1_4.getChannel(lurkingSourceForGuild.directoryChannelId);
      if (null != channel) {
        guildId = channel.getGuildId();
        const result = guildId(onBeforeJoin[7]).setHubProgressActionComplete(guildId, guildId(onBeforeJoin[8]).HubProgressStep.JOIN_GUILD);
        const obj2 = guildId(onBeforeJoin[7]);
      }
    }
    const obj3 = guildId(onBeforeJoin[9]);
    obj3.trackJoinClicked(guildId, joinSource, joinSource(onBeforeJoin[10]).hasNavigatedAway(guildId));
    if (null != onBeforeJoin) {
      onBeforeJoin();
    }
    const obj4 = joinSource(onBeforeJoin[10]);
    joinSource(onBeforeJoin[11]).joinGuild(guildId, { source: joinSource });
  }, items1);
  if (null == stateFromStores) {
    obj = { grow: true, variant: "primary", size: "md" };
    const intl = guildId(onBeforeJoin[13]).intl;
    obj.text = intl.string(guildId(onBeforeJoin[13]).t.VJlc0S);
    obj.onPress = callback;
    return jsx(guildId(onBeforeJoin[12]).Button, { grow: true, variant: "primary", size: "md" });
  } else {
    let obj2 = joinSource(onBeforeJoin[14]);
    const userAvatarSource = obj2.getUserAvatarSource(stateFromStores, false);
    const intl2 = guildId(onBeforeJoin[13]).intl;
    obj = {
      usernameHook() {
          return joinSource(onBeforeJoin[15]).getFormattedName(stateFromStores);
        }
    };
    const obj1 = { grow: true, variant: "primary", size: "md", text: intl2.formatToPlainString(guildId(onBeforeJoin[13]).t["5qtVhX"], obj) };
    obj2 = { source: userAvatarSource, variant: "entity" };
    obj1.icon = jsx(guildId(onBeforeJoin[12]).Button.Icon, { source: userAvatarSource, variant: "entity" });
    obj1.onPress = callback;
    return jsx(guildId(onBeforeJoin[12]).Button, { grow: true, variant: "primary", size: "md", text: intl2.formatToPlainString(guildId(onBeforeJoin[13]).t["5qtVhX"], obj) });
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;
