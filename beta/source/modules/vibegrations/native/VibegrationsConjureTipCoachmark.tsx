// Module ID: 16405
// Function ID: 16406
// Name: VibegrationsConjureTipCoachmark
// Dependencies: [19, 1115, 3715, 10589, 2]
// Exports: default

// Module 16405 (VibegrationsConjureTipCoachmark)
import intl4 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureTipCoachmark.tsx");

export default function VibegrationsConjureTipCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  let items = [onDismiss, visible];
  const targetRef = visible.targetRef;
  const memo = react.useMemo(() => {
    let intl;
    let intl3;
    let items;
    const obj = { visible, position: "top", title: intl.string(_modDef3715.n8wtkv), description: items.join("\n"), buttonLabel: intl3.string(_modDef3715.sZCqrE), buttonVariant: "secondary", onButtonPress: onDismiss, onDismiss };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    items = [intl2.string(_modDef3715.cK0dk1)];
    const items1 = [_modDef3715.ZK2O25, _modDef3715["122Ir6"], _modDef3715["9KCASa"]];
    HermesBuiltin.arraySpread(items, items1.map((item) => {
      const intl = visible(closure_1_2[1]).intl;
      return "\u2022 " + intl.string(item);
    }), 1);
    intl3 = intl4.intl;
    return obj;
  }, items);
  let obj = visible(10589);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
