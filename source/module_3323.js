// Module ID: 3323
// Function ID: 26109
// Dependencies: []

// Module 3323
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  }
};
obj.era = obj.default({ values: { narrow: ["<string:214368259>", "<string:2683502595>"], abbreviated: [null, null], wide: [true, true] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["s\u00E1", "dom", "lun", "mar"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [32899072, 32964608, 33030144, 34144256, 34209792, 34340864, -950861824, 1422160138, 84296531, 1627961346, 100421962, 1297877089], abbreviated: [49701632, -1902556160, -888602621, -888668156, -893386748, -888668156, -1952514044, -1952514045, -893386749, -889520124, -888864764, -889192444], wide: ["<string:59451392>", "<string:265178112>", "<string:264568835>", "<string:221118467>", "<string:265355267>", "<string:221773827>", "<string:2482896899>", "<string:2482962435>", "<string:265551875>", "<string:265617411>", "<string:265682947>", "<string:265748483>"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [false, false, false, false, false, false, false], short: [null, null, null, null, null, null, null], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": 1958412291, "Bool(false)": 1958412291, "Bool(false)": -1170014205, "Bool(false)": -1157626954, "Bool(false)": 148549996203228600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 205284049900172300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036292300515661764, "Null": 563458946891894.5 }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
