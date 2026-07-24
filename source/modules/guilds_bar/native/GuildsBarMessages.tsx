// Module ID: 14884
// Function ID: 113534
// Dependencies: [31, 3947, 653, 33, 14885, 1324, 14870, 566, 14872, 689, 1212, 14886, 4629, 2]

// Module 14884
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14885)(ME);
  }
};
const memoResult = require("result").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  let obj = require(14870) /* UnreadIndicator */;
  const tmp = importDefault(1324)("GuildsBarMessages");
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
    const guildId = outer1_3.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === outer1_4;
    }
    return tmp2;
  });
  const obj2 = require(566) /* initialize */;
  ({ badge, cutouts } = importDefault(14872)({ mentionCount: 0 }));
  const colors = importDefault(689).colors;
  obj = { selected: stateFromStores };
  let tmp8 = !tmp;
  const tmp4 = importDefault(14872)({ mentionCount: 0 });
  const tmp5 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const tmp6 = jsx;
  if (tmp8) {
    tmp8 = !stateFromStores;
  }
  obj.circle = tmp8;
  obj.unread = false;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.cutouts = cutouts;
  obj.config = closure_6;
  obj.overState = undefined;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.YUU0RF);
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(importDefault(14886), {});
  obj.children = jsx(require(4629) /* ChatIcon */.ChatIcon, { color: tmp5 });
  return tmp6(importDefault(14870), obj);
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
