// Module ID: 15071
// Function ID: 114802
// Dependencies: [31, 6765, 33, 566, 15072, 1450, 4543, 1212, 4658, 2]

// Module 15071
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const section = guildId.section;
  const listRef = guildId.listRef;
  let obj = guildId(section[3]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.isVoiceCategoryCollapsed(guildId));
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    let obj = guildId(section[4]);
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = outer1_2.current;
        if (null != current) {
          const obj = { animated: false, section: outer1_1, item: 0 };
          const _Math = Math;
          obj.paddingStart = Math.round(0.3 * guildId(section[5]).getWindowDimensions().height);
          current.scrollToLocation(obj);
          const obj2 = guildId(section[5]);
        }
      }, 0);
    } else {
      const result = obj.voiceCategoryCollapse(guildId);
      let current = listRef.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  obj = {};
  const intl = guildId(section[7]).intl;
  const string = intl.string;
  const t = guildId(section[7]).t;
  if (stateFromStores) {
    let stringResult = string(t["/eB9Bg"]);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  obj.text = stringResult;
  obj.icon = jsx(guildId(section[8]).VoiceNormalIcon, { size: "sm" });
  obj.onPress = callback;
  obj.variant = "secondary";
  obj.size = "sm";
  return jsx(guildId(section[6]).Button, {});
});
let result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default memoResult;
