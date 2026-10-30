// Module ID: 15146
// Function ID: 15147
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 15147, 1114, 15148, 15139, 1889, 6700, 2]
// Exports: default

// Module 15146 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1889 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 15139 */;
import NUFTemplateDefault from "NUFTemplate" /* 15147 */;
import AssetRegistryDefault from "AssetRegistry" /* 15148 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  NUFTemplateDefault;
  const intl = channel(1114).intl;
  const intl2 = channel(1114).intl;
  const intl3 = channel(1114).intl;
  return <tmp title={intl.string(channel(1114).t.w5HAll)} description={intl2.string(channel(1114).t.Ww4hhq)} imageSrc={AssetRegistryDefault} CTALabel={intl3.string(channel(1114).t.eIi3Om)} onCTAPress={function onCTAPress() {
    const obj = NUFChannelsManagerDefault;
    const result = obj.handleVoiceChannelsOnboard();
    const obj2 = KeyboardManagerUtilsAll;
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(channel.id);
  }} />;
};
