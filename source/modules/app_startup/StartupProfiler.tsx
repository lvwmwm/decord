// Module ID: 10883
// Function ID: 84476
// Name: setLevels
// Dependencies: [31, 33, 20, 2]
// Exports: default

// Module 10883 (setLevels)
import result from "result";
import { jsx } from "jsxProd";

let obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
let closure_4 = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    let tmp = key10006;
    let tmp2 = closure_4;
    closure_4[key10006] = arg1;
    let tmp3 = setLevels;
    let tmp4 = setLevels(arg0[key10006], arg1 + " ");
    continue;
  }
}
setLevels({ [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } }, "");
const result = require("AppStartPerformance").fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(children) {
  const profile = children.profile;
  let obj = profile(20);
  obj.mark("\u{1F3A8}", "" + table[profile] + profile + " render");
  obj = {
    id: profile,
    onRender(id, arg1, actualDuration, treeBaseDuration, actualStartTime, c87) {
      profile(outer1_1[2]).mark("\u{1F3A8}", "" + outer1_4[profile] + profile + " " + arg1, actualDuration);
    },
    children: children.children
  };
  return <Profiler.Profiler id={profile} onRender={function onRender(id, arg1, actualDuration, treeBaseDuration, actualStartTime, c87) {
    profile(outer1_1[2]).mark("\u{1F3A8}", "" + outer1_4[profile] + profile + " " + arg1, actualDuration);
  }}>{arg0.children}</Profiler.Profiler>;
};
export const Profiles = obj;
