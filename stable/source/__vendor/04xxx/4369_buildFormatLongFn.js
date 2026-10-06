// Module ID: 4369
// Function ID: 4370
// Name: buildFormatLongFn
// Dependencies: [2120]

// Module 4369 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2120 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE, 'ng\u00E0y' d MMMM 'n\u0103m' y", long: "'ng\u00E0y' d MMMM 'n\u0103m' y", medium: "d MMM 'n\u0103m' y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "EEEE, 'ng\u00E0y' d MMMM 'n\u0103m' y", long: "'ng\u00E0y' d MMMM 'n\u0103m' y", medium: "d MMM 'n\u0103m' y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
