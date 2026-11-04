// Module ID: 12406
// Function ID: 12407
// Name: useConjurePreviewMenu
// Dependencies: [19, 11047, 12407, 12411, 5845, 504, 12377, 12412, 1113, 3995, 2]
// Exports: default

// Module 12406 (useConjurePreviewMenu)
import intl2 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ToastUtils from "ToastUtils" /* 5845 */;
import conjureExternalConnections from "conjureExternalConnections" /* 12377 */;
import conjureProjectMenuItems from "conjureProjectMenuItems" /* 12412 */;
import react from "react" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 11047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/native/useConjurePreviewMenu.tsx");

export default function useConjurePreviewMenu(projectId) {
  projectId = projectId.projectId;
  const refreshApplicationId = projectId.refreshApplicationId;
  let pending;
  const tmp = refreshApplicationId(pending[2])(refreshApplicationId);
  pending = tmp.pending;
  const refresh = tmp.refresh;
  let obj = projectId(pending[3]);
  const conjureConnectActions = obj.useConjureConnectActions(projectId, projectId(pending[4]).presentError);
  const pending2 = conjureConnectActions.pending;
  const connect = conjureConnectActions.connect;
  let obj2 = projectId(pending[5]);
  const items = [pending2];
  const items1 = [projectId];
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureSettingsStore.getDeclaredConnections(projectId), items1);
  const items2 = [stateFromStores];
  const memo = refresh.useMemo(() => {
    const obj = conjureExternalConnections;
    return obj.externalConnectionOffers(stateFromStores);
  }, items2);
  const items3 = [pending2, memo, refreshApplicationId, pending];
  const memo1 = refresh.useMemo(() => {
    const obj = conjureProjectMenuItems;
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
          presentError(intl.string(_modDef3995["jCQ/1B"]));
        }
      }
    } else {
      refresh();
    }
  }, items4);
  const items5 = [memo1, onPress];
  return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
};
