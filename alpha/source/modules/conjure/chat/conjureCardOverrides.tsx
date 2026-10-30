// Module ID: 12554
// Function ID: 12555
// Name: conjureCardOverrides
// Dependencies: [2]
// Exports: conjureCardExpanded, toggleConjureCard

// Module 12554 (conjureCardOverrides)
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("modules/conjure/chat/conjureCardOverrides.tsx");

export function conjureCardExpanded(c15, render_id, arg2) {
  let value = c15.get(render_id);
  if (value == null) {
    value = !arg2;
  }
  return value;
}
export function toggleConjureCard(get, arg1, arg2) {
  map = new Map(get);
  set = map.set;
  let value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = set(arg1, !value);
  return map;
}
