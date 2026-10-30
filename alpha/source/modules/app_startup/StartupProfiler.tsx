// Module ID: 11528
// Function ID: 11529
// Name: StartupProfiler
// Dependencies: [19, 21, 10, 2]
// Exports: default

// Module 11528 (StartupProfiler)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
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
  obj2[key10073] = "";
  let tmp6 = obj3[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      obj2[tmp3] = " ";
      let setLevelsResult = setLevels(tmp6[tmp3], "  ");
      continue;
    }
  }
  continue;
}
const result = size.fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(profile) {
  profile = profile.profile;
  const children = profile.children;
  const tmp = profile(10);
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
};
export const Profiles = obj;
