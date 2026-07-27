// Module ID: 14940
// Function ID: 113913
// Name: handleCreateJoinGuildPress
// Dependencies: [5, 31, 27, 653, 1852, 33, 4131, 9542, 1935, 11735, 5595, 6137, 5482, 1324, 14882, 1212, 14941, 11246, 689, 2]
// Exports: handleCreateJoinGuildPress

// Module 14940 (handleCreateJoinGuildPress)
import jsxProd from "jsxProd";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function handleCreateJoinGuildPress() {
  return _handleCreateJoinGuildPress(...arguments);
}
function _handleCreateJoinGuildPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticsPages: closure_5, TooltipNames: closure_6, UpsellTypes: closure_7 } = ME);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ stretch: { alignSelf: "stretch" } });
let closure_11 = { onPress: handleCreateJoinGuildPress };
const memoResult = require("result").memo(function GuildsBarCreateJoinButton() {
  const tmp = importDefault(1324)("GuildsBarCreateJoinButton");
  let obj = require(14882) /* UnreadIndicator */;
  obj = { style: callback2().stretch };
  const tmp2 = callback2();
  obj = { selected: false, circle: !tmp, unread: false };
  obj.styles = obj.useGuildsBarAnimatedWrapperStyles();
  obj.overState = undefined;
  obj.config = closure_11;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.l5WIbf);
  obj.expandedChildren = jsx(require(14941) /* HomeDrawerAddServerRowExpandedChildren */.HomeDrawerAddServerRowExpandedChildren, {});
  const obj1 = { size: "md", color: importDefault(689).colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj.children = jsx(require(11246) /* CirclePlusIcon */.CirclePlusIcon, { size: "md", color: importDefault(689).colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj.children = jsx(importDefault(14882), { selected: false, circle: !tmp, unread: false });
  return <View selected={false} circle={!tmp} unread={false} />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;
export { handleCreateJoinGuildPress };
