// Module ID: 15798
// Function ID: 15799
// Name: useGuildThemeNuxTrigger
// Dependencies: [32, 19, 2042, 4719, 6806, 2029, 2]
// Exports: default

// Module 15798 (useGuildThemeNuxTrigger)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import GuildThemeResolver from "GuildThemeResolver" /* 4719 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 6806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c0;

let tmp;
const dismissible_content = tmp(2029);
let constants = DismissibleContentConstants.DismissibleContentGroupName;
const result = size.fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(guildId, isNuxOpen) {
  let items1;
  let closure_0 = guildId;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  let closure_3;
  constants = undefined;
  let closure_5;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = GuildThemeResolver;
  const enabledGuildThemeForGuildId = obj.useEnabledGuildThemeForGuildId(guildId, "GuildThemeNuxTrigger");
  const tmp4 = useSelectedDismissibleContent2;
  const useSelectedDismissibleContent = tmp4.useSelectedDismissibleContent;
  if (null != enabledGuildThemeForGuildId) {
    const items = [dismissible_content.DismissibleContent.GUILD_THEME_NUX];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX), 2);
  closure_3 = tmp6;
  const tmp7 = tmp5[0] === dismissible_content.DismissibleContent.GUILD_THEME_NUX;
  constants = tmp7;
  closure_5 = react.useRef(false);
  const items2 = [guildId];
  const effect = react.useEffect(() => {
    ref.current = false;
  }, items2);
  const items3 = [tmp7, isNuxOpen, guildId, tmp5[1], openNux];
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
          }, 2000);
          return () => clearTimeout(guildId);
        }
      }
    }
  }, items3);
};
export const GUILD_THEME_NUX_DELAY_MS = 2000;
