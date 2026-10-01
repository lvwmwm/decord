// Module ID: 11548
// Function ID: 11549
// Name: useBannerBots
// Dependencies: [19, 2067, 11527, 504, 8600, 11549, 11520, 2]
// Exports: useBannerBots

// Module 11548 (useBannerBots)
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 11527 */;
import size from "module_2" /* 2 */;

let getGuild, map;

let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  let recentApplicationCommandMetadata;
  function useAppsMap(context) {
    context = context.context;
    const obj = first1(dependencyMap[5]);
    const apps = obj.useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
    const items = [apps];
    return React.useMemo(() => {
      map = new Map();
      for (const item10011 of apps) {
        let result = map.set(item10011.id, item10011);
        continue;
      }
      return map;
    }, items);
  }
  function useCommandsMap(context) {
    context = context.context;
    const obj = first1(dependencyMap[5]);
    const commands = obj.useApplicationCommandsInContext({ context, includeBuiltIn: false }).commands;
    const items = [commands];
    return React.useMemo(() => {
      map = new Map();
      for (const item10011 of commands) {
        let result = map.set(item10011.id, item10011);
        continue;
      }
      return map;
    }, items);
  }
  function useFrecencyCommandIds(context) {
    context = context.context;
    const items = [closure_3];
    const obj = context(closure_1[3]);
    const obj2 = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        getGuild = getGuild.getGuild;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return getGuild(guild_id);
      })
    };
    const obj3 = context(closure_1[4]);
    return obj3.useTopCommands(obj2);
  }
  context = context.context;
  let first1;
  let obj = useAppsMap({ context });
  let obj2 = first1(11549);
  let apps = obj2.useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  let obj3 = useCommandsMap({ context });
  let channel = context.channel;
  let guild_id;
  const tmp4 = useFrecencyCommandIds({ context });
  const useActivityApplications = first1(11520).useActivityApplications;
  first1(11520);
  const tmp2 = first1;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  let items = [AppLauncherOnboardingStore];
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp10 = value;
  first1 = value;
  for (const item10049 of tmp4) {
    let value3 = obj3.get(item10049);
    if (null != value3) {
      let value4 = obj.get(tmp12.applicationId);
      let tmp15 = value4;
      if (null != value4) {
        if (null == tmp10) {
          tmp10 = tmp15;
          first1 = tmp15;
        } else {
          let found;
          let id1;
          let id = tmp15.id;
          if (tmp10 != null) {
            id1 = tmp10.id;
          }
          if (id !== id1) {
            found = value4;
            obj5.return();
            break;
          }
          if (null == tmp10) {
            if (apps.length > 0) {
              let first = apps[0];
              tmp10 = first;
              first1 = first;
            }
            if (apps.length > 1) {
              found = apps[1];
            }
          } else if (null == found) {
            found = apps.find((id) => {
              let id1;
              id = id.id;
              if (first1 != null) {
                id1 = first1.id;
              }
              return id !== id1;
            });
          }
          if (null == tmp10) {
            first1 = activityApplications[0];
            tmp10 = first1;
            found = activityApplications[1];
          } else if (null == found) {
            found = activityApplications[0];
          }
          let obj4 = { firstBotApplication: tmp10, secondBotApplication: found };
          return obj4;
        }
      }
    }
    continue;
  }
};
