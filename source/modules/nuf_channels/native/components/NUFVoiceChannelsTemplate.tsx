// Module ID: 12585
// Function ID: 96769
// Name: NUFVoiceChannelsTemplate
// Dependencies: []
// Exports: default

// Module 12585 (NUFVoiceChannelsTemplate)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  const arg1 = channel.channel;
  const obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.w5HAll);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.description = intl2.string(arg1(dependencyMap[3]).t.Ww4hhq);
  obj.imageSrc = importDefault(dependencyMap[4]);
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.CTALabel = intl3.string(arg1(dependencyMap[3]).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = callback(closure_3[5]).handleVoiceChannelsOnboard();
    const obj = callback(closure_3[5]);
    const result1 = callback2(closure_3[6]).dismissGlobalKeyboard();
    const obj2 = callback2(closure_3[6]);
    const voiceChannel = callback(closure_3[7]).selectVoiceChannel(channel.id);
  };
  return jsx(importDefault(dependencyMap[2]), obj);
};
