// Module ID: 3667
// Function ID: 3668
// Name: parsers
// Dependencies: [3668, 3670, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3682, 3684, 3685, 3686, 3688, 3689, 3690, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705]

// Module 3667 (parsers)
const obj = { G: null, y: null, Y: null, R: null, u: null, Q: null, q: null, M: null, L: null, w: null, I: null, d: null, D: null, E: null, e: null, c: null, i: null, a: null, b: null, B: null, h: null, H: null, K: null, k: null, m: null, s: null, S: null, X: null, x: null, t: null, T: null };
const eraParser = new require("_typeof").EraParser();
obj[0] = eraParser;
const yearParser = new require("_typeof").YearParser();
obj[1] = yearParser;
const localWeekYearParser = new require("_typeof").LocalWeekYearParser();
obj[2] = localWeekYearParser;
const iSOWeekYearParser = new require("_typeof").ISOWeekYearParser();
obj[3] = iSOWeekYearParser;
const extendedYearParser = new require("_typeof").ExtendedYearParser();
obj[4] = extendedYearParser;
const quarterParser = new require("_typeof").QuarterParser();
obj[5] = quarterParser;
const standAloneQuarterParser = new require("_typeof").StandAloneQuarterParser();
obj[6] = standAloneQuarterParser;
const monthParser = new require("_typeof").MonthParser();
obj[7] = monthParser;
const standAloneMonthParser = new require("_typeof").StandAloneMonthParser();
obj[8] = standAloneMonthParser;
const localWeekParser = new require("_typeof").LocalWeekParser();
obj[9] = localWeekParser;
const iSOWeekParser = new require("_typeof").ISOWeekParser();
obj[10] = iSOWeekParser;
const dateParser = new require("_typeof").DateParser();
obj[11] = dateParser;
const dayOfYearParser = new require("_typeof").DayOfYearParser();
obj[12] = dayOfYearParser;
const dayParser = new require("_typeof").DayParser();
obj[13] = dayParser;
const localDayParser = new require("_typeof").LocalDayParser();
obj[14] = localDayParser;
const standAloneLocalDayParser = new require("_typeof").StandAloneLocalDayParser();
obj[15] = standAloneLocalDayParser;
const iSODayParser = new require("_typeof").ISODayParser();
obj[16] = iSODayParser;
const aMPMParser = new require("_typeof").AMPMParser();
obj[17] = aMPMParser;
const aMPMMidnightParser = new require("_typeof").AMPMMidnightParser();
obj[18] = aMPMMidnightParser;
const dayPeriodParser = new require("_typeof").DayPeriodParser();
obj[19] = dayPeriodParser;
const hour1to12Parser = new require("_typeof").Hour1to12Parser();
obj[20] = hour1to12Parser;
const hour0to23Parser = new require("_typeof").Hour0to23Parser();
obj[21] = hour0to23Parser;
const hour0To11Parser = new require("_typeof").Hour0To11Parser();
obj[22] = hour0To11Parser;
const hour1To24Parser = new require("_typeof").Hour1To24Parser();
obj[23] = hour1To24Parser;
const minuteParser = new require("_typeof").MinuteParser();
obj[24] = minuteParser;
const secondParser = new require("_typeof").SecondParser();
obj[25] = secondParser;
const fractionOfSecondParser = new require("_typeof").FractionOfSecondParser();
obj[26] = fractionOfSecondParser;
const iSOTimezoneWithZParser = new require("_typeof").ISOTimezoneWithZParser();
obj[27] = iSOTimezoneWithZParser;
const iSOTimezoneParser = new require("_typeof").ISOTimezoneParser();
obj[28] = iSOTimezoneParser;
const timestampSecondsParser = new require("_typeof").TimestampSecondsParser();
obj[29] = timestampSecondsParser;
const timestampMillisecondsParser = new require("_typeof").TimestampMillisecondsParser();
obj[30] = timestampMillisecondsParser;

export const parsers = obj;
