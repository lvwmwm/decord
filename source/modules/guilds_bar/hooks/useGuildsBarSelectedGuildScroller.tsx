// Module ID: 14889
// Function ID: 113518
// Name: useGuildsBarSelectedGuildScroller
// Dependencies: [31, 3947, 2]
// Exports: default

// Module 14889 (useGuildsBarSelectedGuildScroller)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    function handleSelectedGuildChange() {
      const guildId = outer2_1.getGuildId();
      if (guildId !== c0) {
        let tmp3 = null;
        if (null != guildId) {
          tmp3 = guildId;
        }
        c0 = tmp3;
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = guildId;
        }
        c0(tmp5, false);
        const tmp4 = c0;
      }
    }
    let c0 = null;
    outer1_1.addChangeListener(handleSelectedGuildChange);
    return () => {
      outer2_1.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};
