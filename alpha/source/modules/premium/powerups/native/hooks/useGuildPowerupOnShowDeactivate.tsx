// Module ID: 13309
// Function ID: 13310
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 13310, 2119, 5743, 2]
// Exports: default

// Module 13309 (useGuildPowerupOnShowDeactivate)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import useAlertStore from "useAlertStore" /* 5743 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(13310, dependencyMap.paths));
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return react.useCallback(() => {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};
