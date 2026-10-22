// Module ID: 8915
// Function ID: 8916
// Name: StageChannelUpsell
// Dependencies: [32, 19, 17, 4825, 8916, 8852, 1087, 21, 4969, 587, 6894, 1202, 8099, 5655, 8917, 5220, 1128, 5230, 6658, 8918, 2002, 5196, 2]
// Exports: default

// Module 8915 (StageChannelUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ChannelRecord from "ChannelRecord" /* 4825 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import Text_Text from "Text/Text" /* 5220 */;
import components_Button_Button from "components/Button/Button" /* 5230 */;
import FastImageDefault from "FastImage" /* 5655 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import Pressables from "Pressables" /* 6894 */;
import AssetRegistryDefault from "AssetRegistry" /* 8099 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 8852 */;
import StageChannelUpsellCardStore from "StageChannelUpsellCardStore" /* 8916 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8917 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let obj2;
const View = react_native.View;
const createChannelRecord = ChannelRecord.createChannelRecord;
let closure_6 = StageChannelUpsellCardStore.useStageChannelUpsellCardStore;
let closure_7 = GuildEventModalConstants.CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
let obj = { container: obj2, image: { marginBottom: 16 }, closeContainer: { position: "absolute", top: 14, right: 14 }, header: { lineHeight: 20, marginBottom: 4 }, description: { textAlign: "center", marginBottom: 4 }, button: { marginTop: 12, alignSelf: "stretch" } };
obj2 = { flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: nativeDefault.radii.sm };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  let Button;
  let Icon;
  let closure_2;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj10;
  let obj3;
  let obj8;
  ({ guildId: require, onCreate: importDefault } = arg0);
  let tmp = closure_12();
  const tmp2 = _slicedToArray(closure_6(), 2);
  const tmp3 = tmp2[1];
  dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container, children: items };
    let obj2 = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer, children: closure_9(Icon, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    obj3 = { source: AssetRegistryDefault };
    Icon = native.Icon;
    items = [closure_9(PressableOpacity, obj2), , , , , ];
    let obj4 = { source: AssetRegistryDefault2, style: tmp.image };
    const tmp11 = FastImageDefault;
    items[1] = closure_9(tmp11, obj4);
    const obj5 = { style: tmp.header, variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.Sx8Ezi) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items[2] = closure_9(Text, obj5);
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t.JUzPhm) };
    const Text2 = Text_Text.Text;
    intl2 = intl5.intl;
    items[3] = closure_9(Text2, obj6);
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.format(intl5.t.Vh7rP7, obj8) };
    const Text3 = Text_Text.Text;
    intl3 = intl5.intl;
    obj8 = {
      suggestionsHook(children, arg1) {
          const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
          return closure_1_9(require("Text/Text").Text, obj, arg1);
        }
    };
    items[4] = closure_9(Text3, obj7);
    const obj9 = { style: tmp.button, children: closure_9(Button, obj10) };
    obj10 = {
      variant: "secondary",
      size: "md",
      text: intl4.string(intl5.t["X/3SyA"]),
      onPress: function handleCreateChannel() {
          let obj = ModalActionCreatorsDefault;
          obj.popWithKey(closure_7);
          const obj2 = ModalActionCreatorsDefault;
          const obj3 = {
            guildId: require,
            channelType: ChannelTypes.GUILD_STAGE_VOICE,
            onChannelCreated(id) {
              const obj = { id, type: constants.GUILD_STAGE_VOICE };
              const tmp = createChannelRecord(obj);
              if (null != tmp) {
                closure_1_1(tmp);
              }
            },
            onClose() {
              const obj = closure_1_1(closure_1_2[18]);
              obj.popWithKey(closure_1_11);
            }
          };
          obj2.pushLazy(asyncRequire(8918, dependencyMap.paths), obj3, CREATE_CHANNEL_MODAL_KEY);
          closure_2();
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        }
    };
    Button = components_Button_Button.Button;
    intl4 = intl5.intl;
    items[5] = closure_9(View, obj9);
    tmp4 = closure_10(View, obj);
  }
  return tmp4;
};
