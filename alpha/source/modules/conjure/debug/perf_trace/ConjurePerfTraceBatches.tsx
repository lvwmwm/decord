// Module ID: 13166
// Function ID: 13167
// Name: ConjurePerfTraceBatches
// Dependencies: [2]
// Exports: applyTimingTraceBatch

// Module 13166 (ConjurePerfTraceBatches)
import size from "module_2" /* 2 */;

function foldRecord(_Map1, nextResult) {
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj18;
  let obj20;
  let obj4;
  let obj6;
  let obj8;
  let tmp = _Map1;
  if (_Map1 == null) {
    tmp = { id: nextResult.id, parent: null, name: "", start: 0, end: null };
    const obj = { id: nextResult.id, parent: null, name: "", start: 0, end: null };
  }
  const obj2 = {};
  const merged = Object.assign(tmp);
  if (undefined !== nextResult.parent) {
    obj4 = { parent: nextResult.parent };
    const obj3 = { parent: nextResult.parent };
  } else {
    obj4 = {};
  }
  const merged1 = Object.assign(obj4);
  if (null != nextResult.name) {
    obj6 = { name: nextResult.name };
    const obj5 = { name: nextResult.name };
  } else {
    obj6 = {};
  }
  const merged2 = Object.assign(obj6);
  if (null != nextResult.start) {
    obj8 = { start: nextResult.start };
    const obj7 = { start: nextResult.start };
  } else {
    obj8 = {};
  }
  const merged3 = Object.assign(obj8);
  if (null != nextResult.end) {
    obj10 = { end: nextResult.end };
    const obj9 = { end: nextResult.end };
  } else {
    obj10 = {};
  }
  const merged4 = Object.assign(obj10);
  if (null != nextResult.attrs) {
    const obj11 = { attrs: obj12 };
    obj12 = {};
    const merged5 = Object.assign(tmp.attrs);
    const merged6 = Object.assign(nextResult.attrs);
    obj13 = obj11;
  } else {
    obj13 = {};
  }
  const merged7 = Object.assign(obj13);
  if (null != nextResult.details) {
    const obj14 = { details: obj15 };
    obj15 = {};
    const merged8 = Object.assign(tmp.details);
    const merged9 = Object.assign(nextResult.details);
    obj16 = obj14;
  } else {
    obj16 = {};
  }
  const merged10 = Object.assign(obj16);
  if (null != nextResult.error) {
    obj18 = { error: nextResult.error };
    const obj17 = { error: nextResult.error };
  } else {
    obj18 = {};
  }
  const merged11 = Object.assign(obj18);
  if (null != nextResult.waits_on) {
    obj20 = { waits_on: nextResult.waits_on };
    const obj19 = { waits_on: nextResult.waits_on };
  } else {
    obj20 = {};
  }
  const merged12 = Object.assign(obj20);
  return obj2;
}
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceBatches.tsx");

export const applyTimingTraceBatch = function applyTimingTraceBatch(found, batch, live) {
  let max;
  let num;
  let sorted;
  let spans;
  const _Map = Map;
  if (found != null) {
    spans = found.spans;
  }
  if (spans == null) {
    spans = [];
  }
  const _Map1 = new _Map(spans.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const iter = batch.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = foldRecord;
    let result = _Map1.set(nextResult.id, foldRecord(_Map1.get(nextResult.id), nextResult));
    continue;
  }
  const tmp5 = null == found || batch.at >= found.as_of ? batch.name : found.name;
  let closure_0 = tmp5;
  let obj = {
    id: batch.trace_id,
    name: tmp5,
    started_at: batch.started_at,
    as_of: tmp4 ? batch.at : found.as_of,
    started_by: batch.started_by,
    spans: sorted.map((parent) => {
      let tmp = parent;
      if (null == parent.parent) {
        tmp = parent;
        if (parent.name !== closure_0) {
          const obj = { name: tmp2 };
          const merged = Object.assign(parent);
          tmp = obj;
        }
      }
      return tmp;
    }),
    dropped: max(num, batch.dropped),
    live
  };
  let items = [..._Map1.values()];
  sorted = items.sort((id, id2) => id.id - id2.id);
  num = undefined;
  const _Math = Math;
  max = Math.max;
  if (found != null) {
    num = found.dropped;
  }
  if (num == null) {
    num = 0;
  }
  if (!(null == found || batch.at >= found.as_of)) {
    live = found.live;
  }
  return obj;
};
