// Module ID: 15727
// Function ID: 120219
// Name: VoicePanelNsfwAlert
// Dependencies: []
// Exports: default

// Module 15727 (VoicePanelNsfwAlert)
importAll(dependencyMap[0]);
const isGuildNSFW = arg1(dependencyMap[1]).isGuildNSFW;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const importDefault = guildId.channelId;
  let obj = arg1(closure_2[4]);
  closure_2 = obj.useDismissModalCallback();
  const tmp = isGuildNSFW(guild.getGuild(guildId));
  obj = {};
  const intl = arg1(closure_2[6]).intl;
  const string = intl.string;
  const t = arg1(closure_2[6]).t;
  if (tmp) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  obj.title = stringResult;
  const intl2 = arg1(closure_2[6]).intl;
  const string2 = intl2.string;
  const t2 = arg1(closure_2[6]).t;
  if (tmp) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj.content = string2Result;
  obj = {};
  const obj1 = {
    variant: "primary",
    onPress() {
      channelId(callback[7]).nsfwAgree(guildId);
      const obj = channelId(callback[7]);
      const voiceChannel = channelId(callback[8]).selectVoiceChannel(channelId);
      callback();
    }
  };
  const intl3 = arg1(closure_2[6]).intl;
  obj1.text = intl3.string(arg1(closure_2[6]).t.wVq7uo);
  const items = [callback(arg1(closure_2[5]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      channelId(callback[7]).nsfwReturnToSafety(guildId);
      callback();
    }
  };
  const intl4 = arg1(closure_2[6]).intl;
  obj2.text = intl4.string(arg1(closure_2[6]).t./g10LC);
  items[1] = callback(arg1(closure_2[5]).AlertActionButton, obj2, "add-profile-picture");
  obj.children = items;
  obj.actions = callback2(arg1(closure_2[4]).AlertActions, obj);
  return callback(arg1(closure_2[5]).AlertModal, obj);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";
