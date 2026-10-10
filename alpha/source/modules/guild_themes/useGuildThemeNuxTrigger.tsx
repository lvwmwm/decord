// Module ID: 16578
// Function ID: 16579
// Name: useGuildThemeNuxTrigger
// Dependencies: [32, 19, 2062, 558, 576, 5003, 2049, 7099, 2]

// Module 16578 (useGuildThemeNuxTrigger)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, ref, tmp3;

let react = react_mod;
let constants = DismissibleContentConstants.DismissibleContentGroupName;
let c5 = 2000;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildThemeNuxTrigger(arg0, isNuxOpen) {
  let closure_0;
  let closure_3;
  let closure_4;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let tmp2 = isNuxOpen;
  let obj = require("react");
  const cResult = obj.c(13);
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  const obj2 = require("GuildThemeResolver");
  const tmp4 = null != obj2.useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
  if (cResult[0] !== tmp4) {
    let items1;
    if (tmp4) {
      const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp4;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { groupName: constants.GUILD_THEME_NUX };
    cResult[2] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[7]);
  const tmp8 = openNux(tmpResult.useSelectedDismissibleContent(tmp5, tmp6), 2);
  react = tmp9;
  const tmp10 = tmp8[0] === tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX;
  constants = tmp10;
  ref = react.useRef(false);
  const obj5 = react;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_5.current = false;
        return;
      }
    }
    cResult[3] = D;
    tmp11 = D;
  } else {
    class D {
      constructor() {
        closure_5.current = false;
        return;
      }
    }
  }
  if (cResult[4] !== arg0) {
    class D {
      constructor() {
        closure_5.current = false;
        return;
      }
    }
    tmp13[0] = arg0;
    cResult[4] = arg0;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  } else {
    class D {
      constructor() {
        closure_5.current = false;
        return;
      }
    }
  }
  const effect = obj5.useEffect(tmp11, tmp12);
  if (cResult[6] === arg0) {
    class D {
      constructor() {
        closure_5.current = false;
        return;
      }
    }
  }
  class U {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        tmp2 = isNuxOpen;
        if (!tmp2) {
          tmp3 = closure_5;
          if (!closure_5.current) {
            tmp4 = globalThis;
            _setTimeout = setTimeout;
            tmp5 = closure_5;
            closure_0 = setTimeout(() => { /* body not rendered: F148031 */ }, closure_5);
            return () => { /* body not rendered: F148032 */ };
          }
        }
      }
      return;
    }
  }
  const items2 = [tmp10, isNuxOpen, arg0, tmp8[1], openNux];
  cResult[6] = arg0;
  cResult[7] = isNuxOpen;
  cResult[8] = tmp8[1];
  cResult[9] = openNux;
  cResult[10] = tmp10;
  cResult[11] = U;
  cResult[12] = items2;
}) : (function useGuildThemeNuxTrigger(arg0, isNuxOpen) {
  let closure_0;
  let closure_3;
  let closure_4;
  let items1;
  _require = arg0;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  react = undefined;
  constants = undefined;
  ref = undefined;
  let tmp = _require;
  let tmp2 = isNuxOpen;
  let obj = require("GuildThemeResolver");
  const enabledGuildThemeForGuildId = obj.useEnabledGuildThemeForGuildId(arg0, "GuildThemeNuxTrigger");
  const tmp4 = require("useSelectedDismissibleContent");
  const useSelectedDismissibleContent = tmp4.useSelectedDismissibleContent;
  if (null != enabledGuildThemeForGuildId) {
    const items = [tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX];
    items1 = items;
  } else {
    items1 = [];
  }
  const obj2 = { groupName: constants.GUILD_THEME_NUX };
  const tmp5 = openNux(useSelectedDismissibleContent(items1, obj2), 2);
  react = tmp6;
  const tmp7 = tmp5[0] === tmp(tmp2[6]).DismissibleContent.GUILD_THEME_NUX;
  constants = tmp7;
  ref = react.useRef(false);
  const items2 = [arg0];
  const effect = react.useEffect(() => {
    ref.current = false;
  }, items2);
  const items3 = [tmp7, isNuxOpen, arg0, tmp5[1], openNux];
  const effect1 = react.useEffect(() => {
    let tmp = closure_4;
    if (tmp) {
      const tmp2 = isNuxOpen;
      if (!tmp2) {
        if (!ref.current) {
          const _setTimeout = setTimeout;
          let guildId = setTimeout(() => {
            closure_5.current = true;
            guildId = false;
            const obj = {
              guildId,
              markAsDismissed(arg0) {
                const tmp = c0;
                if (!tmp) {
                  c0 = true;
                  closure_2_3(arg0, true);
                }
              }
            };
            const resolved = Promise.resolve(closure_2(obj));
            resolved.catch(() => {
              closure_1_5.current = false;
            });
          }, ref);
          return () => clearTimeout(guildId);
        }
      }
    }
  }, items3);
});
const result = size.fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default tmp2;
export const GUILD_THEME_NUX_DELAY_MS = 2000;
