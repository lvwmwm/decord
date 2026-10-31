// Module ID: 17035
// Function ID: 17036
// Name: OrbsArcadePlayButton
// Dependencies: [19, 17, 9679, 17010, 21, 5014, 1113, 9532, 575, 5624, 5640, 7326, 17036, 504, 17037, 5258, 17038, 17017, 5634, 17026, 5635, 2]
// Exports: default

// Module 17035 (OrbsArcadePlayButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 17038 */;
import react from "react" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9679 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

function OrbsArcadePaidPlayLabel(size) {
  size = size.size;
  const orbCost = size.orbCost;
  const tmp = closure_8();
  let closure_1 = tmp;
  const intl = size(1113).intl;
  const obj = {
    count: orbCost,
    orbIconHook() {
      const OrbsIcon = size(dependencyMap[7]).OrbsIcon;
      return <OrbsIcon key="orbs-icon" size="xs" color={closure_1(dependencyMap[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT} />;
    }
  };
  const formatResult = intl.format(size(1113).t.oSWYca, obj);
  let arr = formatResult;
  if (!Array.isArray(formatResult)) {
    const items = [formatResult];
    arr = items;
  }
  return <View style={tmp.paidPlayLabel}>{arr.map((children, index) => {
    let tmp7;
    if (typeof children === "string") {
      const Text = Text_Text.Text;
      tmp7 = <Text key={arg1} style={closure_1.paidPlayText} variant={ButtonConstants.getButtonDefaultTextVariant(size)} color="control-primary-text-default" lineClamp={1}>{arg0}</Text>;
    } else {
      tmp7 = children;
    }
    return tmp7;
  })}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ paidPlayLabel: { flexDirection: "row", alignItems: "center" }, paidPlayText: { flexShrink: 1 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default function OrbsArcadePlayButton(game) {
  let canAffordPlay;
  let formatToPlainStringResult;
  let isPaidPlay;
  let state;
  let tmp19Result;
  let tmp19Result1;
  let tmp5Result3;
  let tmp5Result4;
  game = game.game;
  let DEFAULT_BUTTON_SIZE = game.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = game(5640).DEFAULT_BUTTON_SIZE;
  }
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7326)().analyticsLocations;
  const tmp4 = analyticsLocations(17036)(game);
  const text = tmp4.text;
  ({ isPaidPlay, canAffordPlay } = tmp4);
  let obj = game(504);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const tmp7 = analyticsLocations(17037)(game, stateFromStores);
  const items2 = [OrbsArcadeStore];
  const items3 = [game.id];
  const obj2 = game(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.isLaunchingGame(game.id), items3);
  const items4 = [game, analyticsLocations];
  const callback = react.useCallback(() => {
    const obj = analyticsLocations(dependencyMap[15]);
    obj.hideActionSheet();
    state.setState({ scrollToQuestsSection: true });
  }, []);
  const callback1 = react.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items4);
  if (null != stateFromStores) {
    const tmp5Result = game(17017);
    if (tmp5Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      const Button2 = tmp5(5634).Button;
      const intl3 = tmp5(1113).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      const obj4 = { count: tmp5Result3.getOrbsArcadeClaimableRewards(game.rewards, stateFromStores).length };
      const v18ToNc = tmp5(1113).t["18ToNc"];
      tmp19Result1 = <Button2 grow size={DEFAULT_BUTTON_SIZE} variant="primary" text={formatToPlainString2(v18ToNc, obj4)} disabled onPress="a" />;
      tmp5Result3 = game(17017);
    }
    return tmp19Result1;
  }
  if (null != tmp7) {
    const obj5 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text: formatToPlainStringResult, disabled: true, onPress: "a" };
    const Button = tmp5(5634).Button;
    const tmp14 = jsx;
    if (null != tmp7.timeUntilNextRound) {
      const intl2 = tmp5(1113).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj6 = { duration: tmp5Result4.formatOrbsArcadeTimeUntil(tmp7.timeUntilNextRound) };
      const prop = tmp5(1113).t["Uk+BE3"];
      tmp5Result4 = game(17026);
      formatToPlainStringResult = formatToPlainString(prop, obj6);
    } else {
      const intl = tmp5(1113).intl;
      formatToPlainStringResult = intl.string(tmp5(1113).t.iJjbMd);
    }
    tmp19Result1 = tmp14(Button, obj5);
  } else if (canAffordPlay) {
    const obj7 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, textElement: tmp19Result, disabled: null == game.applicationId, loading: stateFromStores1, onPress: callback1 };
    tmp19Result = undefined;
    const BaseTextButton = tmp5(5635).BaseTextButton;
    if (isPaidPlay) {
      if (null != game.orbCost) {
        const obj8 = { orbCost: game.orbCost, size: DEFAULT_BUTTON_SIZE };
        tmp19Result = tmp19(OrbsArcadePaidPlayLabel, obj8);
      }
    }
    tmp19Result1 = tmp19(BaseTextButton, obj7);
  } else {
    const obj9 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, onPress: callback };
    tmp19Result1 = tmp19(tmp5(5634).Button, obj9);
  }
};
