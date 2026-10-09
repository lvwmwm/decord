// Module ID: 4174
// Function ID: 4175
// Name: buildFormatLongFn
// Dependencies: [2133]

// Module 4174 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2133 */;

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({ date: obj.default({ formats: { full: "EEEE 'den' d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'kl'. {{time}}", long: "{{date}} 'kl'. {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) });

export default { date: obj.default({ formats: { full: "EEEE 'den' d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'kl'. {{time}}", long: "{{date}} 'kl'. {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
