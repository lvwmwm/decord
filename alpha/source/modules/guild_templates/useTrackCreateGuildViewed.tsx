// Module ID: 11307
// Function ID: 11308
// Name: useTrackCreateGuildViewed
// Dependencies: [19, 7024, 1085, 558, 576, 1265, 2]

// Module 11307 (useTrackCreateGuildViewed)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7024 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackCreateGuildViewed(arg0) {
  let closure_0;
  let first;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const obj2 = react;
  const ref = react.useRef(first);
  if (cResult[1] !== arg0) {
    const fn = function _() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp3);
}) : (function useTrackCreateGuildViewed(arg0) {
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
});
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default tmp2;
