// Module ID: 3219
// Function ID: 25844
// Dependencies: []

// Module 3219
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  }
};
obj.era = obj.default({ values: { narrow: ["avtakende fullm\u00E5ne", "m\u00E5ne"], abbreviated: ["avtakende fullm\u00E5ne", "m\u00E5ne"], wide: ["a", "BXJCGj"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [null, null, null, null], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["a", "getInviteError", "a", "QAR", "a", "<string:1107296679>", "fvt", "vt", "<string:24025410>", "<string:24025600>", "<string:204882432>", "<string:820641795>"], abbreviated: [true, true, true, true, true, true, true, true, true, true, true, true], wide: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt.", "a dormir", "buenas noches", "cama", "cansancio", "descansar", "dormir", "hotel", "noche"] }, defaultWidth: "wide", formattingValues: { narrow: ["a", "getInviteError", "a", "QAR", "a", "<string:1107296679>", "fvt", "vt", "<string:24025410>", "<string:24025600>", "<string:204882432>", "<string:820641795>"], abbreviated: [true, true, true, true, true, true, true, true, true, true, true, true], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [null, null, null, null, null, null, null], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
