// Module ID: 4623
// Function ID: 4624
// Name: buildFormatLongFn
// Dependencies: [2133]

// Module 4623 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2133 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0915\u094B' {{time}}", long: "{{date}} '\u0915\u094B' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0915\u094B' {{time}}", long: "{{date}} '\u0915\u094B' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
