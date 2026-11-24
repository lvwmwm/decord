// Module ID: 8318
// Function ID: 8319
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 8319, 1112, 8320, 8311, 2018, 6671, 2]
// Exports: default

// Module 8318 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2018 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6671 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 8311 */;
import NUFTemplateDefault from "NUFTemplate" /* 8319 */;
import AssetRegistryDefault from "AssetRegistry" /* 8320 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  NUFTemplateDefault;
  const intl = channel(1112).intl;
  const intl2 = channel(1112).intl;
  const intl3 = channel(1112).intl;
  return <tmp title={intl.string(channel(1112).t.w5HAll)} description={intl2.string(channel(1112).t.Ww4hhq)} imageSrc={AssetRegistryDefault} CTALabel={intl3.string(channel(1112).t.eIi3Om)} onCTAPress={function onCTAPress() {
    const obj = NUFChannelsManagerDefault;
    const result = obj.handleVoiceChannelsOnboard();
    const obj2 = KeyboardManagerUtilsAll;
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(channel.id);
  }} />;
};
