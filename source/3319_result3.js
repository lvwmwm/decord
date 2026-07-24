// Module ID: 3319
// Function ID: 26106
// Name: result3
// Dependencies: [1929]

// Module 3319 (result3)
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("week" === unit) {
      let text = `${tmp2}ª`;
    } else {
      text = `${tmp2}º`;
    }
    return text;
  }
};
obj.era = obj.default({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "mar\u00E7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"], wide: ["domingo", "segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\u00E1bado"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
