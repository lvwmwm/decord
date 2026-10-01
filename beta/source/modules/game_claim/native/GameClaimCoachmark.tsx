// Module ID: 15822
// Function ID: 15823
// Name: GameClaimCoachmark
// Dependencies: [5, 19, 17, 1074, 2042, 21, 576, 15823, 9578, 5286, 4836, 15824, 8384, 1115, 5919, 5435, 5992, 4832, 5281, 8037, 6735, 6739, 2]
// Exports: getScaledGameClaimNoticeHeight

// Module 15822 (GameClaimCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8384 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import GameClaimCardStack from "GameClaimCardStack" /* 15823 */;
import UnclaimedGamesActionCreators from "UnclaimedGamesActionCreators" /* 15824 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c0, c1;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp2;
let tmp5;
const intl5 = tmp2(1115);
const Text_Text = tmp2(4832);
const components_Button_Button = tmp2(5281);
const Pressables = tmp2(5435);
const Card_Card = tmp2(5919);
const XSmallIcon = tmp2(5992);
const LinkExternalSmallIcon = tmp2(8037);
const GameClaimCardStackDefault = tmp5(15823);
const View = react_native.View;
({ GuildFeatures: hasOwnProperty, RelativeMarketingURLs: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
let closure_12 = 2 * nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { card: obj2, closeButton: size, centeredText: { textAlign: "center" }, body: obj3, cta: obj4 };
obj2 = { padding: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let Button;
  let guild;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj6;
  let obj9;
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = closure_13();
  const tmp2 = require;
  let obj = UnclaimedGamesActionCreators;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const tmp6 = useGameNameAndCoverImageDefault;
  const intl = intl5.intl;
  const coverImageUrl = tmp6(first, intl.string(intl5.t.VQq92a)).coverImageUrl;
  tmp6(first, intl.string(intl5.t.VQq92a));
  if (null == coverImageUrl) {
    return null;
  } else {
    let stringResult;
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = intl5.intl;
    const string = intl4.string;
    const t = intl5.t;
    if (hasItem) {
      stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    let obj2 = { variant: "secondary", style: tmp.card, children: items };
    const tmp11 = closure_8;
    const Card = Card_Card.Card;
    let obj3 = {
      accessibilityRole: "button",
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_8(XSmallIcon.XSmallIcon, { size: "sm", color: "text-default" })
    };
    const PressableOpacity = Pressables.PressableOpacity;
    items = [closure_8(PressableOpacity, obj3), , , , ];
    let obj4 = { imageSrc: coverImageUrl };
    items[1] = closure_8(GameClaimCardStackDefault, obj4);
    let obj5 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp.centeredText, children: intl2.format(intl5.t.Q11WTQ, obj6) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    obj6 = { gameName: tmp8 };
    items[2] = closure_8(Text, obj5);
    const obj7 = { variant: "text-sm/normal", color: "text-overlay-light", style: items1, children: stringResult };
    items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    items[3] = closure_8(Text_Text.Text, obj7);
    const obj8 = { style: tmp.cta, children: closure_8(Button, obj9) };
    obj9 = {
      variant: "primary",
      size: "sm",
      text: intl3.string(intl5.t["2u6ZlY"]),
      icon: closure_8(LinkExternalSmallIcon.LinkExternalSmallIcon, { size: "xs", color: "white" }),
      iconPosition: "end",
      onPress: _asyncToGenerator(async (arg0, value) => {
          let v1;
          let v3;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  require(constants2.TAKE_ACTION);
                  const obj2 = c1(dependencyMap[20]);
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, c0(dependencyMap[21]).LoginHandoffSource.GAME_CLAIM), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp11) {
              c0 = 3;
              throw tmp11;
            }
          }
        })
    };
    Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items[4] = closure_8(View, obj8);
    return closure_9(Card, obj2);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + GameClaimCardStack.CARD_STACK_HEIGHT;
  const obj = useScaledTextLineHeight;
  const sum2 = sum1 + obj.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + nativeDefault.space.PX_4;
  const obj2 = useScaledTextLineHeight;
  const result = 2 * obj2.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + nativeDefault.space.PX_8;
  return sum4 + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_82;
};
