// Module ID: 13122
// Function ID: 13123
// Name: conjureHomeProjectOrder
// Dependencies: [11, 2]
// Exports: conjureProjectEditedAt, sortConjureProjectsByActivity, sortConjureProjectsByTime

// Module 13122 (conjureHomeProjectOrder)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const f103445 = (time, time2) => {
  let num;
  if (time.time !== time2.time) {
    num = time2.time - time.time;
  } else {
    const id = time.project.id;
    const id1 = time2.project.id;
    if (id.length !== id1.length) {
      num = id1.length - id.length;
    } else {
      num = 1;
      if (id >= id1) {
        let num2 = 0;
        if (id > id1) {
          num2 = -1;
        }
        num = num2;
      }
    }
  }
  return num;
};
const f103446 = (project) => project.project;
const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectOrder.tsx");

export function conjureProjectEditedAt(id) {
  const _Math = Math;
  let num = 0;
  const obj = /^\d+$/;
  if (obj.test(id.id)) {
    const obj2 = SnowflakeUtilsDefault;
    num = obj2.extractTimestamp(id.id);
  }
  const updated_at = id.updated_at;
  let num2 = 0;
  if (null != updated_at) {
    const _Date = Date;
    num2 = Date.parse(updated_at);
  }
  let num3 = 0;
  if (!Number.isNaN(num2)) {
    num3 = num2;
  }
  return max(num, num3);
}
export function sortConjureProjectsByTime(arg0) {
  const items = [...arg0];
  const sorted = items.sort(f103445);
  return sorted.map(f103446);
}
export function sortConjureProjectsByActivity(arr) {
  const items = [
    ...arr.map((project) => {
      let finishedAt;
      let max;
      let max2Result;
      let turnStartedAt;
      const obj = { project: project.project, time: max(max2Result, turnStartedAt, finishedAt) };
      ({ project, turnStartedAt, finishedAt } = project);
      const _Math = Math;
      max = Math.max;
      const _Math2 = Math;
      const max2 = Math.max;
      let num = 0;
      const obj2 = /^\d+$/;
      if (obj2.test(project.id)) {
        const obj3 = SnowflakeUtilsDefault;
        num = obj3.extractTimestamp(project.id);
      }
      const updated_at = project.updated_at;
      let num2 = 0;
      if (null != updated_at) {
        const _Date = Date;
        num2 = Date.parse(updated_at);
      }
      let num3 = 0;
      if (!Number.isNaN(num2)) {
        num3 = num2;
      }
      max2Result = max2(num, num3);
      if (turnStartedAt == null) {
        turnStartedAt = 0;
      }
      if (finishedAt == null) {
        finishedAt = 0;
      }
      return obj;
    })
  ];
  const sorted = items.sort(f103445);
  return sorted.map(f103446);
}
