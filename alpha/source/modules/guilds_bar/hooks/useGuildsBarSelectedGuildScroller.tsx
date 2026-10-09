// Module ID: 16723
// Function ID: 16724
// Name: useGuildsBarSelectedGuildScroller
// Dependencies: [19, 4900, 558, 576, 2]

// Module 16723 (useGuildsBarSelectedGuildScroller)
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildsBarSelectedGuildScroller(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      let c0 = null;
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
      SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
      return () => {
        SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useGuildsBarSelectedGuildScroller(arg0) {
  let closure_0 = arg0;
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
});
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default tmp2;
