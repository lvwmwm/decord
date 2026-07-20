// Module ID: 14755
// Function ID: 111249
// Name: useGuildsBarSelectedGuildScroller
// Dependencies: []
// Exports: default

// Module 14755 (useGuildsBarSelectedGuildScroller)
let closure_0 = importAll(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    function handleSelectedGuildChange() {
      const guildId = handleSelectedGuildChange.getGuildId();
      if (guildId !== closure_0) {
        let tmp3 = null;
        if (null != guildId) {
          tmp3 = guildId;
        }
        closure_0 = tmp3;
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = guildId;
        }
        closure_0(tmp5, false);
        const tmp4 = closure_0;
      }
    }
    let closure_0 = null;
    handleSelectedGuildChange.addChangeListener(handleSelectedGuildChange);
    return () => {
      handleSelectedGuildChange.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};
