// Module ID: 12672
// Function ID: 12673
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 12673, 1896, 4982, 2]
// Exports: default

// Module 12672 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import useAlertStore from "useAlertStore" /* 4982 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = noop.lazy(() => asyncRequireImpl(12673, dependencyMap.paths));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return noop.useCallback(() => {
    useAlertStore.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};
