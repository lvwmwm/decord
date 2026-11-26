// Module ID: 13435
// Function ID: 13436
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 13436, 2119, 5862, 2]
// Exports: default

// Module 13435 (useGuildPowerupOnShowDeactivate)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import useAlertStore from "useAlertStore" /* 5862 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(13436, dependencyMap.paths));
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return react.useCallback(() => {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};
