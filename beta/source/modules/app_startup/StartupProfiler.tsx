// Module ID: 11027
// Function ID: 11028
// Name: StartupProfiler
// Dependencies: [19, 21, 10, 2]
// Exports: default

// Module 11027 (StartupProfiler)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
let obj2 = {};
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
  function onRender(arg0, arg1, arg2) {
    const obj = AppStartPerformanceDefault;
    obj.mark("\u{1F3A8}", "" + obj2[profile] + profile + " " + arg1, arg2);
  }
  profile = profile.profile;
  const children = profile.children;
  let obj = profile(10);
  obj.mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
  obj2 = { id: profile, onRender, children };
  return <react.Profiler id={profile} onRender={onRender}>{children}</react.Profiler>;
};
export const Profiles = obj;
