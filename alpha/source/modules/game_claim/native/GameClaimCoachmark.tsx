// Module ID: 16529
// Function ID: 16530
// Name: GameClaimCoachmark
// Dependencies: [5, 19, 17, 1074, 2038, 21, 576, 16530, 10375, 5191, 4756, 16531, 9198, 1115, 5824, 5339, 5897, 4752, 5186, 8855, 7558, 7562, 2]
// Exports: getScaledGameClaimNoticeHeight

// Module 16529 (GameClaimCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ButtonConstants from "ButtonConstants" /* 5191 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 9198 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10375 */;
import GameClaimCardStack from "GameClaimCardStack" /* 16530 */;
import UnclaimedGamesActionCreators from "UnclaimedGamesActionCreators" /* 16531 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const GameClaimCardStackDefault = tmp5(16530);
require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, RelativeMarketingURLs: metroRequire } = Constants);
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
let closure_12 = 2 * nativeDefault.space.PX_12;
const createStyles = fn(4756);
let obj = { card: { padding: nativeDefault.space.PX_12 }, closeButton: null, centeredText: null, body: null, cta: null };
let size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj.closeButton = size;
obj.centeredText = { textAlign: "center" };
let obj3 = { padding: nativeDefault.space.PX_12 };
obj.body = { marginTop: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_4 };
obj.cta = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
let obj5 = { marginTop: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default noop.memo((arg0) => {
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = closure_13();
  let first = UnclaimedGamesActionCreators.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const intl = tmp2(1115).intl;
  const coverImageUrl = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = tmp2(1115).intl;
    const string = intl4.string;
    const t = tmp2(1115).t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    const obj2 = { variant: "secondary", style: tmp.card, children: null };
    let obj3 = {
      accessibilityRole: "button",
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_8(tmp2(5897).XSmallIcon, { size: "sm", color: "text-default" })
    };
    const items = [closure_8(tmp2(5339).PressableOpacity, obj3), , , , ];
    let obj4 = { imageSrc: coverImageUrl };
    items[1] = closure_8(GameClaimCardStackDefault, obj4);
    let obj5 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp.centeredText, children: null };
    const intl2 = tmp2(1115).intl;
    const obj6 = { gameName: tmp8 };
    obj5.children = intl2.format(tmp2(1115).t.Q11WTQ, obj6);
    items[2] = closure_8(tmp2(4752).Text, obj5);
    const obj7 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    obj7.style = items1;
    obj7.children = stringResult;
    items[3] = closure_8(tmp2(4752).Text, obj7);
    const obj8 = { style: tmp.cta, children: null };
    const obj9 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
    const intl3 = tmp2(1115).intl;
    obj9.text = intl3.string(tmp2(1115).t["2u6ZlY"]);
    obj9.icon = closure_8(tmp2(8855).LinkExternalSmallIcon, { size: "xs", color: "white" });
    obj9.onPress = asyncGeneratorStep(async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              require(constants2.TAKE_ACTION);
              v1 = 1;
              v3 = 1;
              const obj5 = { value: v1(7558).redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, v3(7562).LoginHandoffSource.GAME_CLAIM), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          v3 = tmp;
          throw tmp12;
        }
      }
    });
    obj8.children = closure_8(tmp2(5186).Button, obj9);
    items[4] = closure_8(View, obj8);
    obj2.children = items;
    return closure_9(tmp2(5824).Card, obj2);
  }
  const tmp6Result = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a));
});
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + GameClaimCardStack.CARD_STACK_HEIGHT;
  const sum2 = sum1 + useScaledTextLineHeight.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + nativeDefault.space.PX_4;
  const result = 2 * useScaledTextLineHeight.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + nativeDefault.space.PX_8;
  return sum4 + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_82;
};
