// Module ID: 12257
// Function ID: 12258
// Name: conjureProjectMenuItems
// Dependencies: [1125, 3831, 2]
// Exports: previewMenuItems

// Module 12257 (conjureProjectMenuItems)
import intl4 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectMenuItems.tsx");

export const previewMenuItems = function previewMenuItems(canRefresh) {
  let connectPending;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj5;
  let offers;
  ({ offers, connectPending } = canRefresh);
  const items = [];
  if (canRefresh.canRefresh) {
    const push = items.push;
    const obj = { id: "preview-refresh", label: intl.string(_modDef3831["/nOi5n"]), kind: "refresh", disabled: tmp };
    intl = intl4.intl;
    push(obj);
  }
  const iter = offers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj4;
    let connection = nextResult.connection;
    let push2 = items.push;
    if ("authorize" === nextResult.offer) {
      let obj2 = { id: "preview-connect-" + connection.type, label: intl2.formatToPlainString(_modDef3831.DEwmI5, obj3), kind: "connect", connectionType: connection.type, disabled: connectPending.has(connection.type) };
      let _HermesInternal = HermesInternal;
      intl2 = intl4.intl;
      obj3 = { label: connection.label };
      obj4 = obj2;
    } else {
      obj4 = { id: "preview-connect-" + connection.type, label: intl3.formatToPlainString(_modDef3831.GnHcWc, obj5), kind: "connect", connectionType: connection.type, disabled: true };
      let _HermesInternal2 = HermesInternal;
      intl3 = intl4.intl;
      obj5 = { label: connection.label };
    }
    let push2Result = push2(obj4);
    continue;
  }
  return items;
};
