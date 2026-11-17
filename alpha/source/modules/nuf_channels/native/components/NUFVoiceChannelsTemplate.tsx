// Module ID: 16121
// Function ID: 16122
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 16122, 1113, 16123, 16114, 2020, 6933, 2]
// Exports: default

// Module 16121 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2020 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6933 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 16114 */;
import NUFTemplateDefault from "NUFTemplate" /* 16122 */;
import AssetRegistryDefault from "AssetRegistry" /* 16123 */;
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
