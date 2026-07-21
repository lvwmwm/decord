// Module ID: 14873
// Function ID: 112033
// Name: useGuildThemeNuxTrigger
// Dependencies: []
// Exports: default

// Module 14873 (useGuildThemeNuxTrigger)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).DismissibleContentGroupName;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(guildId, isNuxOpen) {
  isNuxOpen = guildId;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const dependencyMap = isNuxOpen;
  const openNux = isNuxOpen.openNux;
  const callback = openNux;
  let React;
  let constants;
  let closure_5;
  const enabledGuildThemeForGuildId = isNuxOpen(dependencyMap[3]).useEnabledGuildThemeForGuildId(guildId, "GuildThemeNuxTrigger");
  const obj = isNuxOpen(dependencyMap[3]);
  if (null != enabledGuildThemeForGuildId) {
    const items = [isNuxOpen(dependencyMap[5]).DismissibleContent.GUILD_THEME_NUX];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = callback(isNuxOpen(dependencyMap[4]).useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX), 2);
  React = tmp5;
  const tmp6 = tmp4[0] === isNuxOpen(dependencyMap[5]).DismissibleContent.GUILD_THEME_NUX;
  constants = tmp6;
  closure_5 = React.useRef(false);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    closure_5.current = false;
  }, items2);
  const items3 = [tmp6, isNuxOpen, guildId, tmp4[1], openNux];
  const effect1 = React.useEffect(() => {
    if (tmp6) {
      if (!isNuxOpen) {
        if (!ref.current) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_5.current = true;
            let closure_0 = false;
            const resolved = Promise.resolve(callback({
              guildId: closure_0,
              markAsDismissed(arg0) {
                if (!closure_0) {
                  closure_0 = true;
                  callback(arg0, true);
                }
              }
            }));
            resolved.catch(() => {
              closure_5.current = false;
            });
          }, 2000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items3);
};
export const GUILD_THEME_NUX_DELAY_MS = 2000;
