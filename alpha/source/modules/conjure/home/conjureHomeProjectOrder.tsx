// Module ID: 14396
// Function ID: 14397
// Name: conjureHomeProjectOrder
// Dependencies: [11, 2]
// Exports: sortConjureProjectsByActivity

// Module 14396 (conjureHomeProjectOrder)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectOrder.tsx");

export const sortConjureProjectsByActivity = function sortConjureProjectsByActivity(arr) {
  const mapped = arr.map((project) => {
    let finishedAt;
    let max;
    let num;
    let num3;
    let turnStartedAt;
    const obj = { project: project.project, time: max(num, num3, turnStartedAt, finishedAt) };
    ({ project, turnStartedAt, finishedAt } = project);
    const _Math = Math;
    max = Math.max;
    num = 0;
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
    num3 = 0;
    if (!Number.isNaN(num2)) {
      num3 = num2;
    }
    if (turnStartedAt == null) {
      turnStartedAt = 0;
    }
    if (finishedAt == null) {
      finishedAt = 0;
    }
    return obj;
  });
  const sorted = mapped.sort((time, time2) => {
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
  });
  return sorted.map((project) => project.project);
};
