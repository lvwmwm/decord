// Module ID: 18328
// Function ID: 18329
// Name: GuildsBarMessages
// Dependencies: [19, 5040, 1072, 21, 18329, 18314, 504, 18317, 575, 1114, 18330, 8635, 2]

// Module 18328 (GuildsBarMessages)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18314 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18317 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18329 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import size from "module_2" /* 2 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;
let guildId;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const memoResult = react.memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const obj = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    return null == guildId || guildId === ME;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const colors = nativeDefault.colors;
  GuildsBarAnimatedItemWrapperDefault;
  const intl = tmp(1114).intl;
  return <tmp5Result selected={stateFromStores} circle={false} unread={false} styles={guildsBarAnimatedWrapperStyles} cutouts={cutouts} config={config} overState="y" label={intl.string(intl2.t.YUU0RF)} externalChildren={badge} expandedChildren={null}>{null}</tmp5Result>;
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
