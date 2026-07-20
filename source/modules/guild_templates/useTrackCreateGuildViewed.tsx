// Module ID: 10930
// Function ID: 85020
// Name: useTrackCreateGuildViewed
// Dependencies: []
// Exports: default

// Module 10930 (useTrackCreateGuildViewed)
let closure_2 = importAll(dependencyMap[0]);
const GuildTemplateStates = arg1(dependencyMap[1]).GuildTemplateStates;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  const importDefault = arg0;
  let closure_1 = React.useRef([]);
  const effect = React.useEffect((self) => {
    let tmp = null != self;
    if (tmp) {
      tmp = self.state !== constants.RESOLVING;
    }
    if (tmp) {
      let current = ref.current;
      if (!current.includes(self.code)) {
        current = ref.current;
        current.push(self.code);
        let obj = self(ref[3]);
        obj = {};
        ({ code: obj2.guild_template_code, name: obj2.guild_template_name, description: obj2.guild_template_description, sourceGuildId: obj2.guild_template_guild_id } = self);
        obj.track(constants2.CREATE_GUILD_VIEWED, obj);
      }
    }
  });
};
