// Module ID: 12314
// Function ID: 12315
// Name: conjureCardOverrides
// Dependencies: [2]
// Exports: conjureCardExpanded, toggleConjureCard

// Module 12314 (conjureCardOverrides)
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("modules/conjure/chat/conjureCardOverrides.tsx");

export const conjureCardExpanded = function conjureCardExpanded(c14, render_id, arg2) {
  let value = c14.get(render_id);
  if (value == null) {
    value = !arg2;
  }
  return value;
};
export const toggleConjureCard = function toggleConjureCard(get, arg1, arg2) {
  map = new Map(get);
  set = map.set;
  let value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = set(arg1, !value);
  return map;
};
