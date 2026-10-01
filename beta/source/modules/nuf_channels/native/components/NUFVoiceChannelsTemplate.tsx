// Module ID: 13321
// Function ID: 13322
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 13322, 1115, 13323, 13311, 1876, 5723, 2]
// Exports: default

// Module 13321 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13311 */;
import NUFTemplateDefault from "NUFTemplate" /* 13322 */;
import AssetRegistryDefault from "AssetRegistry" /* 13323 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  NUFTemplateDefault;
  const intl = channel(1115).intl;
  const intl2 = channel(1115).intl;
  const intl3 = channel(1115).intl;
  return <tmp title={intl.string(channel(1115).t.w5HAll)} description={intl2.string(channel(1115).t.Ww4hhq)} imageSrc={AssetRegistryDefault} CTALabel={intl3.string(channel(1115).t.eIi3Om)} onCTAPress={function onCTAPress() {
    const obj = NUFChannelsManagerDefault;
    const result = obj.handleVoiceChannelsOnboard();
    const obj2 = KeyboardManagerUtilsAll;
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(channel.id);
  }} />;
};
