// Module ID: 4330
// Function ID: 4331
// Name: buildFormatLongFn
// Dependencies: [2071]

// Module 4330 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2071 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
