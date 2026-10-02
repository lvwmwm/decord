// Module ID: 3943
// Function ID: 3944
// Name: buildFormatLongFn
// Dependencies: [2120]

// Module 3943 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2120 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
