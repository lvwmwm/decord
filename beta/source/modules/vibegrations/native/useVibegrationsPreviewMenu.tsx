// Module ID: 16309
// Function ID: 16310
// Name: useVibegrationsPreviewMenu
// Dependencies: [19, 12642, 12452, 16310, 4527, 504, 12649, 16311, 1115, 3715, 2]
// Exports: default

// Module 16309 (useVibegrationsPreviewMenu)
import intl2 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import vibegrationsExternalConnections from "vibegrationsExternalConnections" /* 12649 */;
import vibegrationsProjectMenuItems from "vibegrationsProjectMenuItems" /* 16311 */;
import react from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsPreviewMenu.tsx");

export default function useVibegrationsPreviewMenu(projectId) {
  projectId = projectId.projectId;
  const refreshApplicationId = projectId.refreshApplicationId;
  let pending;
  const tmp = refreshApplicationId(pending[2])(refreshApplicationId);
  pending = tmp.pending;
  const refresh = tmp.refresh;
  let obj = projectId(pending[3]);
  const vibegrationsConnectActions = obj.useVibegrationsConnectActions(projectId, projectId(pending[4]).presentError);
  const pending2 = vibegrationsConnectActions.pending;
  const connect = vibegrationsConnectActions.connect;
  let obj2 = projectId(pending[5]);
  const items = [pending2];
  const items1 = [projectId];
  const stateFromStores = obj2.useStateFromStores(items, () => VibegrationsConnectionStore.getDeclaredConnections(projectId), items1);
  const items2 = [stateFromStores];
  const memo = refresh.useMemo(() => {
    const obj = vibegrationsExternalConnections;
    return obj.externalConnectionOffers(stateFromStores);
  }, items2);
  const items3 = [pending2, memo, refreshApplicationId, pending];
  const memo1 = refresh.useMemo(() => {
    const obj = vibegrationsProjectMenuItems;
    const obj2 = { canRefresh: null != refreshApplicationId, refreshPending: pending, offers: memo, connectPending: pending2 };
    return obj.previewMenuItems(obj2);
  }, items3);
  const items4 = [connect, stateFromStores, refresh];
  const onPress = refresh.useCallback((kind) => {
    let closure_0 = kind;
    if ("refresh" !== kind.kind) {
      const found = stateFromStores.find((type) => type.type === connectionType.connectionType);
      if (null != found) {
        if (found.configured) {
          connect(found);
        } else {
          const presentError = ToastUtils.presentError;
          ToastUtils;
          const intl = intl2.intl;
          presentError(intl.string(_modDef3715.avu1u4));
        }
      }
    } else {
      refresh();
    }
  }, items4);
  const items5 = [memo1, onPress];
  return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
};
