// Module ID: 3511
// Function ID: 27001
// Name: parsers
// Dependencies: []

// Module 3511 (parsers)
const obj = {};
const eraParser = new require(dependencyMap[0]).EraParser();
obj.G = eraParser;
const yearParser = new require(dependencyMap[1]).YearParser();
obj.y = yearParser;
const localWeekYearParser = new require(dependencyMap[2]).LocalWeekYearParser();
obj.Y = localWeekYearParser;
const iSOWeekYearParser = new require(dependencyMap[3]).ISOWeekYearParser();
obj.R = iSOWeekYearParser;
const extendedYearParser = new require(dependencyMap[4]).ExtendedYearParser();
obj.u = extendedYearParser;
const quarterParser = new require(dependencyMap[5]).QuarterParser();
obj.Q = quarterParser;
const standAloneQuarterParser = new require(dependencyMap[6]).StandAloneQuarterParser();
obj.q = standAloneQuarterParser;
const monthParser = new require(dependencyMap[7]).MonthParser();
obj.M = monthParser;
const standAloneMonthParser = new require(dependencyMap[8]).StandAloneMonthParser();
obj.L = standAloneMonthParser;
const localWeekParser = new require(dependencyMap[9]).LocalWeekParser();
obj.w = localWeekParser;
const iSOWeekParser = new require(dependencyMap[10]).ISOWeekParser();
obj.I = iSOWeekParser;
const dateParser = new require(dependencyMap[11]).DateParser();
obj.d = dateParser;
const dayOfYearParser = new require(dependencyMap[12]).DayOfYearParser();
obj.D = dayOfYearParser;
const dayParser = new require(dependencyMap[13]).DayParser();
obj.E = dayParser;
const localDayParser = new require(dependencyMap[14]).LocalDayParser();
obj.e = localDayParser;
const standAloneLocalDayParser = new require(dependencyMap[15]).StandAloneLocalDayParser();
obj.c = standAloneLocalDayParser;
const iSODayParser = new require(dependencyMap[16]).ISODayParser();
obj.i = iSODayParser;
const aMPMParser = new require(dependencyMap[17]).AMPMParser();
obj.a = aMPMParser;
const aMPMMidnightParser = new require(dependencyMap[18]).AMPMMidnightParser();
obj.b = aMPMMidnightParser;
const dayPeriodParser = new require(dependencyMap[19]).DayPeriodParser();
obj.B = dayPeriodParser;
const hour1to12Parser = new require(dependencyMap[20]).Hour1to12Parser();
obj.h = hour1to12Parser;
const hour0to23Parser = new require(dependencyMap[21]).Hour0to23Parser();
obj.H = hour0to23Parser;
const hour0To11Parser = new require(dependencyMap[22]).Hour0To11Parser();
obj.K = hour0To11Parser;
const hour1To24Parser = new require(dependencyMap[23]).Hour1To24Parser();
obj.k = hour1To24Parser;
const minuteParser = new require(dependencyMap[24]).MinuteParser();
obj.m = minuteParser;
const secondParser = new require(dependencyMap[25]).SecondParser();
obj.s = secondParser;
const fractionOfSecondParser = new require(dependencyMap[26]).FractionOfSecondParser();
obj.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new require(dependencyMap[27]).ISOTimezoneWithZParser();
obj.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new require(dependencyMap[28]).ISOTimezoneParser();
obj.x = iSOTimezoneParser;
const timestampSecondsParser = new require(dependencyMap[29]).TimestampSecondsParser();
obj.t = timestampSecondsParser;
const timestampMillisecondsParser = new require(dependencyMap[30]).TimestampMillisecondsParser();
obj.T = timestampMillisecondsParser;

export const parsers = obj;
