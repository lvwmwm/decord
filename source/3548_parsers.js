// Module ID: 3548
// Function ID: 27126
// Name: parsers
// Dependencies: [3549, 3551, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3563, 3565, 3566, 3567, 3569, 3570, 3571, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586]

// Module 3548 (parsers)
const obj = {};
const eraParser = new require("_typeof").EraParser();
obj.G = eraParser;
const yearParser = new require("_typeof").YearParser();
obj.y = yearParser;
const localWeekYearParser = new require("_typeof").LocalWeekYearParser();
obj.Y = localWeekYearParser;
const iSOWeekYearParser = new require("_typeof").ISOWeekYearParser();
obj.R = iSOWeekYearParser;
const extendedYearParser = new require("_typeof").ExtendedYearParser();
obj.u = extendedYearParser;
const quarterParser = new require("_typeof").QuarterParser();
obj.Q = quarterParser;
const standAloneQuarterParser = new require("_typeof").StandAloneQuarterParser();
obj.q = standAloneQuarterParser;
const monthParser = new require("_typeof").MonthParser();
obj.M = monthParser;
const standAloneMonthParser = new require("_typeof").StandAloneMonthParser();
obj.L = standAloneMonthParser;
const localWeekParser = new require("_typeof").LocalWeekParser();
obj.w = localWeekParser;
const iSOWeekParser = new require("_typeof").ISOWeekParser();
obj.I = iSOWeekParser;
const dateParser = new require("_typeof").DateParser();
obj.d = dateParser;
const dayOfYearParser = new require("_typeof").DayOfYearParser();
obj.D = dayOfYearParser;
const dayParser = new require("_typeof").DayParser();
obj.E = dayParser;
const localDayParser = new require("_typeof").LocalDayParser();
obj.e = localDayParser;
const standAloneLocalDayParser = new require("_typeof").StandAloneLocalDayParser();
obj.c = standAloneLocalDayParser;
const iSODayParser = new require("_typeof").ISODayParser();
obj.i = iSODayParser;
const aMPMParser = new require("_typeof").AMPMParser();
obj.a = aMPMParser;
const aMPMMidnightParser = new require("_typeof").AMPMMidnightParser();
obj.b = aMPMMidnightParser;
const dayPeriodParser = new require("_typeof").DayPeriodParser();
obj.B = dayPeriodParser;
const hour1to12Parser = new require("_typeof").Hour1to12Parser();
obj.h = hour1to12Parser;
const hour0to23Parser = new require("_typeof").Hour0to23Parser();
obj.H = hour0to23Parser;
const hour0To11Parser = new require("_typeof").Hour0To11Parser();
obj.K = hour0To11Parser;
const hour1To24Parser = new require("_typeof").Hour1To24Parser();
obj.k = hour1To24Parser;
const minuteParser = new require("_typeof").MinuteParser();
obj.m = minuteParser;
const secondParser = new require("_typeof").SecondParser();
obj.s = secondParser;
const fractionOfSecondParser = new require("_typeof").FractionOfSecondParser();
obj.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new require("_typeof").ISOTimezoneWithZParser();
obj.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new require("_typeof").ISOTimezoneParser();
obj.x = iSOTimezoneParser;
const timestampSecondsParser = new require("_typeof").TimestampSecondsParser();
obj.t = timestampSecondsParser;
const timestampMillisecondsParser = new require("_typeof").TimestampMillisecondsParser();
obj.T = timestampMillisecondsParser;

export const parsers = obj;
