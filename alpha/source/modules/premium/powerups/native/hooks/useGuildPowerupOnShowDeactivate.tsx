// Module ID: 14356
// Function ID: 14357
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 14357, 2118, 6092, 2]
// Exports: default

// Module 14356 (useGuildPowerupOnShowDeactivate)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import useAlertStore from "useAlertStore" /* 6092 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(14357, dependencyMap.paths));
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return react.useCallback(() => {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};
