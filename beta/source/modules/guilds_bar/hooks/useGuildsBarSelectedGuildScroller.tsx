// Module ID: 15996
// Function ID: 15997
// Name: useGuildsBarSelectedGuildScroller
// Dependencies: [19, 4655, 2]
// Exports: default

// Module 15996 (useGuildsBarSelectedGuildScroller)
import react_mod from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  let closure_0;
  react = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    function handleSelectedGuildChange() {
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId !== c0) {
        let tmp3 = guildId;
        if (guildId == null) {
          tmp3 = null;
        }
        c0 = tmp3;
        const tmp4 = closure_0;
        if (guildId == null) {
          guildId = null;
        }
        tmp4(guildId, false);
      }
    }
    let c0 = null;
    SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
    return () => {
      SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};
