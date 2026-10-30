// Module ID: 13171
// Function ID: 13172
// Name: useTrackCreateGuildViewed
// Dependencies: [19, 7495, 1072, 1253, 2]
// Exports: default

// Module 13171 (useTrackCreateGuildViewed)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7495 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  let closure_0 = arg0;
  const ref = react.useRef([]);
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && tmp.state !== GuildTemplateStates.RESOLVING;
    if (tmp2) {
      const current = ref.current;
      const tmp4 = ref;
      if (!current.includes(closure_0.code)) {
        const current1 = tmp4.current;
        current1.push(closure_0.code);
        const obj3 = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
        ({ code: obj2.guild_template_code, name: obj2.guild_template_name, description: obj2.guild_template_description, sourceGuildId: obj2.guild_template_guild_id } = closure_0);
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.CREATE_GUILD_VIEWED, obj3);
      }
    }
  });
};
