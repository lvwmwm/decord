// Module ID: 10946
// Function ID: 85114
// Name: useTrackCreateGuildViewed
// Dependencies: [31, 5720, 653, 675, 2]
// Exports: default

// Module 10946 (useTrackCreateGuildViewed)
import result from "result";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  let closure_0 = arg0;
  let closure_1 = React.useRef([]);
  const effect = React.useEffect(() => {
    let tmp = null != lib;
    if (tmp) {
      tmp = lib.state !== outer1_3.RESOLVING;
    }
    if (tmp) {
      let current = ref.current;
      if (!current.includes(lib.code)) {
        current = ref.current;
        current.push(lib.code);
        let obj = lib(ref[3]);
        obj = {};
        ({ code: obj2.guild_template_code, name: obj2.guild_template_name, description: obj2.guild_template_description, sourceGuildId: obj2.guild_template_guild_id } = lib);
        obj.track(outer1_4.CREATE_GUILD_VIEWED, obj);
      }
    }
  });
};
