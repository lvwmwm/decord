// Module ID: 14075
// Function ID: 14076
// Name: NUFVoiceChannelsTemplate
// Dependencies: [19, 21, 14076, 1115, 14077, 14065, 1875, 5660, 2]
// Exports: default

// Module 14075 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5660 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 14065 */;
import NUFTemplateDefault from "NUFTemplate" /* 14076 */;
import _modDef14077 from "module_14077" /* 14077 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1115).intl;
  obj.title = intl.string(channel(1115).t.w5HAll);
  const intl2 = channel(1115).intl;
  obj.description = intl2.string(channel(1115).t.Ww4hhq);
  obj.imageSrc = _modDef14077;
  const intl3 = channel(1115).intl;
  obj.CTALabel = intl3.string(channel(1115).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};
