// Module ID: 4250
// Function ID: 4251
// Name: buildFormatLongFn
// Dependencies: [2073]

// Module 4250 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2073 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }) });

export default { date: obj.default({ formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }) };
