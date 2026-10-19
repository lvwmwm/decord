// Module ID: 12822
// Function ID: 12823
// Name: StartupProfiler
// Dependencies: [19, 21, 558, 576, 10, 2]

// Module 12822 (StartupProfiler)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
const obj2 = {};
function setLevels(obj, arg1) {
  for (const key10006 in obj) {
    obj2[key10006] = arg1;
    let tmp4 = setLevels(obj[key10006], arg1 + " ");
    continue;
  }
}
const obj3 = { [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } };
for (const key10073 in obj3) {
  let tmp6 = key10073;
  obj2[key10073] = "";
  let tmp7 = obj3[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      obj2[tmp3] = " ";
      let setLevelsResult = setLevels(tmp7[tmp3], "  ");
      continue;
    }
  }
  continue;
}
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartupProfiler(arg0) {
  let children;
  let profile;
  let tmp4;
  const obj = profile(576);
  const cResult = obj.c(6);
  ({ children, profile } = arg0);
  let tmp2 = AppStartPerformanceDefault;
  let str = obj2[profile];
  let mark = tmp2.mark;
  if (str == null) {
    str = "";
  }
  mark("\u{1F3A8}", "" + str + profile + " render");
  if (cResult[0] !== profile) {
    const fn = function o(arg0, arg1, arg2) {
      let str = obj2[profile];
      const mark = AppStartPerformanceDefault.mark;
      AppStartPerformanceDefault;
      const tmp2 = profile;
      if (str == null) {
        str = "";
      }
      mark("\u{1F3A8}", "" + str + tmp2 + " " + arg1, arg2);
    };
    cResult[0] = profile;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === profile) {
      let tmp5;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
  }
  const tmp6 = <react.Profiler id={profile} onRender={tmp4}>{children}</react.Profiler>;
  cResult[2] = children;
  cResult[3] = profile;
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : (function StartupProfiler(profile) {
  profile = profile.profile;
  const children = profile.children;
  const tmp = AppStartPerformanceDefault;
  let str = obj2[profile];
  let mark = tmp.mark;
  if (str == null) {
    str = "";
  }
  mark("\u{1F3A8}", "" + str + profile + " render");
  return <react.Profiler id={profile} onRender={function onRender(arg0, arg1, arg2) {
    let str = obj2[profile];
    const mark = AppStartPerformanceDefault.mark;
    AppStartPerformanceDefault;
    const tmp2 = profile;
    if (str == null) {
      str = "";
    }
    mark("\u{1F3A8}", "" + str + tmp2 + " " + arg1, arg2);
  }}>{children}</react.Profiler>;
});
const result = size.fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default tmp4;
export const Profiles = obj;
