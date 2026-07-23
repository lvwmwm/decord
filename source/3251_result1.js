// Module ID: 3251
// Function ID: 25933
// Name: result1
// Dependencies: [1926]

// Module 3251 (result1)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
obj = {};
obj.date = obj.default({ formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" }, defaultWidth: "full" });
obj.time = obj.default({ formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" }, defaultWidth: "full" });
obj.dateTime = obj.default({ formats: { full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" });

export default obj;
export default exports.default;
