// Module ID: 13866
// Function ID: 13867
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 13867, 1114, 13868, 13856, 1874, 5492, 2]
// Exports: default

// Module 13866 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5492 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13856 */;
import NUFTemplateDefault from "NUFTemplate" /* 13867 */;
import _modDef13868 from "module_13868" /* 13868 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1114).intl;
  obj.title = intl.string(channel(1114).t.w5HAll);
  const intl2 = channel(1114).intl;
  obj.description = intl2.string(channel(1114).t.Ww4hhq);
  obj.imageSrc = _modDef13868;
  const intl3 = channel(1114).intl;
  obj.CTALabel = intl3.string(channel(1114).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};
