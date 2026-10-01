// Module ID: 8864
// Function ID: 8865
// Name: IgnoreThermalStateAlert
// Dependencies: [19, 21, 4836, 5300, 1115, 8782, 4832, 2]
// Exports: IgnoreThermalStateAlert

// Module 8864 (IgnoreThermalStateAlert)
import AlertDefault from "Alert" /* 5300 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8782 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  onConfirm = onConfirm.onConfirm;
  const merged = Object.assign(onConfirm, Object.assign({ onConfirm: 0 }));
  const tmp2 = closure_5();
  let obj = {
    cancelText: intl.string(onConfirm(1115).t["1fRDnT"]),
    onCancel() {
      if (onConfirm != null) {
        tmp();
      }
      const obj = EmbeddedActivitiesActionCreators;
      const result = obj.disregardSeriousThermalState();
    },
    confirmText: intl2.string(onConfirm(1115).t.oEAioF),
    children: items
  };
  const tmp3 = AlertDefault;
  const merged1 = Object.assign(merged);
  intl = onConfirm(1115).intl;
  intl2 = onConfirm(1115).intl;
  const obj2 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(onConfirm(1115).t.v5X4fZ) };
  const Text = onConfirm(4832).Text;
  intl3 = onConfirm(1115).intl;
  items = [closure_3(Text, obj2), ];
  const obj3 = { style: tmp2.text, variant: "text-md/medium", children: intl4.string(onConfirm(1115).t.VOgTjy) };
  const Text2 = onConfirm(4832).Text;
  intl4 = onConfirm(1115).intl;
  items[1] = closure_3(Text2, obj3);
  return closure_4(tmp3, obj);
};
