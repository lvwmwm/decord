// Module ID: 14063
// Function ID: 14064
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 14064, 1995, 5955, 2]
// Exports: default

// Module 14063 (useGuildPowerupOnShowDeactivate)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(14064, dependencyMap.paths));
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return react.useCallback(() => {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};
