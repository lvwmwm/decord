// Module ID: 12048
// Function ID: 12049
// Name: useTrackCreateGuildViewed
// Dependencies: [19, 7568, 1074, 1241, 2]
// Exports: default

// Module 12048 (useTrackCreateGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const GuildTemplateStates = fn(7568).GuildTemplateStates;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  closure_0 = arg0;
  noop.useRef([]);
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = tmp.state !== GuildTemplateStates.RESOLVING;
    }
    if (tmp2) {
      const current = ref.current;
      if (!current.includes(tmp.code)) {
        const current1 = tmp4.current;
        current1.push(tmp.code);
        ({ code: obj2.guild_template_code, name: obj2.guild_template_name, description: obj2.guild_template_description, sourceGuildId: obj2.guild_template_guild_id } = tmp);
        AnalyticsUtilsDefault.track(AnalyticEvents.CREATE_GUILD_VIEWED, { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null });
        const obj3 = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
      }
      tmp4 = ref;
    }
  });
};
