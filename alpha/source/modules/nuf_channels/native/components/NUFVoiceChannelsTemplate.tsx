// Module ID: 14856
// Function ID: 14857
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 14857, 1112, 14858, 14849, 2018, 6529, 2]
// Exports: default

// Module 14856 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2018 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6529 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 14849 */;
import NUFTemplateDefault from "NUFTemplate" /* 14857 */;
import AssetRegistryDefault from "AssetRegistry" /* 14858 */;
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
