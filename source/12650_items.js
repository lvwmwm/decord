// Module ID: 12650
// Function ID: 97269
// Name: items
// Dependencies: []

// Module 12650 (items)
let closure_2 = require(dependencyMap[0]);
let obj = {};
const items = [];
obj.re = items;
const items1 = [];
obj.safeRe = items1;
const items2 = [];
obj.src = items2;
obj = {};
obj.t = obj;
let closure_7 = 0;
const items3 = [[true, true], , ];
const items4 = [true, require(dependencyMap[1]).MAX_LENGTH];
items3[1] = items4;
const items5 = ["[a-zA-Z0-9-]", require(dependencyMap[1]).MAX_SAFE_BUILD_LENGTH];
items3[2] = items5;
function createToken(BUILD, arg1, arg2) {
  let tmp12;
  let tmp13;
  let str = arg1;
  while (tmp !== undefined) {
    let tmp10 = callback;
    let tmp11 = callback(tmp2, 2);
    [tmp12, tmp13] = tmp11;
    let tmp14 = str;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp12 + "*");
    let _HermesInternal2 = HermesInternal;
    let str4 = "";
    let tmp15 = tmp12;
    let str5 = "{0,";
    let tmp16 = tmp13;
    let str6 = "}";
    let str7 = parts.join("" + tmp12 + "{0," + tmp13 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str7.split("" + tmp12 + "+");
    let _HermesInternal4 = HermesInternal;
    let str8 = "";
    let tmp17 = tmp12;
    let str9 = "{1,";
    let tmp18 = tmp13;
    str = parts1.join("" + tmp12 + "{1," + tmp13 + "}");
    // continue
  }
  let closure_7 = tmp4 + 1;
  require(dependencyMap[2])(BUILD, +closure_7, arg1);
  obj[BUILD] = +closure_7;
  items2[+closure_7] = arg1;
  let str2;
  if (arg2) {
    str2 = "g";
  }
  const regExp = new RegExp(arg1, str2);
  items[+closure_7] = regExp;
  let str3;
  if (arg2) {
    str3 = "g";
  }
  const regExp1 = new RegExp(str, str3);
  items1[+closure_7] = regExp1;
}
const token = createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
const token1 = createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
const token2 = createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-]" + "[a-zA-Z0-9-]" + "*");
const token3 = createToken("MAINVERSION", "(" + items2[obj.NUMERICIDENTIFIER] + ")\\.(" + items2[obj.NUMERICIDENTIFIER] + ")\\.(" + items2[obj.NUMERICIDENTIFIER] + ")");
const token4 = createToken("MAINVERSIONLOOSE", "(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")\\.(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")\\.(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")");
const token5 = createToken("PRERELEASEIDENTIFIER", "(?:" + items2[obj.NUMERICIDENTIFIER] + "|" + items2[obj.NONNUMERICIDENTIFIER] + ")");
const token6 = createToken("PRERELEASEIDENTIFIERLOOSE", "(?:" + items2[obj.NUMERICIDENTIFIERLOOSE] + "|" + items2[obj.NONNUMERICIDENTIFIER] + ")");
const token7 = createToken("PRERELEASE", "(?:-(" + items2[obj.PRERELEASEIDENTIFIER] + "(?:\\." + items2[obj.PRERELEASEIDENTIFIER] + ")*))");
const token8 = createToken("PRERELEASELOOSE", "(?:-?(" + items2[obj.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + items2[obj.PRERELEASEIDENTIFIERLOOSE] + ")*))");
const token9 = createToken("BUILDIDENTIFIER", "" + "[a-zA-Z0-9-]" + "+");
const token10 = createToken("BUILD", "(?:\\+(" + items2[obj.BUILDIDENTIFIER] + "(?:\\." + items2[obj.BUILDIDENTIFIER] + ")*))");
const token11 = createToken("FULLPLAIN", "v?" + items2[obj.MAINVERSION] + items2[obj.PRERELEASE] + "?" + items2[obj.BUILD] + "?");
const token12 = createToken("FULL", "^" + items2[obj.FULLPLAIN] + "$");
const token13 = createToken("LOOSEPLAIN", "[v=\\s]*" + items2[obj.MAINVERSIONLOOSE] + items2[obj.PRERELEASELOOSE] + "?" + items2[obj.BUILD] + "?");
const token14 = createToken("LOOSE", "^" + items2[obj.LOOSEPLAIN] + "$");
const token15 = createToken("GTLT", "((?:<|>)?=?)");
const token16 = createToken("XRANGEIDENTIFIERLOOSE", "" + items2[obj.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*");
const token17 = createToken("XRANGEIDENTIFIER", "" + items2[obj.NUMERICIDENTIFIER] + "|x|X|\\*");
const token18 = createToken("XRANGEPLAIN", "[v=\\s]*(" + items2[obj.XRANGEIDENTIFIER] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIER] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIER] + ")(?:" + items2[obj.PRERELEASE] + ")?" + items2[obj.BUILD] + "?)?)?");
const token19 = createToken("XRANGEPLAINLOOSE", "[v=\\s]*(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:" + items2[obj.PRERELEASELOOSE] + ")?" + items2[obj.BUILD] + "?)?)?");
const token20 = createToken("XRANGE", "^" + items2[obj.GTLT] + "\\s*" + items2[obj.XRANGEPLAIN] + "$");
const token21 = createToken("XRANGELOOSE", "^" + items2[obj.GTLT] + "\\s*" + items2[obj.XRANGEPLAINLOOSE] + "$");
const token22 = createToken("COERCEPLAIN", "(^|[^\\d])(\\d{1," + require(dependencyMap[1]).MAX_SAFE_COMPONENT_LENGTH + "})(?:\\.(\\d{1," + require(dependencyMap[1]).MAX_SAFE_COMPONENT_LENGTH + "}))?(?:\\.(\\d{1," + require(dependencyMap[1]).MAX_SAFE_COMPONENT_LENGTH + "}))?");
const token23 = createToken("COERCE", "" + items2[obj.COERCEPLAIN] + "(?:$|[^\\d])");
const sum = items2[obj.COERCEPLAIN] + "(?:" + items2[obj.PRERELEASE] + ")?";
const token24 = createToken("COERCEFULL", sum + "(?:" + items2[obj.BUILD] + ")?(?:$|[^\\d])");
const token25 = createToken("COERCERTL", items2[obj.COERCE], true);
const token26 = createToken("COERCERTLFULL", items2[obj.COERCEFULL], true);
const token27 = createToken("LONETILDE", "(?:~>?)");
const token28 = createToken("TILDETRIM", "(\\s*)" + items2[obj.LONETILDE] + "\\s+", true);
obj.tildeTrimReplace = "$1~";
const token29 = createToken("TILDE", "^" + items2[obj.LONETILDE] + items2[obj.XRANGEPLAIN] + "$");
const token30 = createToken("TILDELOOSE", "^" + items2[obj.LONETILDE] + items2[obj.XRANGEPLAINLOOSE] + "$");
const token31 = createToken("LONECARET", "(?:\\^)");
const token32 = createToken("CARETTRIM", "(\\s*)" + items2[obj.LONECARET] + "\\s+", true);
obj.caretTrimReplace = "$1^";
const token33 = createToken("CARET", "^" + items2[obj.LONECARET] + items2[obj.XRANGEPLAIN] + "$");
const token34 = createToken("CARETLOOSE", "^" + items2[obj.LONECARET] + items2[obj.XRANGEPLAINLOOSE] + "$");
const token35 = createToken("COMPARATORLOOSE", "^" + items2[obj.GTLT] + "\\s*(" + items2[obj.LOOSEPLAIN] + ")$|^$");
const token36 = createToken("COMPARATOR", "^" + items2[obj.GTLT] + "\\s*(" + items2[obj.FULLPLAIN] + ")$|^$");
const token37 = createToken("COMPARATORTRIM", "(\\s*)" + items2[obj.GTLT] + "\\s*(" + items2[obj.LOOSEPLAIN] + "|" + items2[obj.XRANGEPLAIN] + ")", true);
obj.comparatorTrimReplace = "$1$2$3";
const token38 = createToken("HYPHENRANGE", "^\\s*(" + items2[obj.XRANGEPLAIN] + ")\\s+-\\s+(" + items2[obj.XRANGEPLAIN] + ")\\s*$");
const token39 = createToken("HYPHENRANGELOOSE", "^\\s*(" + items2[obj.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + items2[obj.XRANGEPLAINLOOSE] + ")\\s*$");
const token40 = createToken("STAR", "(<|>)?=?\\s*\\*");
const token41 = createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
const token42 = createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");

export default obj;
