// Module ID: 15417
// Function ID: 15418
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 15418, 1113, 15419, 15410, 2017, 6841, 2]
// Exports: default

// Module 15417 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6841 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 15410 */;
import NUFTemplateDefault from "NUFTemplate" /* 15418 */;
import AssetRegistryDefault from "AssetRegistry" /* 15419 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  NUFTemplateDefault;
  const intl = channel(1113).intl;
  const intl2 = channel(1113).intl;
  const intl3 = channel(1113).intl;
  return <tmp title={intl.string(channel(1113).t.w5HAll)} description={intl2.string(channel(1113).t.Ww4hhq)} imageSrc={AssetRegistryDefault} CTALabel={intl3.string(channel(1113).t.eIi3Om)} onCTAPress={function onCTAPress() {
    const obj = NUFChannelsManagerDefault;
    const result = obj.handleVoiceChannelsOnboard();
    const obj2 = KeyboardManagerUtilsAll;
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(channel.id);
  }} />;
};
