// Module ID: 10845
// Function ID: 84214
// Name: setLevels
// Dependencies: []
// Exports: default

// Module 10845 (setLevels)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
let closure_4 = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    let tmp = key10006;
    let tmp2 = closure_4;
    closure_4[key10006] = arg1;
    let tmp3 = closure_5;
    let tmp4 = closure_5(arg0[key10006], arg1 + " ");
  }
}
setLevels({ [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } }, "");
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(children) {
  const profile = children.profile;
  const importDefault = profile;
  let obj = importDefault(dependencyMap[2]);
  obj.mark("\u{1F3A8}", "" + closure_4[profile] + profile + " render");
  obj = {
    id: profile,
    onRender(id, arg1, actualDuration, treeBaseDuration, actualStartTime, arg5) {
      profile(closure_1[2]).mark("\u{1F3A8}", "" + closure_4[closure_0] + profile + " " + arg1, actualDuration);
    },
    children: children.children
  };
  return <Profiler.Profiler {...obj} />;
};
export const Profiles = obj;
